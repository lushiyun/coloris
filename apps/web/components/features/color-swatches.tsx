import styles from "@/styles/color-swatches.module.css";

const arrayOf12 = Array.from({ length: 12 }, (_, i) => i + 1);

export function ColorSwatches() {
  return (
    <div className="flex gap-x-3">
      <ul className="flex flex-col gap-y-2">
        {arrayOf12.map((number) => (
          <button
            type="button"
            key={number}
            className={`ease-fluid block size-12 cursor-pointer rounded-xl transition transition-transform hover:ring-2 hover:ring-[var(--accent-8)] hover:ring-offset-0 active:scale-95 ${styles.accent}`}
          />
        ))}
      </ul>

      <ul className="flex flex-col gap-y-2">
        {arrayOf12.map((number) => (
          <button
            type="button"
            key={number}
            className={`ease-fluid block size-12 cursor-pointer rounded-xl transition transition-transform hover:ring-2 hover:ring-[var(--neutral-8)] hover:ring-offset-0 active:scale-95 ${styles.neutral}`}
          />
        ))}
      </ul>
    </div>
  );
}
