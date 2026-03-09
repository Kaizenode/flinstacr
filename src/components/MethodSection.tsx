"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const phases = [
  {
    num: "01",
    title: "Rediseño de Oferta Premium",
    desc: "Arquitectamos una oferta premium con una transformación clara, estructura sólida y un precio que se defiende — no arbitrario.",
  },
  {
    num: "02",
    title: "Posicionamiento Estratégico",
    desc: "Definimos tu nicho por situación, afilamos tu identidad profesional y eliminamos la intercambiabilidad.",
  },
  {
    num: "03",
    title: "Sistema de Contenido con Intención Comercial",
    desc: "Construimos una arquitectura de contenido diseñada para la conversión — no el engagement. Cada pieza acerca a alguien más a comprar.",
  },
  {
    num: "04",
    title: "Sistema de Activación por DM",
    desc: "Instalamos un sistema de conversación-a-cierre que convierte DMs entrantes en clientes de alto valor.",
  },
];

export default function MethodSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="method"
      style={{
        background: "var(--bg)",
        padding: "8rem 3rem",
        position: "relative",
      }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            data-reveal
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              marginBottom: "1rem",
            }}
          >
            El Método
          </p>

          <h2
            data-reveal
            data-delay="1"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Un proceso estructurado. No un curso.
          </h2>

          <p
            data-reveal
            data-delay="2"
            style={{
              color: "rgba(255,255,255,0.45)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.65,
              fontSize: "1rem",
            }}
          >
            Cuatro fases interconectadas que transforman cómo te posicionas, ofreces
            y vendes.
          </p>
        </div>

        {/* Phase cards */}
        <div className="grid-4">
          {phases.map((phase, i) => (
            <div key={phase.num} className="method-card-wrapper" data-reveal data-delay={`${i + 1}`}>
            <div className="method-card">
              {/* Ghost number */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.5rem",
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.06)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  userSelect: "none",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {phase.num}
              </span>

              {/* Step badge */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-geist-mono)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {phase.num}
              </div>

              <h3
                style={{
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "0.75rem",
                  fontSize: "0.975rem",
                  lineHeight: 1.3,
                }}
              >
                {phase.title}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.65,
                  fontSize: "0.875rem",
                }}
              >
                {phase.desc}
              </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
