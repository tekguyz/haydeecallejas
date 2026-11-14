import Image from "next/image";
import type { Collection, Piece } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Pieces({
  collections,
  pieces,
  active,
  onPick,
}: {
  collections: Collection[];
  pieces: Piece[];
  active: string;
  onPick: (id: string) => void;
}) {
  const shown = active === "all" ? pieces : pieces.filter((p) => p.collection === active);
  const tabs = [{ id: "all", name: "Todas" }, ...collections];
  return (
    <section className="pieces" id="piezas" aria-labelledby="piezas-titulo">
      <div className="wrap">
        <div className="intro">
          <h2 id="piezas-titulo">Las piezas</h2>
          <p>¿Le gusta una? Tóquela y le escribimos por WhatsApp con los tonos que hay y cuándo está lista.</p>
        </div>
        <div className="tabs" data-screen-ok="scroll-inside: tab row scrolls sideways on phones" role="group" aria-label="Filtrar por colección">
          {tabs.map((t) => (
            <button key={t.id} type="button" aria-pressed={active === t.id} onClick={() => onPick(t.id)}>
              {t.name}
            </button>
          ))}
        </div>
        <ul className="grid">
          {shown.map((p) => (
            <li className="piece" key={p.name}>
              <div className="ph">
                <Image src={`/photos/${p.photo}`} alt={p.name} fill sizes="(max-width: 960px) 50vw, 25vw" />
              </div>
              <h3>{p.name}</h3>
              <p className="sub">{p.note}</p>
              <a className="ask" href={waLink(p.name)} aria-label={`Pedir por WhatsApp: ${p.name}`}>
                <WhatsAppIcon />
                Pedir por WhatsApp
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
