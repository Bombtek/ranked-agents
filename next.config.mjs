/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  async redirects() {
    // Canonical domain moved to rankedagents.dev; permanently redirect the old Vercel host
    // (path + query preserved). Only matches the old host, so no loop on rankedagents.dev.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ranked-agents.vercel.app" }],
        destination: "https://rankedagents.dev/:path*",
        permanent: true,
      },
    ];
  },
};
