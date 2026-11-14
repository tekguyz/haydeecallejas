import Image from "next/image";
import { HERO } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <div className="hero" id="inicio">
      <Image className="hero-photo" src={`/photos/${HERO.photo}`} alt={HERO.alt} fill priority sizes="100vw" />
      <div className="wrap">
        <header>
          <a href="#inicio" aria-label="Haydee Callejas, inicio">
            <Image className="logo" src="/logo-profile-white.png" alt="" width={640} height={456} priority />
          </a>
          <nav aria-label="Principal">
            <a href="#colecciones">Colecciones</a>
            <a href="#piezas">Piezas</a>
            <a href="#haydee">Haydeé</a>
            <a href="#pedir">Cómo pedir</a>
          </nav>
          <a className="wa" href={waLink()}>
            <WhatsAppIcon />
            WhatsApp
          </a>
        </header>
      </div>
      <div className="copy">
        <div className="wrap">
          <h1>{HERO.title}</h1>
          <p>{HERO.line}</p>
          <div className="row">
            <a className="wa" href={waLink()}>
              <WhatsAppIcon />
              Pedir por WhatsApp
            </a>
            <a className="link" href="#piezas">
              Ver las piezas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
