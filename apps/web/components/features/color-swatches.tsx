import { arrayOf12 } from "@/lib/helpers/array-of-12";
import styles from "@/styles/color-swatches.module.css";

export function ColorSwatches() {
  return (
    <div className="flex gap-x-3">
      <ul className="flex flex-col gap-y-2">
        {arrayOf12.map((number) => (
          <button
            type="button"
            key={number}
            className={`ease-fluid block size-12 cursor-pointer rounded-xl transition hover:ring-2 hover:ring-[var(--accent-8)] hover:ring-offset-0 active:scale-95 ${styles.accent}`}
          />
        ))}
      </ul>

      <ul className="flex flex-col gap-y-2">
        {arrayOf12.map((number) => (
          <button
            type="button"
            key={number}
            className={`ease-fluid block size-12 cursor-pointer rounded-xl transition hover:ring-2 hover:ring-[var(--neutral-8)] hover:ring-offset-0 active:scale-95 ${styles.neutral}`}
          />
        ))}
      </ul>
    </div>
  );
}
