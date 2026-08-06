"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { renewSchema, type RenewFormValues } from "@/lib/validation/schemas";

export default function RenewPage() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RenewFormValues>({ resolver: zodResolver(renewSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setDone(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Renew Membership"
        description="Look up your account to see your current status and renewal date."
        crumbs={[{ label: "Membership", href: "/membership" }, { label: "Renew" }]}
      />
      <section className="mx-auto max-w-lg px-6 py-16 lg:px-8">
        {done ? (
          <Card className="text-center">
            <CheckCircle2 className="mx-auto size-10 text-primary-600" aria-hidden="true" />
            <h1 className="mt-4 font-display text-xl font-medium">Renewal request sent</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We&apos;ve emailed your membership status and renewal options. Once logged in, renewal will also be
              available directly from your member dashboard.
            </p>
          </Card>
        ) : (
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div>
                <Label htmlFor="email">Email on file</Label>
                <Input id="email" type="email" aria-invalid={!!errors.email} {...register("email")} />
                {errors.email ? <p className="mt-1.5 text-xs text-critical">{errors.email.message}</p> : null}
              </div>
              <div>
                <Label htmlFor="certificateOrMemberId">Member ID or EPC certificate number</Label>
                <Input
                  id="certificateOrMemberId"
                  aria-invalid={!!errors.certificateOrMemberId}
                  {...register("certificateOrMemberId")}
                />
                {errors.certificateOrMemberId ? (
                  <p className="mt-1.5 text-xs text-critical">{errors.certificateOrMemberId.message}</p>
                ) : null}
              </div>
              <Button type="submit" variant="accent" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Looking up…" : "Look Up My Membership"}
              </Button>
            </form>
          </Card>
        )}
      </section>
    </>
  );
}
