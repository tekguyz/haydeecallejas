// Makes the trimmed logos, the share picture and the app icons from the source files.
// Run: node scripts/make-assets.mjs   (uses the sharp that ships with Next.js)
import sharp from "sharp";

const BLACK = { r: 0, g: 0, b: 0, alpha: 1 };

// 1. Logos: her black-on-white files (assets/) become white-on-clear, trimmed to the mark, 640 px wide.
for (const name of ["logo-cover", "logo-profile"]) {
  const alpha = await sharp(`assets/${name}-light-bg.png`).greyscale().negate().threshold(24, { grayscale: true }).toColourspace("b-w").raw().toBuffer({ resolveWithObject: true });
  const { width, height } = alpha.info;
  const white = sharp({ create: { width, height, channels: 3, background: "#fff" } });
  await white.joinChannel(alpha.data, { raw: { width, height, channels: 1 } }).png().toFile(`assets/.tmp-${name}.png`);
  await sharp(`assets/.tmp-${name}.png`).trim({ threshold: 1 }).resize({ width: 640 }).png({ compressionLevel: 9 }).toFile(`public/${name}-white.png`);
}

// 2. Share picture, 1200x630: the hero photo, darkened at the left, with the cover logo.
const logo = await sharp("public/logo-cover-white.png").resize({ height: 220 }).toBuffer();
const shade = Buffer.from(
  `<svg width="1200" height="630"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset=".6" stop-color="#000" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`,
);
await sharp("public/photos/sacred-heart-tote-pool.jpg")
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([{ input: shade }, { input: logo, left: 72, top: 205 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/og.jpg");

// 3. Icons: the monogram in white on black.
async function icon(size, out) {
  const mark = await sharp("public/logo-profile-white.png").resize({ width: Math.round(size * 0.7) }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: BLACK } })
    .composite([{ input: mark, gravity: "centre" }])
    .png()
    .toFile(out);
}
await icon(512, "app/icon.png");
await icon(180, "app/apple-icon.png");
console.log("done");
