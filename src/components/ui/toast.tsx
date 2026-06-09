'use client';

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Viewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Viewport
		ref={ref}
		className={cn(
			"fixed top-4 right-4 z-[99999] flex max-h-screen w-full max-w-[420px] flex-col gap-2 p-4 pointer-events-none",
			className
		)}
		{...props}
	/>
));

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
	"group pointer-events-auto relative flex w-full items-start justify-between space-x-2 overflow-hidden rounded-lg border p-4 pr-8 shadow-xl transition-all bg-white dark:bg-neutral-900",
	{
		variants: {
			variant: {
				default:
					"border-neutral-200 text-neutral-900 dark:border-neutral-700 dark:text-white",

				success:
					"border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-900/20 dark:text-green-100",

				error:
					"border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-900/20 dark:text-red-100",

				destructive:
					"border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-900/20 dark:text-red-100",

				info:
					"border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-100",
			},
		},

		defaultVariants: {
			variant: "default",
		},
	}
);
const Toast = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
		VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
	return (
		<ToastPrimitives.Root
			ref={ref}
			className={cn(toastVariants({ variant }), className)}
			{...props}
		/>
	);
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Action>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn(
			"inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
			className,
		)}
		{...props}
	/>
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Close>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		ref={ref}
		toast-close=""
		className={cn(
			"absolute right-2 top-2 rounded-md p-1 text-foreground/70 opacity-100 transition-colors hover:text-foreground focus:outline-none",
			className
		)}
		{...props}
	>
		<X className="h-4 w-4" />
	</ToastPrimitives.Close>
));

ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Title>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Title
		ref={ref}
		className={cn("text-sm font-semibold [&+div]:text-xs", className)}
		{...props}
	/>
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Description>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Description
		ref={ref}
		className={cn("text-sm opacity-90", className)}
		{...props}
	/>
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;
export {
	type ToastProps,
	type ToastActionElement,
	ToastProvider,
	ToastViewport,
	Toast,
	ToastTitle,
	ToastDescription,
	ToastClose,
	ToastAction,
};

