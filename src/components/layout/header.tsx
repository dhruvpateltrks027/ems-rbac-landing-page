"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 mx-auto w-full max-w-full px-4 py-3 lg:px-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="bg-white/95 backdrop-blur-sm shadow-soft border-b rounded-xl border-border/70 flex items-center justify-between gap-4 px-4 py-3 md:px-5">
          {/* Logo */}
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="https://trks-rbac-admin.netlify.app/login/">Sign in</Link>
            </Button>
            <Button asChild>
              <Link href="/docs">Start building</Link>
            </Button>
          </div>

          {/* Mobile hamburger — Sheet trigger */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                  aria-label="Toggle menu"
                >
                  <span className="block w-5 h-0.5 bg-foreground mb-1" />
                  <span className="block w-5 h-0.5 bg-foreground mb-1" />
                  <span className="block w-5 h-0.5 bg-foreground" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72 sm:max-w-xs">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-foreground text-sm font-bold text-white shadow-sm">
                      TR
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold">Trks RBAC</p>
                      <p className="text-xs text-muted-foreground font-normal">
                        Identity and access control
                      </p>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-3 px-4 pt-4">
                  <Button
                    asChild
                    onClick={() => setMobileOpen(false)}
                  >
                    <Link href="https://trks-rbac-admin.netlify.app/login/">
                      Sign in
                    </Link>
                  </Button>

                  <Button
                    className="w-full"
                    asChild
                    onClick={() => setMobileOpen(false)}
                  >
                    <Link href="/docs">Start building</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}