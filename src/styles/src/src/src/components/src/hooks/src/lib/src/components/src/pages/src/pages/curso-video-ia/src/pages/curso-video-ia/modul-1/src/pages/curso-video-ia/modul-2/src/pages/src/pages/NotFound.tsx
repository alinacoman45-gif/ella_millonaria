import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        padding: 40,
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: 28, marginBottom: 8 }}>Página no encontrada</h2>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Parece que la ruta que buscas no existe. Vuelve al inicio y continúa
        explorando.
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 16px",
          background: "#9333ea",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          display: "inline-block",
          fontWeight: 500,
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
