import Image from "next/image";
import { BRAND } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Image className="logo" src="/logo-cover-white.png" alt="Haydee Callejas" width={640} height={406} />
        <ul>
          <li>
            <a href={BRAND.instagram}>Instagram</a>
          </li>
          <li>
            <a href={BRAND.facebook}>Facebook</a>
          </li>
          <li>
            <a href={`mailto:${BRAND.email}`}>Correo</a>
          </li>
        </ul>
        <small>Carteras de autor, hechas a mano en Nicaragua.</small>
      </div>
    </footer>
  );
}
