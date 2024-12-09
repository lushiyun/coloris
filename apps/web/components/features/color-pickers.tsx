"use client";

import { type ReactNode } from "react";
import { type NeutralScaleName } from "coloris-js";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useColorStore } from "@/lib/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/popover";
import { Button } from "@/components/core/button";
import { arrayOf12 } from "@/lib/helpers/array-of-12";
import { Tooltip } from "@/components/core/tooltip";
import styles from "@/styles/color-swatches.module.css";
import { cn } from "@/lib/helpers/cn";
import { Save } from "lucide-react";

const NEUTRAL_SCALES = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as NeutralScaleName[];

function ColorPickers() {
  const { accent, neutral, background, setAccent, setNeutral, setBackground } =
    useColorStore();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <ColorPicker color={accent} onChange={setAccent}>
        <Button size="sm">
          <ColorSwatch color={accent} />
          <span className="ml-1">Accent</span>
        </Button>
      </ColorPicker>

      <NeutralColorPicker color={neutral} onChange={setNeutral}>
        <Button variant="secondary" size="sm">
          <ColorSwatch color={neutral} />
          <span className="ml-1">Neutral</span>
        </Button>
      </NeutralColorPicker>

      <ColorPicker color={background} onChange={setBackground}>
        <Button variant="outline" size="sm">
          <ColorSwatch color={background} />
          <span className="ml-1">Background</span>
        </Button>
      </ColorPicker>

      <Button variant="outline" size="icon" className="size-10">
        <Tooltip content="Save">
          <Save className="size-5" />
        </Tooltip>
      </Button>
    </div>
  );
}

function NeutralColorPicker({
  children,
  color,
  onChange,
}: {
  children: ReactNode;
  color: NeutralScaleName;
  onChange: (color: NeutralScaleName) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="flex w-full flex-col items-center gap-2">
          <ul className="flex flex-col gap-2">
            {NEUTRAL_SCALES.map((scale) => (
              <Tooltip key={scale} content={scale}>
                <button
                  key={scale}
                  className={cn(
                    "hover:bg-muted cursor-pointer p-1 transition-colors",
                    {
                      "ring-ring ring-2 ring-offset-0": scale === color,
                    },
                  )}
                  onClick={() => onChange(scale)}
                >
                  <ul className="flex items-center">
                    {arrayOf12.map((number) => (
                      <li
                        key={number}
                        className={`bg-neutral-1 size-6 ${styles[scale]}`}
                      />
                    ))}
                  </ul>
                </button>
              </Tooltip>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ColorPicker({
  children,
  color,
  onChange,
}: {
  children: ReactNode;
  color: string;
  onChange: (color: string) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <div className="flex w-full flex-col items-center gap-4">
          <HexColorPicker color={color} onChange={onChange} />
          <HexColorInput
            color={color}
            onChange={onChange}
            className="border-border bg-bg placeholder:text-fg-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ColorSwatch({ color }: { color: string | NeutralScaleName }) {
  const isNeutral = NEUTRAL_SCALES.includes(color as NeutralScaleName);

  return (
    <span
      className={cn(
        "border-border size-5 rounded-full border ring-4 ring-white ring-offset-0",
        {
          "bg-neutral-1": isNeutral,
        },
      )}
      style={{ backgroundColor: isNeutral ? `var(--${color}-8)` : color }}
    />
  );
}

export { ColorPickers };
