"use client";

import { Fragment } from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import BlobBackground from "./BlobBackground";

const socials = [
  { label: "TikTok", icon: FaTiktok },
  { label: "Instagram", icon: FaInstagram },
];

export default function CTASection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "8rem 2rem",
        background: "var(--bg)",
        textAlign: "center",
      }}
    >
      <BlobBackground intensity={1.6} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "680px",
          width: "100%",
        }}
      >
        {/* Status pill */}
        <div
          data-reveal
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#111",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4ade80",
              display: "block",
              flexShrink: 0,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          Abierto a Nuevos Proyectos
        </div>

        {/* Heading */}
        <h2
          data-reveal
          data-delay="1"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#fff",
            marginBottom: "1.75rem",
          }}
        >
          ¿Listo para dejar de ser intercambiable?
        </h2>

        {/* Subtext */}
        <p
          data-reveal
          data-delay="2"
          style={{
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
            fontSize: "1.05rem",
            maxWidth: "520px",
            margin: "0 auto 3rem",
          }}
        >
          Construyamos tu oferta premium, afilemos tu posicionamiento e
          instalemos un sistema que genere demanda. Reserva una llamada
          diagnóstico gratuita de 30 minutos.
        </p>

        {/* CTA */}
        <div data-reveal data-delay="3" style={{ marginBottom: "3rem" }}>
          <button className="btn-metallic lg">Reservar una Llamada Gratuita</button>
        </div>

        {/* Social links */}
        <div
          data-reveal
          data-delay="4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            fontSize: "0.875rem",
          }}
        >
          {socials.map(({ label, icon: Icon }, i) => (
            <Fragment key={label}>
              {i > 0 && (
                <span
                  style={{
                    color: "rgba(255,255,255,0.18)",
                    userSelect: "none",
                  }}
                >
                  |
                </span>
              )}
              <a
                href="#"
                aria-label={label}
                style={{
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                }
              >
                <Icon size={20} />
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
