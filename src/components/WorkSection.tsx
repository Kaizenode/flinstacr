"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    handle: "@coach_name",
    result: "De sesiones de $80 a programa de $3K. 6 semanas.",
    category: "COACHING",
    bg: "#141414",
  },
  {
    handle: "@consultant_name",
    result: "Sistema de contenido generando 5 leads/semana orgánicamente.",
    category: "CONSULTORÍA",
    bg: "#111111",
  },
  {
    handle: "@therapist_name",
    result: "Nicho premium reposicionado. Ticket promedio 3x.",
    category: "TERAPIA",
    bg: "#131313",
  },
  {
    handle: "@specialist_name",
    result: "Lanzó programa de alto valor. Sold out en 30 días.",
    category: "ESPECIALISTA",
    bg: "#0f0f0f",
  },
];

export default function WorkSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="work" style={{ background: "var(--bg)", padding: "8rem 0" }}>
      {/* Header */}
      <div
        className="work-header-pad"
        style={{
          marginBottom: "2.5rem",
          padding: "0 max(3rem, calc((100vw - 1200px) / 2))",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span
            data-reveal
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              whiteSpace: "nowrap",
            }}
          >
            Casos de Estudio ↓
          </span>
          <hr
            style={{
              flex: 1,
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          />
        </div>
      </div>

      {/* Cards grid */}
      <div
        className="work-grid"
        style={{
          padding: "0 max(3rem, calc((100vw - 1200px) / 2))",
        }}
      >
        {cases.map((c, i) => (
          <div
            key={c.handle}
            data-reveal
            data-delay={`${i + 1}`}
            className="work-card"
            style={{
              minHeight: "320px",
              background: c.bg,
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="work-card-inner"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                padding: "1.5rem",
                height: "100%",
              }}
            >
              {/* Category */}
              <span
                style={{
                  fontSize: "0.62rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {c.category}
              </span>

              {/* Result */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {c.handle}
                </p>
                <p
                  style={{
                    fontSize: "0.975rem",
                    color: "#fff",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: "1.25rem",
                  }}
                >
                  {c.result}
                </p>

                {/* Frosted pill CTA */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "999px",
                    padding: "8px 16px",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.8)",
                    cursor: "pointer",
                  }}
                >
                  Ver Caso de Estudio ↗
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
