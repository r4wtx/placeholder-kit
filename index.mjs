// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var IMAGE_ICON_PATH = "M5.03226 0C2.25301 0 0 2.25301 0 5.03226V18.9677C0 19.9607 0.287566 20.8863 0.783964 21.6663L9.61127 13.3517C10.953 12.0879 13.047 12.0879 14.3887 13.3517L23.2159 21.6664C23.7125 20.8865 24 19.9607 24 18.9677V5.03226C24 2.25301 21.7469 0 18.9677 0H5.03226ZM16.6452 9.29032C15.5762 9.29032 14.7097 8.42378 14.7097 7.35484C14.7097 6.28589 15.5762 5.41935 16.6452 5.41935C17.7142 5.41935 18.5806 6.28589 18.5806 7.35484C18.5806 8.42378 17.7142 9.29032 16.6452 9.29032ZM5.03226 24C4.08818 24 3.20482 23.74 2.44987 23.2877L11.2037 15.0424C11.651 14.6211 12.349 14.6211 12.7962 15.0424L21.55 23.2879C20.795 23.74 19.9118 24 18.9677 24H5.03226Z";
function parseHex(color) {
  const hex = color.replace("#", "");
  if (hex.length === 3) {
    return [
      parseInt(hex[0] + hex[0], 16),
      parseInt(hex[1] + hex[1], 16),
      parseInt(hex[2] + hex[2], 16)
    ];
  }
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16)
  ];
}
function luminance(r, g, b) {
  const f = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function contrastColor(bg, opacity) {
  const [r, g, b] = parseHex(bg);
  return luminance(r, g, b) > 0.35 ? `rgba(0,0,0,${opacity})` : `rgba(255,255,255,${opacity})`;
}
function parseSize(size) {
  if (typeof size === "number") return { w: size, h: size };
  const match = size.match(/^(\d+)\s*[x×X]\s*(\d+)$/);
  if (match) return { w: parseInt(match[1]), h: parseInt(match[2]) };
  const n = parseInt(size);
  if (!isNaN(n)) return { w: n, h: n };
  return { w: 300, h: 300 };
}
function buildSvg(w, h, bg, opts = {}) {
  var _a;
  const { radius = 0, iconOpacity = 0.35, textOpacity = 0.5, fontSize } = opts;
  const minDim = Math.min(w, h);
  const iconSize = Math.max(16, minDim * 0.25);
  const fs = fontSize != null ? fontSize : Math.max(10, minDim * 0.065);
  const displayText = (_a = opts.text) != null ? _a : `${w}\xD7${h}`;
  const ic = contrastColor(bg, iconOpacity);
  const tc = contrastColor(bg, textOpacity);
  const iconY = (h - iconSize) / 2 - fs * 0.6;
  const textY = (h + iconSize) / 2 + fs * 0.7;
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`,
    `<rect width="${w}" height="${h}" fill="${bg}" rx="${radius}" ry="${radius}"/>`,
    `<g transform="translate(${(w - iconSize) / 2}, ${iconY})">`,
    `<g transform="scale(${iconSize / 24})">`,
    `<path d="${IMAGE_ICON_PATH}" fill="${ic}" fill-rule="evenodd"/>`,
    `</g></g>`,
    `<text x="${w / 2}" y="${textY}" text-anchor="middle" dominant-baseline="central" fill="${tc}" font-family="system-ui,-apple-system,sans-serif" font-size="${fs}" font-weight="600" letter-spacing="0.02em">${displayText}</text>`,
    `</svg>`
  ].join("");
}
function placeholder(size, bg, options) {
  const { w, h } = parseSize(size);
  const svg = buildSvg(w, h, bg != null ? bg : "#e2e8f0", options);
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
function Placeholder({
  size,
  width,
  height,
  bg,
  backgroundColor,
  iconOpacity = 0.35,
  textOpacity = 0.5,
  text,
  showDimensions = false,
  fontSize,
  radius,
  borderRadius,
  className,
  style
}) {
  var _a, _b, _c, _d;
  const parsed = size != null ? parseSize(size) : null;
  const w = (_a = width != null ? width : parsed == null ? void 0 : parsed.w) != null ? _a : 300;
  const h = (_b = height != null ? height : parsed == null ? void 0 : parsed.h) != null ? _b : w;
  const bgColor = (_c = bg != null ? bg : backgroundColor) != null ? _c : "#e2e8f0";
  const rad = (_d = radius != null ? radius : borderRadius) != null ? _d : 0;
  const hasSizeShorthand = size != null;
  const minDim = Math.min(w, h);
  const iconSize = Math.max(16, minDim * 0.25);
  const computedFontSize = fontSize != null ? fontSize : Math.max(10, minDim * 0.065);
  const displayText = text != null ? text : showDimensions || hasSizeShorthand ? `${w}\xD7${h}` : void 0;
  const iconColor = contrastColor(bgColor, iconOpacity);
  const textColor = contrastColor(bgColor, textOpacity);
  const iconY = displayText ? (h - iconSize) / 2 - computedFontSize * 0.6 : (h - iconSize) / 2;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: w,
      height: h,
      viewBox: `0 0 ${w} ${h}`,
      role: "img",
      "aria-label": displayText ? `Placeholder ${displayText}` : "Placeholder image",
      className,
      style,
      children: [
        /* @__PURE__ */ jsx("rect", { width: w, height: h, fill: bgColor, rx: rad, ry: rad }),
        /* @__PURE__ */ jsx("g", { transform: `translate(${(w - iconSize) / 2}, ${iconY})`, children: /* @__PURE__ */ jsx("g", { transform: `scale(${iconSize / 24})`, children: /* @__PURE__ */ jsx("path", { d: IMAGE_ICON_PATH, fill: iconColor, fillRule: "evenodd" }) }) }),
        displayText && /* @__PURE__ */ jsx(
          "text",
          {
            x: w / 2,
            y: (h + iconSize) / 2 + computedFontSize * 0.7,
            textAnchor: "middle",
            dominantBaseline: "central",
            fill: textColor,
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: computedFontSize,
            fontWeight: 600,
            letterSpacing: "0.02em",
            children: displayText
          }
        )
      ]
    }
  );
}
var index_default = Placeholder;
export {
  Placeholder,
  index_default as default,
  placeholder
};
