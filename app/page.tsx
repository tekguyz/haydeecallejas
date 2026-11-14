import Image from "next/image";
import { BRAND, SOON } from "@/lib/site";

/** Home while the new site waits for Haydee's go: a quiet "coming soon". The full site lives at /preview (not indexed). */
export default function Home() {
  return (
    <main className="soon">
      <Image className="soon-photo" src={`/photos/${SOON.photo}`} alt="" fill preload fetchPriority="high" sizes="100vw" />
      <div className="soon-copy">
        <Image className="soon-logo" src="/logo-cover-white.png" alt="Haydee Callejas" width={189} height={120} loading="eager" />
        <h1>{SOON.title}</h1>
        <p>{SOON.line}</p>
        <ul aria-label="Redes de Haydee Callejas">
          <li>
            <a href={BRAND.instagram}>Instagram</a>
          </li>
          <li>
            <a href={BRAND.facebook}>Facebook</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
