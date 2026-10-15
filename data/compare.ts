// Comparison & alternatives pages. Pricing facts verified on each vendor's own pricing page (Oct 14, 2026).
// Never guess prices — write "See site" when a fact could not be verified.
export interface CompareRow { tool: string; pricing: string; freeTier: string; bestFor: string; hosting: string }
export interface Comparison {
  slug: string; kind: "vs" | "alternatives"; h1: string; title: string; description: string;
  tools: string[]; verdict: string; rows: CompareRow[];
  picks: { tool: string; text: string }[]; faqs: { q: string; a: string }[]; rankings: string[];
}
export const VERIFIED_ON = "October 14, 2026";

const n8nRow: CompareRow = { tool: "n8n", pricing: "Cloud Starter from €20/mo, Pro €50/mo, Business €667/mo (billed annually); Enterprise custom", freeTier: "Self-hosted Community Edition is free; Cloud has a free trial (1,000 executions, no card)", bestFor: "Technical teams and AI agent workflows; billed per full workflow execution", hosting: "n8n Cloud (EU, Frankfurt) or self-host" };
const makeRow: CompareRow = { tool: "make", pricing: "Credit-based paid plans (Core, Pro, Teams, Enterprise) — see site for current prices", freeTier: "Free plan with 1,000 credits/month", bestFor: "Visual, branching scenarios; each module action uses credits", hosting: "Cloud (Make-hosted)" };
const zapierRow: CompareRow = { tool: "zapier", pricing: "Pro from $19.99/mo (750 tasks, annual) or $29.99 monthly; Team from $69/mo (annual); Enterprise custom", freeTier: "Free plan: 100 tasks/mo, two-step Zaps", bestFor: "Non-technical teams, widest app library (9,000+ apps)", hosting: "Cloud (Zapier-hosted)" };

export const comparisons: Comparison[] = [
  {
    slug: "n8n-vs-make", kind: "vs", h1: "n8n vs Make: which automation platform should you use in 2026?",
    title: "n8n vs Make (2026): Pricing, Self-Hosting & AI Agents Compared",
    description: "n8n vs Make compared: verified pricing, free tiers, hosting and who should pick which for AI agent and no-code automation workflows.",
    tools: ["n8n", "make"], rankings: ["no-code-automation"],
    verdict: "Pick n8n if you're technical, want to self-host, or run long multi-step workflows (you pay per execution, not per step). Pick Make if you want the most approachable visual builder with a free plan and no servers to manage.",
    rows: [n8nRow, makeRow],
    picks: [
      { tool: "n8n", text: "Developers and ops teams who want code nodes, self-hosting, data residency control and AI agent/MCP nodes. Heavy workflows are cheaper because an execution counts once regardless of steps." },
      { tool: "make", text: "Marketers, freelancers and ops people who think visually. Routers, iterators and a large app catalog make complex logic easy without code — and the free plan lets you start today." },
    ],
    faqs: [
      { q: "Is n8n cheaper than Make?", a: "It depends on workflow shape. n8n bills per full workflow execution no matter how many steps it has, while Make bills credits per module action. Long, many-step workflows usually favor n8n; simple, low-volume scenarios can fit Make's free plan." },
      { q: "Can I self-host Make?", a: "Make is a cloud service. If self-hosting is a requirement, n8n's free Community Edition is the usual choice." },
      { q: "Does n8n have a free plan?", a: "The self-hosted Community Edition is free. n8n Cloud offers a free trial with 1,000 executions and no credit card; paid Cloud plans start at €20/month billed annually." },
      { q: "Which is better for AI agents?", a: "Both support AI agents. n8n includes AI Agent nodes, MCP server and client nodes and human approval for tool calls on every Cloud plan; Make offers AI agents inside its visual scenarios." },
    ],
  },
  {
    slug: "make-vs-zapier", kind: "vs", h1: "Make vs Zapier: which is better for your automations?",
    title: "Make vs Zapier (2026): Pricing, Free Plans & Features Compared",
    description: "Make vs Zapier: compare verified pricing, free plans, hosting and best use cases to choose the right no-code automation tool.",
    tools: ["make", "zapier"], rankings: ["no-code-automation"],
    verdict: "Zapier is the easiest place to start and has the biggest app library. Make gives you more visual control over complex, branching logic and a more generous free allowance (1,000 credits vs 100 tasks per month).",
    rows: [makeRow, zapierRow],
    picks: [
      { tool: "make", text: "You build multi-branch scenarios, transform lots of data, or want to stretch a small budget. Make's visual canvas shows exactly how data flows." },
      { tool: "zapier", text: "You want the fastest setup, need a niche app only Zapier supports, or your team is non-technical. Zapier Agents, Tables, Forms and MCP all live in one account." },
    ],
    faqs: [
      { q: "Is Make cheaper than Zapier?", a: "Make's free plan includes 1,000 credits a month versus Zapier's 100 tasks, and Zapier's paid Pro plan starts at $19.99/month billed annually for 750 tasks. Check Make's pricing page for current paid-plan prices." },
      { q: "Does Zapier's free plan allow multi-step Zaps?", a: "No. Zapier's free plan is limited to two-step Zaps (one trigger, one action); multi-step Zaps need Professional or higher." },
      { q: "Which has more integrations?", a: "Zapier advertises 9,000+ apps. Make offers integrations with more than 1,000 standard apps plus custom apps for any public API." },
      { q: "Can I switch from Zapier to Make?", a: "Yes, but there's no automatic import — you rebuild each Zap as a Make scenario. Start with your highest-volume Zaps, where the savings are biggest." },
    ],
  },
  {
    slug: "n8n-vs-zapier", kind: "vs", h1: "n8n vs Zapier: open-source power or plug-and-play simplicity?",
    title: "n8n vs Zapier (2026): Pricing, Self-Hosting & AI Agents",
    description: "n8n vs Zapier compared with verified pricing, free tiers, hosting options and clear advice on which automation platform to choose.",
    tools: ["n8n", "zapier"], rankings: ["no-code-automation"],
    verdict: "Zapier wins for non-technical teams who want things to just work across thousands of apps. n8n wins for technical teams who want self-hosting, code steps and predictable per-execution pricing at high volume.",
    rows: [n8nRow, zapierRow],
    picks: [
      { tool: "n8n", text: "Engineers, agencies and AI builders running high-volume or many-step workflows, or anyone who needs data to stay on their own servers." },
      { tool: "zapier", text: "Business teams who want the largest integration catalog, built-in Copilot, and zero infrastructure — and who run modest task volumes." },
    ],
    faqs: [
      { q: "Is n8n a free alternative to Zapier?", a: "The self-hosted n8n Community Edition is free (you pay for your own server). n8n Cloud is paid after a free trial." },
      { q: "How do n8n executions compare to Zapier tasks?", a: "An n8n execution is one full workflow run regardless of step count. Zapier counts a task for each successful action step, though triggers and built-in tools like Filter, Formatter and Paths don't count." },
      { q: "Which is better for AI agents?", a: "n8n is the stronger pick for building custom agent workflows (AI Agent nodes, MCP, evaluations). Zapier Agents is easier for non-developers and is billed separately in 'activities'." },
      { q: "Where is my data stored?", a: "n8n Cloud stores data in the EU (Frankfurt), and self-hosted n8n stores it wherever you run it. Zapier is a hosted cloud service." },
    ],
  },
  {
    slug: "lindy-alternatives", kind: "alternatives", h1: "Best Lindy alternatives for AI assistants and agent workflows",
    title: "Best Lindy Alternatives (2026): n8n, Zapier, Make & More",
    description: "Looking for Lindy alternatives? Compare n8n, Zapier, Make, Relevance AI and Gumloop on pricing, free tiers, hosting and best use cases.",
    tools: ["lindy", "n8n", "zapier", "make", "relevance-ai", "gumloop"], rankings: ["no-code-automation"],
    verdict: "Lindy is a strong Slack- and inbox-native AI teammate, but you pay for every active user. For custom agent workflows pick n8n; for the broadest app coverage pick Zapier (Agents included); for visual low-cost automation pick Make.",
    rows: [
      { tool: "lindy", pricing: "Team $29.99/mo per active user (3,000 credits each); Enterprise custom", freeTier: "$50 in free credits for 7 days, no card", bestFor: "Inbox, meetings and Slack-native assistant work", hosting: "Cloud (Lindy-hosted)" },
      n8nRow, zapierRow, makeRow,
      { tool: "relevance-ai", pricing: "See site", freeTier: "See site", bestFor: "Multi-agent 'AI workforce' for sales and ops", hosting: "Cloud" },
      { tool: "gumloop", pricing: "See site", freeTier: "See site", bestFor: "AI-first drag-and-drop flows for marketing and ops", hosting: "Cloud" },
    ],
    picks: [
      { tool: "n8n", text: "You want to build your own assistant logic with full control, self-host it, and avoid per-seat pricing." },
      { tool: "zapier", text: "You need agents that act across 9,000+ apps and your team already lives in Zapier. Agents have their own free allowance." },
      { tool: "make", text: "You mostly need reliable automations with a few AI steps and want the most generous free plan." },
      { tool: "relevance-ai", text: "You're building a team of sales/ops agents (e.g. AI SDRs) rather than a personal assistant." },
      { tool: "gumloop", text: "Marketers who want AI-native flows (scraping, LLM steps) without engineering help." },
    ],
    faqs: [
      { q: "Why look for a Lindy alternative?", a: "Common reasons are per-user billing (every active user is billed on Lindy's Team plan), wanting self-hosting, or needing deeper workflow logic than an assistant provides." },
      { q: "What is the cheapest Lindy alternative?", a: "Self-hosted n8n Community Edition is free apart from hosting costs. Make and Zapier both have free plans for lighter use." },
      { q: "Does Lindy have a free plan?", a: "Lindy gives new users $50 in free credits for 7 days with no credit card. Paid usage starts at $29.99 per user per month." },
      { q: "Which alternative is best for email and calendar automation?", a: "Zapier and Make cover Gmail, Outlook and calendar apps out of the box; n8n does too and lets you add AI agent steps with your own models." },
    ],
  },
  {
    slug: "cursor-vs-claude-code", kind: "vs", h1: "Cursor vs Claude Code: which AI coding agent should you use?",
    title: "Cursor vs Claude Code (2026): Pricing, Features & Verdict",
    description: "Cursor vs Claude Code compared: verified pricing, free tiers, where each runs, and which AI coding agent fits your workflow.",
    tools: ["cursor", "claude-code"], rankings: ["coding-agents", "vibe-coding"],
    verdict: "These are our two top-ranked coding agents. Choose Cursor if you want an AI-first editor with cloud agents and many models. Choose Claude Code if you live in the terminal and want the strongest autonomy on long, multi-file tasks. Many developers use both.",
    rows: [
      { tool: "cursor", pricing: "Free $0; paid plans from $8/mo (Plus) to $200/mo (Ultra); Teams $30+/user/mo — see site", freeTier: "Yes — limited agent requests", bestFor: "Day-to-day coding in an AI editor, cloud agents, team code review", hosting: "Desktop editor + cloud agents" },
      { tool: "claude-code", pricing: "Included with Claude Pro ($17/mo annual, $20 monthly), Max from $100/mo, Team/Enterprise; or pay via API", freeTier: "No — Claude Code requires a paid plan or API usage", bestFor: "Terminal-first, autonomous multi-step engineering", hosting: "Local CLI, IDE, desktop and web" },
    ],
    picks: [
      { tool: "cursor", text: "You want inline completions, a visual diff/review flow, and the option to switch between models and delegate to background cloud agents." },
      { tool: "claude-code", text: "You prefer the terminal, run large refactors, or want an agent that plans, edits, runs tests and iterates with minimal hand-holding." },
    ],
    faqs: [
      { q: "Is Claude Code free?", a: "No. Claude Code is included in paid Claude plans (Pro, Max, Team, Enterprise) and shares their usage limits, or you can pay per use via API credits." },
      { q: "Does Cursor have a free plan?", a: "Yes. Cursor's free plan includes limited agent and chat requests; paid plans add more usage, cloud agents and code review." },
      { q: "Can I use Claude Code inside Cursor?", a: "Yes — Claude Code runs in any terminal, including Cursor's integrated terminal, and has IDE integrations, so you can combine the two." },
      { q: "Which is better for beginners?", a: "Cursor's editor UI is usually easier for beginners. Claude Code rewards developers comfortable with the command line." },
    ],
  },
  {
    slug: "elevenlabs-alternatives", kind: "alternatives", h1: "Best ElevenLabs alternatives for voice agents",
    title: "Best ElevenLabs Alternatives for Voice Agents (2026)",
    description: "Compare ElevenLabs Agents alternatives — Vapi, Retell AI, LiveKit Agents and Bland AI — on verified pricing, free tiers and hosting.",
    tools: ["elevenlabs-agents", "vapi", "retell-ai", "livekit-agents", "bland-ai"], rankings: ["voice-agents"],
    verdict: "ElevenLabs still has the most natural voices. For a developer-first phone agent platform choose Vapi; for call centers choose Retell AI; for full control with open source choose LiveKit Agents.",
    rows: [
      { tool: "elevenlabs-agents", pricing: "Free $0; Starter $6, Creator $22, Pro $99, Scale $299, Business $990 per month; Enterprise custom", freeTier: "Yes — 10k credits/month", bestFor: "Most natural, multilingual voices", hosting: "Cloud (ElevenLabs)" },
      { tool: "vapi", pricing: "Usage-based: $0.05/min Vapi hosting plus provider costs; Pro package $999/mo minimum", freeTier: "$5 free credits", bestFor: "Developers building custom phone and web voice agents", hosting: "Cloud (Vapi)" },
      { tool: "retell-ai", pricing: "Pay-as-you-go $0.07–$0.31/min; Enterprise custom", freeTier: "Starts at $0, no platform fee (pay per minute)", bestFor: "Call-center inbound/outbound automation", hosting: "Cloud; dedicated server add-on on Enterprise" },
      { tool: "livekit-agents", pricing: "LiveKit Cloud: Build $0, Ship from $50/mo, Scale from $500/mo; Enterprise custom", freeTier: "Yes — Build plan, 1,000 agent session minutes", bestFor: "Custom realtime voice/video stacks", hosting: "Open source (self-host) or LiveKit Cloud" },
      { tool: "bland-ai", pricing: "See site", freeTier: "See site", bestFor: "High-volume enterprise outbound calling", hosting: "See site" },
    ],
    picks: [
      { tool: "vapi", text: "You're a developer who wants to mix STT, LLM and TTS providers (including ElevenLabs voices) with tool calling and telephony." },
      { tool: "retell-ai", text: "You run a support or sales call operation and want analytics, simulation testing and 20 free concurrent calls." },
      { tool: "livekit-agents", text: "You want open-source control, self-hosting, or realtime video as well as voice." },
      { tool: "bland-ai", text: "You're an enterprise running large outbound calling programs." },
      { tool: "elevenlabs-agents", text: "Voice quality and language coverage matter most — stay with ElevenLabs." },
    ],
    faqs: [
      { q: "What is the best alternative to ElevenLabs for voice agents?", a: "Vapi for developer flexibility, Retell AI for call centers, and LiveKit Agents for open-source control. All three can still use ElevenLabs voices as the TTS layer." },
      { q: "Is there a free ElevenLabs alternative?", a: "LiveKit's Agents framework is open source and LiveKit Cloud has a $0 Build plan. Vapi gives $5 in free credits and Retell AI has no platform fee — you pay per minute." },
      { q: "How much does ElevenLabs cost?", a: "ElevenLabs has a free plan with 10k credits/month; paid plans run from Starter at $6/month to Business at $990/month, with custom Enterprise pricing." },
      { q: "Can I use ElevenLabs voices with Vapi or Retell?", a: "Yes. Both Vapi and Retell AI list ElevenLabs as a voice provider option." },
    ],
  },
];
export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
export const comparisonsForTool = (toolSlug: string) => comparisons.filter((c) => c.tools.includes(toolSlug) || c.rows.some((r) => r.tool === toolSlug));
