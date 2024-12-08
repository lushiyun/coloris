"use client";

import { cn } from "@/lib/helpers/cn";
import { useColorStore } from "@/lib/store";
import { coloris } from "coloris-js";
import { useState } from "react";
import { Button } from "@/components/core/button";
import { Copy } from "lucide-react";
import { Tooltip } from "../core/tooltip";

export function CssVariables() {
  const [showAll, setShowAll] = useState(false);
  const { accent, background } = useColorStore();
  const cssVariables = coloris({
    appearance: "light",
    accent,
    background,
    neutral: "sand",
  });

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
      <code>{cssVariables}</code>

      <Tooltip content="Copy">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4"
          onClick={() => navigator.clipboard.writeText(cssVariables)}
        >
          <Copy className="size-4" />
        </Button>
      </Tooltip>

      <Button
        size="sm"
        variant="outline"
        className="absolute right-4 bottom-4 font-sans text-sm"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show less" : "Show more"}
      </Button>
    </pre>
  );
}
