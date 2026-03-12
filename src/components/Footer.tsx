"use client";

import Image from "next/image";

const footerLinks = ["Política de Privacidad", "Términos"];

const shineStyle = `
  @keyframes shine {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .kaizenode-shine {
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0.35) 0%,
      rgba(255,255,255,0.35) 35%,
      rgba(255,255,255,1) 50%,
      rgba(255, 255, 255, 0.35) 65%,
      rgba(255,255,255,0.35) 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s linear infinite;
  }
`;

export default function Footer() {
  return (
    <>
      <style>{shineStyle}</style>
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
        © 2025 Flinsta. Todos los derechos reservados.
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

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
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

        <span
          style={{
            width: "1px",
            height: "14px",
            background: "rgba(255,255,255,0.12)",
          }}
        />

        <a
          href="https://kaizenode.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
            opacity: 0.35,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.35")}
        >
          <span className="kaizenode-shine" style={{ fontSize: "0.8rem" }}>
            Desarrollado por
          </span>
          <Image
            src="/Icon_White.png"
            alt="Kaizenode"
            width={16}
            height={16}
            style={{ objectFit: "contain" }}
          />
          <span
            className="kaizenode-shine"
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Kaizenode
          </span>
        </a>
      </div>
    </footer>
    </>
  );
}
