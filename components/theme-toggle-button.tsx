"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";

type ThemeToggleButtonProps = {
  className?: string;
  showLabel?: boolean;
};

export default function ThemeToggleButton({
  className = "",
  showLabel = true,
}: ThemeToggleButtonProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      className={`theme-btn ${className}`}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <svg
        className="icon-dark"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg
        className="icon-light"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      {showLabel && (
        <>
          <span className="lbl-dark">dark mode</span>
          <span className="lbl-light">light mode</span>
        </>
      )}
    </button>
  );
}
