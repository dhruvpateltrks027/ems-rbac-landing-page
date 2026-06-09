import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="left-0 right-0 bottom-0 z-30 border-t border-border/70 bg-white/95">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 lg:px-6">
        <div className="flex flex-col gap-4 px-5 py-2 md:flex-row md:items-center md:justify-between">
         <div className="flex items-center gap-3">
             <Link href="/">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-sm font-bold text-white shadow-sm">
                TR
              </div>
            </Link>
             <div>

            <p className="text-sm font-semibold text-slate-950">Trks RBAC</p>
            <p className="text-sm text-slate-500">Secure organization, user, and role management for modern applications.</p>
             </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* <Link href="#platform" className="inline-flex h-9 items-center justify-center rounded-full bg-foreground px-3 text-xs font-semibold text-white transition hover:bg-foreground/90">
              Platform
            </Link>
            <Link href="#features" className="inline-flex h-9 items-center justify-center rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-200">
              Features
            </Link> */}
            <Link href="https://trks-rbac-admin.netlify.app/login/" className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-950 px-3 text-xs font-semibold text-white transition hover:bg-slate-800">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
