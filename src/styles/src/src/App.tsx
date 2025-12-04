import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import CursoVideoIA from "./pages/curso-video-ia";
import Modul1 from "./pages/curso-video-ia/modul-1";
import Modul2 from "./pages/curso-video-ia/modul-2";
import LessonGeneric from "./pages/lesson-generic";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso-video-ia" element={<CursoVideoIA />} />
        <Route path="/curso-video-ia/modul-1" element={<Modul1 />} />
        <Route path="/curso-video-ia/modul-2" element={<Modul2 />} />
        {/* Dynamic lesson route: /curso-video-ia/:module/:lesson */}
        <Route path="/curso-video-ia/:module/:lesson" element={<LessonGeneric />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
