"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 mx-auto w-full max-w-full px-4 py-3 lg:px-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="bg-white/95 backdrop-blur-sm shadow-soft border-b rounded-xl border-border/70 flex items-center justify-between gap-4 px-4 py-3 md:px-5">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-sm font-bold text-white shadow-sm">
                TR
              </div>
            </Link>
            <div>
              <p className="app-text-strong text-sm font-semibold">Trks RBAC</p>
              <p className="app-text-muted text-xs">
                Platform identity and access control
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost">
              <Link href="https://trks-rbac-admin.netlify.app/login/">Sign in</Link>
            </Button>

            <Button  className="group">
              <Link href="/docs" >Start building </Link>
            </Button>

            <button
              className="md:hidden ml-1 p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="block w-5 h-0.5 bg-foreground mb-1" />
              <span className="block w-5 h-0.5 bg-foreground mb-1" />
              <span className="block w-5 h-0.5 bg-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
