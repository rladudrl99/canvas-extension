function we(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ee } = Object.prototype, { getPrototypeOf: Y } = Object, Z = ((e) => (t) => {
  const n = Ee.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), O = (e) => (e = e.toLowerCase(), (t) => Z(t) === e), M = (e) => (t) => typeof t === e, { isArray: N } = Array, C = M("undefined");
function je(e) {
  return e !== null && !C(e) && e.constructor !== null && !C(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const be = O("ArrayBuffer");
function Me(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && be(e.buffer), t;
}
const Ie = M("string"), T = M("function"), Se = M("number"), ee = (e) => e !== null && typeof e == "object", ve = (e) => e === !0 || e === !1, k = (e) => {
  if (Z(e) !== "object")
    return !1;
  const t = Y(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, qe = O("Date"), $e = O("File"), ze = O("Blob"), Je = O("FileList"), Ve = (e) => ee(e) && T(e.pipe), Ke = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Ee.call(e) === t || T(e.toString) && e.toString() === t);
}, We = O("URLSearchParams"), Ge = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function L(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), N(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let c;
    for (r = 0; r < s; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function Re(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const ge = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Oe = (e) => !C(e) && e !== ge;
function W() {
  const { caseless: e } = Oe(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Re(t, o) || o;
    k(t[i]) && k(r) ? t[i] = W(t[i], r) : k(r) ? t[i] = W({}, r) : N(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && L(arguments[r], n);
  return t;
}
const Xe = (e, t, n, { allOwnKeys: r } = {}) => (L(t, (o, i) => {
  n && T(o) ? e[i] = we(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Qe = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ye = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ze = (e, t, n, r) => {
  let o, i, s;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !c[s] && (t[s] = e[s], c[s] = !0);
    e = n !== !1 && Y(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, et = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, tt = (e) => {
  if (!e)
    return null;
  if (N(e))
    return e;
  let t = e.length;
  if (!Se(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, nt = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Y(Uint8Array)), rt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, st = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ot = O("HTMLFormElement"), it = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), oe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), at = O("RegExp"), Ae = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  L(n, (o, i) => {
    t(o, i, e) !== !1 && (r[i] = o);
  }), Object.defineProperties(e, r);
}, ct = (e) => {
  Ae(e, (t, n) => {
    if (T(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (T(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ut = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return N(e) ? r(e) : r(String(e).split(t)), n;
}, lt = () => {
}, ft = (e, t) => (e = +e, Number.isFinite(e) ? e : t), z = "abcdefghijklmnopqrstuvwxyz", ie = "0123456789", Te = {
  DIGIT: ie,
  ALPHA: z,
  ALPHA_DIGIT: z + z.toUpperCase() + ie
}, dt = (e = 16, t = Te.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ht(e) {
  return !!(e && T(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const pt = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ee(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = N(r) ? [] : {};
        return L(r, (s, c) => {
          const d = n(s, o + 1);
          !C(d) && (i[c] = d);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, a = {
  isArray: N,
  isArrayBuffer: be,
  isBuffer: je,
  isFormData: Ke,
  isArrayBufferView: Me,
  isString: Ie,
  isNumber: Se,
  isBoolean: ve,
  isObject: ee,
  isPlainObject: k,
  isUndefined: C,
  isDate: qe,
  isFile: $e,
  isBlob: ze,
  isRegExp: at,
  isFunction: T,
  isStream: Ve,
  isURLSearchParams: We,
  isTypedArray: nt,
  isFileList: Je,
  forEach: L,
  merge: W,
  extend: Xe,
  trim: Ge,
  stripBOM: Qe,
  inherits: Ye,
  toFlatObject: Ze,
  kindOf: Z,
  kindOfTest: O,
  endsWith: et,
  toArray: tt,
  forEachEntry: rt,
  matchAll: st,
  isHTMLForm: ot,
  hasOwnProperty: oe,
  hasOwnProp: oe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ae,
  freezeMethods: ct,
  toObjectSet: ut,
  toCamelCase: it,
  noop: lt,
  toFiniteNumber: ft,
  findKey: Re,
  global: ge,
  isContextDefined: Oe,
  ALPHABET: Te,
  generateString: dt,
  isSpecCompliantForm: ht,
  toJSONObject: pt
};
function m(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const _e = m.prototype, xe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  xe[e] = { value: e };
});
Object.defineProperties(m, xe);
Object.defineProperty(_e, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, o, i) => {
  const s = Object.create(_e);
  return a.toFlatObject(e, s, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const mt = null;
function G(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ne(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ae(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Ne(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function yt(e) {
  return a.isArray(e) && !e.some(G);
}
const wt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function I(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, R) {
    return !a.isUndefined(R[p]);
  });
  const r = n.metaTokens, o = n.visitor || l, i = n.dots, s = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!d && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, p, R) {
    let b = f;
    if (f && !R && typeof f == "object") {
      if (a.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && yt(f) || (a.isFileList(f) || a.endsWith(p, "[]")) && (b = a.toArray(f)))
        return p = Ne(p), b.forEach(function(F, He) {
          !(a.isUndefined(F) || F === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ae([p], He, i) : s === null ? p : p + "[]",
            u(F)
          );
        }), !1;
    }
    return G(f) ? !0 : (t.append(ae(R, p, i), u(f)), !1);
  }
  const h = [], E = Object.assign(wt, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: G
  });
  function y(f, p) {
    if (!a.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      h.push(f), a.forEach(f, function(b, _) {
        (!(a.isUndefined(b) || b === null) && o.call(
          t,
          b,
          a.isString(_) ? _.trim() : _,
          p,
          E
        )) === !0 && y(b, p ? p.concat(_) : [_]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function ce(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function te(e, t) {
  this._pairs = [], e && I(e, this, t);
}
const Pe = te.prototype;
Pe.append = function(t, n) {
  this._pairs.push([t, n]);
};
Pe.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ce);
  } : ce;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Et(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ce(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Et, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new te(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class bt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ue = bt, Le = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, St = typeof URLSearchParams < "u" ? URLSearchParams : te, Rt = typeof FormData < "u" ? FormData : null, gt = typeof Blob < "u" ? Blob : null, Ot = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), At = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), S = {
  isBrowser: !0,
  classes: {
    URLSearchParams: St,
    FormData: Rt,
    Blob: gt
  },
  isStandardBrowserEnv: Ot,
  isStandardBrowserWebWorkerEnv: At,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Tt(e, t) {
  return I(e, new S.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return S.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function _t(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function De(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const c = Number.isFinite(+s), d = i >= n.length;
    return s = !s && a.isArray(o) ? o.length : s, d ? (a.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !c) : ((!o[s] || !a.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && a.isArray(o[s]) && (o[s] = xt(o[s])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, o) => {
      t(_t(r), o, n, 0);
    }), n;
  }
  return null;
}
const Nt = {
  "Content-Type": void 0
};
function Pt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const v = {
  transitional: Le,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return o && o ? JSON.stringify(De(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tt(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return I(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Pt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || v.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (s)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: S.classes.FormData,
    Blob: S.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
a.forEach(["delete", "get", "head"], function(t) {
  v.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  v.headers[t] = a.merge(Nt);
});
const ne = v, Ct = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Lt = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Ct[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, le = Symbol("internals");
function P(e) {
  return e && String(e).trim().toLowerCase();
}
function B(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(B) : String(e);
}
function Dt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ft = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function J(e, t, n, r, o) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function kt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Bt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class q {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(c, d, u) {
      const l = P(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(o, l);
      (!h || o[h] === void 0 || u === !0 || u === void 0 && o[h] !== !1) && (o[h || d] = B(c));
    }
    const s = (c, d) => a.forEach(c, (u, l) => i(u, l, d));
    return a.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : a.isString(t) && (t = t.trim()) && !Ft(t) ? s(Lt(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = P(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Dt(o);
        if (a.isFunction(n))
          return n.call(this, o, r);
        if (a.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = P(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || J(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = P(s), s) {
        const c = a.findKey(r, s);
        c && (!n || J(r, r[c], c, n)) && (delete r[c], o = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || J(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (o, i) => {
      const s = a.findKey(r, i);
      if (s) {
        n[s] = B(o), delete n[i];
        return;
      }
      const c = t ? kt(i) : String(i).trim();
      c !== i && delete n[i], n[c] = B(o), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[le] = this[le] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const c = P(s);
      r[c] || (Bt(o, s), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
q.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(q.prototype);
a.freezeMethods(q);
const g = q;
function V(e, t) {
  const n = this || ne, r = t || n, o = g.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(c) {
    i = c.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Fe(e) {
  return !!(e && e.__CANCEL__);
}
function D(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(D, m, {
  __CANCEL__: !0
});
function Ut(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ht = S.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, i, s, c) {
        const d = [];
        d.push(n + "=" + encodeURIComponent(r)), a.isNumber(o) && d.push("expires=" + new Date(o).toGMTString()), a.isString(i) && d.push("path=" + i), a.isString(s) && d.push("domain=" + s), c === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function jt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Mt(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ke(e, t) {
  return e && !jt(t) ? Mt(e, t) : t;
}
const It = S.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(i) {
      let s = i;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = o(window.location.href), function(s) {
      const c = a.isString(s) ? o(s) : s;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function vt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qt(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), l = r[i];
    s || (s = u), n[o] = d, r[o] = u;
    let h = i, E = 0;
    for (; h !== o; )
      E += n[h++], h = h % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - s < t)
      return;
    const y = l && u - l;
    return y ? Math.round(E * 1e3 / y) : void 0;
  };
}
function fe(e, t) {
  let n = 0;
  const r = qt(50, 250);
  return (o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, c = i - n, d = r(c), u = i <= s;
    n = i;
    const l = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && s && u ? (s - i) / d : void 0,
      event: o
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const $t = typeof XMLHttpRequest < "u", zt = $t && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const i = g.from(e.headers).normalize(), s = e.responseType;
    let c;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    a.isFormData(o) && (S.isStandardBrowserEnv || S.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(y + ":" + f));
    }
    const l = ke(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Ce(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function h() {
      if (!u)
        return;
      const y = g.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), p = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: y,
        config: e,
        request: u
      };
      Ut(function(b) {
        n(b), d();
      }, function(b) {
        r(b), d();
      }, p), u = null;
    }
    if ("onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, u.onabort = function() {
      u && (r(new m("Request aborted", m.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || Le;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), r(new m(
        f,
        p.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        u
      )), u = null;
    }, S.isStandardBrowserEnv) {
      const y = (e.withCredentials || It(l)) && e.xsrfCookieName && Ht.read(e.xsrfCookieName);
      y && i.set(e.xsrfHeaderName, y);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && a.forEach(i.toJSON(), function(f, p) {
      u.setRequestHeader(p, f);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", fe(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", fe(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (y) => {
      u && (r(!y || y.type ? new D(null, e, u) : y), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const E = vt(l);
    if (E && S.protocols.indexOf(E) === -1) {
      r(new m("Unsupported protocol " + E + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, U = {
  http: mt,
  xhr: zt
};
a.forEach(U, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Jt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = a.isString(n) ? U[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new m(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(U, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!a.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: U
};
function K(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new D(null, e);
}
function de(e) {
  return K(e), e.headers = g.from(e.headers), e.data = V.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Jt.getAdapter(e.adapter || ne.adapter)(e).then(function(r) {
    return K(e), r.data = V.call(
      e,
      e.transformResponse,
      r
    ), r.headers = g.from(r.headers), r;
  }, function(r) {
    return Fe(r) || (K(e), r && r.response && (r.response.data = V.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = g.from(r.response.headers))), Promise.reject(r);
  });
}
const he = (e) => e instanceof g ? e.toJSON() : e;
function x(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, h) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: h }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function o(u, l, h) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, h);
    } else
      return r(u, l, h);
  }
  function i(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function s(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, l);
  }
  function c(u, l, h) {
    if (h in t)
      return r(u, l);
    if (h in e)
      return r(void 0, u);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: c,
    headers: (u, l) => o(he(u), he(l), !0)
  };
  return a.forEach(Object.keys(e).concat(Object.keys(t)), function(l) {
    const h = d[l] || o, E = h(e[l], t[l], l);
    a.isUndefined(E) && h !== c || (n[l] = E);
  }), n;
}
const Be = "1.3.5", re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  re[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const pe = {};
re.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + Be + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, c) => {
    if (t === !1)
      throw new m(
        o(s, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !pe[s] && (pe[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, c) : !0;
  };
};
function Vt(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const c = e[i], d = c === void 0 || s(c, i, e);
      if (d !== !0)
        throw new m("option " + i + " must be " + d, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + i, m.ERR_BAD_OPTION);
  }
}
const X = {
  assertOptions: Vt,
  validators: re
}, A = X.validators;
class j {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ue(),
      response: new ue()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = x(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && X.assertOptions(r, {
      silentJSONParsing: A.transitional(A.boolean),
      forcedJSONParsing: A.transitional(A.boolean),
      clarifyTimeoutError: A.transitional(A.boolean)
    }, !1), o != null && (a.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : X.assertOptions(o, {
      encode: A.function,
      serialize: A.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s;
    s = i && a.merge(
      i.common,
      i[n.method]
    ), s && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), n.headers = g.concat(s, i);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (d = d && p.synchronous, c.unshift(p.fulfilled, p.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let l, h = 0, E;
    if (!d) {
      const f = [de.bind(this), void 0];
      for (f.unshift.apply(f, c), f.push.apply(f, u), E = f.length, l = Promise.resolve(n); h < E; )
        l = l.then(f[h++], f[h++]);
      return l;
    }
    E = c.length;
    let y = n;
    for (h = 0; h < E; ) {
      const f = c[h++], p = c[h++];
      try {
        y = f(y);
      } catch (R) {
        p.call(this, R);
        break;
      }
    }
    try {
      l = de.call(this, y);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, E = u.length; h < E; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(t) {
    t = x(this.defaults, t);
    const n = ke(t.baseURL, t.url);
    return Ce(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  j.prototype[t] = function(n, r) {
    return this.request(x(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, c) {
      return this.request(x(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  j.prototype[t] = n(), j.prototype[t + "Form"] = n(!0);
});
const H = j;
class se {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((c) => {
        r.subscribe(c), i = c;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, t(function(i, s, c) {
      r.reason || (r.reason = new D(i, s, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new se(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Kt = se;
function Wt(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Gt(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Q = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Q).forEach(([e, t]) => {
  Q[t] = e;
});
const Xt = Q;
function Ue(e) {
  const t = new H(e), n = we(H.prototype.request, t);
  return a.extend(n, H.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ue(x(e, o));
  }, n;
}
const w = Ue(ne);
w.Axios = H;
w.CanceledError = D;
w.CancelToken = Kt;
w.isCancel = Fe;
w.VERSION = Be;
w.toFormData = I;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = Wt;
w.isAxiosError = Gt;
w.mergeConfig = x;
w.AxiosHeaders = g;
w.formToJSON = (e) => De(a.isHTMLForm(e) ? new FormData(e) : e);
w.HttpStatusCode = Xt;
w.default = w;
const $ = w;
function Qt(e) {
  let t = e + "=", r = decodeURIComponent(document.cookie).split(";");
  for (let o = 0; o < r.length; o++) {
    let i = r[o];
    for (; i.charAt(0) == " "; )
      i = i.substring(1);
    if (i.indexOf(t) == 0)
      return i.substring(t.length, i.length);
  }
  return "";
}
const Yt = Qt("xn_api_token");
$.defaults.baseURL = "https://canvas.ssu.ac.kr";
$.defaults.headers.common.Authorization = `Bearer ${Yt}`;
const Zt = (e) => $.get(`/learningx/api/v1/courses/${e}/attendance_items/summary`).then((t) => t.data), en = (e) => $.get(`learningx/api/v1/courses/${e}/modules`).then((t) => t.data), me = location.pathname.split("/")[2];
location.pathname.split("/").pop() === "71" && setTimeout(async () => {
  try {
    const e = await Zt(me), t = await en(me), n = [];
    t.forEach((s) => {
      s.module_items.forEach((c) => {
        var d, u, l;
        n.push({
          title: c.title,
          url: `/${location.pathname.split("/").slice(1, 3).join("/")}/modules/items/${c.module_item_id}`,
          content_id: c.content_id ?? -1,
          content_type: c.content_type,
          module_item_id: c.module_item_id,
          attendance_status: c.content_type == "attendance_item" && c.content_id > 0 ? e.attendance_summaries[c.content_id].attendance_status : "해당없음",
          attendance_url: ((d = c == null ? void 0 : c.content_data.item_content_data) == null ? void 0 : d.content_id) ?? "",
          use_attendance: c.content_data.use_attendance,
          due_at: c.content_data.due_at,
          late_at: c.content_data.late_at,
          view_url: ((l = (u = c == null ? void 0 : c.content_data) == null ? void 0 : u.item_content_data) == null ? void 0 : l.view_url) ?? ""
        });
      });
    });
    const r = [], o = [!1, !1, !1], i = ["동영상", "과제", "학습자료"];
    r.push(
      n.map((s) => {
        let c = "";
        return s.use_attendance ? (o[0] = !0, s.attendance_status === "none" ? (c += `<div onclick=location.href='${s.url}'>
            <h4>${s.title}</h4>
            <h5>${new Date(s.due_at).toLocaleString(
          "ko-KR"
        )}까지 출석이 인정됩니다.</h5>
            <h5>${new Date(s.late_at).toLocaleString(
          "ko-KR"
        )}까지 지각이 인정됩니다.</h5>`, s.view_url && (c += `<iframe src='${s.view_url}'></iframe>`), c += "</div>") : (c += `<div onclick=location.href='${s.url}'><h4>${s.title}</h4>`, s.view_url && (c += `<iframe src='${s.view_url}'></iframe>`), c += "</div>"), c) : "";
      })
    ), r.push(
      n.map((s) => s.content_type === "assignment" && s.due_at !== null ? (o[1] = !0, `<div onclick=location.href='${s.url}'>${s.title}
          <div>${new Date(s.due_at).toLocaleString(
        "ko-KR"
      )}까지 마감입니다.</div>
          </div>`) : "")
    ), r.push(
      n.map((s) => {
        if (s.content_type === "attendance_item" && !s.use_attendance || s.content_type === "assignment" && s.due_at === null) {
          o[2] = !0;
          let c = "";
          return c += `<div onclick=location.href='${s.url}'>${s.title}`, s.view_url && (c += `<div><a id='file-link' href='${s.view_url}' target='_blank' download onclick='event.stopPropagation()'>파일 보기</a></div>`), c += "</div>", c;
        } else
          return "";
      })
    );
    for (let s = 0; s < 3; s++)
      document.querySelector("#content").innerHTML += "<div id=weekly-learning-items></div>", document.querySelector("#content").childNodes[s].innerHTML += `<h1>${i[s]}</h1>`, o[s] ? r[s].forEach((c) => {
        document.querySelector("#content").childNodes[s].innerHTML += c;
      }) : document.querySelector("#content").childNodes[s].innerHTML += "해당 사항이 없습니다.";
  } catch (e) {
    document.querySelector("#content").innerHTML += e;
  }
}, 0);
let tn = "'<div id=dim><div id=note-container><textarea id=t-area></textarea></div></div>'";
document.addEventListener("click", function(e) {
  if (!e.target.closest("#note-container") && e.target.id !== "floating-button" && e.target.id !== "floating-icon") {
    let t = document.getElementById("dim");
    t && t.remove();
  }
});
const ye = location.pathname.split("/");
if (ye[ye.length - 1] === "71") {
  const e = document.querySelector("#content"), t = document.querySelector("head"), n = document.querySelector("body");
  e && (e.innerHTML = ""), t && (t.innerHTML = `<script>
        function log(){console.log(12345)}
      <\/script>` + t.innerHTML), n && (n.innerHTML = `<a href="#" id="floating-button" onclick="(function (){
        body.innerHTML =  ${tn} + body.innerHTML;
        const value = window.localStorage.getItem('ssuvas-note') === undefined ? '' : window.localStorage.getItem('ssuvas-note');
        const textarea = document.getElementById('t-area');
        document.getElementById('t-area').value = value;
        textarea.addEventListener('keydown', function (event) {
          let value = window.localStorage.getItem('ssuvas-note') ?? '';
          value = event.target.value;
          window.localStorage.setItem('ssuvas-note', value);
        });
      })()">
        <div id="floating-icon"></div>
      </a>` + n.innerHTML);
}
