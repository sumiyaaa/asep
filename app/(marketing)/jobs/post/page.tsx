"use client";

import { useState } from "react";
import { useForm, useWatch, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { jobPostingSchema, type JobPostingFormValues } from "@/lib/validation/schemas";

export default function PostJobPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<JobPostingFormValues>({
    resolver: zodResolver(jobPostingSchema),
    defaultValues: { epcEligible: false },
  });

  // See the equivalent note in membership/join/page.tsx — plain `watch()`
  // wouldn't reliably re-render this fee summary as the checkbox changes.
  const epcEligible = useWatch({ control, name: "epcEligible" });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="Resources" title="Post a Job" crumbs={[{ label: "Job Board", href: "/jobs" }, { label: "Post a Job" }]} />
        <section className="mx-auto max-w-2xl px-6 py-20 text-center lg:px-8">
          <CheckCircle2 className="mx-auto size-12 text-primary-600" aria-hidden="true" />
          <h1 className="mt-5 font-display text-2xl font-medium">Listing submitted for review</h1>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Approved listings go live within one business day and stay active for three months.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Post a Job"
        description="Free for roles open to EPC-certified professionals or accredited-program faculty. All other postings are $450 and stay live for three months."
        crumbs={[{ label: "Job Board", href: "/jobs" }, { label: "Post a Job" }]}
      />
      <section className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Card className="space-y-5">
            <div>
              <Label htmlFor="title">Job title</Label>
              <Input id="title" aria-invalid={!!errors.title} {...register("title")} />
              {errors.title ? <p className="mt-1.5 text-xs text-critical">{errors.title.message}</p> : null}
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" aria-invalid={!!errors.organization} {...register("organization")} />
                {errors.organization ? (
                  <p className="mt-1.5 text-xs text-critical">{errors.organization.message}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State or Remote" aria-invalid={!!errors.location} {...register("location")} />
                {errors.location ? <p className="mt-1.5 text-xs text-critical">{errors.location.message}</p> : null}
              </div>
            </div>
            <div>
              <Label htmlFor="contactEmail">Contact email</Label>
              <Input id="contactEmail" type="email" aria-invalid={!!errors.contactEmail} {...register("contactEmail")} />
              {errors.contactEmail ? (
                <p className="mt-1.5 text-xs text-critical">{errors.contactEmail.message}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" aria-invalid={!!errors.description} {...register("description")} />
              {errors.description ? (
                <p className="mt-1.5 text-xs text-critical">{errors.description.message}</p>
              ) : null}
            </div>

            <Controller
              name="epcEligible"
              control={control}
              render={({ field }) => (
                <label className="flex items-start gap-3 rounded-md border border-border-strong p-4 text-sm">
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className="mt-0.5 size-4 rounded border-border-strong accent-primary-700"
                  />
                  <span>
                    This role is open to EPC-certified professionals or accredited-program faculty
                    <span className="block text-muted-foreground">Qualifying listings are posted free of charge.</span>
                  </span>
                </label>
              )}
            />

            <div className="rounded-md bg-surface-muted p-4 text-sm">
              <span className="font-medium text-foreground">Listing fee: </span>
              <span className="text-muted-foreground">{epcEligible ? "Free" : "$450 for 3 months"}</span>
            </div>

            <Button type="submit" variant="accent" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting…" : "Submit Listing"}
            </Button>
          </Card>
        </form>
      </section>
    </>
  );
}
