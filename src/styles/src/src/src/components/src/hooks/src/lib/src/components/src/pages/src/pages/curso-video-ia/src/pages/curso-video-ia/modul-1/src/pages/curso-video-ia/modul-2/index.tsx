import React from "react";
import { Link } from "react-router-dom";

export default function Modul2() {
  const lessons = [
    { id: "lesson-1", title: "Lección 1 — Prompts avanzados" },
    { id: "lesson-2", title: "Lección 2 — Optimización de resultados" },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Módulo 2 — Prompt Avanzado</h1>
      <p style={{ color: "#555", marginBottom: 12 }}>
        En este módulo aprenderás técnicas avanzadas de prompt engineering para
        obtener mejores resultados con IA.
      </p>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {lessons.map((l) => (
          <li key={l.id} style={{ marginBottom: 10 }}>
            <Link
              to={`/curso-video-ia/modul-2/${l.id}`}
              style={{
                textDecoration: "none",
                color: "#111",
                padding: 12,
                display: "block",
                border: "1px solid #eee",
                borderRadius: 8,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#9333ea";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#f9f3ff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#eee";
                (e.currentTarget as HTMLElement).style.backgroundColor = "#fff";
              }}
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
