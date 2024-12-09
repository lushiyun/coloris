import { Tooltip } from "@/components/core/tooltip";

export function Footer() {
  return (
    <footer className="bg-bg flex items-center justify-end gap-x-3 py-4 text-xs">
      <Tooltip content="Download npm package">
        <a
          href="http://shiyunlu.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fg text-[var(--neutral-11)] transition-colors"
        >
          NPM
        </a>
      </Tooltip>

      <Tooltip content="Source code">
        <a
          href="https://github.com/shiyunlu/coloris-js"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fg text-[var(--neutral-11)] transition-colors"
        >
          Github
        </a>
      </Tooltip>
    </footer>
  );
}
