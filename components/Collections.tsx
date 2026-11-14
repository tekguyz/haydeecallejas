import Image from "next/image";
import type { Collection } from "@/lib/site";

export function Collections({ collections, onPick }: { collections: Collection[]; onPick: (id: string) => void }) {
  return (
    <section id="colecciones" aria-labelledby="colecciones-titulo">
      <div className="wrap">
        <div className="intro">
          <h2 id="colecciones-titulo">Colecciones</h2>
          <p>Cada colección nace en su taller y se hace en series pequeñas. Elija una y vea sus piezas.</p>
        </div>
        <ul className="colls" data-screen-ok="scroll-inside: collections carousel on phones">
          {collections.map((c) => (
            <li key={c.id}>
              <a className="coll" href="#piezas" onClick={() => onPick(c.id)}>
                <span className="ph">
                  <Image src={`/photos/${c.photo}`} alt="" fill sizes="(max-width: 960px) 68vw, 20vw" />
                </span>
                <h3>{c.name}</h3>
                <p>{c.line}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
