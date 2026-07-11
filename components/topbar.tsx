"use client";

import React from "react";
import ThemeToggleButton from "./theme-toggle-button";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="mark">
        soham<b>.</b>pal
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div className="st">
          <span className="dot"></span>open
        </div>
        <ThemeToggleButton showLabel={false} />
      </div>
    </div>
  );
}
