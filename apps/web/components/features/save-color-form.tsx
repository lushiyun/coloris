"use client";

import { useActionState, type RefObject } from "react";
import { Button } from "@/components/core/button";
import styles from "@/styles/color-swatches.module.css";
import { arrayOf12 } from "@/lib/helpers/array-of-12";
import { Input } from "@/components/core/input";
import { Label } from "../core/label";
import { createTheme } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import { useColorStore } from "@/lib/store";
import { cn } from "@/lib/helpers/cn";

export function SaveColorForm({
  ref,
}: {
  ref: RefObject<HTMLDialogElement | null>;
}) {
  const { accent, neutral, background } = useColorStore();
  const [state, formAction, isPending] = useActionState(createTheme, {
    status: "",
    message: "",
  });

  return (
    <form
      id="save-color-form"
      className="flex w-full flex-col items-center gap-4"
      action={formAction}
    >
      <h2 className="text-xl font-medium">Save Color</h2>

      <div className="w-full">
        <ul className="grid grid-cols-12">
          {arrayOf12.map((number) => (
            <li
              key={number}
              className={`${styles.accent} aspect-square w-full`}
            >
              <span className="aspect-square w-full" />
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-12">
          {arrayOf12.map((number) => (
            <li
              key={number}
              className={`${styles.neutral} aspect-square w-full`}
            >
              <span className="aspect-square w-full" />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full flex-col gap-2 py-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Give your theme a name"
          required
        />
        {state.message && (
          <p
            className={cn("text-sm", {
              "text-fg-negative": state.status === "error",
              "text-fg-positive": state.status === "success",
            })}
          >
            {state.message}
          </p>
        )}
      </div>

      <input type="hidden" name="accent" value={accent} />
      <input type="hidden" name="neutral" value={neutral} />
      <input type="hidden" name="background" value={background} />

      <div className="flex w-full items-center justify-between gap-4">
        <Button
          variant="secondary"
          type="button"
          onClick={() => ref.current?.close()}
          className="min-w-24"
        >
          Cancel
        </Button>
        <Button type="submit" className="min-w-24" disabled={isPending}>
          {isPending && (
            <Loader2 className="text-fg-primary mr-1 size-4 animate-spin" />
          )}
          Save
        </Button>
      </div>
    </form>
  );
}
