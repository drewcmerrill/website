"use client";

import * as React from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();

  // Check if the theme has been loaded
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loading spinner, etc.
  }

  return (
    <div
      className="mr-4"
      onClick={() => {
        if (resolvedTheme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
    >
      {resolvedTheme === "dark" ? (
        <MdOutlineLightMode />
      ) : (
        <MdOutlineDarkMode />
      )}
    </div>
  );
}
