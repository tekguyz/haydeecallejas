import { BRAND, PLACES, SHIPPING, STEPS } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Order() {
  return (
    <section className="get" id="pedir" aria-labelledby="pedir-titulo">
      <div className="wrap cols">
        <div>
          <h2 id="pedir-titulo">Cómo pedir la suya</h2>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <a className="wa" href={waLink()}>
            <WhatsAppIcon />
            Escribir por WhatsApp
          </a>
          <p className="ship">
            {SHIPPING} También por correo: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </p>
        </div>
        <div>
          <h3>Dónde verlas</h3>
          <ul className="places">
            {PLACES.map((p) => (
              <li key={p.name}>
                <b>{p.name}</b>
                <span>{p.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
