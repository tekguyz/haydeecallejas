import Image from "next/image";
import { InstagramIcon, PhoneIcon, MailIcon } from "@/components/Icons";
import { siteCopy } from "@/lib/siteCopy";

export function Footer() {
  return (
    <footer className="w-full bg-surface-dark">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-4 px-4 py-12 text-center sm:px-6">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-sm">
          <Image
            src="/images/logo-dark-bg.jpg"
            alt={siteCopy.footer.brandName}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <p className="text-body-md text-on-dark">{siteCopy.footer.brandName}</p>
        <div className="flex flex-col items-center gap-2 text-caption text-on-dark/80">
          <a
            href="https://instagram.com/haydeecallejas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-on-dark"
          >
            <InstagramIcon className="h-4 w-4" />
            {siteCopy.footer.instagramHandle}
          </a>
          <a href="tel:+50589000408" className="flex items-center gap-1.5 transition-colors hover:text-on-dark">
            <PhoneIcon className="h-4 w-4" />
            {siteCopy.footer.phoneDisplay}
          </a>
          <a
            href="mailto:hc@haydeecallejas.net"
            className="flex items-center gap-1.5 transition-colors hover:text-on-dark"
          >
            <MailIcon className="h-4 w-4" />
            {siteCopy.footer.emailDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
