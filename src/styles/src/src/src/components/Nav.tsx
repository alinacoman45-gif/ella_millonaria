import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{ padding: 16, borderBottom: "1px solid #eee", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 12, alignItems: "center" }}>
        <Link to="/" style={{ fontWeight: 700, textDecoration: "none", color: "#111" }}>
          Ella Millonaria
        </Link>
        <Link to="/curso-video-ia" style={{ textDecoration: "none", color: "#444" }}>
          Curso Video IA
        </Link>
      </div>
    </nav>
  );
}
