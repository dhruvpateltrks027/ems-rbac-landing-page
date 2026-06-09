"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card"
			className={cn("rounded-lg border bg-card p-4 shadow-sm", className)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div data-slot="card-header" className={cn("mb-2", className)} {...props} />
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
	return (
		<h3 data-slot="card-title" className={cn("text-lg font-semibold", className)} {...props} />
	);
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div data-slot="card-content" className={cn("text-sm", className)} {...props} />
	);
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div data-slot="card-footer" className={cn("mt-4", className)} {...props} />
	);
}

export { Card, CardHeader, CardTitle, CardContent, CardFooter };

