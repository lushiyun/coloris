import { arrayOf12 } from "@/lib/helpers/array-of-12";
import styles from "@/styles/color-swatches.module.css";

export function ColorSwatches() {
  return (
    <div className="w-full space-y-2">
      <ul className="grid grid-cols-12 gap-1">
        {arrayOf12.map((number) => (
          <button
            type="button"
            key={number}
            className={`ease-fluid block aspect-square w-full cursor-pointer rounded-lg transition hover:ring-2 hover:ring-[var(--accent-8)] hover:ring-offset-0 active:scale-95 ${styles.accent}`}
          />
        ))}
      </ul>

      <ul className="grid grid-cols-12 gap-1">
        {arrayOf12.map((number) => (
          <button
            type="button"
            key={number}
            className={`ease-fluid block aspect-square w-full cursor-pointer rounded-lg transition hover:ring-2 hover:ring-[var(--neutral-8)] hover:ring-offset-0 active:scale-95 ${styles.neutral}`}
          />
        ))}
      </ul>
    </div>
  );
}
