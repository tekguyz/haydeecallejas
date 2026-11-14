"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Phones only (CSS). Hidden while the pieces grid is on screen, where every piece has its own
 * WhatsApp link, so the round button never covers a piece's own button.
 */
export function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const grid = document.getElementById("piezas");
    if (!grid) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting));
    io.observe(grid);
    return () => io.disconnect();
  }, []);
  return (
    <a
      className="float"
      href={waLink()}
      aria-label="Escribir por WhatsApp"
      data-hidden={hidden}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <WhatsAppIcon />
    </a>
  );
}
