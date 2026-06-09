export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden  px-4 py-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.10),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_26%),linear-gradient(180deg,_#f8fafc_0%,_#f7f7f5_100%)]" />
      {children}
    </div>
  );
}
