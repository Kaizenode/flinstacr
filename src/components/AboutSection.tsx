"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const photos = ["/normal.jpeg", "/bw.jpeg"];

const skills = [
  "Diseño de Oferta Premium",
  "Posicionamiento Estratégico",
  "Sistemas de Contenido",
  "Ventas de Alto Valor",
  "Marca Personal",
];

export default function AboutSection() {
  const ref = useScrollReveal<HTMLElement>();
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section
      ref={ref}
      id="about"
      style={{ background: "var(--bg)", padding: "8rem 3rem" }}
    >
      <div className="grid-split">
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
            Acerca de
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
            Conoce al Fundador
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
            Soy consultor de posicionamiento estratégico. Ayudo a profesionales
            con experiencia real a dejar de competir por precio y empezar a cobrar
            premium. He trabajado con coaches, consultores y especialistas
            en toda América Latina para rediseñar sus ofertas, afilar su
            posicionamiento y construir sistemas de contenido que realmente generan clientes.
          </p>

          {/* Skills */}
          <div
            data-reveal
            data-delay="3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
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
        </div>

        {/* ── Right: Founder Photos ── */}
        <div data-reveal data-delay="2">
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.07)",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => setActivePhoto((prev) => (prev + 1) % photos.length)}
          >
            {photos.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Founder photo ${i + 1}`}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  opacity: i === activePhoto ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
                sizes="(max-width: 768px) 100vw, 45vw"
                priority={i === 0}
              />
            ))}
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
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                style={{
                  width: i === activePhoto ? 18 : 6,
                  height: 6,
                  borderRadius: "999px",
                  background:
                    i === activePhoto ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.18)",
                  transition: "width 0.3s, background 0.3s",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
