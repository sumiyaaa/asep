"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

/**
 * Client-side validated for now — submits to a mock async function that
 * stands in for a future `POST /api/newsletter` route (Phase 3). Swapping
 * in the real endpoint only touches `onSubmit` below.
 */
async function subscribe(email: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { ok: true, email };
}

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await subscribe(values.email);
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 text-sm font-medium text-primary-700 dark:text-primary-400">
        <CheckCircle2 className="size-4.5" aria-hidden="true" />
        You&apos;re subscribed — welcome aboard.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("flex flex-col gap-2", compact ? "sm:flex-row sm:items-start" : "")}
    >
      <div className={compact ? "w-full sm:w-64" : "w-full"}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          {...register("email")}
        />
        {errors.email ? (
          <p id="newsletter-email-error" className="mt-1.5 text-xs text-critical">
            {errors.email.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" variant="primary" disabled={isSubmitting} className="shrink-0">
        {isSubmitting ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}
