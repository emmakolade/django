(window.webpackJsonpsmart_app = window.webpackJsonpsmart_app || []).push([
  [2],
  [
    ,
    function (e, t, n) {
      var r;
      /*!
       * jQuery JavaScript Library v3.3.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2018-01-20T17:24Z
       */
      /*!
       * jQuery JavaScript Library v3.3.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2018-01-20T17:24Z
       */
      !(function (t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (n, i) {
        "use strict";
        var o = [],
          s = n.document,
          a = Object.getPrototypeOf,
          u = o.slice,
          l = o.concat,
          c = o.push,
          f = o.indexOf,
          d = {},
          h = d.toString,
          p = d.hasOwnProperty,
          m = p.toString,
          g = m.call(Object),
          v = {},
          y = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
          x = function (e) {
            return null != e && e === e.window;
          },
          b = { type: !0, src: !0, noModule: !0 };
        function w(e, t, n) {
          var r,
            i = (t = t || s).createElement("script");
          if (((i.text = e), n)) for (r in b) n[r] && (i[r] = n[r]);
          t.head.appendChild(i).parentNode.removeChild(i);
        }
        function C(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? d[h.call(e)] || "object"
            : typeof e;
        }
        var E = function (e, t) {
            return new E.fn.init(e, t);
          },
          S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function T(e) {
          var t = !!e && "length" in e && e.length,
            n = C(e);
          return (
            !y(e) &&
            !x(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        (E.fn = E.prototype =
          {
            jquery: "3.3.1",
            constructor: E,
            length: 0,
            toArray: function () {
              return u.call(this);
            },
            get: function (e) {
              return null == e
                ? u.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = E.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return E.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                E.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(u.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: c,
            sort: o.sort,
            splice: o.splice,
          }),
          (E.extend = E.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                i,
                o,
                s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                l = !1;
              for (
                "boolean" == typeof s &&
                  ((l = s), (s = arguments[a] || {}), a++),
                  "object" == typeof s || y(s) || (s = {}),
                  a === u && ((s = this), a--);
                a < u;
                a++
              )
                if (null != (e = arguments[a]))
                  for (t in e)
                    (n = s[t]),
                      s !== (r = e[t]) &&
                        (l &&
                        r &&
                        (E.isPlainObject(r) || (i = Array.isArray(r)))
                          ? (i
                              ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                              : (o = n && E.isPlainObject(n) ? n : {}),
                            (s[t] = E.extend(l, o, r)))
                          : void 0 !== r && (s[t] = r));
              return s;
            }),
          E.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return (
                !(!e || "[object Object]" !== h.call(e)) &&
                (!(t = a(e)) ||
                  ("function" ==
                    typeof (n = p.call(t, "constructor") && t.constructor) &&
                    m.call(n) === g))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e) {
              w(e);
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            trim: function (e) {
              return null == e ? "" : (e + "").replace(S, "");
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (T(Object(e))
                    ? E.merge(n, "string" == typeof e ? [e] : e)
                    : c.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : f.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                !t(e[i], i) !== s && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                i,
                o = 0,
                s = [];
              if (T(e))
                for (r = e.length; o < r; o++)
                  null != (i = t(e[o], o, n)) && s.push(i);
              else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
              return l.apply([], s);
            },
            guid: 1,
            support: v,
          }),
          "function" == typeof Symbol &&
            (E.fn[Symbol.iterator] = o[Symbol.iterator]),
          E.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var A =
          /*!
           * Sizzle CSS Selector Engine v2.3.3
           * https://sizzlejs.com/
           *
           * Copyright jQuery Foundation and other contributors
           * Released under the MIT license
           * http://jquery.org/license
           *
           * Date: 2016-08-08
           */
          (function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              u,
              l,
              c,
              f,
              d,
              h,
              p,
              m,
              g,
              v,
              y,
              x,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              C = 0,
              E = 0,
              S = se(),
              T = se(),
              A = se(),
              N = function (e, t) {
                return e === t && (f = !0), 0;
              },
              k = {}.hasOwnProperty,
              j = [],
              D = j.pop,
              L = j.push,
              O = j.push,
              M = j.slice,
              P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              q =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              z = "[\\x20\\t\\r\\n\\f]",
              H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
              I =
                "\\[" +
                z +
                "*(" +
                H +
                ")(?:" +
                z +
                "*([*^$|!~]?=)" +
                z +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                H +
                "))|)" +
                z +
                "*\\]",
              B =
                ":(" +
                H +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                I +
                ")*)|.*)\\)|)",
              _ = new RegExp(z + "+", "g"),
              R = new RegExp(
                "^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$",
                "g"
              ),
              F = new RegExp("^" + z + "*," + z + "*"),
              W = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
              $ = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
              U = new RegExp(B),
              X = new RegExp("^" + H + "$"),
              V = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    z +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    z +
                    "*(?:([+-]|)" +
                    z +
                    "*(\\d+)|))" +
                    z +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    z +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    z +
                    "*((?:-\\d)?\\d*)" +
                    z +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /^(?:input|select|textarea|button)$/i,
              Y = /^h\d$/i,
              Q = /^[^{]+\{\s*\[native \w/,
              J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              Z = /[+~]/,
              K = new RegExp(
                "\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)",
                "ig"
              ),
              ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n
                  ? t
                  : r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
              },
              te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ne = function (e, t) {
                return t
                  ? "\0" === e
                    ? "ï¿½"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              re = function () {
                d();
              },
              ie = ye(
                function (e) {
                  return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              O.apply((j = M.call(w.childNodes)), w.childNodes),
                j[w.childNodes.length].nodeType;
            } catch (e) {
              O = {
                apply: j.length
                  ? function (e, t) {
                      L.apply(e, M.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function oe(e, t, r, i) {
              var o,
                a,
                l,
                c,
                f,
                p,
                v,
                y = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))
              )
                return r;
              if (
                !i &&
                ((t ? t.ownerDocument || t : w) !== h && d(t), (t = t || h), m)
              ) {
                if (11 !== C && (f = J.exec(e)))
                  if ((o = f[1])) {
                    if (9 === C) {
                      if (!(l = t.getElementById(o))) return r;
                      if (l.id === o) return r.push(l), r;
                    } else if (
                      y &&
                      (l = y.getElementById(o)) &&
                      x(t, l) &&
                      l.id === o
                    )
                      return r.push(l), r;
                  } else {
                    if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return O.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (n.qsa && !A[e + " "] && (!g || !g.test(e))) {
                  if (1 !== C) (y = t), (v = e);
                  else if ("object" !== t.nodeName.toLowerCase()) {
                    for (
                      (c = t.getAttribute("id"))
                        ? (c = c.replace(te, ne))
                        : t.setAttribute("id", (c = b)),
                        a = (p = s(e)).length;
                      a--;

                    )
                      p[a] = "#" + c + " " + ve(p[a]);
                    (v = p.join(",")),
                      (y = (Z.test(e) && me(t.parentNode)) || t);
                  }
                  if (v)
                    try {
                      return O.apply(r, y.querySelectorAll(v)), r;
                    } catch (e) {
                    } finally {
                      c === b && t.removeAttribute("id");
                    }
                }
              }
              return u(e.replace(R, "$1"), t, r, i);
            }
            function se() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function ae(e) {
              return (e[b] = !0), e;
            }
            function ue(e) {
              var t = h.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function le(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function ce(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function de(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ie(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function pe(e) {
              return ae(function (t) {
                return (
                  (t = +t),
                  ae(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                      n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function me(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = oe.support = {}),
            (o = oe.isXML =
              function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
              }),
            (d = oe.setDocument =
              function (e) {
                var t,
                  i,
                  s = e ? e.ownerDocument || e : w;
                return s !== h && 9 === s.nodeType && s.documentElement
                  ? ((p = (h = s).documentElement),
                    (m = !o(h)),
                    w !== h &&
                      (i = h.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", re, !1)
                        : i.attachEvent && i.attachEvent("onunload", re)),
                    (n.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                      return (
                        e.appendChild(h.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Q.test(
                      h.getElementsByClassName
                    )),
                    (n.getById = ue(function (e) {
                      return (
                        (p.appendChild(e).id = b),
                        !h.getElementsByName || !h.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(K, ee);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(K, ee);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (g = []),
                    (n.qsa = Q.test(h.querySelectorAll)) &&
                      (ue(function (e) {
                        (p.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=" + z + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push("\\[" + z + "*(?:value|" + q + ")"),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]");
                      }),
                      ue(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name" + z + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (p.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = Q.test(
                      (y =
                        p.matches ||
                        p.webkitMatchesSelector ||
                        p.mozMatchesSelector ||
                        p.oMatchesSelector ||
                        p.msMatchesSelector)
                    )) &&
                      ue(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", B);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = Q.test(p.compareDocumentPosition)),
                    (x =
                      t || Q.test(p.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (N = t
                      ? function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) ===
                                (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e === h || (e.ownerDocument === w && x(w, e))
                                ? -1
                                : t === h || (t.ownerDocument === w && x(w, t))
                                ? 1
                                : c
                                ? P(c, e) - P(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (f = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                          if (!i || !o)
                            return e === h
                              ? -1
                              : t === h
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0;
                          if (i === o) return ce(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; s[r] === a[r]; ) r++;
                          return r
                            ? ce(s[r], a[r])
                            : s[r] === w
                            ? -1
                            : a[r] === w
                            ? 1
                            : 0;
                        }),
                    h)
                  : h;
              }),
            (oe.matches = function (e, t) {
              return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
              if (
                ((e.ownerDocument || e) !== h && d(e),
                (t = t.replace($, "='$1']")),
                n.matchesSelector &&
                  m &&
                  !A[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var r = y.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {}
              return oe(t, h, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
              return (e.ownerDocument || e) !== h && d(e), x(e, t);
            }),
            (oe.attr = function (e, t) {
              (e.ownerDocument || e) !== h && d(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && k.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !m)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !m
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (oe.escape = function (e) {
              return (e + "").replace(te, ne);
            }),
            (oe.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(N),
                f)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = oe.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            ((r = oe.selectors =
              {
                cacheLength: 50,
                createPseudo: ae,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(K, ee)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || oe.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && oe.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return V.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            U.test(n) &&
                            (t = s(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(K, ee).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = S[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + z + ")" + e + "(" + z + "|$)"
                      )) &&
                        S(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = oe.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(_, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            f,
                            d,
                            h,
                            p,
                            m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a,
                            x = !1;
                          if (g) {
                            if (o) {
                              for (; m; ) {
                                for (d = t; (d = d[m]); )
                                  if (
                                    a
                                      ? d.nodeName.toLowerCase() === v
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                p = m = "only" === e && !p && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((p = [s ? g.firstChild : g.lastChild]), s && y)
                            ) {
                              for (
                                x =
                                  (h =
                                    (l =
                                      (c =
                                        (f = (d = g)[b] || (d[b] = {}))[
                                          d.uniqueID
                                        ] || (f[d.uniqueID] = {}))[e] ||
                                      [])[0] === C && l[1]) && l[2],
                                  d = h && g.childNodes[h];
                                (d =
                                  (++h && d && d[m]) || (x = h = 0) || p.pop());

                              )
                                if (1 === d.nodeType && ++x && d === t) {
                                  c[e] = [C, h, x];
                                  break;
                                }
                            } else if (
                              (y &&
                                (x = h =
                                  (l =
                                    (c =
                                      (f = (d = t)[b] || (d[b] = {}))[
                                        d.uniqueID
                                      ] || (f[d.uniqueID] = {}))[e] ||
                                    [])[0] === C && l[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (d =
                                  (++h && d && d[m]) ||
                                  (x = h = 0) ||
                                  p.pop()) &&
                                ((a
                                  ? d.nodeName.toLowerCase() !== v
                                  : 1 !== d.nodeType) ||
                                  !++x ||
                                  (y &&
                                    ((c =
                                      (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] = [C, x]),
                                  d !== t));

                              );
                            return (x -= i) === r || (x % r == 0 && x / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        oe.error("unsupported pseudo: " + e);
                    return i[b]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ae(function (e, n) {
                              for (var r, o = i(e, t), s = o.length; s--; )
                                e[(r = P(e, o[s]))] = !(n[r] = o[s]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ae(function (e) {
                    var t = [],
                      n = [],
                      r = a(e.replace(R, "$1"));
                    return r[b]
                      ? ae(function (e, t, n, i) {
                          for (
                            var o, s = r(e, null, i, []), a = e.length;
                            a--;

                          )
                            (o = s[a]) && (e[a] = !(t[a] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ae(function (e) {
                    return function (t) {
                      return oe(e, t).length > 0;
                    };
                  }),
                  contains: ae(function (e) {
                    return (
                      (e = e.replace(K, ee)),
                      function (t) {
                        return (
                          (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        );
                      }
                    );
                  }),
                  lang: ae(function (e) {
                    return (
                      X.test(e || "") || oe.error("unsupported lang: " + e),
                      (e = e.replace(K, ee).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = m
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === p;
                  },
                  focus: function (e) {
                    return (
                      e === h.activeElement &&
                      (!h.hasFocus || h.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: he(!1),
                  disabled: he(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Y.test(e.nodeName);
                  },
                  input: function (e) {
                    return G.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: pe(function () {
                    return [0];
                  }),
                  last: pe(function (e, t) {
                    return [t - 1];
                  }),
                  eq: pe(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: pe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: pe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: pe(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                  }),
                  gt: pe(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = de(t);
            function ge() {}
            function ve(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function ye(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = E++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      d = [C, a];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || s)
                          if (
                            ((c =
                              (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[o]) && l[0] === C && l[1] === a)
                              return (d[2] = l[2]);
                            if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function be(e, t, n, r, i) {
              for (
                var o, s = [], a = 0, u = e.length, l = null != t;
                a < u;
                a++
              )
                (o = e[a]) &&
                  ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
              return s;
            }
            function we(e, t, n, r, i, o) {
              return (
                r && !r[b] && (r = we(r)),
                i && !i[b] && (i = we(i, o)),
                ae(function (o, s, a, u) {
                  var l,
                    c,
                    f,
                    d = [],
                    h = [],
                    p = s.length,
                    m =
                      o ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          oe(e, t[r], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || (!o && t) ? m : be(m, d, e, a, u),
                    v = n ? (i || (o ? e : p || r) ? [] : s) : g;
                  if ((n && n(g, v, a, u), r))
                    for (l = be(v, h), r(l, [], a, u), c = l.length; c--; )
                      (f = l[c]) && (v[h[c]] = !(g[h[c]] = f));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (l = [], c = v.length; c--; )
                          (f = v[c]) && l.push((g[c] = f));
                        i(null, (v = []), l, u);
                      }
                      for (c = v.length; c--; )
                        (f = v[c]) &&
                          (l = i ? P(o, f) : d[c]) > -1 &&
                          (o[l] = !(s[l] = f));
                    }
                  } else (v = be(v === s ? v.splice(p, v.length) : v)), i ? i(null, s, v, u) : O.apply(s, v);
                })
              );
            }
            function Ce(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  s = r.relative[e[0].type],
                  a = s || r.relative[" "],
                  u = s ? 1 : 0,
                  c = ye(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  f = ye(
                    function (e) {
                      return P(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  d = [
                    function (e, n, r) {
                      var i =
                        (!s && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), i;
                    },
                  ];
                u < o;
                u++
              )
                if ((n = r.relative[e[u].type])) d = [ye(xe(d), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                    return we(
                      u > 1 && xe(d),
                      u > 1 &&
                        ve(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(R, "$1"),
                      n,
                      u < i && Ce(e.slice(u, i)),
                      i < o && Ce((e = e.slice(i))),
                      i < o && ve(e)
                    );
                  }
                  d.push(n);
                }
              return xe(d);
            }
            return (
              (ge.prototype = r.filters = r.pseudos),
              (r.setFilters = new ge()),
              (s = oe.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    s,
                    a,
                    u,
                    l,
                    c = T[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (a = e, u = [], l = r.preFilter; a; ) {
                    for (s in ((n && !(i = F.exec(a))) ||
                      (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                    (n = !1),
                    (i = W.exec(a)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(R, " ") }),
                      (a = a.slice(n.length))),
                    r.filter))
                      !(i = V[s].exec(a)) ||
                        (l[s] && !(i = l[s](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: s, matches: i }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? oe.error(e) : T(e, u).slice(0);
                }),
              (a = oe.compile =
                function (e, t) {
                  var n,
                    i = [],
                    o = [],
                    a = A[e + " "];
                  if (!a) {
                    for (t || (t = s(e)), n = t.length; n--; )
                      (a = Ce(t[n]))[b] ? i.push(a) : o.push(a);
                    (a = A(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          o = function (o, s, a, u, c) {
                            var f,
                              p,
                              g,
                              v = 0,
                              y = "0",
                              x = o && [],
                              b = [],
                              w = l,
                              E = o || (i && r.find.TAG("*", c)),
                              S = (C += null == w ? 1 : Math.random() || 0.1),
                              T = E.length;
                            for (
                              c && (l = s === h || s || c);
                              y !== T && null != (f = E[y]);
                              y++
                            ) {
                              if (i && f) {
                                for (
                                  p = 0,
                                    s ||
                                      f.ownerDocument === h ||
                                      (d(f), (a = !m));
                                  (g = e[p++]);

                                )
                                  if (g(f, s || h, a)) {
                                    u.push(f);
                                    break;
                                  }
                                c && (C = S);
                              }
                              n && ((f = !g && f) && v--, o && x.push(f));
                            }
                            if (((v += y), n && y !== v)) {
                              for (p = 0; (g = t[p++]); ) g(x, b, s, a);
                              if (o) {
                                if (v > 0)
                                  for (; y--; )
                                    x[y] || b[y] || (b[y] = D.call(u));
                                b = be(b);
                              }
                              O.apply(u, b),
                                c &&
                                  !o &&
                                  b.length > 0 &&
                                  v + t.length > 1 &&
                                  oe.uniqueSort(u);
                            }
                            return c && ((C = S), (l = w)), x;
                          };
                        return n ? ae(o) : o;
                      })(o, i)
                    )).selector = e;
                  }
                  return a;
                }),
              (u = oe.select =
                function (e, t, n, i) {
                  var o,
                    u,
                    l,
                    c,
                    f,
                    d = "function" == typeof e && e,
                    h = !i && s((e = d.selector || e));
                  if (((n = n || []), 1 === h.length)) {
                    if (
                      (u = h[0] = h[0].slice(0)).length > 2 &&
                      "ID" === (l = u[0]).type &&
                      9 === t.nodeType &&
                      m &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(l.matches[0].replace(K, ee), t) ||
                          [])[0])
                      )
                        return n;
                      d && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      o = V.needsContext.test(e) ? 0 : u.length;
                      o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                    )
                      if (
                        (f = r.find[c]) &&
                        (i = f(
                          l.matches[0].replace(K, ee),
                          (Z.test(u[0].type) && me(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(o, 1), !(e = i.length && ve(u))))
                          return O.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (d || a(e, h))(
                      i,
                      t,
                      !m,
                      n,
                      !t || (Z.test(e) && me(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(N).join("") === b),
              (n.detectDuplicates = !!f),
              d(),
              (n.sortDetached = ue(function (e) {
                return (
                  1 & e.compareDocumentPosition(h.createElement("fieldset"))
                );
              })),
              ue(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                le("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ue(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                le("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ue(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                le(q, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              oe
            );
          })(n);
        (E.find = A),
          (E.expr = A.selectors),
          (E.expr[":"] = E.expr.pseudos),
          (E.uniqueSort = E.unique = A.uniqueSort),
          (E.text = A.getText),
          (E.isXMLDoc = A.isXML),
          (E.contains = A.contains),
          (E.escapeSelector = A.escape);
        var N = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && E(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          k = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          j = E.expr.match.needsContext;
        function D(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var L =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function O(e, t, n) {
          return y(t)
            ? E.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? E.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? E.grep(e, function (e) {
                return f.call(t, e) > -1 !== n;
              })
            : E.filter(t, e, n);
        }
        (E.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? E.find.matchesSelector(r, e)
                ? [r]
                : []
              : E.find.matches(
                  e,
                  E.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          E.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof e)
                return this.pushStack(
                  E(e).filter(function () {
                    for (t = 0; t < r; t++)
                      if (E.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++)
                E.find(e, i[t], n);
              return r > 1 ? E.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(O(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(O(this, e || [], !0));
            },
            is: function (e) {
              return !!O(
                this,
                "string" == typeof e && j.test(e) ? E(e) : e || [],
                !1
              ).length;
            },
          });
        var M,
          P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((E.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || M), "string" == typeof e)) {
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : P.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof E ? t[0] : t),
                E.merge(
                  this,
                  E.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : s,
                    !0
                  )
                ),
                L.test(r[1]) && E.isPlainObject(t))
              )
                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (i = s.getElementById(r[2])) &&
                ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : y(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(E)
            : E.makeArray(e, this);
        }).prototype = E.fn),
          (M = E(s));
        var q = /^(?:parents|prev(?:Until|All))/,
          z = { children: !0, contents: !0, next: !0, prev: !0 };
        function H(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        E.fn.extend({
          has: function (e) {
            var t = E(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              s = "string" != typeof e && E(e);
            if (!j.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (s
                      ? s.index(n) > -1
                      : 1 === n.nodeType && E.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? f.call(E(e), this[0])
                : f.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          E.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return N(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return N(e, "parentNode", n);
              },
              next: function (e) {
                return H(e, "nextSibling");
              },
              prev: function (e) {
                return H(e, "previousSibling");
              },
              nextAll: function (e) {
                return N(e, "nextSibling");
              },
              prevAll: function (e) {
                return N(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return N(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return N(e, "previousSibling", n);
              },
              siblings: function (e) {
                return k((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return k(e.firstChild);
              },
              contents: function (e) {
                return D(e, "iframe")
                  ? e.contentDocument
                  : (D(e, "template") && (e = e.content || e),
                    E.merge([], e.childNodes));
              },
            },
            function (e, t) {
              E.fn[e] = function (n, r) {
                var i = E.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (i = E.filter(r, i)),
                  this.length > 1 &&
                    (z[e] || E.uniqueSort(i), q.test(e) && i.reverse()),
                  this.pushStack(i)
                );
              };
            }
          );
        var I = /[^\x20\t\r\n\f]+/g;
        function B(e) {
          return e;
        }
        function _(e) {
          throw e;
        }
        function R(e, t, n, r) {
          var i;
          try {
            e && y((i = e.promise))
              ? i.call(e).done(t).fail(n)
              : e && y((i = e.then))
              ? i.call(e, t, n)
              : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (E.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    E.each(e.match(I) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : E.extend({}, e);
          var t,
            n,
            r,
            i,
            o = [],
            s = [],
            a = -1,
            u = function () {
              for (i = i || e.once, r = t = !0; s.length; a = -1)
                for (n = s.shift(); ++a < o.length; )
                  !1 === o[a].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((a = o.length), (n = !1));
              e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
              add: function () {
                return (
                  o &&
                    (n && !t && ((a = o.length - 1), s.push(n)),
                    (function t(n) {
                      E.each(n, function (n, r) {
                        y(r)
                          ? (e.unique && l.has(r)) || o.push(r)
                          : r && r.length && "string" !== C(r) && t(r);
                      });
                    })(arguments),
                    n && !t && u()),
                  this
                );
              },
              remove: function () {
                return (
                  E.each(arguments, function (e, t) {
                    for (var n; (n = E.inArray(t, o, n)) > -1; )
                      o.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? E.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return (i = s = []), (o = n = ""), this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return (i = s = []), n || t || (o = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (e, n) {
                return (
                  i ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    s.push(n),
                    t || u()),
                  this
                );
              },
              fire: function () {
                return l.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return l;
        }),
          E.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    E.Callbacks("memory"),
                    E.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    E.Callbacks("once memory"),
                    E.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    E.Callbacks("once memory"),
                    E.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                r = "pending",
                i = {
                  state: function () {
                    return r;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return i.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return E.Deferred(function (n) {
                      E.each(t, function (t, r) {
                        var i = y(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && y(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, r, i) {
                    var o = 0;
                    function s(e, t, r, i) {
                      return function () {
                        var a = this,
                          u = arguments,
                          l = function () {
                            var n, l;
                            if (!(e < o)) {
                              if ((n = r.apply(a, u)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (l =
                                n &&
                                ("object" == typeof n ||
                                  "function" == typeof n) &&
                                n.then),
                                y(l)
                                  ? i
                                    ? l.call(n, s(o, t, B, i), s(o, t, _, i))
                                    : (o++,
                                      l.call(
                                        n,
                                        s(o, t, B, i),
                                        s(o, t, _, i),
                                        s(o, t, B, t.notifyWith)
                                      ))
                                  : (r !== B && ((a = void 0), (u = [n])),
                                    (i || t.resolveWith)(a, u));
                            }
                          },
                          c = i
                            ? l
                            : function () {
                                try {
                                  l();
                                } catch (n) {
                                  E.Deferred.exceptionHook &&
                                    E.Deferred.exceptionHook(n, c.stackTrace),
                                    e + 1 >= o &&
                                      (r !== _ && ((a = void 0), (u = [n])),
                                      t.rejectWith(a, u));
                                }
                              };
                        e
                          ? c()
                          : (E.Deferred.getStackHook &&
                              (c.stackTrace = E.Deferred.getStackHook()),
                            n.setTimeout(c));
                      };
                    }
                    return E.Deferred(function (n) {
                      t[0][3].add(s(0, n, y(i) ? i : B, n.notifyWith)),
                        t[1][3].add(s(0, n, y(e) ? e : B)),
                        t[2][3].add(s(0, n, y(r) ? r : _));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? E.extend(e, i) : i;
                  },
                },
                o = {};
              return (
                E.each(t, function (e, n) {
                  var s = n[2],
                    a = n[5];
                  (i[n[1]] = s.add),
                    a &&
                      s.add(
                        function () {
                          r = a;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    s.add(n[3].fire),
                    (o[n[0]] = function () {
                      return (
                        o[n[0] + "With"](this === o ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (o[n[0] + "With"] = s.fireWith);
                }),
                i.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = u.call(arguments),
                o = E.Deferred(),
                s = function (e) {
                  return function (n) {
                    (r[e] = this),
                      (i[e] = arguments.length > 1 ? u.call(arguments) : n),
                      --t || o.resolveWith(r, i);
                  };
                };
              if (
                t <= 1 &&
                (R(e, o.done(s(n)).resolve, o.reject, !t),
                "pending" === o.state() || y(i[n] && i[n].then))
              )
                return o.then();
              for (; n--; ) R(i[n], s(n), o.reject);
              return o.promise();
            },
          });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (E.Deferred.exceptionHook = function (e, t) {
          n.console &&
            n.console.warn &&
            e &&
            F.test(e.name) &&
            n.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (E.readyException = function (e) {
            n.setTimeout(function () {
              throw e;
            });
          });
        var W = E.Deferred();
        function $() {
          s.removeEventListener("DOMContentLoaded", $),
            n.removeEventListener("load", $),
            E.ready();
        }
        (E.fn.ready = function (e) {
          return (
            W.then(e).catch(function (e) {
              E.readyException(e);
            }),
            this
          );
        }),
          E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --E.readyWait : E.isReady) ||
                ((E.isReady = !0),
                (!0 !== e && --E.readyWait > 0) || W.resolveWith(s, [E]));
            },
          }),
          (E.ready.then = W.then),
          "complete" === s.readyState ||
          ("loading" !== s.readyState && !s.documentElement.doScroll)
            ? n.setTimeout(E.ready)
            : (s.addEventListener("DOMContentLoaded", $),
              n.addEventListener("load", $));
        var U = function (e, t, n, r, i, o, s) {
            var a = 0,
              u = e.length,
              l = null == n;
            if ("object" === C(n))
              for (a in ((i = !0), n)) U(e, t, a, n[a], !0, o, s);
            else if (
              void 0 !== r &&
              ((i = !0),
              y(r) || (s = !0),
              l &&
                (s
                  ? (t.call(e, r), (t = null))
                  : ((l = t),
                    (t = function (e, t, n) {
                      return l.call(E(e), n);
                    }))),
              t)
            )
              for (; a < u; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
          },
          X = /^-ms-/,
          V = /-([a-z])/g;
        function G(e, t) {
          return t.toUpperCase();
        }
        function Y(e) {
          return e.replace(X, "ms-").replace(V, G);
        }
        var Q = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function J() {
          this.expando = E.expando + J.uid++;
        }
        (J.uid = 1),
          (J.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  Q(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, t, n) {
              var r,
                i = this.cache(e);
              if ("string" == typeof t) i[Y(t)] = n;
              else for (r in t) i[Y(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][Y(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(Y)
                    : (t = Y(t)) in r
                    ? [t]
                    : t.match(I) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || E.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !E.isEmptyObject(t);
            },
          });
        var Z = new J(),
          K = new J(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function (e) {
                  return (
                    "true" === e ||
                    ("false" !== e &&
                      ("null" === e
                        ? null
                        : e === +e + ""
                        ? +e
                        : ee.test(e)
                        ? JSON.parse(e)
                        : e))
                  );
                })(n);
              } catch (e) {}
              K.set(e, t, n);
            } else n = void 0;
          return n;
        }
        E.extend({
          hasData: function (e) {
            return K.hasData(e) || Z.hasData(e);
          },
          data: function (e, t, n) {
            return K.access(e, t, n);
          },
          removeData: function (e, t) {
            K.remove(e, t);
          },
          _data: function (e, t, n) {
            return Z.access(e, t, n);
          },
          _removeData: function (e, t) {
            Z.remove(e, t);
          },
        }),
          E.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                s = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((i = K.get(o)),
                  1 === o.nodeType && !Z.get(o, "hasDataAttrs"))
                ) {
                  for (n = s.length; n--; )
                    s[n] &&
                      0 === (r = s[n].name).indexOf("data-") &&
                      ((r = Y(r.slice(5))), ne(o, r, i[r]));
                  Z.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e
                ? this.each(function () {
                    K.set(this, e);
                  })
                : U(
                    this,
                    function (t) {
                      var n;
                      if (o && void 0 === t)
                        return void 0 !== (n = K.get(o, e))
                          ? n
                          : void 0 !== (n = ne(o, e))
                          ? n
                          : void 0;
                      this.each(function () {
                        K.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                K.remove(this, e);
              });
            },
          }),
          E.extend({
            queue: function (e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (r = Z.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = Z.access(e, t, E.makeArray(n)))
                      : r.push(n)),
                  r || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      E.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Z.get(e, n) ||
                Z.access(e, n, {
                  empty: E.Callbacks("once memory").add(function () {
                    Z.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          E.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? E.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = E.queue(this, e, t);
                      E._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          E.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                E.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = E.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                s--;

              )
                (n = Z.get(o[s], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(a));
              return a(), i.promise(t);
            },
          });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
          oe = ["Top", "Right", "Bottom", "Left"],
          se = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                E.contains(e.ownerDocument, e) &&
                "none" === E.css(e, "display"))
            );
          },
          ae = function (e, t, n, r) {
            var i,
              o,
              s = {};
            for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
            return i;
          };
        function ue(e, t, n, r) {
          var i,
            o,
            s = 20,
            a = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return E.css(e, t, "");
                },
            u = a(),
            l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
            c = (E.cssNumber[t] || ("px" !== l && +u)) && ie.exec(E.css(e, t));
          if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; s--; )
              E.style(e, t, c + l),
                (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
                (c /= o);
            (c *= 2), E.style(e, t, c + l), (n = n || []);
          }
          return (
            n &&
              ((c = +c || +u || 0),
              (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
          );
        }
        var le = {};
        function ce(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
          return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
            (i = E.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            (le[r] = i),
            i)
          );
        }
        function fe(e, t) {
          for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
            (r = e[o]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n &&
                    ((i[o] = Z.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                  "" === r.style.display && se(r) && (i[o] = ce(r)))
                : "none" !== n && ((i[o] = "none"), Z.set(r, "display", n)));
          for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
          return e;
        }
        E.fn.extend({
          show: function () {
            return fe(this, !0);
          },
          hide: function () {
            return fe(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  se(this) ? E(this).show() : E(this).hide();
                });
          },
        });
        var de = /^(?:checkbox|radio)$/i,
          he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          pe = /^$|^module$|\/(?:java|ecma)script/i,
          me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
        function ge(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && D(e, t)) ? E.merge([e], n) : n
          );
        }
        function ve(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
        }
        (me.optgroup = me.option),
          (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
          (me.th = me.td);
        var ye = /<|&#?\w+;/;
        function xe(e, t, n, r, i) {
          for (
            var o,
              s,
              a,
              u,
              l,
              c,
              f = t.createDocumentFragment(),
              d = [],
              h = 0,
              p = e.length;
            h < p;
            h++
          )
            if ((o = e[h]) || 0 === o)
              if ("object" === C(o)) E.merge(d, o.nodeType ? [o] : o);
              else if (ye.test(o)) {
                for (
                  s = s || f.appendChild(t.createElement("div")),
                    a = (he.exec(o) || ["", ""])[1].toLowerCase(),
                    u = me[a] || me._default,
                    s.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                    c = u[0];
                  c--;

                )
                  s = s.lastChild;
                E.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
              } else d.push(t.createTextNode(o));
          for (f.textContent = "", h = 0; (o = d[h++]); )
            if (r && E.inArray(o, r) > -1) i && i.push(o);
            else if (
              ((l = E.contains(o.ownerDocument, o)),
              (s = ge(f.appendChild(o), "script")),
              l && ve(s),
              n)
            )
              for (c = 0; (o = s[c++]); ) pe.test(o.type || "") && n.push(o);
          return f;
        }
        !(function () {
          var e = s
              .createDocumentFragment()
              .appendChild(s.createElement("div")),
            t = s.createElement("input");
          t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
        })();
        var be = s.documentElement,
          we = /^key/,
          Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ee = /^([^.]*)(?:\.(.+)|)/;
        function Se() {
          return !0;
        }
        function Te() {
          return !1;
        }
        function Ae() {
          try {
            return s.activeElement;
          } catch (e) {}
        }
        function Ne(e, t, n, r, i, o) {
          var s, a;
          if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
              Ne(e, a, n, r, t[a], o);
            return e;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
                ("string" == typeof n
                  ? ((i = r), (r = void 0))
                  : ((i = r), (r = n), (n = void 0))),
            !1 === i)
          )
            i = Te;
          else if (!i) return e;
          return (
            1 === o &&
              ((s = i),
              ((i = function (e) {
                return E().off(e), s.apply(this, arguments);
              }).guid = s.guid || (s.guid = E.guid++))),
            e.each(function () {
              E.event.add(this, t, i, r, n);
            })
          );
        }
        (E.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              s,
              a,
              u,
              l,
              c,
              f,
              d,
              h,
              p,
              m,
              g = Z.get(e);
            if (g)
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && E.find.matchesSelector(be, i),
                  n.guid || (n.guid = E.guid++),
                  (u = g.events) || (u = g.events = {}),
                  (s = g.handle) ||
                    (s = g.handle =
                      function (t) {
                        return void 0 !== E && E.event.triggered !== t.type
                          ? E.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  l = (t = (t || "").match(I) || [""]).length;
                l--;

              )
                (h = m = (a = Ee.exec(t[l]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  h &&
                    ((f = E.event.special[h] || {}),
                    (h = (i ? f.delegateType : f.bindType) || h),
                    (f = E.event.special[h] || {}),
                    (c = E.extend(
                      {
                        type: h,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: p.join("."),
                      },
                      o
                    )),
                    (d = u[h]) ||
                      (((d = u[h] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(e, r, p, s)) ||
                        (e.addEventListener && e.addEventListener(h, s))),
                    f.add &&
                      (f.add.call(e, c),
                      c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    (E.event.global[h] = !0));
          },
          remove: function (e, t, n, r, i) {
            var o,
              s,
              a,
              u,
              l,
              c,
              f,
              d,
              h,
              p,
              m,
              g = Z.hasData(e) && Z.get(e);
            if (g && (u = g.events)) {
              for (l = (t = (t || "").match(I) || [""]).length; l--; )
                if (
                  ((h = m = (a = Ee.exec(t[l]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  h)
                ) {
                  for (
                    f = E.event.special[h] || {},
                      d = u[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      s = o = d.length;
                    o--;

                  )
                    (c = d[o]),
                      (!i && m !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (a && !a.test(c.namespace)) ||
                        (r &&
                          r !== c.selector &&
                          ("**" !== r || !c.selector)) ||
                        (d.splice(o, 1),
                        c.selector && d.delegateCount--,
                        f.remove && f.remove.call(e, c));
                  s &&
                    !d.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, p, g.handle)) ||
                      E.removeEvent(e, h, g.handle),
                    delete u[h]);
                } else for (h in u) E.event.remove(e, h + t[l], n, r, !0);
              E.isEmptyObject(u) && Z.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a = E.event.fix(e),
              u = new Array(arguments.length),
              l = (Z.get(this, "events") || {})[a.type] || [],
              c = E.event.special[a.type] || {};
            for (u[0] = a, t = 1; t < arguments.length; t++)
              u[t] = arguments[t];
            if (
              ((a.delegateTarget = this),
              !c.preDispatch || !1 !== c.preDispatch.call(this, a))
            ) {
              for (
                s = E.event.handlers.call(this, a, l), t = 0;
                (i = s[t++]) && !a.isPropagationStopped();

              )
                for (
                  a.currentTarget = i.elem, n = 0;
                  (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();

                )
                  (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                    ((a.handleObj = o),
                    (a.data = o.data),
                    void 0 !==
                      (r = (
                        (E.event.special[o.origType] || {}).handle || o.handler
                      ).apply(i.elem, u)) &&
                      !1 === (a.result = r) &&
                      (a.preventDefault(), a.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              i,
              o,
              s,
              a = [],
              u = t.delegateCount,
              l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  ("click" !== e.type || !0 !== l.disabled)
                ) {
                  for (o = [], s = {}, n = 0; n < u; n++)
                    void 0 === s[(i = (r = t[n]).selector + " ")] &&
                      (s[i] = r.needsContext
                        ? E(i, this).index(l) > -1
                        : E.find(i, this, null, [l]).length),
                      s[i] && o.push(r);
                  o.length && a.push({ elem: l, handlers: o });
                }
            return (
              (l = this),
              u < t.length && a.push({ elem: l, handlers: t.slice(u) }),
              a
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(E.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: y(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[E.expando] ? e : new E.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function () {
                if (this !== Ae() && this.focus) return this.focus(), !1;
              },
              delegateType: "focusin",
            },
            blur: {
              trigger: function () {
                if (this === Ae() && this.blur) return this.blur(), !1;
              },
              delegateType: "focusout",
            },
            click: {
              trigger: function () {
                if ("checkbox" === this.type && this.click && D(this, "input"))
                  return this.click(), !1;
              },
              _default: function (e) {
                return D(e.target, "a");
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (E.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (E.Event = function (e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Se
                    : Te),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && E.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[E.expando] = !0);
          }),
          (E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Se),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Se),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Se),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          E.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (e) {
                var t = e.button;
                return null == e.which && we.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && Ce.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                    ? 3
                    : 4 & t
                    ? 2
                    : 0
                  : e.which;
              },
            },
            E.event.addProp
          ),
          E.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              E.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = e.relatedTarget,
                    i = e.handleObj;
                  return (
                    (r && (r === this || E.contains(this, r))) ||
                      ((e.type = i.origType),
                      (n = i.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          E.fn.extend({
            on: function (e, t, n, r) {
              return Ne(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return Ne(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  E(e.delegateTarget).off(
                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = Te),
                this.each(function () {
                  E.event.remove(this, e, n, t);
                })
              );
            },
          });
        var ke =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          je = /<script|<style|<link/i,
          De = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Oe(e, t) {
          return (
            (D(e, "table") &&
              D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
              E(e).children("tbody")[0]) ||
            e
          );
        }
        function Me(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Pe(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function qe(e, t) {
          var n, r, i, o, s, a, u, l;
          if (1 === t.nodeType) {
            if (
              Z.hasData(e) &&
              ((o = Z.access(e)), (s = Z.set(t, o)), (l = o.events))
            )
              for (i in (delete s.handle, (s.events = {}), l))
                for (n = 0, r = l[i].length; n < r; n++)
                  E.event.add(t, i, l[i][n]);
            K.hasData(e) &&
              ((a = K.access(e)), (u = E.extend({}, a)), K.set(t, u));
          }
        }
        function ze(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && de.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
              (t.defaultValue = e.defaultValue);
        }
        function He(e, t, n, r) {
          t = l.apply([], t);
          var i,
            o,
            s,
            a,
            u,
            c,
            f = 0,
            d = e.length,
            h = d - 1,
            p = t[0],
            m = y(p);
          if (
            m ||
            (d > 1 && "string" == typeof p && !v.checkClone && De.test(p))
          )
            return e.each(function (i) {
              var o = e.eq(i);
              m && (t[0] = p.call(this, i, o.html())), He(o, t, n, r);
            });
          if (
            d &&
            ((o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
          ) {
            for (a = (s = E.map(ge(i, "script"), Me)).length; f < d; f++)
              (u = i),
                f !== h &&
                  ((u = E.clone(u, !0, !0)), a && E.merge(s, ge(u, "script"))),
                n.call(e[f], u, f);
            if (a)
              for (
                c = s[s.length - 1].ownerDocument, E.map(s, Pe), f = 0;
                f < a;
                f++
              )
                (u = s[f]),
                  pe.test(u.type || "") &&
                    !Z.access(u, "globalEval") &&
                    E.contains(c, u) &&
                    (u.src && "module" !== (u.type || "").toLowerCase()
                      ? E._evalUrl && E._evalUrl(u.src)
                      : w(u.textContent.replace(Le, ""), c, u));
          }
          return e;
        }
        function Ie(e, t, n) {
          for (
            var r, i = t ? E.filter(t, e) : e, o = 0;
            null != (r = i[o]);
            o++
          )
            n || 1 !== r.nodeType || E.cleanData(ge(r)),
              r.parentNode &&
                (n && E.contains(r.ownerDocument, r) && ve(ge(r, "script")),
                r.parentNode.removeChild(r));
          return e;
        }
        E.extend({
          htmlPrefilter: function (e) {
            return e.replace(ke, "<$1></$2>");
          },
          clone: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a = e.cloneNode(!0),
              u = E.contains(e.ownerDocument, e);
            if (
              !(
                v.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                E.isXMLDoc(e)
              )
            )
              for (s = ge(a), r = 0, i = (o = ge(e)).length; r < i; r++)
                ze(o[r], s[r]);
            if (t)
              if (n)
                for (
                  o = o || ge(e), s = s || ge(a), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  qe(o[r], s[r]);
              else qe(e, a);
            return (
              (s = ge(a, "script")).length > 0 && ve(s, !u && ge(e, "script")),
              a
            );
          },
          cleanData: function (e) {
            for (
              var t, n, r, i = E.event.special, o = 0;
              void 0 !== (n = e[o]);
              o++
            )
              if (Q(n)) {
                if ((t = n[Z.expando])) {
                  if (t.events)
                    for (r in t.events)
                      i[r]
                        ? E.event.remove(n, r)
                        : E.removeEvent(n, r, t.handle);
                  n[Z.expando] = void 0;
                }
                n[K.expando] && (n[K.expando] = void 0);
              }
          },
        }),
          E.fn.extend({
            detach: function (e) {
              return Ie(this, e, !0);
            },
            remove: function (e) {
              return Ie(this, e);
            },
            text: function (e) {
              return U(
                this,
                function (e) {
                  return void 0 === e
                    ? E.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return He(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Oe(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return He(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = Oe(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return He(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (E.cleanData(ge(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return E.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return U(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !je.test(e) &&
                    !me[(he.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = E.htmlPrefilter(e);
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (E.cleanData(ge(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return He(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  E.inArray(this, e) < 0 &&
                    (E.cleanData(ge(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          E.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              E.fn[e] = function (e) {
                for (
                  var n, r = [], i = E(e), o = i.length - 1, s = 0;
                  s <= o;
                  s++
                )
                  (n = s === o ? this : this.clone(!0)),
                    E(i[s])[t](n),
                    c.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var Be = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
          _e = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = n), t.getComputedStyle(e);
          },
          Re = new RegExp(oe.join("|"), "i");
        function Fe(e, t, n) {
          var r,
            i,
            o,
            s,
            a = e.style;
          return (
            (n = n || _e(e)) &&
              ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                E.contains(e.ownerDocument, e) ||
                (s = E.style(e, t)),
              !v.pixelBoxStyles() &&
                Be.test(s) &&
                Re.test(t) &&
                ((r = a.width),
                (i = a.minWidth),
                (o = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = s),
                (s = n.width),
                (a.width = r),
                (a.minWidth = i),
                (a.maxWidth = o))),
            void 0 !== s ? s + "" : s
          );
        }
        function We(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (c) {
              (l.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (c.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                be.appendChild(l).appendChild(c);
              var e = n.getComputedStyle(c);
              (r = "1%" !== e.top),
                (u = 12 === t(e.marginLeft)),
                (c.style.right = "60%"),
                (a = 36 === t(e.right)),
                (i = 36 === t(e.width)),
                (c.style.position = "absolute"),
                (o = 36 === c.offsetWidth || "absolute"),
                be.removeChild(l),
                (c = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var r,
            i,
            o,
            a,
            u,
            l = s.createElement("div"),
            c = s.createElement("div");
          c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
            E.extend(v, {
              boxSizingReliable: function () {
                return e(), i;
              },
              pixelBoxStyles: function () {
                return e(), a;
              },
              pixelPosition: function () {
                return e(), r;
              },
              reliableMarginLeft: function () {
                return e(), u;
              },
              scrollboxSize: function () {
                return e(), o;
              },
            }));
        })();
        var $e = /^(none|table(?!-c[ea]).+)/,
          Ue = /^--/,
          Xe = { position: "absolute", visibility: "hidden", display: "block" },
          Ve = { letterSpacing: "0", fontWeight: "400" },
          Ge = ["Webkit", "Moz", "ms"],
          Ye = s.createElement("div").style;
        function Qe(e) {
          var t = E.cssProps[e];
          return (
            t ||
              (t = E.cssProps[e] =
                (function (e) {
                  if (e in Ye) return e;
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                    n--;

                  )
                    if ((e = Ge[n] + t) in Ye) return e;
                })(e) || e),
            t
          );
        }
        function Je(e, t, n) {
          var r = ie.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function Ze(e, t, n, r, i, o) {
          var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; s < 4; s += 2)
            "margin" === n && (u += E.css(e, n + oe[s], !0, i)),
              r
                ? ("content" === n && (u -= E.css(e, "padding" + oe[s], !0, i)),
                  "margin" !== n &&
                    (u -= E.css(e, "border" + oe[s] + "Width", !0, i)))
                : ((u += E.css(e, "padding" + oe[s], !0, i)),
                  "padding" !== n
                    ? (u += E.css(e, "border" + oe[s] + "Width", !0, i))
                    : (a += E.css(e, "border" + oe[s] + "Width", !0, i)));
          return (
            !r &&
              o >= 0 &&
              (u += Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    u -
                    a -
                    0.5
                )
              )),
            u
          );
        }
        function Ke(e, t, n) {
          var r = _e(e),
            i = Fe(e, t, r),
            o = "border-box" === E.css(e, "boxSizing", !1, r),
            s = o;
          if (Be.test(i)) {
            if (!n) return i;
            i = "auto";
          }
          return (
            (s = s && (v.boxSizingReliable() || i === e.style[t])),
            ("auto" === i ||
              (!parseFloat(i) && "inline" === E.css(e, "display", !1, r))) &&
              ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
            (i = parseFloat(i) || 0) +
              Ze(e, t, n || (o ? "border" : "content"), s, r, i) +
              "px"
          );
        }
        function et(e, t, n, r, i) {
          return new et.prototype.init(e, t, n, r, i);
        }
        E.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Fe(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                s,
                a = Y(t),
                u = Ue.test(t),
                l = e.style;
              if (
                (u || (t = Qe(a)),
                (s = E.cssHooks[t] || E.cssHooks[a]),
                void 0 === n)
              )
                return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                  ? i
                  : l[t];
              "string" === (o = typeof n) &&
                (i = ie.exec(n)) &&
                i[1] &&
                ((n = ue(e, t, i)), (o = "number")),
                null != n &&
                  n == n &&
                  ("number" === o &&
                    (n += (i && i[3]) || (E.cssNumber[a] ? "" : "px")),
                  v.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (l[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                    (u ? l.setProperty(t, n) : (l[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              s,
              a = Y(t);
            return (
              Ue.test(t) || (t = Qe(a)),
              (s = E.cssHooks[t] || E.cssHooks[a]) &&
                "get" in s &&
                (i = s.get(e, !0, n)),
              void 0 === i && (i = Fe(e, t, r)),
              "normal" === i && t in Ve && (i = Ve[t]),
              "" === n || n
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i
            );
          },
        }),
          E.each(["height", "width"], function (e, t) {
            E.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !$e.test(E.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? Ke(e, t, r)
                    : ae(e, Xe, function () {
                        return Ke(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var i,
                  o = _e(e),
                  s = "border-box" === E.css(e, "boxSizing", !1, o),
                  a = r && Ze(e, t, r, s, o);
                return (
                  s &&
                    v.scrollboxSize() === o.position &&
                    (a -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(o[t]) -
                        Ze(e, t, "border", !1, o) -
                        0.5
                    )),
                  a &&
                    (i = ie.exec(n)) &&
                    "px" !== (i[3] || "px") &&
                    ((e.style[t] = n), (n = E.css(e, t))),
                  Je(0, n, a)
                );
              },
            };
          }),
          (E.cssHooks.marginLeft = We(v.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Fe(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    ae(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          E.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (E.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                  r < 4;
                  r++
                )
                  i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
              },
            }),
              "margin" !== e && (E.cssHooks[e + t].set = Je);
          }),
          E.fn.extend({
            css: function (e, t) {
              return U(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    s = 0;
                  if (Array.isArray(t)) {
                    for (r = _e(e), i = t.length; s < i; s++)
                      o[t[s]] = E.css(e, t[s], !1, r);
                    return o;
                  }
                  return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (E.Tween = et),
          (et.prototype = {
            constructor: et,
            init: function (e, t, n, r, i, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || E.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (E.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = et.propHooks[this.prop];
              return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = et.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      E.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : et.propHooks._default.set(this),
                this
              );
            },
          }),
          (et.prototype.init.prototype = et.prototype),
          (et.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                E.fx.step[e.prop]
                  ? E.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (null == e.elem.style[E.cssProps[e.prop]] &&
                      !E.cssHooks[e.prop])
                  ? (e.elem[e.prop] = e.now)
                  : E.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (et.propHooks.scrollTop = et.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (E.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (E.fx = et.prototype.init),
          (E.fx.step = {});
        var tt,
          nt,
          rt = /^(?:toggle|show|hide)$/,
          it = /queueHooks$/;
        function ot() {
          nt &&
            (!1 === s.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(ot)
              : n.setTimeout(ot, E.fx.interval),
            E.fx.tick());
        }
        function st() {
          return (
            n.setTimeout(function () {
              tt = void 0;
            }),
            (tt = Date.now())
          );
        }
        function at(e, t) {
          var n,
            r = 0,
            i = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
          return t && (i.opacity = i.width = e), i;
        }
        function ut(e, t, n) {
          for (
            var r,
              i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
              o = 0,
              s = i.length;
            o < s;
            o++
          )
            if ((r = i[o].call(n, t, e))) return r;
        }
        function lt(e, t, n) {
          var r,
            i,
            o = 0,
            s = lt.prefilters.length,
            a = E.Deferred().always(function () {
              delete u.elem;
            }),
            u = function () {
              if (i) return !1;
              for (
                var t = tt || st(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  r = 1 - (n / l.duration || 0),
                  o = 0,
                  s = l.tweens.length;
                o < s;
                o++
              )
                l.tweens[o].run(r);
              return (
                a.notifyWith(e, [l, r, n]),
                r < 1 && s
                  ? n
                  : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
              );
            },
            l = a.promise({
              elem: e,
              props: E.extend({}, t),
              opts: E.extend(
                !0,
                { specialEasing: {}, easing: E.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: tt || st(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = E.Tween(
                  e,
                  l.opts,
                  t,
                  n,
                  l.opts.specialEasing[t] || l.opts.easing
                );
                return l.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return (
                  t
                    ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
                    : a.rejectWith(e, [l, t]),
                  this
                );
              },
            }),
            c = l.props;
          for (
            !(function (e, t) {
              var n, r, i, o, s;
              for (n in e)
                if (
                  ((i = t[(r = Y(n))]),
                  (o = e[n]),
                  Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                  n !== r && ((e[r] = o), delete e[n]),
                  (s = E.cssHooks[r]) && ("expand" in s))
                )
                  for (n in ((o = s.expand(o)), delete e[r], o))
                    (n in e) || ((e[n] = o[n]), (t[n] = i));
                else t[r] = i;
            })(c, l.opts.specialEasing);
            o < s;
            o++
          )
            if ((r = lt.prefilters[o].call(l, e, c, l.opts)))
              return (
                y(r.stop) &&
                  (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            E.map(c, ut, l),
            y(l.opts.start) && l.opts.start.call(e, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            E.fx.timer(E.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
          );
        }
        (E.Animation = E.extend(lt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            y(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = e[r]),
                (lt.tweeners[n] = lt.tweeners[n] || []),
                lt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                l,
                c,
                f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                m = e.nodeType && se(e),
                g = Z.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (s = E._queueHooks(e, "fx")).unqueued &&
                  ((s.unqueued = 0),
                  (a = s.empty.fire),
                  (s.empty.fire = function () {
                    s.unqueued || a();
                  })),
                s.unqueued++,
                d.always(function () {
                  d.always(function () {
                    s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
                  });
                })),
              t))
                if (((i = t[r]), rt.test(i))) {
                  if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (m ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    m = !0;
                  }
                  h[r] = (g && g[r]) || E.style(e, r);
                }
              if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                  null == (l = g && g.display) && (l = Z.get(e, "display")),
                  "none" === (c = E.css(e, "display")) &&
                    (l
                      ? (c = l)
                      : (fe([e], !0),
                        (l = e.style.display || l),
                        (c = E.css(e, "display")),
                        fe([e]))),
                  ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === E.css(e, "float") &&
                    (u ||
                      (d.done(function () {
                        p.display = l;
                      }),
                      null == l &&
                        ((c = p.display), (l = "none" === c ? "" : c))),
                    (p.display = "inline-block"))),
                n.overflow &&
                  ((p.overflow = "hidden"),
                  d.always(function () {
                    (p.overflow = n.overflow[0]),
                      (p.overflowX = n.overflow[1]),
                      (p.overflowY = n.overflow[2]);
                  })),
                (u = !1),
                h))
                  u ||
                    (g
                      ? "hidden" in g && (m = g.hidden)
                      : (g = Z.access(e, "fxshow", { display: l })),
                    o && (g.hidden = !m),
                    m && fe([e], !0),
                    d.done(function () {
                      for (r in (m || fe([e]), Z.remove(e, "fxshow"), h))
                        E.style(e, r, h[r]);
                    })),
                    (u = ut(m ? g[r] : 0, r, d)),
                    r in g ||
                      ((g[r] = u.start),
                      m && ((u.end = u.start), (u.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
          },
        })),
          (E.speed = function (e, t, n) {
            var r =
              e && "object" == typeof e
                ? E.extend({}, e)
                : {
                    complete: n || (!n && t) || (y(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !y(t) && t),
                  };
            return (
              E.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                  (r.duration in E.fx.speeds
                    ? (r.duration = E.fx.speeds[r.duration])
                    : (r.duration = E.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                y(r.old) && r.old.call(this),
                  r.queue && E.dequeue(this, r.queue);
              }),
              r
            );
          }),
          E.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(se)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = E.isEmptyObject(e),
                o = E.speed(t, n, r),
                s = function () {
                  var t = lt(this, E.extend({}, e), o);
                  (i || Z.get(this, "finish")) && t.stop(!0);
                };
              return (
                (s.finish = s),
                i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
              );
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    o = E.timers,
                    s = Z.get(this);
                  if (i) s[i] && s[i].stop && r(s[i]);
                  else for (i in s) s[i] && s[i].stop && it.test(i) && r(s[i]);
                  for (i = o.length; i--; )
                    o[i].elem !== this ||
                      (null != e && o[i].queue !== e) ||
                      (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (!t && n) || E.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Z.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = E.timers,
                    s = r ? r.length : 0;
                  for (
                    n.finish = !0,
                      E.queue(this, e, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this &&
                      o[t].queue === e &&
                      (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          E.each(["toggle", "show", "hide"], function (e, t) {
            var n = E.fn[t];
            E.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(at(t, !0), e, r, i);
            };
          }),
          E.each(
            {
              slideDown: at("show"),
              slideUp: at("hide"),
              slideToggle: at("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              E.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (E.timers = []),
          (E.fx.tick = function () {
            var e,
              t = 0,
              n = E.timers;
            for (tt = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), (tt = void 0);
          }),
          (E.fx.timer = function (e) {
            E.timers.push(e), E.fx.start();
          }),
          (E.fx.interval = 13),
          (E.fx.start = function () {
            nt || ((nt = !0), ot());
          }),
          (E.fx.stop = function () {
            nt = null;
          }),
          (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (E.fn.delay = function (e, t) {
            return (
              (e = (E.fx && E.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function () {
                  n.clearTimeout(i);
                };
              })
            );
          }),
          (function () {
            var e = s.createElement("input"),
              t = s
                .createElement("select")
                .appendChild(s.createElement("option"));
            (e.type = "checkbox"),
              (v.checkOn = "" !== e.value),
              (v.optSelected = t.selected),
              ((e = s.createElement("input")).value = "t"),
              (e.type = "radio"),
              (v.radioValue = "t" === e.value);
          })();
        var ct,
          ft = E.expr.attrHandle;
        E.fn.extend({
          attr: function (e, t) {
            return U(this, E.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              E.removeAttr(this, e);
            });
          },
        }),
          E.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? E.prop(e, t, n)
                  : ((1 === o && E.isXMLDoc(e)) ||
                      (i =
                        E.attrHooks[t.toLowerCase()] ||
                        (E.expr.match.bool.test(t) ? ct : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void E.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : null == (r = E.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!v.radioValue && "radio" === t && D(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(I);
              if (i && 1 === e.nodeType)
                for (; (n = i[r++]); ) e.removeAttribute(n);
            },
          }),
          (ct = {
            set: function (e, t, n) {
              return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ft[t] || E.find.attr;
            ft[t] = function (e, t, r) {
              var i,
                o,
                s = t.toLowerCase();
              return (
                r ||
                  ((o = ft[s]),
                  (ft[s] = i),
                  (i = null != n(e, t, r) ? s : null),
                  (ft[s] = o)),
                i
              );
            };
          });
        var dt = /^(?:input|select|textarea|button)$/i,
          ht = /^(?:a|area)$/i;
        function pt(e) {
          return (e.match(I) || []).join(" ");
        }
        function mt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function gt(e) {
          return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(I)) || [];
        }
        E.fn.extend({
          prop: function (e, t) {
            return U(this, E.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[E.propFix[e] || e];
            });
          },
        }),
          E.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && E.isXMLDoc(e)) ||
                    ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                  void 0 !== n
                    ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = E.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : dt.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          v.optSelected ||
            (E.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          E.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              E.propFix[this.toLowerCase()] = this;
            }
          ),
          E.fn.extend({
            addClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u = 0;
              if (y(e))
                return this.each(function (t) {
                  E(this).addClass(e.call(this, t, mt(this)));
                });
              if ((t = gt(e)).length)
                for (; (n = this[u++]); )
                  if (
                    ((i = mt(n)), (r = 1 === n.nodeType && " " + pt(i) + " "))
                  ) {
                    for (s = 0; (o = t[s++]); )
                      r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (a = pt(r)) && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u = 0;
              if (y(e))
                return this.each(function (t) {
                  E(this).removeClass(e.call(this, t, mt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = gt(e)).length)
                for (; (n = this[u++]); )
                  if (
                    ((i = mt(n)), (r = 1 === n.nodeType && " " + pt(i) + " "))
                  ) {
                    for (s = 0; (o = t[s++]); )
                      for (; r.indexOf(" " + o + " ") > -1; )
                        r = r.replace(" " + o + " ", " ");
                    i !== (a = pt(r)) && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : y(e)
                ? this.each(function (n) {
                    E(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function () {
                    var t, i, o, s;
                    if (r)
                      for (i = 0, o = E(this), s = gt(e); (t = s[i++]); )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = mt(this)) && Z.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : Z.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (1 === n.nodeType && (" " + pt(mt(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var vt = /\r/g;
        E.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = y(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, E(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = E.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      E.valHooks[this.type] ||
                      E.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                }))
              : i
              ? (t =
                  E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" == typeof (n = i.value)
                ? n.replace(vt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          E.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = E.find.attr(e, "value");
                  return null != t ? t : pt(E.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    s = "select-one" === e.type,
                    a = s ? null : [],
                    u = s ? o + 1 : i.length;
                  for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                    if (
                      ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                    ) {
                      if (((t = E(n).val()), s)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function (e, t) {
                  for (
                    var n, r, i = e.options, o = E.makeArray(t), s = i.length;
                    s--;

                  )
                    ((r = i[s]).selected =
                      E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          E.each(["radio", "checkbox"], function () {
            (E.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = E.inArray(E(e).val(), t) > -1);
              },
            }),
              v.checkOn ||
                (E.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (v.focusin = "onfocusin" in n);
        var yt = /^(?:focusinfocus|focusoutblur)$/,
          xt = function (e) {
            e.stopPropagation();
          };
        E.extend(E.event, {
          trigger: function (e, t, r, i) {
            var o,
              a,
              u,
              l,
              c,
              f,
              d,
              h,
              m = [r || s],
              g = p.call(e, "type") ? e.type : e,
              v = p.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((a = h = u = r = r || s),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !yt.test(g + E.event.triggered) &&
                (g.indexOf(".") > -1 &&
                  ((g = (v = g.split(".")).shift()), v.sort()),
                (c = g.indexOf(":") < 0 && "on" + g),
                ((e = e[E.expando]
                  ? e
                  : new E.Event(g, "object" == typeof e && e)).isTrigger = i
                  ? 2
                  : 3),
                (e.namespace = v.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = r),
                (t = null == t ? [e] : E.makeArray(t, [e])),
                (d = E.event.special[g] || {}),
                i || !d.trigger || !1 !== d.trigger.apply(r, t)))
            ) {
              if (!i && !d.noBubble && !x(r)) {
                for (
                  l = d.delegateType || g, yt.test(l + g) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  m.push(a), (u = a);
                u === (r.ownerDocument || s) &&
                  m.push(u.defaultView || u.parentWindow || n);
              }
              for (o = 0; (a = m[o++]) && !e.isPropagationStopped(); )
                (h = a),
                  (e.type = o > 1 ? l : d.bindType || g),
                  (f =
                    (Z.get(a, "events") || {})[e.type] && Z.get(a, "handle")) &&
                    f.apply(a, t),
                  (f = c && a[c]) &&
                    f.apply &&
                    Q(a) &&
                    ((e.result = f.apply(a, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = g),
                i ||
                  e.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(m.pop(), t)) ||
                  !Q(r) ||
                  (c &&
                    y(r[g]) &&
                    !x(r) &&
                    ((u = r[c]) && (r[c] = null),
                    (E.event.triggered = g),
                    e.isPropagationStopped() && h.addEventListener(g, xt),
                    r[g](),
                    e.isPropagationStopped() && h.removeEventListener(g, xt),
                    (E.event.triggered = void 0),
                    u && (r[c] = u))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
            E.event.trigger(r, null, t);
          },
        }),
          E.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                E.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return E.event.trigger(e, t, n, !0);
            },
          }),
          v.focusin ||
            E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                E.event.simulate(t, e.target, E.event.fix(e));
              };
              E.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this,
                    i = Z.access(r, t);
                  i || r.addEventListener(e, n, !0),
                    Z.access(r, t, (i || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this,
                    i = Z.access(r, t) - 1;
                  i
                    ? Z.access(r, t, i)
                    : (r.removeEventListener(e, n, !0), Z.remove(r, t));
                },
              };
            });
        var bt = n.location,
          wt = Date.now(),
          Ct = /\?/;
        E.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new n.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              E.error("Invalid XML: " + e),
            t
          );
        };
        var Et = /\[\]$/,
          St = /\r?\n/g,
          Tt = /^(?:submit|button|image|reset|file)$/i,
          At = /^(?:input|select|textarea|keygen)/i;
        function Nt(e, t, n, r) {
          var i;
          if (Array.isArray(t))
            E.each(t, function (t, i) {
              n || Et.test(e)
                ? r(e, i)
                : Nt(
                    e +
                      "[" +
                      ("object" == typeof i && null != i ? t : "") +
                      "]",
                    i,
                    n,
                    r
                  );
            });
          else if (n || "object" !== C(t)) r(e, t);
          else for (i in t) Nt(e + "[" + i + "]", t[i], n, r);
        }
        (E.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              var n = y(t) ? t() : t;
              r[r.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
            E.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) Nt(n, e[n], t, i);
          return r.join("&");
        }),
          E.fn.extend({
            serialize: function () {
              return E.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !E(this).is(":disabled") &&
                    At.test(this.nodeName) &&
                    !Tt.test(e) &&
                    (this.checked || !de.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = E(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? E.map(n, function (e) {
                        return { name: t.name, value: e.replace(St, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(St, "\r\n") };
                })
                .get();
            },
          });
        var kt = /%20/g,
          jt = /#.*$/,
          Dt = /([?&])_=[^&]*/,
          Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ot = /^(?:GET|HEAD)$/,
          Mt = /^\/\//,
          Pt = {},
          qt = {},
          zt = "*/".concat("*"),
          Ht = s.createElement("a");
        function It(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(I) || [];
            if (y(n))
              for (; (r = o[i++]); )
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n);
          };
        }
        function Bt(e, t, n, r) {
          var i = {},
            o = e === qt;
          function s(a) {
            var u;
            return (
              (i[a] = !0),
              E.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l]
                  ? o
                    ? !(u = l)
                    : void 0
                  : (t.dataTypes.unshift(l), s(l), !1);
              }),
              u
            );
          }
          return s(t.dataTypes[0]) || (!i["*"] && s("*"));
        }
        function _t(e, t) {
          var n,
            r,
            i = E.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && E.extend(!0, e, r), e;
        }
        (Ht.href = bt.href),
          E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: bt.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  bt.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? _t(_t(e, E.ajaxSettings), t) : _t(E.ajaxSettings, e);
            },
            ajaxPrefilter: It(Pt),
            ajaxTransport: It(qt),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var r,
                i,
                o,
                a,
                u,
                l,
                c,
                f,
                d,
                h,
                p = E.ajaxSetup({}, t),
                m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? E(m) : E.event,
                v = E.Deferred(),
                y = E.Callbacks("once memory"),
                x = p.statusCode || {},
                b = {},
                w = {},
                C = "canceled",
                S = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (c) {
                      if (!a)
                        for (a = {}; (t = Lt.exec(o)); )
                          a[t[1].toLowerCase()] = t[2];
                      t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                  },
                  getAllResponseHeaders: function () {
                    return c ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == c &&
                        ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                        (b[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == c && (p.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (c) S.always(e[S.status]);
                      else for (t in e) x[t] = [x[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || C;
                    return r && r.abort(t), T(0, t), this;
                  },
                };
              if (
                (v.promise(S),
                (p.url = ((e || p.url || bt.href) + "").replace(
                  Mt,
                  bt.protocol + "//"
                )),
                (p.type = t.method || t.type || p.method || p.type),
                (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [
                  "",
                ]),
                null == p.crossDomain)
              ) {
                l = s.createElement("a");
                try {
                  (l.href = p.url),
                    (l.href = l.href),
                    (p.crossDomain =
                      Ht.protocol + "//" + Ht.host !=
                      l.protocol + "//" + l.host);
                } catch (e) {
                  p.crossDomain = !0;
                }
              }
              if (
                (p.data &&
                  p.processData &&
                  "string" != typeof p.data &&
                  (p.data = E.param(p.data, p.traditional)),
                Bt(Pt, p, t, S),
                c)
              )
                return S;
              for (d in ((f = E.event && p.global) &&
                0 == E.active++ &&
                E.event.trigger("ajaxStart"),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !Ot.test(p.type)),
              (i = p.url.replace(jt, "")),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (p.data = p.data.replace(kt, "+"))
                : ((h = p.url.slice(i.length)),
                  p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((i += (Ct.test(i) ? "&" : "?") + p.data), delete p.data),
                  !1 === p.cache &&
                    ((i = i.replace(Dt, "$1")),
                    (h = (Ct.test(i) ? "&" : "?") + "_=" + wt++ + h)),
                  (p.url = i + h)),
              p.ifModified &&
                (E.lastModified[i] &&
                  S.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                E.etag[i] && S.setRequestHeader("If-None-Match", E.etag[i])),
              ((p.data && p.hasContent && !1 !== p.contentType) ||
                t.contentType) &&
                S.setRequestHeader("Content-Type", p.contentType),
              S.setRequestHeader(
                "Accept",
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
                  : p.accepts["*"]
              ),
              p.headers))
                S.setRequestHeader(d, p.headers[d]);
              if (p.beforeSend && (!1 === p.beforeSend.call(m, S, p) || c))
                return S.abort();
              if (
                ((C = "abort"),
                y.add(p.complete),
                S.done(p.success),
                S.fail(p.error),
                (r = Bt(qt, p, t, S)))
              ) {
                if (((S.readyState = 1), f && g.trigger("ajaxSend", [S, p]), c))
                  return S;
                p.async &&
                  p.timeout > 0 &&
                  (u = n.setTimeout(function () {
                    S.abort("timeout");
                  }, p.timeout));
                try {
                  (c = !1), r.send(b, T);
                } catch (e) {
                  if (c) throw e;
                  T(-1, e);
                }
              } else T(-1, "No Transport");
              function T(e, t, s, a) {
                var l,
                  d,
                  h,
                  b,
                  w,
                  C = t;
                c ||
                  ((c = !0),
                  u && n.clearTimeout(u),
                  (r = void 0),
                  (o = a || ""),
                  (S.readyState = e > 0 ? 4 : 0),
                  (l = (e >= 200 && e < 300) || 304 === e),
                  s &&
                    (b = (function (e, t, n) {
                      for (
                        var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];

                      )
                        u.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in a)
                          if (a[i] && a[i].test(r)) {
                            u.unshift(i);
                            break;
                          }
                      if (u[0] in n) o = u[0];
                      else {
                        for (i in n) {
                          if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break;
                          }
                          s || (s = i);
                        }
                        o = o || s;
                      }
                      if (o) return o !== u[0] && u.unshift(o), n[o];
                    })(p, S, s)),
                  (b = (function (e, t, n, r) {
                    var i,
                      o,
                      s,
                      a,
                      u,
                      l = {},
                      c = e.dataTypes.slice();
                    if (c[1])
                      for (s in e.converters)
                        l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; )
                      if (
                        (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (u = o),
                        (o = c.shift()))
                      )
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                          if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                              if (
                                (a = i.split(" "))[1] === o &&
                                (s = l[u + " " + a[0]] || l["* " + a[0]])
                              ) {
                                !0 === s
                                  ? (s = l[i])
                                  : !0 !== l[i] &&
                                    ((o = a[0]), c.unshift(a[1]));
                                break;
                              }
                          if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else
                              try {
                                t = s(t);
                              } catch (e) {
                                return {
                                  state: "parsererror",
                                  error: s
                                    ? e
                                    : "No conversion from " + u + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(p, b, S, l)),
                  l
                    ? (p.ifModified &&
                        ((w = S.getResponseHeader("Last-Modified")) &&
                          (E.lastModified[i] = w),
                        (w = S.getResponseHeader("etag")) && (E.etag[i] = w)),
                      204 === e || "HEAD" === p.type
                        ? (C = "nocontent")
                        : 304 === e
                        ? (C = "notmodified")
                        : ((C = b.state), (d = b.data), (l = !(h = b.error))))
                    : ((h = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                  (S.status = e),
                  (S.statusText = (t || C) + ""),
                  l ? v.resolveWith(m, [d, C, S]) : v.rejectWith(m, [S, C, h]),
                  S.statusCode(x),
                  (x = void 0),
                  f &&
                    g.trigger(l ? "ajaxSuccess" : "ajaxError", [
                      S,
                      p,
                      l ? d : h,
                    ]),
                  y.fireWith(m, [S, C]),
                  f &&
                    (g.trigger("ajaxComplete", [S, p]),
                    --E.active || E.event.trigger("ajaxStop")));
              }
              return S;
            },
            getJSON: function (e, t, n) {
              return E.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return E.get(e, void 0, t, "script");
            },
          }),
          E.each(["get", "post"], function (e, t) {
            E[t] = function (e, n, r, i) {
              return (
                y(n) && ((i = i || r), (r = n), (n = void 0)),
                E.ajax(
                  E.extend(
                    { url: e, type: t, dataType: i, data: n, success: r },
                    E.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          (E._evalUrl = function (e) {
            return E.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              throws: !0,
            });
          }),
          E.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (y(e) && (e = e.call(this[0])),
                  (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return y(e)
                ? this.each(function (t) {
                    E(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = E(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = y(e);
              return this.each(function (n) {
                E(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    E(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (E.expr.pseudos.hidden = function (e) {
            return !E.expr.pseudos.visible(e);
          }),
          (E.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (E.ajaxSettings.xhr = function () {
            try {
              return new n.XMLHttpRequest();
            } catch (e) {}
          });
        var Rt = { 0: 200, 1223: 204 },
          Ft = E.ajaxSettings.xhr();
        (v.cors = !!Ft && "withCredentials" in Ft),
          (v.ajax = Ft = !!Ft),
          E.ajaxTransport(function (e) {
            var t, r;
            if (v.cors || (Ft && !e.crossDomain))
              return {
                send: function (i, o) {
                  var s,
                    a = e.xhr();
                  if (
                    (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                  for (s in (e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest"),
                  i))
                    a.setRequestHeader(s, i[s]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          r =
                          a.onload =
                          a.onerror =
                          a.onabort =
                          a.ontimeout =
                          a.onreadystatechange =
                            null),
                        "abort" === e
                          ? a.abort()
                          : "error" === e
                          ? "number" != typeof a.status
                            ? o(0, "error")
                            : o(a.status, a.statusText)
                          : o(
                              Rt[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") ||
                                "string" != typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (a.onload = t()),
                    (r = a.onerror = a.ontimeout = t("error")),
                    void 0 !== a.onabort
                      ? (a.onabort = r)
                      : (a.onreadystatechange = function () {
                          4 === a.readyState &&
                            n.setTimeout(function () {
                              t && r();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    a.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          E.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          E.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return E.globalEval(e), e;
              },
            },
          }),
          E.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          E.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain)
              return {
                send: function (r, i) {
                  (t = E("<script>")
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && i("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    s.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Wt = [],
          $t = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Wt.pop() || E.expando + "_" + wt++;
            return (this[e] = !0), e;
          },
        }),
          E.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i,
              o,
              s,
              a =
                !1 !== e.jsonp &&
                ($t.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    $t.test(e.data) &&
                    "data");
            if (a || "jsonp" === e.dataTypes[0])
              return (
                (i = e.jsonpCallback =
                  y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace($t, "$1" + i))
                  : !1 !== e.jsonp &&
                    (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                (e.converters["script json"] = function () {
                  return s || E.error(i + " was not called"), s[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = n[i]),
                (n[i] = function () {
                  s = arguments;
                }),
                r.always(function () {
                  void 0 === o ? E(n).removeProp(i) : (n[i] = o),
                    e[i] && ((e.jsonpCallback = t.jsonpCallback), Wt.push(i)),
                    s && y(o) && o(s[0]),
                    (s = o = void 0);
                }),
                "script"
              );
          }),
          (v.createHTMLDocument = (function () {
            var e = s.implementation.createHTMLDocument("").body;
            return (
              (e.innerHTML = "<form></form><form></form>"),
              2 === e.childNodes.length
            );
          })()),
          (E.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (v.createHTMLDocument
                    ? (((r = (t =
                        s.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = s.location.href),
                      t.head.appendChild(r))
                    : (t = s)),
                (i = L.exec(e)),
                (o = !n && []),
                i
                  ? [t.createElement(i[1])]
                  : ((i = xe([e], t, o)),
                    o && o.length && E(o).remove(),
                    E.merge([], i.childNodes)));
            var r, i, o;
          }),
          (E.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              s = this,
              a = e.indexOf(" ");
            return (
              a > -1 && ((r = pt(e.slice(a))), (e = e.slice(0, a))),
              y(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (i = "POST"),
              s.length > 0 &&
                E.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (o = arguments),
                      s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        s.each(function () {
                          n.apply(this, o || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          E.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              E.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          (E.expr.pseudos.animated = function (e) {
            return E.grep(E.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (E.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                l = E.css(e, "position"),
                c = E(e),
                f = {};
              "static" === l && (e.style.position = "relative"),
                (a = c.offset()),
                (o = E.css(e, "top")),
                (u = E.css(e, "left")),
                ("absolute" === l || "fixed" === l) &&
                (o + u).indexOf("auto") > -1
                  ? ((s = (r = c.position()).top), (i = r.left))
                  : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                y(t) && (t = t.call(e, n, E.extend({}, a))),
                null != t.top && (f.top = t.top - a.top + s),
                null != t.left && (f.left = t.left - a.left + i),
                "using" in t ? t.using.call(e, f) : c.css(f);
            },
          }),
          E.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      E.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === E.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === E.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((i = E(e).offset()).top += E.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (i.left += E.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - i.top - E.css(r, "marginTop", !0),
                  left: t.left - i.left - E.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === E.css(e, "position");

                )
                  e = e.offsetParent;
                return e || be;
              });
            },
          }),
          E.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              E.fn[e] = function (r) {
                return U(
                  this,
                  function (e, r, i) {
                    var o;
                    if (
                      (x(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                      void 0 === i)
                    )
                      return o ? o[t] : e[r];
                    o
                      ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                      : (e[r] = i);
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }
          ),
          E.each(["top", "left"], function (e, t) {
            E.cssHooks[t] = We(v.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = Fe(e, t)), Be.test(n) ? E(e).position()[t] + "px" : n
                );
            });
          }),
          E.each({ Height: "height", Width: "width" }, function (e, t) {
            E.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, r) {
                E.fn[r] = function (i, o) {
                  var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                  return U(
                    this,
                    function (t, n, i) {
                      var o;
                      return x(t)
                        ? 0 === r.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            o["scroll" + e],
                            t.body["offset" + e],
                            o["offset" + e],
                            o["client" + e]
                          ))
                        : void 0 === i
                        ? E.css(t, n, a)
                        : E.style(t, n, i, a);
                    },
                    t,
                    s ? i : void 0,
                    s
                  );
                };
              }
            );
          }),
          E.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              E.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          ),
          E.fn.extend({
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          E.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
          }),
          (E.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = u.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, r.concat(u.call(arguments)));
                }).guid = e.guid =
                  e.guid || E.guid++),
                i
              );
          }),
          (E.holdReady = function (e) {
            e ? E.readyWait++ : E.ready(!0);
          }),
          (E.isArray = Array.isArray),
          (E.parseJSON = JSON.parse),
          (E.nodeName = D),
          (E.isFunction = y),
          (E.isWindow = x),
          (E.camelCase = Y),
          (E.type = C),
          (E.now = Date.now),
          (E.isNumeric = function (e) {
            var t = E.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          void 0 ===
            (r = function () {
              return E;
            }.apply(t, [])) || (e.exports = r);
        var Ut = n.jQuery,
          Xt = n.$;
        return (
          (E.noConflict = function (e) {
            return (
              n.$ === E && (n.$ = Xt), e && n.jQuery === E && (n.jQuery = Ut), E
            );
          }),
          i || (n.jQuery = n.$ = E),
          E
        );
      });
    },
    ,
    function (e, t, n) {
      var r;
      !(function (n, i) {
        void 0 ===
          (r = function () {
            return (n.Chartist = (function () {
              var e = { version: "0.11.0" };
              return (
                (function (e, t, n) {
                  "use strict";
                  (n.namespaces = {
                    svg: "http://www.w3.org/2000/svg",
                    xmlns: "http://www.w3.org/2000/xmlns/",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    ct: "http://gionkunz.github.com/chartist-js/ct",
                  }),
                    (n.noop = function (e) {
                      return e;
                    }),
                    (n.alphaNumerate = function (e) {
                      return String.fromCharCode(97 + (e % 26));
                    }),
                    (n.extend = function (e) {
                      var t, r, i;
                      for (e = e || {}, t = 1; t < arguments.length; t++)
                        for (var o in (r = arguments[t]))
                          "object" != typeof (i = r[o]) ||
                          null === i ||
                          i instanceof Array
                            ? (e[o] = i)
                            : (e[o] = n.extend(e[o], i));
                      return e;
                    }),
                    (n.replaceAll = function (e, t, n) {
                      return e.replace(new RegExp(t, "g"), n);
                    }),
                    (n.ensureUnit = function (e, t) {
                      return "number" == typeof e && (e += t), e;
                    }),
                    (n.quantity = function (e) {
                      if ("string" == typeof e) {
                        var t = /^(\d+)\s*(.*)$/g.exec(e);
                        return { value: +t[1], unit: t[2] || void 0 };
                      }
                      return { value: e };
                    }),
                    (n.querySelector = function (e) {
                      return e instanceof Node ? e : t.querySelector(e);
                    }),
                    (n.times = function (e) {
                      return Array.apply(null, new Array(e));
                    }),
                    (n.sum = function (e, t) {
                      return e + (t || 0);
                    }),
                    (n.mapMultiply = function (e) {
                      return function (t) {
                        return t * e;
                      };
                    }),
                    (n.mapAdd = function (e) {
                      return function (t) {
                        return t + e;
                      };
                    }),
                    (n.serialMap = function (e, t) {
                      var r = [],
                        i = Math.max.apply(
                          null,
                          e.map(function (e) {
                            return e.length;
                          })
                        );
                      return (
                        n.times(i).forEach(function (n, i) {
                          var o = e.map(function (e) {
                            return e[i];
                          });
                          r[i] = t.apply(null, o);
                        }),
                        r
                      );
                    }),
                    (n.roundWithPrecision = function (e, t) {
                      var r = Math.pow(10, t || n.precision);
                      return Math.round(e * r) / r;
                    }),
                    (n.precision = 8),
                    (n.escapingMap = {
                      "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      '"': "&quot;",
                      "'": "&#039;",
                    }),
                    (n.serialize = function (e) {
                      return null === e || void 0 === e
                        ? e
                        : ("number" == typeof e
                            ? (e = "" + e)
                            : "object" == typeof e &&
                              (e = JSON.stringify({ data: e })),
                          Object.keys(n.escapingMap).reduce(function (e, t) {
                            return n.replaceAll(e, t, n.escapingMap[t]);
                          }, e));
                    }),
                    (n.deserialize = function (e) {
                      if ("string" != typeof e) return e;
                      e = Object.keys(n.escapingMap).reduce(function (e, t) {
                        return n.replaceAll(e, n.escapingMap[t], t);
                      }, e);
                      try {
                        e = void 0 !== (e = JSON.parse(e)).data ? e.data : e;
                      } catch (e) {}
                      return e;
                    }),
                    (n.createSvg = function (e, t, r, i) {
                      var o;
                      return (
                        (t = t || "100%"),
                        (r = r || "100%"),
                        Array.prototype.slice
                          .call(e.querySelectorAll("svg"))
                          .filter(function (e) {
                            return e.getAttributeNS(n.namespaces.xmlns, "ct");
                          })
                          .forEach(function (t) {
                            e.removeChild(t);
                          }),
                        ((o = new n.Svg("svg")
                          .attr({ width: t, height: r })
                          .addClass(i))._node.style.width = t),
                        (o._node.style.height = r),
                        e.appendChild(o._node),
                        o
                      );
                    }),
                    (n.normalizeData = function (e, t, r) {
                      var i,
                        o = { raw: e, normalized: {} };
                      return (
                        (o.normalized.series = n.getDataArray(
                          { series: e.series || [] },
                          t,
                          r
                        )),
                        (i = o.normalized.series.every(function (e) {
                          return e instanceof Array;
                        })
                          ? Math.max.apply(
                              null,
                              o.normalized.series.map(function (e) {
                                return e.length;
                              })
                            )
                          : o.normalized.series.length),
                        (o.normalized.labels = (e.labels || []).slice()),
                        Array.prototype.push.apply(
                          o.normalized.labels,
                          n
                            .times(Math.max(0, i - o.normalized.labels.length))
                            .map(function () {
                              return "";
                            })
                        ),
                        t && n.reverseData(o.normalized),
                        o
                      );
                    }),
                    (n.safeHasProperty = function (e, t) {
                      return (
                        null !== e &&
                        "object" == typeof e &&
                        e.hasOwnProperty(t)
                      );
                    }),
                    (n.isDataHoleValue = function (e) {
                      return (
                        null === e ||
                        void 0 === e ||
                        ("number" == typeof e && isNaN(e))
                      );
                    }),
                    (n.reverseData = function (e) {
                      e.labels.reverse(), e.series.reverse();
                      for (var t = 0; t < e.series.length; t++)
                        "object" == typeof e.series[t] &&
                        void 0 !== e.series[t].data
                          ? e.series[t].data.reverse()
                          : e.series[t] instanceof Array &&
                            e.series[t].reverse();
                    }),
                    (n.getDataArray = function (e, t, r) {
                      return e.series.map(function e(t) {
                        if (n.safeHasProperty(t, "value")) return e(t.value);
                        if (n.safeHasProperty(t, "data")) return e(t.data);
                        if (t instanceof Array) return t.map(e);
                        if (!n.isDataHoleValue(t)) {
                          if (r) {
                            var i = {};
                            return (
                              "string" == typeof r
                                ? (i[r] = n.getNumberOrUndefined(t))
                                : (i.y = n.getNumberOrUndefined(t)),
                              (i.x = t.hasOwnProperty("x")
                                ? n.getNumberOrUndefined(t.x)
                                : i.x),
                              (i.y = t.hasOwnProperty("y")
                                ? n.getNumberOrUndefined(t.y)
                                : i.y),
                              i
                            );
                          }
                          return n.getNumberOrUndefined(t);
                        }
                      });
                    }),
                    (n.normalizePadding = function (e, t) {
                      return (
                        (t = t || 0),
                        "number" == typeof e
                          ? { top: e, right: e, bottom: e, left: e }
                          : {
                              top: "number" == typeof e.top ? e.top : t,
                              right: "number" == typeof e.right ? e.right : t,
                              bottom:
                                "number" == typeof e.bottom ? e.bottom : t,
                              left: "number" == typeof e.left ? e.left : t,
                            }
                      );
                    }),
                    (n.getMetaData = function (e, t) {
                      var n = e.data ? e.data[t] : e[t];
                      return n ? n.meta : void 0;
                    }),
                    (n.orderOfMagnitude = function (e) {
                      return Math.floor(Math.log(Math.abs(e)) / Math.LN10);
                    }),
                    (n.projectLength = function (e, t, n) {
                      return (t / n.range) * e;
                    }),
                    (n.getAvailableHeight = function (e, t) {
                      return Math.max(
                        (n.quantity(t.height).value || e.height()) -
                          (t.chartPadding.top + t.chartPadding.bottom) -
                          t.axisX.offset,
                        0
                      );
                    }),
                    (n.getHighLow = function (e, t, r) {
                      var i = {
                          high:
                            void 0 ===
                            (t = n.extend(
                              {},
                              t,
                              r ? t["axis" + r.toUpperCase()] : {}
                            )).high
                              ? -Number.MAX_VALUE
                              : +t.high,
                          low: void 0 === t.low ? Number.MAX_VALUE : +t.low,
                        },
                        o = void 0 === t.high,
                        s = void 0 === t.low;
                      return (
                        (o || s) &&
                          (function e(t) {
                            if (void 0 !== t)
                              if (t instanceof Array)
                                for (var n = 0; n < t.length; n++) e(t[n]);
                              else {
                                var a = r ? +t[r] : +t;
                                o && a > i.high && (i.high = a),
                                  s && a < i.low && (i.low = a);
                              }
                          })(e),
                        (t.referenceValue || 0 === t.referenceValue) &&
                          ((i.high = Math.max(t.referenceValue, i.high)),
                          (i.low = Math.min(t.referenceValue, i.low))),
                        i.high <= i.low &&
                          (0 === i.low
                            ? (i.high = 1)
                            : i.low < 0
                            ? (i.high = 0)
                            : i.high > 0
                            ? (i.low = 0)
                            : ((i.high = 1), (i.low = 0))),
                        i
                      );
                    }),
                    (n.isNumeric = function (e) {
                      return null !== e && isFinite(e);
                    }),
                    (n.isFalseyButZero = function (e) {
                      return !e && 0 !== e;
                    }),
                    (n.getNumberOrUndefined = function (e) {
                      return n.isNumeric(e) ? +e : void 0;
                    }),
                    (n.isMultiValue = function (e) {
                      return "object" == typeof e && ("x" in e || "y" in e);
                    }),
                    (n.getMultiValue = function (e, t) {
                      return n.isMultiValue(e)
                        ? n.getNumberOrUndefined(e[t || "y"])
                        : n.getNumberOrUndefined(e);
                    }),
                    (n.rho = function (e) {
                      if (1 === e) return e;
                      function t(e, n) {
                        return e % n == 0 ? n : t(n, e % n);
                      }
                      function n(e) {
                        return e * e + 1;
                      }
                      var r,
                        i = 2,
                        o = 2;
                      if (e % 2 == 0) return 2;
                      do {
                        (i = n(i) % e),
                          (o = n(n(o)) % e),
                          (r = t(Math.abs(i - o), e));
                      } while (1 === r);
                      return r;
                    }),
                    (n.getBounds = function (e, t, r, i) {
                      var o,
                        s,
                        a,
                        u = 0,
                        l = { high: t.high, low: t.low };
                      (l.valueRange = l.high - l.low),
                        (l.oom = n.orderOfMagnitude(l.valueRange)),
                        (l.step = Math.pow(10, l.oom)),
                        (l.min = Math.floor(l.low / l.step) * l.step),
                        (l.max = Math.ceil(l.high / l.step) * l.step),
                        (l.range = l.max - l.min),
                        (l.numberOfSteps = Math.round(l.range / l.step));
                      var c = n.projectLength(e, l.step, l) < r,
                        f = i ? n.rho(l.range) : 0;
                      if (i && n.projectLength(e, 1, l) >= r) l.step = 1;
                      else if (i && f < l.step && n.projectLength(e, f, l) >= r)
                        l.step = f;
                      else
                        for (;;) {
                          if (c && n.projectLength(e, l.step, l) <= r)
                            l.step *= 2;
                          else {
                            if (c || !(n.projectLength(e, l.step / 2, l) >= r))
                              break;
                            if (((l.step /= 2), i && l.step % 1 != 0)) {
                              l.step *= 2;
                              break;
                            }
                          }
                          if (u++ > 1e3)
                            throw new Error(
                              "Exceeded maximum number of iterations while optimizing scale step!"
                            );
                        }
                      var d = 2.221e-16;
                      function h(e, t) {
                        return e === (e += t) && (e *= 1 + (t > 0 ? d : -d)), e;
                      }
                      for (
                        l.step = Math.max(l.step, d), s = l.min, a = l.max;
                        s + l.step <= l.low;

                      )
                        s = h(s, l.step);
                      for (; a - l.step >= l.high; ) a = h(a, -l.step);
                      (l.min = s), (l.max = a), (l.range = l.max - l.min);
                      var p = [];
                      for (o = l.min; o <= l.max; o = h(o, l.step)) {
                        var m = n.roundWithPrecision(o);
                        m !== p[p.length - 1] && p.push(m);
                      }
                      return (l.values = p), l;
                    }),
                    (n.polarToCartesian = function (e, t, n, r) {
                      var i = ((r - 90) * Math.PI) / 180;
                      return { x: e + n * Math.cos(i), y: t + n * Math.sin(i) };
                    }),
                    (n.createChartRect = function (e, t, r) {
                      var i = !(!t.axisX && !t.axisY),
                        o = i ? t.axisY.offset : 0,
                        s = i ? t.axisX.offset : 0,
                        a = e.width() || n.quantity(t.width).value || 0,
                        u = e.height() || n.quantity(t.height).value || 0,
                        l = n.normalizePadding(t.chartPadding, r);
                      (a = Math.max(a, o + l.left + l.right)),
                        (u = Math.max(u, s + l.top + l.bottom));
                      var c = {
                        padding: l,
                        width: function () {
                          return this.x2 - this.x1;
                        },
                        height: function () {
                          return this.y1 - this.y2;
                        },
                      };
                      return (
                        i
                          ? ("start" === t.axisX.position
                              ? ((c.y2 = l.top + s),
                                (c.y1 = Math.max(u - l.bottom, c.y2 + 1)))
                              : ((c.y2 = l.top),
                                (c.y1 = Math.max(u - l.bottom - s, c.y2 + 1))),
                            "start" === t.axisY.position
                              ? ((c.x1 = l.left + o),
                                (c.x2 = Math.max(a - l.right, c.x1 + 1)))
                              : ((c.x1 = l.left),
                                (c.x2 = Math.max(a - l.right - o, c.x1 + 1))))
                          : ((c.x1 = l.left),
                            (c.x2 = Math.max(a - l.right, c.x1 + 1)),
                            (c.y2 = l.top),
                            (c.y1 = Math.max(u - l.bottom, c.y2 + 1))),
                        c
                      );
                    }),
                    (n.createGrid = function (e, t, r, i, o, s, a, u) {
                      var l = {};
                      (l[r.units.pos + "1"] = e),
                        (l[r.units.pos + "2"] = e),
                        (l[r.counterUnits.pos + "1"] = i),
                        (l[r.counterUnits.pos + "2"] = i + o);
                      var c = s.elem("line", l, a.join(" "));
                      u.emit(
                        "draw",
                        n.extend(
                          {
                            type: "grid",
                            axis: r,
                            index: t,
                            group: s,
                            element: c,
                          },
                          l
                        )
                      );
                    }),
                    (n.createGridBackground = function (e, t, n, r) {
                      var i = e.elem(
                        "rect",
                        {
                          x: t.x1,
                          y: t.y2,
                          width: t.width(),
                          height: t.height(),
                        },
                        n,
                        !0
                      );
                      r.emit("draw", {
                        type: "gridBackground",
                        group: e,
                        element: i,
                      });
                    }),
                    (n.createLabel = function (
                      e,
                      r,
                      i,
                      o,
                      s,
                      a,
                      u,
                      l,
                      c,
                      f,
                      d
                    ) {
                      var h,
                        p = {};
                      if (
                        ((p[s.units.pos] = e + u[s.units.pos]),
                        (p[s.counterUnits.pos] = u[s.counterUnits.pos]),
                        (p[s.units.len] = r),
                        (p[s.counterUnits.len] = Math.max(0, a - 10)),
                        f)
                      ) {
                        var m = t.createElement("span");
                        (m.className = c.join(" ")),
                          m.setAttribute("xmlns", n.namespaces.xhtml),
                          (m.innerText = o[i]),
                          (m.style[s.units.len] =
                            Math.round(p[s.units.len]) + "px"),
                          (m.style[s.counterUnits.len] =
                            Math.round(p[s.counterUnits.len]) + "px"),
                          (h = l.foreignObject(
                            m,
                            n.extend({ style: "overflow: visible;" }, p)
                          ));
                      } else h = l.elem("text", p, c.join(" ")).text(o[i]);
                      d.emit(
                        "draw",
                        n.extend(
                          {
                            type: "label",
                            axis: s,
                            index: i,
                            group: l,
                            element: h,
                            text: o[i],
                          },
                          p
                        )
                      );
                    }),
                    (n.getSeriesOption = function (e, t, n) {
                      if (e.name && t.series && t.series[e.name]) {
                        var r = t.series[e.name];
                        return r.hasOwnProperty(n) ? r[n] : t[n];
                      }
                      return t[n];
                    }),
                    (n.optionsProvider = function (t, r, i) {
                      var o,
                        s,
                        a = n.extend({}, t),
                        u = [];
                      function l(t) {
                        var u = o;
                        if (((o = n.extend({}, a)), r))
                          for (s = 0; s < r.length; s++)
                            e.matchMedia(r[s][0]).matches &&
                              (o = n.extend(o, r[s][1]));
                        i &&
                          t &&
                          i.emit("optionsChanged", {
                            previousOptions: u,
                            currentOptions: o,
                          });
                      }
                      if (!e.matchMedia)
                        throw "window.matchMedia not found! Make sure you're using a polyfill.";
                      if (r)
                        for (s = 0; s < r.length; s++) {
                          var c = e.matchMedia(r[s][0]);
                          c.addListener(l), u.push(c);
                        }
                      return (
                        l(),
                        {
                          removeMediaQueryListeners: function () {
                            u.forEach(function (e) {
                              e.removeListener(l);
                            });
                          },
                          getCurrentOptions: function () {
                            return n.extend({}, o);
                          },
                        }
                      );
                    }),
                    (n.splitIntoSegments = function (e, t, r) {
                      r = n.extend({}, { increasingX: !1, fillHoles: !1 }, r);
                      for (var i = [], o = !0, s = 0; s < e.length; s += 2)
                        void 0 === n.getMultiValue(t[s / 2].value)
                          ? r.fillHoles || (o = !0)
                          : (r.increasingX &&
                              s >= 2 &&
                              e[s] <= e[s - 2] &&
                              (o = !0),
                            o &&
                              (i.push({ pathCoordinates: [], valueData: [] }),
                              (o = !1)),
                            i[i.length - 1].pathCoordinates.push(
                              e[s],
                              e[s + 1]
                            ),
                            i[i.length - 1].valueData.push(t[s / 2]));
                      return i;
                    });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  (n.Interpolation = {}),
                    (n.Interpolation.none = function (e) {
                      return (
                        (e = n.extend({}, { fillHoles: !1 }, e)),
                        function (t, r) {
                          for (
                            var i = new n.Svg.Path(), o = !0, s = 0;
                            s < t.length;
                            s += 2
                          ) {
                            var a = t[s],
                              u = t[s + 1],
                              l = r[s / 2];
                            void 0 !== n.getMultiValue(l.value)
                              ? (o ? i.move(a, u, !1, l) : i.line(a, u, !1, l),
                                (o = !1))
                              : e.fillHoles || (o = !0);
                          }
                          return i;
                        }
                      );
                    }),
                    (n.Interpolation.simple = function (e) {
                      e = n.extend({}, { divisor: 2, fillHoles: !1 }, e);
                      var t = 1 / Math.max(1, e.divisor);
                      return function (r, i) {
                        for (
                          var o, s, a, u = new n.Svg.Path(), l = 0;
                          l < r.length;
                          l += 2
                        ) {
                          var c = r[l],
                            f = r[l + 1],
                            d = (c - o) * t,
                            h = i[l / 2];
                          void 0 !== h.value
                            ? (void 0 === a
                                ? u.move(c, f, !1, h)
                                : u.curve(o + d, s, c - d, f, c, f, !1, h),
                              (o = c),
                              (s = f),
                              (a = h))
                            : e.fillHoles || (o = c = a = void 0);
                        }
                        return u;
                      };
                    }),
                    (n.Interpolation.cardinal = function (e) {
                      e = n.extend({}, { tension: 1, fillHoles: !1 }, e);
                      var t = Math.min(1, Math.max(0, e.tension)),
                        r = 1 - t;
                      return function i(o, s) {
                        var a = n.splitIntoSegments(o, s, {
                          fillHoles: e.fillHoles,
                        });
                        if (a.length) {
                          if (a.length > 1) {
                            var u = [];
                            return (
                              a.forEach(function (e) {
                                u.push(i(e.pathCoordinates, e.valueData));
                              }),
                              n.Svg.Path.join(u)
                            );
                          }
                          if (
                            ((o = a[0].pathCoordinates),
                            (s = a[0].valueData),
                            o.length <= 4)
                          )
                            return n.Interpolation.none()(o, s);
                          for (
                            var l = new n.Svg.Path().move(o[0], o[1], !1, s[0]),
                              c = 0,
                              f = o.length;
                            f - 2 > c;
                            c += 2
                          ) {
                            var d = [
                              { x: +o[c - 2], y: +o[c - 1] },
                              { x: +o[c], y: +o[c + 1] },
                              { x: +o[c + 2], y: +o[c + 3] },
                              { x: +o[c + 4], y: +o[c + 5] },
                            ];
                            f - 4 === c
                              ? (d[3] = d[2])
                              : c || (d[0] = { x: +o[c], y: +o[c + 1] }),
                              l.curve(
                                (t * (-d[0].x + 6 * d[1].x + d[2].x)) / 6 +
                                  r * d[2].x,
                                (t * (-d[0].y + 6 * d[1].y + d[2].y)) / 6 +
                                  r * d[2].y,
                                (t * (d[1].x + 6 * d[2].x - d[3].x)) / 6 +
                                  r * d[2].x,
                                (t * (d[1].y + 6 * d[2].y - d[3].y)) / 6 +
                                  r * d[2].y,
                                d[2].x,
                                d[2].y,
                                !1,
                                s[(c + 2) / 2]
                              );
                          }
                          return l;
                        }
                        return n.Interpolation.none()([]);
                      };
                    }),
                    (n.Interpolation.monotoneCubic = function (e) {
                      return (
                        (e = n.extend({}, { fillHoles: !1 }, e)),
                        function t(r, i) {
                          var o = n.splitIntoSegments(r, i, {
                            fillHoles: e.fillHoles,
                            increasingX: !0,
                          });
                          if (o.length) {
                            if (o.length > 1) {
                              var s = [];
                              return (
                                o.forEach(function (e) {
                                  s.push(t(e.pathCoordinates, e.valueData));
                                }),
                                n.Svg.Path.join(s)
                              );
                            }
                            if (
                              ((r = o[0].pathCoordinates),
                              (i = o[0].valueData),
                              r.length <= 4)
                            )
                              return n.Interpolation.none()(r, i);
                            var a,
                              u,
                              l = [],
                              c = [],
                              f = r.length / 2,
                              d = [],
                              h = [],
                              p = [],
                              m = [];
                            for (a = 0; a < f; a++)
                              (l[a] = r[2 * a]), (c[a] = r[2 * a + 1]);
                            for (a = 0; a < f - 1; a++)
                              (p[a] = c[a + 1] - c[a]),
                                (m[a] = l[a + 1] - l[a]),
                                (h[a] = p[a] / m[a]);
                            for (
                              d[0] = h[0], d[f - 1] = h[f - 2], a = 1;
                              a < f - 1;
                              a++
                            )
                              0 === h[a] ||
                              0 === h[a - 1] ||
                              h[a - 1] > 0 != h[a] > 0
                                ? (d[a] = 0)
                                : ((d[a] =
                                    (3 * (m[a - 1] + m[a])) /
                                    ((2 * m[a] + m[a - 1]) / h[a - 1] +
                                      (m[a] + 2 * m[a - 1]) / h[a])),
                                  isFinite(d[a]) || (d[a] = 0));
                            for (
                              u = new n.Svg.Path().move(l[0], c[0], !1, i[0]),
                                a = 0;
                              a < f - 1;
                              a++
                            )
                              u.curve(
                                l[a] + m[a] / 3,
                                c[a] + (d[a] * m[a]) / 3,
                                l[a + 1] - m[a] / 3,
                                c[a + 1] - (d[a + 1] * m[a]) / 3,
                                l[a + 1],
                                c[a + 1],
                                !1,
                                i[a + 1]
                              );
                            return u;
                          }
                          return n.Interpolation.none()([]);
                        }
                      );
                    }),
                    (n.Interpolation.step = function (e) {
                      return (
                        (e = n.extend({}, { postpone: !0, fillHoles: !1 }, e)),
                        function (t, r) {
                          for (
                            var i, o, s, a = new n.Svg.Path(), u = 0;
                            u < t.length;
                            u += 2
                          ) {
                            var l = t[u],
                              c = t[u + 1],
                              f = r[u / 2];
                            void 0 !== f.value
                              ? (void 0 === s
                                  ? a.move(l, c, !1, f)
                                  : (e.postpone
                                      ? a.line(l, o, !1, s)
                                      : a.line(i, c, !1, f),
                                    a.line(l, c, !1, f)),
                                (i = l),
                                (o = c),
                                (s = f))
                              : e.fillHoles || (i = o = s = void 0);
                          }
                          return a;
                        }
                      );
                    });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  n.EventEmitter = function () {
                    var e = [];
                    return {
                      addEventHandler: function (t, n) {
                        (e[t] = e[t] || []), e[t].push(n);
                      },
                      removeEventHandler: function (t, n) {
                        e[t] &&
                          (n
                            ? (e[t].splice(e[t].indexOf(n), 1),
                              0 === e[t].length && delete e[t])
                            : delete e[t]);
                      },
                      emit: function (t, n) {
                        e[t] &&
                          e[t].forEach(function (e) {
                            e(n);
                          }),
                          e["*"] &&
                            e["*"].forEach(function (e) {
                              e(t, n);
                            });
                      },
                    };
                  };
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  n.Class = {
                    extend: function (e, t) {
                      var r = t || this.prototype || n.Class,
                        i = Object.create(r);
                      n.Class.cloneDefinitions(i, e);
                      var o = function () {
                        var e,
                          t = i.constructor || function () {};
                        return (
                          (e = this === n ? Object.create(i) : this),
                          t.apply(e, Array.prototype.slice.call(arguments, 0)),
                          e
                        );
                      };
                      return (
                        (o.prototype = i),
                        (o.super = r),
                        (o.extend = this.extend),
                        o
                      );
                    },
                    cloneDefinitions: function () {
                      var e = (function (e) {
                          var t = [];
                          if (e.length)
                            for (var n = 0; n < e.length; n++) t.push(e[n]);
                          return t;
                        })(arguments),
                        t = e[0];
                      return (
                        e.splice(1, e.length - 1).forEach(function (e) {
                          Object.getOwnPropertyNames(e).forEach(function (n) {
                            delete t[n],
                              Object.defineProperty(
                                t,
                                n,
                                Object.getOwnPropertyDescriptor(e, n)
                              );
                          });
                        }),
                        t
                      );
                    },
                  };
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  n.Base = n.Class.extend({
                    constructor: function (t, r, i, o, s) {
                      (this.container = n.querySelector(t)),
                        (this.data = r || {}),
                        (this.data.labels = this.data.labels || []),
                        (this.data.series = this.data.series || []),
                        (this.defaultOptions = i),
                        (this.options = o),
                        (this.responsiveOptions = s),
                        (this.eventEmitter = n.EventEmitter()),
                        (this.supportsForeignObject =
                          n.Svg.isSupported("Extensibility")),
                        (this.supportsAnimations = n.Svg.isSupported(
                          "AnimationEventsAttribute"
                        )),
                        (this.resizeListener = function () {
                          this.update();
                        }.bind(this)),
                        this.container &&
                          (this.container.__chartist__ &&
                            this.container.__chartist__.detach(),
                          (this.container.__chartist__ = this)),
                        (this.initializeTimeoutId = setTimeout(
                          function () {
                            e.addEventListener("resize", this.resizeListener),
                              (this.optionsProvider = n.optionsProvider(
                                this.options,
                                this.responsiveOptions,
                                this.eventEmitter
                              )),
                              this.eventEmitter.addEventHandler(
                                "optionsChanged",
                                function () {
                                  this.update();
                                }.bind(this)
                              ),
                              this.options.plugins &&
                                this.options.plugins.forEach(
                                  function (e) {
                                    e instanceof Array
                                      ? e[0](this, e[1])
                                      : e(this);
                                  }.bind(this)
                                ),
                              this.eventEmitter.emit("data", {
                                type: "initial",
                                data: this.data,
                              }),
                              this.createChart(
                                this.optionsProvider.getCurrentOptions()
                              ),
                              (this.initializeTimeoutId = void 0);
                          }.bind(this),
                          0
                        ));
                    },
                    optionsProvider: void 0,
                    container: void 0,
                    svg: void 0,
                    eventEmitter: void 0,
                    createChart: function () {
                      throw new Error("Base chart type can't be instantiated!");
                    },
                    update: function (e, t, r) {
                      return (
                        e &&
                          ((this.data = e || {}),
                          (this.data.labels = this.data.labels || []),
                          (this.data.series = this.data.series || []),
                          this.eventEmitter.emit("data", {
                            type: "update",
                            data: this.data,
                          })),
                        t &&
                          ((this.options = n.extend(
                            {},
                            r ? this.options : this.defaultOptions,
                            t
                          )),
                          this.initializeTimeoutId ||
                            (this.optionsProvider.removeMediaQueryListeners(),
                            (this.optionsProvider = n.optionsProvider(
                              this.options,
                              this.responsiveOptions,
                              this.eventEmitter
                            )))),
                        this.initializeTimeoutId ||
                          this.createChart(
                            this.optionsProvider.getCurrentOptions()
                          ),
                        this
                      );
                    },
                    detach: function () {
                      return (
                        this.initializeTimeoutId
                          ? e.clearTimeout(this.initializeTimeoutId)
                          : (e.removeEventListener(
                              "resize",
                              this.resizeListener
                            ),
                            this.optionsProvider.removeMediaQueryListeners()),
                        this
                      );
                    },
                    on: function (e, t) {
                      return this.eventEmitter.addEventHandler(e, t), this;
                    },
                    off: function (e, t) {
                      return this.eventEmitter.removeEventHandler(e, t), this;
                    },
                    version: n.version,
                    supportsForeignObject: !1,
                  });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  (n.Svg = n.Class.extend({
                    constructor: function (e, r, i, o, s) {
                      e instanceof Element
                        ? (this._node = e)
                        : ((this._node = t.createElementNS(
                            n.namespaces.svg,
                            e
                          )),
                          "svg" === e &&
                            this.attr({ "xmlns:ct": n.namespaces.ct })),
                        r && this.attr(r),
                        i && this.addClass(i),
                        o &&
                          (s && o._node.firstChild
                            ? o._node.insertBefore(
                                this._node,
                                o._node.firstChild
                              )
                            : o._node.appendChild(this._node));
                    },
                    attr: function (e, t) {
                      return "string" == typeof e
                        ? t
                          ? this._node.getAttributeNS(t, e)
                          : this._node.getAttribute(e)
                        : (Object.keys(e).forEach(
                            function (t) {
                              if (void 0 !== e[t])
                                if (-1 !== t.indexOf(":")) {
                                  var r = t.split(":");
                                  this._node.setAttributeNS(
                                    n.namespaces[r[0]],
                                    t,
                                    e[t]
                                  );
                                } else this._node.setAttribute(t, e[t]);
                            }.bind(this)
                          ),
                          this);
                    },
                    elem: function (e, t, r, i) {
                      return new n.Svg(e, t, r, this, i);
                    },
                    parent: function () {
                      return this._node.parentNode instanceof SVGElement
                        ? new n.Svg(this._node.parentNode)
                        : null;
                    },
                    root: function () {
                      for (var e = this._node; "svg" !== e.nodeName; )
                        e = e.parentNode;
                      return new n.Svg(e);
                    },
                    querySelector: function (e) {
                      var t = this._node.querySelector(e);
                      return t ? new n.Svg(t) : null;
                    },
                    querySelectorAll: function (e) {
                      var t = this._node.querySelectorAll(e);
                      return t.length ? new n.Svg.List(t) : null;
                    },
                    getNode: function () {
                      return this._node;
                    },
                    foreignObject: function (e, r, i, o) {
                      if ("string" == typeof e) {
                        var s = t.createElement("div");
                        (s.innerHTML = e), (e = s.firstChild);
                      }
                      e.setAttribute("xmlns", n.namespaces.xmlns);
                      var a = this.elem("foreignObject", r, i, o);
                      return a._node.appendChild(e), a;
                    },
                    text: function (e) {
                      return this._node.appendChild(t.createTextNode(e)), this;
                    },
                    empty: function () {
                      for (; this._node.firstChild; )
                        this._node.removeChild(this._node.firstChild);
                      return this;
                    },
                    remove: function () {
                      return (
                        this._node.parentNode.removeChild(this._node),
                        this.parent()
                      );
                    },
                    replace: function (e) {
                      return (
                        this._node.parentNode.replaceChild(e._node, this._node),
                        e
                      );
                    },
                    append: function (e, t) {
                      return (
                        t && this._node.firstChild
                          ? this._node.insertBefore(
                              e._node,
                              this._node.firstChild
                            )
                          : this._node.appendChild(e._node),
                        this
                      );
                    },
                    classes: function () {
                      return this._node.getAttribute("class")
                        ? this._node.getAttribute("class").trim().split(/\s+/)
                        : [];
                    },
                    addClass: function (e) {
                      return (
                        this._node.setAttribute(
                          "class",
                          this.classes(this._node)
                            .concat(e.trim().split(/\s+/))
                            .filter(function (e, t, n) {
                              return n.indexOf(e) === t;
                            })
                            .join(" ")
                        ),
                        this
                      );
                    },
                    removeClass: function (e) {
                      var t = e.trim().split(/\s+/);
                      return (
                        this._node.setAttribute(
                          "class",
                          this.classes(this._node)
                            .filter(function (e) {
                              return -1 === t.indexOf(e);
                            })
                            .join(" ")
                        ),
                        this
                      );
                    },
                    removeAllClasses: function () {
                      return this._node.setAttribute("class", ""), this;
                    },
                    height: function () {
                      return this._node.getBoundingClientRect().height;
                    },
                    width: function () {
                      return this._node.getBoundingClientRect().width;
                    },
                    animate: function (e, t, r) {
                      return (
                        void 0 === t && (t = !0),
                        Object.keys(e).forEach(
                          function (i) {
                            function o(e, t) {
                              var o,
                                s,
                                a,
                                u = {};
                              e.easing &&
                                ((a =
                                  e.easing instanceof Array
                                    ? e.easing
                                    : n.Svg.Easing[e.easing]),
                                delete e.easing),
                                (e.begin = n.ensureUnit(e.begin, "ms")),
                                (e.dur = n.ensureUnit(e.dur, "ms")),
                                a &&
                                  ((e.calcMode = "spline"),
                                  (e.keySplines = a.join(" ")),
                                  (e.keyTimes = "0;1")),
                                t &&
                                  ((e.fill = "freeze"),
                                  (u[i] = e.from),
                                  this.attr(u),
                                  (s = n.quantity(e.begin || 0).value),
                                  (e.begin = "indefinite")),
                                (o = this.elem(
                                  "animate",
                                  n.extend({ attributeName: i }, e)
                                )),
                                t &&
                                  setTimeout(
                                    function () {
                                      try {
                                        o._node.beginElement();
                                      } catch (t) {
                                        (u[i] = e.to), this.attr(u), o.remove();
                                      }
                                    }.bind(this),
                                    s
                                  ),
                                r &&
                                  o._node.addEventListener(
                                    "beginEvent",
                                    function () {
                                      r.emit("animationBegin", {
                                        element: this,
                                        animate: o._node,
                                        params: e,
                                      });
                                    }.bind(this)
                                  ),
                                o._node.addEventListener(
                                  "endEvent",
                                  function () {
                                    r &&
                                      r.emit("animationEnd", {
                                        element: this,
                                        animate: o._node,
                                        params: e,
                                      }),
                                      t &&
                                        ((u[i] = e.to),
                                        this.attr(u),
                                        o.remove());
                                  }.bind(this)
                                );
                            }
                            e[i] instanceof Array
                              ? e[i].forEach(
                                  function (e) {
                                    o.bind(this)(e, !1);
                                  }.bind(this)
                                )
                              : o.bind(this)(e[i], t);
                          }.bind(this)
                        ),
                        this
                      );
                    },
                  })),
                    (n.Svg.isSupported = function (e) {
                      return t.implementation.hasFeature(
                        "http://www.w3.org/TR/SVG11/feature#" + e,
                        "1.1"
                      );
                    }),
                    (n.Svg.Easing = {
                      easeInSine: [0.47, 0, 0.745, 0.715],
                      easeOutSine: [0.39, 0.575, 0.565, 1],
                      easeInOutSine: [0.445, 0.05, 0.55, 0.95],
                      easeInQuad: [0.55, 0.085, 0.68, 0.53],
                      easeOutQuad: [0.25, 0.46, 0.45, 0.94],
                      easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
                      easeInCubic: [0.55, 0.055, 0.675, 0.19],
                      easeOutCubic: [0.215, 0.61, 0.355, 1],
                      easeInOutCubic: [0.645, 0.045, 0.355, 1],
                      easeInQuart: [0.895, 0.03, 0.685, 0.22],
                      easeOutQuart: [0.165, 0.84, 0.44, 1],
                      easeInOutQuart: [0.77, 0, 0.175, 1],
                      easeInQuint: [0.755, 0.05, 0.855, 0.06],
                      easeOutQuint: [0.23, 1, 0.32, 1],
                      easeInOutQuint: [0.86, 0, 0.07, 1],
                      easeInExpo: [0.95, 0.05, 0.795, 0.035],
                      easeOutExpo: [0.19, 1, 0.22, 1],
                      easeInOutExpo: [1, 0, 0, 1],
                      easeInCirc: [0.6, 0.04, 0.98, 0.335],
                      easeOutCirc: [0.075, 0.82, 0.165, 1],
                      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
                      easeInBack: [0.6, -0.28, 0.735, 0.045],
                      easeOutBack: [0.175, 0.885, 0.32, 1.275],
                      easeInOutBack: [0.68, -0.55, 0.265, 1.55],
                    }),
                    (n.Svg.List = n.Class.extend({
                      constructor: function (e) {
                        var t = this;
                        this.svgElements = [];
                        for (var r = 0; r < e.length; r++)
                          this.svgElements.push(new n.Svg(e[r]));
                        Object.keys(n.Svg.prototype)
                          .filter(function (e) {
                            return (
                              -1 ===
                              [
                                "constructor",
                                "parent",
                                "querySelector",
                                "querySelectorAll",
                                "replace",
                                "append",
                                "classes",
                                "height",
                                "width",
                              ].indexOf(e)
                            );
                          })
                          .forEach(function (e) {
                            t[e] = function () {
                              var r = Array.prototype.slice.call(arguments, 0);
                              return (
                                t.svgElements.forEach(function (t) {
                                  n.Svg.prototype[e].apply(t, r);
                                }),
                                t
                              );
                            };
                          });
                      },
                    }));
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  var r = {
                      m: ["x", "y"],
                      l: ["x", "y"],
                      c: ["x1", "y1", "x2", "y2", "x", "y"],
                      a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"],
                    },
                    i = { accuracy: 3 };
                  function o(e, t, r, i, o, s) {
                    var a = n.extend(
                      { command: o ? e.toLowerCase() : e.toUpperCase() },
                      t,
                      s ? { data: s } : {}
                    );
                    r.splice(i, 0, a);
                  }
                  function s(e, t) {
                    e.forEach(function (n, i) {
                      r[n.command.toLowerCase()].forEach(function (r, o) {
                        t(n, r, i, o, e);
                      });
                    });
                  }
                  (n.Svg.Path = n.Class.extend({
                    constructor: function (e, t) {
                      (this.pathElements = []),
                        (this.pos = 0),
                        (this.close = e),
                        (this.options = n.extend({}, i, t));
                    },
                    position: function (e) {
                      return void 0 !== e
                        ? ((this.pos = Math.max(
                            0,
                            Math.min(this.pathElements.length, e)
                          )),
                          this)
                        : this.pos;
                    },
                    remove: function (e) {
                      return this.pathElements.splice(this.pos, e), this;
                    },
                    move: function (e, t, n, r) {
                      return (
                        o(
                          "M",
                          { x: +e, y: +t },
                          this.pathElements,
                          this.pos++,
                          n,
                          r
                        ),
                        this
                      );
                    },
                    line: function (e, t, n, r) {
                      return (
                        o(
                          "L",
                          { x: +e, y: +t },
                          this.pathElements,
                          this.pos++,
                          n,
                          r
                        ),
                        this
                      );
                    },
                    curve: function (e, t, n, r, i, s, a, u) {
                      return (
                        o(
                          "C",
                          { x1: +e, y1: +t, x2: +n, y2: +r, x: +i, y: +s },
                          this.pathElements,
                          this.pos++,
                          a,
                          u
                        ),
                        this
                      );
                    },
                    arc: function (e, t, n, r, i, s, a, u, l) {
                      return (
                        o(
                          "A",
                          {
                            rx: +e,
                            ry: +t,
                            xAr: +n,
                            lAf: +r,
                            sf: +i,
                            x: +s,
                            y: +a,
                          },
                          this.pathElements,
                          this.pos++,
                          u,
                          l
                        ),
                        this
                      );
                    },
                    scale: function (e, t) {
                      return (
                        s(this.pathElements, function (n, r) {
                          n[r] *= "x" === r[0] ? e : t;
                        }),
                        this
                      );
                    },
                    translate: function (e, t) {
                      return (
                        s(this.pathElements, function (n, r) {
                          n[r] += "x" === r[0] ? e : t;
                        }),
                        this
                      );
                    },
                    transform: function (e) {
                      return (
                        s(this.pathElements, function (t, n, r, i, o) {
                          var s = e(t, n, r, i, o);
                          (s || 0 === s) && (t[n] = s);
                        }),
                        this
                      );
                    },
                    parse: function (e) {
                      var t = e
                        .replace(/([A-Za-z])([0-9])/g, "$1 $2")
                        .replace(/([0-9])([A-Za-z])/g, "$1 $2")
                        .split(/[\s,]+/)
                        .reduce(function (e, t) {
                          return (
                            t.match(/[A-Za-z]/) && e.push([]),
                            e[e.length - 1].push(t),
                            e
                          );
                        }, []);
                      "Z" === t[t.length - 1][0].toUpperCase() && t.pop();
                      var i = t.map(function (e) {
                          var t = e.shift(),
                            i = r[t.toLowerCase()];
                          return n.extend(
                            { command: t },
                            i.reduce(function (t, n, r) {
                              return (t[n] = +e[r]), t;
                            }, {})
                          );
                        }),
                        o = [this.pos, 0];
                      return (
                        Array.prototype.push.apply(o, i),
                        Array.prototype.splice.apply(this.pathElements, o),
                        (this.pos += i.length),
                        this
                      );
                    },
                    stringify: function () {
                      var e = Math.pow(10, this.options.accuracy);
                      return (
                        this.pathElements.reduce(
                          function (t, n) {
                            var i = r[n.command.toLowerCase()].map(
                              function (t) {
                                return this.options.accuracy
                                  ? Math.round(n[t] * e) / e
                                  : n[t];
                              }.bind(this)
                            );
                            return t + n.command + i.join(",");
                          }.bind(this),
                          ""
                        ) + (this.close ? "Z" : "")
                      );
                    },
                    clone: function (e) {
                      var t = new n.Svg.Path(e || this.close);
                      return (
                        (t.pos = this.pos),
                        (t.pathElements = this.pathElements
                          .slice()
                          .map(function (e) {
                            return n.extend({}, e);
                          })),
                        (t.options = n.extend({}, this.options)),
                        t
                      );
                    },
                    splitByCommand: function (e) {
                      var t = [new n.Svg.Path()];
                      return (
                        this.pathElements.forEach(function (r) {
                          r.command === e.toUpperCase() &&
                            0 !== t[t.length - 1].pathElements.length &&
                            t.push(new n.Svg.Path()),
                            t[t.length - 1].pathElements.push(r);
                        }),
                        t
                      );
                    },
                  })),
                    (n.Svg.Path.elementDescriptions = r),
                    (n.Svg.Path.join = function (e, t, r) {
                      for (
                        var i = new n.Svg.Path(t, r), o = 0;
                        o < e.length;
                        o++
                      )
                        for (
                          var s = e[o], a = 0;
                          a < s.pathElements.length;
                          a++
                        )
                          i.pathElements.push(s.pathElements[a]);
                      return i;
                    });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  var r = {
                    x: {
                      pos: "x",
                      len: "width",
                      dir: "horizontal",
                      rectStart: "x1",
                      rectEnd: "x2",
                      rectOffset: "y2",
                    },
                    y: {
                      pos: "y",
                      len: "height",
                      dir: "vertical",
                      rectStart: "y2",
                      rectEnd: "y1",
                      rectOffset: "x1",
                    },
                  };
                  (n.Axis = n.Class.extend({
                    constructor: function (e, t, n, i) {
                      (this.units = e),
                        (this.counterUnits = e === r.x ? r.y : r.x),
                        (this.chartRect = t),
                        (this.axisLength = t[e.rectEnd] - t[e.rectStart]),
                        (this.gridOffset = t[e.rectOffset]),
                        (this.ticks = n),
                        (this.options = i);
                    },
                    createGridAndLabels: function (e, t, r, i, o) {
                      var s = i["axis" + this.units.pos.toUpperCase()],
                        a = this.ticks.map(this.projectValue.bind(this)),
                        u = this.ticks.map(s.labelInterpolationFnc);
                      a.forEach(
                        function (l, c) {
                          var f,
                            d = { x: 0, y: 0 };
                          (f = a[c + 1]
                            ? a[c + 1] - l
                            : Math.max(this.axisLength - l, 30)),
                            (n.isFalseyButZero(u[c]) && "" !== u[c]) ||
                              ("x" === this.units.pos
                                ? ((l = this.chartRect.x1 + l),
                                  (d.x = i.axisX.labelOffset.x),
                                  "start" === i.axisX.position
                                    ? (d.y =
                                        this.chartRect.padding.top +
                                        i.axisX.labelOffset.y +
                                        (r ? 5 : 20))
                                    : (d.y =
                                        this.chartRect.y1 +
                                        i.axisX.labelOffset.y +
                                        (r ? 5 : 20)))
                                : ((l = this.chartRect.y1 - l),
                                  (d.y = i.axisY.labelOffset.y - (r ? f : 0)),
                                  "start" === i.axisY.position
                                    ? (d.x = r
                                        ? this.chartRect.padding.left +
                                          i.axisY.labelOffset.x
                                        : this.chartRect.x1 - 10)
                                    : (d.x =
                                        this.chartRect.x2 +
                                        i.axisY.labelOffset.x +
                                        10)),
                              s.showGrid &&
                                n.createGrid(
                                  l,
                                  c,
                                  this,
                                  this.gridOffset,
                                  this.chartRect[this.counterUnits.len](),
                                  e,
                                  [
                                    i.classNames.grid,
                                    i.classNames[this.units.dir],
                                  ],
                                  o
                                ),
                              s.showLabel &&
                                n.createLabel(
                                  l,
                                  f,
                                  c,
                                  u,
                                  this,
                                  s.offset,
                                  d,
                                  t,
                                  [
                                    i.classNames.label,
                                    i.classNames[this.units.dir],
                                    "start" === s.position
                                      ? i.classNames[s.position]
                                      : i.classNames.end,
                                  ],
                                  r,
                                  o
                                ));
                        }.bind(this)
                      );
                    },
                    projectValue: function (e, t, n) {
                      throw new Error("Base axis can't be instantiated!");
                    },
                  })),
                    (n.Axis.units = r);
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  n.AutoScaleAxis = n.Axis.extend({
                    constructor: function (e, t, r, i) {
                      var o = i.highLow || n.getHighLow(t, i, e.pos);
                      (this.bounds = n.getBounds(
                        r[e.rectEnd] - r[e.rectStart],
                        o,
                        i.scaleMinSpace || 20,
                        i.onlyInteger
                      )),
                        (this.range = {
                          min: this.bounds.min,
                          max: this.bounds.max,
                        }),
                        n.AutoScaleAxis.super.constructor.call(
                          this,
                          e,
                          r,
                          this.bounds.values,
                          i
                        );
                    },
                    projectValue: function (e) {
                      return (
                        (this.axisLength *
                          (+n.getMultiValue(e, this.units.pos) -
                            this.bounds.min)) /
                        this.bounds.range
                      );
                    },
                  });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  n.FixedScaleAxis = n.Axis.extend({
                    constructor: function (e, t, r, i) {
                      var o = i.highLow || n.getHighLow(t, i, e.pos);
                      (this.divisor = i.divisor || 1),
                        (this.ticks =
                          i.ticks ||
                          n.times(this.divisor).map(
                            function (e, t) {
                              return (
                                o.low + ((o.high - o.low) / this.divisor) * t
                              );
                            }.bind(this)
                          )),
                        this.ticks.sort(function (e, t) {
                          return e - t;
                        }),
                        (this.range = { min: o.low, max: o.high }),
                        n.FixedScaleAxis.super.constructor.call(
                          this,
                          e,
                          r,
                          this.ticks,
                          i
                        ),
                        (this.stepLength = this.axisLength / this.divisor);
                    },
                    projectValue: function (e) {
                      return (
                        (this.axisLength *
                          (+n.getMultiValue(e, this.units.pos) -
                            this.range.min)) /
                        (this.range.max - this.range.min)
                      );
                    },
                  });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  n.StepAxis = n.Axis.extend({
                    constructor: function (e, t, r, i) {
                      n.StepAxis.super.constructor.call(this, e, r, i.ticks, i);
                      var o = Math.max(1, i.ticks.length - (i.stretch ? 1 : 0));
                      this.stepLength = this.axisLength / o;
                    },
                    projectValue: function (e, t) {
                      return this.stepLength * t;
                    },
                  });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  var r = {
                    axisX: {
                      offset: 30,
                      position: "end",
                      labelOffset: { x: 0, y: 0 },
                      showLabel: !0,
                      showGrid: !0,
                      labelInterpolationFnc: n.noop,
                      type: void 0,
                    },
                    axisY: {
                      offset: 40,
                      position: "start",
                      labelOffset: { x: 0, y: 0 },
                      showLabel: !0,
                      showGrid: !0,
                      labelInterpolationFnc: n.noop,
                      type: void 0,
                      scaleMinSpace: 20,
                      onlyInteger: !1,
                    },
                    width: void 0,
                    height: void 0,
                    showLine: !0,
                    showPoint: !0,
                    showArea: !1,
                    areaBase: 0,
                    lineSmooth: !0,
                    showGridBackground: !1,
                    low: void 0,
                    high: void 0,
                    chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
                    fullWidth: !1,
                    reverseData: !1,
                    classNames: {
                      chart: "ct-chart-line",
                      label: "ct-label",
                      labelGroup: "ct-labels",
                      series: "ct-series",
                      line: "ct-line",
                      point: "ct-point",
                      area: "ct-area",
                      grid: "ct-grid",
                      gridGroup: "ct-grids",
                      gridBackground: "ct-grid-background",
                      vertical: "ct-vertical",
                      horizontal: "ct-horizontal",
                      start: "ct-start",
                      end: "ct-end",
                    },
                  };
                  n.Line = n.Base.extend({
                    constructor: function (e, t, i, o) {
                      n.Line.super.constructor.call(
                        this,
                        e,
                        t,
                        r,
                        n.extend({}, r, i),
                        o
                      );
                    },
                    createChart: function (e) {
                      var t = n.normalizeData(this.data, e.reverseData, !0);
                      this.svg = n.createSvg(
                        this.container,
                        e.width,
                        e.height,
                        e.classNames.chart
                      );
                      var i,
                        o,
                        s = this.svg.elem("g").addClass(e.classNames.gridGroup),
                        a = this.svg.elem("g"),
                        u = this.svg
                          .elem("g")
                          .addClass(e.classNames.labelGroup),
                        l = n.createChartRect(this.svg, e, r.padding);
                      (i =
                        void 0 === e.axisX.type
                          ? new n.StepAxis(
                              n.Axis.units.x,
                              t.normalized.series,
                              l,
                              n.extend({}, e.axisX, {
                                ticks: t.normalized.labels,
                                stretch: e.fullWidth,
                              })
                            )
                          : e.axisX.type.call(
                              n,
                              n.Axis.units.x,
                              t.normalized.series,
                              l,
                              e.axisX
                            )),
                        (o =
                          void 0 === e.axisY.type
                            ? new n.AutoScaleAxis(
                                n.Axis.units.y,
                                t.normalized.series,
                                l,
                                n.extend({}, e.axisY, {
                                  high: n.isNumeric(e.high)
                                    ? e.high
                                    : e.axisY.high,
                                  low: n.isNumeric(e.low) ? e.low : e.axisY.low,
                                })
                              )
                            : e.axisY.type.call(
                                n,
                                n.Axis.units.y,
                                t.normalized.series,
                                l,
                                e.axisY
                              )),
                        i.createGridAndLabels(
                          s,
                          u,
                          this.supportsForeignObject,
                          e,
                          this.eventEmitter
                        ),
                        o.createGridAndLabels(
                          s,
                          u,
                          this.supportsForeignObject,
                          e,
                          this.eventEmitter
                        ),
                        e.showGridBackground &&
                          n.createGridBackground(
                            s,
                            l,
                            e.classNames.gridBackground,
                            this.eventEmitter
                          ),
                        t.raw.series.forEach(
                          function (r, s) {
                            var u = a.elem("g");
                            u.attr({
                              "ct:series-name": r.name,
                              "ct:meta": n.serialize(r.meta),
                            }),
                              u.addClass(
                                [
                                  e.classNames.series,
                                  r.className ||
                                    e.classNames.series +
                                      "-" +
                                      n.alphaNumerate(s),
                                ].join(" ")
                              );
                            var c = [],
                              f = [];
                            t.normalized.series[s].forEach(
                              function (e, a) {
                                var u = {
                                  x:
                                    l.x1 +
                                    i.projectValue(
                                      e,
                                      a,
                                      t.normalized.series[s]
                                    ),
                                  y:
                                    l.y1 -
                                    o.projectValue(
                                      e,
                                      a,
                                      t.normalized.series[s]
                                    ),
                                };
                                c.push(u.x, u.y),
                                  f.push({
                                    value: e,
                                    valueIndex: a,
                                    meta: n.getMetaData(r, a),
                                  });
                              }.bind(this)
                            );
                            var d = {
                                lineSmooth: n.getSeriesOption(
                                  r,
                                  e,
                                  "lineSmooth"
                                ),
                                showPoint: n.getSeriesOption(r, e, "showPoint"),
                                showLine: n.getSeriesOption(r, e, "showLine"),
                                showArea: n.getSeriesOption(r, e, "showArea"),
                                areaBase: n.getSeriesOption(r, e, "areaBase"),
                              },
                              h = (
                                "function" == typeof d.lineSmooth
                                  ? d.lineSmooth
                                  : d.lineSmooth
                                  ? n.Interpolation.monotoneCubic()
                                  : n.Interpolation.none()
                              )(c, f);
                            if (
                              (d.showPoint &&
                                h.pathElements.forEach(
                                  function (t) {
                                    var a = u
                                      .elem(
                                        "line",
                                        {
                                          x1: t.x,
                                          y1: t.y,
                                          x2: t.x + 0.01,
                                          y2: t.y,
                                        },
                                        e.classNames.point
                                      )
                                      .attr({
                                        "ct:value": [
                                          t.data.value.x,
                                          t.data.value.y,
                                        ]
                                          .filter(n.isNumeric)
                                          .join(","),
                                        "ct:meta": n.serialize(t.data.meta),
                                      });
                                    this.eventEmitter.emit("draw", {
                                      type: "point",
                                      value: t.data.value,
                                      index: t.data.valueIndex,
                                      meta: t.data.meta,
                                      series: r,
                                      seriesIndex: s,
                                      axisX: i,
                                      axisY: o,
                                      group: u,
                                      element: a,
                                      x: t.x,
                                      y: t.y,
                                    });
                                  }.bind(this)
                                ),
                              d.showLine)
                            ) {
                              var p = u.elem(
                                "path",
                                { d: h.stringify() },
                                e.classNames.line,
                                !0
                              );
                              this.eventEmitter.emit("draw", {
                                type: "line",
                                values: t.normalized.series[s],
                                path: h.clone(),
                                chartRect: l,
                                index: s,
                                series: r,
                                seriesIndex: s,
                                seriesMeta: r.meta,
                                axisX: i,
                                axisY: o,
                                group: u,
                                element: p,
                              });
                            }
                            if (d.showArea && o.range) {
                              var m = Math.max(
                                  Math.min(d.areaBase, o.range.max),
                                  o.range.min
                                ),
                                g = l.y1 - o.projectValue(m);
                              h.splitByCommand("M")
                                .filter(function (e) {
                                  return e.pathElements.length > 1;
                                })
                                .map(function (e) {
                                  var t = e.pathElements[0],
                                    n =
                                      e.pathElements[e.pathElements.length - 1];
                                  return e
                                    .clone(!0)
                                    .position(0)
                                    .remove(1)
                                    .move(t.x, g)
                                    .line(t.x, t.y)
                                    .position(e.pathElements.length + 1)
                                    .line(n.x, g);
                                })
                                .forEach(
                                  function (n) {
                                    var a = u.elem(
                                      "path",
                                      { d: n.stringify() },
                                      e.classNames.area,
                                      !0
                                    );
                                    this.eventEmitter.emit("draw", {
                                      type: "area",
                                      values: t.normalized.series[s],
                                      path: n.clone(),
                                      series: r,
                                      seriesIndex: s,
                                      axisX: i,
                                      axisY: o,
                                      chartRect: l,
                                      index: s,
                                      group: u,
                                      element: a,
                                    });
                                  }.bind(this)
                                );
                            }
                          }.bind(this)
                        ),
                        this.eventEmitter.emit("created", {
                          bounds: o.bounds,
                          chartRect: l,
                          axisX: i,
                          axisY: o,
                          svg: this.svg,
                          options: e,
                        });
                    },
                  });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  var r = {
                    axisX: {
                      offset: 30,
                      position: "end",
                      labelOffset: { x: 0, y: 0 },
                      showLabel: !0,
                      showGrid: !0,
                      labelInterpolationFnc: n.noop,
                      scaleMinSpace: 30,
                      onlyInteger: !1,
                    },
                    axisY: {
                      offset: 40,
                      position: "start",
                      labelOffset: { x: 0, y: 0 },
                      showLabel: !0,
                      showGrid: !0,
                      labelInterpolationFnc: n.noop,
                      scaleMinSpace: 20,
                      onlyInteger: !1,
                    },
                    width: void 0,
                    height: void 0,
                    high: void 0,
                    low: void 0,
                    referenceValue: 0,
                    chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
                    seriesBarDistance: 15,
                    stackBars: !1,
                    stackMode: "accumulate",
                    horizontalBars: !1,
                    distributeSeries: !1,
                    reverseData: !1,
                    showGridBackground: !1,
                    classNames: {
                      chart: "ct-chart-bar",
                      horizontalBars: "ct-horizontal-bars",
                      label: "ct-label",
                      labelGroup: "ct-labels",
                      series: "ct-series",
                      bar: "ct-bar",
                      grid: "ct-grid",
                      gridGroup: "ct-grids",
                      gridBackground: "ct-grid-background",
                      vertical: "ct-vertical",
                      horizontal: "ct-horizontal",
                      start: "ct-start",
                      end: "ct-end",
                    },
                  };
                  n.Bar = n.Base.extend({
                    constructor: function (e, t, i, o) {
                      n.Bar.super.constructor.call(
                        this,
                        e,
                        t,
                        r,
                        n.extend({}, r, i),
                        o
                      );
                    },
                    createChart: function (e) {
                      var t, i;
                      e.distributeSeries
                        ? ((t = n.normalizeData(
                            this.data,
                            e.reverseData,
                            e.horizontalBars ? "x" : "y"
                          )).normalized.series = t.normalized.series.map(
                            function (e) {
                              return [e];
                            }
                          ))
                        : (t = n.normalizeData(
                            this.data,
                            e.reverseData,
                            e.horizontalBars ? "x" : "y"
                          )),
                        (this.svg = n.createSvg(
                          this.container,
                          e.width,
                          e.height,
                          e.classNames.chart +
                            (e.horizontalBars
                              ? " " + e.classNames.horizontalBars
                              : "")
                        ));
                      var o = this.svg
                          .elem("g")
                          .addClass(e.classNames.gridGroup),
                        s = this.svg.elem("g"),
                        a = this.svg
                          .elem("g")
                          .addClass(e.classNames.labelGroup);
                      if (e.stackBars && 0 !== t.normalized.series.length) {
                        var u = n.serialMap(t.normalized.series, function () {
                          return Array.prototype.slice
                            .call(arguments)
                            .map(function (e) {
                              return e;
                            })
                            .reduce(
                              function (e, t) {
                                return {
                                  x: e.x + (t && t.x) || 0,
                                  y: e.y + (t && t.y) || 0,
                                };
                              },
                              { x: 0, y: 0 }
                            );
                        });
                        i = n.getHighLow([u], e, e.horizontalBars ? "x" : "y");
                      } else
                        i = n.getHighLow(
                          t.normalized.series,
                          e,
                          e.horizontalBars ? "x" : "y"
                        );
                      (i.high = +e.high || (0 === e.high ? 0 : i.high)),
                        (i.low = +e.low || (0 === e.low ? 0 : i.low));
                      var l,
                        c,
                        f,
                        d,
                        h,
                        p = n.createChartRect(this.svg, e, r.padding);
                      (c =
                        e.distributeSeries && e.stackBars
                          ? t.normalized.labels.slice(0, 1)
                          : t.normalized.labels),
                        e.horizontalBars
                          ? ((l = d =
                              void 0 === e.axisX.type
                                ? new n.AutoScaleAxis(
                                    n.Axis.units.x,
                                    t.normalized.series,
                                    p,
                                    n.extend({}, e.axisX, {
                                      highLow: i,
                                      referenceValue: 0,
                                    })
                                  )
                                : e.axisX.type.call(
                                    n,
                                    n.Axis.units.x,
                                    t.normalized.series,
                                    p,
                                    n.extend({}, e.axisX, {
                                      highLow: i,
                                      referenceValue: 0,
                                    })
                                  )),
                            (f = h =
                              void 0 === e.axisY.type
                                ? new n.StepAxis(
                                    n.Axis.units.y,
                                    t.normalized.series,
                                    p,
                                    { ticks: c }
                                  )
                                : e.axisY.type.call(
                                    n,
                                    n.Axis.units.y,
                                    t.normalized.series,
                                    p,
                                    e.axisY
                                  )))
                          : ((f = d =
                              void 0 === e.axisX.type
                                ? new n.StepAxis(
                                    n.Axis.units.x,
                                    t.normalized.series,
                                    p,
                                    { ticks: c }
                                  )
                                : e.axisX.type.call(
                                    n,
                                    n.Axis.units.x,
                                    t.normalized.series,
                                    p,
                                    e.axisX
                                  )),
                            (l = h =
                              void 0 === e.axisY.type
                                ? new n.AutoScaleAxis(
                                    n.Axis.units.y,
                                    t.normalized.series,
                                    p,
                                    n.extend({}, e.axisY, {
                                      highLow: i,
                                      referenceValue: 0,
                                    })
                                  )
                                : e.axisY.type.call(
                                    n,
                                    n.Axis.units.y,
                                    t.normalized.series,
                                    p,
                                    n.extend({}, e.axisY, {
                                      highLow: i,
                                      referenceValue: 0,
                                    })
                                  )));
                      var m = e.horizontalBars
                          ? p.x1 + l.projectValue(0)
                          : p.y1 - l.projectValue(0),
                        g = [];
                      f.createGridAndLabels(
                        o,
                        a,
                        this.supportsForeignObject,
                        e,
                        this.eventEmitter
                      ),
                        l.createGridAndLabels(
                          o,
                          a,
                          this.supportsForeignObject,
                          e,
                          this.eventEmitter
                        ),
                        e.showGridBackground &&
                          n.createGridBackground(
                            o,
                            p,
                            e.classNames.gridBackground,
                            this.eventEmitter
                          ),
                        t.raw.series.forEach(
                          function (r, i) {
                            var o,
                              a,
                              u = i - (t.raw.series.length - 1) / 2;
                            (o =
                              e.distributeSeries && !e.stackBars
                                ? f.axisLength / t.normalized.series.length / 2
                                : e.distributeSeries && e.stackBars
                                ? f.axisLength / 2
                                : f.axisLength /
                                  t.normalized.series[i].length /
                                  2),
                              (a = s.elem("g")).attr({
                                "ct:series-name": r.name,
                                "ct:meta": n.serialize(r.meta),
                              }),
                              a.addClass(
                                [
                                  e.classNames.series,
                                  r.className ||
                                    e.classNames.series +
                                      "-" +
                                      n.alphaNumerate(i),
                                ].join(" ")
                              ),
                              t.normalized.series[i].forEach(
                                function (s, c) {
                                  var v, y, x, b;
                                  if (
                                    ((b =
                                      e.distributeSeries && !e.stackBars
                                        ? i
                                        : e.distributeSeries && e.stackBars
                                        ? 0
                                        : c),
                                    (v = e.horizontalBars
                                      ? {
                                          x:
                                            p.x1 +
                                            l.projectValue(
                                              s && s.x ? s.x : 0,
                                              c,
                                              t.normalized.series[i]
                                            ),
                                          y:
                                            p.y1 -
                                            f.projectValue(
                                              s && s.y ? s.y : 0,
                                              b,
                                              t.normalized.series[i]
                                            ),
                                        }
                                      : {
                                          x:
                                            p.x1 +
                                            f.projectValue(
                                              s && s.x ? s.x : 0,
                                              b,
                                              t.normalized.series[i]
                                            ),
                                          y:
                                            p.y1 -
                                            l.projectValue(
                                              s && s.y ? s.y : 0,
                                              c,
                                              t.normalized.series[i]
                                            ),
                                        }),
                                    f instanceof n.StepAxis &&
                                      (f.options.stretch ||
                                        (v[f.units.pos] +=
                                          o * (e.horizontalBars ? -1 : 1)),
                                      (v[f.units.pos] +=
                                        e.stackBars || e.distributeSeries
                                          ? 0
                                          : u *
                                            e.seriesBarDistance *
                                            (e.horizontalBars ? -1 : 1))),
                                    (x = g[c] || m),
                                    (g[c] = x - (m - v[f.counterUnits.pos])),
                                    void 0 !== s)
                                  ) {
                                    var w = {};
                                    (w[f.units.pos + "1"] = v[f.units.pos]),
                                      (w[f.units.pos + "2"] = v[f.units.pos]),
                                      !e.stackBars ||
                                      ("accumulate" !== e.stackMode &&
                                        e.stackMode)
                                        ? ((w[f.counterUnits.pos + "1"] = m),
                                          (w[f.counterUnits.pos + "2"] =
                                            v[f.counterUnits.pos]))
                                        : ((w[f.counterUnits.pos + "1"] = x),
                                          (w[f.counterUnits.pos + "2"] = g[c])),
                                      (w.x1 = Math.min(
                                        Math.max(w.x1, p.x1),
                                        p.x2
                                      )),
                                      (w.x2 = Math.min(
                                        Math.max(w.x2, p.x1),
                                        p.x2
                                      )),
                                      (w.y1 = Math.min(
                                        Math.max(w.y1, p.y2),
                                        p.y1
                                      )),
                                      (w.y2 = Math.min(
                                        Math.max(w.y2, p.y2),
                                        p.y1
                                      ));
                                    var C = n.getMetaData(r, c);
                                    (y = a
                                      .elem("line", w, e.classNames.bar)
                                      .attr({
                                        "ct:value": [s.x, s.y]
                                          .filter(n.isNumeric)
                                          .join(","),
                                        "ct:meta": n.serialize(C),
                                      })),
                                      this.eventEmitter.emit(
                                        "draw",
                                        n.extend(
                                          {
                                            type: "bar",
                                            value: s,
                                            index: c,
                                            meta: C,
                                            series: r,
                                            seriesIndex: i,
                                            axisX: d,
                                            axisY: h,
                                            chartRect: p,
                                            group: a,
                                            element: y,
                                          },
                                          w
                                        )
                                      );
                                  }
                                }.bind(this)
                              );
                          }.bind(this)
                        ),
                        this.eventEmitter.emit("created", {
                          bounds: l.bounds,
                          chartRect: p,
                          axisX: d,
                          axisY: h,
                          svg: this.svg,
                          options: e,
                        });
                    },
                  });
                })(window, document, e),
                (function (e, t, n) {
                  "use strict";
                  var r = {
                    width: void 0,
                    height: void 0,
                    chartPadding: 5,
                    classNames: {
                      chartPie: "ct-chart-pie",
                      chartDonut: "ct-chart-donut",
                      series: "ct-series",
                      slicePie: "ct-slice-pie",
                      sliceDonut: "ct-slice-donut",
                      sliceDonutSolid: "ct-slice-donut-solid",
                      label: "ct-label",
                    },
                    startAngle: 0,
                    total: void 0,
                    donut: !1,
                    donutSolid: !1,
                    donutWidth: 60,
                    showLabel: !0,
                    labelOffset: 0,
                    labelPosition: "inside",
                    labelInterpolationFnc: n.noop,
                    labelDirection: "neutral",
                    reverseData: !1,
                    ignoreEmptyValues: !1,
                  };
                  function i(e, t, n) {
                    var r = t.x > e.x;
                    return (r && "explode" === n) || (!r && "implode" === n)
                      ? "start"
                      : (r && "implode" === n) || (!r && "explode" === n)
                      ? "end"
                      : "middle";
                  }
                  n.Pie = n.Base.extend({
                    constructor: function (e, t, i, o) {
                      n.Pie.super.constructor.call(
                        this,
                        e,
                        t,
                        r,
                        n.extend({}, r, i),
                        o
                      );
                    },
                    createChart: function (e) {
                      var t,
                        o,
                        s,
                        a,
                        u,
                        l = n.normalizeData(this.data),
                        c = [],
                        f = e.startAngle;
                      (this.svg = n.createSvg(
                        this.container,
                        e.width,
                        e.height,
                        e.donut
                          ? e.classNames.chartDonut
                          : e.classNames.chartPie
                      )),
                        (o = n.createChartRect(this.svg, e, r.padding)),
                        (s = Math.min(o.width() / 2, o.height() / 2)),
                        (u =
                          e.total ||
                          l.normalized.series.reduce(function (e, t) {
                            return e + t;
                          }, 0));
                      var d = n.quantity(e.donutWidth);
                      "%" === d.unit && (d.value *= s / 100),
                        (s -= e.donut && !e.donutSolid ? d.value / 2 : 0),
                        (a =
                          "outside" === e.labelPosition ||
                          (e.donut && !e.donutSolid)
                            ? s
                            : "center" === e.labelPosition
                            ? 0
                            : e.donutSolid
                            ? s - d.value / 2
                            : s / 2),
                        (a += e.labelOffset);
                      var h = {
                          x: o.x1 + o.width() / 2,
                          y: o.y2 + o.height() / 2,
                        },
                        p =
                          1 ===
                          l.raw.series.filter(function (e) {
                            return e.hasOwnProperty("value")
                              ? 0 !== e.value
                              : 0 !== e;
                          }).length;
                      l.raw.series.forEach(
                        function (e, t) {
                          c[t] = this.svg.elem("g", null, null);
                        }.bind(this)
                      ),
                        e.showLabel && (t = this.svg.elem("g", null, null)),
                        l.raw.series.forEach(
                          function (r, o) {
                            if (
                              0 !== l.normalized.series[o] ||
                              !e.ignoreEmptyValues
                            ) {
                              c[o].attr({ "ct:series-name": r.name }),
                                c[o].addClass(
                                  [
                                    e.classNames.series,
                                    r.className ||
                                      e.classNames.series +
                                        "-" +
                                        n.alphaNumerate(o),
                                  ].join(" ")
                                );
                              var m =
                                  u > 0
                                    ? f + (l.normalized.series[o] / u) * 360
                                    : 0,
                                g = Math.max(0, f - (0 === o || p ? 0 : 0.2));
                              m - g >= 359.99 && (m = g + 359.99);
                              var v,
                                y,
                                x,
                                b = n.polarToCartesian(h.x, h.y, s, g),
                                w = n.polarToCartesian(h.x, h.y, s, m),
                                C = new n.Svg.Path(!e.donut || e.donutSolid)
                                  .move(w.x, w.y)
                                  .arc(s, s, 0, m - f > 180, 0, b.x, b.y);
                              e.donut
                                ? e.donutSolid &&
                                  ((x = s - d.value),
                                  (v = n.polarToCartesian(
                                    h.x,
                                    h.y,
                                    x,
                                    f - (0 === o || p ? 0 : 0.2)
                                  )),
                                  (y = n.polarToCartesian(h.x, h.y, x, m)),
                                  C.line(v.x, v.y),
                                  C.arc(x, x, 0, m - f > 180, 1, y.x, y.y))
                                : C.line(h.x, h.y);
                              var E = e.classNames.slicePie;
                              e.donut &&
                                ((E = e.classNames.sliceDonut),
                                e.donutSolid &&
                                  (E = e.classNames.sliceDonutSolid));
                              var S = c[o].elem(
                                "path",
                                { d: C.stringify() },
                                E
                              );
                              if (
                                (S.attr({
                                  "ct:value": l.normalized.series[o],
                                  "ct:meta": n.serialize(r.meta),
                                }),
                                e.donut &&
                                  !e.donutSolid &&
                                  (S._node.style.strokeWidth = d.value + "px"),
                                this.eventEmitter.emit("draw", {
                                  type: "slice",
                                  value: l.normalized.series[o],
                                  totalDataSum: u,
                                  index: o,
                                  meta: r.meta,
                                  series: r,
                                  group: c[o],
                                  element: S,
                                  path: C.clone(),
                                  center: h,
                                  radius: s,
                                  startAngle: f,
                                  endAngle: m,
                                }),
                                e.showLabel)
                              ) {
                                var T, A;
                                (T =
                                  1 === l.raw.series.length
                                    ? { x: h.x, y: h.y }
                                    : n.polarToCartesian(
                                        h.x,
                                        h.y,
                                        a,
                                        f + (m - f) / 2
                                      )),
                                  (A =
                                    l.normalized.labels &&
                                    !n.isFalseyButZero(l.normalized.labels[o])
                                      ? l.normalized.labels[o]
                                      : l.normalized.series[o]);
                                var N = e.labelInterpolationFnc(A, o);
                                if (N || 0 === N) {
                                  var k = t
                                    .elem(
                                      "text",
                                      {
                                        dx: T.x,
                                        dy: T.y,
                                        "text-anchor": i(
                                          h,
                                          T,
                                          e.labelDirection
                                        ),
                                      },
                                      e.classNames.label
                                    )
                                    .text("" + N);
                                  this.eventEmitter.emit("draw", {
                                    type: "label",
                                    index: o,
                                    group: t,
                                    element: k,
                                    text: "" + N,
                                    x: T.x,
                                    y: T.y,
                                  });
                                }
                              }
                              f = m;
                            }
                          }.bind(this)
                        ),
                        this.eventEmitter.emit("created", {
                          chartRect: o,
                          svg: this.svg,
                          options: e,
                        });
                    },
                    determineAnchorPosition: i,
                  });
                })(window, document, e),
                e
              );
            })());
          }.apply(t, [])) || (e.exports = r);
      })(this);
    },
  ],
]);
