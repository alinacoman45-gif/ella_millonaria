import React from "react";
import { Link } from "react-router-dom";

export default function Modul1() {
  const lessons = [
    { id: "lesson-1", title: "Lección 1 — Introducción y configuración" },
    { id: "lesson-2", title: "Lección 2 — Genera tu imagen base" },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Módulo 1 — Fundamentos</h1>
      <p style={{ color: "#555", marginBottom: 12 }}>
        Aquí están las lecciones del módulo 1. Haz clic en cada una para acceder
        al contenido completo.
      </p>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {lessons.map((l) => (
          <li key={l.id} style={{ marginBottom: 10 }}>
            <Link
              to={`/curso-video-ia/modul-1/${l.id}`}
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
