import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";
import type { ReactNode } from "react";

export function NavCard({
  href,
  icon,
  title,
  children,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Link href={href}>
      <div className="border-divider-primary flex size-full flex-col gap-y-8 rounded-2xl border p-6 transition-transform ease-in hover:scale-[0.99]">
        <div className="flex flex-shrink-0 items-center gap-x-4">
          <span className="border-divider-primary inline-flex size-12 items-center justify-center rounded-full border">
            {icon}
          </span>
          <h2 className="text-xl font-medium">{title}</h2>
        </div>
        <div className="grow">{children}</div>
        <div className="flex-shrink-0 self-end">
          <ChevronRight className="size-5" />
        </div>
      </div>
    </Link>
  );
}
