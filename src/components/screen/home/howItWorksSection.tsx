import { FadeUp, ScaleIn } from "@/components/common/animation";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import React from "react";

const steps = [
  {
    title: "Start with organizations",
    description:
      "Create tenant workspaces that isolate users, settings, and access controls for each team.",
  },
  {
    title: "Invite members and assign roles",
    description:
      "Onboard users quickly, assign roles, and manage access with clear team permissions.",
  },
  {
    title: "Secure integrations",
    description:
      "Issue service API keys, configure webhook delivery, and connect your backend safely.",
  },
  {
    title: "Monitor and iterate",
    description:
      "Track active members, role usage, and organization activity from a simple dashboard.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-7xl px-4 pb-24 lg:px-6">
      <FadeUp>
        <div className="rounded-3xl border border-border/70 bg-white/95 p-8 shadow-sm">
          <FadeUp delay={0.05}>
            <div className="mb-10 text-center">
              <FadeUp delay={0}>
                <div className="relative inline-flex rounded-full p-[1px] overflow-hidden">
                  <div className="absolute inset-0 animate-spin-slow bg-border border-border/70" />
                  <div className="relative flex items-center gap-2 rounded-full bg-white px-4 py-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                    <AnimatedShinyText
                      shimmerWidth={120}
                      className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 whitespace-nowrap"
                    >
                      How the platform works
                    </AnimatedShinyText>

                  </div>
                </div>
              </FadeUp>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A clear workflow for your RBAC panel
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Guide users through organizations, members, roles, and integrations so they understand the product instantly.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ScaleIn key={step.title} delay={0.1 + index * 0.08} className="h-full">
                <div className="flex flex-col rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm h-full">
                  <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foreground text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}