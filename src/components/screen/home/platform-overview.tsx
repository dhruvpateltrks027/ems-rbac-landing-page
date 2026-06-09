import { FadeUp, HoverCard, ScaleIn } from "@/components/common/animation";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import {
  Building2,
  Key,
  Lock,
  ShieldCheck,
  Users,
  Webhook,
} from "lucide-react";
import React from "react";

const platformMetrics = [
  { label: "Organizations", icon: Building2 },
  { label: "Users & members", icon: Users },
  { label: "Roles & access", icon: ShieldCheck },
];

const featureCards = [
  {
    title: "Organizations",
    description:
      "Create workspaces with full tenant isolation and org-level settings.",
    icon: Building2,
  },
  {
    title: "Users & members",
    description:
      "Invite, onboard, and manage user access across roles and orgs.",
    icon: Users,
  },
  {
    title: "Roles & permissions",
    description:
      "Define reusable roles, assign them in context, and enforce permissions.",
    icon: ShieldCheck,
  },
  {
    title: "Service API keys",
    description:
      "Issue keys, revoke instantly, and connect secure backend integrations.",
    icon: Key,
  },
  {
    title: "Webhooks & events",
    description:
      "Deliver real-time organization and membership events to your systems.",
    icon: Webhook,
  },
  {
    title: "Authentication",
    description:
      "Sign in, register, and reset passwords with a clean auth workflow.",
    icon: Lock,
  },
];

const endpoints = [
  { method: "POST", path: "/auth/login" },
  { method: "GET", path: "/organizations" },
  { method: "POST", path: "/organizations/{id}/invitations" },
  { method: "GET", path: "/organizations/{id}/roles" },
  { method: "POST", path: "/setup/service-api-key" },
];

const orgStats = [
  { label: "Members", value: 24 },
  { label: "Roles", value: 8 },
  { label: "API Keys", value: 2 },
];

const MethodTag = ({ method }: { method: string }) => {
  const isPost = method === "POST";
  return (
    <span
      className={`min-w-[46px] rounded-md px-2 py-0.5 text-center font-mono text-[10px] font-semibold ${
        isPost
          ? "border border-green-800 bg-green-950 text-green-400"
          : "border border-blue-800 bg-blue-950 text-blue-400"
      }`}
    >
      {method}
    </span>
  );
};

const PlatformOverview = () => {
  return (
    <section
      id="platform"
      className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6 md:pb-16 pb-12"
    >
      <FadeUp>
        <div className="rounded-3xl border border-border/70 bg-white/95 p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm backdrop-blur-xl">
          {/* Header */}
          <FadeUp delay={0.05}>
            <div className="mb-8">
              <FadeUp delay={0}>
                <div className="relative mb-4 inline-flex rounded-full p-[1px] overflow-hidden">
                  <div className="absolute inset-0 animate-spin-slow bg-border border-border/70" />
                  <div className="relative flex items-center gap-2 rounded-full bg-white px-4 py-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                    <AnimatedShinyText
                      shimmerWidth={120}
                      className="md:text-[10px] text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-700 whitespace-nowrap"
                    >
                      Trks RBAC Platform
                    </AnimatedShinyText>
                  </div>
                </div>
              </FadeUp>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
                Access control, built for real teams
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                Organization management, role-based access, and a full auth
                layer — ready for your SaaS from day one.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {platformMetrics.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500"
                  >
                    <Icon size={13} strokeWidth={1.75} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            {/* Feature cards — staggered */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {featureCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <ScaleIn key={card.title} delay={0.1 + i * 0.07}>
                    <article className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {card.description}
                        </p>
                      </div>
                    </article>
                  </ScaleIn>
                );
              })}
            </div>

            {/* API Panel */}
            <FadeUp delay={0.2}>
              <aside className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100">
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-sm font-semibold text-slate-100">
                      API & roadmap
                    </span>
                  </div>
                  <span className="rounded-full border border-green-800 bg-green-950 px-2.5 py-0.5 md:text-[10px] text-[8px] font-semibold uppercase tracking-widest text-green-400">
                    Real features
                  </span>
                </div>
                <div className="space-y-4 p-4">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                      Endpoints
                    </p>
                    <div className="space-y-1.5">
                      {endpoints.map((ep) => (
                        <div
                          key={ep.path}
                          className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 md:px-3 px-2 py-2"
                        >
                          <MethodTag method={ep.method} />
                          <span className="truncate font-mono md:text-[11px] text-[9px] text-slate-300">
                            {ep.path}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {orgStats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-center"
                      >
                        <p className="text-lg font-semibold text-slate-100">
                          {s.value}
                        </p>
                        <p className="text-[10px] text-slate-500">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </FadeUp>
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default PlatformOverview;
