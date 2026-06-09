import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap transition-all",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-black text-primary-foreground",

				secondary:
					"border-transparent bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",

				destructive:
					"border-transparent bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400",

				outline:
					"border-border bg-background text-foreground",

				success:
					"border-transparent bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",

				warning:
					"border-transparent bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
			},
		},

		defaultVariants: {
			variant: "default",
		},
	}
);

function Badge({
	className,
	variant,
	asChild = false,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "span";

	return (
		<Comp
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };

