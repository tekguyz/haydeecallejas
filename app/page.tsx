import Image from "next/image";
import { BRAND, SOON } from "@/lib/site";

/** Home while the new site waits for Haydee's go: an editorial "coming soon". The full site lives at /preview (not indexed). */
export default function Home() {
  return (
    <main className="soon">
      <span className="soon-ghost" aria-hidden="true">
        {SOON.ghost}
      </span>
      <header className="soon-head">
        <Image className="soon-logo" src="/logo-cover-white.png" alt="Haydee Callejas" width={189} height={120} loading="eager" />
      </header>
      <div className="soon-copy">
        <p className="soon-kicker">{SOON.kicker}</p>
        <h1>{SOON.title}</h1>
        <p className="soon-line">{SOON.line}</p>
        <ul aria-label="Redes de Haydee Callejas">
          <li>
            <a href={BRAND.instagram}>Instagram</a>
          </li>
          <li>
            <a href={BRAND.facebook}>Facebook</a>
          </li>
        </ul>
      </div>
      <div className="soon-photo">
        <Image src={`/photos/${SOON.photo}`} alt={SOON.alt} fill preload fetchPriority="high" sizes="(max-width: 860px) 100vw, 36vw" />
      </div>
      <aside className="soon-aside">
        <p>{SOON.aside}</p>
        <div className="soon-detail">
          <Image src={`/photos/${SOON.detail.photo}`} alt={SOON.detail.alt} fill sizes="(max-width: 860px) 40vw, 14vw" />
        </div>
      </aside>
    </main>
  );
}
