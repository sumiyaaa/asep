import { z } from "zod";

export const membershipTypeValues = [
  "professional",
  "epc-certified",
  "student",
  "fellow",
  "international",
  "affiliate",
] as const;

export const joinSchema = z
  .object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(8, "Use at least 8 characters"),
    confirmPassword: z.string(),
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    membershipType: z.enum(membershipTypeValues, { message: "Select a membership type" }),
    city: z.string().min(1, "Required"),
    country: z.string().min(1, "Required"),
    highestDegree: z.string().min(1, "Required"),
    employer: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type JoinFormValues = z.infer<typeof joinSchema>;

export const contactSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid email address"),
  topic: z.string().min(1, "Select a topic"),
  message: z.string().min(10, "Tell us a bit more (10 characters minimum)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const jobPostingSchema = z.object({
  title: z.string().min(1, "Required"),
  organization: z.string().min(1, "Required"),
  location: z.string().min(1, "Required"),
  contactEmail: z.string().email("Enter a valid email address"),
  description: z.string().min(30, "Add a bit more detail (30 characters minimum)"),
  epcEligible: z.boolean(),
});

export type JobPostingFormValues = z.infer<typeof jobPostingSchema>;

export const renewSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  certificateOrMemberId: z.string().min(1, "Required"),
});

export type RenewFormValues = z.infer<typeof renewSchema>;
