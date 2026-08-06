"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
  stayLoggedIn: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema), defaultValues: { stayLoggedIn: true } });

  const onSubmit = async () => {
    // Placeholder for Auth.js Credentials sign-in (see the implementation plan's
    // Phase 4) — the member/admin portals aren't wired up yet, so this always
    // reports the same message rather than silently pretending to succeed.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setError("Member accounts aren't connected yet — the portal ships in the next phase of this rebuild.");
  };

  return (
    <Card>
      <h1 className="font-display text-xl font-medium">Sign in to ASEP</h1>
      <p className="mt-1 text-sm text-muted-foreground">Access your membership, certification, and journal tools.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" autoComplete="username" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email ? <p className="mt-1.5 text-xs text-critical">{errors.email.message}</p> : null}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="text-xs font-medium text-primary-700 hover:underline dark:text-primary-400">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            aria-invalid={!!errors.password}
            {...register("password")}
          />
          {errors.password ? <p className="mt-1.5 text-xs text-critical">{errors.password.message}</p> : null}
        </div>
        <label className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <input type="checkbox" className="size-4 rounded border-border-strong accent-primary-700" {...register("stayLoggedIn")} />
          Stay signed in for 14 days
        </label>

        {error ? (
          <p role="alert" className="rounded-md bg-warning/10 px-3 py-2.5 text-sm text-warning">
            {error}
          </p>
        ) : null}

        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing in…" : "Sign In"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Not a member yet?{" "}
        <Link href="/membership/join" className="font-medium text-primary-700 hover:underline dark:text-primary-400">
          Become a Member
        </Link>
      </p>
    </Card>
  );
}
