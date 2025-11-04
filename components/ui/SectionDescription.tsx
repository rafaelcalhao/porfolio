import { cn } from "@/lib/utils";
import React from "react";

type SectionDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export function SectionDescription({ children, className, ...props }: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "text-xl text-text-secondary max-w-2xl mb-8",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
