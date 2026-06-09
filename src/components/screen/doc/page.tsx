
"use client";
import React, { useState } from "react";
import type { StaticImageData } from "next/image";
import { AuthSteps } from "@/lib/constants/docs/authSteps";
import { OrgSteps } from "@/lib/constants/docs/orgSteps";
import { UserSteps } from "@/lib/constants/docs/userSteps";
import { MemberSteps } from "@/lib/constants/docs/memberSteps";
import { RoleSteps } from "@/lib/constants/docs/roleSteps";
import { ConfigureSteps } from "@/lib/constants/docs/configureSteps";
import { WebhookSteps } from "@/lib/constants/docs/webhookSteps";
import { ServiceApiKeySteps } from "@/lib/constants/docs/serviceApiKeySteps";
import { FadeUp } from "@/components/common/animation";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export type StepItem = {
  number: number;
  label: string;
  heading: string;
  description: string;
  route: { method: string; path: string };
  checklist: string[];
  image?: StaticImageData;
};

const methodColors: Record<string, string> = {
  GET: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  POST: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  PUT: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  PATCH: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  DELETE: "bg-red-500/15 text-red-400 border border-red-500/30",
};

function RouteBox({
  method,
  path,
  dotColor = "bg-emerald-400",
}: {
  method: string;
  path: string;
  dotColor?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#020817] p-4 shadow-xl">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          Endpoint
        </span>
        <div className={`h-2 w-2 rounded-full ${dotColor}`} />
      </div>
      <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3">
        <span
          className={`rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${methodColors[method]}`}
        >
          {method}
        </span>
        <code className="truncate text-sm text-slate-300">{path}</code>
      </div>
    </div>
  );
}

function Checklist({
  items,
  iconColor = "text-emerald-500",
}: {
  items: string[];
  iconColor?: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
          <svg
            className={`mt-0.5 h-4 w-4 flex-shrink-0 ${iconColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeader({
  badge,
  badgeColor,
  title,
  subtitle,
}: {
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-7 space-y-4">
      {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
        <span className={`h-2 w-2 rounded-full ${badgeColor}`} />
        {badge}
      </div> */}
         <FadeUp delay={0}>
        <div className="relative  inline-flex rounded-full p-[1px] overflow-hidden">
          <div className="absolute inset-0 animate-spin-slow bg-border border-border/70" />
          <div className="relative flex items-center gap-2 rounded-full bg-white px-4 py-2">
             <span className={`h-2 w-2 rounded-full ${badgeColor}`} />
            <AnimatedShinyText
              shimmerWidth={120}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap"
            >
              {badge}
            </AnimatedShinyText>
          </div>
        </div>
      </FadeUp>
      <div>

      <h1 className="md:text-4xl sm:text-3xl text-2xl mb-1 font-semibold leading-tight text-slate-950">
        {title}
      </h1>
      <p className="max-w-xl md:text-base text-sm md:leading-7 leading-6 text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

const sectionColors: Record<
  string,
  { dot: string; icon: string; badge: string }
> = {
  emerald: {
    dot: "bg-emerald-400",
    icon: "text-emerald-500",
    badge: "bg-emerald-500",
  },
  sky: { dot: "bg-sky-400", icon: "text-sky-500", badge: "bg-sky-500" },
  violet: {
    dot: "bg-violet-400",
    icon: "text-violet-500",
    badge: "bg-violet-500",
  },
  rose: { dot: "bg-rose-400", icon: "text-rose-500", badge: "bg-rose-500" },
  amber: {
    dot: "bg-amber-400",
    icon: "text-amber-500",
    badge: "bg-amber-500",
  },
  indigo: {
    dot: "bg-indigo-400",
    icon: "text-indigo-500",
    badge: "bg-indigo-500",
  },
  teal: { dot: "bg-teal-400", icon: "text-teal-500", badge: "bg-teal-500" },
};

function ImageCard({ image }: { image: StaticImageData }) {
  return (
    <div className="overflow-hidden md:rounded-2xl rounded-lg border border-slate-200 bg-white shadow-sm">
      <img
        src={image.src}
        alt={image.src}
        className="h-full w-full object-cover"
      />
    </div>
  );
}


function StepMeta({
  step,
  stepIndex,
  c,
}: {
  step: StepItem;
  stepIndex: number;
  c: { dot: string; icon: string; badge: string };
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {/* ✅ FIX: use stepIndex + 1 so numbering is always 1, 2, 3... per section */}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          {stepIndex + 1}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {step.label}
        </span>
      </div>
      <div>
        <h2 className="md:text-2xl text-xl  font-semibold text-slate-950">{step.heading}</h2>
        <p className="text-sm leading-7 text-slate-500">{step.description}</p>
      </div>
      {/* <RouteBox
        method={step.route.method}
        path={step.route.path}
        dotColor={c.dot}
      /> */}
      <Checklist items={step.checklist} iconColor={c.icon} />
    </div>
  );
}

function StepSection({
  steps,
  color,
  showGrid = false,
}: {
  steps: StepItem[];
  color: keyof typeof sectionColors;
  showGrid?: boolean;
}) {
  const c = sectionColors[color];
  return (
    <div className="space-y-10">
      {steps.map((step, index) => (
        <div key={`${color}-step-${index}`}>
          {showGrid ? (
            <div className="grid items-start md:gap-12 gap-8 lg:grid-cols-[65%_35%]">
              <div>
                <StepMeta step={step} stepIndex={index} c={c} />
              </div>
              {step.image && <ImageCard image={step.image} />}
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              <StepMeta step={step} stepIndex={index} c={c} />
              {step.image && <ImageCard image={step.image} />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


function SectionDivider() {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="flex gap-1.5">
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="h-1 w-1 rounded-full bg-slate-300" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
}

export default function AuthStepsSection() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-28 md:space-y-20 space-y-10">

        <section>
          <SectionHeader
            badge="Authentication Flow"
            badgeColor="bg-emerald-500"
            title="Get started in 3 simple steps"
            subtitle="Follow these steps to create your RBAC account, verify your email, and access the dashboard."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={AuthSteps} color="emerald" showGrid={true} />
        </section>

        <SectionDivider />

        <section >
          <SectionHeader
            badge="Organization Docs"
            badgeColor="bg-sky-500"
            title="Understand organization setup and user assignment."
            subtitle="Learn how to create tenants, invite members, and keep org access clear."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={OrgSteps} color="sky" showGrid={false} />
        </section>

        <SectionDivider />

        <section>
          <SectionHeader
            badge="Users Management"
            badgeColor="bg-sky-500"
            title="Manage users across your platform."
            subtitle="Create, invite, and inspect individual user accounts from the Users dashboard."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={UserSteps} color="sky" showGrid={false} />
        </section>

        <SectionDivider />

        <section>
          <SectionHeader
            badge="Members Management"
            badgeColor="bg-violet-500"
            title="Manage organization members and roles."
            subtitle="Add members directly or invite them by email, assign roles, and control access within each organization."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={MemberSteps} color="violet" showGrid={false} />
        </section>

        <SectionDivider />
        <section>
          <SectionHeader
            badge="Roles Management"
            badgeColor="bg-rose-500"
            title="Define and manage roles within your organization."
            subtitle="Create custom roles, assign them to members, and control what each role can do through Role-Permissions configuration."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={RoleSteps} color="rose" showGrid={false} />
        </section>

        <SectionDivider />

        <section>
          <SectionHeader
            badge="Configure"
            badgeColor="bg-amber-500"
            title="Customize authentication for your application."
            subtitle="Toggle sign-up and sign-in methods, enforce email verification, enable MFA, and map role-permissions — all from the Configure dashboard."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={ConfigureSteps} color="amber" showGrid={false} />
        </section>

        <SectionDivider />

        <section>
          <SectionHeader
            badge="Webhook"
            badgeColor="bg-indigo-500"
            title="Connect EMS-RBAC to your backend in real time."
            subtitle="Configure a webhook URL to receive lifecycle events, generate a signing secret, and implement the invitation acceptance flow in your frontend."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={WebhookSteps} color="indigo" showGrid={false} />
        </section>

        <SectionDivider />

        <section>
          <SectionHeader
            badge="Service API Key"
            badgeColor="bg-teal-500"
            title="Authenticate server-to-server requests."
            subtitle="The Service API Key is required for all client integration endpoints. Set it in your environment and send it as the X-Service-Api-Key header."
          />
          <hr className="mb-8 border-slate-200" />
          <StepSection steps={ServiceApiKeySteps} color="teal" showGrid={false} />
        </section>

      </div>
    </div>
  );
}