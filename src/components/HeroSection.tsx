"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import BlobBackground from "./BlobBackground";

export default function HeroSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "8rem 2rem 4rem",
        background: "var(--bg)",
        textAlign: "center",
      }}
    >
      <BlobBackground />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "860px",
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
          Open to new projects
        </div>

        {/* Headline */}
        <h1
          data-reveal
          data-delay="1"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
            marginBottom: "1.75rem",
            color: "#fff",
          }}
        >
          Stop selling hours.
          <br />
          Start selling authority.
        </h1>

        {/* Subheadline */}
        <p
          data-reveal
          data-delay="2"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 2.75rem",
          }}
        >
          We help 1:1 professionals exit the interchangeable model and become
          positioned authorities with structured premium offers.
        </p>

        {/* CTAs */}
        <div
          data-reveal
          data-delay="3"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4.5rem",
          }}
        >
          <button className="btn-metallic" style={{ padding: "14px 32px" }}>
            Start the Process
          </button>
          <a
            href="#method"
            className="btn-metallic"
            style={{
              padding: "14px 32px",
              background: "linear-gradient(160deg, #0f0f0f 0%, #050505 100%)",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            See the Method →
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          data-reveal
          data-delay="4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            opacity: 0.4,
            fontSize: "0.8rem",
          }}
        >
          Scroll down —
          <span
            style={{
              display: "inline-block",
              animation: "bounce 1.5s ease-in-out infinite",
              fontSize: "1rem",
            }}
          >
            🖱
          </span>
          —
        </div>
      </div>
    </section>
  );
}
