"use client";

import { Theme } from "@/db/types";
import { Tooltip } from "../core/tooltip";
import { Link } from "next-view-transitions";
import styles from "@/styles/collection.module.css";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/helpers/cn";

export function CollectionItem({ theme }: { theme: Theme }) {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const isActive = pathnameParts.at(-1) === theme.id.toString();

  return (
    <Tooltip key={theme.id} content={theme.name}>
      <Link
        key={theme.id}
        href={`/collection/${theme.id}`}
        className={cn(
          "border-border grid size-8 cursor-pointer grid-rows-[45%_30%_25%] overflow-hidden rounded-lg border transition hover:scale-[0.95]",
          {
            "ring-2 ring-offset-0": isActive,
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
