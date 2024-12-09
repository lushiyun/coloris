import { arrayOf12 } from "@/lib/helpers/array-of-12";
import styles from "@/styles/color-swatches.module.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/core/popover";

export function ColorSwatches() {
  return (
    <div className="w-full space-y-2">
      <ul className="grid grid-cols-12 gap-1">
        {arrayOf12.map((number) => (
          <ColorPopover key={number} type="accent" number={number} />
        ))}
      </ul>

      <ul className="grid grid-cols-12 gap-1">
        {arrayOf12.map((number) => (
          <ColorPopover key={number} type="neutral" number={number} />
        ))}
      </ul>
    </div>
  );
}

function ColorPopover({
  type,
  number,
}: {
  type: "accent" | "neutral";
  number: number;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={`ease-fluid hover:ring-ring block aspect-square w-full cursor-pointer rounded-lg transition hover:ring-2 hover:ring-offset-0 active:scale-95 ${styles[type]}`}
        />
      </PopoverTrigger>
      <PopoverContent>
        <article className="prose">
          <code>
            var(--{type}-{number})
          </code>
        </article>
      </PopoverContent>
    </Popover>
  );
}
