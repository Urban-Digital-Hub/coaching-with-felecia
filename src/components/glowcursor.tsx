
import { useEffect } from "react";
import '../assets/css/glowcursor.css'

export default function GlowCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "glow-cursor";

    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
}




