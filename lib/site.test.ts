import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import * as site from "./site";
import { COLLECTIONS, PIECES, STRIP, HERO, DESIGNER, visibleCollections } from "./site";

const COLOUR =
  /\b(rojo|roja|negro|negra|blanco|blanca|azul|verde|amarillo|amarilla|rosado|rosada|morado|morada|naranja|café|beige|dorado|dorada|plateado|plateada|gris|fucsia|celeste)\b/i;

function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

const all = strings(Object.values(site).filter((v) => typeof v !== "function"));

describe("site data", () => {
  it("has content", () => {
    expect(PIECES.length).toBeGreaterThan(0);
    expect(all.length).toBeGreaterThan(50);
  });
  it("every piece belongs to a known collection", () => {
    const ids = new Set(COLLECTIONS.map((c) => c.id));
    for (const p of PIECES) expect(ids, p.name).toContain(p.collection);
  });
  it("every photo file exists", () => {
    const photos = [...COLLECTIONS, ...PIECES, ...STRIP, HERO, DESIGNER].map((x) => x.photo);
    for (const f of photos) expect(existsSync(join("public", "photos", f)), f).toBe(true);
  });
  it("never names a colour", () => {
    expect(all.filter((s) => COLOUR.test(s))).toEqual([]);
  });
  it("has no price and no phone number", () => {
    expect(all.filter((s) => s.includes("$") || /\d{7,}/.test(s))).toEqual([]);
  });
  it("has no exclamation marks", () => {
    expect(all.filter((s) => /[!¡]/.test(s))).toEqual([]);
  });
});

describe("visibleCollections", () => {
  it("drops a collection with no pieces", () => {
    const extra = { id: "vacia", name: "Vacía", line: "Sin piezas.", photo: "gigi-mint.jpg" };
    const shown = visibleCollections([...COLLECTIONS, extra], PIECES).map((c) => c.id);
    expect(shown).not.toContain("vacia");
    expect(shown).toEqual(COLLECTIONS.map((c) => c.id));
  });
});
