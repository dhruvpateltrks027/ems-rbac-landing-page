"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:size-4 ",
	{
		variants: {
			variant: {
				default:
					"bg-black text-white hover:bg-slate-800",

				secondary:
					"bg-slate-100 text-slate-900 hover:bg-slate-200",

				outline:
					"border border-slate-300 bg-white hover:bg-slate-100",

				ghost:
					"hover:bg-slate-100",

				destructive:
					"bg-red-500 text-white hover:bg-red-600",

				link:
					"text-blue-600 underline-offset-4 hover:underline",

				light:
					"bg-white text-slate-900 hover:bg-slate-100",
			},

			size: {
				sm: "h-8 px-3 text-xs",
				default: "h-10 px-4",
				lg: "h-11 px-6",
				icon: "size-10",
			},
		},

		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				ref={ref}
				className={cn(
					buttonVariants({
						variant,
						size,
					}),
					className
				)}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };

