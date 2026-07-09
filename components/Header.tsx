import Image from "next/image";
import { InstagramIcon } from "@/components/Icons";
import { siteCopy } from "@/lib/siteCopy";

export function Header() {
  return (
    <header className="w-full border-b border-hairline bg-canvas">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-4 py-3 sm:px-6">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-sm">
          <Image
            src="/images/logo-light-bg.jpg"
            alt={siteCopy.footer.brandName}
            fill
            sizes="80px"
            className="object-cover"
            priority
          />
        </div>
        <a
          href="https://instagram.com/haydeecallejas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Haydee Callejas en Instagram"
          className="text-muted transition-colors hover:text-body"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
