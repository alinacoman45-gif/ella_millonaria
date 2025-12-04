import React from "react";
import { useParams, Link } from "react-router-dom";

export default function LessonGeneric() {
  const { module, lesson } = useParams<{ module?: string; lesson?: string }>();

  const prettify = (s?: string) =>
    s
      ? s
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
      : "";

  const lessondData: Record
    string,
    Record<string, { title: string; description: string; videoId?: string }>
  > = {
    "modul-1": {
      "lesson-1": {
        title: "Lección 1 — Introducción y configuración",
        description:
          "En esta lección vas a aprender a configurar tu asistente IA y preparar el entorno para crear videos profesionales.",
        videoId: "XXXXXXXX",
      },
      "lesson-2": {
        title: "Lección 2 — Genera tu imagen base",
        description:
          "Aprende a generar imágenes de alta calidad usando Leonardo AI y otras herramientas gratuitas.",
        videoId: "YYYYYYYY",
      },
    },
    "modul-2": {
      "lesson-1": {
        title: "Lección 1 — Prompts avanzados",
        description:
          "Domina el arte de escribir prompts que generan resultados extraordinarios con herramientas IA.",
        videoId: "ZZZZZZZZ",
      },
      "lesson-2": {
        title: "Lección 2 — Optimización de resultados",
        description:
          "Técnicas para optimizar y perfeccionar los videos generados con IA.",
        videoId: "WWWWWWWW",
      },
    },
  };

  const lessonContent =
    lessondData[module || ""]?.[lesson || ""] || null;

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <Link
        to={`/curso-video-ia/${module}`}
        style={{
          color: "#9333ea",
          textDecoration: "none",
          fontSize: 14,
          marginBottom: 16,
          display: "inline-block",
        }}
      >
        ← Volver al módulo
      </Link>

      <h1 style={{ marginBottom: 8 }}>
        {lessonContent?.title || `${prettify(module)} — ${prettify(lesson)}`}
      </h1>

      <p style={{ color: "#555", marginBottom: 20 }}>
        {lessonContent?.description ||
          "Aquí va el contenido de la lección. Puedes incrustar video, texto, links y recursos descargables."}
      </p>

      {lessonContent?.videoId && lessonContent.videoId !== "XXXXXXXX" ? (
        <div style={{ marginTop: 20 }}>
          <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/${lessonContent.videoId}`}
            title="Video lección"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 8 }}
          />
        </div>
      ) : (
        <div
          style={{
            marginTop: 20,
            padding: 40,
            backgroundColor: "#f3f0ff",
            borderRadius: 8,
            textAlign: "center",
            color: "#666",
          }}
        >
          <p>El video de esta lección aún no está disponible.</p>
          <p style={{ fontSize: 12, color: "#999" }}>
            Reemplaza el videoId con el enlace real de YouTube.
          </p>
        </div>
      )}

      <div style={{ marginTop: 40, padding: 20, backgroundColor: "#f9f3ff", borderRadius: 8 }}>
        <h3 style={{ marginTop: 0 }}>📋 Recursos de esta lección</h3>
        <ul style={{ color: "#555" }}>
          <li>Guía PDF descargable (próximamente)</li>
          <li>Template de Canva (próximamente)</li>
          <li>Checklist de pasos (próximamente)</li>
        </ul>
      </div>
    </div>
  );
}
