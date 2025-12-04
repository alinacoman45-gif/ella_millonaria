import React from "react";
import { Link } from "react-router-dom";

export default function CursoVideoIA() {
  const modules = [
    { slug: "modul-1", title: "Módulo 1 — Fundamentos" },
    { slug: "modul-2", title: "Módulo 2 — Prompt Avanzado" },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26, marginBottom: 8 }}>
        Curso: De la Idea al Video de Impacto
      </h1>
      <p style={{ color: "#444", marginBottom: 18 }}>
        Aprende nuestra metodología en 4 pasos y crea videos profesionales con
        herramientas IA gratuitas.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {modules.map((m) => (
          <Link
            key={m.slug}
            to={`/curso-video-ia/${m.slug}`}
            style={{
              padding: 16,
              border: "1px solid #e6e6e6",
              borderRadius: 8,
              textDecoration: "none",
              color: "#111",
              background: "#fff",
              display: "block",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#9333ea";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 12px rgba(147, 51, 234, 0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#e6e6e6";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <h3 style={{ margin: 0, fontWeight: 600 }}>{m.title}</h3>
            <p style={{ margin: "6px 0 0", color: "#666", fontSize: 14 }}>
              Ver lecciones del módulo
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
