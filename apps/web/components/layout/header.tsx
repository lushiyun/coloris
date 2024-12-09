import { Tooltip } from "../core/tooltip";

export function Header() {
  return (
    <header className="bg-bg sticky top-0 z-10 flex items-center justify-between py-4">
      <Tooltip content="Programmatic color css variables generator for multi-theme platforms">
        <h1 className="font-mono text-lg">coloris.js</h1>
      </Tooltip>

      <div className="flex items-center gap-x-3 text-xs">
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
      </div>
    </header>
  );
}
