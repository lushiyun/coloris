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
						className={`block size-12 cursor-pointer transition ease-fluid hover:ring-2 hover:ring-offset-0 hover:ring-[var(--accent-8)] ${styles.accent}`}
					/>
				))}
			</ul>

			<ul className="flex flex-col gap-y-2">
				{arrayOf12.map((number) => (
					<button
						type="button"
						key={number}
						className={`block size-12 cursor-pointer transition ease-fluid hover:ring-2 hover:ring-offset-0 hover:ring-[var(--neutral-8)] ${styles.neutral}`}
					/>
				))}
			</ul>
		</div>
	);
}
