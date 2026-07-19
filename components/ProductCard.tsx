"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { WhatsAppIcon, XIcon, ZoomIcon } from "@/components/Icons";
import { siteCopy } from "@/lib/siteCopy";

const WHATSAPP_NUMBER = "50589033134";
const MAX_VISIBLE_SWATCHES = 4;

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const defaultIndex = Math.max(
    0,
    product.variants.findIndex((v) => v.colorLabel === product.defaultColorLabel),
  );
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [showAllSwatches, setShowAllSwatches] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const selectedVariant = product.variants[selectedIndex];

  useEffect(() => {
    if (!isImageOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsImageOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isImageOpen]);

  const hasSwatchOverflow = product.variants.length > MAX_VISIBLE_SWATCHES;
  const visibleSwatchCount = Math.min(product.variants.length, MAX_VISIBLE_SWATCHES);
  const hiddenSwatchCount = product.variants.length - visibleSwatchCount;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, me interesa ${product.name} en ${selectedVariant.colorLabel} ($${product.price.toFixed(2)})`,
  )}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-hairline bg-canvas">
      <button
        type="button"
        onClick={() => setIsImageOpen(true)}
        aria-label={`Ampliar imagen de ${product.name}`}
        className="relative aspect-square w-full"
      >
        <Image
          src={selectedVariant.imageUrl}
          alt={`${product.name} — ${selectedVariant.colorLabel}`}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
          priority={priority}
        />
        <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/50 text-white">
          <ZoomIcon className="h-4 w-4" />
        </span>
      </button>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsImageOpen(false);
            }}
            aria-label="Cerrar"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <XIcon className="h-5 w-5" />
          </button>
          <div
            className="relative h-full max-h-[80vh] w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedVariant.imageUrl}
              alt={`${product.name} — ${selectedVariant.colorLabel}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h2 className="line-clamp-2 h-[2lh] text-title-md font-semibold text-ink">
          {product.name}
        </h2>
        <p className="line-clamp-4 h-[4lh] text-body-md text-body">
          {product.description}
        </p>
        <p className="text-xl font-bold text-ink">
          ${product.price.toFixed(2)}
        </p>

        <div className="flex h-[152px] flex-col gap-2 pt-1">
          <div className="flex flex-wrap content-start gap-2">
            {product.variants.map((variant, index) => {
              if (!showAllSwatches && index >= visibleSwatchCount) return null;
              return (
                <button
                  key={variant.colorLabel}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={variant.colorLabel}
                  aria-pressed={index === selectedIndex}
                  className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-full border ${
                    index === selectedIndex
                      ? "border-2 border-ink shadow-subtle"
                      : "border-hairline"
                  }`}
                >
                  <Image
                    src={variant.imageUrl}
                    alt={variant.colorLabel}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </button>
              );
            })}
            {hasSwatchOverflow && !showAllSwatches && (
              <button
                type="button"
                onClick={() => setShowAllSwatches(true)}
                aria-label={`Ver ${hiddenSwatchCount} colores más`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline bg-canvas text-caption font-medium text-muted"
              >
                +{hiddenSwatchCount}
              </button>
            )}
          </div>

          <p className="text-caption font-medium text-muted">
            {selectedVariant.colorLabel}
          </p>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-1.5 whitespace-nowrap rounded-sm bg-ink px-3 py-2 text-button font-semibold text-white transition-colors active:bg-ink/85"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0 text-whatsapp-green" />
          {siteCopy.cta.buttonText}
        </a>
      </div>
    </article>
  );
}
