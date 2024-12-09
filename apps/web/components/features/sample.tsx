import { Button } from "@/components/core/button";
import { Input } from "@/components/core/input";
import { Label } from "@/components/core/label";
import { cn } from "@/lib/helpers/cn";
import { ArrowRight, Globe } from "lucide-react";

export function Sample() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-[var(--accent-surface)] p-6 inset-ring inset-shadow-sm ring shadow-md ring-[var(--accent-surface)] inset-shadow-white/20 inset-ring-white/15">
      <h3 className="text-xl font-medium">Create a new database</h3>

      <div className="grid grid-cols-[20%_min-content_1fr] grid-rows-[repeat(3,min-content)] gap-2">
        <Label htmlFor="organization" className="col-start-1">
          Organization
        </Label>
        <Input id="organization" className="col-start-1 row-start-2" />

        <Label htmlFor="database-name" className="col-start-3 row-start-1">
          Database name
        </Label>
        <Input
          id="database-name"
          className="col-start-3 row-start-2"
          placeholder="database-name"
        />

        <span className="col-start-2 row-start-2 flex items-center"> / </span>

        <p className="col-start-3 row-start-3 text-sm text-[var(--neutral-10)]">
          Lowercase alpha-number characters, dashes and underscores only
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center">
          <Label
            htmlFor="region"
            className="border-border bg-secondary inline-flex h-10 items-center rounded-ss-xl rounded-es-xl border px-3"
          >
            Region
          </Label>
          <Input
            id="region"
            name="region"
            className="rounded-ss-none rounded-es-none border-l-0"
          />
        </div>

        <p className="text-sm text-[var(--neutral-10)]">
          For best performance, choose a region closest to your application
        </p>
      </div>

      <div className="flex flex-col gap-y-3">
        <Label htmlFor="description">Plan type</Label>

        <PlanCard
          title="Business"
          description="Choose the compute and memory resources for your needs"
          price="from $48"
          highlight="Unlimited"
          helper="row reads and writes"
        />

        <PlanCard
          title="Pro"
          description="Read/write-based billing for lower traffic applications"
          price="from $28"
          highlight="100 billion"
          helper="row reads and 50 million row writes / month"
          isSelected={true}
        />

        <PlanCard
          title="Pro"
          description="Read/write-based billing for lower traffic applications"
          price="Free"
          highlight="1 billion"
          helper="row reads and 10 million row writes / month"
        />
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>
          <span>Next Step</span>
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function PlanCard({
  title,
  description,
  price,
  highlight,
  helper,
  isSelected = false,
}: {
  title: string;
  description: string;
  price: string;
  highlight: string;
  helper: string;
  isSelected?: boolean;
}) {
  return (
    <div
      className={cn(
        "border-border relative flex flex-col gap-y-2 rounded-2xl border px-4 py-5",
        {
          "ring-fg ring-2 ring-offset-0": isSelected,
        },
      )}
    >
      <div className="flex items-center gap-x-2">
        <Label>{title}</Label>
        <span className="border-border inline-flex items-center gap-x-1 rounded-[100px] border px-1.5 py-1 text-sm">
          <Globe className="size-4" />
          AWS ap-east-1
        </span>
      </div>

      <p>{description}</p>

      <p className="text-sm text-[var(--neutral-10)]">
        <span className="font-bold text-[var(--accent-9)]">{highlight}</span>{" "}
        {helper}
      </p>

      <div className="absolute top-5 right-4 flex flex-col items-end gap-y-1">
        <Label className={`${price !== "Free" && "text-[var(--accent-9)]"}`}>
          {price}
        </Label>
        {price !== "Free" && (
          <span className="text-sm text-[var(--neutral-10)]">/month</span>
        )}
      </div>
    </div>
  );
}
