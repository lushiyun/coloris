import { ColorPickers } from "./color-pickers";
import { ColorSwatches } from "./color-swatches";

export function Color() {
  return (
    <div className="border-border flex w-full flex-col items-center gap-6 rounded-2xl border p-4">
      <ColorPickers />
      <ColorSwatches />
    </div>
  );
}
