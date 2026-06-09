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

// const iconMap: Record<string, React.ReactNode> = {
//   building: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 21V7l6-4v18M9 7H3v14" />
//     </svg>
//   ),
//   users: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//       <circle cx={9} cy={7} r={4} />
//       <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   ),
//   shield: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//     </svg>
//   ),
//   key: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
//       <circle cx={7} cy={17} r={4} />
//       <path strokeLinecap="round" strokeLinejoin="round" d="m10.59 13.41 5-5M15 9l2 2 3-3-2-2" />
//     </svg>
//   ),
//   webhook: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M18 16.98h-5.99c-1.1 0-1.95.68-2.23 1.61A3 3 0 0 1 6 21a3 3 0 0 1-3-3 3 3 0 0 1 2.24-2.9L9 9.5" />
//       <path strokeLinecap="round" strokeLinejoin="round" d="M6 5a3 3 0 0 1 3 3 3 3 0 0 1-.78 2.02L12 15h6a3 3 0 0 1 3 3 3 3 0 0 1-3 3" />
//       <circle cx={6} cy={5} r={3} />
//     </svg>
//   ),
//   lock: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
//       <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
//       <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 10 0v4" />
//     </svg>
//   ),
// };

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
      className="mx-auto w-full max-w-7xl px-4 pb-16 lg:px-6"
    >
      <div className="rounded-3xl border border-border/70 bg-white/95 p-6 shadow-sm backdrop-blur-xl md:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Trks RBAC Platform
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Access control, built for real teams
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
            Organization management, role-based access, and a full auth layer —
            ready for your SaaS from day one.
          </p>

          {/* Metric pills */}
          <div className="mt-5 flex flex-wrap gap-2">
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

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon; // destructure to a capitalized variable
              return (
                <article
                  key={card.title}
                  className="group flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
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
              );
            })}
          </div>

          {/* API Panel */}
          <aside className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100">
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold text-slate-100">
                  API & roadmap
                </span>
              </div>
              <span className="rounded-full border border-green-800 bg-green-950 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-green-400">
                Real features
              </span>
            </div>

            <div className="space-y-4 p-4">
              {/* Endpoints */}
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Endpoints
                </p>
                <div className="space-y-1.5">
                  {endpoints.map((ep) => (
                    <div
                      key={ep.path}
                      className="flex items-center gap-2.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2"
                    >
                      <MethodTag method={ep.method} />
                      <span className="truncate font-mono text-[11px] text-slate-300">
                        {ep.path}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
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
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
