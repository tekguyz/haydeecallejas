import Image from "next/image";
import { DESIGNER, STORY, STRIP } from "@/lib/site";

export function Designer() {
  return (
    <>
      <section className="her" id="haydee" aria-labelledby="haydee-titulo">
        <div className="cols">
          <div className="photo">
            <Image src={`/photos/${DESIGNER.photo}`} alt={DESIGNER.alt} fill sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
          <div className="text">
            <h2 id="haydee-titulo" translate="no">Haydeé Callejas</h2>
            <p className="lead">{DESIGNER.lead}</p>
            <ol className="story">
              {STORY.map((s) => (
                <li key={s.year}>
                  <span className="year">{s.year}</span>
                  <div>
                    <b>{s.title}</b>
                    <span>{s.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <div className="strip">
        {STRIP.map((s) => (
          <div className="ph" key={s.photo}>
            <Image src={`/photos/${s.photo}`} alt={s.alt} fill sizes="(max-width: 960px) 50vw, 25vw" />
          </div>
        ))}
      </div>
    </>
  );
}
