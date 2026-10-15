"use client";

import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { outboundLink, type Tool } from "@/data/tools";

export function OutboundLink({
  tool,
  className,
  children,
}: {
  tool: Tool;
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const link = outboundLink(tool);
  return (
    <a
      {...link}
      className={className}
      onClick={() => {
        track("outbound_click", {
          tool: tool.slug,
          affiliate: Boolean(tool.affiliateUrl),
          page: pathname ?? "",
        });
      }}
    >
      {children}
    </a>
  );
}
