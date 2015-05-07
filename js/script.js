(function(a) {
    a.address = function() {
        var b = function(b) {
                a(a.address).trigger(a.extend(a.Event(b), function() {
                    var b = {},
                        c = a.address.parameterNames();
                    for (var d = 0, e = c.length; d < e; d++) {
                        b[c[d]] = a.address.parameter(c[d])
                    }
                    return {
                        value: a.address.value(),
                        path: a.address.path(),
                        pathNames: a.address.pathNames(),
                        parameterNames: c,
                        parameters: b,
                        queryString: a.address.queryString()
                    }
                }.call(a.address)))
            },
            c = function(a) {
                return Array.prototype.slice.call(a)
            },
            d = function(b, c, d) {
                a().bind.apply(a(a.address), Array.prototype.slice.call(arguments));
                return a.address
            },
            e = function() {
                return S.pushState && I.state !== y
            },
            f = function() {
                return ("/" + T.pathname.replace(new RegExp(I.state), "") + T.search + (g() ? "#" + g() : "")).replace(W, "/")
            },
            g = function() {
                var a = T.href.indexOf("#");
                return a != -1 ? m(T.href.substr(a + 1), H) : ""
            },
            h = function() {
                return e() ? f() : g()
            },
            j = function() {
                try {
                    return top.document !== y ? top : window
                } catch (a) {
                    return window
                }
            },
            k = function() {
                return "javascript"
            },
            l = function(a) {
                a = a.toString();
                return (I.strict && a.substr(0, 1) != "/" ? "/" : "") + a
            },
            m = function(a, b) {
                if (I.crawlable && b) {
                    return (a !== "" ? "!" : "") + a
                }
                return a.replace(/^\!/, "")
            },
            n = function(a, b) {
                return parseInt(a.css(b), 10)
            },
            o = function() {
                if (!bc) {
                    var a = h(),
                        b = bi != a;
                    if (b) {
                        if (M && K < 7) {
                            T.reload()
                        } else {
                            if (M && K < 8 && I.history) {
                                V(r, 50)
                            }
                            bi = a;
                            p(H)
                        }
                    }
                }
            },
            p = function(a) {
                b(D);
                b(a ? E : F);
                V(q, 10)
            },
            q = function() {
                if (I.tracker !== "null" && I.tracker !== null) {
                    var b = a.isFunction(I.tracker) ? I.tracker : Q[I.tracker],
                        c = (T.pathname + T.search + (a.address && !e() ? a.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
                    if (a.isFunction(b)) {
                        b(c)
                    } else if (a.isFunction(Q.urchinTracker)) {
                        Q.urchinTracker(c)
                    } else if (Q.pageTracker !== y && a.isFunction(Q.pageTracker._trackPageview)) {
                        Q.pageTracker._trackPageview(c)
                    } else if (Q._gaq !== y && a.isFunction(Q._gaq.push)) {
                        Q._gaq.push(["_trackPageview", decodeURI(c)])
                    }
                }
            },
            r = function() {
                var a = k() + ":" + H + ";document.open();document.writeln('<html><head><title>" + R.title.replace("'", "\\'") + "</title><script>var " + z + ' = "' + encodeURIComponent(h()) + (R.domain != T.hostname ? '";document.domain="' + R.domain : "") + '";</' + "script></head></html>');document.close();";
                if (K < 7) {
                    Y.src = a
                } else {
                    Y.contentWindow.location.replace(a)
                }
            },
            s = function() {
                if (_ && ba != -1) {
                    var a, b = _.substr(ba + 1).split("&");
                    for (i = 0; i < b.length; i++) {
                        a = b[i].split("=");
                        if (/^(autoUpdate|crawlable|history|strict|wrap)$/.test(a[0])) {
                            I[a[0]] = isNaN(a[1]) ? /^(true|yes)$/i.test(a[1]) : parseInt(a[1], 10) !== 0
                        }
                        if (/^(state|tracker)$/.test(a[0])) {
                            I[a[0]] = a[1]
                        }
                    }
                    _ = null
                }
                bi = h()
            },
            t = function() {
                if (!bd) {
                    bd = G;
                    s();
                    var c = function() {
                            u.call(this);
                            x.call(this)
                        },
                        d = a("body").ajaxComplete(c);
                    c();
                    if (I.wrap) {
                        var f = a("body > *").wrapAll('<div style="padding:' + (n(d, "marginTop") + n(d, "paddingTop")) + "px " + (n(d, "marginRight") + n(d, "paddingRight")) + "px " + (n(d, "marginBottom") + n(d, "paddingBottom")) + "px " + (n(d, "marginLeft") + n(d, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + z + '" style="height:100%;overflow:auto;position:relative;' + (O && !window.statusbar.visible ? "resize:both;" : "") + '" />');
                        a("html, body").css({
                            height: "100%",
                            margin: 0,
                            padding: 0,
                            overflow: "hidden"
                        });
                        if (O) {
                            a('<style type="text/css" />').appendTo("head").text("#" + z + "::-webkit-resizer { background-color: #fff; }")
                        }
                    }
                    if (M && K < 8) {
                        var g = R.getElementsByTagName("frameset")[0];
                        Y = R.createElement((g ? "" : "i") + "frame");
                        if (g) {
                            g.insertAdjacentElement("beforeEnd", Y);
                            g[g.cols ? "cols" : "rows"] += ",0";
                            Y.noResize = G;
                            Y.frameBorder = Y.frameSpacing = 0
                        } else {
                            Y.style.display = "none";
                            Y.style.width = Y.style.height = 0;
                            Y.tabIndex = -1;
                            R.body.insertAdjacentElement("afterBegin", Y)
                        }
                        V(function() {
                            a(Y).bind("load", function() {
                                var a = Y.contentWindow;
                                bi = a[z] !== y ? a[z] : "";
                                if (bi != h()) {
                                    p(H);
                                    T.hash = m(bi, G)
                                }
                            });
                            if (Y.contentWindow[z] === y) {
                                r()
                            }
                        }, 50)
                    }
                    V(function() {
                        b("init");
                        p(H)
                    }, 1);
                    if (!e()) {
                        if (M && K > 7 || !M && "on" + B in Q) {
                            if (Q.addEventListener) {
                                Q.addEventListener(B, o, H)
                            } else if (Q.attachEvent) {
                                Q.attachEvent("on" + B, o)
                            }
                        } else {
                            U(o, 50)
                        }
                    }
                }
            },
            u = function() {
                var b, c = a("a"),
                    d = c.size(),
                    e = 1,
                    f = -1,
                    g = function() {
                        if (++f != d) {
                            b = a(c.get(f));
                            if (b.is('[rel*="address:"]')) {
                                b.address()
                            }
                            V(g, e)
                        }
                    };
                V(g, e)
            },
            v = function() {
                if (bi != h()) {
                    bi = h();
                    p(H)
                }
            },
            w = function() {
                if (Q.removeEventListener) {
                    Q.removeEventListener(B, o, H)
                } else if (Q.detachEvent) {
                    Q.detachEvent("on" + B, o)
                }
            },
            x = function() {
                if (I.crawlable) {
                    var b = T.pathname.replace(/\/$/, ""),
                        c = "_escaped_fragment_";
                    if (a("body").html().indexOf(c) != -1) {
                        a('a[href]:not([href^=http]), a[href*="' + document.domain + '"]').each(function() {
                            var d = a(this).attr("href").replace(/^http:/, "").replace(new RegExp(b + "/?$"), "");
                            if (d === "" || d.indexOf(c) != -1) {
                                a(this).attr("href", "#" + d.replace(new RegExp("/(.*)\\?" + c + "=(.*)$"), "!$2"))
                            }
                        })
                    }
                }
            },
            y, z = "jQueryAddress",
            A = "string",
            B = "hashchange",
            C = "init",
            D = "change",
            E = "internalChange",
            F = "externalChange",
            G = true,
            H = false,
            I = {
                autoUpdate: G,
                crawlable: H,
                history: G,
                strict: G,
                wrap: H
            },
            J = a.browser,
            K = parseFloat(a.browser.version),
            L = J.mozilla,
            M = J.msie,
            N = J.opera,
            O = J.webkit || J.safari,
            P = H,
            Q = j(),
            R = Q.document,
            S = Q.history,
            T = Q.location,
            U = setInterval,
            V = setTimeout,
            W = /\/{2,9}/g,
            X = navigator.userAgent,
            Y, Z, _ = a("script:last").attr("src"),
            ba = _ ? _.indexOf("?") : -1,
            bb = R.title,
            bc = H,
            bd = H,
            be = G,
            bf = G,
            bg = H,
            bh = {},
            bi = h();
        if (M) {
            K = parseFloat(X.substr(X.indexOf("MSIE") + 4));
            if (R.documentMode && R.documentMode != K) {
                K = R.documentMode != 8 ? 7 : 8
            }
            var bj = R.onpropertychange;
            R.onpropertychange = function() {
                if (bj) {
                    bj.call(R)
                }
                if (R.title != bb && R.title.indexOf("#" + h()) != -1) {
                    R.title = bb
                }
            }
        }
        P = L && K >= 1 || M && K >= 6 || N && K >= 9.5 || O && K >= 523;
        if (P) {
            if (N) {
                history.navigationMode = "compatible"
            }
            if (document.readyState == "complete") {
                var bk = setInterval(function() {
                    if (a.address) {
                        t();
                        clearInterval(bk)
                    }
                }, 50)
            } else {
                s();
                a(t)
            }
            a(window).bind("popstate", v).bind("unload", w)
        } else if (!P && g() !== "") {
            T.replace(T.href.substr(0, T.href.indexOf("#")))
        } else {
            q()
        }
        return {
            bind: function(a, b, e) {
                return d.apply(this, c(arguments))
            },
            init: function(a, b) {
                return d.apply(this, [C].concat(c(arguments)))
            },
            change: function(a, b) {
                return d.apply(this, [D].concat(c(arguments)))
            },
            internalChange: function(a, b) {
                return d.apply(this, [E].concat(c(arguments)))
            },
            externalChange: function(a, b) {
                return d.apply(this, [F].concat(c(arguments)))
            },
            baseURL: function() {
                var a = T.href;
                if (a.indexOf("#") != -1) {
                    a = a.substr(0, a.indexOf("#"))
                }
                if (/\/$/.test(a)) {
                    a = a.substr(0, a.length - 1)
                }
                return a
            },
            autoUpdate: function(a) {
                if (a !== y) {
                    I.autoUpdate = a;
                    return this
                }
                return I.autoUpdate
            },
            crawlable: function(a) {
                if (a !== y) {
                    I.crawlable = a;
                    return this
                }
                return I.crawlable
            },
            history: function(a) {
                if (a !== y) {
                    I.history = a;
                    return this
                }
                return I.history
            },
            state: function(a) {
                if (a !== y) {
                    I.state = a;
                    var b = f();
                    if (I.state !== y) {
                        if (S.pushState) {
                            if (b.substr(0, 3) == "/#/") {
                                T.replace(I.state.replace(/^\/$/, "") + b.substr(2))
                            }
                        } else if (b != "/" && b.replace(/^\/#/, "") != g()) {
                            V(function() {
                                T.replace(I.state.replace(/^\/$/, "") + "/#" + b)
                            }, 1)
                        }
                    }
                    return this
                }
                return I.state
            },
            strict: function(a) {
                if (a !== y) {
                    I.strict = a;
                    return this
                }
                return I.strict
            },
            tracker: function(a) {
                if (a !== y) {
                    I.tracker = a;
                    return this
                }
                return I.tracker
            },
            wrap: function(a) {
                if (a !== y) {
                    I.wrap = a;
                    return this
                }
                return I.wrap
            },
            update: function() {
                bg = G;
                this.value(bi);
                bg = H;
                return this
            },
            title: function(a) {
                if (a !== y) {
                    V(function() {
                        bb = R.title = a;
                        if (bf && Y && Y.contentWindow && Y.contentWindow.document) {
                            Y.contentWindow.document.title = a;
                            bf = H
                        }
                        if (!be && L) {
                            T.replace(T.href.indexOf("#") != -1 ? T.href : T.href + "#")
                        }
                        be = H
                    }, 50);
                    return this
                }
                return R.title
            },
            value: function(a) {
                if (a !== y) {
                    a = l(a);
                    if (a == "/") {
                        a = ""
                    }
                    if (bi == a && !bg) {
                        return
                    }
                    be = G;
                    bi = a;
                    if (I.autoUpdate || bg) {
                        p(G);
                        if (e()) {
                            S[I.history ? "pushState" : "replaceState"]({}, "", I.state.replace(/\/$/, "") + (bi === "" ? "/" : bi))
                        } else {
                            bc = G;
                            if (O) {
                                if (I.history) {
                                    T.hash = "#" + m(bi, G)
                                } else {
                                    T.replace("#" + m(bi, G))
                                }
                            } else if (bi != h()) {
                                if (I.history) {
                                    T.hash = "#" + m(bi, G)
                                } else {
                                    T.replace("#" + m(bi, G))
                                }
                            }
                            if (M && K < 8 && I.history) {
                                V(r, 50)
                            }
                            if (O) {
                                V(function() {
                                    bc = H
                                }, 1)
                            } else {
                                bc = H
                            }
                        }
                    }
                    return this
                }
                if (!P) {
                    return null
                }
                return l(bi)
            },
            path: function(a) {
                if (a !== y) {
                    var b = this.queryString(),
                        c = this.hash();
                    this.value(a + (b ? "?" + b : "") + (c ? "#" + c : ""));
                    return this
                }
                return l(bi).split("#")[0].split("?")[0]
            },
            pathNames: function() {
                var a = this.path(),
                    b = a.replace(W, "/").split("/");
                if (a.substr(0, 1) == "/" || a.length === 0) {
                    b.splice(0, 1)
                }
                if (a.substr(a.length - 1, 1) == "/") {
                    b.splice(b.length - 1, 1)
                }
                return b
            },
            queryString: function(a) {
                if (a !== y) {
                    var b = this.hash();
                    this.value(this.path() + (a ? "?" + a : "") + (b ? "#" + b : ""));
                    return this
                }
                var c = bi.split("?");
                return c.slice(1, c.length).join("?").split("#")[0]
            },
            parameter: function(b, c, d) {
                var e, f;
                if (c !== y) {
                    var g = this.parameterNames();
                    f = [];
                    c = c ? c.toString() : "";
                    for (e = 0; e < g.length; e++) {
                        var h = g[e],
                            i = this.parameter(h);
                        if (typeof i == A) {
                            i = [i]
                        }
                        if (h == b) {
                            i = c === null || c === "" ? [] : d ? i.concat([c]) : [c]
                        }
                        for (var j = 0; j < i.length; j++) {
                            f.push(h + "=" + i[j])
                        }
                    }
                    if (a.inArray(b, g) == -1 && c !== null && c !== "") {
                        f.push(b + "=" + c)
                    }
                    this.queryString(f.join("&"));
                    return this
                }
                c = this.queryString();
                if (c) {
                    var k = [];
                    f = c.split("&");
                    for (e = 0; e < f.length; e++) {
                        var l = f[e].split("=");
                        if (l[0] == b) {
                            k.push(l.slice(1).join("="))
                        }
                    }
                    if (k.length !== 0) {
                        return k.length != 1 ? k : k[0]
                    }
                }
            },
            parameterNames: function() {
                var b = this.queryString(),
                    c = [];
                if (b && b.indexOf("=") != -1) {
                    var d = b.split("&");
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e].split("=")[0];
                        if (a.inArray(f, c) == -1) {
                            c.push(f)
                        }
                    }
                }
                return c
            },
            hash: function(a) {
                if (a !== y) {
                    this.value(bi.split("#")[0] + (a ? "#" + a : ""));
                    return this
                }
                var b = bi.split("#");
                return b.slice(1, b.length).join("#")
            }
        }
    }();
    a.fn.address = function(b) {
        if (!a(this).attr("address")) {
            var c = function(c) {
                    if (c.shiftKey || c.ctrlKey || c.metaKey || c.which == 2) {
                        return true
                    }
                    if (a(this).is("a")) {
                        c.preventDefault();
                        var d = b ? b.call(this) : /address:/.test(a(this).attr("rel")) ? a(this).attr("rel").split("address:")[1].split(" ")[0] : a.address.state() !== undefined && a.address.state() != "/" ? a(this).attr("href").replace(new RegExp("^(.*" + a.address.state() + "|\\.)"), "") : a(this).attr("href").replace(/^(#\!?|\.)/, "");
                        a.address.value(d)
                    }
                };
            a(this).live("click", c).live("submit", function(c) {
                if (a(this).is("form")) {
                    c.preventDefault();
                    var d = a(this).attr("action"),
                        e = b ? b.call(this) : (d.indexOf("?") != -1 ? d.replace(/&$/, "") : d + "?") + a(this).serialize();
                    a.address.value(e)
                }
            }).attr("address", true)
        }
        return this
    }
})(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1) return d / 2 * b * b + c;
        return -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1) return d / 2 * b * b * b + c;
        return d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1) return d / 2 * b * b * b * b + c;
        return -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1) return d / 2 * b * b * b * b * b + c;
        return d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
        return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
        if (b == 0) return c;
        if (b == e) return c + d;
        if ((b /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (b - 1)) + c;
        return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
        if ((b /= e / 2) < 1) return -d / 2 * (Math.sqrt(1 - b * b) - 1) + c;
        return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0) return c;
        if ((b /= e) == 1) return c + d;
        if (!g) g = e * .3;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0) return c;
        if ((b /= e) == 1) return c + d;
        if (!g) g = e * .3;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158;
        var g = 0;
        var h = d;
        if (b == 0) return c;
        if ((b /= e / 2) == 2) return c + d;
        if (!g) g = e * .3 * 1.5;
        if (h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        if (b < 1) return -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c;
        return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
        if (f == undefined) f = 1.70158;
        return d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
        if (f == undefined) f = 1.70158;
        return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        if (f == undefined) f = 1.70158;
        if ((b /= e / 2) < 1) return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c;
        return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
        if ((b /= e) < 1 / 2.75) {
            return d * 7.5625 * b * b + c
        } else if (b < 2 / 2.75) {
            return d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c
        } else if (b < 2.5 / 2.75) {
            return d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c
        } else {
            return d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        }
    },
    easeInOutBounce: function(a, b, c, d, e) {
        if (b < e / 2) return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c;
        return jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c
    }
});
(function(a, b) {
    var c = Array.prototype.slice;
    var d = a.cleanData;
    a.cleanData = function(b) {
        for (var c = 0, e;
        (e = b[c]) != null; c++) {
            try {
                a(e).triggerHandler("remove")
            } catch (f) {}
        }
        d(b)
    };
    a.widget = function(b, c, d) {
        var e, f, g, h, i = b.split(".")[0];
        b = b.split(".")[1];
        e = i + "-" + b;
        if (!d) {
            d = c;
            c = a.Widget
        }
        a.expr[":"][e] = function(c) {
            return !!a.data(c, b)
        };
        a[i] = a[i] || {};
        f = a[i][b];
        g = a[i][b] = function(a, b) {
            if (!this._createWidget) {
                return new g(a, b)
            }
            if (arguments.length) {
                this._createWidget(a, b)
            }
        };
        a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        });
        h = new c;
        h.options = a.widget.extend({}, h.options);
        a.each(d, function(b, e) {
            if (a.isFunction(e)) {
                d[b] = function() {
                    var a = function() {
                            return c.prototype[b].apply(this, arguments)
                        };
                    var d = function(a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function() {
                        var b = this._super,
                            c = this._superApply,
                            f;
                        this._super = a;
                        this._superApply = d;
                        f = e.apply(this, arguments);
                        this._super = b;
                        this._superApply = c;
                        return f
                    }
                }()
            }
        });
        g.prototype = a.widget.extend(h, {
            widgetEventPrefix: b
        }, d, {
            constructor: g,
            namespace: i,
            widgetName: b,
            widgetBaseClass: e
        });
        if (f) {
            a.each(f._childConstructors, function(b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            });
            delete f._childConstructors
        } else {
            c._childConstructors.push(g)
        }
        a.widget.bridge(b, g)
    };
    a.widget.extend = function(d) {
        var e = c.call(arguments, 1),
            f = 0,
            g = e.length,
            h, i;
        for (; f < g; f++) {
            for (h in e[f]) {
                i = e[f][h];
                if (e[f].hasOwnProperty(h) && i !== b) {
                    d[h] = a.isPlainObject(i) ? a.widget.extend({}, d[h], i) : i
                }
            }
        }
        return d
    };
    a.widget.bridge = function(d, e) {
        a.fn[d] = function(f) {
            var g = typeof f === "string",
                h = c.call(arguments, 1),
                i = this;
            f = !g && h.length ? a.widget.extend.apply(null, [f].concat(h)) : f;
            if (g) {
                this.each(function() {
                    var c = a.data(this, d);
                    if (!c) {
                        return a.error("cannot call methods on " + d + " prior to initialization; " + "attempted to call method '" + f + "'")
                    }
                    if (!a.isFunction(c[f]) || f.charAt(0) === "_") {
                        return a.error("no such method '" + f + "' for " + d + " widget instance")
                    }
                    var e = c[f].apply(c, h);
                    if (e !== c && e !== b) {
                        i = e && e.jquery ? i.pushStack(e.get()) : e;
                        return false
                    }
                })
            } else {
                this.each(function() {
                    var b = a.data(this, d);
                    if (b) {
                        b.option(f || {})._init()
                    } else {
                        new e(f, this)
                    }
                })
            }
            return i
        }
    };
    a.Widget = function(a, b) {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(b, c) {
            c = a(c || this.defaultElement || this)[0];
            this.element = a(c);
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b);
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            if (c !== this) {
                a.data(c, this.widgetName, this);
                this._bind({
                    remove: "destroy"
                });
                this.document = a(c.style ? c.ownerDocument : c.document || c);
                this.window = a(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled");
            this.bindings.unbind("." + this.widgetName);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(c, d) {
            var e = c,
                f, g, h;
            if (arguments.length === 0) {
                return a.widget.extend({}, this.options)
            }
            if (typeof c === "string") {
                e = {};
                f = c.split(".");
                c = f.shift();
                if (f.length) {
                    g = e[c] = a.widget.extend({}, this.options[c]);
                    for (h = 0; h < f.length - 1; h++) {
                        g[f[h]] = g[f[h]] || {};
                        g = g[f[h]]
                    }
                    c = f.pop();
                    if (d === b) {
                        return g[c] === b ? null : g[c]
                    }
                    g[c] = d
                } else {
                    if (d === b) {
                        return this.options[c] === b ? null : this.options[c]
                    }
                    e[c] = d
                }
            }
            this._setOptions(e);
            return this
        },
        _setOptions: function(a) {
            var b;
            for (b in a) {
                this._setOption(b, a[b])
            }
            return this
        },
        _setOption: function(a, b) {
            this.options[a] = b;
            if (a === "disabled") {
                this.widget().toggleClass(this.widgetBaseClass + "-disabled ui-state-disabled", !! b).attr("aria-disabled", b);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            }
            return this
        },
        enable: function() {
            return this._setOption("disabled", false)
        },
        disable: function() {
            return this._setOption("disabled", true)
        },
        _bind: function(b, c) {
            if (!c) {
                c = b;
                b = this.element
            } else {
                b = a(b);
                this.bindings = this.bindings.add(b)
            }
            var d = this;
            a.each(c, function(c, e) {
                function f() {
                    if (d.options.disabled === true || a(this).hasClass("ui-state-disabled")) {
                        return
                    }
                    return (typeof e === "string" ? d[e] : e).apply(d, arguments)
                }
                if (typeof e !== "string") {
                    f.guid = e.guid = e.guid || f.guid || jQuery.guid++
                }
                var g = c.match(/^(\w+)\s*(.*)$/),
                    h = g[1] + "." + d.widgetName,
                    i = g[2];
                if (i) {
                    d.widget().delegate(i, h, f)
                } else {
                    b.bind(h, f)
                }
            })
        },
        _delay: function(a, b) {
            function c() {
                return (typeof a === "string" ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b);
            this._bind(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b);
            this._bind(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            d = d || {};
            c = a.Event(c);
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
            c.target = this.element[0];
            f = c.originalEvent;
            if (f) {
                for (e in f) {
                    if (!(e in c)) {
                        c[e] = f[e]
                    }
                }
            }
            this.element.trigger(c, d);
            return !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === false || c.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            if (typeof e === "string") {
                e = {
                    effect: e
                }
            }
            var g, h = !e ? b : e === true || typeof e === "number" ? c : e.effect || c;
            e = e || {};
            if (typeof e === "number") {
                e = {
                    duration: e
                }
            }
            g = !a.isEmptyObject(e);
            e.complete = f;
            if (e.delay) {
                d.delay(e.delay)
            }
            if (g && a.effects && (a.effects.effect[h] || a.uiBackCompat !== false && a.effects[h])) {
                d[b](e)
            } else if (h !== b && d[h]) {
                d[h](e.duration, e.easing, f)
            } else {
                d.queue(function(c) {
                    a(this)[b]();
                    if (f) {
                        f.call(d[0])
                    }
                    c()
                })
            }
        }
    });
    if (a.uiBackCompat !== false) {
        a.Widget.prototype._getCreateOptions = function() {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        }
    }
})(jQuery);
(function(a) {
    function d(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = true,
            g = 0,
            h = 0;
        b = a.event.fix(c);
        b.type = "mousewheel";
        if (c.wheelDelta) {
            e = c.wheelDelta / 120
        }
        if (c.detail) {
            e = -c.detail / 3
        }
        h = e;
        if (c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS) {
            h = 0;
            g = -1 * e
        }
        if (c.wheelDeltaY !== undefined) {
            h = c.wheelDeltaY / 120
        }
        if (c.wheelDeltaX !== undefined) {
            g = -1 * c.wheelDeltaX / 120
        }
        d.unshift(b, e, g, h);
        return (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks) {
        for (var c = b.length; c;) {
            a.event.fixHooks[b[--c]] = a.event.mouseHooks
        }
    }
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var a = b.length; a;) {
                    this.addEventListener(b[--a], d, false)
                }
            } else {
                this.onmousewheel = d
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var a = b.length; a;) {
                    this.removeEventListener(b[--a], d, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);
(function(a) {
    function i() {
        if (this === b.elem) {
            b.pos = [-260, -260];
            b.elem = false;
            c = 3
        }
    }
    var b = {
        pos: [-260, -260]
    },
        c = 3,
        d = document,
        e = d.documentElement,
        f = d.body,
        g, h;
    a.event.special.mwheelIntent = {
        setup: function() {
            var b = a(this).bind("mousewheel", a.event.special.mwheelIntent.handler);
            if (this !== d && this !== e && this !== f) {
                b.bind("mouseleave", i)
            }
            b = null;
            return true
        },
        teardown: function() {
            a(this).unbind("mousewheel", a.event.special.mwheelIntent.handler).unbind("mouseleave", i);
            return true
        },
        handler: function(d, e) {
            var f = [d.clientX, d.clientY];
            if (this === b.elem || Math.abs(b.pos[0] - f[0]) > c || Math.abs(b.pos[1] - f[1]) > c) {
                b.elem = this;
                b.pos = f;
                c = 250;
                clearTimeout(h);
                h = setTimeout(function() {
                    c = 10
                }, 200);
                clearTimeout(g);
                g = setTimeout(function() {
                    c = 3
                }, 1500);
                d = a.extend({}, d, {
                    type: "mwheelIntent"
                });
                return a.event.handle.apply(this, arguments)
            }
        }
    };
    a.fn.extend({
        mwheelIntent: function(a) {
            return a ? this.bind("mwheelIntent", a) : this.trigger("mwheelIntent")
        },
        unmwheelIntent: function(a) {
            return this.unbind("mwheelIntent", a)
        }
    });
    a(function() {
        f = d.body;
        a(d).bind("mwheelIntent.mwheelIntentDefault", a.noop)
    })
})(jQuery);
(function(a, b, c) {
    a.fn.jScrollPane = function(b) {
        function d(b, d) {
            function bC() {
                var a = bo(),
                    c = bn();
                b.removeClass("jspScrollable").unbind(".jsp");
                b.replaceWith(R.append(g.children()));
                R.scrollTop(a);
                R.scrollLeft(c)
            }
            function bB() {
                var a, b, c, d, e, g = false;
                j.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(f) {
                    var h = f.originalEvent.touches[0];
                    a = bn();
                    b = bo();
                    c = h.pageX;
                    d = h.pageY;
                    e = false;
                    g = true
                }).bind("touchmove.jsp", function(h) {
                    if (!g) {
                        return
                    }
                    var i = h.originalEvent.touches[0],
                        j = v,
                        k = s;
                    f.scrollTo(a + c - i.pageX, b + d - i.pageY);
                    e = e || Math.abs(c - i.pageX) > 5 || Math.abs(d - i.pageY) > 5;
                    return j == v && k == s
                }).bind("touchend.jsp", function(a) {
                    g = false
                }).bind("click.jsp-touchclick", function(a) {
                    if (e) {
                        e = false;
                        return false
                    }
                })
            }
            function bA() {
                bz();
                a("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function() {
                    var a = this.href.split("#"),
                        b;
                    if (a.length > 1) {
                        b = a[1];
                        if (b.length > 0 && g.find("#" + b).length > 0) {
                            bm("#" + b, true);
                            return false
                        }
                    }
                })
            }
            function bz() {
                a("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")
            }
            function by() {
                if (location.hash && location.hash.length > 1) {
                    var b, c, d = escape(location.hash);
                    try {
                        b = a(d)
                    } catch (e) {
                        return
                    }
                    if (b.length && g.find(d)) {
                        if (j.scrollTop() === 0) {
                            c = setInterval(function() {
                                if (j.scrollTop() > 0) {
                                    bm(d, true);
                                    a(document).scrollTop(j.position().top);
                                    clearInterval(c)
                                }
                            }, 50)
                        } else {
                            bm(d, true);
                            a(document).scrollTop(j.position().top)
                        }
                    }
                }
            }
            function bx() {
                b.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }
            function bw() {
                function k() {
                    var a = v,
                        b = s;
                    switch (c) {
                    case 40:
                        f.scrollByY(e.keyboardSpeed, false);
                        break;
                    case 38:
                        f.scrollByY(-e.keyboardSpeed, false);
                        break;
                    case 34:
                    case 32:
                        f.scrollByY(i * e.scrollPagePercent, false);
                        break;
                    case 33:
                        f.scrollByY(-i * e.scrollPagePercent, false);
                        break;
                    case 39:
                        f.scrollByX(e.keyboardSpeed, false);
                        break;
                    case 37:
                        f.scrollByX(-e.keyboardSpeed, false);
                        break
                    }
                    d = a != v || b != s;
                    return d
                }
                var c, d, h = [];
                p && h.push(D[0]);
                o && h.push(w[0]);
                g.focus(function() {
                    b.focus()
                });
                b.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(b) {
                    if (b.target !== this && !(h.length && a(b.target).closest(h).length)) {
                        return
                    }
                    var e = v,
                        f = s;
                    switch (b.keyCode) {
                    case 40:
                    case 38:
                    case 34:
                    case 32:
                    case 33:
                    case 39:
                    case 37:
                        c = b.keyCode;
                        k();
                        break;
                    case 35:
                        bk(l - i);
                        c = null;
                        break;
                    case 36:
                        bk(0);
                        c = null;
                        break
                    }
                    d = b.keyCode == c && e != v || f != s;
                    return !d
                }).bind("keypress.jsp", function(a) {
                    if (a.keyCode == c) {
                        k()
                    }
                    return !d
                });
                if (e.hideFocus) {
                    b.css("outline", "none");
                    if ("hideFocus" in j[0]) {
                        b.attr("hideFocus", true)
                    }
                } else {
                    b.css("outline", "");
                    if ("hideFocus" in j[0]) {
                        b.attr("hideFocus", false)
                    }
                }
            }
            function bv() {
                g.find(":input,a").unbind("focus.jsp")
            }
            function bu() {
                g.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(a) {
                    bm(a.target, false)
                })
            }
            function bt() {
                return false
            }
            function bs() {
                j.unbind(S)
            }
            function br() {
                j.unbind(S).bind(S, function(a, b, c, d) {
                    var g = v,
                        h = s;
                    f.scrollBy(c * e.mouseWheelSpeed, -d * e.mouseWheelSpeed, false);
                    return g == v && h == s
                })
            }
            function bq() {
                var a = k - h;
                return a > 20 && a - bn() < 10
            }
            function bp() {
                var a = l - i;
                return a > 20 && a - bo() < 10
            }
            function bo() {
                return -g.position().top
            }
            function bn() {
                return -g.position().left
            }
            function bm(b, c, d) {
                var f, g, k, l = 0,
                    m = 0,
                    n, o, p, q, r, s;
                try {
                    f = a(b)
                } catch (t) {
                    return
                }
                g = f.outerHeight();
                k = f.outerWidth();
                j.scrollTop(0);
                j.scrollLeft(0);
                while (!f.is(".jspPane")) {
                    l += f.position().top;
                    m += f.position().left;
                    f = f.offsetParent();
                    if (/^body|html$/i.test(f[0].nodeName)) {
                        return
                    }
                }
                n = bo();
                p = n + i;
                if (l < n || c) {
                    r = l - e.verticalGutter
                } else if (l + g > p) {
                    r = l - i + g + e.verticalGutter
                }
                if (r) {
                    bk(r, d)
                }
                o = bn();
                q = o + h;
                if (m < o || c) {
                    s = m - e.horizontalGutter
                } else if (m + k > q) {
                    s = m - h + k + e.horizontalGutter
                }
                if (s) {
                    bl(s, d)
                }
            }
            function bl(a, b) {
                var c = a / (k - h);
                bg(c * u, b)
            }
            function bk(a, b) {
                var c = a / (l - i);
                be(c * r, b)
            }
            function bj(a, b) {
                if (e.showArrows) {
                    H[a ? "addClass" : "removeClass"]("jspDisabled");
                    I[b ? "addClass" : "removeClass"]("jspDisabled")
                }
            }
            function bi(a, b) {
                if (e.showArrows) {
                    B[a ? "addClass" : "removeClass"]("jspDisabled");
                    C[b ? "addClass" : "removeClass"]("jspDisabled")
                }
            }
            function bh(a) {
                if (a === c) {
                    a = t.position().left
                }
                j.scrollTop(0);
                v = a;
                var d = v === 0,
                    e = v == u,
                    f = a / u,
                    i = -f * (k - h);
                if (O != d || Q != e) {
                    O = d;
                    Q = e;
                    b.trigger("jsp-arrow-change", [N, P, O, Q])
                }
                bj(d, e);
                g.css("left", i);
                b.trigger("jsp-scroll-x", [-i, d, e]).trigger("scroll")
            }
            function bg(a, b) {
                if (!p) {
                    return
                }
                if (a < 0) {
                    a = 0
                } else if (a > u) {
                    a = u
                }
                if (b === c) {
                    b = e.animateScroll
                }
                if (b) {
                    f.animate(t, "left", a, bh)
                } else {
                    t.css("left", a);
                    bh(a)
                }
            }
            function bf(a) {
                if (a === c) {
                    a = q.position().top
                }
                j.scrollTop(0);
                s = a;
                var d = s === 0,
                    e = s == r,
                    f = a / r,
                    h = -f * (l - i);
                if (N != d || P != e) {
                    N = d;
                    P = e;
                    b.trigger("jsp-arrow-change", [N, P, O, Q])
                }
                bi(d, e);
                g.css("top", h);
                b.trigger("jsp-scroll-y", [-h, d, e]).trigger("scroll")
            }
            function be(a, b) {
                if (!o) {
                    return
                }
                if (a < 0) {
                    a = 0
                } else if (a > r) {
                    a = r
                }
                if (b === c) {
                    b = e.animateScroll
                }
                if (b) {
                    f.animate(q, "top", a, bf)
                } else {
                    q.css("top", a);
                    bf(a)
                }
            }
            function bd() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                if (q) {
                    q.removeClass("jspActive")
                }
                if (t) {
                    t.removeClass("jspActive")
                }
            }
            function bc() {
                if (E) {
                    E.unbind("mousedown.jsp")
                }
                if (x) {
                    x.unbind("mousedown.jsp")
                }
            }
            function bb() {
                bc();
                if (o) {
                    x.bind("mousedown.jsp", function(b) {
                        if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                            var d = a(this),
                                g = d.offset(),
                                h = b.pageY - g.top - s,
                                j, k = true,
                                m = function() {
                                    var a = d.offset(),
                                        c = b.pageY - a.top - A / 2,
                                        g = i * e.scrollPagePercent,
                                        o = r * g / (l - i);
                                    if (h < 0) {
                                        if (s - o > c) {
                                            f.scrollByY(-g)
                                        } else {
                                            be(c)
                                        }
                                    } else if (h > 0) {
                                        if (s + o < c) {
                                            f.scrollByY(g)
                                        } else {
                                            be(c)
                                        }
                                    } else {
                                        n();
                                        return
                                    }
                                    j = setTimeout(m, k ? e.initialDelay : e.trackClickRepeatFreq);
                                    k = false
                                },
                                n = function() {
                                    j && clearTimeout(j);
                                    j = null;
                                    a(document).unbind("mouseup.jsp", n)
                                };
                            m();
                            a(document).bind("mouseup.jsp", n);
                            return false
                        }
                    })
                }
                if (p) {
                    E.bind("mousedown.jsp", function(b) {
                        if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                            var d = a(this),
                                g = d.offset(),
                                i = b.pageX - g.left - v,
                                j, l = true,
                                m = function() {
                                    var a = d.offset(),
                                        c = b.pageX - a.left - G / 2,
                                        g = h * e.scrollPagePercent,
                                        o = u * g / (k - h);
                                    if (i < 0) {
                                        if (v - o > c) {
                                            f.scrollByX(-g)
                                        } else {
                                            bg(c)
                                        }
                                    } else if (i > 0) {
                                        if (v + o < c) {
                                            f.scrollByX(g)
                                        } else {
                                            bg(c)
                                        }
                                    } else {
                                        n();
                                        return
                                    }
                                    j = setTimeout(m, l ? e.initialDelay : e.trackClickRepeatFreq);
                                    l = false
                                },
                                n = function() {
                                    j && clearTimeout(j);
                                    j = null;
                                    a(document).unbind("mouseup.jsp", n)
                                };
                            m();
                            a(document).bind("mouseup.jsp", n);
                            return false
                        }
                    })
                }
            }
            function ba(b, c, d, g) {
                d = a(d).addClass("jspActive");
                var h, i, j = true,
                    k = function() {
                        if (b !== 0) {
                            f.scrollByX(b * e.arrowButtonSpeed)
                        }
                        if (c !== 0) {
                            f.scrollByY(c * e.arrowButtonSpeed)
                        }
                        i = setTimeout(k, j ? e.initialDelay : e.arrowRepeatFreq);
                        j = false
                    };
                k();
                h = g ? "mouseout.jsp" : "mouseup.jsp";
                g = g || a("html");
                g.bind(h, function() {
                    d.removeClass("jspActive");
                    i && clearTimeout(i);
                    i = null;
                    g.unbind(h)
                })
            }
            function _(a, b, c) {
                return function() {
                    ba(a, b, this, c);
                    this.blur();
                    return false
                }
            }
            function Z(a, b, c, d) {
                var e = "before",
                    f = "after",
                    g;
                if (b == "os") {
                    b = /Mac/.test(navigator.platform) ? "after" : "split"
                }
                if (b == e) {
                    f = b
                } else if (b == f) {
                    e = b;
                    g = c;
                    c = d;
                    d = g
                }
                a[e](c)[f](d)
            }
            function Y() {
                if (p && o) {
                    var b = E.outerHeight(),
                        c = x.outerWidth();
                    z -= b;
                    a(D).find(">.jspCap:visible,>.jspArrow").each(function() {
                        F += a(this).outerWidth()
                    });
                    F -= c;
                    i -= c;
                    h -= b;
                    E.parent().append(a('<div class="jspCorner" />').css("width", b + "px"));
                    V();
                    X()
                }
                if (p) {
                    g.width(j.outerWidth() - L + "px")
                }
                l = g.outerHeight();
                n = l / i;
                if (p) {
                    G = Math.ceil(1 / m * F);
                    if (G > e.horizontalDragMaxWidth) {
                        G = e.horizontalDragMaxWidth
                    } else if (G < e.horizontalDragMinWidth) {
                        G = e.horizontalDragMinWidth
                    }
                    t.width(G + "px");
                    u = F - G;
                    bh(v)
                }
                if (o) {
                    A = Math.ceil(1 / n * z);
                    if (A > e.verticalDragMaxHeight) {
                        A = e.verticalDragMaxHeight
                    } else if (A < e.verticalDragMinHeight) {
                        A = e.verticalDragMinHeight
                    }
                    q.height(A + "px");
                    r = z - A;
                    bf(s)
                }
            }
            function X() {
                j.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    F -= a(this).outerWidth()
                });
                E.width(F + "px");
                v = 0
            }
            function W() {
                if (p) {
                    j.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />')));
                    D = j.find(">.jspHorizontalBar");
                    E = D.find(">.jspTrack");
                    t = E.find(">.jspDrag");
                    if (e.showArrows) {
                        H = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", _(-1, 0)).bind("click.jsp", bt);
                        I = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", _(1, 0)).bind("click.jsp", bt);
                        if (e.arrowScrollOnHover) {
                            H.bind("mouseover.jsp", _(-1, 0, H));
                            I.bind("mouseover.jsp", _(1, 0, I))
                        }
                        Z(E, e.horizontalArrowPositions, H, I)
                    }
                    t.hover(function() {
                        t.addClass("jspHover")
                    }, function() {
                        t.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", bt);
                        t.addClass("jspActive");
                        var c = b.pageX - t.position().left;
                        a("html").bind("mousemove.jsp", function(a) {
                            bg(a.pageX - c, false)
                        }).bind("mouseup.jsp mouseleave.jsp", bd);
                        return false
                    });
                    F = j.innerWidth();
                    X()
                }
            }
            function V() {
                x.height(z + "px");
                s = 0;
                y = e.verticalGutter + x.outerWidth();
                g.width(h - y - L);
                try {
                    if (w.position().left === 0) {
                        g.css("margin-left", y + "px")
                    }
                } catch (a) {}
            }
            function U() {
                if (o) {
                    j.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />')));
                    w = j.find(">.jspVerticalBar");
                    x = w.find(">.jspTrack");
                    q = x.find(">.jspDrag");
                    if (e.showArrows) {
                        B = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", _(0, -1)).bind("click.jsp", bt);
                        C = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", _(0, 1)).bind("click.jsp", bt);
                        if (e.arrowScrollOnHover) {
                            B.bind("mouseover.jsp", _(0, -1, B));
                            C.bind("mouseover.jsp", _(0, 1, C))
                        }
                        Z(x, e.verticalArrowPositions, B, C)
                    }
                    z = i;
                    j.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        z -= a(this).outerHeight()
                    });
                    q.hover(function() {
                        q.addClass("jspHover")
                    }, function() {
                        q.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", bt);
                        q.addClass("jspActive");
                        var c = b.pageY - q.position().top;
                        a("html").bind("mousemove.jsp", function(a) {
                            be(a.pageY - c, false)
                        }).bind("mouseup.jsp mouseleave.jsp", bd);
                        return false
                    });
                    V()
                }
            }
            function T(d) {
                var f, q, r, t, u, w, x = false,
                    y = false;
                e = d;
                if (g === c) {
                    u = b.scrollTop();
                    w = b.scrollLeft();
                    b.css({
                        overflow: "hidden",
                        padding: 0
                    });
                    h = b.innerWidth() + L;
                    i = b.innerHeight();
                    b.width(h);
                    g = a('<div class="jspPane" />').css("padding", K).append(b.children());
                    j = a('<div class="jspContainer" />').css({
                        width: h + "px",
                        height: i + "px"
                    }).append(g).appendTo(b)
                } else {
                    b.css("width", "");
                    x = e.stickToBottom && bp();
                    y = e.stickToRight && bq();
                    t = b.innerWidth() + L != h || b.outerHeight() != i;
                    if (t) {
                        h = b.innerWidth() + L;
                        i = b.innerHeight();
                        j.css({
                            width: h + "px",
                            height: i + "px"
                        })
                    }
                    if (!t && M == k && g.outerHeight() == l) {
                        b.width(h);
                        return
                    }
                    M = k;
                    g.css("width", "");
                    b.width(h);
                    j.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                g.css("overflow", "auto");
                if (d.contentWidth) {
                    k = d.contentWidth
                } else {
                    k = g[0].scrollWidth
                }
                l = g[0].scrollHeight;
                g.css("overflow", "");
                m = k / h;
                n = l / i;
                o = n > 1;
                p = m > 1;
                if (!(p || o)) {
                    b.removeClass("jspScrollable");
                    g.css({
                        top: 0,
                        width: j.width() - L
                    });
                    bs();
                    bv();
                    bx();
                    bc();
                    bz()
                } else {
                    b.addClass("jspScrollable");
                    f = e.maintainPosition && (s || v);
                    if (f) {
                        q = bn();
                        r = bo()
                    }
                    U();
                    W();
                    Y();
                    if (f) {
                        bl(y ? k - h : q, false);
                        bk(x ? l - i : r, false)
                    }
                    bu();
                    br();
                    bB();
                    if (e.enableKeyboardNavigation) {
                        bw()
                    }
                    if (e.clickOnTrack) {
                        bb()
                    }
                    by();
                    if (e.hijackInternalLinks) {
                        bA()
                    }
                }
                if (e.autoReinitialise && !J) {
                    J = setInterval(function() {
                        T(e)
                    }, e.autoReinitialiseDelay)
                } else if (!e.autoReinitialise && J) {
                    clearInterval(J)
                }
                u && b.scrollTop(0) && bk(u, false);
                w && b.scrollLeft(0) && bl(w, false);
                b.trigger("jsp-initialised", [p || o])
            }
            var e, f = this,
                g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = true,
                O = true,
                P = false,
                Q = false,
                R = b.clone(false, false).empty(),
                S = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            K = b.css("paddingTop") + " " + b.css("paddingRight") + " " + b.css("paddingBottom") + " " + b.css("paddingLeft");
            L = (parseInt(b.css("paddingLeft"), 10) || 0) + (parseInt(b.css("paddingRight"), 10) || 0);
            a.extend(f, {
                reinitialise: function(b) {
                    b = a.extend({}, e, b);
                    T(b)
                },
                scrollToElement: function(a, b, c) {
                    bm(a, b, c)
                },
                scrollTo: function(a, b, c) {
                    bl(a, c);
                    bk(b, c)
                },
                scrollToX: function(a, b) {
                    bl(a, b)
                },
                scrollToY: function(a, b) {
                    bk(a, b)
                },
                scrollToPercentX: function(a, b) {
                    bl(a * (k - h), b)
                },
                scrollToPercentY: function(a, b) {
                    bk(a * (l - i), b)
                },
                scrollBy: function(a, b, c) {
                    f.scrollByX(a, c);
                    f.scrollByY(b, c)
                },
                scrollByX: function(a, b) {
                    var c = bn() + Math[a < 0 ? "floor" : "ceil"](a),
                        d = c / (k - h);
                    bg(d * u, b)
                },
                scrollByY: function(a, b) {
                    var c = bo() + Math[a < 0 ? "floor" : "ceil"](a),
                        d = c / (l - i);
                    be(d * r, b)
                },
                positionDragX: function(a, b) {
                    bg(a, b)
                },
                positionDragY: function(a, b) {
                    be(a, b)
                },
                animate: function(a, b, c, d) {
                    var f = {};
                    f[b] = c;
                    a.animate(f, {
                        duration: e.animateDuration,
                        easing: e.animateEase,
                        queue: false,
                        step: d
                    })
                },
                getContentPositionX: function() {
                    return bn()
                },
                getContentPositionY: function() {
                    return bo()
                },
                getContentWidth: function() {
                    return k
                },
                getContentHeight: function() {
                    return l
                },
                getPercentScrolledX: function() {
                    return bn() / (k - h)
                },
                getPercentScrolledY: function() {
                    return bo() / (l - i)
                },
                getIsScrollableH: function() {
                    return p
                },
                getIsScrollableV: function() {
                    return o
                },
                getContentPane: function() {
                    return g
                },
                scrollToBottom: function(a) {
                    be(r, a)
                },
                hijackInternalLinks: function() {
                    bA()
                },
                destroy: function() {
                    bC()
                }
            });
            T(d)
        }
        b = a.extend({}, a.fn.jScrollPane.defaults, b);
        a.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            b[this] = b[this] || b.speed
        });
        return this.each(function() {
            var c = a(this),
                e = c.data("jsp");
            if (e) {
                e.reinitialise(b)
            } else {
                e = new d(c, b);
                c.data("jsp", e)
            }
        })
    };
    a.fn.jScrollPane.defaults = {
        showArrows: false,
        maintainPosition: true,
        stickToBottom: false,
        stickToRight: false,
        clickOnTrack: true,
        autoReinitialise: false,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: false,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: false,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: false,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: true,
        hideFocus: false,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
})(jQuery, this);
(function(a) {
    a.widget("ui.tweet", {
        options: {
            username: null,
            list: null,
            favorites: false,
            query: null,
            avatarSize: 75,
            count: 3,
            fetch: null,
            page: 1,
            retweets: true,
            loadingText: null,
            refreshInterval: null,
            twitterUrl: "twitter.com",
            twitterApiUrl: "api.twitter.com",
            twitterSearchUrl: "search.twitter.com"
        },
        buildMethods: function() {
            var b = this;
            b.various = {
                URLRegExp: /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,
                replace: function(b, c) {
                    return function() {
                        var d = [];
                        this.each(function() {
                            d.push(this.replace(b, c))
                        });
                        return a(d)
                    }
                },
                parseDate: function(a) {
                    return Date.parse(a.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))
                },
                relativeTime: function(a) {
                    var b = arguments.length > 1 ? arguments[1] : new Date,
                        c = parseInt((b.getTime() - a) / 1e3, 10),
                        d = "";
                    if (c < 60) d = c + " секунд назад";
                    else if (c < 120) d = "минуты назад";
                    else if (c < 45 * 60) d = parseInt(c / 60, 10).toString() + " минут назад";
                    else if (c < 2 * 60 * 60) d = "часа назад";
                    else if (c < 24 * 60 * 60) d = "" + parseInt(c / 3600, 10).toString() + " часов назад";
                    else if (c < 48 * 60 * 60) d = "дня назад";
                    else d = parseInt(c / 86400, 10).toString() + " дней назад";
                    return "Около " + d
                },
                buildApiUrl: function() {
                    var a = "https:" == document.location.protocol ? "https:" : "http:",
                        c = b.options.fetch === null ? b.options.count : b.options.fetch;
                    if (b.options.list) {
                        return a + "//" + b.options.twitterApiUrl + "/1/" + b.options.username[0] + "/lists/" + b.options.list + "/statuses.json?page=" + b.options.page + "&per_page=" + c + "&callback=?"
                    } else if (b.options.favorites) {
                        return a + "//" + b.options.twitterApiUrl + "/favorites/" + b.options.username[0] + ".json?page=" + b.options.page + "&count=" + c + "&callback=?"
                    } else if (b.options.query === null && b.options.username.length == 1) {
                        return a + "//" + b.options.twitterApiUrl + "/1/statuses/user_timeline.json?screen_name=" + b.options.username[0] + "&count=" + c + (b.options.retweets ? "&include_rts=1" : "") + "&page=" + b.options.page + "&callback=?"
                    } else {
                        var d = b.options.query || "from:" + b.options.username.join(" OR from:");
                        return a + "//" + b.options.twitterSearchUrl + "/search.json?&q=" + encodeURIComponent(d) + "&rpp=" + c + "&page=" + b.options.page + "&callback=?"
                    }
                },
                markup: function(a, c) {
                    var d = '<li class="tweet-list-item clearfix" style="z-index:' + (100 - a) + '; display:none;">';
                    d += '<div class="twitter-avatar"><img src="' + c.avatar + '" alt="" width="' + b.options.avatarSize + '" height="' + b.options.avatarSize + '" /></div>';
                    d += '<div class="twitter-content">';
                    d += '<div class="tweet-text">' + c.tweet + "</div>";
                    d += '<div class="tweet-footer">';
                    d += '<div class="tweet-date">' + c.time + "</div>";
                    d += '<div class="twitter-follow"><a href="' + c.userUrl + '" target="_blank" rel="external nofollow">Подписаться на меня в Twitter</a></div>';
                    d += "</div>";
                    d += "</div>";
                    d += "</li>";
                    return d
                }
            }
        },
        _create: function() {
            var b = this;
            b.buildMethods();
            a.fn.extend({
                linkUrl: b.various.replace(this.various.URLRegExp, function(a) {
                    var b = /^[a-z]+:/i.test(a) ? a : "http://" + a;
                    return '<a href="' + b + '">' + a + "</a>"
                }),
                linkUser: b.various.replace(/@(\w+)/gi, '@<a href="http://' + b.options.twitterUrl + '/$1">$1</a>'),
                linkHash: b.various.replace(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + b.options.twitterSearchUrl + "/search?q=&tag=$1&lang=all" + (b.options.username && b.options.username.length == 1 ? "&from=" + b.options.username.join("%2BOR%2B") : "") + '">#$1</a>')
            });
            if (b.options.username && typeof b.options.username == "string") {
                b.options.username = [b.options.username]
            }
            var c = a('<ul class="tweet-list"></ul>').prependTo(b.element);
            var d = a('<div class="tweet-loading">' + b.options.loadingText + "</div>");
            if (b.options.loadingText) b.element.prepend(d);
            (function e() {
                a.getJSON(b.various.buildApiUrl(), function(f) {
                    if (b.options.loadingText) d.remove();
                    var g = f.results || f;
                    a.each(g, function(d, e) {
                        var f = {};
                        f.item = e;
                        f.source = e.source;
                        f.screenName = e.from_user || e.user.screen_name;
                        f.avatarSize = b.options.avatarSize;
                        f.avatarSmallUrl = e.profile_image_url || e.user.profile_image_url;
                        f.avatarUrl = f.avatarSmallUrl.replace("normal", "bigger");
                        f.retweet = typeof e.retweeted_status != "undefined";
                        f.tweetTime = b.various.parseDate(e.created_at);
                        f.tweetId = e.id_str;
                        f.twitterBase = "http://" + b.options.twitterUrl + "/";
                        f.userUrl = f.twitterBase + f.screenName;
                        f.tweetUrl = f.userUrl + "/status/" + f.tweetId;
                        f.replyUrl = f.twitterBase + "intent/tweet?in_reply_to=" + f.tweetId;
                        f.retweetUrl = f.twitterBase + "intent/retweet?tweet_id=" + f.tweetId;
                        f.favoriteUrl = f.twitterBase + "intent/favorite?tweet_id=" + f.tweetId;
                        f.retweetedScreenName = f.retweet && e.retweeted_status.user.screen_name;
                        f.tweetRelativeTime = b.various.relativeTime(f.tweetTime);
                        f.tweetRawText = f.retweet ? "RT @" + f.retweetedScreenName + " " + e.retweeted_status.text : e.text;
                        f.tweetText = a([f.tweetRawText]).linkUrl().linkUser().linkHash()[0];
                        c.append(b.various.markup(d, {
                            avatar: f.avatarUrl,
                            tweet: f.tweetText,
                            time: f.tweetRelativeTime,
                            userUrl: f.userUrl
                        }))
                    });
                    if (b.options.refreshInterval) window.setTimeout(function() {
                        e()
                    }, 1e3 * b.options.refreshInterval);
                    b.generatePages()
                })
            })()
        },
        generatePages: function() {
            var b = a('<div id="tweet-pages"><ul></ul></div>'),
                c = b.find("ul");
            for (var d = 1; d <= this.options.count; d++) {
                var e = a("<li></li>");
                e.click(function() {
                    a(this).siblings().removeClass("active").end().addClass("active");
                    a(".tweet-list").find(".tweet-list-item").hide();
                    a(".tweet-list").find(".tweet-list-item").eq(a(this).index()).show()
                });
                c.append(e)
            }
            b.find("li:first-child").trigger("click");
            this.element.append(b)
        },
        _setOption: function(a, b) {
            switch (a) {
            case "clear":
                console.log(b);
                break
            }
            this._super("_setOption", a, b)
        },
        destroy: function() {
            console.log("Destroy")
        }
    })
})(jQuery);
(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) {
                b && b.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
                return
            }
            var c = a.data(this[0], "validator");
            if (c) {
                return c
            }
            this.attr("novalidate", "novalidate");
            c = new a.validator(b, this[0]);
            a.data(this[0], "validator", c);
            if (c.settings.onsubmit) {
                var d = this.find("input, button");
                d.filter(".cancel").click(function() {
                    c.cancelSubmit = true
                });
                if (c.settings.submitHandler) {
                    d.filter(":submit").click(function() {
                        c.submitButton = this
                    })
                }
                this.submit(function(b) {
                    function d() {
                        if (c.settings.submitHandler) {
                            if (c.submitButton) {
                                var b = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)
                            }
                            c.settings.submitHandler.call(c, c.currentForm);
                            if (c.submitButton) {
                                b.remove()
                            }
                            return false
                        }
                        return true
                    }
                    if (c.settings.debug) b.preventDefault();
                    if (c.cancelSubmit) {
                        c.cancelSubmit = false;
                        return d()
                    }
                    if (c.form()) {
                        if (c.pendingRequest) {
                            c.formSubmitted = true;
                            return false
                        }
                        return d()
                    } else {
                        c.focusInvalid();
                        return false
                    }
                })
            }
            return c
        },
        valid: function() {
            if (a(this[0]).is("form")) {
                return this.validate().form()
            } else {
                var b = true;
                var c = a(this[0].form).validate();
                this.each(function() {
                    b &= c.element(this)
                });
                return b
            }
        },
        removeAttrs: function(b) {
            var c = {},
                d = this;
            a.each(b.split(/\s/), function(a, b) {
                c[b] = d.attr(b);
                d.removeAttr(b)
            });
            return c
        },
        rules: function(b, c) {
            var d = this[0];
            if (b) {
                var e = a.data(d.form, "validator").settings;
                var f = e.rules;
                var g = a.validator.staticRules(d);
                switch (b) {
                case "add":
                    a.extend(g, a.validator.normalizeRule(c));
                    f[d.name] = g;
                    if (c.messages) e.messages[d.name] = a.extend(e.messages[d.name], c.messages);
                    break;
                case "remove":
                    if (!c) {
                        delete f[d.name];
                        return g
                    }
                    var h = {};
                    a.each(c.split(/\s/), function(a, b) {
                        h[b] = g[b];
                        delete g[b]
                    });
                    return h
                }
            }
            var i = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(d), a.validator.classRules(d), a.validator.attributeRules(d), a.validator.staticRules(d)), d);
            if (i.required) {
                var j = i.required;
                delete i.required;
                i = a.extend({
                    required: j
                }, i)
            }
            return i
        }
    });
    a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + b.value)
        },
        filled: function(b) {
            return !!a.trim("" + b.value)
        },
        unchecked: function(a) {
            return !a.checked
        }
    });
    a.validator = function(b, c) {
        this.settings = a.extend(true, {}, a.validator.defaults, b);
        this.currentForm = c;
        this.init()
    };
    a.validator.format = function(b, c) {
        if (arguments.length == 1) return function() {
            var c = a.makeArray(arguments);
            c.unshift(b);
            return a.validator.format.apply(this, c)
        };
        if (arguments.length > 2 && c.constructor != Array) {
            c = a.makeArray(arguments).slice(1)
        }
        if (c.constructor != Array) {
            c = [c]
        }
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), c)
        });
        return b
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(a, b) {
                this.lastActive = a;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass);
                    this.addWrapper(this.errorsFor(a)).hide()
                }
            },
            onfocusout: function(a, b) {
                if (!this.checkable(a) && (a.name in this.submitted || !this.optional(a))) {
                    this.element(a)
                }
            },
            onkeyup: function(a, b) {
                if (a.name in this.submitted || a == this.lastElement) {
                    this.element(a)
                }
            },
            onclick: function(a, b) {
                if (a.name in this.submitted) this.element(a);
                else if (a.parentNode.name in this.submitted) this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                if (b.type === "radio") {
                    this.findByName(b.name).addClass(c).removeClass(d)
                } else {
                    a(b).addClass(c).removeClass(d)
                }
            },
            unhighlight: function(b, c, d) {
                if (b.type === "radio") {
                    this.findByName(b.name).removeClass(c).addClass(d)
                } else {
                    a(b).removeClass(c).addClass(d)
                }
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                function d(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, "");
                    c.settings[d] && c.settings[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = this.groups = {};
                a.each(this.settings.groups, function(c, d) {
                    a.each(d.split(/\s/), function(a, d) {
                        b[d] = c
                    })
                });
                var c = this.settings.rules;
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                });
                a(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, " + "[type='number'], [type='search'] ,[type='tel'], [type='url'], " + "[type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], " + "[type='range'], [type='color'] ", "focusin focusout keyup", d).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", d);
                if (this.settings.invalidHandler) a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                if (!this.valid()) a(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
                    this.check(b[a])
                }
                return this.valid()
            },
            element: function(b) {
                b = this.validationTargetFor(this.clean(b));
                this.lastElement = b;
                this.prepareElement(b);
                this.currentElements = a(b);
                var c = this.check(b);
                if (c) {
                    delete this.invalid[b.name]
                } else {
                    this.invalid[b.name] = true
                }
                if (!this.numberOfInvalids()) {
                    this.toHide = this.toHide.add(this.containers)
                }
                this.showErrors();
                return c
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b);
                    this.errorList = [];
                    for (var c in b) {
                        this.errorList.push({
                            message: b[c],
                            element: this.findByName(c)[0]
                        })
                    }
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                if (a.fn.resetForm) a(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b = 0;
                for (var c in a) b++;
                return b
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() == 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
                }
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && a.grep(this.errorList, function(a) {
                    return a.element.name == b.name
                }).length == 1 && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in c || !b.objectLength(a(this).rules())) return false;
                    c[this.name] = true;
                    return true
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                return a(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c = a(b).rules();
                var d = false;
                for (var e in c) {
                    var f = {
                        method: e,
                        parameters: c[e]
                    };
                    try {
                        var g = a.validator.methods[e].call(this, b.value.replace(/\r/g, ""), b, f.parameters);
                        if (g == "dependency-mismatch") {
                            d = true;
                            continue
                        }
                        d = false;
                        if (g == "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(b));
                            return
                        }
                        if (!g) {
                            this.formatAndAdd(b, f);
                            return false
                        }
                    } catch (h) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + b.id + ", check the '" + f.method + "' method", h);
                        throw h
                    }
                }
                if (d) return;
                if (this.objectLength(c)) this.successList.push(b);
                return true
            },
            customMetaMessage: function(b, c) {
                if (!a.metadata) return;
                var d = this.settings.meta ? a(b).metadata()[this.settings.meta] : a(b).metadata();
                return d && d.messages && d.messages[c]
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor == String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++) {
                    if (arguments[a] !== undefined) return arguments[a]
                }
                return undefined
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customMetaMessage(b, c), !this.settings.ignoreTitle && b.title || undefined, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b.method),
                    d = /\$?\{(\d+)\}/g;
                if (typeof c == "function") {
                    c = c.call(this, b.parameters, a)
                } else if (d.test(c)) {
                    c = jQuery.format(c.replace(d, "{$1}"), b.parameters)
                }
                this.errorList.push({
                    message: c,
                    element: a
                });
                this.errorMap[a.name] = c;
                this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                if (this.settings.wrapper) a = a.add(a.parent(this.settings.wrapper));
                return a
            },
            defaultShowErrors: function() {
                for (var a = 0; this.errorList[a]; a++) {
                    var b = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(b.element, b.message)
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers)
                }
                if (this.settings.success) {
                    for (var a = 0; this.successList[a]; a++) {
                        this.showLabel(this.successList[a])
                    }
                }
                if (this.settings.unhighlight) {
                    for (var a = 0, c = this.validElements(); c[a]; a++) {
                        this.settings.unhighlight.call(this, c[a], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d = this.errorsFor(b);
                if (d.length) {
                    d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    d.attr("generated") && d.html(c)
                } else {
                    d = a("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(b),
                        generated: true
                    }).addClass(this.settings.errorClass).html(c || "");
                    if (this.settings.wrapper) {
                        d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
                    }
                    if (!this.labelContainer.append(d).length) this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b)
                }
                if (!c && this.settings.success) {
                    d.text("");
                    typeof this.settings.success == "string" ? d.addClass(this.settings.success) : this.settings.success(d)
                }
                this.toShow = this.toShow.add(d)
            },
            errorsFor: function(b) {
                var c = this.idOrName(b);
                return this.errors().filter(function() {
                    return a(this).attr("for") == c
                })
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(a) {
                if (this.checkable(a)) {
                    a = this.findByName(a.name).not(this.settings.ignore)[0]
                }
                return a
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                var c = this.currentForm;
                return a(document.getElementsByName(b)).map(function(a, d) {
                    return d.form == c && d.name == b && d || null
                })
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : true
            },
            dependTypes: {
                "boolean": function(a, b) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                return !a.validator.methods.required.call(this, a.trim(b.value), b) && "dependency-mismatch"
            },
            startRequest: function(a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;
                    this.pending[a.name] = true
                }
            },
            stopRequest: function(b, c) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) this.pendingRequest = 0;
                delete this.pending[b.name];
                if (c && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    a(this.currentForm).submit();
                    this.formSubmitted = false
                } else if (!c && this.pendingRequest == 0 && this.formSubmitted) {
                    a(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false
                }
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            dateDE: {
                dateDE: true
            },
            number: {
                number: true
            },
            numberDE: {
                numberDE: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(b, c) {
            b.constructor == String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {};
            var d = a(b).attr("class");
            d && a.each(d.split(" "), function() {
                if (this in a.validator.classRuleSettings) {
                    a.extend(c, a.validator.classRuleSettings[this])
                }
            });
            return c
        },
        attributeRules: function(b) {
            var c = {};
            var d = a(b);
            for (var e in a.validator.methods) {
                var f;
                if (e === "required" && typeof a.fn.prop === "function") {
                    f = d.prop(e)
                } else {
                    f = d.attr(e)
                }
                if (f) {
                    c[e] = f
                } else if (d[0].getAttribute("type") === e) {
                    c[e] = true
                }
            }
            if (c.maxlength && /-1|2147483647|524288/.test(c.maxlength)) {
                delete c.maxlength
            }
            return c
        },
        metadataRules: function(b) {
            if (!a.metadata) return {};
            var c = a.data(b.form, "validator").settings.meta;
            return c ? a(b).metadata()[c] : a(b).metadata()
        },
        staticRules: function(b) {
            var c = {};
            var d = a.data(b.form, "validator");
            if (d.settings.rules) {
                c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}
            }
            return c
        },
        normalizeRules: function(b, c) {
            a.each(b, function(d, e) {
                if (e === false) {
                    delete b[d];
                    return
                }
                if (e.param || e.depends) {
                    var f = true;
                    switch (typeof e.depends) {
                    case "string":
                        f = !! a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c);
                        break
                    }
                    if (f) {
                        b[d] = e.param !== undefined ? e.param : true
                    } else {
                        delete b[d]
                    }
                }
            });
            a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            });
            a.each(["minlength", "maxlength", "min", "max"], function() {
                if (b[this]) {
                    b[this] = Number(b[this])
                }
            });
            a.each(["rangelength", "range"], function() {
                if (b[this]) {
                    b[this] = [Number(b[this][0]), Number(b[this][1])]
                }
            });
            if (a.validator.autoCreateRanges) {
                if (b.min && b.max) {
                    b.range = [b.min, b.max];
                    delete b.min;
                    delete b.max
                }
                if (b.minlength && b.maxlength) {
                    b.rangelength = [b.minlength, b.maxlength];
                    delete b.minlength;
                    delete b.maxlength
                }
            }
            if (b.messages) {
                delete b.messages
            }
            return b
        },
        normalizeRule: function(b) {
            if (typeof b == "string") {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = true
                });
                b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c;
            a.validator.messages[b] = d != undefined ? d : a.validator.messages[b];
            if (c.length < 3) {
                a.validator.addClassRules(b, a.validator.normalizeRule(b))
            }
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    var e = a(c).val();
                    return e && e.length > 0;
                case "input":
                    if (this.checkable(c)) return this.getLength(b, c) > 0;
                default:
                    return a.trim(b).length > 0
                }
            },
            remote: function(b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e = this.previousValue(c);
                if (!this.settings.messages[c.name]) this.settings.messages[c.name] = {};
                e.originalMessage = this.settings.messages[c.name].remote;
                this.settings.messages[c.name].remote = e.message;
                d = typeof d == "string" && {
                    url: d
                } || d;
                if (this.pending[c.name]) {
                    return "pending"
                }
                if (e.old === b) {
                    return e.valid
                }
                e.old = b;
                var f = this;
                this.startRequest(c);
                var g = {};
                g[c.name] = b;
                a.ajax(a.extend(true, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    success: function(d) {
                        f.settings.messages[c.name].remote = e.originalMessage;
                        var g = d === true;
                        if (g) {
                            var h = f.formSubmitted;
                            f.prepareElement(c);
                            f.formSubmitted = h;
                            f.successList.push(c);
                            f.showErrors()
                        } else {
                            var i = {};
                            var j = d || f.defaultMessage(c, "remote");
                            i[c.name] = e.message = a.isFunction(j) ? j(b) : j;
                            f.showErrors(i)
                        }
                        e.valid = g;
                        f.stopRequest(c, g)
                    }
                }, d));
                return "pending"
            },
            minlength: function(b, c, d) {
                return this.optional(c) || this.getLength(a.trim(b), c) >= d
            },
            maxlength: function(b, c, d) {
                return this.optional(c) || this.getLength(a.trim(b), c) <= d
            },
            rangelength: function(b, c, d) {
                var e = this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            email: function(a, b) {
                return this.optional(b) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(a)) return false;
                var c = 0,
                    d = 0,
                    e = false;
                a = a.replace(/\D/g, "");
                for (var f = a.length - 1; f >= 0; f--) {
                    var g = a.charAt(f);
                    var d = parseInt(g, 10);
                    if (e) {
                        if ((d *= 2) > 9) d -= 9
                    }
                    c += d;
                    e = !e
                }
                return c % 10 == 0
            },
            accept: function(a, b, c) {
                c = typeof c == "string" ? c.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(b) || a.match(new RegExp(".(" + c + ")$", "i"))
            },
            equalTo: function(b, c, d) {
                var e = a(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid()
                });
                return b == e.val()
            }
        }
    });
    a.format = a.validator.format
})(jQuery);
(function(a) {
    var b = {};
    if (a.ajaxPrefilter) {
        a.ajaxPrefilter(function(a, c, d) {
            var e = a.port;
            if (a.mode == "abort") {
                if (b[e]) {
                    b[e].abort()
                }
                b[e] = d
            }
        })
    } else {
        var c = a.ajax;
        a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            if (e == "abort") {
                if (b[f]) {
                    b[f].abort()
                }
                return b[f] = c.apply(this, arguments)
            }
            return c.apply(this, arguments)
        }
    }
})(jQuery);
(function(a) {
    if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
        a.each({
            focus: "focusin",
            blur: "focusout"
        }, function(b, c) {
            function d(b) {
                b = a.event.fix(b);
                b.type = c;
                return a.event.handle.call(this, b)
            }
            a.event.special[c] = {
                setup: function() {
                    this.addEventListener(b, d, true)
                },
                teardown: function() {
                    this.removeEventListener(b, d, true)
                },
                handler: function(b) {
                    arguments[0] = a.event.fix(b);
                    arguments[0].type = c;
                    return a.event.handle.apply(this, arguments)
                }
            }
        })
    }
    a.extend(a.fn, {
        validateDelegate: function(b, c, d) {
            return this.bind(c, function(c) {
                var e = a(c.target);
                if (e.is(b)) {
                    return d.apply(e, arguments)
                }
            })
        }
    })
})(jQuery);
(function(a) {
    var b, c, d, e, f, g, h, i, j, k, l = 0,
        m = {},
        n = [],
        o = 0,
        p = {},
        q = [],
        r = null,
        s = new Image,
        t = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
        u = /[^\.]\.(swf)\s*$/i,
        v, w = 1,
        x = 0,
        y = "",
        z, A, B = false,
        C = a.extend(a("<div/>")[0], {
            prop: 0
        }),
        D = a.browser.msie && a.browser.version < 7 && !window.XMLHttpRequest,
        E = function() {
            c.hide();
            s.onerror = s.onload = null;
            if (r) {
                r.abort()
            }
            b.empty()
        },
        F = function() {
            if (false === m.onError(n, l, m)) {
                c.hide();
                B = false;
                return
            }
            m.titleShow = false;
            m.width = "auto";
            m.height = "auto";
            b.html('<p id="fancybox-error">Этот материал не может быть загружен.<br />Попробуйте еще раз позже.</p>');
            H()
        },
        G = function() {
            var d = n[l],
                e, f, h, i, j, k;
            E();
            m = a.extend({}, a.fn.fancybox.defaults, typeof a(d).data("fancybox") == "undefined" ? m : a(d).data("fancybox"));
            k = m.onStart(n, l, m);
            if (k === false) {
                B = false;
                return
            } else if (typeof k == "object") {
                m = a.extend(m, k)
            }
            h = m.title || (d.nodeName ? a(d).attr("title") : d.title) || "";
            if (d.nodeName && !m.orig) {
                m.orig = a(d).children("img:first").length ? a(d).children("img:first") : a(d)
            }
            if (h === "" && m.orig && m.titleFromAlt) {
                h = m.orig.attr("alt")
            }
            e = m.href || (d.nodeName ? a(d).attr("href") : d.href) || null;
            if (/^(?:javascript)/i.test(e) || e == "#") {
                e = null
            }
            if (m.type) {
                f = m.type;
                if (!e) {
                    e = m.content
                }
            } else if (m.content) {
                f = "html"
            } else if (e) {
                if (e.match(t)) {
                    f = "image"
                } else if (e.match(u)) {
                    f = "swf"
                } else if (a(d).hasClass("iframe")) {
                    f = "iframe"
                } else if (e.indexOf("#") === 0) {
                    f = "inline"
                } else {
                    f = "ajax"
                }
            }
            if (!f) {
                F();
                return
            }
            if (f == "inline") {
                d = e.substr(e.indexOf("#"));
                f = a(d).length > 0 ? "inline" : "ajax"
            }
            m.type = f;
            m.href = e;
            m.title = h;
            if (m.autoDimensions) {
                if (m.type == "html" || m.type == "inline" || m.type == "ajax") {
                    m.width = "auto";
                    m.height = "auto"
                } else {
                    m.autoDimensions = false
                }
            }
            if (m.modal) {
                m.overlayShow = true;
                m.hideOnOverlayClick = false;
                m.hideOnContentClick = false;
                m.enableEscapeButton = false;
                m.showCloseButton = false
            }
            m.padding = parseInt(m.padding, 10);
            m.margin = parseInt(m.margin, 10);
            b.css("padding", m.padding + m.margin);
            a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
                a(this).replaceWith(g.children())
            });
            switch (f) {
            case "html":
                b.html(m.content);
                H();
                break;
            case "inline":
                if (a(d).parent().is("#fancybox-content") === true) {
                    B = false;
                    return
                }
                a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(d)).bind("fancybox-cleanup", function() {
                    a(this).replaceWith(g.children())
                }).bind("fancybox-cancel", function() {
                    a(this).replaceWith(b.children())
                });
                a(d).appendTo(b);
                H();
                break;
            case "image":
                B = false;
                a.fancybox.showActivity();
                s = new Image;
                s.onerror = function() {
                    F()
                };
                s.onload = function() {
                    B = true;
                    s.onerror = s.onload = null;
                    I()
                };
                s.src = e;
                break;
            case "swf":
                m.scrolling = "no";
                i = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + m.width + '" height="' + m.height + '"><param name="movie" value="' + e + '"></param>';
                j = "";
                a.each(m.swf, function(a, b) {
                    i += '<param name="' + a + '" value="' + b + '"></param>';
                    j += " " + a + '="' + b + '"'
                });
                i += '<embed src="' + e + '" type="application/x-shockwave-flash" width="' + m.width + '" height="' + m.height + '"' + j + "></embed></object>";
                b.html(i);
                H();
                break;
            case "ajax":
                B = false;
                a.fancybox.showActivity();
                m.ajax.win = m.ajax.success;
                r = a.ajax(a.extend({}, m.ajax, {
                    url: e,
                    data: m.ajax.data || {},
                    error: function(a, b, c) {
                        if (a.status > 0) {
                            F()
                        }
                    },
                    success: function(a, d, f) {
                        var g = typeof f == "object" ? f : r;
                        if (g.status == 200) {
                            if (typeof m.ajax.win == "function") {
                                k = m.ajax.win(e, a, d, f);
                                if (k === false) {
                                    c.hide();
                                    return
                                } else if (typeof k == "string" || typeof k == "object") {
                                    a = k
                                }
                            }
                            b.html(a);
                            H()
                        }
                    }
                }));
                break;
            case "iframe":
                J();
                break
            }
        },
        H = function() {
            var c = m.width,
                d = m.height;
            if (c.toString().indexOf("%") > -1) {
                c = parseInt((a(window).width() - m.margin * 2) * parseFloat(c) / 100, 10) + "px"
            } else {
                c = c == "auto" ? "auto" : c + "px"
            }
            if (d.toString().indexOf("%") > -1) {
                d = parseInt((a(window).height() - m.margin * 2) * parseFloat(d) / 100, 10) + "px"
            } else {
                d = d == "auto" ? "auto" : d + "px"
            }
            b.wrapInner('<div style="width:' + c + ";height:" + d + ";overflow: " + (m.scrolling == "auto" ? "auto" : m.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
            m.width = b.width();
            m.height = b.height();
            J()
        },
        I = function() {
            m.width = s.width;
            m.height = s.height;
            a("<img />").attr({
                id: "fancybox-img",
                src: s.src,
                alt: m.title
            }).appendTo(b);
            J()
        },
        J = function() {
            var f, r;
            c.hide();
            if (e.is(":visible") && false === p.onCleanup(q, o, p)) {
                a.event.trigger("fancybox-cancel");
                B = false;
                return
            }
            B = true;
            a(g.add(d)).unbind();
            a(window).unbind("resize.fb scroll.fb");
            a(document).unbind("keydown.fb");
            if (e.is(":visible") && p.titlePosition !== "outside") {
                e.css("height", e.height())
            }
            q = n;
            o = l;
            p = m;
            if (p.overlayShow) {
                d.css({
                    "background-color": p.overlayColor,
                    opacity: p.overlayOpacity,
                    cursor: p.hideOnOverlayClick ? "pointer" : "auto",
                    height: a(document).height()
                });
                if (!d.is(":visible")) {
                    if (D) {
                        a("select:not(#fancybox-tmp select)").filter(function() {
                            return this.style.visibility !== "hidden"
                        }).css({
                            visibility: "hidden"
                        }).one("fancybox-cleanup", function() {
                            this.style.visibility = "inherit"
                        })
                    }
                    d.show()
                }
            } else {
                d.hide()
            }
            A = R();
            L();
            if (e.is(":visible")) {
                a(h.add(j).add(k)).hide();
                f = e.position(), z = {
                    top: f.top,
                    left: f.left,
                    width: e.width(),
                    height: e.height()
                };
                r = z.width == A.width && z.height == A.height;
                g.fadeTo(p.changeFade, .3, function() {
                    var c = function() {
                            g.html(b.contents()).fadeTo(p.changeFade, 1, N)
                        };
                    a.event.trigger("fancybox-change");
                    g.empty().removeAttr("filter").css({
                        "border-width": p.padding,
                        width: A.width - p.padding * 2,
                        height: m.autoDimensions ? "auto" : A.height - x - p.padding * 2
                    });
                    if (r) {
                        c()
                    } else {
                        C.prop = 0;
                        a(C).animate({
                            prop: 1
                        }, {
                            duration: p.changeSpeed,
                            easing: p.easingChange,
                            step: P,
                            complete: c
                        })
                    }
                });
                return
            }
            e.removeAttr("style");
            g.css("border-width", p.padding);
            if (p.transitionIn == "elastic") {
                z = T();
                g.html(b.contents());
                e.show();
                if (p.opacity) {
                    A.opacity = 0
                }
                C.prop = 0;
                a(C).animate({
                    prop: 1
                }, {
                    duration: p.speedIn,
                    easing: p.easingIn,
                    step: P,
                    complete: N
                });
                return
            }
            if (p.titlePosition == "inside" && x > 0) {
                i.show()
            }
            g.css({
                width: A.width - p.padding * 2,
                height: m.autoDimensions ? "auto" : A.height - x - p.padding * 2
            }).html(b.contents());
            e.css(A).fadeIn(p.transitionIn == "none" ? 0 : p.speedIn, N)
        },
        K = function(a) {
            if (a && a.length) {
                if (p.titlePosition == "float") {
                    return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + a + '</td><td id="fancybox-title-float-right"></td></tr></table>'
                }
                return '<div id="fancybox-title-' + p.titlePosition + '">' + a + "</div>"
            }
            return false
        },
        L = function() {
            y = p.title || "";
            x = 0;
            i.empty().removeAttr("style").removeClass();
            if (p.titleShow === false) {
                i.hide();
                return
            }
            y = a.isFunction(p.titleFormat) ? p.titleFormat(y, q, o, p) : K(y);
            if (!y || y === "") {
                i.hide();
                return
            }
            i.addClass("fancybox-title-" + p.titlePosition).html(y).appendTo("body").show();
            switch (p.titlePosition) {
            case "inside":
                i.css({
                    width: A.width - p.padding * 2,
                    marginLeft: p.padding,
                    marginRight: p.padding
                });
                x = i.outerHeight(true);
                i.appendTo(f);
                A.height += x;
                break;
            case "over":
                i.css({
                    marginLeft: p.padding,
                    width: A.width - p.padding * 2,
                    bottom: p.padding
                }).appendTo(f);
                break;
            case "float":
                i.css("left", parseInt((i.width() - A.width - 40) / 2, 10) * -1).appendTo(e);
                break;
            default:
                i.css({
                    width: A.width - p.padding * 2,
                    paddingLeft: p.padding,
                    paddingRight: p.padding
                }).appendTo(e);
                break
            }
            i.hide()
        },
        M = function() {
            if (p.enableEscapeButton || p.enableKeyboardNav) {
                a(document).bind("keydown.fb", function(b) {
                    if (b.keyCode == 27 && p.enableEscapeButton) {
                        b.preventDefault();
                        a.fancybox.close()
                    } else if ((b.keyCode == 37 || b.keyCode == 39) && p.enableKeyboardNav && b.target.tagName !== "INPUT" && b.target.tagName !== "TEXTAREA" && b.target.tagName !== "SELECT") {
                        b.preventDefault();
                        a.fancybox[b.keyCode == 37 ? "prev" : "next"]()
                    }
                })
            }
            if (!p.showNavArrows) {
                j.hide();
                k.hide();
                return
            }
            if (p.cyclic && q.length > 1 || o !== 0) {
                j.show()
            }
            if (p.cyclic && q.length > 1 || o != q.length - 1) {
                k.show()
            }
        },
        N = function() {
            if (!a.support.opacity) {
                g.get(0).style.removeAttribute("filter");
                e.get(0).style.removeAttribute("filter")
            }
            if (m.autoDimensions) {
                g.css("height", "auto")
            }
            e.css("height", "auto");
            if (y && y.length) {
                i.show()
            }
            if (p.showCloseButton) {
                h.show()
            }
            M();
            if (p.hideOnContentClick) {
                g.bind("click", a.fancybox.close)
            }
            if (p.hideOnOverlayClick) {
                d.bind("click", a.fancybox.close)
            }
            a(window).bind("resize.fb", a.fancybox.resize);
            if (p.centerOnScroll) {
                a(window).bind("scroll.fb", a.fancybox.center)
            }
            if (p.type == "iframe") {
                a('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (a.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + m.scrolling + '" src="' + p.href + '"></iframe>').appendTo(g)
            }
            e.show();
            B = false;
            a.fancybox.center();
            p.onComplete(q, o, p);
            O()
        },
        O = function() {
            var a, b;
            if (q.length - 1 > o) {
                a = q[o + 1].href;
                if (typeof a !== "undefined" && a.match(t)) {
                    b = new Image;
                    b.src = a
                }
            }
            if (o > 0) {
                a = q[o - 1].href;
                if (typeof a !== "undefined" && a.match(t)) {
                    b = new Image;
                    b.src = a
                }
            }
        },
        P = function(a) {
            var b = {
                width: parseInt(z.width + (A.width - z.width) * a, 10),
                height: parseInt(z.height + (A.height - z.height) * a, 10),
                top: parseInt(z.top + (A.top - z.top) * a, 10),
                left: parseInt(z.left + (A.left - z.left) * a, 10)
            };
            if (typeof A.opacity !== "undefined") {
                b.opacity = a < .5 ? .5 : a
            }
            e.css(b);
            g.css({
                width: b.width - p.padding * 2,
                height: b.height - x * a - p.padding * 2
            })
        },
        Q = function() {
            return [a(window).width() - p.margin * 2, a(window).height() - p.margin * 2, a(document).scrollLeft() + p.margin, a(document).scrollTop() + p.margin]
        },
        R = function() {
            var a = Q(),
                b = {},
                c = p.autoScale,
                d = p.padding * 2,
                e;
            if (p.width.toString().indexOf("%") > -1) {
                b.width = parseInt(a[0] * parseFloat(p.width) / 100, 10)
            } else {
                b.width = p.width + d
            }
            if (p.height.toString().indexOf("%") > -1) {
                b.height = parseInt(a[1] * parseFloat(p.height) / 100, 10)
            } else {
                b.height = p.height + d
            }
            if (c && (b.width > a[0] || b.height > a[1])) {
                if (m.type == "image" || m.type == "swf") {
                    e = p.width / p.height;
                    if (b.width > a[0]) {
                        b.width = a[0];
                        b.height = parseInt((b.width - d) / e + d, 10)
                    }
                    if (b.height > a[1]) {
                        b.height = a[1];
                        b.width = parseInt((b.height - d) * e + d, 10)
                    }
                } else {
                    b.width = Math.min(b.width, a[0]);
                    b.height = Math.min(b.height, a[1])
                }
            }
            b.top = parseInt(Math.max(a[3] - 20, a[3] + (a[1] - b.height - 40) * .5), 10);
            b.left = parseInt(Math.max(a[2] - 20, a[2] + (a[0] - b.width - 40) * .5), 10);
            return b
        },
        S = function(a) {
            var b = a.offset();
            b.top += parseInt(a.css("paddingTop"), 10) || 0;
            b.left += parseInt(a.css("paddingLeft"), 10) || 0;
            b.top += parseInt(a.css("border-top-width"), 10) || 0;
            b.left += parseInt(a.css("border-left-width"), 10) || 0;
            b.width = a.width();
            b.height = a.height();
            return b
        },
        T = function() {
            var b = m.orig ? a(m.orig) : false,
                c = {},
                d, e;
            if (b && b.length) {
                d = S(b);
                c = {
                    width: d.width + p.padding * 2,
                    height: d.height + p.padding * 2,
                    top: d.top - p.padding - 20,
                    left: d.left - p.padding - 20
                }
            } else {
                e = Q();
                c = {
                    width: p.padding * 2,
                    height: p.padding * 2,
                    top: parseInt(e[3] + e[1] * .5, 10),
                    left: parseInt(e[2] + e[0] * .5, 10)
                }
            }
            return c
        },
        U = function() {
            if (!c.is(":visible")) {
                clearInterval(v);
                return
            }
            a("div", c).css("top", w * -40 + "px");
            w = (w + 1) % 12
        };
    a.fn.fancybox = function(b) {
        if (!a(this).length) {
            return this
        }
        a(this).data("fancybox", a.extend({}, b, a.metadata ? a(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(b) {
            b.preventDefault();
            if (B) {
                return
            }
            B = true;
            a(this).blur();
            n = [];
            l = 0;
            var c = a(this).attr("rel") || "";
            if (!c || c == "" || c === "nofollow") {
                n.push(this)
            } else {
                n = a("a[rel=" + c + "], area[rel=" + c + "]");
                l = n.index(this)
            }
            G();
            return
        });
        return this
    };
    a.fancybox = function(b) {
        var c;
        if (B) {
            return
        }
        B = true;
        c = typeof arguments[1] !== "undefined" ? arguments[1] : {};
        n = [];
        l = parseInt(c.index, 10) || 0;
        if (a.isArray(b)) {
            for (var d = 0, e = b.length; d < e; d++) {
                if (typeof b[d] == "object") {
                    a(b[d]).data("fancybox", a.extend({}, c, b[d]))
                } else {
                    b[d] = a({}).data("fancybox", a.extend({
                        content: b[d]
                    }, c))
                }
            }
            n = jQuery.merge(n, b)
        } else {
            if (typeof b == "object") {
                a(b).data("fancybox", a.extend({}, c, b))
            } else {
                b = a({}).data("fancybox", a.extend({
                    content: b
                }, c))
            }
            n.push(b)
        }
        if (l > n.length || l < 0) {
            l = 0
        }
        G()
    };
    a.fancybox.showActivity = function() {
        clearInterval(v);
        c.show();
        v = setInterval(U, 66)
    };
    a.fancybox.hideActivity = function() {
        c.hide()
    };
    a.fancybox.next = function() {
        return a.fancybox.pos(o + 1)
    };
    a.fancybox.prev = function() {
        return a.fancybox.pos(o - 1)
    };
    a.fancybox.pos = function(a) {
        if (B) {
            return
        }
        a = parseInt(a);
        n = q;
        if (a > -1 && a < q.length) {
            l = a;
            G()
        } else if (p.cyclic && q.length > 1) {
            l = a >= q.length ? 0 : q.length - 1;
            G()
        }
        return
    };
    a.fancybox.cancel = function() {
        if (B) {
            return
        }
        B = true;
        a.event.trigger("fancybox-cancel");
        E();
        m.onCancel(n, l, m);
        B = false
    };
    a.fancybox.close = function() {
        function b() {
            d.fadeOut("fast");
            i.empty().hide();
            e.hide();
            a.event.trigger("fancybox-cleanup");
            g.empty();
            p.onClosed(q, o, p);
            q = m = [];
            o = l = 0;
            p = m = {};
            B = false
        }
        if (B || e.is(":hidden")) {
            return
        }
        B = true;
        if (p && false === p.onCleanup(q, o, p)) {
            B = false;
            return
        }
        E();
        a(h.add(j).add(k)).hide();
        a(g.add(d)).unbind();
        a(window).unbind("resize.fb scroll.fb");
        a(document).unbind("keydown.fb");
        g.find("iframe").attr("src", D && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
        if (p.titlePosition !== "inside") {
            i.empty()
        }
        e.stop();
        if (p.transitionOut == "elastic") {
            z = T();
            var c = e.position();
            A = {
                top: c.top,
                left: c.left,
                width: e.width(),
                height: e.height()
            };
            if (p.opacity) {
                A.opacity = 1
            }
            i.empty().hide();
            C.prop = 1;
            a(C).animate({
                prop: 0
            }, {
                duration: p.speedOut,
                easing: p.easingOut,
                step: P,
                complete: b
            })
        } else {
            e.fadeOut(p.transitionOut == "none" ? 0 : p.speedOut, b)
        }
    };
    a.fancybox.resize = function() {
        if (d.is(":visible")) {
            d.css("height", a(document).height())
        }
        a.fancybox.center(true)
    };
    a.fancybox.center = function() {
        var a, b;
        if (B) {
            return
        }
        b = arguments[0] === true ? 1 : 0;
        a = Q();
        if (!b && (e.width() > a[0] || e.height() > a[1])) {
            return
        }
        e.stop().animate({
            top: parseInt(Math.max(a[3] - 20, a[3] + (a[1] - g.height() - 40) * .5 - p.padding)),
            left: parseInt(Math.max(a[2] - 20, a[2] + (a[0] - g.width() - 40) * .5 - p.padding))
        }, typeof arguments[0] == "number" ? arguments[0] : 200)
    };
    a.fancybox.init = function() {
        if (a("#fancybox-wrap").length) {
            return
        }
        a("body").append(b = a('<div id="fancybox-tmp"></div>'), c = a('<div id="fancybox-loading"><div></div></div>'), d = a('<div id="fancybox-overlay"></div>'), e = a('<div id="fancybox-wrap"></div>'));
        f = a('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(e);
        f.append(g = a('<div id="fancybox-content"></div>'), h = a('<a id="fancybox-close"></a>'), i = a('<div id="fancybox-title"></div>'), j = a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), k = a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
        h.click(a.fancybox.close);
        c.click(a.fancybox.cancel);
        j.click(function(b) {
            b.preventDefault();
            a.fancybox.prev()
        });
        k.click(function(b) {
            b.preventDefault();
            a.fancybox.next()
        });
        if (a.fn.mousewheel) {
            e.bind("mousewheel.fb", function(b, c) {
                if (B) {
                    b.preventDefault()
                } else if (a(b.target).get(0).clientHeight == 0 || a(b.target).get(0).scrollHeight === a(b.target).get(0).clientHeight) {
                    b.preventDefault();
                    a.fancybox[c > 0 ? "prev" : "next"]()
                }
            })
        }
        if (!a.support.opacity) {
            e.addClass("fancybox-ie")
        }
        if (D) {
            c.addClass("fancybox-ie6");
            e.addClass("fancybox-ie6");
            a('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(f)
        }
    };
    a.fn.fancybox.defaults = {
        padding: 10,
        margin: 40,
        opacity: false,
        modal: false,
        cyclic: false,
        scrolling: "auto",
        width: 560,
        height: 340,
        autoScale: true,
        autoDimensions: true,
        centerOnScroll: false,
        ajax: {},
        swf: {
            wmode: "transparent"
        },
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: .7,
        overlayColor: "#777",
        titleShow: true,
        titlePosition: "float",
        titleFormat: null,
        titleFromAlt: false,
        transitionIn: "fade",
        transitionOut: "fade",
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 300,
        changeFade: "fast",
        easingIn: "swing",
        easingOut: "swing",
        showCloseButton: true,
        showNavArrows: true,
        enableEscapeButton: true,
        enableKeyboardNav: true,
        onStart: function() {},
        onCancel: function() {},
        onComplete: function() {},
        onCleanup: function() {},
        onClosed: function() {},
        onError: function() {}
    };
    a(document).ready(function() {
        a.fancybox.init()
    })
})(jQuery);
(function(a) {
    a.widget("ui.gallery", {
        options: {},
        _create: function() {
            var a = this;
            a.element.find("li:nth-child(4n)").css({
                marginRight: 0
            });
            a.generatePages()
        },
        generatePages: function() {
            var b = this,
                c = {
                    count: b.element.find("img").size()
                },
                d = {
                    item: a('<ul id="work-gallery-pages" style="visibility:hidden;"></ul>'),
                    count: Math.ceil(c.count / 8)
                },
                e = false;
            for (var f = 1; f <= d.count; f++) {
                a('<li><a href="/work/page/' + f + '">' + f + "</a></li>").find("a").click(function() {
                    if (!e) {
                        e = true;
                        a(this).parent("li").siblings().removeClass("active").end().addClass("active");
                        a("#work-gallery").animate({
                            marginTop: 214 * (parseInt(a(this).text()) - 1) * -1
                        }, 500, "easeOutExpo", function() {
                            e = false
                        })
                    }
                    return false
                }).end().appendTo(d.item)
            }
            a('<li class="previous"><a href="#"></a></li>').find("a").click(function() {
                var a = d.item.find(".active");
                if (a.index() > 1) {
                    a.prev().find("a").trigger("click")
                }
                return false
            }).end().prependTo(d.item);
            a('<li class="next"><a href="#"></a></li>').find("a").click(function() {
                var a = d.item.find(".active");
                if (a.index() < d.count) {
                    a.next().find("a").trigger("click")
                }
                return false
            }).end().appendTo(d.item);
            d.item.find("li").eq(1).addClass("active");
            b.element.after(d.item);
            var g = a.browser.mozilla ? d.item.width() + 1 : d.item.width();
            d.item.css({
                width: g,
                "float": "none",
                margin: "0 auto",
                visibility: "visible"
            });
            if (a.browser.mozilla) d.item.find("li").css({
                padding: 3
            })
        },
        _setOption: function(a, b) {
            switch (a) {
            case "clear":
                console.log(b);
                break
            }
            this._super("_setOption", a, b)
        },
        destroy: function() {
            console.log("Destroy")
        }
    })
})(jQuery);
(function(a) {
    a.widget("ui.tooltip", {
        options: {
            text: "Default text",
            width: "auto",
            textAlign: "center",
            arrowDirection: "down",
            arrowPosition: "middle",
            clickToDismiss: false
        },
        _create: function() {
            function j(j) {
                c = b.element.offset(), d = a('<div class="tooltip-text">' + b.options.text + "</div>").prependTo("body"), e = d.outerWidth();
                d.remove();
                f = 6;
                g = {
                    left: e - f - 18,
                    middle: Math.floor((e - f) / 2 - 13 / 2),
                    right: e - f - 18
                };
                h = {
                    left: {
                        left: 5,
                        right: g.left
                    },
                    middle: {
                        left: g.middle,
                        right: g.middle
                    },
                    right: {
                        left: g.right,
                        right: 5
                    }
                };
                h.middle.left = g.middle * 2 + 13 == e - f ? h.middle.left : h.middle.left + 1;
                if (!j) {
                    i = {
                        left: {
                            top: c.top + Math.ceil(b.element.outerHeight() / 2) - 19,
                            left: c.left + b.element.outerWidth() + 17
                        },
                        right: {
                            top: c.top + Math.ceil(b.element.outerHeight() / 2) - 19,
                            left: c.left - e - 17
                        },
                        down: {
                            top: c.top - 60,
                            left: c.left - Math.floor(e / 2) + b.element.width() / 2
                        }
                    }
                } else {
                    i = {
                        left: {
                            top: c.top + Math.ceil(b.element.outerHeight() / 2) - 19,
                            left: c.left + b.element.outerWidth() + 5
                        },
                        right: {
                            top: c.top + Math.ceil(b.element.outerHeight() / 2) - 19,
                            left: c.left - e - 5
                        },
                        down: {
                            top: c.top - 48,
                            left: c.left - Math.floor(e / 2) + b.element.width() / 2
                        }
                    }
                }
                b.postions = i
            }
            var b = this,
                c, d, e, f, g, h, i;
            j();
            b.markup = '<div class="tooltip ' + b.options.arrowDirection + '-arrow clearfix" style="width:' + e + "px; top:" + b.postions[b.options.arrowDirection].top + "px; left:" + b.postions[b.options.arrowDirection].left + 'px; z-index:1000;">';
            b.markup += '<div class="tooltip-body-left"></div>';
            b.markup += '<div class="tooltip-body-right"></div>';
            b.markup += '<div class="tooltip-body-middle">';
            b.markup += '<div class="tooltip-body-content">' + b.options.text + "</div>";
            if (b.options.arrowDirection == "down") {
                b.markup += '<div class="tooltip-body-arrow">';
                b.markup += '<div class="tooltip-body-arrow-left" style="width:' + h[b.options.arrowPosition].left + 'px;"></div>';
                b.markup += '<div class="tooltip-body-arrow-middle"></div>';
                b.markup += '<div class="tooltip-body-arrow-right" style="width:' + h[b.options.arrowPosition].right + 'px;"></div>';
                b.markup += "</div>"
            }
            b.markup += "</div>";
            b.markup += "</div>";
            b.parent = a(b.markup).prependTo("body");
            a(window).resize(function() {
                if (b.showing) {
                    j(true);
                    b.parent.css({
                        top: b.postions[b.options.arrowDirection].top,
                        left: b.postions[b.options.arrowDirection].left
                    })
                }
            });
            if (b.options.clickToDismiss) {
                b.parent.css({
                    cursor: "pointer"
                }).click(function() {
                    b.hide()
                })
            }
        },
        show: function() {
            var a = this;
            a.delay = setTimeout(function() {
                switch (a.options.arrowDirection) {
                case "down":
                    a.parent.animate({
                        top: a.postions.down.top + 12,
                        opacity: "show"
                    }, 240, "easeOutQuad");
                    break;
                case "left":
                    a.parent.animate({
                        left: a.postions.left.left + 12,
                        opacity: "show"
                    }, 240, "easeOutQuad");
                    break;
                case "right":
                    a.parent.animate({
                        left: a.postions.right.left + 12,
                        opacity: "show"
                    }, 240, "easeOutQuad");
                    break
                }
                a.showing = true
            }, 100)
        },
        hide: function() {
            var a = this;
            clearTimeout(a.delay);
            if (a.showing) {
                switch (a.options.arrowDirection) {
                case "down":
                    a.parent.animate({
                        top: a.postions.down.top - 12,
                        opacity: "hide"
                    }, 120, "easeOutQuad");
                    break;
                case "left":
                    a.parent.animate({
                        left: a.postions.left.left - 12,
                        opacity: "hide"
                    }, 120, "easeOutQuad");
                    break;
                case "right":
                    a.parent.animate({
                        left: a.postions.right.left - 12,
                        opacity: "hide"
                    }, 120, "easeOutQuad");
                    break
                }
            }
        },
        _setOption: function(a, b) {
            switch (a) {
            case "clear":
                console.log(b);
                break
            }
            this._super("_setOption", a, b)
        },
        destroy: function() {
            var a = this;
            a.parent.remove()
        }
    })
})(jQuery);
(function(a) {
    a.widget("ui.social", {
        options: {
            listStyle: "tooltip"
        },
        _create: function() {
            var b = this,
                c = b.element.find("li"),
                d = c.size();
            switch (this.options.listStyle) {
            case "tooltip":
                var e = 2,
                    f = Math.ceil(d / e);
                c.css({
                    marginRight: Math.floor(516 / (f - 1)) - 32,
                    marginBottom: 28
                });
                b.element.find("li:nth-child(" + f + "n)").css({
                    marginRight: 0
                });
                b.element.delegate("a", "mouseover", function() {
                    var b = a(this).find("img"),
                        c = b.data("text").replace("{network}", b.data("network")),
                        d = a(this).data("instantiated");
                    a(this).data("instantiated", true);
                    if (!d) a(this).tooltip({
                        text: c
                    });
                    a(this).tooltip("show")
                });
                b.element.delegate("a", "mouseout", function() {
                    a(this).tooltip("hide")
                });
                b.element.css({
                    paddingTop: "18px"
                });
                break;
            case "text":
                a.each(c.slice(0, 4), function(b, c) {
                    var d = a(this);
                    img = a(this).find("img"), h = img.data("text").replace("{network}", img.data("network"));
                    d.css({
                        width: 274,
                        cursor: "pointer",
                        marginBottom: 19
                    }).addClass("clearfix");
                    d.html('<div class="icon"><img src="' + img.attr("src") + '" /></div><div class="label">' + h + "</div>");
                    d.click(function() {
                        window.open(d.find("a").attr("href"))
                    })
                });
                b.element.css({
                    height: 102
                });
                var g = a('<div id="social-networks-additional"></div>');
                b.element.after(g);
                var h = "Также меня можно найти на: ";
                d = d - 4;
                a.each(c.slice(4), function(b, c) {
                    h += '<a href="' + a(this).find("a").attr("href") + '" target="_blank">' + a(this).find("img").data("network") + "</a>";
                    if (b + 1 == d - 1) {
                        h += " & "
                    } else if (b + 1 < d) {
                        h += ", "
                    }
                    a(this).remove()
                });
                g.html(h);
                break
            }
        },
        _setOption: function(a, b) {
            switch (a) {
            case "clear":
                console.log(b);
                break
            }
            this._super("_setOption", a, b)
        },
        destroy: function() {
            console.log("Destroy")
        }
    })
})(jQuery);
$("input.placeholder, textarea.placeholder").each(function() {
    var a = $(this),
        b = a.val();
    a.focus(function() {
        if (a.val() == b) {
            $(this).val("")
        }
    });
    a.blur(function() {
        if (a.val() == "") {
            $(this).val(b)
        }
    })
});
$(".mouse-events").each(function() {
    var a = $(this);
    a.bind("mouseover", function() {
        a.addClass("hover")
    });
    a.bind("mouseout", function() {
        a.removeClass("hover")
    });
    a.bind("mousedown", function() {
        a.removeClass("hover");
        a.addClass("active");
        a.bind("mouseleave", function() {
            a.removeClass("hover");
            a.removeClass("active");
            $(this).unbind("mouseleave")
        })
    });
    a.bind("mouseup", function() {
        $(this).removeClass("active");
        $(this).addClass("hover")
    })
});
if ("undefined" != typeof jQuery) {
    (function(a) {
        a.imgpreload = function(b, c) {
            c = a.extend({}, a.fn.imgpreload.defaults, c instanceof Function ? {
                all: c
            } : c);
            if ("string" == typeof b) {
                b = [b]
            }
            var d = [];
            var e = b.length;
            for (var f = 0; f < e; f++) {
                var g = new Image;
                a(g).bind("load error", function(b) {
                    d.push(this);
                    a.data(this, "loaded", "error" == b.type ? false : true);
                    if (c.each instanceof Function) {
                        c.each.call(this)
                    }
                    if (d.length >= e && c.all instanceof Function) {
                        c.all.call(d)
                    }
                });
                g.src = b[f]
            }
        };
        a.fn.imgpreload = function(b) {
            var c = [];
            this.each(function() {
                c.push(a(this).attr("src"))
            });
            a.imgpreload(c, b);
            return this
        };
        a.fn.imgpreload.defaults = {
            each: null,
            all: null
        }
    })(jQuery)
}
$.imgpreload(["/img/card_header_blue.png", "/img/card_header_brown.png", "/img/card_header_dark_grey.png", "/img/card_header_graphite.png", "/img/card_header_green.png", "/img/card_header_grey.png", "/img/card_header_light_purple.png", "/img/card_header_light_red.png", "/img/card_header_matte_blue.png", "/img/card_header_orange.png", "/img/card_header_red.png", "/img/holder_brown.png", "/img/holder_red.png", "/img/holder_white.png"], function() {
    $(window).load(function() {
        var a = $("nav").find("ul"),
            b = $.browser.mozilla ? a.width() + 1 : a.width();
        a.css({
            width: b,
            "float": "none",
            margin: "0 auto",
            visibility: "visible"
        });
        $("#background-radial").css({
            visibility: "visible"
        })
    });
    $(document).ready(function() {
        $("#work-gallery-frame").gallery();
        $("#work-gallery").find("a").fancybox({
            transitionIn: "elastic",
            transitionOut: "elastic",
            speedIn: 300,
            speedOut: 200,
            overlayOpacity: .58,
            overlayColor: "#000"
        });
        $("#social-networks").social({
            listStyle: "tooltip"
        });
        $("#twitter").tweet({
            username: "blinkov",
            count: 3,
            loadingText: "Загрузка..."
        });
        var a = $("#container").height(),
            b = $("header");
        $(window).resize(function() {
            var c = $(this).height(),
                d = (274 + (c - a) + 12) / 2;
            if (d > 274) {
                d = 274
            } else if (d < 42) {
                d = 42
            }
            b.css({
                height: d
            })
        }).trigger("resize");
        $.address.change(function(a) {
            $("nav").find('a[href="' + a.value + '"]').trigger("click");
            if (f) {
                if (a.pathNames[0] == "contact") {
                    setTimeout(function() {
                        if (h.name.element.hasClass("error")) h.name.element.tooltip("show");
                        if (h.email.element.hasClass("error")) h.email.element.tooltip("show");
                        if (h.message.element.hasClass("error")) h.message.element.tooltip("show")
                    }, 250)
                } else {
                    if (h.name.element.hasClass("error")) h.name.element.tooltip("hide");
                    if (h.email.element.hasClass("error")) h.email.element.tooltip("hide");
                    if (h.message.element.hasClass("error")) h.message.element.tooltip("hide")
                }
            }
            d = false
        });
        var c = false,
            d = true;
        $("nav").delegate("a", "click", function() {
            if (!c) {
                c = true;
                $(this).parent("li").siblings().removeClass("active").end().addClass("active");
                $.address.value($(this).attr("href"));
                if (d) {
                    $("#card-content-wrap").css({
                        marginLeft: $(this).parent("li").index() * 590 * -1
                    });
                    c = false;
                    d = false
                } else {
                    $("#card-content-wrap").animate({
                        marginLeft: $(this).parent("li").index() * 590 * -1
                    }, 500, "easeOutExpo", function() {
                        c = false
                    })
                }
            }
            return false
        });
        $(".scrollable").jScrollPane();
        var e = $("#contact-form").find("form"),
            f = false,
            g = false,
            h = {
                name: {
                    element: e.find("[name=name]")
                },
                email: {
                    element: e.find("[name=email]")
                },
                message: {
                    element: e.find("[name=message]")
                }
            };
        h.name.value = h.name.element.val();
        h.email.value = h.email.element.val();
        h.message.value = h.message.element.val();
        e.find(".button").click(function() {
            f = true;
            h.name.element.tooltip({
                text: "Обязательно",
                width: "auto",
                textAlign: "center",
                arrowDirection: "right",
                clickToDismiss: true
            });
            h.email.element.tooltip({
                text: "E-mail не правильный",
                width: "auto",
                textAlign: "center",
                arrowDirection: "right",
                clickToDismiss: true
            });
            h.message.element.tooltip({
                text: "Обязательно",
                width: "auto",
                textAlign: "center",
                arrowDirection: "right",
                clickToDismiss: true
            });
            if (!g) {
                $.validator.addMethod("notEqual", function(a, b, c) {
                    return this.optional(b) || a != c
                }, "Обязательно");
                e.validate({
                    rules: {
                        name: {
                            required: true,
                            notEqual: h.name.value
                        },
                        email: {
                            required: true,
                            email: true,
                            notEqual: h.email.value
                        },
                        message: {
                            required: true,
                            notEqual: h.message.value
                        }
                    },
                    errorPlacement: function(a, b) {
                        b.tooltip("show")
                    },
                    highlight: function(a, b, c) {
                        if (a.type === "radio") {
                            this.findByName(a.name).addClass(b).removeClass(c)
                        } else {
                            $(a).addClass(b).removeClass(c)
                        }
                        $(a).tooltip("show")
                    },
                    unhighlight: function(a, b, c) {
                        if (a.type === "radio") {
                            this.findByName(a.name).removeClass(b).addClass(c)
                        } else {
                            $(a).removeClass(b).addClass(c)
                        }
                        $(a).tooltip("hide")
                    }
                });
                g = true
            }
            if (e.valid()) {
                $.post("/mail.php", e.serialize(), function(a) {
                    if (a == "1") {
                        h.name.element.removeClass("valid").val(h.name.value);
                        h.email.element.removeClass("valid").val(h.email.value);
                        h.message.element.removeClass("valid").val(h.message.value);
                        e.find(".status").fadeIn(400);
                        e.find("input").bind("keydown", function() {
                            e.find(".status").fadeOut(400);
                            e.find("input").unbind("keydown")
                        })
                    }
                })
            }
        });
        $("#card-header-download").click(function() {
            window.location.assign($(this).data("download"))
        })
    })
})
