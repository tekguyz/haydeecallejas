import { siteCopy } from "@/lib/siteCopy";

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero-heart-web.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-4 py-16 text-center sm:px-6">
        <p className="text-display-md font-semibold tracking-[0.04em] text-on-dark uppercase">
          {siteCopy.hero.eyebrow}
        </p>
        <h1 className="font-serif text-display-lg font-medium text-on-dark">
          {siteCopy.hero.headline}
        </h1>
        <p className="max-w-sm text-body-md text-on-dark/90">
          {siteCopy.hero.subhead}
        </p>
        <a
          href="https://instagram.com/haydeecallejas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-caption text-on-dark/70 underline underline-offset-2 transition-colors hover:text-on-dark"
        >
          {siteCopy.hero.trustLine}
        </a>
      </div>
    </section>
  );
}
