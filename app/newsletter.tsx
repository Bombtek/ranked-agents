"use client";
import { useEffect, useRef } from "react";

export const BEEHIIV_FORM_ID = "57aa9692-8abe-44f4-a86f-b226fe8ed114";
export const BEEHIIV_LOADER = "https://subscribe-forms.beehiiv.com/v3/loader.js";
export const NEWSLETTER_URL = "https://agentpatchnotes.beehiiv.com";
const EMBED = `<script async src="${BEEHIIV_LOADER}" data-beehiiv-form="${BEEHIIV_FORM_ID}"></script>`;

/** Renders the beehiiv embed in place. The tag is in the server HTML so it runs on first load;
 *  after client-side navigation (where innerHTML scripts are inert) we inject a live script. */
export function BeehiivForm() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      if (el.querySelector("iframe, form")) return;
      el.innerHTML = "";
      const s = document.createElement("script");
      s.async = true;
      s.src = BEEHIIV_LOADER;
      s.setAttribute("data-beehiiv-form", BEEHIIV_FORM_ID);
      el.appendChild(s);
    }, 1500);
    return () => clearTimeout(t);
  }, []);
  return <div ref={ref} className="min-h-[60px]" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: EMBED }} />;
}

export function NewsletterSignup({ compact = false, title = "Agent Patch Notes" }: { compact?: boolean; title?: string }) {
  if (compact) {
    return (
      <div className="space-y-2">
        <p className="font-display text-sm font-bold text-white">Agent Patch Notes</p>
        <p className="text-xs text-zinc-400">Weekly agent release notes and tier changes. Free, every Friday.</p>
        <BeehiivForm />
        <a href={NEWSLETTER_URL} target="_blank" rel="noopener" className="text-xs text-fuchsia-300 hover:underline">Subscribe on beehiiv ↗</a>
      </div>
    );
  }
  return (
    <section className="grid-bg rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/5 p-8 md:p-10">
      <p className="font-display text-xs tracking-[0.4em] text-fuchsia-400">WEEKLY NEWSLETTER</p>
      <h2 className="font-display mt-2 text-3xl font-black">{title}</h2>
      <p className="mt-2 max-w-xl text-zinc-400">Weekly AI agent release notes and tier changes, every Friday. Free. Unsubscribe anytime.</p>
      <div className="mt-6 max-w-xl"><BeehiivForm /></div>
      <p className="mt-3 text-sm text-zinc-500">Form not loading? <a href={NEWSLETTER_URL} target="_blank" rel="noopener" className="text-fuchsia-300 hover:underline">Subscribe at agentpatchnotes.beehiiv.com ↗</a></p>
    </section>
  );
}
