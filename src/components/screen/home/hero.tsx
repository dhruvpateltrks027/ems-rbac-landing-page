import { FadeUp } from "@/components/common/animation";
import SharedBanner from "@/components/common/shared-banner";
import React from "react";

const Hero = () => {
  return (
    <section className="items-center pb-14 pt-10 lg:pb-24 lg:pt-24">
      <div className="lg:col-span-2">
        <div className=" relative overflow-hidden px-6 py-10 text-center md:px-10 md:py-14 lg:px-16 lg:py-20">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm ">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
            Platform reference for Trks RBAC
          </div>

<FadeUp>
          <SharedBanner
            title={
              <>
                Build a dashboard users can
                <br />
                <span className="text-slate-500">understand instantly</span>
              </>
            }
            description="Trks RBAC combines organizations, users, roles, API keys, and webhook integration into a single user-friendly admin panel."
            primaryCta={{ href: "/docs", label: "Get started" }}
            secondaryCta={{ href: "https://trks-rbac-admin.netlify.app/login/", label: "Sign in" }}
          />

</FadeUp>

          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
            <div className=" absolute left-[8%] top-[14%] h-24 w-24 rounded-full border border-slate-200/80" />
            <div className=" absolute right-[10%] top-[18%] h-20 w-20 rounded-3xl border border-slate-200/80" />
            <div className=" absolute bottom-[18%] left-[20%] h-16 w-16 rounded-2xl border border-slate-200/80" />
            <div className="absolute bottom-[12%] right-[18%] h-28 w-28 rounded-full border border-slate-200/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
