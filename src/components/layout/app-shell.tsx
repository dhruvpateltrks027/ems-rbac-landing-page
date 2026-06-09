"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import React from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";

  const hideChrome = pathname.startsWith("/auth");

  return (
    <>
      {!hideChrome && <Header />}

      <div className="min-h-screen">{children}</div>

      {!hideChrome && <Footer />}
    </>
  );
}
