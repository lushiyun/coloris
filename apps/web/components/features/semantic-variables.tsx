"use client";

import { cn } from "@/lib/helpers/cn";
import { useState } from "react";
import { Button } from "@/components/core/button";
import { Copy } from "lucide-react";
import { Tooltip } from "../core/tooltip";

export function SemanticVariables() {
  const [showAll, setShowAll] = useState(false);
  const code = `@layer theme {
  :root {
    --bg: var(--background);
    --fg: var(--neutral-12);

    --muted: var(--neutral-surface);
    --muted-foreground: var(--neutral-11);

    --popover: var(--background);
    --popover-foreground: var(--neutral-12);
  
    --border: var(--neutral-7);
    --input: var(--neutral-7);

    --primary: var(--accent-9);
    --primary-foreground: var(--accent-contrast);

    --secondary: var(--neutral-3);
    --secondary-foreground: var(--neutral-12);

    --outline: var(--neutral-12);
    --ring: var(--neutral-12);
  }
}`;

  return (
    <pre
      className={cn(
        "relative overflow-y-clip transition-[height] duration-200 ease-in-out",
        {
          "h-120": !showAll,
          "h-fit": showAll,
        },
      )}
    >
      <code>{code}</code>

      <Tooltip content="Copy">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          <Copy className="size-4" />
        </Button>
      </Tooltip>

      <Button
        size="sm"
        variant="outline"
        className="absolute right-4 bottom-4 font-sans"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show less" : "Show more"}
      </Button>
    </pre>
  );
}
