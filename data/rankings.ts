export interface Ranking { slug: string; title: string; blurb: string; picks: { tool: string; reason: string }[] }
export const rankings: Ranking[] = [
  { slug: "coding-agents", title: "Best AI Coding Agents", blurb: "Agents that read, write and ship code for you.", picks: [
    { tool: "claude-code", reason: "Strongest autonomy on long, multi-file tasks with excellent tooling and permissions." },
    { tool: "cursor", reason: "The best editor experience plus cloud agents and Projects for big jobs." },
    { tool: "openai-codex", reason: "Great parallel cloud tasks and an open-source CLI." },
    { tool: "github-copilot", reason: "Issue-to-PR coding agent built right into GitHub." },
    { tool: "devin", reason: "Most hands-off ticket-to-PR teammate for async backlogs." },
    { tool: "gemini-cli", reason: "Open-source with a generous free tier." },
    { tool: "cline", reason: "Best open-source BYO-model agent inside VS Code." },
    { tool: "aider", reason: "Lean, git-native and works with almost any model." } ] },
  { slug: "vibe-coding", title: "Best Vibe Coding App Builders", blurb: "Prompt to deployed app, minimal code required.", picks: [
    { tool: "replit-agent", reason: "Builds, hosts and deploys with database included." },
    { tool: "lovable", reason: "Polished full-stack React apps with Supabase and GitHub sync." },
    { tool: "v0", reason: "Best-in-class Next.js UI generation with one-click Vercel deploys." },
    { tool: "bolt-new", reason: "Everything runs in the browser — zero setup." },
    { tool: "cursor", reason: "When the vibe needs real engineering control." } ] },
  { slug: "browser-agents", title: "Best Browser & Computer-Use Agents", blurb: "Agents that click, type and navigate the web.", picks: [
    { tool: "chatgpt-agent", reason: "Most capable consumer agent with its own virtual computer." },
    { tool: "browser-use", reason: "Go-to open-source library for building your own browser agents." },
    { tool: "browserbase", reason: "Production browser infra plus Stagehand SDK." },
    { tool: "manus", reason: "Hands-off long tasks across browser and code." },
    { tool: "perplexity-comet", reason: "Agentic browsing built into your daily browser." },
    { tool: "skyvern", reason: "Vision-based automation for form-heavy flows." } ] },
  { slug: "no-code-automation", title: "Best No-Code Automation Platforms", blurb: "Wire up apps and AI agents without writing code.", picks: [
    { tool: "n8n", reason: "Most powerful AI agent nodes and self-hostable." },
    { tool: "zapier", reason: "Largest integration library and easiest to start." },
    { tool: "make", reason: "Best visual builder for complex branching logic." },
    { tool: "gumloop", reason: "AI-native flows for marketers and ops." },
    { tool: "relevance-ai", reason: "Build an AI workforce for sales and ops." },
    { tool: "lindy", reason: "Personal-assistant style agents for inbox and calendar." } ] },
  { slug: "agent-frameworks", title: "Best AI Agent Frameworks", blurb: "Code-first SDKs for building your own agents.", picks: [
    { tool: "langgraph", reason: "The most battle-tested choice for stateful production agents." },
    { tool: "openai-agents-sdk", reason: "Minimal, clean primitives with tracing built in." },
    { tool: "crewai", reason: "Easiest mental model for role-based multi-agent teams." },
    { tool: "mastra", reason: "Top pick for TypeScript and Next.js builders." },
    { tool: "pydantic-ai", reason: "Type safety and structured outputs in Python." },
    { tool: "google-adk", reason: "Strong multi-agent tooling for the Gemini ecosystem." },
    { tool: "microsoft-agent-framework", reason: "Natural fit for .NET and Azure teams." } ] },
  { slug: "voice-agents", title: "Best Voice AI Agents", blurb: "Phone and realtime voice agents that talk back.", picks: [
    { tool: "vapi", reason: "Most flexible developer platform for voice agents." },
    { tool: "elevenlabs-agents", reason: "Best voice quality and multilingual support." },
    { tool: "retell-ai", reason: "Purpose-built for call centers with strong analytics." },
    { tool: "livekit-agents", reason: "Open-source realtime stack for full control." },
    { tool: "bland-ai", reason: "Enterprise-scale outbound calling." } ] },
  { slug: "research-agents", title: "Best AI Research Agents", blurb: "Agents that dig through the web and papers for you.", picks: [
    { tool: "openai-deep-research", reason: "Deepest, best-cited long-form reports." },
    { tool: "gemini-deep-research", reason: "Strong reports with Google Docs export." },
    { tool: "perplexity", reason: "Fastest cited answers for everyday research." },
    { tool: "manus", reason: "Turns research into finished deliverables." },
    { tool: "elicit", reason: "Best for academic papers and systematic reviews." } ] },
];
export const getRanking = (slug: string) => rankings.find((r) => r.slug === slug);
