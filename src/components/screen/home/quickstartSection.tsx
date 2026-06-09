import { FadeUp } from "@/components/common/animation";
import { Building2, ShieldCheck, Key, Webhook } from "lucide-react";

const items = [
  {
    title: "Organizations",
    desc: "Tenant-based workspaces with full data isolation. Each org operates independently with its own members, settings, and resources.",
    tag: "Multi-tenant",
    icon: Building2,
    colors: {
      iconBg: "#EAF3DE",
      iconColor: "#3B6D11",
      tagBg: "#EAF3DE",
      tagText: "#3B6D11",
    },
  },
  {
    title: "Roles",
    desc: "Granular permission assignment across your product. Define who can read, write, or manage every resource with precision.",
    tag: "Access control",
    icon: ShieldCheck,
    colors: {
      iconBg: "#E6F1FB",
      iconColor: "#185FA5",
      tagBg: "#E6F1FB",
      tagText: "#185FA5",
    },
  },
  {
    title: "API Keys",
    desc: "Secure backend integrations with scoped, rotatable API keys. Audit usage, revoke tokens, and manage credentials at any time.",
    tag: "Secure auth",
    icon: Key,
    colors: {
      iconBg: "#FAEEDA",
      iconColor: "#854F0B",
      tagBg: "#FAEEDA",
      tagText: "#854F0B",
    },
  },
  {
    title: "Webhooks",
    desc: "Real-time event delivery to your endpoints. Subscribe to any platform event and receive reliable push notifications instantly.",
    tag: "Real-time",
    icon: Webhook,
    colors: {
      iconBg: "#FBEAF0",
      iconColor: "#993556",
      tagBg: "#FBEAF0",
      tagText: "#993556",
    },
  },
];

export default function CapabilityTimeline() {
  return (
    <section id="features" className="mx-auto max-w-2xl px-6 pt-10 pb-24">
      {/* Header */}
      <FadeUp>
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 bg-gray-900 text-gray-100 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            ✦ Features
          </span>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Built for modern{" "}
            <span className="italic font-semibold text-gray-700">SaaS</span>{" "}
            platforms
          </h2>
        </div>
      </FadeUp>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-200" />
        <div className="flex flex-col gap-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={idx * 0.1}>
                <div className="flex items-start gap-5 relative">
                  <div className="flex flex-col items-center flex-shrink-0 z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: item.colors.iconBg }}
                    >
                      <Icon size={22} style={{ color: item.colors.iconColor }} strokeWidth={1.75} />
                    </div>
                    {idx < items.length - 1 && (
                      <div className="w-px flex-1 min-h-[2rem] bg-gray-200" />
                    )}
                  </div>
                  <div className={`${idx === items.length - 1 ? "pb-0" : "pb-10"}`}>
                    <p className="text-base font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">{item.desc}</p>
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: item.colors.tagBg, color: item.colors.tagText }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}