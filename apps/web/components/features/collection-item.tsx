"use client";

import { Theme } from "@/db/types";
import { Tooltip } from "../core/tooltip";
import { Link } from "next-view-transitions";
import styles from "@/styles/collection.module.css";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/helpers/cn";

export function CollectionItem({ theme }: { theme: Theme }) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(theme.id);
  return (
    <Tooltip key={theme.id} content={theme.name}>
      <Link
        key={theme.id}
        href={`/collection/${theme.id}`}
        className={cn(
          "border-border grid h-40 w-full cursor-pointer grid-rows-[45%_30%_25%] overflow-hidden rounded-2xl border transition hover:scale-[0.98]",
          {
            "ring ring-2 ring-offset-0": isActive,
          },
        )}
      >
        <span className="size-full" style={{ backgroundColor: theme.accent }} />

        <span className={`size-full ${styles[theme.neutral]}`} />

        <span
          className="size-full"
          style={{ backgroundColor: theme.background }}
        />
      </Link>
    </Tooltip>
  );
}
