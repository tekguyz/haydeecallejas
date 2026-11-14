"use client";

import { useState } from "react";
import { PIECES, visibleCollections } from "@/lib/site";
import { Collections } from "./Collections";
import { Pieces } from "./Pieces";

const collections = visibleCollections();

/** Collections and pieces share one filter: picking a collection shows its pieces. */
export function Catalog() {
  const [active, setActive] = useState("all");
  return (
    <>
      <Collections collections={collections} onPick={setActive} />
      <Pieces collections={collections} pieces={PIECES} active={active} onPick={setActive} />
    </>
  );
}
