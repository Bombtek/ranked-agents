// Comparison & alternatives pages. Pricing facts verified on each vendor's own pricing page (Oct 14, 2026; new pages Oct 16, 2026).
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

const cursorRow: CompareRow = { tool: "cursor", pricing: "Free $0; paid plans from $8/mo (Plus) to $200/mo (Ultra); Teams $30+/user/mo — see site", freeTier: "Yes — limited agent requests", bestFor: "Day-to-day coding in an AI editor, cloud agents, team code review", hosting: "Desktop editor + cloud agents" };
const claudeCodeRow: CompareRow = { tool: "claude-code", pricing: "Included with Claude Pro ($17/mo annual, $20 monthly), Max from $100/mo, Team/Enterprise; or pay via API", freeTier: "No — Claude Code requires a paid plan or API usage", bestFor: "Terminal-first, autonomous multi-step engineering", hosting: "Local CLI, IDE, desktop and web" };
const codexRow: CompareRow = { tool: "openai-codex", pricing: "Included in ChatGPT Free, Go $8/mo, Plus $20/mo, Pro from $100/mo, Business, Enterprise; or API-key usage", freeTier: "Yes — included in ChatGPT Free (limited)", bestFor: "ChatGPT users; parallel cloud tasks and GitHub PR reviews", hosting: "Local CLI/IDE/desktop + cloud sandboxes" };
const copilotRow: CompareRow = { tool: "github-copilot", pricing: "Free $0; Pro $10/mo, Pro+ $39/mo, Max $100/mo; Business/Enterprise for orgs", freeTier: "Yes — limited chat and agent usage", bestFor: "Staying in your IDE; GitHub-native cloud agent and code review", hosting: "IDE extensions, CLI, github.com" };
const windsurfRow: CompareRow = { tool: "windsurf", pricing: "Paid plans — check current pricing", freeTier: "Free tier available — check current pricing", bestFor: "Agentic IDE with the Cascade agent", hosting: "Desktop editor" };
const boltRow: CompareRow = { tool: "bolt-new", pricing: "Pro $25/mo (from 10M tokens); Teams $30/member/mo (billed monthly); Enterprise custom", freeTier: "Yes — 1M tokens/month (300K daily), Bolt branding", bestFor: "In-browser full-stack prototyping with real code", hosting: "Bolt hosting (custom domains on Pro)" };
const lovableRow: CompareRow = { tool: "lovable", pricing: "Credit-based plans (Pro, Business, Enterprise), not per seat — check current pricing", freeTier: "Yes — 5 build credits/day (up to 30/month) + 20 Cloud credits/month", bestFor: "Non-technical builders shipping full-stack web apps", hosting: "Lovable Cloud" };
const v0Row: CompareRow = { tool: "v0", pricing: "Free $0; paid team plans include $30/user/mo credits; Business $100/user/mo; Enterprise custom", freeTier: "Yes — 7 messages/day", bestFor: "React/Next.js UI and apps on Vercel", hosting: "Deploys to Vercel" };

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
  {
    slug: "bolt-vs-lovable", kind: "vs", h1: "Bolt vs Lovable: which AI app builder should you use?",
    title: "Bolt vs Lovable (2026): Pricing, Free Plans & Which to Pick",
    description: "Bolt.new vs Lovable compared: verified free plans, token vs credit pricing, hosting and which prompt-to-app builder fits your project.",
    tools: ["bolt-new", "lovable"], rankings: ["vibe-coding"],
    verdict: "Both turn a prompt into a working full-stack web app. Pick Lovable if you're non-technical and want a polished app with built-in Cloud hosting and shared team credits. Pick Bolt if you want an in-browser dev environment with a generous free token allowance and flat per-member Teams pricing.",
    rows: [boltRow, lovableRow],
    picks: [
      { tool: "lovable", text: "Founders, designers and PMs who want to chat their way to a deployed React app, with unlimited workspace members sharing one credit pool." },
      { tool: "bolt-new", text: "Developers and tinkerers who want to see and edit the code in a full in-browser environment, with tokens that roll over for a month on paid plans." },
    ],
    faqs: [
      { q: "Is Bolt or Lovable cheaper?", a: "Bolt Pro is $25/month billed monthly with 10M tokens to start; Teams is $30 per member per month. Lovable prices plans by the credits they include rather than by seat — check current pricing on Lovable's site for the plan that fits your usage." },
      { q: "Do Bolt and Lovable have free plans?", a: "Yes. Bolt's free plan includes 1M tokens a month (300K daily limit) and hosting with Bolt branding. Lovable's free plan includes 5 build credits a day (up to 30 a month) plus 20 Cloud credits a month." },
      { q: "Who owns the code?", a: "On Lovable you own the apps and code you build. Both tools let you work with real source code you can take elsewhere — Lovable via GitHub sync, Bolt via its in-browser project." },
      { q: "Which is better for teams?", a: "Lovable workspaces allow unlimited members on all plans and share one credit balance. Bolt Teams bills per member and each member gets their own token allotment." },
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
    slug: "cursor-vs-windsurf", kind: "vs", h1: "Cursor vs Windsurf: which AI code editor wins?",
    title: "Cursor vs Windsurf (2026): AI IDEs Compared",
    description: "Cursor vs Windsurf: compare the two agentic AI code editors on pricing, free tiers, agents and who each one suits best.",
    tools: ["cursor", "windsurf"], rankings: ["coding-agents"],
    verdict: "Both are VS Code–style editors with strong agents. Cursor is our higher-ranked pick thanks to cloud background agents, Projects and broad model choice. Windsurf's Cascade agent is a good fit if you prefer its flow-aware context tracking. Try both free tiers on a real task.",
    rows: [cursorRow, windsurfRow],
    picks: [
      { tool: "cursor", text: "You want the most mature AI editor, background cloud agents, PR review and many models to choose from." },
      { tool: "windsurf", text: "You like an agent (Cascade) that follows your edits and terminal activity and makes multi-file changes with less prompting." },
    ],
    faqs: [
      { q: "Is Windsurf free?", a: "Windsurf offers a free tier plus paid plans. Prices change often — check current pricing on windsurf.com." },
      { q: "How much does Cursor cost?", a: "Cursor has a free plan with limited agent requests; paid plans range from $8/month (Plus) to $200/month (Ultra), with Teams from $30 per user per month." },
      { q: "Can I import my VS Code settings?", a: "Both editors are built on VS Code foundations and support importing extensions, themes and keybindings." },
      { q: "Which is better for large codebases?", a: "Cursor's cloud agents and Projects (parallel subagents) suit long-running work on big repos; Windsurf's Cascade is strong for interactive multi-file edits." },
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
    description: "Cursor alternatives compared: Claude Code, GitHub Copilot, OpenAI Codex, Windsurf, Cline and Aider on verified pricing and free tiers.",
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
      { tool: "windsurf", text: "You want another full AI IDE with a different agent style (Cascade)." },
      { tool: "cline", text: "You want an open-source VS Code agent and full control over which model you pay for." },
      { tool: "aider", text: "You like the terminal and want every AI edit auto-committed to git." },
    ],
    faqs: [
      { q: "What is the best free Cursor alternative?", a: "Aider and Cline are free, open-source tools (you pay only for model usage). Codex is included in ChatGPT Free, and GitHub Copilot Free offers limited chat and agent usage." },
      { q: "What's the closest alternative to Cursor?", a: "Windsurf is the most similar — another AI-first editor built on VS Code foundations. GitHub Copilot in VS Code is the next closest." },
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
      { tool: "gumloop", pricing: "See site", freeTier: "Free tier available — check current pricing", bestFor: "AI-first drag-and-drop flows for marketing and ops", hosting: "Cloud" },
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
      { tool: "gumloop", pricing: "See site", freeTier: "Free tier available — check current pricing", bestFor: "AI-first drag-and-drop flows for marketing and ops", hosting: "Cloud" },
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
    slug: "browser-use-vs-browserbase", kind: "vs", h1: "Browser Use vs Browserbase: which browser-agent stack should you use?",
    title: "Browser Use vs Browserbase (2026): Pricing & Features",
    description: "Browser Use vs Browserbase compared: verified pay-as-you-go vs plan pricing, free credits, open-source SDKs and which browser-agent platform to pick.",
    tools: ["browser-use", "browserbase"], rankings: ["browser-agents"],
    verdict: "Browser Use is the cheaper pay-as-you-go option with an open-source agent library and very low browser-hour pricing. Browserbase is the more complete infrastructure platform — plans with included hours, captcha solving, stealth, session recording and the Stagehand SDK.",
    rows: [
      { tool: "browser-use", pricing: "Pay as you go: browsers $0.02/hour, residential proxy $5/GB, agents = model cost + 20%; no subscription", freeTier: "Open-source library is free; cloud gives a one-time $1 credit for eligible signups; top-ups from $5", bestFor: "Open-source Python browser agents and cheap cloud browsers", hosting: "Open source (self-host) or Browser Use Cloud" },
      { tool: "browserbase", pricing: "Free $0; Developer $20/mo (100 browser hours, then $0.12/hr); Startup $99/mo (500 hours, then $0.10/hr); Scale custom", freeTier: "Yes — 1 browser hour, 3 concurrent browsers, 15-minute sessions", bestFor: "Production headless-browser infrastructure with Stagehand", hosting: "Cloud (Browserbase); no on-prem" },
    ],
    picks: [
      { tool: "browser-use", text: "You want an open-source agent you can run yourself, or the lowest per-hour cloud browser cost with credits that never expire." },
      { tool: "browserbase", text: "You need reliable browser fleets with captcha solving, stealth, recordings, compliance (SOC 2, HIPAA on Scale) and a natural-language SDK." },
    ],
    faqs: [
      { q: "Is Browser Use free?", a: "The Browser Use library is open source. Browser Use Cloud is pay-as-you-go with a one-time $1 free credit for eligible signups and 10 concurrent sessions to start." },
      { q: "Does Browserbase have a free plan?", a: "Yes. The Free plan includes 3 concurrent browsers, 1 browser hour, 15-minute sessions and $5 in model tokens." },
      { q: "Can I use Browser Use with Browserbase?", a: "Browserbase supports Playwright, Puppeteer, Selenium and Stagehand, so Playwright-based agents can run on its cloud browsers." },
      { q: "What is Stagehand?", a: "Stagehand is Browserbase's open-source SDK that mixes Playwright code with AI primitives (act, extract, observe)." },
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
