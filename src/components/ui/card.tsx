import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card text-card-foreground shadow-md transition-shadow hover:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export { Card };
