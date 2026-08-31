"use client";

import { useId, useState } from "react";
import { project } from "@/lib/project";
import { IconCheck } from "./icons";

type Props = { variant?: "card" | "panel"; className?: string };

export function EnquiryForm({ variant = "card", className = "" }: Props) {
  const uid = useId();
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    config: project.units[0].type,
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof typeof values, v: string | boolean) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[0-9+\s-]{8,15}$/.test(values.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Enter a valid email or leave it blank.";
    if (!values.consent) next.consent = "Please accept to be contacted.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const field =
    "w-full rounded-lg border border-brand-100 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

  if (sent) {
    return (
      <div
        className={`rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center ${className}`}
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <IconCheck />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-brand">
          Thanks, {values.name.split(" ")[0] || "there"}!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
          This is a demo, so nothing was actually sent. On a live site the Surti
          Developer sales team would call you back within one business day to
          arrange your visit.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm font-semibold text-brand underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className={`rounded-2xl border border-brand-100 bg-white p-5 shadow-card sm:p-6 ${
        variant === "panel" ? "sm:p-8" : ""
      } ${className}`}
    >
      <h3 className="font-display text-xl font-semibold text-brand">
        Request a call back
      </h3>
      <p className="mt-1 text-sm text-muted">
        Prices, floor plans and the current offer — sent to you directly.
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <label htmlFor={`${uid}-name`} className="mb-1.5 block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id={`${uid}-name`}
            className={field}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${uid}-phone`} className="mb-1.5 block text-sm font-medium text-ink">
              Phone
            </label>
            <input
              id={`${uid}-phone`}
              className={field}
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="+91 …"
              inputMode="tel"
              autoComplete="tel"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor={`${uid}-email`} className="mb-1.5 block text-sm font-medium text-ink">
              Email <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id={`${uid}-email`}
              className={field}
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="you@example.com"
              inputMode="email"
              autoComplete="email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor={`${uid}-config`} className="mb-1.5 block text-sm font-medium text-ink">
            Interested in
          </label>
          <select
            id={`${uid}-config`}
            className={field}
            value={values.config}
            onChange={(e) => set("config", e.target.value)}
          >
            {project.units.map((u) => (
              <option key={u.type}>{u.type}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor={`${uid}-message`} className="mb-1.5 block text-sm font-medium text-ink">
            Message <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id={`${uid}-message`}
            className={`${field} min-h-[76px] resize-y`}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Preferred floor, budget, timeline…"
          />
        </div>

        <label className="flex items-start gap-2.5 text-xs text-muted">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-brand-100 text-brand focus:ring-brand-100"
          />
          <span>
            I agree to be contacted by Surti Developer about Yusuf Residency by
            phone, SMS, email or WhatsApp.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}

        <button
          type="submit"
          className="w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Request call back
        </button>
        <p className="text-center text-[11px] text-muted">
          Demo form — submissions stay in your browser.
        </p>
      </div>
    </form>
  );
}
