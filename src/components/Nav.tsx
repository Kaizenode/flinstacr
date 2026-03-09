"use client";

import { useState, useEffect } from "react";

const links = ["Services", "Method", "Testimonials", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 3rem",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: scrolled
          ? "rgba(0, 0, 0, 0.75)"
          : "rgba(0, 0, 0, 0.0)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        transition: "background 0.4s ease",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontWeight: 700,
          fontSize: "1.2rem",
          color: "#fff",
          letterSpacing: "-0.02em",
          userSelect: "none",
        }}
      >
        Flinsta
      </span>

      {/* Links + CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
            }
          >
            {item}
          </a>
        ))}
        <button
          className="btn-metallic"
          style={{ padding: "10px 22px", fontSize: "0.875rem" }}
        >
          ✦ Book a Call
        </button>
      </div>
    </nav>
  );
}
