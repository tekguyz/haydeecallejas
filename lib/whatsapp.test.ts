import { describe, it, expect } from "vitest";
import { waLink } from "./whatsapp";

// 50588880000 is a made-up fixture, not her number.
describe("waLink", () => {
  it("names the piece", () => {
    expect(waLink("Florence en pitón", "50588880000")).toBe(
      "https://wa.me/50588880000?text=" +
        encodeURIComponent("Hola, me interesa Florence en pitón. ¿Qué tonos tiene disponibles?"),
    );
  });
  it("general message with no piece", () => {
    expect(waLink(undefined, "50588880000")).toBe(
      "https://wa.me/50588880000?text=" + encodeURIComponent("Hola, quisiera información sobre sus carteras."),
    );
  });
  it("keeps digits only", () => {
    expect(waLink(undefined, "+505 8888-0000")).toMatch(/^https:\/\/wa\.me\/50588880000\?/);
  });
  it("falls back to the chooser with no number", () => {
    expect(waLink("Gigi", "")).toMatch(/^https:\/\/wa\.me\/\?text=/);
  });
  it("keeps accents and «» intact", () => {
    const url = new URL(waLink("Tote «Sagrado Corazón»", "50588880000"));
    expect(url.searchParams.get("text")).toBe("Hola, me interesa Tote «Sagrado Corazón». ¿Qué tonos tiene disponibles?");
  });
});
