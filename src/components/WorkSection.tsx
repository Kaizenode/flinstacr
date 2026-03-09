"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    handle: "@coach_name",
    result: "From $80 sessions to $3K program. 6 weeks.",
    category: "COACHING",
    bg: "#141414",
  },
  {
    handle: "@consultant_name",
    result: "Content system generating 5 leads/week organically.",
    category: "CONSULTING",
    bg: "#111111",
  },
  {
    handle: "@therapist_name",
    result: "Repositioned premium niche. 3x average ticket.",
    category: "THERAPY",
    bg: "#131313",
  },
  {
    handle: "@specialist_name",
    result: "Launched high-ticket program. Sold out in 30 days.",
    category: "SPECIALIST",
    bg: "#0f0f0f",
  },
];

export default function WorkSection() {
  const ref = useScrollReveal<HTMLElement>();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section ref={ref} id="work" style={{ background: "var(--bg)", padding: "8rem 0" }}>
      {/* Header */}
      <div
        style={{
          marginBottom: "2.5rem",
          padding: "0 max(3rem, calc((100vw - 1200px) / 2))",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
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
            Case Studies ↓
          </span>
          <hr
            style={{
              flex: 1,
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          />

          {/* Nav arrow */}
          <button
            onClick={scrollRight}
            className="btn-metallic"
            style={{
              width: "44px",
              height: "44px",
              padding: 0,
              borderRadius: "50%",
              flexShrink: 0,
            }}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      {/* Scrollable track — padding so shadows show, no overflow:hidden on outer */}
      <div
        ref={trackRef}
        className="scroll-hide"
        style={{
          display: "flex",
          gap: "1.25rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "max(3rem, calc((100vw - 1200px) / 2))",
          paddingRight: "max(3rem, calc((100vw - 1200px) / 2))",
          paddingBottom: "0.5rem",
        }}
      >
        {cases.map((c, i) => (
          <div
            key={c.handle}
            data-reveal
            data-delay={`${i + 1}`}
            className="work-card"
            style={{
              width: "280px",
              minHeight: "373px",
              aspectRatio: "3/4",
              background: c.bg,
              border: "1px solid rgba(255,255,255,0.07)",
              scrollSnapAlign: "start",
              flexShrink: 0,
            }}
          >
            <div
              className="work-card-inner"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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
              <div>
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
                  View Case Study ↗
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
