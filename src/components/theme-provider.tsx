"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// This is for Shadcn dark mode

export function ThemeProvider({
                                  children,
                                  ...props
                              }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}