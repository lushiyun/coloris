import { Loader2 } from "lucide-react";

export default function CollectionLoading() {
  return (
    <div className="grid flex-grow place-items-center">
      <Loader2 className="size-4 animate-spin" />
    </div>
  );
}
