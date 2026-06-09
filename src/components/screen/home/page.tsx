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
          className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6"
        >
          <div className="rounded-3xl border border-border/70 bg-black/95 text-white p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Ready to launch
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Build a user-friendly RBAC panel with Trks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              A modern dashboard for organizations, users, roles, API keys, and
              webhooks that is easy for teams to understand and operate.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/docs">
                <Button variant="light" className="group gap-2">
                  Get started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="light">
                <Link href="https://trks-rbac-admin.netlify.app/login/">
                  Sign in
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeUp>
    </main>
  );
}
