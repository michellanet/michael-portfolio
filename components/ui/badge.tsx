import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-xl border px-2.5 py-1 text-xs font-medium",
    {
        variants: {
            variant: {
                default: "border-transparent bg-slate-900 text-white dark:bg-white dark:text-slate-900",
                secondary: "border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",
                outline: "text-slate-700 border-slate-300 dark:text-slate-200 dark:border-slate-700",
            },
        },
        defaultVariants: { variant: "default" },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

export function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}