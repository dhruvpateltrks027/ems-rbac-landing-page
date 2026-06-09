import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo & Content */}
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
            <Link href="/" className="group">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                TR
              </div>
            </Link>

            <div>
              <h3 className="text-sm font-semibold text-slate-950">
                Trks RBAC
              </h3>

              <p className="mt-1 max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm">
                Secure organization, user, and role management for modern
                applications.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center md:justify-end">
            <Link
              href="https://trks-rbac-admin.netlify.app/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg"
            >
              Sign in
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 border-t border-slate-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-slate-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Trks RBAC. All rights reserved.
            </p>

            <p>
              Built for secure organization & role management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}