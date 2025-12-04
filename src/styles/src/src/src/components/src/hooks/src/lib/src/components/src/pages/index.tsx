import React from "react";
import { Link } from "react-router-dom";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          marginBottom: 36,
        }}
      >
        <div>
          <h1 style={{ fontSize: 32, margin: "0 0 8px 0" }}>
            Ella Millonaria
          </h1>
          <p style={{ color: "#444", margin: 0 }}>
            Transforma cualquier idea en videos de impacto usando IA.
          </p>
        </div>
        <div>
          <Link
            to="/curso-video-ia"
            style={{
              padding: "10px 16px",
              background: "#9333ea",
              color: "#fff",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 500,
              display: "inline-block",
            }}
          >
            Ir al Curso
          </Link>
        </div>
      </header>

      <main>
        <Benefits />
      </main>
    </div>
  );
}
