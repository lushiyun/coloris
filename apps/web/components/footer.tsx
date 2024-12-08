import { Tooltip } from "./core/tooltip";

export function Footer() {
  return (
    <footer className="text-fg-secondary flex items-center justify-end gap-x-4 pt-4">
      <Tooltip content="Download npm package">
        <a
          href="http://shiyunlu.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-secondary hover:text-fg-primary transition-colors"
        >
          NPM
        </a>
      </Tooltip>

      <Tooltip content="Source code">
        <a
          href="https://github.com/shiyunlu/coloris-js"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-secondary hover:text-fg-primary transition-colors"
        >
          Github
        </a>
      </Tooltip>
    </footer>
  );
}
