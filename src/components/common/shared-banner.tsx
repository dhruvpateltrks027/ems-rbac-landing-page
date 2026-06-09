import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function SharedBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  title: React.ReactNode;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <div>
      <h1 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {primaryCta && (
          <Button asChild className="group">
            <Link href={primaryCta.href}>
              <span>{primaryCta.label}</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        )}

        {secondaryCta && (
          <Button asChild variant="outline">
            <Link href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}