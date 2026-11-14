/**
 * Builds a WhatsApp link that opens a chat with the message already typed.
 * The number comes only from the Vercel setting NEXT_PUBLIC_WHATSAPP_NUMBER, never from git.
 * With no number, wa.me/?text= opens WhatsApp's own contact chooser instead of a broken link.
 */
export function waLink(piece?: string, number: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""): string {
  const digits = number.replace(/\D/g, "");
  const text = piece
    ? `Hola, me interesa ${piece}. ¿Qué tonos tiene disponibles?`
    : "Hola, quisiera información sobre sus carteras.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
