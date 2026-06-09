"use client";
import ClerkBackground from "@/components/common/clerk-background";
import PlatformOverview from "./platform-overview";
import TrustedRow from "./trustedRow";
import QuickstartSection from "./quickstartSection";
import HowItWorksSection from "./howItWorksSection";
import Hero from "./hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/common/animation";

export default function Home() {
  return (
    <main>
      <ClerkBackground />
      <Hero />
      <TrustedRow />
      <PlatformOverview />
      <HowItWorksSection />
      <QuickstartSection />
      <FadeUp delay={0}>
    
        <section
          id="contact"
          className="mx-auto w-full max-w-6xl px-4 pb-16 sm:pb-20 lg:px-6"
        >
          <div className="rounded-2xl sm:rounded-3xl border border-border/70 bg-black/95 px-6 py-8 text-center text-white shadow-sm sm:px-8 sm:py-10 md:px-12 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm sm:tracking-[0.24em]">
              Ready to launch
            </p>

            <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl md:text-4xl ">
              Build a user-friendly RBAC panel with Trks
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              A modern dashboard for organizations, users, roles, API keys, and
              webhooks that is easy for teams to understand and operate.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/docs" className="w-full sm:w-auto">
                <Button
                  variant="light"
                  className="group h-11 w-full sm:w-auto sm:min-w-[160px]"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get started
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>

              <Link
                href="https://trks-rbac-admin.netlify.app/login/"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="light"
                  className="h-11 w-full sm:w-auto sm:min-w-[160px]"
                >
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}
