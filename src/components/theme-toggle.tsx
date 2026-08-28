"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        data-testid="theme-toggle"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={() => {
        const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
      }}
      aria-label={`Current theme: ${theme}. Click to change.`}
      title={`Current theme: ${theme}. Click to change.`}
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 rotate-0 transition-transform duration-200" />
      ) : (
        <Sun className="h-5 w-5 rotate-0 transition-transform duration-200" />
      )}
    </Button>
  );
}