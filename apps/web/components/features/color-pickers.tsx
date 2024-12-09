"use client";

import { useEffect, type ReactNode } from "react";
import { generateColors, type NeutralScaleName } from "coloris-js";
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

  useEffect(() => {
    setColorProperties(accent, background, neutral);
  }, [accent, background, neutral]);

  return (
    <div className="flex items-center gap-4">
      <ColorPicker color={accent} onChange={setAccent}>
        <Button variant="default">
          <ColorSwatch color={accent} />
          <span className="ml-1">Accent</span>
        </Button>
      </ColorPicker>

      <NeutralColorPicker color={neutral} onChange={setNeutral}>
        <Button variant="secondary">
          <ColorSwatch color={neutral} />
          <span className="ml-1">Neutral</span>
        </Button>
      </NeutralColorPicker>

      <ColorPicker color={background} onChange={setBackground}>
        <Button variant="outline">
          <ColorSwatch color={background} />
          <span className="ml-1">Background</span>
        </Button>
      </ColorPicker>
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

function setColorProperties(
  accent: string,
  background: string,
  neutral: string,
) {
  const colors = generateColors({
    appearance: "light",
    accent,
    background,
    neutral,
  });
  const root = document.documentElement;

  const supportsOKLCH = window.CSS && CSS.supports("color", "oklch(0% 0 0)");
  const supportsP3 = window.CSS && CSS.supports("color", "p3(0 0 0)");

  if (supportsOKLCH) {
    colors.accentScaleWideGamut.forEach((color, i) => {
      root.style.setProperty(`--accent-${i + 1}`, color);
    });
    colors.grayScaleWideGamut.forEach((color, i) => {
      root.style.setProperty(`--neutral-${i + 1}`, color);
    });
    root.style.setProperty("--neutral-surface", colors.graySurfaceWideGamut);
    root.style.setProperty("--accent-surface", colors.accentSurfaceWideGamut);
  } else if (supportsP3) {
    colors.accentScaleAlphaWideGamut.forEach((color, i) => {
      root.style.setProperty(`--accent-a${i + 1}`, color);
    });
    colors.grayScaleAlphaWideGamut.forEach((color, i) => {
      root.style.setProperty(`--neutral-a${i + 1}`, color);
    });
  } else {
    colors.accentScale.forEach((color, i) => {
      root.style.setProperty(`--accent-${i + 1}`, color);
    });
    colors.accentScaleAlpha.forEach((color, i) => {
      root.style.setProperty(`--accent-a${i + 1}`, color);
    });
    colors.grayScale.forEach((color, i) => {
      root.style.setProperty(`--neutral-${i + 1}`, color);
    });
    colors.grayScaleAlpha.forEach((color, i) => {
      root.style.setProperty(`--neutral-a${i + 1}`, color);
    });
    root.style.setProperty("--neutral-surface", colors.graySurface);
    root.style.setProperty("--accent-surface", colors.accentSurface);
  }

  root.style.setProperty("--background", colors.background);
  root.style.setProperty("--accent-contrast", colors.accentContrast);
}

export { ColorPickers };
