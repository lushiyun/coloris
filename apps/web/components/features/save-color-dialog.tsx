"use client";

import { Save } from "lucide-react";
import { Button } from "@/components/core/button";
import { Tooltip } from "@/components/core/tooltip";
import { useRef } from "react";
import { SaveColorForm } from "./save-color-form";

export function SaveColorDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="size-10"
        onClick={() => ref.current?.showModal()}
      >
        <Tooltip content="Save">
          <Save className="size-5" />
        </Tooltip>
      </Button>
      <dialog
        ref={ref}
        className="bg-bg fixed top-1/2 left-1/2 min-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 opacity-0 shadow-[0_3px_12px_0_rgb(0_0_0_/_0.15)] transition-all transition-discrete open:opacity-100 starting:open:opacity-0"
        onClick={(e) => {
          if (e.target === ref.current) {
            ref.current?.close();
          }
        }}
      >
        <SaveColorForm ref={ref} />
      </dialog>
    </>
  );
}
