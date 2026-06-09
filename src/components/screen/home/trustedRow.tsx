import { FadeUp, HoverCard } from "@/components/common/animation";
import React from "react";

const trustedBrands = [
  { name: "Browserbase", color: "#378ADD" },
  { name: "Braintrust", color: "#1D9E75" },
  { name: "Higgsfield", color: "#D85A30" },
  { name: "Consensus", color: "#7F77DD" },
];

export default function TrustedRow() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 lg:px-6">
      <FadeUp>
        <div className="grid items-center gap-3 rounded-xl border border-border/70 shadow-sm bg-white/95 px-5 py-4 sm:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div>
            <p className="text-sm font-semibold text-slate-800 leading-snug">
              Trusted by teams building clear RBAC workflows
            </p>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Easy organization, user, role, and integration setup.
            </p>
          </div>
          {trustedBrands.map((brand) => (
            <HoverCard key={brand.name}>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: brand.color }} />
                {brand.name}
              </div>
            </HoverCard>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
