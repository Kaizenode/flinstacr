"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  "Premium Offer Design",
  "Strategic Positioning",
  "Content Systems",
  "High-Ticket Sales",
  "Personal Brand",
];

const experience = [
  { role: "Lead Strategist", brand: "Flinsta", period: "Currently" },
  { role: "Positioning Consultant", brand: "Various clients", period: "2023–24" },
  { role: "Brand & Offer Advisor", brand: "Multiple brands", period: "2021–23" },
];

export default function AboutSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      style={{ background: "var(--bg)", padding: "8rem 3rem" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "55fr 45fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* ── Left ── */}
        <div>
          <p
            data-reveal
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              marginBottom: "1.25rem",
            }}
          >
            About
          </p>

          <h2
            data-reveal
            data-delay="1"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: "1.75rem",
            }}
          >
            Meet the Founder
          </h2>

          <p
            data-reveal
            data-delay="2"
            style={{
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            I&rsquo;m a strategic positioning consultant. I help professionals
            with real expertise stop competing on price and start commanding
            premium. I&rsquo;ve worked with coaches, consultants, and specialists
            across Latin America to redesign their offers, sharpen their
            positioning, and build content systems that actually generate clients.
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              marginBottom: "1.75rem",
            }}
          />

          {/* Skills */}
          <div
            data-reveal
            data-delay="3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "1.75rem",
            }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  padding: "5px 12px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              marginBottom: "1.75rem",
            }}
          />

          {/* Experience */}
          <div data-reveal data-delay="4">
            {experience.map((exp, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  padding: "0.875rem 0",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  {exp.role}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {exp.brand}
                </span>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.28)",
                    textAlign: "right",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo placeholder ── */}
        <div data-reveal data-delay="2">
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              background:
                "linear-gradient(160deg, #1c1c1c 0%, #0d0d0d 100%)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.04) 0%, transparent 65%)",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.12)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                zIndex: 1,
              }}
            >
              Founder Photo
            </span>
          </div>

          {/* Dot pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              marginTop: "1rem",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: i === 0 ? 18 : 6,
                  height: 6,
                  borderRadius: "999px",
                  background:
                    i === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.18)",
                  transition: "width 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
