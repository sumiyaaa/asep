import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { scaleIn } from "@/lib/animation/variants";

interface CtaSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CtaSection({ eyebrow, title, description, primaryCta, secondaryCta }: CtaSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Reveal variants={scaleIn}>
        <div className="relative overflow-hidden rounded-xl bg-primary-800 px-8 py-16 text-center dark:bg-primary-900 sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            {eyebrow ? (
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary-300">{eyebrow}</p>
            ) : null}
            <h2 className="mt-3 text-balance font-display text-3xl font-medium text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-balance text-primary-100/90">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <LinkButton href={primaryCta.href} variant="accent" size="lg">
                {primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </LinkButton>
              {secondaryCta ? (
                <LinkButton
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                  className="border-primary-400/40 text-white hover:bg-white/10"
                >
                  {secondaryCta.label}
                </LinkButton>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
