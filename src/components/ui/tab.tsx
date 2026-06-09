"use client";

import * as React from "react";

import { cn } from "@/lib/utils";


const Tabs = require("@radix-ui/react-tabs").default || require("@radix-ui/react-tabs");

const TabsList = React.forwardRef<
	React.ElementRef<typeof Tabs.List>,
	React.ComponentPropsWithoutRef<typeof Tabs.List>
>(({ className, ...props }, ref) => (
	<Tabs.List
		ref={ref}
		className={cn(
			"inline-flex h-11 items-center border-b border-slate-200 w-full justify-start rounded-none bg-transparent p-0",
			className
		)}
		{...props}
	/>
));

TabsList.displayName = Tabs.List.displayName;

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof Tabs.Trigger>,
	React.ComponentPropsWithoutRef<typeof Tabs.Trigger>
>(({ className, ...props }, ref) => (
	<Tabs.Trigger
		ref={ref}
		className={cn(
			"inline-flex items-center justify-center whitespace-nowrap border-b-2 border-transparent px-4 py-3 text-sm font-medium transition-all",
			"text-slate-500 hover:text-slate-700",
			"focus-visible:outline-none",
			"disabled:pointer-events-none disabled:opacity-50",
			"data-[state=active]:border-slate-900",
			"data-[state=active]:text-slate-900",
			className
		)}
		{...props}
	/>
));

TabsTrigger.displayName = Tabs.Trigger.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof Tabs.Content>,
	React.ComponentPropsWithoutRef<typeof Tabs.Content>
>(({ className, ...props }, ref) => (
	<Tabs.Content
		ref={ref}
		className={cn("mt-6 outline-none", className)}
		{...props}
	/>
));

TabsContent.displayName = Tabs.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

