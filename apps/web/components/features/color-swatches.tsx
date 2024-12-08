const arrayOf12 = Array.from({ length: 12 }, (_, i) => i + 1);

export function ColorSwatches() {
	return (
		<div>
			<ul className="flex flex-col border border-divider-primary divide-y divide-divider-primary">
				{arrayOf12.map((number) => (
					<li
						key={number}
						className="size-10 nth-of-type-1:bg-[var(--accent-1)]"
					>
						{number}
					</li>
				))}
			</ul>
		</div>
	);
}
