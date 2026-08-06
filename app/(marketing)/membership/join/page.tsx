"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { membershipTiers } from "@/lib/content/membership";
import { joinSchema, type JoinFormValues } from "@/lib/validation/schemas";
import { useState } from "react";

async function submitApplication(values: JoinFormValues) {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true, values };
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-critical">{message}</p>;
}

export default function JoinPage() {
  const [submitted, setSubmitted] = useState<{ name: string; tier: string } | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<JoinFormValues>({ resolver: zodResolver(joinSchema) });

  // Plain `watch()` reads the store once at call time — it doesn't subscribe
  // this component to re-render when the field changes, and this <select>
  // is an uncontrolled `register()` input, so the fee summary below would
  // silently go stale. `useWatch` subscribes properly.
  const membershipType = useWatch({ control, name: "membershipType" });
  const selectedTier = membershipTiers.find((t) => t.slug === membershipType);

  const onSubmit = async (values: JoinFormValues) => {
    await submitApplication(values);
    setSubmitted({ name: `${values.firstName} ${values.lastName}`, tier: selectedTier?.name ?? values.membershipType });
  };

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="Membership" title="Become a Member" crumbs={[{ label: "Membership", href: "/membership" }, { label: "Join" }]} />
        <section className="mx-auto max-w-2xl px-6 py-20 text-center lg:px-8">
          <CheckCircle2 className="mx-auto size-12 text-primary-600" aria-hidden="true" />
          <h1 className="mt-5 font-display text-2xl font-medium">Application received, {submitted.name}</h1>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Your {submitted.tier} membership application is being reviewed. You&apos;ll receive a confirmation email with
            next steps, including payment, within one business day.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Become a Member"
        description="Applications are typically reviewed within one business day. Payment is confirmed after your membership type is verified."
        crumbs={[{ label: "Membership", href: "/membership" }, { label: "Join" }]}
      />

      <section className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
          <Reveal>
            <Card>
              <h2 className="font-display text-lg font-medium">Account details</h2>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" aria-invalid={!!errors.email} {...register("email")} />
                  <FieldError message={errors.email?.message} />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" aria-invalid={!!errors.password} {...register("password")} />
                  <FieldError message={errors.password?.message} />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    aria-invalid={!!errors.confirmPassword}
                    {...register("confirmPassword")}
                  />
                  <FieldError message={errors.confirmPassword?.message} />
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.06}>
            <Card>
              <h2 className="font-display text-lg font-medium">Personal & academic details</h2>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" aria-invalid={!!errors.firstName} {...register("firstName")} />
                  <FieldError message={errors.firstName?.message} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" aria-invalid={!!errors.lastName} {...register("lastName")} />
                  <FieldError message={errors.lastName?.message} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="membershipType">Membership type</Label>
                  <Select id="membershipType" defaultValue="" aria-invalid={!!errors.membershipType} {...register("membershipType")}>
                    <option value="" disabled>
                      Select a membership type
                    </option>
                    {membershipTiers.map((tier) => (
                      <option key={tier.slug} value={tier.slug}>
                        {tier.name}
                      </option>
                    ))}
                  </Select>
                  <FieldError message={errors.membershipType?.message} />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" aria-invalid={!!errors.city} {...register("city")} />
                  <FieldError message={errors.city?.message} />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" aria-invalid={!!errors.country} {...register("country")} />
                  <FieldError message={errors.country?.message} />
                </div>
                <div>
                  <Label htmlFor="highestDegree">Highest degree attained</Label>
                  <Input id="highestDegree" placeholder="e.g. B.S. Exercise Science" aria-invalid={!!errors.highestDegree} {...register("highestDegree")} />
                  <FieldError message={errors.highestDegree?.message} />
                </div>
                <div>
                  <Label htmlFor="employer">Employer (optional)</Label>
                  <Input id="employer" {...register("employer")} />
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="border-primary-200 bg-primary-50/60 dark:border-primary-800 dark:bg-primary-950/30">
              <h2 className="font-display text-lg font-medium">Membership fee</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {selectedTier
                  ? `${selectedTier.name} membership fee is confirmed before payment — no charge is taken with this application.`
                  : "Select a membership type above to see fee details before payment."}
              </p>
            </Card>
          </Reveal>

          <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Submit Application"}
          </Button>
        </form>
      </section>
    </>
  );
}
