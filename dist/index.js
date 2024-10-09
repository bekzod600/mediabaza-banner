function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import { curGrad2, curGrad, curGrad3 } from "./gradientFormatter.js";
import { getDayIcon, getNightIcon } from "./weatherIcons.js";
var currencyApi = "https://cbu.uz/ru/arkhiv-kursov-valyut/json/";
var AQIApi = "https://media.leetcode.uz/api/info/aqi/";
var newsApi = "https://www.gazeta.uz/ru/rss/";
var trafficApi = "https://media.leetcode.uz/api/info/yandex/";
var currencyWrapper = document.querySelector("#currencyWrapper");
var aqiWrapper = document.querySelector("#aqi");
var HumidityWrapper = document.querySelector("#humidity");
var trafficWrapper = document.querySelector("#traffic");
var weatherTempWrapper = document.querySelector(".right-wrapper #weatherTemp");

// =========== helpers =================================
var formatNumber = function formatNumber(number) {
  return number === null || number === void 0 ? void 0 : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// =========== html datas =================================
var currencyData = function currencyData(currencies) {
  var HTML = "";
  currencies.forEach(function (currency) {
    HTML += "<div class=\"currency-item\">\n      <div class=\"currency-table\">\n        <img \n            class=\"currency-flag\" \n            src=\"./assets/icons/image-flag-".concat(currency.Ccy, ".svg\" \n            alt=\"imageFlagUsa\" \n          />\n        <p class=\"currency-code\">USD</p>\n      </div>  \n      <div class=\"currency-info\">\n        <span class=\"currency-rate\">").concat(formatNumber(currency.Rate), "</span>\n        <p class=\"currency-sum\">So'm</p>\n      </div>\n    </div>\n    ");
  });
  return HTML;
};
var aqiData = function aqiData(aqi) {
  return "\n    <div class=\"aqi-card\">\n      <div class=\"aqi-gradient\" style=\"background-image: linear-gradient(to right, ".concat(curGrad2(aqi / 2, 1), ", ").concat(curGrad2(aqi / 2, 0.7), ")\">\n        <p class=\"aqi-value\">").concat(aqi, "</p>\n      </div>\n      <p class=\"aqi-label\">\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E <br /> \u0432\u043E\u0437\u0434\u0443\u0445\u0430</p>\n    </div>");
};
var humidityData = function humidityData(humidity) {
  return "\n    <div class=\"humidity-card\">\n      <div class=\"humidity-gradient\" style=\"background-image: linear-gradient(to right, ".concat(curGrad(humidity, 1), ", ").concat(curGrad(humidity, 0.7), ")\">\n        <p class=\"humidity-value\">").concat(humidity, "%</p>\n      </div>\n      <p class=\"humidity-label\">\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C <br /> \u0432\u043E\u0437\u0434\u0443\u0445\u0430</p>\n    </div>");
};
var trafficData = function trafficData(traffic) {
  return "\n    <div class=\"traffic-card\">\n      <div class=\"traffic-gradient\" style=\"background-image: linear-gradient(to right, ".concat(curGrad3(traffic * 10, 1), ", ").concat(curGrad3(traffic * 10, 0.7), ")\">\n        <p class=\"traffic-value\">").concat(traffic, "</p>\n      </div>\n      <p class=\"traffic-label\">\u041F\u0440\u043E\u0431\u043A\u0438 \u043D\u0430 <br /> \u0434\u043E\u0440\u043E\u0433\u0430\u0445</p>\n    </div>");
};
var temperaturaData = function temperaturaData(temp, iconUrl) {
  return "\n    <div class=\"temperature-card\">\n      <div class=\"temperature-item\">\n        <img src=\"".concat(iconUrl.dayIconUrl, "\" class=\"temperature-icon\" alt=\"day weather icon\" />\n        <span class=\"temperature-value\">+").concat(temp.dayTemp, "\xB0C</span>\n      </div>\n      <div class=\"temperature-item\">\n        <img src=\"").concat(iconUrl.nightIconUrl, "\" class=\"temperature-icon\" alt=\"night weather icon\" />\n        <span class=\"temperature-value\">+").concat(temp.nightTemp, "\xB0C</span>\n      </div>\n    </div>");
};

// ======== render data ========
var RenderData = function RenderData(data, element) {
  element.insertAdjacentHTML("afterbegin", data);
};

// ============= api ==================
var fetchNewsApi = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res, text, parser, xmlDoc, items, i, title;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(newsApi);
        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.text();
        case 5:
          text = _context.sent;
          parser = new DOMParser();
          xmlDoc = parser.parseFromString(text, "application/xml"); // Access elements within the XML
          items = xmlDoc.getElementsByTagName("item"); // Loop through the items and extract data
          for (i = 0; i < items.length; i++) {
            title = items[i].getElementsByTagName("title")[0].textContent;
            console.log("Title:", title);
          }

          // console.log(data);

          // const html = currencyData(data.slice(0, 3));
          // RenderData(html, currencyWrapper);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchNewsApi() {
    return _ref.apply(this, arguments);
  };
}();
var fetchCurrenciesApi = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var res, data, html;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(currencyApi);
        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json();
        case 5:
          data = _context2.sent;
          html = currencyData(data.slice(0, 3));
          RenderData(html, currencyWrapper);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchCurrenciesApi() {
    return _ref2.apply(this, arguments);
  };
}();
var fetchAQIApi = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var _getDayIcon, _getNightIcon, res, data, aqi, dayTemp, dayIcon, nightTemp, nightIcon, humidity, dayIconUrl, nightIconUrl, html3;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch(AQIApi);
        case 3:
          res = _context3.sent;
          _context3.next = 6;
          return res.json();
        case 6:
          data = _context3.sent;
          aqi = data.aqi.data.current.pollution.aqius;
          dayTemp = data.weather.DailyForecasts[0].Temperature.Maximum.Value;
          dayIcon = data.weather.DailyForecasts[0].Day.IconPhrase;
          nightTemp = data.weather.DailyForecasts[0].Temperature.Minimum.Value;
          nightIcon = data.weather.DailyForecasts[0].Night.IconPhrase;
          humidity = data.weather.DailyForecasts[0].Day.RelativeHumidity.Average; // const html = aqiData(aqi);
          // RenderData(html, aqiWrapper);
          // const html2 = humidityData(humidity);
          // RenderData(html2, HumidityWrapper);
          dayIconUrl = (_getDayIcon = getDayIcon(dayIcon)) === null || _getDayIcon === void 0 ? void 0 : _getDayIcon.icon;
          nightIconUrl = (_getNightIcon = getNightIcon(nightIcon)) === null || _getNightIcon === void 0 ? void 0 : _getNightIcon.icon;
          html3 = temperaturaData({
            dayTemp: dayTemp,
            nightTemp: nightTemp
          }, {
            dayIconUrl: dayIconUrl,
            nightIconUrl: nightIconUrl
          }); // console.log(html3);
          RenderData(html3, weatherTempWrapper);
          _context3.next = 22;
          break;
        case 19:
          _context3.prev = 19;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 19]]);
  }));
  return function fetchAQIApi() {
    return _ref3.apply(this, arguments);
  };
}();

// const fetchTrafficApi = async () => {
//   try {
//     const res = await fetch(trafficApi);
//     const data = await res.json();
//     const probka = data.probka;
//     const html = trafficData(probka);
//     RenderData(html, trafficWrapper);
//   } catch (error) {
//     console.log(error);
//   }
// };

// =================================================================

fetchAQIApi();
fetchCurrenciesApi();
fetchNewsApi();
// fetchTrafficApi();