// Comparison & alternatives pages. Pricing facts verified on each vendor's own pricing page (Oct 14, 2026; new pages Oct 16, 2026).
// Never guess prices — write "See site" when a fact could not be verified.
export interface CompareRow { tool: string; pricing: string; freeTier: string; bestFor: string; hosting: string }
export interface CompareLink { href: string; label: string }
/** Optional long-form section (pricing breakdown, MCP, when-to-pick…). Rendered between the table and the picks, in order. */
export interface CompareSection { id: string; heading: string; paragraphs?: string[]; table?: { head: string[]; rows: string[][] }; bullets?: string[]; note?: string; links?: CompareLink[] }
export interface Comparison {
  slug: string; kind: "vs" | "alternatives"; h1: string; title: string; description: string;
  tools: string[]; verdict: string; rows: CompareRow[];
  picks: { tool: string; text: string }[]; faqs: { q: string; a: string; links?: CompareLink[] }[]; rankings: string[];
  sections?: CompareSection[];
  /** Overrides VERIFIED_ON for pages re-checked later. */
  verifiedOn?: string;
}
export const VERIFIED_ON = "October 14, 2026";

const n8nRow: CompareRow = { tool: "n8n", pricing: "Cloud Starter from €20/mo, Pro €50/mo, Business €667/mo (billed annually); Enterprise custom", freeTier: "Self-hosted Community Edition is free; Cloud has a free trial (1,000 executions, no card)", bestFor: "Technical teams and AI agent workflows; billed per full workflow execution", hosting: "n8n Cloud (EU, Frankfurt) or self-host" };
const makeRow: CompareRow = { tool: "make", pricing: "Credit-based paid plans (Core, Pro, Teams, Enterprise) — see site for current prices", freeTier: "Free plan with 1,000 credits/month", bestFor: "Visual, branching scenarios; each module action uses credits", hosting: "Cloud (Make-hosted)" };
const zapierRow: CompareRow = { tool: "zapier", pricing: "Pro from $19.99/mo (750 tasks, annual) or $29.99 monthly; Team from $69/mo (annual); Enterprise custom", freeTier: "Free plan: 100 tasks/mo, two-step Zaps", bestFor: "Non-technical teams, widest app library (9,000+ apps)", hosting: "Cloud (Zapier-hosted)" };

const cursorRow: CompareRow = { tool: "cursor", pricing: "Free $0; paid plans from $8/mo (Plus) to $200/mo (Ultra); Teams $30+/user/mo — see site", freeTier: "Yes — limited agent requests", bestFor: "Day-to-day coding in an AI editor, cloud agents, team code review", hosting: "Desktop editor + cloud agents" };
const claudeCodeRow: CompareRow = { tool: "claude-code", pricing: "Included with Claude Pro ($17/mo annual, $20 monthly), Max from $100/mo, Team/Enterprise; or pay via API", freeTier: "No — Claude Code requires a paid plan or API usage", bestFor: "Terminal-first, autonomous multi-step engineering", hosting: "Local CLI, IDE, desktop and web" };
const codexRow: CompareRow = { tool: "openai-codex", pricing: "Included in ChatGPT Free, Go $8/mo, Plus $20/mo, Pro from $100/mo, Business, Enterprise; or API-key usage", freeTier: "Yes — included in ChatGPT Free (limited)", bestFor: "ChatGPT users; parallel cloud tasks and GitHub PR reviews", hosting: "Local CLI/IDE/desktop + cloud sandboxes" };
const copilotRow: CompareRow = { tool: "github-copilot", pricing: "Free $0; Pro $10/mo, Pro+ $39/mo, Max $100/mo; Business/Enterprise for orgs", freeTier: "Yes — limited chat and agent usage", bestFor: "Staying in your IDE; GitHub-native cloud agent and code review", hosting: "IDE extensions, CLI, github.com" };
const windsurfRow: CompareRow = { tool: "windsurf", pricing: "Free $0; Pro $20/mo; Max $200/mo; Teams $80/mo + $40/mo per full seat; Enterprise custom (Devin pricing, verified Oct 17, 2026)", freeTier: "Yes — light agent quota, unlimited Tab completions", bestFor: "An IDE that doubles as a command center for local and cloud Devin agents", hosting: "Desktop editor + Devin Cloud agents" };
const boltRow: CompareRow = { tool: "bolt-new", pricing: "Free $0; Pro $25/mo billed monthly (from 10M tokens, rollover); Teams $30/member/mo; Enterprise custom", freeTier: "Yes — 1M tokens/month (300K daily), Bolt branding", bestFor: "In-browser full-stack prototyping with real code", hosting: "Bolt hosting (custom domains on Pro)" };
const lovableRow: CompareRow = { tool: "lovable", pricing: "Credit-based plans (Pro from 100 credits/mo, Business, Enterprise), not per seat — see vendor pricing", freeTier: "Yes — 5 build credits/day (up to 30/month) + 20 Cloud credits/month", bestFor: "Non-technical builders shipping full-stack web apps", hosting: "Lovable Cloud" };
const v0Row: CompareRow = { tool: "v0", pricing: "Free $0; paid team plans include $30/user/mo credits; Business $100/user/mo; Enterprise custom", freeTier: "Yes — 7 messages/day", bestFor: "React/Next.js UI and apps on Vercel", hosting: "Deploys to Vercel" };
const R_ON = "October 28, 2026";
const browserUseRow: CompareRow = { tool: "browser-use", pricing: "Pay as you go: browsers $0.02/hour, residential proxy $5/GB, agents = model cost + 20%; no subscription", freeTier: "Open-source library is free; cloud gives a one-time $1 credit for eligible signups; top-ups from $5", bestFor: "Open-source Python browser agents and cheap cloud browsers", hosting: "Open source (self-host) or Browser Use Cloud" };
const browserbaseRow: CompareRow = { tool: "browserbase", pricing: "Free $0; Developer $20/mo (100 browser hours, then $0.12/hr); Startup $99/mo (500 hours, then $0.10/hr); Scale custom", freeTier: "Yes — 1 browser hour, 3 concurrent browsers, 15-minute sessions, 3 Agent runs", bestFor: "Production headless-browser infrastructure with Stagehand", hosting: "Cloud (Browserbase); no on-prem" };
const browserlessRow: CompareRow = { tool: "browserless", pricing: "Free $0; Prototyping $25/mo, Starter $140/mo, Scale $350/mo (billed annually); Enterprise custom", freeTier: "Yes — 1k units/month, 2 concurrent browsers, 2-minute sessions", bestFor: "Puppeteer/Playwright in the cloud, BrowserQL, screenshot/PDF and scraping APIs", hosting: "Cloud (San Francisco, London, Amsterdam) or self-host with Docker" };
const tinyfishRow: CompareRow = { tool: "tinyfish", pricing: "Pay as you go: TinyAgent $0.016/step, TinyBrowser $0.002/min, TinyMonitor $0.005/check; Enterprise custom", freeTier: "Yes — $8 in Wallet funds for new accounts; TinySearch and TinyFetch free within rate limits", bestFor: "Goal-based web agents over an API, with LLM, residential proxies and anti-bot included", hosting: "Cloud (TinyFish); VPC deployment on Enterprise" };
const gumloopRow: CompareRow = { tool: "gumloop", pricing: "Pro from $37/mo (20k credits/mo; extra usage $0.005/credit); Enterprise custom", freeTier: "14-day free trial of Pro", bestFor: "AI agents for non-technical teams across business apps, unlimited seats", hosting: "Cloud (Gumloop); optional VPC on Enterprise" };

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
      gumloopRow,
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
  {
    slug: "bolt-vs-lovable", kind: "vs", h1: "Bolt vs Lovable: which AI app builder is cheaper to build with, and to fix?",
    title: "Bolt vs Lovable (2026): Pricing, Fix Costs & Clear Verdict",
    description: "Lovable vs Bolt.new compared: free plans, Bolt Pro at $25/mo vs Lovable's credit plans, what it really costs to fix a broken Bolt or Lovable app, and which to pick.",
    tools: ["bolt-new", "lovable"], rankings: ["vibe-coding"], verifiedOn: R_ON,
    verdict: "Pick Lovable if you're non-technical. It takes you from a chat prompt to a hosted full-stack app, lets unlimited workspace members share one credit pool, and gives your account 10 free “Try to fix” repairs (each one becomes available again 24 hours after use). Pick Bolt if you want to see and edit the code. You get a full in-browser dev environment, a free plan with 1M tokens a month, Pro at $25/month with 10M tokens that roll over, and free manual edits in Code view. When something breaks, Lovable's free fixes make small errors cheap to repair. Bolt is cheaper if you can fix the code yourself.",
    rows: [boltRow, lovableRow],
    sections: [
      { id: "pricing", heading: "Bolt vs Lovable pricing",
        paragraphs: [
          "Bolt charges by AI tokens and Lovable by credits, so the cheaper option depends on how you build. Most of Bolt's token use comes from reading and syncing your project files, so bigger projects cost more per message. Lovable's Build mode is usage-based, and many requests cost less than one credit. Lovable's own examples: “Make the button gray” costs 0.50 credits, and “Add authentication with sign up and login” costs 1.20.",
        ],
        table: { head: ["", "Bolt", "Lovable"], rows: [
          ["Free plan", "1M tokens/month (300K/day cap), public and private projects, hosting with Bolt branding", "5 build credits/day (up to 30/month), 20 Cloud credits/month, 4 AI credits/month"],
          ["Main paid plan", "Pro $25/month billed monthly, from 10M tokens/month", "Pro, from 100 credits/month (see vendor pricing for current price)"],
          ["Teams", "Teams $30 per member/month, each member gets their own tokens", "Unlimited members on every plan sharing one credit pool; Business adds governance"],
          ["Unused allowance", "Paid tokens roll over and stay valid for two months; purchased reloads never expire", "Monthly plan credits expire two months after issue; top-ups last 12 months"],
          ["Custom domain", "Pro and up", "Paid plans"],
          ["Yearly discount", "Up to 28% on yearly billing", "Annual billing available (see vendor pricing)"],
        ] },
        links: [{ href: "https://bolt.new/pricing", label: "Bolt pricing" }, { href: "https://lovable.dev/pricing", label: "Lovable pricing" }, { href: "https://support.bolt.new/account/tokens", label: "Bolt tokens explained" }, { href: "https://docs.lovable.dev/introduction/subscription-plans", label: "Lovable plans compared" }] },
      { id: "cost-to-fix", heading: "How much does it cost to fix a Bolt or Lovable app?",
        paragraphs: [
          "There's no flat fee. On both platforms you pay for the AI work a fix takes (credits on Lovable, tokens on Bolt), or for a developer's time if you hand the app to someone. Here's what each vendor's own documentation says.",
          "Lovable: when a build error appears, the “Try to fix” button scans the logs and attempts a repair. Your account gets 10 free fixes, shared across Try to fix and fixes from the Security view in all your workspaces and projects. Each free fix becomes available again 24 hours after you use it. After all 10 are used, fixes are billed as normal Build usage. Security scans themselves are always free. To investigate without touching code, Plan mode costs 1 credit per message, plus any subagent research.",
          "Bolt: every “Attempt fix” click uses tokens, and Bolt's help center warns against clicking it over and over. Because most tokens go to syncing project files, a fix on a large project costs more than the same fix on a small one. Two things are free: restoring an earlier version from Version History (on-screen buttons don't use tokens), and editing code yourself in Code view. If you run out, upgrading is Bolt's most cost-effective option. The top monthly Pro plan and annual Pro plans can also buy token reloads, which never expire.",
          "Hiring a human: if AI fixes keep looping, paying a developer can cost less than burning credits. Lovable runs a partner directory of agencies and freelancers. Partners set their own rates, so ask for a fixed quote. Your code is portable: Lovable syncs to GitHub, GitLab or Bitbucket on every plan (code download and editing need a paid plan), Bolt lets you export a copy of your project, and Bolt can import a Lovable project directly.",
        ],
        table: { head: ["", "Bolt", "Lovable"], rows: [
          ["One-click fix", "Attempt fix: uses tokens on every attempt", "Try to fix: 10 free fixes (each refreshes 24h after use), then normal credits"],
          ["Free ways to fix", "Version History restore; direct edits in Code view", "Free fixes; security scans are always free"],
          ["Diagnose before changing code", "Plan Mode", "Plan mode: 1 credit per message"],
          ["Need more capacity", "Upgrade plan or buy token reloads (eligible Pro plans)", "Credit top-ups on Pro and Business"],
          ["Hand off to a developer", "Export the project; Bolt can also import from Lovable", "Git sync on all plans; Lovable partner directory"],
        ] },
        bullets: [
          "Undo first, then fix. Rolling back a bad change is cheaper than prompting the AI to un-build it.",
          "Stop after one or two failed automatic fixes. Paste the exact error, name the file, and ask for a plan before more code gets written.",
          "Keep projects small and focused. On Bolt, a smaller project context means fewer tokens per fix.",
        ],
        note: "Sources: Lovable docs (project chat, credits and plans) and Bolt help center (token efficiency, tokens), checked October 28, 2026.",
        links: [{ href: "https://docs.lovable.dev/features/projects/chat", label: "Lovable: fix errors and get unstuck" }, { href: "https://support.bolt.new/prompting/maximizing-token-efficiency", label: "Bolt: maximize token efficiency" }, { href: "https://lovable-partner-directory.lovable.app/", label: "Hire a Lovable partner" }, { href: "https://support.bolt.new/integrations/lovable-import", label: "Import a Lovable project into Bolt" }] },
      { id: "when-to-pick", heading: "When to pick which",
        bullets: [
          "You've never written code and want a published app with auth, database and hosting handled → Lovable.",
          "You want to read, edit and debug the generated code in a real dev environment → Bolt.",
          "A whole team or class will build together on one bill → Lovable (unlimited members, shared credits).",
          "You want the most free AI usage to experiment → Bolt's free plan (1M tokens/month, 300K/day).",
          "You expect lots of small errors and don't want to pay for each fix → Lovable's 10 free fixes.",
        ] },
    ],
    picks: [
      { tool: "lovable", text: "Founders, designers and PMs who want to chat their way to a deployed React app, with unlimited workspace members sharing one credit pool and free one-click fixes." },
      { tool: "bolt-new", text: "Developers and tinkerers who want to see and edit the code in a full in-browser environment, with paid tokens that roll over for two months." },
    ],
    faqs: [
      { q: "How much does it cost to fix a Bolt or Lovable app?", a: "On Lovable, your first 10 “Try to fix” repairs are free (each refreshes 24 hours after use), and further fixes cost normal build credits. On Bolt, every “Attempt fix” uses tokens, but restoring from Version History and editing code yourself in Code view are free. If you hire a developer, rates are set by the developer or agency, so get a fixed quote.", links: [{ href: "https://docs.lovable.dev/features/projects/chat", label: "Lovable fix docs" }, { href: "https://support.bolt.new/prompting/maximizing-token-efficiency", label: "Bolt token tips" }] },
      { q: "Is Bolt or Lovable cheaper?", a: "Bolt Pro is $25/month billed monthly with 10M tokens to start, and Teams is $30 per member per month. Lovable prices plans by the credits they include rather than by seat, and Pro starts at 100 credits a month. Check Lovable's pricing page for the current price of the tier that fits your usage.", links: [{ href: "https://bolt.new/pricing", label: "Bolt pricing" }, { href: "https://lovable.dev/pricing", label: "Lovable pricing" }] },
      { q: "Do Bolt and Lovable have free plans?", a: "Yes. Bolt's free plan includes 1M tokens a month (300K daily limit) and hosting with Bolt branding. Lovable's free plan includes 5 build credits a day (up to 30 a month), 20 Cloud credits a month and 4 AI credits a month." },
      { q: "Does Lovable's Try to fix cost credits?", a: "Not at first. Each account gets 10 free fixes, shared across Try to fix and Security-view fixes in all workspaces and projects. Each one becomes available again 24 hours after you use it. After that, fixes are billed as standard build usage." },
      { q: "Does Bolt's Attempt fix use tokens?", a: "Yes, each attempt uses tokens. Bolt recommends not clicking it repeatedly. Instead, research the error, step in manually, or switch to Plan Mode to agree on a fix first." },
      { q: "Can I move a project from Lovable to Bolt?", a: "Yes. Bolt's help center documents importing a project from Lovable, and Lovable syncs your code to GitHub, GitLab or Bitbucket on all plans.", links: [{ href: "https://support.bolt.new/integrations/lovable-import", label: "Import from Lovable" }] },
      { q: "Who owns the code?", a: "Lovable says you own the apps and code you build. Bolt gives you the full source in its in-browser editor, and you can export a copy of your project." },
      { q: "Which is better for teams?", a: "Lovable workspaces allow unlimited members on all plans and share one credit balance, with per-member limits. Bolt Teams bills per member, and each member gets their own token allotment." },
    ],
  },
  {
    slug: "lovable-vs-v0", kind: "vs", h1: "Lovable vs v0: which AI builder fits your app?",
    title: "Lovable vs v0 (2026): Pricing, Free Tiers & Best Use Cases",
    description: "Lovable vs v0 by Vercel: compare verified free tiers, pricing models, hosting and whether you need a full-stack app or Next.js UI.",
    tools: ["lovable", "v0"], rankings: ["vibe-coding"],
    verdict: "Choose Lovable for complete full-stack apps built by chat with backend and hosting included. Choose v0 if you're in the Next.js/Vercel ecosystem and want high-quality React UI you can sync to GitHub and deploy on Vercel.",
    rows: [lovableRow, v0Row],
    picks: [
      { tool: "lovable", text: "Non-developers who want auth, database and hosting handled for them, and teams that want one shared credit pool." },
      { tool: "v0", text: "Front-end developers and Next.js teams who want generated UI that drops straight into a Vercel project, with a visual Design Mode." },
    ],
    faqs: [
      { q: "Is v0 free?", a: "v0 has a Free plan at $0/month with a limit of 7 messages per day, Vercel deploys, Design Mode and GitHub sync. Paid team plans include $30 of monthly credits per user; Business is $100 per user per month." },
      { q: "Is Lovable free?", a: "Yes. Lovable's free plan gives 5 build credits per day (up to 30 a month) plus 20 Cloud credits a month. Check current pricing for paid plans." },
      { q: "Can v0 build a backend?", a: "v0 generates React/Next.js apps that deploy to Vercel. Lovable leans further into full-stack apps with built-in Cloud hosting and AI features." },
      { q: "Which is better for designers?", a: "Both work well. v0's Design Mode lets you edit visually; Lovable is the more hands-off path from idea to a published app." },
    ],
  },
  {
    slug: "cursor-vs-windsurf", kind: "vs", h1: "Cursor vs Windsurf (now Devin Desktop): which AI code editor wins?",
    title: "Cursor vs Windsurf / Devin Desktop (2026): AI IDEs Compared",
    description: "Cursor vs Windsurf, now Devin Desktop: compare the two agentic AI code editors on pricing, free tiers, agents and who each one suits best.",
    tools: ["cursor", "windsurf"], rankings: ["coding-agents"],
    verdict: "Both are VS Code–style editors with strong agents. Cursor is our higher-ranked pick thanks to cloud background agents, Projects and broad model choice. Windsurf is now Devin Desktop (renamed by Cognition in June 2026), and its Cascade agent has been replaced by Devin Local; pick it if you want one editor to run local and Devin Cloud agents side by side. Try both free tiers on a real task.",
    rows: [cursorRow, windsurfRow],
    picks: [
      { tool: "cursor", text: "You want the most mature AI editor, background cloud agents, PR review and many models to choose from." },
      { tool: "windsurf", text: "You want an editor built around managing many agents at once, local Devin Local agents plus Devin Cloud sessions on one Kanban board, and you may already pay for Devin." },
    ],
    faqs: [
      { q: "What happened to Windsurf?", a: "Cognition renamed Windsurf to Devin Desktop on June 2, 2026, and windsurf.com now redirects to devin.ai/desktop. It is the same IDE with your settings carried over. The Cascade agent was replaced by Devin Local (Cascade was retired July 1, 2026)." },
      { q: "Is Windsurf (Devin Desktop) free?", a: "Yes, there is a Free plan with a light agent quota and unlimited Tab completions. Pro is $20/month, Max $200/month, and Teams $80/month plus $40/month per full seat. Prices change often, so check devin.ai/pricing." },
      { q: "How much does Cursor cost?", a: "Cursor has a free plan with limited agent requests; paid plans range from $8/month (Plus) to $200/month (Ultra), with Teams from $30 per user per month." },
      { q: "Can I import my VS Code settings?", a: "Both editors are built on VS Code foundations and support importing extensions, themes and keybindings." },
      { q: "Which is better for large codebases?", a: "Cursor's cloud agents and Projects (parallel subagents) suit long-running work on big repos; Devin Desktop (formerly Windsurf) pairs its editor with Devin Local and Devin Cloud agents for the same kind of work." },
    ],
  },
  {
    slug: "claude-code-vs-codex", kind: "vs", h1: "Claude Code vs OpenAI Codex: which coding agent should you use?",
    title: "Claude Code vs Codex (2026): Pricing, Plans & Verdict",
    description: "Claude Code vs OpenAI Codex compared: verified plan pricing, free access, CLI and cloud features, and which agentic coder to choose.",
    tools: ["claude-code", "openai-codex"], rankings: ["coding-agents"],
    verdict: "Both are excellent terminal-first coding agents. Claude Code is our top pick for autonomous multi-file work. Codex is the better value if you already pay for ChatGPT — it's included on every plan, even Free — and its cloud tasks and GitHub PR reviews are well integrated.",
    rows: [claudeCodeRow, codexRow],
    picks: [
      { tool: "claude-code", text: "You want the strongest long-horizon autonomy, subagents, skills and plugins, and you're happy on a Claude Pro or Max plan." },
      { tool: "openai-codex", text: "You already use ChatGPT, want parallel cloud tasks, @codex PR reviews in GitHub, or need to try an agent at no cost." },
    ],
    faqs: [
      { q: "Is Codex free?", a: "Codex is included in ChatGPT Free, Go ($8/month), Plus ($20/month), Pro (from $100/month), Business and Enterprise plans, with usage limits that vary by plan. You can also pay per use with an API key." },
      { q: "Is Claude Code free?", a: "No. Claude Code requires a paid Claude plan (Pro from $17/month annual or $20 monthly, Max from $100/month, Team/Enterprise) or API credits." },
      { q: "Can I use both?", a: "Yes. Both run as CLIs in any terminal and support MCP and AGENTS-style project instructions, so many developers keep both installed and pick per task." },
      { q: "Which is better for code review?", a: "Codex has built-in GitHub code review and automatic PR reviews on ChatGPT plans. Claude Code can review code locally and via its GitHub integration." },
    ],
  },
  {
    slug: "github-copilot-vs-cursor", kind: "vs", h1: "GitHub Copilot vs Cursor: extension or AI-first editor?",
    title: "GitHub Copilot vs Cursor (2026): Pricing & Features",
    description: "GitHub Copilot vs Cursor: verified plan prices, free tiers, agent features and whether to stay in your IDE or switch editors.",
    tools: ["github-copilot", "cursor"], rankings: ["coding-agents"],
    verdict: "Copilot wins if you want to stay in your current IDE (VS Code, JetBrains, Xcode, Neovim and more) and live on GitHub — its cloud agent turns issues into PRs. Cursor wins if you want the most capable AI-first editor and are happy to switch.",
    rows: [copilotRow, cursorRow],
    picks: [
      { tool: "github-copilot", text: "You use JetBrains, Visual Studio or Xcode, your team is on GitHub, or you want to assign issues to an agent that opens pull requests." },
      { tool: "cursor", text: "You're on VS Code already and want deeper agentic editing, background cloud agents and Projects in one editor." },
    ],
    faqs: [
      { q: "Is GitHub Copilot free?", a: "Yes, Copilot Free includes limited chat and agent usage plus code completions. Paid plans are Pro $10, Pro+ $39 and Max $100 per month." },
      { q: "How does Copilot billing work now?", a: "Copilot uses GitHub AI Credits (1 credit = $0.01) for chat, agents, code review and CLI. Code completions don't use credits and stay unlimited on paid plans." },
      { q: "Is Cursor better than Copilot?", a: "We rank Cursor higher for agentic coding, but Copilot is cheaper to start, works in more IDEs and is tightly integrated with GitHub." },
      { q: "Can I use Copilot inside Cursor?", a: "Cursor ships its own AI features; most people use one or the other as their main assistant." },
    ],
  },
  {
    slug: "cursor-alternatives", kind: "alternatives", h1: "Best Cursor alternatives for AI coding",
    title: "Best Cursor Alternatives (2026): Claude Code, Copilot, Codex & More",
    description: "Cursor alternatives compared: Claude Code, GitHub Copilot, OpenAI Codex, Devin Desktop (formerly Windsurf), Cline and Aider on verified pricing and free tiers.",
    tools: ["cursor", "claude-code", "github-copilot", "openai-codex", "windsurf", "cline", "aider"], rankings: ["coding-agents"],
    verdict: "Cursor is still our favorite AI editor, but the right alternative depends on why you're leaving: Claude Code for terminal-first autonomy, Copilot to stay in your IDE, Codex if you already pay for ChatGPT, and Cline or Aider for open-source, bring-your-own-model control.",
    rows: [cursorRow, claudeCodeRow, copilotRow, codexRow, windsurfRow,
      { tool: "cline", pricing: "Open-source extension; you pay your model provider — check current pricing", freeTier: "Extension is free (model usage billed by your provider)", bestFor: "BYO-model autonomous agent inside VS Code", hosting: "Local VS Code extension" },
      { tool: "aider", pricing: "Free and open source; you pay your model provider", freeTier: "Yes — fully free tool (bring your own API key)", bestFor: "Git-native AI edits in the terminal", hosting: "Local CLI" },
    ],
    picks: [
      { tool: "claude-code", text: "You want an agent that plans, edits, tests and iterates on big tasks from the terminal." },
      { tool: "github-copilot", text: "You want to keep your current IDE and use GitHub-native agents and reviews at a lower starting price." },
      { tool: "openai-codex", text: "You already have ChatGPT — Codex is included on every plan including Free." },
      { tool: "windsurf", text: "You want another full AI IDE, now centred on managing local and cloud Devin agents (this is Windsurf, renamed Devin Desktop in 2026)." },
      { tool: "cline", text: "You want an open-source VS Code agent and full control over which model you pay for." },
      { tool: "aider", text: "You like the terminal and want every AI edit auto-committed to git." },
    ],
    faqs: [
      { q: "What is the best free Cursor alternative?", a: "Aider and Cline are free, open-source tools (you pay only for model usage). Codex is included in ChatGPT Free, and GitHub Copilot Free offers limited chat and agent usage." },
      { q: "What's the closest alternative to Cursor?", a: "Devin Desktop (formerly Windsurf) is the most similar: another AI-first editor built on VS Code foundations. GitHub Copilot in VS Code is the next closest." },
      { q: "Is Claude Code a Cursor alternative?", a: "It overlaps but works differently: Claude Code is a terminal/IDE agent rather than an editor. Many developers run Claude Code inside Cursor's terminal." },
      { q: "Why switch from Cursor?", a: "Common reasons are cost at heavy usage, wanting a specific IDE (JetBrains, Xcode), preferring the terminal, or wanting open-source tools with your own model keys." },
    ],
  },
  {
    slug: "zapier-alternatives", kind: "alternatives", h1: "Best Zapier alternatives for automation and AI agents",
    title: "Best Zapier Alternatives (2026): Make, n8n, Gumloop & More",
    description: "Zapier alternatives compared: Make, n8n, Gumloop, Relevance AI and Lindy on verified pricing, free plans, hosting and best use cases.",
    tools: ["zapier", "make", "n8n", "gumloop", "relevance-ai", "lindy"], rankings: ["no-code-automation"],
    verdict: "Make is the best all-round Zapier alternative: a visual builder with a more generous free plan (1,000 credits vs 100 tasks). n8n is the pick for technical teams who want self-hosting and per-execution pricing. Gumloop and Lindy suit AI-first workflows and assistants.",
    rows: [zapierRow, makeRow, n8nRow,
      gumloopRow,
      { tool: "relevance-ai", pricing: "See site", freeTier: "Free tier available — check current pricing", bestFor: "Multi-agent 'AI workforce' for sales and ops", hosting: "Cloud" },
      { tool: "lindy", pricing: "Team $29.99/mo per active user (3,000 credits each); Enterprise custom", freeTier: "$50 in free credits for 7 days, no card", bestFor: "Inbox, meetings and Slack-native assistant work", hosting: "Cloud (Lindy-hosted)" },
    ],
    picks: [
      { tool: "make", text: "You want a cheaper, more visual Zapier with routers, iterators and a free plan with 1,000 credits a month." },
      { tool: "n8n", text: "You're technical, want to self-host for free, or run long workflows where per-execution billing saves money." },
      { tool: "gumloop", text: "Your automations are mostly AI steps — scraping, LLM calls, enrichment." },
      { tool: "relevance-ai", text: "You want a team of sales/ops agents rather than trigger-action Zaps." },
      { tool: "lindy", text: "You want an AI assistant for email, meetings and Slack rather than a workflow builder." },
    ],
    faqs: [
      { q: "What is the cheapest Zapier alternative?", a: "Self-hosted n8n Community Edition is free apart from server costs. Make's free plan includes 1,000 credits a month versus Zapier's 100 tasks." },
      { q: "Is Make better than Zapier?", a: "Make gives more visual control and a bigger free allowance; Zapier has the largest app library (9,000+ apps) and is the easiest to start. See our Make vs Zapier comparison." },
      { q: "Is there an open-source Zapier alternative?", a: "n8n is fair-code and self-hostable for free via its Community Edition." },
      { q: "Can I migrate Zaps automatically?", a: "Generally no — you rebuild workflows in the new tool. Start with your highest-volume Zaps where savings are biggest." },
    ],
  },
  {
    slug: "n8n-alternatives", kind: "alternatives", h1: "Best n8n alternatives for workflow automation",
    title: "Best n8n Alternatives (2026): Make, Zapier, Gumloop & More",
    description: "n8n alternatives compared: Make, Zapier, Gumloop and Relevance AI on verified pricing, free plans and hosting, for no-code and AI workflows.",
    tools: ["n8n", "make", "zapier", "gumloop", "relevance-ai"], rankings: ["no-code-automation", "agent-frameworks"],
    verdict: "If n8n feels too technical, Make is the closest visual alternative and Zapier is the easiest. If you need agents in code rather than nodes, look at frameworks like LangGraph or CrewAI instead.",
    rows: [n8nRow, makeRow, zapierRow,
      gumloopRow,
      { tool: "relevance-ai", pricing: "See site", freeTier: "Free tier available — check current pricing", bestFor: "Multi-agent 'AI workforce' for sales and ops", hosting: "Cloud" },
    ],
    picks: [
      { tool: "make", text: "You want a visual builder that non-developers can maintain, with no servers to run and a free plan." },
      { tool: "zapier", text: "You need the widest app coverage and the fastest setup for business teams." },
      { tool: "gumloop", text: "You want AI-native building blocks without managing credentials and nodes yourself." },
      { tool: "relevance-ai", text: "You're building sales or ops agents with approvals and knowledge bases." },
    ],
    faqs: [
      { q: "Why look for an n8n alternative?", a: "Usually because self-hosting is a burden, the node editor feels too technical for the team, or a needed app integration is missing." },
      { q: "Is there a free n8n alternative?", a: "Make (1,000 credits/month) and Zapier (100 tasks/month) both have free plans. n8n itself is free to self-host." },
      { q: "Which alternative is best for AI agents?", a: "Make and Zapier both offer AI agents; Relevance AI and Gumloop are AI-first. For code-level control, use an agent framework such as LangGraph or CrewAI." },
      { q: "Can I self-host Make or Zapier?", a: "No. Both are cloud-only services. If self-hosting is required, n8n remains the usual choice." },
    ],
  },
  {
    slug: "crewai-vs-langgraph", kind: "vs", h1: "CrewAI vs LangGraph: which agent framework should you use?",
    title: "CrewAI vs LangGraph (2026): Multi-Agent Frameworks Compared",
    description: "CrewAI vs LangGraph compared: open-source licensing, platform pricing, control vs speed, and which multi-agent framework fits your project.",
    tools: ["crewai", "langgraph"], rankings: ["agent-frameworks"],
    verdict: "Pick CrewAI to get a role-based multi-agent crew working fast with little boilerplate. Pick LangGraph when you need fine-grained control: explicit graphs, persistence, human-in-the-loop and streaming for production agents. Both frameworks are open source.",
    rows: [
      { tool: "crewai", pricing: "Open-source framework; CrewAI platform: Basic free, Enterprise custom", freeTier: "Yes — framework is free; platform Basic includes 50 workflow executions/month", bestFor: "Role-based multi-agent crews and business automations", hosting: "Self-host the framework; CrewAI cloud, your VPC or your infra (Enterprise)" },
      { tool: "langgraph", pricing: "Open source (MIT); LangSmith Developer $0 (1 seat), Plus $39/seat/mo + usage, Enterprise custom", freeTier: "Yes — framework is free; LangSmith Developer includes 5k base traces/month", bestFor: "Stateful, controllable agents with human-in-the-loop", hosting: "Self-host, or LangSmith Cloud (US/EU), hybrid or self-hosted (Enterprise)" },
    ],
    picks: [
      { tool: "crewai", text: "You want agents defined by roles and goals collaborating on tasks, plus a visual Studio for business users." },
      { tool: "langgraph", text: "You're an engineer building production agents that need checkpoints, retries, branching and tracing in LangSmith." },
    ],
    faqs: [
      { q: "Are CrewAI and LangGraph free?", a: "Both frameworks are open source and free. Their hosted platforms are optional: CrewAI has a free Basic plan (50 executions/month) and custom Enterprise; LangSmith has a free Developer plan and Plus at $39 per seat per month plus usage." },
      { q: "Which is easier to learn?", a: "CrewAI is generally faster to get started with thanks to its high-level Crew/Agent/Task abstractions. LangGraph is lower-level and more explicit." },
      { q: "Can CrewAI and LangGraph work together?", a: "They're separate frameworks, but both work with common tools such as MCP servers and browser infrastructure like Browserbase." },
      { q: "Which is better for production?", a: "LangGraph's persistence, human-in-the-loop and LangSmith observability make it a strong production choice; CrewAI Enterprise adds governance, SSO and VPC deployment." },
    ],
  },
  {
    slug: "browser-use-vs-browserbase", kind: "vs", h1: "Browser Use vs Browserbase: which browser-agent platform should you use in 2026?",
    title: "Browser Use vs Browserbase (2026): Pricing, MCP & Verdict",
    description: "Browser Use vs Browserbase: $0.02 vs $0.10–$0.12 per browser hour, free credits, both hosted MCP servers compared, and a clear verdict on which to pick.",
    tools: ["browser-use", "browserbase"], rankings: ["browser-agents"], verifiedOn: R_ON,
    verdict: "Pick Browser Use if you want an AI agent that does the browsing for you, or the cheapest cloud browsers: $0.02 per browser hour, pay as you go, no subscription, and credits that never expire. Pick Browserbase if you are building your own automation on Playwright, Puppeteer, Selenium or Stagehand and want managed browser infrastructure: monthly plans with included hours, captcha solving on paid plans, stealth, session recordings, and Search and Fetch APIs. Both ship an official hosted MCP server.",
    rows: [browserUseRow, browserbaseRow],
    sections: [
      { id: "pricing", heading: "Pricing compared",
        paragraphs: [
          "The two price very differently. Browser Use Cloud is purely pay as you go: you top up credits (from $5) that never expire and pay for browser minutes, proxy traffic and model tokens. Browserbase sells monthly plans that bundle browser hours, concurrency, Agent runs and Search/Fetch calls, then bills overage at the plan's rate.",
          "Our math for raw browser time: 100 browser hours cost $2 on Browser Use (plus proxy traffic) versus a $20/month Browserbase Developer plan that includes 100 hours. Past the included hours, Browserbase charges $0.12/hour on Developer and $0.10/hour on Startup. Browser Use turns its residential proxy on by default at $5/GB, so traffic-heavy pages add up — bringing your own proxy drops that to $0.20/GB.",
        ],
        table: { head: ["", "Browser Use", "Browserbase"], rows: [
          ["Billing model", "Pay as you go; prepaid credits never expire", "Monthly plan with included usage, then overage"],
          ["Cheapest paid entry", "$5 minimum top-up", "Developer $20/mo"],
          ["Free usage", "$1 one-time credit (eligible Google, GitHub or Microsoft signups, no card)", "Free plan: 1 browser hour, 3 Agent runs, $5 in model tokens, 1,000 Search and 1,000 Fetch calls"],
          ["Browser time", "$0.02 per hour, rounded up to whole minutes (1-minute minimum)", "100 hours on Developer, then $0.12/hr; 500 hours on Startup ($99/mo), then $0.10/hr"],
          ["Concurrency", "10 to start; 50 after $100 total paid, 250 after $1,000, 500 after $5,000", "3 Free, 25 Developer, 100 Startup, 250+ Scale"],
          ["Proxies", "Residential $5/GB (on by default); your own proxy $0.20/GB", "1 GB on Developer, then $12/GB; 5 GB on Startup, then $10/GB"],
          ["AI agent costs", "Model token price + 20% service fee, plus browser time", "Model Gateway at market price (pay as you go)"],
          ["Compliance", "SOC 2 Type II, HIPAA", "SOC 2; HIPAA BAA and DPA on Scale"],
        ] },
        note: "Prices from browser-use.com/pricing and browserbase.com/pricing, checked October 28, 2026. Worked examples are our own arithmetic.",
        links: [{ href: "https://browser-use.com/pricing", label: "Browser Use pricing" }, { href: "https://www.browserbase.com/pricing", label: "Browserbase pricing" }] },
      { id: "mcp", heading: "Browserbase MCP server vs Browser Use MCP server",
        paragraphs: [
          "Browserbase MCP gives an MCP client (Claude, Cursor, ChatGPT and others) step-by-step control of a cloud browser. The recommended setup is the hosted Streamable HTTP endpoint at https://mcp.browserbase.com/mcp with your Browserbase API key; you can also run it locally over STDIO with npx @browserbasehq/mcp. It is built on Stagehand and exposes start, navigate, act, observe, extract and end tools. Stagehand's default model is Google Gemini 2.5 Flash-Lite, and you can switch models with the modelName and modelApiKey parameters. The server is open source (Apache-2.0) on GitHub, and Claude Code users can add it with one claude mcp add command.",
          "Browser Use MCP hands a whole task to Browser Use's own agent. The hosted endpoint is https://api.browser-use.com/v3/mcp with a Bearer API key, and its tools are run_session, get_session, send_task, stop_session, get_session_messages, list_sessions and list_browser_profiles. You describe the task, pick a model and optionally an output schema or a saved browser profile for logged-in sites, then poll for the result and cost. It runs API V3 sessions.",
        ],
        bullets: [
          "Want your assistant to drive the browser click by click? Use Browserbase MCP.",
          "Want to delegate an entire web task and get a result back? Use Browser Use MCP.",
          "Both are billed as normal usage on your account: browser time, proxies and model tokens.",
        ],
        links: [{ href: "https://docs.browserbase.com/integrations/mcp/setup", label: "Browserbase MCP setup" }, { href: "https://github.com/browserbase/mcp-server-browserbase", label: "Browserbase MCP on GitHub" }, { href: "https://docs.browser-use.com/cloud/guides/mcp-server", label: "Browser Use MCP docs" }] },
      { id: "when-to-pick", heading: "When to pick which",
        bullets: [
          "You want to describe a task in plain English and get structured results back → Browser Use (Cloud agent or its MCP server).",
          "You already have Playwright, Puppeteer or Selenium scripts and need them running reliably in the cloud → Browserbase.",
          "You need the lowest cost per browser hour for bursty or high-volume jobs → Browser Use ($0.02/hour, no subscription).",
          "You want a predictable monthly bill with included hours, captcha solving and session recordings → Browserbase Developer ($20/mo) or Startup ($99/mo).",
          "You want to run the agent loop yourself for free → Browser Use's MIT-licensed open-source library (bring your own model).",
          "You need web search and page fetching next to your browsers → Browserbase includes Search and Fetch APIs on every plan.",
          "You need a HIPAA BAA → both list HIPAA; on Browserbase it is part of the Scale plan.",
        ] },
    ],
    picks: [
      { tool: "browser-use", text: "You want an open-source agent you can run yourself, or the lowest per-hour cloud browser cost with credits that never expire." },
      { tool: "browserbase", text: "You need reliable browser fleets with captcha solving, stealth, recordings, compliance (SOC 2, HIPAA on Scale) and the Stagehand SDK." },
    ],
    faqs: [
      { q: "Which is cheaper, Browser Use or Browserbase?", a: "For raw browser time Browser Use is cheaper: $0.02 per browser hour with no subscription, versus Browserbase's $20/month Developer plan (100 hours included, then $0.12/hour) or $99/month Startup plan (500 hours, then $0.10/hour). Add proxy traffic on both, and model costs if you run AI agents.", links: [{ href: "https://browser-use.com/pricing", label: "Browser Use pricing" }, { href: "https://www.browserbase.com/pricing", label: "Browserbase pricing" }] },
      { q: "Is there a Browserbase MCP server?", a: "Yes. Browserbase hosts an official MCP server at https://mcp.browserbase.com/mcp (Streamable HTTP), and you can run it locally over STDIO with npx @browserbasehq/mcp. It is built on Stagehand and gives MCP clients start, navigate, act, observe, extract and end tools.", links: [{ href: "https://docs.browserbase.com/integrations/mcp/setup", label: "Browserbase MCP setup" }] },
      { q: "Does Browser Use have an MCP server?", a: "Yes. Browser Use Cloud's MCP server lives at https://api.browser-use.com/v3/mcp and authenticates with your API key. It runs whole tasks with run_session and lets you poll, follow up or stop them.", links: [{ href: "https://docs.browser-use.com/cloud/guides/mcp-server", label: "Browser Use MCP docs" }] },
      { q: "Is Browser Use free?", a: "The Browser Use library is open source under the MIT license. Browser Use Cloud is pay as you go, with a one-time $1 free credit for eligible signups and 10 concurrent sessions to start." },
      { q: "Does Browserbase have a free plan?", a: "Yes. The Free plan includes 3 concurrent browsers, 1 browser hour, 15-minute sessions, 3 Agent runs, 1,000 Search and 1,000 Fetch calls, and $5 in model tokens." },
      { q: "Can I self-host Browserbase or Browser Use?", a: "Browserbase is cloud-only and does not offer on-prem deployment, though it offers private cloud and VPC connectivity to large enterprise customers. Browser Use's open-source library runs anywhere, and its pricing page offers an on-prem option for running browsers and agents inside your network." },
      { q: "Can I use Browser Use with Browserbase?", a: "Browserbase supports Playwright, Puppeteer, Selenium and Stagehand, so Playwright-based agents can run on its cloud browsers." },
      { q: "What is Stagehand?", a: "Stagehand is Browserbase's open-source (MIT) SDK that mixes Playwright code with AI primitives: act, extract and observe." },
    ],
  },
  {
    slug: "browserbase-vs-browserless", kind: "vs", h1: "Browserbase vs Browserless: which headless browser cloud should you use?",
    title: "Browserbase vs Browserless (2026): Pricing, MCP & Self-Hosting",
    description: "Browserbase vs Browserless: browser hours vs 30-second units, free plans, hosted MCP servers, self-hosting and captcha solving compared, with a clear verdict.",
    tools: ["browserbase", "browserless"], rankings: ["browser-agents"], verifiedOn: R_ON,
    verdict: "Pick Browserless if you want the option to self-host (Docker image, free for non-commercial use, commercial license on Enterprise), need Chrome, WebKit and Firefox, or want ready-made REST APIs for screenshots, PDFs, scraping and Lighthouse audits. Captcha solving is included even on its free plan. Pick Browserbase if you're building AI browser agents with Stagehand and want plans that bundle browser hours with Agent runs and Search and Fetch APIs, and you don't need on-prem.",
    rows: [browserbaseRow, browserlessRow],
    sections: [
      { id: "pricing", heading: "Pricing compared: browser hours vs units",
        paragraphs: [
          "Browserbase bills browser hours. Browserless bills units, where one unit is up to 30 seconds of browser time per connection, and every reconnect starts a fresh unit. A continuous one-hour session is therefore 120 units. Many short connections each cost at least one unit.",
          "Our math at overage rates: Browserless works out to about $0.24 per browser hour on Prototyping ($0.0020/unit), $0.20 on Starter ($0.0017) and $0.18 on Scale ($0.0015). Browserbase's overage is $0.12/hour on Developer and $0.10/hour on Startup. Browserless's listed plan prices are for annual billing. Monthly billing costs more, so see vendor pricing.",
        ],
        table: { head: ["", "Browserbase", "Browserless"], rows: [
          ["Pricing unit", "Browser hours", "Units: up to 30 seconds of browser time per connection"],
          ["Free plan", "1 browser hour, 3 concurrent browsers, 15-minute sessions", "1k units/month, 2 concurrent browsers, 2-minute sessions"],
          ["Entry paid plan", "Developer $20/mo: 100 hours, 25 concurrent browsers", "Prototyping $25/mo (billed annually): 20k units, 10 concurrent, 15-minute sessions"],
          ["Mid plan", "Startup $99/mo: 500 hours, 100 concurrent", "Starter $140/mo (billed annually): 180k units, 40 concurrent, 30-minute sessions"],
          ["Top self-serve plan", "Scale: custom, 250+ concurrent", "Scale $350/mo (billed annually): 500k units, 100 concurrent, 60-minute sessions"],
          ["Overage", "$0.12/hr (Developer), $0.10/hr (Startup)", "$0.0020/unit (Prototyping), $0.0017 (Starter), $0.0015 (Scale)"],
          ["Proxies", "1 GB on Developer then $12/GB; 5 GB on Startup then $10/GB", "Residential 6 units/MB, datacenter 2 units/MB"],
          ["Captcha solving", "Developer plan and up", "All plans, 10 units per successful solve"],
          ["Self-hosting", "No on-prem; private cloud and VPC options for large enterprises", "Yes: Docker, free for non-commercial use; commercial license on Enterprise"],
          ["Compliance", "SOC 2; HIPAA BAA and DPA on Scale", "SOC 2 Type II, GDPR, HIPAA BAA and DPA available"],
        ] },
        note: "Prices from browserbase.com/pricing and browserless.io/pricing, checked October 28, 2026. Per-hour figures are our own arithmetic.",
        links: [{ href: "https://www.browserbase.com/pricing", label: "Browserbase pricing" }, { href: "https://www.browserless.io/pricing", label: "Browserless pricing" }] },
      { id: "mcp", heading: "MCP servers: Browserbase MCP vs Browserless MCP",
        paragraphs: [
          "Browserbase MCP is hosted at https://mcp.browserbase.com/mcp, or you can run it locally with npx @browserbasehq/mcp. It is built on Stagehand and gives your assistant browser primitives: start, navigate, act, observe, extract and end.",
          "Browserless MCP is hosted at https://mcp.browserless.io/mcp and supports OAuth sign-in, so you don't have to paste a token into clients that support OAuth. It exposes 14 tools. browserless_agent is a stateful browser your assistant can drive across turns. Eight stateless tools cover smart scraping, custom Puppeteer functions, page export to HTML, PDF or image, search, site mapping, crawling and Lighthouse audits, plus on-demand agent skills. Five read-only tools report on your account. The npm package @browserless.io/mcp can point at a self-hosted Browserless instance.",
        ],
        links: [{ href: "https://docs.browserbase.com/integrations/mcp/setup", label: "Browserbase MCP setup" }, { href: "https://docs.browserless.io/mcp/browserless-mcp-server/setup", label: "Browserless MCP setup" }] },
      { id: "when-to-pick", heading: "When to pick which",
        bullets: [
          "You must run browsers inside your own infrastructure → Browserless (self-hosted Docker or Enterprise private deployment).",
          "You build AI agents with Stagehand's act, extract and observe primitives → Browserbase.",
          "You need Firefox or WebKit, not just Chrome → Browserless.",
          "You mostly need screenshots, PDFs or scraping over plain HTTP → Browserless REST APIs or BrowserQL.",
          "You want long sessions with predictable hourly billing → Browserbase (Browserless caps free sessions at 2 minutes and Prototyping at 15).",
          "You want web search and page fetch APIs bundled with your browsers → Browserbase.",
        ] },
    ],
    picks: [
      { tool: "browserbase", text: "AI agent teams who want managed browser fleets, the Stagehand SDK, session recordings and bundled Search/Fetch APIs without running infrastructure." },
      { tool: "browserless", text: "Teams with existing Puppeteer or Playwright scripts, anyone who needs self-hosting or multiple browser engines, and scraping or PDF workloads." },
    ],
    faqs: [
      { q: "Is Browserless cheaper than Browserbase?", a: "On entry plans it depends on how long your sessions run. Browserless Prototyping is $25/month billed annually for 20k units (a unit is up to 30 seconds per connection), while Browserbase Developer is $20/month for 100 browser hours. At overage rates Browserbase's $0.10–$0.12 per hour is lower than Browserless's roughly $0.18–$0.24 per hour (our math from its per-unit prices).", links: [{ href: "https://www.browserless.io/pricing", label: "Browserless pricing" }, { href: "https://www.browserbase.com/pricing", label: "Browserbase pricing" }] },
      { q: "Is Browserless open source?", a: "The Browserless repository on GitHub lets you deploy headless browsers in Docker and is free for non-commercial use. Commercial self-hosting requires a license, which is part of the Enterprise plan.", links: [{ href: "https://github.com/browserless/browserless", label: "Browserless on GitHub" }] },
      { q: "What is a Browserless unit?", a: "A unit is a block of browser time of up to 30 seconds per browser connection. Longer sessions use an extra unit every 30 seconds, and reconnects count as new connections. Residential proxy traffic costs 6 units per MB, datacenter proxy traffic 2 units per MB, and each successful captcha solve 10 units." },
      { q: "Does Browserless have an MCP server?", a: "Yes. The hosted server is at https://mcp.browserless.io/mcp with OAuth or API-token auth. You can also run @browserless.io/mcp locally with npx.", links: [{ href: "https://docs.browserless.io/mcp/browserless-mcp-server/setup", label: "Browserless MCP setup" }] },
      { q: "Can I self-host Browserbase?", a: "No. Browserbase is cloud-first and doesn't offer on-prem deployment. It offers private cloud options and VPC connectivity for large enterprise customers." },
      { q: "Which frameworks do they support?", a: "Browserbase supports Playwright, Puppeteer, Selenium and Stagehand. Browserless supports Puppeteer and Playwright over WebSocket, plus BrowserQL, its BAP SDK for TypeScript and Python, and REST APIs." },
    ],
  },
  {
    slug: "tinyfish-vs-browserbase", kind: "vs", h1: "TinyFish vs Browserbase: which is cheaper for AI web agents?",
    title: "TinyFish vs Browserbase Pricing (2026): Real Costs Compared",
    description: "TinyFish vs Browserbase pricing: $0.016 per agent step and $0.12/hour browsers with no subscription, vs $20–$99 plans with included hours. Worked examples inside.",
    tools: ["tinyfish", "browserbase"], rankings: ["browser-agents"], verifiedOn: R_ON,
    verdict: "TinyFish is the cheaper way to start. There's no subscription, new accounts get $8 in Wallet funds, TinySearch and TinyFetch are free within rate limits, and TinyAgent runs cost $0.016 per step with the LLM, residential proxies and anti-bot handling included. Browserbase fits teams that write their own automation on Playwright, Puppeteer, Selenium or Stagehand and want monthly plans with included hours, higher self-serve concurrency (25 to 100+ browsers) and session recordings. For raw browser time, TinyBrowser's $0.002 per minute is $0.12 per hour, the same as Browserbase Developer's overage rate.",
    rows: [tinyfishRow, browserbaseRow],
    sections: [
      { id: "pricing", heading: "TinyFish vs Browserbase pricing, line by line",
        table: { head: ["", "TinyFish", "Browserbase"], rows: [
          ["Billing model", "Prepaid Wallet, pay as you go; no subscription, seats or minimum", "Monthly plans with included usage, then overage"],
          ["Free to start", "$8 in Wallet funds for new accounts; no card needed to start", "Free plan: 1 browser hour, 3 Agent runs, $5 in model tokens"],
          ["Cloud browser", "TinyBrowser $0.002/minute ($0.12/hour)", "Developer $20/mo with 100 hours, then $0.12/hr; Startup $99/mo with 500 hours, then $0.10/hr"],
          ["AI web agent", "TinyAgent $0.016 per step, LLM inference included", "3 / 15 / 50 Agent runs on Free / Developer / Startup; models via Model Gateway at market price"],
          ["Search API", "TinySearch $0 (30 requests/min, 500/hour)", "1,000 calls included, then $1–$7 per 1k depending on provider"],
          ["Fetch API", "TinyFetch $0 (150 URLs/min, 1,000/day)", "1,000 (Developer) or 10,000 (Startup) included, then $1 or $0.50 per 1k"],
          ["Residential proxies", "Included in TinyAgent and TinyBrowser runs", "1 GB on Developer then $12/GB; 5 GB on Startup then $10/GB"],
          ["Starting concurrency", "2 TinyAgent runs, 5 TinyBrowser sessions (raised on request)", "3 Free, 25 Developer, 100 Startup, 250+ Scale"],
          ["Monitoring", "TinyMonitor $0.005 per check", "Not listed"],
          ["Top-ups", "$10 minimum deposit; optional auto-reload", "Not applicable (plan-based)"],
          ["Enterprise", "Custom limits, ISO 27001, SSO, audit logs, VPC, 99.99% SLA", "Scale: custom; HIPAA BAA, DPA, SSO"],
        ] },
        paragraphs: [
          "Worked examples for raw browser time (our math, before Browserbase proxy traffic). 100 hours costs $12 on TinyBrowser, versus $20 for a month of Browserbase Developer. 500 hours costs $60 on TinyBrowser, versus $99 for Browserbase Startup. 1,000 hours costs $120 on TinyBrowser, versus $149 on Browserbase Startup ($99 plus 500 extra hours at $0.10).",
          "For agent work, a 20-step TinyAgent run costs $0.32 with the model included. On Browserbase you pay for browser time plus model tokens at market price through its Model Gateway, or your own model provider's bill.",
          "Keep the limits in mind. TinyFish accounts start at 5 concurrent TinyBrowser sessions and 2 TinyAgent runs, and you raise them by talking to sales. Browserbase's paid self-serve plans start at 25 concurrent browsers.",
        ],
        note: "Prices from tinyfish.ai/pricing and browserbase.com/pricing, checked October 28, 2026.",
        links: [{ href: "https://www.tinyfish.ai/pricing", label: "TinyFish pricing" }, { href: "https://www.browserbase.com/pricing", label: "Browserbase pricing" }] },
      { id: "mcp", heading: "MCP and developer tools",
        paragraphs: [
          "TinyFish's MCP endpoint is https://agent.tinyfish.ai/mcp and uses OAuth 2.1, so assistants such as Claude Code, Codex, Cursor and OpenCode connect without an API key in the config. There are also curated TinyFish plugins for ChatGPT, Claude and Grok, plus SDKs and a CLI.",
          "Browserbase MCP is hosted at https://mcp.browserbase.com/mcp with your API key, or runs locally with npx @browserbasehq/mcp. Its Stagehand-based tools (start, navigate, act, observe, extract, end) let your assistant drive the browser step by step.",
        ],
        links: [{ href: "https://docs.tinyfish.ai/mcp-integration", label: "TinyFish MCP docs" }, { href: "https://docs.browserbase.com/integrations/mcp/setup", label: "Browserbase MCP setup" }] },
      { id: "when-to-pick", heading: "When to pick which",
        bullets: [
          "You want to send a natural-language goal and get results back without managing models or proxies → TinyFish TinyAgent.",
          "You need free web search and page fetching for an agent → TinyFish (free within rate limits).",
          "You run your own Playwright, Puppeteer, Selenium or Stagehand code at high concurrency → Browserbase.",
          "You want a fixed monthly bill with included hours → Browserbase Developer or Startup.",
          "Your usage is low or bursty → TinyFish, where you pay only for what runs.",
        ] },
    ],
    picks: [
      { tool: "tinyfish", text: "Builders who want pay-as-you-go web agents, free search and fetch, and model, proxies and anti-bot handling included in one price." },
      { tool: "browserbase", text: "Engineering teams running their own browser automation at scale who want plans with included hours, high concurrency, recordings and Stagehand." },
    ],
    faqs: [
      { q: "How much does TinyFish cost?", a: "TinyFish is pay as you go with no subscription. TinyAgent costs $0.016 per step, TinyBrowser $0.002 per minute and TinyMonitor $0.005 per check. TinySearch and TinyFetch are $0 within their rate limits. New accounts start with $8 in Wallet funds, and deposits start at $10.", links: [{ href: "https://www.tinyfish.ai/pricing", label: "TinyFish pricing" }] },
      { q: "Is TinyFish cheaper than Browserbase?", a: "For low or bursty usage, yes: there's no monthly fee, and 100 hours of TinyBrowser time costs $12 versus Browserbase Developer's $20/month. At high volume Browserbase Startup's $0.10/hour overage beats TinyBrowser's $0.12/hour, though TinyFish includes residential proxies that Browserbase bills per GB." },
      { q: "Does TinyFish have a monthly plan?", a: "No. TinyFish has no recurring plans. You fund a prepaid Wallet and pay for the TinyAgent and TinyBrowser usage you run. Enterprise contracts are available." },
      { q: "Is TinyFish free?", a: "TinySearch (30 requests/minute, 500/hour) and TinyFetch (150 URLs/minute, 1,000/day) are free and keep working at a $0 Wallet balance. New accounts also get $8 in Wallet funds to try TinyAgent and TinyBrowser." },
      { q: "Does TinyFish have an MCP server?", a: "Yes, at https://agent.tinyfish.ai/mcp with OAuth 2.1 authentication, plus plugins for ChatGPT, Claude and Grok.", links: [{ href: "https://docs.tinyfish.ai/mcp-integration", label: "TinyFish MCP docs" }] },
      { q: "How much does Browserbase cost?", a: "Browserbase has a Free plan ($0, 1 browser hour), Developer at $20/month (100 hours, then $0.12/hour), Startup at $99/month (500 hours, then $0.10/hour) and custom Scale pricing.", links: [{ href: "https://www.browserbase.com/pricing", label: "Browserbase pricing" }] },
    ],
  },
  {
    slug: "gumloop-vs-n8n", kind: "vs", h1: "Gumloop vs n8n: AI agent builder or workflow automation?",
    title: "Gumloop vs n8n (2026): Pricing, AI Agents & Which to Choose",
    description: "Gumloop vs n8n: $37/mo credit-based Pro vs n8n's €20/mo execution plans and free self-hosting. Compare AI agents, MCP, seats and who each tool is for.",
    tools: ["gumloop", "n8n"], rankings: ["no-code-automation"], verifiedOn: R_ON,
    verdict: "Pick n8n if you're technical, want to self-host for free, or run high-volume workflows. You pay per full workflow execution regardless of step count, every plan includes unlimited users, and you get code steps, AI Agent nodes and MCP server and client nodes. Pick Gumloop if non-technical teams will build and use AI agents in chat, Slack, Microsoft Teams or email, backed by a company knowledge base. Its Pro plan starts at $37/month with 20k credits and unlimited seats, and you pay for usage in credits.",
    rows: [gumloopRow, n8nRow],
    sections: [
      { id: "pricing", heading: "Gumloop vs n8n pricing",
        paragraphs: [
          "n8n charges per workflow execution: one full run counts once, however many steps it has. Gumloop charges credits for what an agent actually does. That covers model tokens at the provider's list price (1 credit = $0.005), at least 1 credit per successful tool call, 5 credits per session-minute of compute, and an 8% orchestration fee on top. Gumloop's docs say the same agent might cost 2 credits for a quick question and 200 for a deep research task.",
        ],
        table: { head: ["", "Gumloop", "n8n"], rows: [
          ["Free option", "14-day free trial of Pro", "Free self-hosted Community Edition; Cloud trial with 1,000 executions, no card"],
          ["Entry plan", "Pro from $37/month: 20,000 credits (7,400 + 12,600 bonus)", "Starter €20/month billed annually: 2,500 executions"],
          ["Higher plans", "Enterprise: custom", "Pro €50/mo (10k executions); Business €667/mo (40k, self-hosted); Enterprise custom"],
          ["What you pay for", "Credits for tokens, tool calls, compute + 8% orchestration fee", "Full workflow executions, regardless of steps"],
          ["Running out", "Agents stop; optional pay-as-you-go at $0.005/credit (off by default)", "Capped overage fees on Starter and Pro"],
          ["Unused allowance", "Credits reset monthly, no rollover", "Monthly executions allowance"],
          ["Your own model keys", "Yes. Token credits drop to zero but the fee rises to 16%", "Cloud plans include AI models without API keys; you can also connect your own"],
          ["Seats", "Unlimited seats and teams", "Unlimited users on all plans"],
          ["Concurrency", "5 workflow runs, 25 agent chats on Pro", "5 on Starter, up to 50 on Pro, 200+ on Enterprise"],
          ["Hosting", "Cloud; optional VPC on Enterprise", "n8n Cloud (EU) or self-host"],
        ] },
        note: "Prices from gumloop.com/pricing, Gumloop's credits docs and n8n.io/pricing, checked October 28, 2026.",
        links: [{ href: "https://www.gumloop.com/pricing", label: "Gumloop pricing" }, { href: "https://docs.gumloop.com/core-concepts/credits", label: "How Gumloop credits work" }, { href: "https://n8n.io/pricing/", label: "n8n pricing" }] },
      { id: "agents-mcp", heading: "AI agents and MCP",
        paragraphs: [
          "Gumloop is now agent-first. Its pricing page lists the original drag-and-drop builder as Workflows (Legacy). Agents connect to apps through Gumloop's catalog of hosted MCP connectors or your own custom MCP servers. They can search a company knowledge base (Brain), use skills, a code sandbox and an agent browser with saved logins, and run on triggers and schedules. Pro includes hosting for one custom MCP server, and Gumloop also offers its own MCP, a CLI and an API.",
          "n8n builds agents inside workflows. Every Cloud plan includes the AI Agent node, the MCP Server Trigger (expose a workflow as an MCP tool), the MCP Client, instance-level MCP and human approval for tool calls. You also get JavaScript and Python code steps and evaluations.",
        ] },
      { id: "when-to-pick", heading: "When to pick which",
        bullets: [
          "Sales, marketing or ops people will build their own agents without engineering help → Gumloop.",
          "You need data to stay on your own servers, or want free self-hosting → n8n Community Edition.",
          "You run high-volume, many-step automations and want predictable costs → n8n (per-execution pricing).",
          "You want agents that live in Slack, Teams or email and answer from company knowledge → Gumloop.",
          "You want code steps, Git version control and multiple environments → n8n.",
        ] },
    ],
    picks: [
      { tool: "gumloop", text: "Non-technical teams who want AI agents across their business apps, with one plan for unlimited seats and no infrastructure." },
      { tool: "n8n", text: "Developers, agencies and technical ops teams who want self-hosting, code steps, MCP nodes and per-execution pricing." },
    ],
    faqs: [
      { q: "Is Gumloop cheaper than n8n?", a: "Usually not for high-volume workflows. n8n Cloud starts at €20/month (billed annually) for 2,500 executions, and self-hosted Community Edition is free. Gumloop Pro starts at $37/month for 20,000 credits, and agent costs vary with the model, tool calls and run time." },
      { q: "Is Gumloop free?", a: "Gumloop offers a 14-day free trial of its Pro plan. After that, Pro starts at $37/month. Enterprise pricing is custom.", links: [{ href: "https://www.gumloop.com/pricing", label: "Gumloop pricing" }] },
      { q: "Can I self-host Gumloop?", a: "Gumloop is a cloud service. Its Enterprise plan adds an optional Virtual Private Cloud. If self-hosting is a requirement, n8n is the usual choice." },
      { q: "Which is better for AI agents?", a: "Gumloop is easier for non-developers who want ready-made agents with company knowledge, Slack and Teams access. n8n gives technical teams more control, with AI Agent nodes, MCP server and client nodes, human approval for tool calls and code steps." },
      { q: "Do Gumloop credits roll over?", a: "No. The 20k monthly credit allotment resets each billing period. If you run out mid-month, agents stop until you enable pay-as-you-go at $0.005 per credit." },
    ],
  },
];
export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
export const comparisonsForTool = (toolSlug: string) => comparisons.filter((c) => c.tools.includes(toolSlug) || c.rows.some((r) => r.tool === toolSlug));
// Related comparisons: share a tool first, then share a ranking.
export const relatedComparisons = (c: Comparison, n = 6) => {
  const score = (o: Comparison) => o.tools.filter((t) => c.tools.includes(t)).length * 2 + o.rankings.filter((r) => c.rankings.includes(r)).length;
  return comparisons.filter((o) => o.slug !== c.slug).map((o) => ({ o, s: score(o) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, n).map((x) => x.o);
};
