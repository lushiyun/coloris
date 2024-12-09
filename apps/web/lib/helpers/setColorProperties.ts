import { coloris, NeutralScaleName } from "coloris-js";

function setColorProperties(
  accent: string,
  background: string,
  neutral: string,
) {
  const cssVariables = coloris({
    appearance: "light",
    accent,
    background,
    neutral: neutral as NeutralScaleName,
  });

  const stylesheet = document.createElement("style");
  stylesheet.textContent = cssVariables;
  document.head.appendChild(stylesheet);
}

export { setColorProperties };
