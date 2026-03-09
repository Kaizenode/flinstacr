"use client";

const footerLinks = ["Privacy Policy", "Terms"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "1.75rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        © 2025 Flinsta. All rights reserved.
      </span>

      <span
        style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "-0.02em",
        }}
      >
        Flinsta
      </span>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {footerLinks.map((item) => (
          <a
            key={item}
            href="#"
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.35)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
            }
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}
