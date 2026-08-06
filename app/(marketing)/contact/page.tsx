"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormValues } from "@/lib/validation/schemas";

const topics = ["General inquiry", "Membership", "EPC Certification", "Accreditation", "Journals", "Job Board", "Media"];

const directContacts = [
  { label: "General inquiries", email: "info@asep.org" },
  { label: "Journal editors", email: "editor@asep.org" },
  { label: "Certification (EPC)", email: "epc@asep.org" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact ASEP"
        description="Have a question about membership, certification, or accreditation? Send us a message, or reach the right team directly."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {submitted ? (
              <Card>
                <CheckCircle2 className="size-10 text-primary-600" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl font-medium">Message sent</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Thanks for reaching out — we typically respond within one business day.
                </p>
              </Card>
            ) : (
              <Card>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" aria-invalid={!!errors.name} {...register("name")} />
                      {errors.name ? <p className="mt-1.5 text-xs text-critical">{errors.name.message}</p> : null}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" aria-invalid={!!errors.email} {...register("email")} />
                      {errors.email ? <p className="mt-1.5 text-xs text-critical">{errors.email.message}</p> : null}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="topic">Topic</Label>
                    <Select id="topic" defaultValue="" aria-invalid={!!errors.topic} {...register("topic")}>
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {topics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </Select>
                    {errors.topic ? <p className="mt-1.5 text-xs text-critical">{errors.topic.message}</p> : null}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" aria-invalid={!!errors.message} {...register("message")} />
                    {errors.message ? <p className="mt-1.5 text-xs text-critical">{errors.message.message}</p> : null}
                  </div>
                  <Button type="submit" variant="accent" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              </Card>
            )}
          </div>

          <div className="space-y-4 lg:col-span-2">
            {directContacts.map((c) => (
              <Card key={c.email} className="flex items-center gap-4">
                <Mail className="size-5 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-foreground">{c.label}</p>
                  <a href={`mailto:${c.email}`} className="text-sm text-primary-700 hover:underline dark:text-primary-400">
                    {c.email}
                  </a>
                </div>
              </Card>
            ))}
            <Card className="flex items-center gap-4">
              <MapPin className="size-5 shrink-0 text-primary-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">ASEP National Office</p>
                <p className="text-sm text-muted-foreground">Minnesota, USA</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
