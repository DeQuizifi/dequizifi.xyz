import Link from "next/link";
import React from "react";

/**
 * Very basic, presentational Navbar placeholder.
 * - No hardcoded colors
 * - No global CSS changes
 * This is intentionally minimal — we'll iterate on design & behaviour later.
 */
export default function Navbar(): React.ReactElement {
  return (
    <nav aria-label="Main navigation" className="navbar" role="navigation">
      <div
        className="navbar-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 1rem",
        }}
      >
        <div className="navbar-brand">
          <Link href="/">DeQuiziFi</Link>
        </div>

        <div className="navbar-links" style={{ display: "flex", gap: "1rem" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/quiz">Quiz</Link>
        </div>
      </div>
    </nav>
  );
}
