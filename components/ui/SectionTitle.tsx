import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-5xl font-bold text-text-primary mb-12",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
