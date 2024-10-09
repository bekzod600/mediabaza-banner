function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function interpolateColor(color1, color2, factor) {
  if (arguments.length < 3) {
    factor = 0.5;
  }
  var result = color1.slice();
  for (var i = 0; i < 3; i++) {
    // Ignore the alpha channel here
    result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
  }
  return result;
}
function hexToRgb(hex) {
  var bigint = parseInt(hex.slice(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return [r, g, b];
}
function rgbaToHex(rgba) {
  return "#" + rgba.map(function (x, i) {
    var hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}
export function getGradientColor(startColor, middleColor, endColor, percent, opacity) {
  var start, end, factor;
  if (percent < 50) {
    start = hexToRgb(startColor);
    end = hexToRgb(middleColor);
    factor = percent / 50;
  } else {
    start = hexToRgb(middleColor);
    end = hexToRgb(endColor);
    factor = (percent - 50) / 50;
  }
  var resultColor = interpolateColor(start, end, factor);
  var alpha = Math.round(opacity * 255); // Convert opacity (0-1) to alpha (0-255)
  return rgbaToHex([].concat(_toConsumableArray(resultColor), [alpha]));
}
export var curGrad = function curGrad(foiz, opacity) {
  return getGradientColor("#F14444", "#16B76A", "#F14444", foiz, opacity);
};
export var curGrad2 = function curGrad2(foiz, opacity) {
  return getGradientColor("#16B76A", "#eab308", "#F14444", foiz, opacity);
};
export var curGrad3 = function curGrad3(foiz, opacity) {
  return getGradientColor("#16B76A", "#eab308", "#F14444", foiz, opacity);
};

// Misol uchun:
// const startColor = "#16B76A"; // 0%
// const middleColor = "#D0A717"; // 50%
// const endColor = "#F14444"; // 100%
// const percent = 25; // Foiz kiriting
// const opacity = 0.5; // 0 dan 1 gacha bo'lgan shaffoflik darajasi

// const gradientColor = getGradientColor(startColor, middleColor, endColor, percent, opacity);
// console.log(gradientColor); // Kiritilgan foizga mos rangni qaytaradi