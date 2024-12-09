import { CssVariables } from "../features/css-variables";
import { SemanticVariables } from "../features/semantic-variables";

export function Docs() {
  return (
    <article className="prose prose-pre:bg-secondary prose-pre:text-fg-secondary prose-pre:rounded-2xl prose-code:text-xs prose-a:text-[var(--accent-11)] prose-a:no-underline prose-a:hover:text-[var(--accent-12)] prose-a:font-normal mx-auto">
      <p>
        coloris.js generates primative CSS variables from your accent and
        background colors based on{" "}
        <a
          href="https://www.radix-ui.com/colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Radix Colors
        </a>{" "}
        .
      </p>

      <CssVariables />

      <p>
        Using these variables, you can create your own sematic color system. For
        example, for{" "}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          shadcn/ui
        </a>
        :
      </p>
      <SemanticVariables />

      <p>Use it as an one-off or programmatic color palette generator.</p>

      <h2>One-off projects</h2>

      <p>
        Use this web app to generate primative CSS variables for your accent and
        background colors. Copy the code and remove the variables you don&apos;t
        need.
      </p>

      <h2>Multi-theme platform with global design system</h2>

      <p>
        Install the{" "}
        <a href="https://www.npmjs.com/package/coloris-js">coloris-js</a>{" "}
        package.
      </p>

      <pre>
        <code>npm install coloris-js</code>
      </pre>

      <p>
        Generate CSS variables.
      </p>

      <pre>
        <code>
{
`import { coloris } from "coloris-js";

const colors = coloris({
  appearance: "light",
  accent: "#BCFB46",
  background: "#ffffff",
  neutral: "sand",
});`
}
        </code>
      </pre>

      <p>Use in React server components.</p>

      <pre>
				<code>
{
`import { coloris } from "coloris-js";
import { getTheme } from "@/lib/fetchers";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { id } = params;
  const theme = await getTheme(id);
  const { accent, background, neutral } = theme;

  const colors = coloris({
    appearance: "light",
    accent,
    background,
    neutral,
  });

  return (
    <>
      <style>{colors}</style>
      {children}
    </>
  );
}
`
}
        </code>
      </pre>
    </article>
  );
}
