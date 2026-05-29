"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, forwardRef, ReactNode, useState } from "react";

// Mostly used from this Medium article
// https://medium.com/@radovanbotik/link-component-in-next-js-15-d5a72042d5a7

// https://tigerabrodi.blog/the-story-behind-tailwinds-cn-function

export type LinkType = Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    | "href"
    | "as"
    | "replace"
    | "scroll"
    | "shallow"
    | "passHref"
    | "prefetch"
    | "locale"
    | "legacyBehaviour"
    | "onMouseEnter"
    | "onTouchStart"
    | "onClick"
> &
    LinkProps & {
    activeStyles?: string;
    icon?: string;
}

export const CustomLink = forwardRef<HTMLAnchorElement, LinkType>(function Navlink(
    { activeStyles, children, href, className, icon: Icon, ...props }: LinkType,
    ref,
) {
    const pathname = usePathname();
    const isCurrent = pathname === href;

    return (
        <Link
            ref={ref}
            href={href}
            className={cn(
                "group relative flex shrink-0 gap-x-3 rounded-3xl p-2 text-sm/6 font-semibold",
                className,
                isCurrent && activeStyles,
            )}
            {...props}
        >
            {Icon}
            {children}
        </Link>
    );
});
