"use client";

import { Fragment, useState } from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import BlobBackground from "./BlobBackground";

const socials = [
  { label: "TikTok", icon: FaTiktok },
  { label: "Instagram", icon: FaInstagram },
];

const countryCodes = [
  { code: "MX", dial: "+52", flag: "🇲🇽" },
  { code: "US", dial: "+1",  flag: "🇺🇸" },
  { code: "ES", dial: "+34", flag: "🇪🇸" },
  { code: "CO", dial: "+57", flag: "🇨🇴" },
  { code: "AR", dial: "+54", flag: "🇦🇷" },
  { code: "CL", dial: "+56", flag: "🇨🇱" },
  { code: "PE", dial: "+51", flag: "🇵🇪" },
  { code: "VE", dial: "+58", flag: "🇻🇪" },
  { code: "EC", dial: "+593", flag: "🇪🇨" },
  { code: "BO", dial: "+591", flag: "🇧🇴" },
  { code: "UY", dial: "+598", flag: "🇺🇾" },
  { code: "PY", dial: "+595", flag: "🇵🇾" },
  { code: "GT", dial: "+502", flag: "🇬🇹" },
  { code: "CR", dial: "+506", flag: "🇨🇷" },
  { code: "PA", dial: "+507", flag: "🇵🇦" },
  { code: "DO", dial: "+1",   flag: "🇩🇴" },
  { code: "GB", dial: "+44",  flag: "🇬🇧" },
  { code: "CA", dial: "+1",   flag: "🇨🇦" },
  { code: "BR", dial: "+55",  flag: "🇧🇷" },
  { code: "PT", dial: "+351", flag: "🇵🇹" },
];

const investmentRanges = [
  { value: "less-1k", label: "Menos de $1,000" },
  { value: "1k-2k", label: "$1,000 – $2,000" },
  { value: "3k-4k", label: "$3,000 – $4,000" },
  { value: "+5k", label: "Más de $5,000" },
];

const inputBase: React.CSSProperties = {
  width: "100%",
  height: "52px",
  background: "#111",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  padding: "0 18px",
  color: "#fff",
  fontSize: "1rem",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};

export default function CTASection() {
  const ref = useScrollReveal<HTMLElement>();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    countryDial: "+506",
    instagram: "",
    email: "",
    investment: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b9d78f45-aaf1-48d9-ba47-6a48837a492e",
          name: form.name,
          phone: `${form.countryDial} ${form.phone}`,
          instagram: form.instagram,
          email: form.email,
          investment: form.investment,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Hubo un error al enviar. Intenta de nuevo.");
      }
    } catch {
      setError("Hubo un error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    ...inputBase,
    borderColor:
      focused === field ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)",
  });

  return (
    <section
      ref={ref}
      id="contact"
      className="contact-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
        textAlign: "center",
      }}
    >
      <BlobBackground intensity={1.6} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "760px",
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

        {/* Contact Form */}
        {submitted ? (
          <div
            data-reveal
            data-delay="3"
            style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "3rem 2rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(74,222,128,0.12)",
                border: "1px solid rgba(74,222,128,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
                fontSize: "1.5rem",
              }}
            >
              ✓
            </div>
            <p
              style={{
                color: "#fff",
                fontSize: "1.15rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              ¡Solicitud enviada!
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.95rem" }}>
              Te contactaremos pronto para agendar tu llamada diagnóstico.
            </p>
          </div>
        ) : (
          <form
            data-reveal
            data-delay="3"
            onSubmit={handleSubmit}
            className="contact-form-card"
            style={{
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              marginBottom: "3rem",
              textAlign: "left",
            }}
          >
            {/* Name + Phone */}
            <div
              style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}
              className="contact-grid-2"
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("name")}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Teléfono
                </label>
                <div
                  style={{
                    display: "flex",
                    height: "52px",
                    background: "#111",
                    border: `1px solid ${focused === "phone" ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.1)"}`,
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                  }}
                >
                  <select
                    value={form.countryDial}
                    onChange={(e) => handleChange("countryDial", e.target.value)}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    style={{
                      height: "100%",
                      background: "transparent",
                      border: "none",
                      borderRight: "1px solid rgba(255,255,255,0.08)",
                      padding: "0 10px 0 14px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      outline: "none",
                      cursor: "pointer",
                      flexShrink: 0,
                      appearance: "none",
                      WebkitAppearance: "none",
                    }}
                  >
                    {countryCodes.map(({ code, dial, flag }) => (
                      <option
                        key={code}
                        value={dial}
                        style={{ background: "#111", color: "#fff" }}
                      >
                        {flag} {dial}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="0000000"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    style={{
                      flex: 1,
                      height: "100%",
                      background: "transparent",
                      border: "none",
                      padding: "0 18px",
                      color: "#fff",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                      outline: "none",
                      minWidth: 0,
                    }}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Instagram + Email */}
            <div
              style={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}
              className="contact-grid-2"
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Instagram
                </label>
                <input
                  type="text"
                  placeholder="@tuusuario"
                  value={form.instagram}
                  onChange={(e) => handleChange("instagram", e.target.value)}
                  onFocus={() => setFocused("instagram")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("instagram")}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("email")}
                  required
                />
              </div>
            </div>

            {/* Investment Range */}
            <div style={{ marginBottom: "2rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Presupuesto de inversión
              </label>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.625rem",
                }}
              >
                {investmentRanges.map(({ value, label }) => {
                  const isSelected = form.investment === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleChange("investment", value)}
                      style={{
                        background: isSelected
                          ? "rgba(255,255,255,0.08)"
                          : "transparent",
                        border: `1px solid ${
                          isSelected
                            ? "rgba(255,255,255,0.35)"
                            : "rgba(255,255,255,0.1)"
                        }`,
                        borderRadius: "999px",
                        padding: "8px 18px",
                        color: isSelected
                          ? "#fff"
                          : "rgba(255,255,255,0.45)",
                        fontSize: "0.875rem",
                        fontFamily: "inherit",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error */}
            {error && (
              <p
                style={{
                  color: "#f87171",
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="btn-metallic"
              disabled={loading}
              style={{
                width: "100%",
                justifyContent: "center",
                opacity: loading ? 0.6 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        )}

        {/* OR divider */}
        {!submitted && (
          <div
            data-reveal
            data-delay="4"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <span
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              o
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.08)",
              }}
            />
          </div>
        )}

        {/* Book a call CTA */}
        {!submitted && (
          <div data-reveal data-delay="5" style={{ marginBottom: "3rem" }}>
            <button className="btn-metallic lg">
              Reservar una llamada gratuita
            </button>
          </div>
        )}

        {/* Social links */}
        <div
          data-reveal
          data-delay="6"
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
