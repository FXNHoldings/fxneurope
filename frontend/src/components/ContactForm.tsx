"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

const inputCls =
  "w-full rounded-lg border border-black/10 bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const f = dict.contact.form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`${f.subject} ${name || "—"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            {f.name}
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputCls}
            placeholder={f.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            {f.email}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputCls}
            placeholder={f.emailPlaceholder}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {f.message}
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className={inputCls}
          placeholder={f.messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
      >
        {f.send}
      </button>
      <p className="text-xs text-ink/45">{f.note}</p>
    </form>
  );
}
