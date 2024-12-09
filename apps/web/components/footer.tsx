import { Tooltip } from "./core/tooltip";

export function Footer() {
  return (
    <footer className="text-muted-foreground flex items-center justify-end gap-x-4 py-6">
      <Tooltip content="Download npm package">
        <a
          href="http://shiyunlu.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fg transition-colors"
        >
          NPM
        </a>
      </Tooltip>

      <Tooltip content="Source code">
        <a
          href="https://github.com/shiyunlu/coloris-js"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fg transition-colors"
        >
          Github
        </a>
      </Tooltip>
    </footer>
  );
}
