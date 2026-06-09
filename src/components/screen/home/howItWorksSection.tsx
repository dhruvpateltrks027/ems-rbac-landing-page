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
      <div className="rounded-3xl border border-border/70 bg-white/95 p-8 shadow-sm">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            How the platform works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A clear workflow for your RBAC panel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Guide users through organizations, members, roles, and integrations so they understand the product instantly.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
