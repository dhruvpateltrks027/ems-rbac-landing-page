"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badget";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";

type AuthResponse<T> = {
  success?: boolean;
  message?: string;
  data?: T | null;
};

type AuthTokens = {
  accessToken: string;
  refreshToken: string;
  requiresVerification?: boolean;
  tempToken?: string;
};

type VerifyPayload = {
  tempToken: string;
  otp: string;
};

const API_BASE =
  process.env.NEXT_PUBLIC_EMS_RBAC_API_URL || "http://localhost:5005/api/v1";

const storageKeys = {
  accessToken: "trks-rbac-access-token",
  refreshToken: "trks-rbac-refresh-token",
};

async function postJson<T>(endpoint: string, body: unknown) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const json = (await response
    .json()
    .catch(() => null)) as AuthResponse<T> | null;

  if (!response.ok || json?.success === false) {
    return {
      success: false,
      message: json?.message || `Request failed (${response.status})`,
      data: null as T | null,
    };
  }

  return {
    success: true,
    message: json?.message || "Success",
    data: (json?.data ?? null) as T | null,
  };
}

function saveSession(tokens: AuthTokens) {
  if (typeof window === "undefined") return;
  localStorage.setItem(storageKeys.accessToken, tokens.accessToken);
  localStorage.setItem(storageKeys.refreshToken, tokens.refreshToken);
}

export default function SignUp() {
  const router = useRouter();

  const [stage, setStage] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tempToken, setTempToken] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleSession = (tokens: AuthTokens) => {
    saveSession(tokens);
    router.replace("/platform");
    router.refresh();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (stage === "otp") {
        // ✅ FIXED: guard against null tempToken before OTP verify
        if (!tempToken) {
          setError("Session expired. Please sign up again.");
          setStage("form");
          return;
        }
        const payload: VerifyPayload = { tempToken, otp: otp.trim() };
        const result = await postJson<AuthTokens>(
          "/client/auth/sign-up-verify-otp",
          payload,
        );

        if (!result.success || !result.data) {
          setError(result.message ?? "OTP verification failed.");
          return;
        }

        setMessage(result.message ?? "Account verified!");
        handleSession(result.data);
        return;
      }

      const result = await postJson<AuthTokens>("/client/auth/sign-up", {
        email: email.trim(),
        password,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        ...(username.trim() ? { username: username.trim() } : {}),
        ...(phoneNumber.trim() ? { phoneNumber: phoneNumber.trim() } : {}),
      });

      if (!result.success || !result.data) {
        setError(result.message ?? "Sign-up failed.");
        return;
      }

      if (result.data.accessToken && result.data.refreshToken) {
        setMessage(result.message || "Account created successfully.");
        handleSession(result.data);
        return;
      }

      if (result.data.requiresVerification && result.data.tempToken) {
        setTempToken(result.data.tempToken);
        setStage("otp");
        setMessage("We sent a verification code to your email.");
        return;
      }

      setError("Unexpected sign-up response.");
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4 py-8">
      {/* Clerk-style decorative background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-100/40 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[460px]">
        {/* Card */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/60">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3">
            <div className="flex items-center gap-2.5">
             <div className="flex h-9 w-9 items-center justify-center rounded bg-slate-900 text-md font-semibold text-white">
                TR
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Trks RBAC
                </p>
                <p className="text-[11px] text-slate-400">
                  Clerk-style access for teams
                </p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              <Link
                href="/"
                className="text-slate-600 flex items-center hover:text-slate-900"
              >
                 <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to site
              </Link>
            </Badge>
          </div>

          <div className="px-8 pb-2 pt-8 text-center">
            <h1 className="text-[22px] font-semibold tracking-tight text-slate-900">
              {stage === "otp" ? "Verify your email" : "Create your account"}
            </h1>
            <p className="mt-1.5 text-sm text-slate-500">
              {stage === "otp"
                ? "Enter the verification code we sent to your email."
                : "No credit card required. Fill in your details to get started."}
            </p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8 pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {stage === "form" && (
                <>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label className="text-sm  text-slate-700">
                        First name
                      </Label>
                      <Input
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className="h-10 rounded-lg border-gray-200 bg-gray-50 text-sm placeholder:text-gray-400 focus:border-violet-400 focus:bg-white focus:ring-violet-400/20"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm  text-slate-700">
                        Last name
                      </Label>
                      <Input
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="h-10 rounded-lg border-gray-200 bg-gray-50 text-sm placeholder:text-gray-400 focus:border-violet-400 focus:bg-white focus:ring-violet-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label className="text-sm  text-slate-700">
                        Username{" "}
                        <span className="font-normal text-slate-400">
                          (optional)
                        </span>
                      </Label>
                      <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="johndoe"
                        className="h-10 rounded-lg border-gray-200 bg-gray-50 text-sm placeholder:text-gray-400 focus:border-violet-400 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm  text-slate-700">
                        Phone{" "}
                        <span className="font-normal text-slate-400">
                          (optional)
                        </span>
                      </Label>
                      <Input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 555 000 0000"
                        className="h-10 rounded-lg border-gray-200 bg-gray-50 text-sm placeholder:text-gray-400 focus:border-violet-400 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm  text-slate-700">
                      Email address
                    </Label>
                    <Input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="h-10 rounded-lg border-gray-200 bg-gray-50 text-sm placeholder:text-gray-400 focus:border-violet-400 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm  text-slate-700">
                      Password
                    </Label>
                    <Input
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="h-10 rounded-lg border-gray-200 bg-gray-50 text-sm focus:border-violet-400 focus:bg-white"
                    />
                  </div>
                </>
              )}

              {stage === "otp" && (
                <div className="space-y-1.5">
                  <Label className="text-sm  text-slate-700">
                    Verification code
                  </Label>
                  <Input
                    required
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="123456"
                    className="h-12 rounded-lg border-gray-200 bg-gray-50 text-center text-lg tracking-[0.4em] focus:border-violet-400 focus:bg-white focus:ring-violet-400/20"
                  />
                </div>
              )}

              {/* Feedback */}
              {message && (
                <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  <span>✓</span>
                  <span>{message}</span>
                </div>
              )}
              {error && (
                <div className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  <span>✕</span>
                  <span>{error}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="h-10 w-full"
              >
                {loading
                  ? "Please wait…"
                  : stage === "otp"
                    ? "Verify and continue "
                    : "Create account "}
                    <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {stage === "otp" && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setStage("form");
                    setOtp("");
                    setTempToken(null);
                    setMessage(null);
                    setError(null);
                  }}
                  className="h-10 w-full rounded-lg border-gray-200 text-sm text-slate-600 hover:bg-gray-50"
                >
                  ← Back to form
                </Button>
              )}
            </form>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-8 py-4">
            <p className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/auth/sign-in"
                className="font-semibold text-violet-600 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          Secured by Trks RBAC · © {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
