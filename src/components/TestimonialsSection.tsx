"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Laura M.",
    role: "Business Coach",
    quote:
      "I went from charging $80/session to closing a $3,000 program in 6 weeks. The offer redesign changed everything.",
    initials: "LM",
  },
  {
    name: "Carlos R.",
    role: "Marketing Consultant",
    quote:
      "I had followers but no system. Now my content actually generates leads that close. Completely different business.",
    initials: "CR",
  },
  {
    name: "Valentina S.",
    role: "Executive Coach",
    quote:
      "The positioning work alone was worth 10x the investment. I stopped competing and started leading.",
    initials: "VS",
  },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="testimonials"
      style={{ background: "var(--bg)", padding: "8rem 3rem" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
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
            Results
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
            }}
          >
            Professionals who made the shift
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              data-delay={`${i + 1}`}
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2a2a2a, #181818)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "-0.01em",
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>

              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.2rem",
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontSize: "0.825rem",
                  color: "rgba(255,255,255,0.38)",
                  marginBottom: "1.25rem",
                }}
              >
                {t.role}
              </div>

              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  marginBottom: "1.25rem",
                }}
              />

              <p
                style={{
                  color: "rgba(255,255,255,0.62)",
                  lineHeight: 1.65,
                  fontSize: "0.9rem",
                  flex: 1,
                  marginBottom: "1.25rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: "var(--gold)",
                    letterSpacing: "2px",
                    fontSize: "0.875rem",
                  }}
                >
                  ★★★★★
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  5.0
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
