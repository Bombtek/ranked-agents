export const BEEHIIV_FORM_ID = "57aa9692-8abe-44f4-a86f-b226fe8ed114";
export const NEWSLETTER_URL = "https://agentpatchnotes.beehiiv.com";
const FORM_SRC = `https://subscribe-forms.beehiiv.com/v3/forms/${BEEHIIV_FORM_ID}`;

/** Plain per-instance iframe: no shared loader script, so multiple instances on one page
 *  and client-side navigation can't interfere with each other. */
export function BeehiivForm() {
  return (
    <iframe
      src={FORM_SRC}
      title="Subscribe to Agent Patch Notes"
      loading="lazy"
      scrolling="no"
      className="block w-full rounded-lg border-0 bg-white"
      style={{ height: 339 }}
    />
  );
}

export function NewsletterSignup({ compact = false, title = "Agent Patch Notes" }: { compact?: boolean; title?: string }) {
  if (compact) {
    return (
      <div className="space-y-2">
        <p className="font-display text-sm font-bold text-white">Agent Patch Notes</p>
        <p className="text-xs text-zinc-400">Weekly agent release notes and tier changes. Free, every Friday.</p>
        <a href={`${NEWSLETTER_URL}/subscribe`} target="_blank" rel="noopener" className="inline-block rounded-md bg-fuchsia-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-fuchsia-400">Subscribe free</a>
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
