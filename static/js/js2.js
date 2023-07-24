(this.webpackJsonpdisneyplus = this.webpackJsonpdisneyplus || []).push([[0], {
    100: function(e, t, c) {},
    102: function(e, t, c) {
        "use strict";
        c.r(t);
        var a = c(2)
            , s = c(31)
            , n = c.n(s)
            , r = (c(44),
            c(4))
            , i = (c(45),
            c(6))
            , o = c(7)
            , l = c(3)
            , j = c.n(l)
            , d = c(5)
            , u = c(11)
            , b = (c(47),
            c(16))
            , p = c.n(b)
            , h = (c(24),
            c(25),
            c(1))
            , O = function() {
            var e = Object(a.useState)([])
                , t = Object(r.a)(e, 2)
                , c = t[0]
                , s = t[1]
                , n = "1dbf27409e387afe9abadb77b2745ddd";
            return Object(a.useEffect)((function() {
                    (function() {
                            var e = Object(d.a)(j.a.mark((function e() {
                                    var t, c, a;
                                    return j.a.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(n, "&language=en-US&page=1"));
                                                    case 2:
                                                        return t = e.sent,
                                                            e.next = 5,
                                                            t.json();
                                                    case 5:
                                                        c = e.sent,
                                                            a = c.results,
                                                            s(a);
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e)
                                }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }
                    )()()
                }
            ), [n]),
                Object(h.jsx)("div", {
                    className: "slideWrapper",
                    children: Object(h.jsx)(p.a, Object(u.a)(Object(u.a)({}, {
                        dots: !0,
                        infinite: !0,
                        autoplay: !0,
                        speed: 500,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        centerMode: !0,
                        arrows: !1,
                        responsive: [{
                            breakpoint: 812,
                            settings: {
                                slidesToShow: 2
                            }
                        }]
                    }), {}, {
                        children: c.map((function(e) {
                                return Object(h.jsx)(i.b, {
                                    to: {
                                        pathname: "/movie/".concat(e.id)
                                    },
                                    children: Object(h.jsx)("div", {
                                        className: "banner",
                                        children: Object(h.jsx)("img", {
                                            src: e.poster_path ? "https://image.tmdb.org/t/p/original/".concat(e.poster_path) : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg",
                                            alt: e.title
                                        })
                                    })
                                }, e.title)
                            }
                        ))
                    }))
                })
        }
            , m = (c(68),
                function() {
                    return Object(h.jsxs)("div", {
                        className: "studios",
                        children: [Object(h.jsxs)(i.b, {
                            to: "/brand/disney",
                            className: "studio",
                            children: [Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png",
                                alt: "Disney"
                            }), Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4",
                                    type: "video/mp4"
                                })
                            })]
                        }), Object(h.jsxs)(i.b, {
                            to: "/brand/pixar",
                            className: "studio",
                            children: [Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=640&aspectRatio=1.78&format=png",
                                alt: "Pixar"
                            }), Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217992-pixar.mp4",
                                    type: "video/mp4"
                                })
                            })]
                        }), Object(h.jsxs)(i.b, {
                            to: "/brand/marvel",
                            className: "studio",
                            children: [Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=640&aspectRatio=1.78&format=png",
                                alt: "Marvel"
                            }), Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4",
                                    type: "video/mp4"
                                })
                            })]
                        }), Object(h.jsxs)(i.b, {
                            to: "/brand/star-wars",
                            className: "studio",
                            children: [Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=640&aspectRatio=1.78&format=png",
                                alt: "Star Wars"
                            }), Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4",
                                    type: "video/mp4"
                                })
                            })]
                        }), Object(h.jsxs)(i.b, {
                            to: "/brand/nat-geo",
                            className: "studio",
                            children: [Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=640&aspectRatio=1.78&format=png",
                                alt: "NatGeo"
                            }), Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217923-national-geographic.mp4",
                                    type: "video/mp4"
                                })
                            })]
                        })]
                    })
                }
        )
            , v = (c(69),
                function(e) {
                    var t = e.title
                        , c = e.data
                        , a = e.loading;
                    return Object(h.jsxs)("div", {
                        className: "recommendationSection",
                        children: [Object(h.jsx)("h3", {
                            children: t
                        }), a ? Object(h.jsx)("h3", {
                            children: "Loading..."
                        }) : Object(h.jsx)(p.a, Object(u.a)(Object(u.a)({}, {
                            dots: !1,
                            infinite: !0,
                            autoplay: !0,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            centerMode: !1,
                            arrows: !1,
                            responsive: [{
                                breakpoint: 812,
                                settings: {
                                    slidesToShow: 2
                                }
                            }]
                        }), {}, {
                            children: c.map((function(e) {
                                    return Object(h.jsx)(i.b, {
                                        to: {
                                            pathname: "/movie/".concat(e.id)
                                        },
                                        children: Object(h.jsx)("div", {
                                            className: "banner recBanner",
                                            children: Object(h.jsx)("img", {
                                                src: e.poster_path ? "https://image.tmdb.org/t/p/original/".concat(e.poster_path) : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg",
                                                alt: e.title
                                            })
                                        })
                                    }, e.title)
                                }
                            ))
                        }))]
                    })
                }
        )
            , x = function() {
            var e = Object(a.useState)([])
                , t = Object(r.a)(e, 2)
                , c = t[0]
                , s = t[1]
                , n = Object(a.useState)([])
                , i = Object(r.a)(n, 2)
                , o = i[0]
                , l = i[1]
                , u = Object(a.useState)([])
                , b = Object(r.a)(u, 2)
                , p = b[0]
                , x = b[1]
                , f = Object(a.useState)([])
                , g = Object(r.a)(f, 2)
                , w = g[0]
                , y = g[1]
                , N = Object(a.useState)([])
                , _ = Object(r.a)(N, 2)
                , S = _[0]
                , k = _[1]
                , C = Object(a.useState)(!1)
                , E = Object(r.a)(C, 2)
                , A = E[0]
                , D = E[1]
                , B = "1dbf27409e387afe9abadb77b2745ddd";
            return Object(a.useEffect)((function() {
                    (function() {
                            var e = Object(d.a)(j.a.mark((function e() {
                                    var t, c, a;
                                    return j.a.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return D(!0),
                                                            e.next = 3,
                                                            fetch("https://api.themoviedb.org/3/list/112870?api_key=".concat(B, "&language=en-US"));
                                                    case 3:
                                                        return t = e.sent,
                                                            e.next = 6,
                                                            t.json();
                                                    case 6:
                                                        c = e.sent,
                                                            a = c.items,
                                                            s(a),
                                                            D(!1);
                                                    case 10:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e)
                                }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }
                    )()()
                }
            ), [B]),
                Object(a.useEffect)((function() {
                        (function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var t, c, a;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return D(!0),
                                                                e.next = 3,
                                                                fetch("https://api.themoviedb.org/3/list/1?api_key=".concat(B, "&language=en-US"));
                                                        case 3:
                                                            return t = e.sent,
                                                                e.next = 6,
                                                                t.json();
                                                        case 6:
                                                            c = e.sent,
                                                                a = c.items,
                                                                x(a),
                                                                D(!1);
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }
                        )()()
                    }
                ), [B]),
                Object(a.useEffect)((function() {
                        (function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var t, c, a;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return D(!0),
                                                                e.next = 3,
                                                                fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(B, "&original_language=en"));
                                                        case 3:
                                                            return t = e.sent,
                                                                e.next = 6,
                                                                t.json();
                                                        case 6:
                                                            c = e.sent,
                                                                a = c.results,
                                                                l(a),
                                                                D(!1);
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }
                        )()()
                    }
                ), [B]),
                Object(a.useEffect)((function() {
                        (function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var t, c, a;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return D(!0),
                                                                e.next = 3,
                                                                fetch("https://api.themoviedb.org/3/list/3321?api_key=".concat(B, "&language=en-US"));
                                                        case 3:
                                                            return t = e.sent,
                                                                e.next = 6,
                                                                t.json();
                                                        case 6:
                                                            c = e.sent,
                                                                a = c.items,
                                                                y(a),
                                                                D(!1);
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }
                        )()()
                    }
                ), [B]),
                Object(a.useEffect)((function() {
                        (function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var t, c, a;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return D(!0),
                                                                e.next = 3,
                                                                fetch("https://api.themoviedb.org/3/list/28?api_key=".concat(B, "&language=en-US"));
                                                        case 3:
                                                            return t = e.sent,
                                                                e.next = 6,
                                                                t.json();
                                                        case 6:
                                                            c = e.sent,
                                                                a = c.items,
                                                                k(a),
                                                                D(!1);
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }
                        )()()
                    }
                ), [B]),
                Object(h.jsxs)("div", {
                    className: "App",
                    children: [Object(h.jsx)(O, {}), Object(h.jsx)(m, {}), Object(h.jsx)(v, {
                        title: "Best Picture Winners",
                        data: S,
                        loading: A
                    }), Object(h.jsx)(v, {
                        title: "Cannes 2019",
                        data: c,
                        loading: A
                    }), Object(h.jsx)(v, {
                        title: "Anime",
                        data: w,
                        loading: A
                    }), Object(h.jsx)(v, {
                        title: "Trending",
                        data: o,
                        loading: A
                    }), Object(h.jsx)(v, {
                        title: "The Marvel Universe",
                        data: p,
                        loading: A
                    })]
                })
        };
        c(70),
            c(71);
        function f(e) {
            var t = e.poster_path
                , c = e.alt
                , a = e.id;
            return Object(h.jsx)("div", {
                className: "result",
                children: Object(h.jsx)(i.b, {
                    to: {
                        pathname: "/movie/".concat(a)
                    },
                    children: Object(h.jsx)("img", {
                        src: t ? "https://image.tmdb.org/t/p/original/".concat(t) : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg",
                        alt: c
                    })
                })
            })
        }
        var g = function() {
            var e = Object(a.useState)("")
                , t = Object(r.a)(e, 2)
                , c = t[0]
                , s = t[1]
                , n = Object(a.useState)(!0)
                , i = Object(r.a)(n, 2)
                , o = i[0]
                , l = i[1]
                , j = Object(a.useState)(!1)
                , d = Object(r.a)(j, 2)
                , u = d[0]
                , b = d[1]
                , p = Object(a.useState)([])
                , O = Object(r.a)(p, 2)
                , m = O[0]
                , v = O[1]
                , x = Object(a.useState)(!1)
                , g = Object(r.a)(x, 2)
                , w = g[0]
                , y = g[1]
                , N = "1dbf27409e387afe9abadb77b2745ddd";
            return Object(a.useEffect)((function() {
                    b(!1),
                        0 === c.length ? fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(N, "&language=en-US&page=1")).then((function(e) {
                                return e.json()
                            }
                        )).then((function(e) {
                                var t = e.results;
                                v(t),
                                    y(!0),
                                    l(!1)
                            }
                        )) : fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(N, "&query=").concat(c)).then((function(e) {
                                return e.json()
                            }
                        )).then((function(e) {
                                if (void 0 === e.results)
                                    b(!0);
                                else {
                                    var t = e.results;
                                    0 === t.length && b(!0),
                                        v(t),
                                        y(!1),
                                        l(!1)
                                }
                            }
                        ))
                }
            ), [c, N]),
                Object(h.jsxs)("div", {
                    className: "wrapper",
                    children: [Object(h.jsx)("form", {
                        className: "form",
                        onSubmit: function(e) {
                            e.preventDefault()
                        },
                        children: Object(h.jsx)("input", {
                            placeholder: "Search by title, character, or genre",
                            className: "input",
                            value: c,
                            autoFocus: !0,
                            onKeyDown: function(e) {
                                " " === e.key && 0 === c.length && e.preventDefault()
                            },
                            onChange: function(e) {
                                s(e.target.value)
                            }
                        })
                    }), Object(h.jsxs)("div", {
                        className: "page",
                        children: [w && Object(h.jsx)("h1", {
                            className: "pageTitle",
                            children: "Explore"
                        }), o ? Object(h.jsx)("h1", {
                            children: "Loading..."
                        }) : u ? Object(h.jsxs)("div", {
                            children: [Object(h.jsxs)("h1", {
                                className: "noResults",
                                children: ["No results found for ", Object(h.jsxs)("em", {
                                    children: ['"', c, '"']
                                })]
                            }), Object(h.jsx)("h1", {
                                children: "Please try again."
                            })]
                        }) : Object(h.jsx)(h.Fragment, {
                            children: Object(h.jsx)("div", {
                                className: "results",
                                children: m.map((function(e) {
                                        return Object(h.jsx)(f, {
                                            poster_path: e.poster_path,
                                            alt: e.title,
                                            id: e.id,
                                            title: e.title,
                                            overview: e.overview,
                                            release_date: e.release_date,
                                            genre_ids: e.genre_ids
                                        }, e.id)
                                    }
                                ))
                            })
                        })]
                    })]
                })
        }
            , w = c(17)
            , y = (c(72),
            c(13))
            , N = c(39)
            , _ = Object(N.a)("https://ozotmfncksqgdyyrplhi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzc4MDQ2NywiZXhwIjoxOTM5MzU2NDY3fQ.aTot58Yd-mVMiTeoxUZ1CP8VH4I9AJ8v6ELJJgV-udo")
            , S = function() {
            var e = Object(a.useState)([])
                , t = Object(r.a)(e, 2)
                , c = t[0]
                , s = t[1]
                , n = Object(a.useState)(!0)
                , o = Object(r.a)(n, 2)
                , l = o[0]
                , u = o[1]
                , b = Object(a.useState)(!0)
                , p = Object(r.a)(b, 2)
                , O = p[0]
                , m = p[1]
                , v = "1dbf27409e387afe9abadb77b2745ddd"
                , x = Object(a.useState)(null)
                , f = Object(r.a)(x, 2)
                , g = f[0]
                , N = f[1]
                , S = _.auth.user();
            return Object(a.useEffect)((function() {
                    N(_.auth.session()),
                        _.auth.onAuthStateChange((function(e, t) {
                                N(t)
                            }
                        )),
                        function() {
                            var e = Object(d.a)(j.a.mark((function e() {
                                    var t, c;
                                    return j.a.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            _.from("watchlist").select("id");
                                                    case 2:
                                                        t = e.sent,
                                                        (c = t.data).length > 0 && u(!1),
                                                            c.map(function() {
                                                                var e = Object(d.a)(j.a.mark((function e(t) {
                                                                        var c, a;
                                                                        return j.a.wrap((function(e) {
                                                                                for (; ; )
                                                                                    switch (e.prev = e.next) {
                                                                                        case 0:
                                                                                            return e.next = 2,
                                                                                                fetch("https://api.themoviedb.org/3/movie/".concat(t.id, "?api_key=").concat(v, "&language=en-US&page=1"));
                                                                                        case 2:
                                                                                            return c = e.sent,
                                                                                                e.next = 5,
                                                                                                c.json();
                                                                                        case 5:
                                                                                            a = e.sent,
                                                                                                s((function(e) {
                                                                                                        return [].concat(Object(w.a)(e), [a])
                                                                                                    }
                                                                                                ));
                                                                                        case 7:
                                                                                        case "end":
                                                                                            return e.stop()
                                                                                    }
                                                                            }
                                                                        ), e)
                                                                    }
                                                                )));
                                                                return function(t) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }()),
                                                            m(!1);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e)
                                }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                }
            ), [v]),
                Object(h.jsx)("div", {
                    className: "wrapper",
                    children: !l && S && g ? Object(h.jsx)("div", {
                        className: "page collectionsPage",
                        children: Object(h.jsx)("div", {
                            className: "results collections",
                            children: O ? Object(h.jsx)("h3", {
                                children: "Loading..."
                            }) : c.map((function(e) {
                                    return Object(h.jsx)("div", {
                                        className: "result",
                                        children: Object(h.jsx)(i.b, {
                                            to: {
                                                pathname: "/movie/".concat(e.id)
                                            },
                                            children: Object(h.jsx)("img", {
                                                src: e.poster_path ? "https://image.tmdb.org/t/p/original/".concat(e.poster_path) : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg",
                                                alt: e.alt
                                            })
                                        })
                                    }, e.id)
                                }
                            ))
                        })
                    }) : Object(h.jsxs)("div", {
                        className: "watchlistWrapper",
                        children: [Object(h.jsx)(y.b, {}), Object(h.jsx)("h3", {
                            children: "Your watchlist is empty"
                        }), Object(h.jsx)("p", {
                            children: "Content you add to your watchlist will appear here."
                        })]
                    })
                })
        };
        c(76);
        function k(e) {
            var t = e.poster_path
                , c = e.alt
                , a = e.id;
            return Object(h.jsx)("div", {
                className: "result",
                children: Object(h.jsx)(i.b, {
                    to: {
                        pathname: "/show/".concat(a)
                    },
                    children: Object(h.jsx)("img", {
                        src: t ? "https://image.tmdb.org/t/p/original".concat(t) : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg",
                        alt: c
                    })
                })
            })
        }
        var C = function() {
            var e = Object(a.useState)(!1)
                , t = Object(r.a)(e, 2)
                , c = t[0]
                , s = t[1]
                , n = Object(a.useState)(!1)
                , i = Object(r.a)(n, 2)
                , o = i[0]
                , l = i[1]
                , u = Object(a.useState)([])
                , b = Object(r.a)(u, 2)
                , p = b[0]
                , O = b[1]
                , m = "1dbf27409e387afe9abadb77b2745ddd";
            return Object(a.useEffect)((function() {
                    var e = new AbortController
                        , t = e.signal
                        , c = function() {
                        var e = Object(d.a)(j.a.mark((function e() {
                                var c, a, n;
                                return j.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        fetch("https://api.themoviedb.org/3/discover/tv?api_key=".concat(m, "&with_networks=213"), {
                                                            signal: t
                                                        });
                                                case 2:
                                                    return c = e.sent,
                                                        e.next = 5,
                                                        c.json();
                                                case 5:
                                                    a = e.sent,
                                                    0 === (n = a.results).length && l(!0),
                                                        O(n),
                                                        s(!1);
                                                case 10:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return s(!0),
                        c(),
                        function() {
                            return e.abort()
                        }
                }
            ), [m]),
                Object(h.jsxs)("div", {
                    className: "page2",
                    children: [Object(h.jsx)("div", {
                        className: "fixedBannerOriginals",
                        children: Object(h.jsx)("h1", {
                            className: "originalsTitle",
                            id: "originals",
                            children: "Originals"
                        })
                    }), Object(h.jsxs)("div", {
                        className: "originalsList",
                        children: [Object(h.jsx)("h4", {
                            children: "Featured"
                        }), c ? Object(h.jsx)("h1", {
                            children: "Loading..."
                        }) : Object(h.jsx)(h.Fragment, {
                            children: o ? Object(h.jsx)("div", {
                                children: Object(h.jsx)("h2", {
                                    className: "noResults",
                                    children: "No results found. Please try again."
                                })
                            }) : Object(h.jsx)("div", {
                                className: "results",
                                children: p.map((function(e) {
                                        return Object(h.jsx)(k, {
                                            backdrop_path: e.backdrop_path,
                                            poster_path: e.poster_path,
                                            alt: e.name,
                                            id: e.id,
                                            overview: e.overview,
                                            first_air_date: e.first_air_date,
                                            genre_ids: e.genre_ids,
                                            name: e.name
                                        }, e.id)
                                    }
                                ))
                            })
                        })]
                    })]
                })
        }
            , E = (c(77),
                function() {
                    var e = Object(a.useState)(!1)
                        , t = Object(r.a)(e, 2)
                        , c = t[0]
                        , s = t[1]
                        , n = Object(a.useState)(!1)
                        , i = Object(r.a)(n, 2)
                        , o = i[0]
                        , l = i[1]
                        , u = Object(a.useState)([])
                        , b = Object(r.a)(u, 2)
                        , p = b[0]
                        , O = b[1]
                        , m = Object(a.useState)("27")
                        , v = Object(r.a)(m, 2)
                        , x = v[0]
                        , g = v[1]
                        , w = Object(a.useState)([{
                        label: "Action",
                        value: "28"
                    }, {
                        label: "Adventure",
                        value: "12"
                    }, {
                        label: "Animation",
                        value: "16"
                    }, {
                        label: "Comedy",
                        value: "35"
                    }, {
                        label: "Documentary",
                        value: "99"
                    }, {
                        label: "Drama",
                        value: "18"
                    }, {
                        label: "Family",
                        value: "10751"
                    }, {
                        label: "Romance",
                        value: "10749"
                    }, {
                        label: "Science Fiction",
                        value: "878"
                    }, {
                        label: "Western",
                        value: "37"
                    }])
                        , y = Object(r.a)(w, 1)[0]
                        , N = "1dbf27409e387afe9abadb77b2745ddd";
                    return Object(a.useEffect)((function() {
                            var e = new AbortController
                                , t = e.signal
                                , c = function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var c, a, n;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                                fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(N, "&with_genres=").concat(x), {
                                                                    signal: t
                                                                });
                                                        case 2:
                                                            return c = e.sent,
                                                                e.next = 5,
                                                                c.json();
                                                        case 5:
                                                            a = e.sent,
                                                            0 === (n = a.results).length && l(!0),
                                                                O(n),
                                                                s(!1);
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                            return s(!0),
                                c(),
                                function() {
                                    return e.abort()
                                }
                        }
                    ), [x, N]),
                        Object(h.jsxs)("div", {
                            className: "moviePage",
                            children: [Object(h.jsxs)("div", {
                                className: "fixedBanner",
                                children: [Object(h.jsx)("h1", {
                                    className: "pageTitle",
                                    children: "Movies"
                                }), Object(h.jsx)("div", {
                                    className: "selectWrapper",
                                    children: Object(h.jsx)("select", {
                                        className: "dropdown",
                                        value: x,
                                        onChange: function(e) {
                                            g(e.currentTarget.value)
                                        },
                                        children: y.map((function(e) {
                                                return Object(h.jsx)("option", {
                                                    label: e.label,
                                                    value: e.value,
                                                    children: e.label
                                                }, e.value)
                                            }
                                        ))
                                    })
                                })]
                            }), Object(h.jsx)("div", {
                                className: "movieList",
                                children: c ? Object(h.jsx)("h1", {
                                    children: "Loading..."
                                }) : Object(h.jsx)(h.Fragment, {
                                    children: o ? Object(h.jsx)("div", {
                                        children: Object(h.jsx)("h2", {
                                            className: "noResults",
                                            children: "No results found. Please try again."
                                        })
                                    }) : Object(h.jsx)("div", {
                                        className: "results",
                                        children: p.map((function(e) {
                                                return Object(h.jsx)(f, {
                                                    poster_path: e.poster_path,
                                                    alt: e.title,
                                                    id: e.id,
                                                    title: e.title,
                                                    overview: e.overview,
                                                    release_date: e.release_date,
                                                    genre_ids: e.genre_ids
                                                }, e.id)
                                            }
                                        ))
                                    })
                                })
                            })]
                        })
                }
        )
            , A = (c(78),
                function() {
                    var e = Object(a.useState)(!1)
                        , t = Object(r.a)(e, 2)
                        , c = t[0]
                        , s = t[1]
                        , n = Object(a.useState)(!1)
                        , i = Object(r.a)(n, 2)
                        , o = i[0]
                        , l = i[1]
                        , u = Object(a.useState)([])
                        , b = Object(r.a)(u, 2)
                        , p = b[0]
                        , O = b[1]
                        , m = Object(a.useState)("10759")
                        , v = Object(r.a)(m, 2)
                        , x = v[0]
                        , f = v[1]
                        , g = Object(a.useState)([{
                        label: "Action & Adventure",
                        value: 10759
                    }, {
                        label: "Animation",
                        value: "16"
                    }, {
                        label: "Comedy",
                        value: "35"
                    }, {
                        label: "Crime",
                        value: "80"
                    }, {
                        label: "Documentary",
                        value: "99"
                    }, {
                        label: "Drama",
                        value: "18"
                    }, {
                        label: "Family",
                        value: "10751"
                    }, {
                        label: "Kids",
                        value: "10762"
                    }, {
                        label: "News",
                        value: "10763"
                    }, {
                        label: "Talk",
                        value: "10767"
                    }])
                        , w = Object(r.a)(g, 1)[0]
                        , y = "1dbf27409e387afe9abadb77b2745ddd";
                    return Object(a.useEffect)((function() {
                            var e = new AbortController
                                , t = e.signal
                                , c = function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var c, a, n;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                                fetch("https://api.themoviedb.org/3/discover/tv?api_key=".concat(y, "&with_genres=").concat(x), {
                                                                    signal: t
                                                                });
                                                        case 2:
                                                            return c = e.sent,
                                                                e.next = 5,
                                                                c.json();
                                                        case 5:
                                                            a = e.sent,
                                                            0 === (n = a.results).length && l(!0),
                                                                O(n),
                                                                s(!1);
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                            return s(!0),
                                c(),
                                function() {
                                    return e.abort()
                                }
                        }
                    ), [x, y]),
                        Object(h.jsxs)("div", {
                            className: "moviePage",
                            children: [Object(h.jsxs)("div", {
                                className: "fixedBanner",
                                children: [Object(h.jsx)("h1", {
                                    className: "pageTitle",
                                    children: "Series"
                                }), Object(h.jsx)("div", {
                                    className: "selectWrapper",
                                    children: Object(h.jsx)("select", {
                                        className: "dropdown",
                                        value: x,
                                        onChange: function(e) {
                                            f(e.currentTarget.value)
                                        },
                                        children: w.map((function(e) {
                                                return Object(h.jsx)("option", {
                                                    label: e.label,
                                                    value: e.value,
                                                    children: e.label
                                                }, e.value)
                                            }
                                        ))
                                    })
                                })]
                            }), Object(h.jsx)("div", {
                                className: "movieList",
                                children: c ? Object(h.jsx)("h1", {
                                    children: "Loading..."
                                }) : Object(h.jsx)(h.Fragment, {
                                    children: o ? Object(h.jsx)("div", {
                                        children: Object(h.jsx)("h2", {
                                            className: "noResults",
                                            children: "No results found. Please try again."
                                        })
                                    }) : Object(h.jsx)("div", {
                                        className: "results",
                                        children: p.map((function(e) {
                                                return Object(h.jsx)(k, {
                                                    backdrop_path: e.backdrop_path,
                                                    poster_path: e.poster_path,
                                                    alt: e.name,
                                                    id: e.id,
                                                    overview: e.overview,
                                                    first_air_date: e.first_air_date,
                                                    genre_ids: e.genre_ids,
                                                    name: e.name
                                                }, e.id)
                                            }
                                        ))
                                    })
                                })
                            })]
                        })
                }
        )
            , D = (c(79),
            c(14))
            , B = c(27)
            , I = c(20)
            , F = c.n(I)
            , P = (c(87),
            {
                dots: !1,
                infinite: !1,
                autoplay: !1,
                slidesToShow: 6,
                slidesToScroll: 1,
                centerMode: !1,
                arrows: !1,
                useTransform: !0,
                cssEase: "ease-in",
                responsive: [{
                    breakpoint: 812,
                    settings: {
                        slidesToShow: 2
                    }
                }]
            })
            , T = function(e) {
            var t = e.id
                , c = Object(a.useState)([])
                , s = Object(r.a)(c, 2)
                , n = s[0]
                , o = s[1]
                , l = "1dbf27409e387afe9abadb77b2745ddd";
            return Object(a.useEffect)((function() {
                    var e = new AbortController
                        , c = e.signal;
                    return function() {
                        var e = Object(d.a)(j.a.mark((function e() {
                                var a, s, n;
                                return j.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        fetch("https://api.themoviedb.org/3/movie/".concat(t, "/recommendations?api_key=").concat(l, "&language=en-US&page=1"), {
                                                            signal: c
                                                        });
                                                case 2:
                                                    return a = e.sent,
                                                        e.next = 5,
                                                        a.json();
                                                case 5:
                                                    s = e.sent,
                                                        n = s.results,
                                                        o(n);
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()(),
                        function() {
                            return e.abort()
                        }
                }
            ), [t, l]),
                Object(h.jsx)("div", {
                    className: "suggested",
                    children: n.length > 0 ? Object(h.jsx)(p.a, Object(u.a)(Object(u.a)({}, P), {}, {
                        children: n.map((function(e) {
                                return Object(h.jsx)(i.b, {
                                    to: {
                                        pathname: "/movie/".concat(e.id)
                                    },
                                    children: Object(h.jsx)("div", {
                                        className: "banner recBanner",
                                        children: Object(h.jsx)("img", {
                                            src: e.poster_path ? "https://image.tmdb.org/t/p/original/".concat(e.poster_path) : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg",
                                            alt: e.title
                                        })
                                    })
                                }, e.title)
                            }
                        ))
                    })) : Object(h.jsx)("h3", {
                        className: "reccommendationsError",
                        children: "No Recommendations Available"
                    })
                })
        }
            , R = (c(88),
                function(e) {
                    var t = e.extras
                        , c = e.noExtras
                        , s = Object(a.useState)(!1)
                        , n = Object(r.a)(s, 2)
                        , i = n[0]
                        , o = n[1];
                    return Object(h.jsx)("div", {
                        className: "",
                        children: Object(h.jsx)("div", {
                            className: "extrasGrid",
                            children: c ? Object(h.jsx)("h3", {
                                className: "extrasError",
                                children: "No Extras Available"
                            }) : t.map((function(e) {
                                    return Object(h.jsxs)("div", {
                                        children: [Object(h.jsxs)("div", {
                                            className: "extrasVid banner recBanner",
                                            onClick: function() {
                                                return o(!0)
                                            },
                                            children: [Object(h.jsx)("img", {
                                                src: t.length > 0 ? "https://img.youtube.com/vi/".concat(e.key, "/mqdefault.jpg") : "https://img.youtube.com/vi/".concat(e.key, "/4.jpg"),
                                                alt: e.id
                                            }), Object(h.jsx)(F.a, {
                                                channel: "youtube",
                                                autoplay: !0,
                                                isOpen: i,
                                                videoId: e.key,
                                                onClose: function() {
                                                    return o(!1)
                                                }
                                            }, e.id)]
                                        }), Object(h.jsx)("h6", {
                                            children: e.name
                                        })]
                                    }, e.id)
                                }
                            ))
                        })
                    })
                }
        )
            , U = (c(89),
                function(e) {
                    var t = e.overview
                        , c = e.title
                        , a = e.date
                        , s = e.genres
                        , n = e.runtime
                        , r = e.rating
                        , i = e.director
                        , o = e.cast;
                    return Object(h.jsxs)(h.Fragment, {
                        children: [Object(h.jsx)("h2", {
                            children: c
                        }), Object(h.jsxs)("div", {
                            className: "extras",
                            children: [Object(h.jsx)("div", {
                                className: "column1",
                                children: Object(h.jsxs)("h5", {
                                    children: [" ", t.length > 0 ? t : "No summary available."]
                                })
                            }), Object(h.jsxs)("div", {
                                className: "column2",
                                children: [Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Duration:"
                                    }), Object(h.jsx)("p", {
                                        children: n || "N/A"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Release Date:"
                                    }), Object(h.jsx)("p", {
                                        children: a || "N/A"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Genre:"
                                    }), Object(h.jsx)("p", {
                                        children: s.length > 0 ? "".concat(s.join(", ")) : "N/A"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Rating:"
                                    }), Object(h.jsx)("p", {
                                        children: r || "N/A"
                                    })]
                                })]
                            }), Object(h.jsxs)("div", {
                                className: "column3",
                                children: [Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Director:"
                                    }), Object(h.jsx)("p", {
                                        children: i || "N/A"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Starring:"
                                    }), Object(h.jsx)("p", {
                                        className: "cast",
                                        children: o.length > 0 ? o.map((function(e) {
                                                return Object(h.jsx)("li", {
                                                    children: e
                                                }, e)
                                            }
                                        )) : "N/A"
                                    })]
                                })]
                            })]
                        })]
                    })
                }
        )
            , L = function(e) {
            var t = Object(a.useState)([])
                , c = Object(r.a)(t, 2)
                , s = c[0]
                , n = c[1]
                , o = Object(a.useState)("")
                , l = Object(r.a)(o, 2)
                , u = l[0]
                , b = l[1]
                , p = Object(a.useState)("")
                , O = Object(r.a)(p, 2)
                , m = O[0]
                , v = O[1]
                , x = Object(a.useState)("")
                , f = Object(r.a)(x, 2)
                , g = f[0]
                , y = f[1]
                , N = Object(a.useState)("")
                , S = Object(r.a)(N, 2)
                , k = S[0]
                , C = S[1]
                , E = Object(a.useState)("")
                , A = Object(r.a)(E, 2)
                , I = A[0]
                , P = A[1]
                , L = Object(a.useState)([])
                , M = Object(r.a)(L, 2)
                , W = M[0]
                , V = M[1]
                , J = Object(a.useState)("")
                , Y = Object(r.a)(J, 2)
                , q = Y[0]
                , G = Y[1]
                , z = Object(a.useState)("")
                , H = Object(r.a)(z, 2)
                , K = H[0]
                , Q = H[1]
                , X = Object(a.useState)(!1)
                , Z = Object(r.a)(X, 2)
                , $ = Z[0]
                , ee = Z[1]
                , te = Object(a.useState)([])
                , ce = Object(r.a)(te, 2)
                , ae = ce[0]
                , se = ce[1]
                , ne = Object(a.useState)([])
                , re = Object(r.a)(ne, 2)
                , ie = re[0]
                , oe = re[1]
                , le = Object(a.useState)([])
                , je = Object(r.a)(le, 2)
                , de = je[0]
                , ue = je[1]
                , be = Object(a.useState)(!1)
                , pe = Object(r.a)(be, 2)
                , he = pe[0]
                , Oe = pe[1]
                , me = Object(a.useState)(!1)
                , ve = Object(r.a)(me, 2)
                , xe = ve[0]
                , fe = ve[1]
                , ge = Object(a.useState)(!1)
                , we = Object(r.a)(ge, 2)
                , ye = we[0]
                , Ne = we[1]
                , _e = Object(a.useState)(!1)
                , Se = Object(r.a)(_e, 2)
                , ke = Se[0]
                , Ce = Se[1]
                , Ee = Object(a.useState)(!0)
                , Ae = Object(r.a)(Ee, 2)
                , De = Ae[0]
                , Be = Ae[1]
                , Ie = Object(a.useState)(!1)
                , Fe = Object(r.a)(Ie, 2)
                , Pe = Fe[0]
                , Te = Fe[1]
                , Re = Object(a.useState)(!1)
                , Ue = Object(r.a)(Re, 2)
                , Le = Ue[0]
                , Me = Ue[1]
                , We = "1dbf27409e387afe9abadb77b2745ddd"
                , Ve = Object(a.useState)(null)
                , Je = Object(r.a)(Ve, 2)
                , Ye = Je[0]
                , qe = Je[1]
                , Ge = e.match.params.id;
            Object(a.useEffect)((function() {
                    (function() {
                            var e = Object(d.a)(j.a.mark((function e() {
                                    var t;
                                    return j.a.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            _.from("watchlist").select().eq("id", Ge);
                                                    case 2:
                                                        t = e.sent,
                                                        t.data.length > 0 && Ne(!0);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e)
                                }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }
                    )()()
                }
            ), [Ge, ye]),
                Object(a.useEffect)((function() {
                        qe(_.auth.session()),
                            _.auth.onAuthStateChange((function(e, t) {
                                    qe(t)
                                }
                            )),
                            function() {
                                var t = Object(d.a)(j.a.mark((function t() {
                                        var c, a, s, r, i, o, l, d, u, p, h;
                                        return j.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2,
                                                                fetch("https://api.themoviedb.org/3/movie/".concat(null === e || void 0 === e || null === (c = e.match) || void 0 === c ? void 0 : c.params.id, "?api_key=").concat(We, "&append_to_response=videos,images,release_dates,credits"));
                                                        case 2:
                                                            return a = t.sent,
                                                                t.next = 5,
                                                                a.json();
                                                        case 5:
                                                            s = t.sent,
                                                                n(s),
                                                                b(s.title),
                                                                y(s.title),
                                                                v(s.release_date.substr(0, s.release_date.indexOf("-"))),
                                                            0 !== s.images.length && 0 !== s.images.logos.length || ee(!0),
                                                                s.images.logos.map((function(e) {
                                                                        return "en" === e.iso_639_1 && (ee(!1),
                                                                            Q(e.file_path)),
                                                                            e
                                                                    }
                                                                )),
                                                                s.genres.map((function(e) {
                                                                        return se((function(t) {
                                                                                return [].concat(Object(w.a)(t), [e.name])
                                                                            }
                                                                        )),
                                                                            e
                                                                    }
                                                                )),
                                                                0 === s.videos.results.length ? fe(!0) : (r = s.videos.results[0].key,
                                                                    fe(!1),
                                                                    oe(r)),
                                                                0 === s.videos.results.length ? Oe(!0) : (Oe(!1),
                                                                    ue(s.videos.results)),
                                                                i = s.runtime / 60,
                                                                o = Math.floor(i),
                                                                l = 60 * (i - o),
                                                                d = Math.round(l),
                                                                "",
                                                                C(o < 1 ? d + "m" : o + "h " + d + "m"),
                                                                s.release_dates.results.map((function(e) {
                                                                        return "US" === e.iso_3166_1 && G(e.release_dates[0].certification),
                                                                            e
                                                                    }
                                                                )),
                                                                s.credits.crew.map((function(e) {
                                                                        return "Director" === e.job && P(e.name),
                                                                            e
                                                                    }
                                                                )),
                                                                u = [],
                                                                p = s.credits.cast,
                                                                h = 0;
                                                        case 27:
                                                            if (!(h < 6)) {
                                                                t.next = 36;
                                                                break
                                                            }
                                                            if (void 0 !== p[h]) {
                                                                t.next = 32;
                                                                break
                                                            }
                                                            return t.abrupt("break", 36);
                                                        case 32:
                                                            u.push(p[h].name);
                                                        case 33:
                                                            h++,
                                                                t.next = 27;
                                                            break;
                                                        case 36:
                                                            u.length > 0 && V(u);
                                                        case 37:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }
                                        ), t)
                                    }
                                )));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()()
                    }
                ), [Ge, e.match.params, We]);
            var ze = function() {
                var e = Object(d.a)(j.a.mark((function e() {
                        var t, c;
                        return j.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                _.from("watchlist").insert({
                                                    id: Ge
                                                });
                                        case 2:
                                            if (t = e.sent,
                                                c = t.error,
                                                Ne(!0),
                                                !c) {
                                                e.next = 8;
                                                break
                                            }
                                            throw console.log("error:", c),
                                                c;
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
                , He = function() {
                var e = Object(d.a)(j.a.mark((function e() {
                        var t, c;
                        return j.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                _.from("watchlist").delete().match({
                                                    id: Ge
                                                });
                                        case 2:
                                            if (t = e.sent,
                                                c = t.error,
                                                Ne(!1),
                                                !c) {
                                                e.next = 8;
                                                break
                                            }
                                            throw console.log("error:", c),
                                                c;
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e)
                    }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
                , Ke = function() {
                Ce(!0)
            };
            return Object(h.jsx)("div", {
                className: "resultPage",
                children: Object(h.jsxs)("div", {
                    className: "resultBackground",
                    children: [s.backdrop_path && Object(h.jsx)("img", {
                        className: "posterBackground",
                        src: s.backdrop_path ? "https://image.tmdb.org/t/p/original".concat(s.backdrop_path) : "https://i1.wp.com/www.africanflair.com/wp-content/uploads/2015/10/pix-horizontal-placeholder.jpg?w=1920&ssl=1",
                        alt: g
                    }), Object(h.jsxs)("div", {
                        className: "resultInfo",
                        children: [$ ? Object(h.jsxs)("h1", {
                            children: [" ", u, " "]
                        }) : Object(h.jsx)("img", {
                            className: "resultLogo",
                            src: "https://image.tmdb.org/t/p/w500".concat(K),
                            alt: K
                        }), Object(h.jsxs)("div", {
                            className: "generalInfo",
                            children: [q ? "".concat(q, " \u2022 ") : "", " ", m, " ", ae.length > 0 ? "\u2022 ".concat(ae.join(", ")) : ""]
                        }), Object(h.jsxs)("div", {
                            className: "actions",
                            children: [xe ? Object(h.jsx)("button", {
                                className: "play playError trailerError",
                                children: Object(h.jsx)("p", {
                                    children: "No Videos"
                                })
                            }) : Object(h.jsxs)("button", {
                                className: "play",
                                onClick: s.homepage ? function() {
                                        return window.open(s.homepage, "_blank")
                                    }
                                    : Ke,
                                children: [Object(h.jsx)(D.b, {}), Object(h.jsx)("p", {
                                    children: "Play"
                                })]
                            }), xe ? Object(h.jsx)("button", {
                                className: "play trailer trailerError",
                                children: Object(h.jsx)("p", {
                                    children: "No Trailer"
                                })
                            }) : Object(h.jsxs)("button", {
                                className: "play trailer",
                                onClick: Ke,
                                children: [Object(h.jsx)(D.b, {}), Object(h.jsx)("p", {
                                    children: "Trailer"
                                })]
                            }), Ye ? ye ? Object(h.jsx)("div", {
                                className: "circleButton",
                                onClick: He,
                                children: Object(h.jsx)(D.a, {})
                            }) : Object(h.jsx)("div", {
                                className: "circleButton",
                                onClick: ze,
                                children: Object(h.jsx)(D.c, {})
                            }) : Object(h.jsx)(i.b, {
                                to: "/login",
                                className: "circleButton",
                                children: Object(h.jsx)(D.c, {})
                            }), Object(h.jsx)(i.b, {
                                to: "/login",
                                className: "circleButton",
                                children: Object(h.jsx)(B.a, {})
                            })]
                        }), Object(h.jsxs)("div", {
                            className: "overview",
                            children: [Object(h.jsx)("h5", {
                                children: s.overview && s.overview.length > 0 ? s.overview.split(".")[0] + "." : "No summary available."
                            }), Object(h.jsx)(F.a, {
                                channel: "youtube",
                                autoplay: !0,
                                isOpen: ke,
                                videoId: ie,
                                onClose: function() {
                                    return Ce(!1)
                                }
                            })]
                        }), Object(h.jsxs)("nav", {
                            className: "subNav",
                            children: [Object(h.jsx)("div", {
                                className: "subNavSection ".concat(De ? "active" : "", " "),
                                children: Object(h.jsx)("button", {
                                    onClick: function() {
                                        Be(!0),
                                            Te(!1),
                                            Me(!1)
                                    },
                                    children: "Suggested"
                                })
                            }), Object(h.jsx)("div", {
                                className: "subNavSection ".concat(Pe ? "active" : "", " "),
                                children: Object(h.jsx)("button", {
                                    onClick: function() {
                                        Be(!1),
                                            Te(!0),
                                            Me(!1)
                                    },
                                    children: "Extras"
                                })
                            }), Object(h.jsx)("div", {
                                className: "subNavSection ".concat(Le ? "active" : "", " "),
                                children: Object(h.jsx)("button", {
                                    onClick: function() {
                                        Be(!1),
                                            Te(!1),
                                            Me(!0)
                                    },
                                    children: "Details"
                                })
                            })]
                        }), Object(h.jsxs)("div", {
                            className: "detailsWrapper",
                            children: [De && Object(h.jsx)(T, {
                                id: Ge
                            }), Pe && Object(h.jsx)(R, {
                                extras: de,
                                noExtras: he
                            }), Le && Object(h.jsx)(U, {
                                overview: s.overview,
                                title: u,
                                date: m,
                                genres: ae,
                                runtime: k,
                                rating: q,
                                director: I,
                                cast: W
                            })]
                        })]
                    })]
                })
            })
        }
            , M = (c(90),
                c(91),
                function() {
                    var e = Object(a.useState)(!1)
                        , t = Object(r.a)(e, 2)
                        , c = t[0]
                        , s = t[1]
                        , n = Object(a.useState)("")
                        , i = Object(r.a)(n, 2)
                        , o = i[0]
                        , l = i[1]
                        , u = function() {
                        var e = Object(d.a)(j.a.mark((function e(t) {
                                var c, a;
                                return j.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                        s(!0),
                                                        e.next = 4,
                                                        _.auth.signIn({
                                                            email: t
                                                        });
                                                case 4:
                                                    if (c = e.sent,
                                                        !(a = c.error)) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    throw a;
                                                case 8:
                                                    alert("Check your email for the login link!"),
                                                        e.next = 14;
                                                    break;
                                                case 11:
                                                    e.prev = 11,
                                                        e.t0 = e.catch(0),
                                                        alert(e.t0.error_description || e.t0.message);
                                                case 14:
                                                    return e.prev = 14,
                                                        s(!1),
                                                        e.finish(14);
                                                case 17:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e, null, [[0, 11, 14, 17]])
                            }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(h.jsx)("div", {
                        className: "loginPage auth",
                        children: Object(h.jsx)("div", {
                            className: "row flex flex-center",
                            children: Object(h.jsxs)("div", {
                                className: "col-6 form-widget",
                                children: [Object(h.jsx)("h1", {
                                    className: "header",
                                    children: "Log In To Your Account"
                                }), Object(h.jsx)("p", {
                                    className: "description",
                                    children: "Sign in/up via magic link with your email below"
                                }), Object(h.jsx)("div", {
                                    children: Object(h.jsx)("input", {
                                        className: "inputField",
                                        type: "email",
                                        placeholder: "Your email",
                                        value: o,
                                        onChange: function(e) {
                                            return l(e.target.value)
                                        }
                                    })
                                }), Object(h.jsx)("div", {
                                    children: Object(h.jsx)("button", {
                                        onClick: function(e) {
                                            e.preventDefault(),
                                                u(o)
                                        },
                                        className: "button block",
                                        disabled: c,
                                        children: c ? Object(h.jsx)("span", {
                                            children: "Loading..."
                                        }) : Object(h.jsx)("span", {
                                            children: "Send magic link"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                }
        )
            , W = (c(92),
                function(e) {
                    var t, c = e.session, s = Object(a.useState)(!0), n = Object(r.a)(s, 2), i = n[0], o = n[1], l = Object(a.useState)(null), u = Object(r.a)(l, 2), b = u[0], p = u[1], O = Object(a.useState)(null), m = Object(r.a)(O, 2), v = m[0], x = m[1], f = Object(a.useState)(null), g = Object(r.a)(f, 2), w = g[0], y = g[1];
                    function N() {
                        return (N = Object(d.a)(j.a.mark((function e() {
                                var t, c, a, s, n;
                                return j.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                        o(!0),
                                                        t = _.auth.user(),
                                                        e.next = 5,
                                                        _.from("profiles").select("username, website, avatar_url").eq("id", t.id).single();
                                                case 5:
                                                    if (c = e.sent,
                                                        a = c.data,
                                                        s = c.error,
                                                        n = c.status,
                                                    !s || 406 === n) {
                                                        e.next = 11;
                                                        break
                                                    }
                                                    throw s;
                                                case 11:
                                                    a && (p(a.username),
                                                        x(a.website),
                                                        y(a.avatar_url)),
                                                        e.next = 17;
                                                    break;
                                                case 14:
                                                    e.prev = 14,
                                                        e.t0 = e.catch(0),
                                                        alert(e.t0.message);
                                                case 17:
                                                    return e.prev = 17,
                                                        o(!1),
                                                        e.finish(17);
                                                case 20:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e, null, [[0, 14, 17, 20]])
                            }
                        )))).apply(this, arguments)
                    }
                    function S() {
                        return (S = Object(d.a)(j.a.mark((function e(t) {
                                var c, a, s, n, r, i, l;
                                return j.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return c = t.username,
                                                        a = t.website,
                                                        s = t.avatar_url,
                                                        e.prev = 1,
                                                        o(!0),
                                                        n = _.auth.user(),
                                                        r = {
                                                            id: n.id,
                                                            username: c,
                                                            website: a,
                                                            avatar_url: s,
                                                            updated_at: new Date
                                                        },
                                                        e.next = 7,
                                                        _.from("profiles").upsert(r, {
                                                            returning: "minimal"
                                                        });
                                                case 7:
                                                    if (i = e.sent,
                                                        !(l = i.error)) {
                                                        e.next = 11;
                                                        break
                                                    }
                                                    throw l;
                                                case 11:
                                                    e.next = 16;
                                                    break;
                                                case 13:
                                                    e.prev = 13,
                                                        e.t0 = e.catch(1),
                                                        alert(e.t0.message);
                                                case 16:
                                                    return e.prev = 16,
                                                        o(!1),
                                                        e.finish(16);
                                                case 19:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e, null, [[1, 13, 16, 19]])
                            }
                        )))).apply(this, arguments)
                    }
                    return Object(a.useEffect)((function() {
                            !function() {
                                N.apply(this, arguments)
                            }()
                        }
                    ), []),
                        Object(h.jsx)("div", {
                            className: "loginPage",
                            children: Object(h.jsxs)("div", {
                                className: "form-widget",
                                children: [Object(h.jsx)("h1", {
                                    className: "header",
                                    children: "Change Details"
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("label", {
                                        htmlFor: "email",
                                        children: "Email"
                                    }), Object(h.jsx)("input", {
                                        id: "email",
                                        type: "text",
                                        value: null === c || void 0 === c || null === (t = c.user) || void 0 === t ? void 0 : t.email,
                                        disabled: !0
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("label", {
                                        htmlFor: "username",
                                        children: "Name"
                                    }), Object(h.jsx)("input", {
                                        id: "username",
                                        type: "text",
                                        value: b || "",
                                        onChange: function(e) {
                                            return p(e.target.value)
                                        }
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("label", {
                                        htmlFor: "website",
                                        children: "Website"
                                    }), Object(h.jsx)("input", {
                                        id: "website",
                                        type: "website",
                                        value: v || "",
                                        onChange: function(e) {
                                            return x(e.target.value)
                                        }
                                    })]
                                }), Object(h.jsx)("div", {
                                    children: Object(h.jsx)("button", {
                                        className: "button block primary",
                                        onClick: function() {
                                            return function(e) {
                                                return S.apply(this, arguments)
                                            }({
                                                username: b,
                                                website: v,
                                                avatar_url: w
                                            })
                                        },
                                        disabled: i,
                                        children: i ? "Loading ..." : "Update"
                                    })
                                }), Object(h.jsx)("div", {
                                    children: Object(h.jsx)("button", {
                                        className: "button block",
                                        onClick: function() {
                                            return _.auth.signOut()
                                        },
                                        children: "Sign Out"
                                    })
                                })]
                            })
                        })
                }
        )
            , V = function() {
            var e = Object(a.useState)(null)
                , t = Object(r.a)(e, 2)
                , c = t[0]
                , s = t[1];
            return Object(a.useEffect)((function() {
                    s(_.auth.session()),
                        _.auth.onAuthStateChange((function(e, t) {
                                s(t)
                            }
                        ))
                }
            ), []),
                Object(h.jsx)("div", {
                    className: "container",
                    style: {
                        padding: "50px 0 100px 0"
                    },
                    children: c ? Object(h.jsx)(W, {
                        session: c
                    }, c.user.id) : Object(h.jsx)(M, {})
                })
        }
            , J = (c(93),
                function() {
                    var e = Object(a.useState)([])
                        , t = Object(r.a)(e, 2)
                        , c = t[0]
                        , s = t[1]
                        , n = "1dbf27409e387afe9abadb77b2745ddd";
                    return Object(a.useEffect)((function() {
                            var e = new AbortController
                                , t = e.signal;
                            return function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var c, a, r;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                                fetch("https://api.themoviedb.org/3/list/338?api_key=".concat(n, "&language=en-US"), {
                                                                    signal: t
                                                                });
                                                        case 2:
                                                            return c = e.sent,
                                                                e.next = 5,
                                                                c.json();
                                                        case 5:
                                                            a = e.sent,
                                                                r = a.items,
                                                                s(r);
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()(),
                                function() {
                                    return e.abort()
                                }
                        }
                    ), [n]),
                        Object(h.jsxs)("div", {
                            className: "wrapper collectionDisney collection",
                            children: [Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                className: "collectionsVideo",
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564677287-disney.mp4",
                                    type: "video/mp4"
                                })
                            }), Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A596DE839393E0F3DB258AC5B4F45CDB4C03257DAA4FF87F9952ADBCB28E2905/scale?width=1200",
                                alt: "disney",
                                className: "collectionsImg"
                            }), Object(h.jsx)("div", {
                                className: "page collectionsPage",
                                children: Object(h.jsx)("div", {
                                    className: "results collections",
                                    children: c.map((function(e) {
                                            return Object(h.jsx)(f, {
                                                poster_path: e.poster_path,
                                                alt: e.title,
                                                id: e.id,
                                                title: e.title,
                                                overview: e.overview,
                                                release_date: e.release_date,
                                                genre_ids: e.genre_ids
                                            }, e.id)
                                        }
                                    ))
                                })
                            })]
                        })
                }
        )
            , Y = (c(94),
                function() {
                    var e = Object(a.useState)([])
                        , t = Object(r.a)(e, 2)
                        , c = t[0]
                        , s = t[1]
                        , n = "1dbf27409e387afe9abadb77b2745ddd";
                    return Object(a.useEffect)((function() {
                            var e = new AbortController
                                , t = e.signal;
                            return function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var c, a, r;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                                fetch("https://api.themoviedb.org/3/list/9095?api_key=".concat(n, "&language=en-US"), {
                                                                    signal: t
                                                                });
                                                        case 2:
                                                            return c = e.sent,
                                                                e.next = 5,
                                                                c.json();
                                                        case 5:
                                                            a = e.sent,
                                                                r = a.items,
                                                                s(r);
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()(),
                                function() {
                                    return e.abort()
                                }
                        }
                    ), [n]),
                        Object(h.jsxs)("div", {
                            className: "wrapper collection",
                            children: [Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                className: "collectionsVideo",
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564677724-pixar.mp4",
                                    type: "video/mp4"
                                })
                            }), Object(h.jsx)("div", {
                                className: "spacer"
                            }), Object(h.jsx)("div", {
                                className: "page collectionsPixar collectionsPage ",
                                children: Object(h.jsx)("div", {
                                    className: "results collections",
                                    children: c.map((function(e) {
                                            return Object(h.jsx)(f, {
                                                poster_path: e.poster_path,
                                                alt: e.title,
                                                id: e.id,
                                                title: e.title,
                                                overview: e.overview,
                                                release_date: e.release_date,
                                                genre_ids: e.genre_ids
                                            }, e.id)
                                        }
                                    ))
                                })
                            })]
                        })
                }
        )
            , q = (c(95),
                function() {
                    var e = Object(a.useState)([])
                        , t = Object(r.a)(e, 2)
                        , c = t[0]
                        , s = t[1]
                        , n = "1dbf27409e387afe9abadb77b2745ddd";
                    return Object(a.useEffect)((function() {
                            var e = new AbortController
                                , t = e.signal;
                            return function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var c, a, r;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                                fetch("https://api.themoviedb.org/3/list/9387?api_key=".concat(n, "&language=en-US"), {
                                                                    signal: t
                                                                });
                                                        case 2:
                                                            return c = e.sent,
                                                                e.next = 5,
                                                                c.json();
                                                        case 5:
                                                            a = e.sent,
                                                                r = a.items,
                                                                s(r);
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()(),
                                function() {
                                    return e.abort()
                                }
                        }
                    ), [n]),
                        Object(h.jsxs)("div", {
                            className: "wrapper collection",
                            children: [Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                className: "collectionsVideo",
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/09/06/1567786546-marvel.mp4",
                                    type: "video/mp4"
                                })
                            }), Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC26D77B10047FCE6F1CC1AB419F700447E5C37D352BAD6433B2EF7C068187D0/scale?width=1200",
                                alt: "marvel",
                                className: "collectionsImg"
                            }), Object(h.jsx)("div", {
                                className: "page collectionsPage",
                                children: Object(h.jsx)("div", {
                                    className: "results collections",
                                    children: c.map((function(e) {
                                            return Object(h.jsx)(f, {
                                                poster_path: e.poster_path,
                                                alt: e.title,
                                                id: e.id,
                                                title: e.title,
                                                overview: e.overview,
                                                release_date: e.release_date,
                                                genre_ids: e.genre_ids
                                            }, e.id)
                                        }
                                    ))
                                })
                            })]
                        })
                }
        )
            , G = (c(96),
                function() {
                    var e = Object(a.useState)([])
                        , t = Object(r.a)(e, 2)
                        , c = t[0]
                        , s = t[1]
                        , n = "1dbf27409e387afe9abadb77b2745ddd";
                    return Object(a.useEffect)((function() {
                            var e = new AbortController
                                , t = e.signal;
                            return function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var c, a, r;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                                fetch("https://api.themoviedb.org/3/list/8136?api_key=".concat(n, "&language=en-US"), {
                                                                    signal: t
                                                                });
                                                        case 2:
                                                            return c = e.sent,
                                                                e.next = 5,
                                                                c.json();
                                                        case 5:
                                                            a = e.sent,
                                                                r = a.items,
                                                                s(r);
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()(),
                                function() {
                                    return e.abort()
                                }
                        }
                    ), [n]),
                        Object(h.jsxs)("div", {
                            className: "wrapper collection",
                            children: [Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                className: "collectionsVideo",
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564677991-star-wars.mp4",
                                    type: "video/mp4"
                                })
                            }), Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/04BB6D7A8E43E18DB3C30E6D9916DE7F44F38C12A7B3ED6B99EDD96DF8FF7D68/scale?width=1200",
                                alt: "star-wars",
                                className: "collectionsImg"
                            }), Object(h.jsx)("div", {
                                className: "page collectionsStarWars collectionsPage",
                                children: Object(h.jsx)("div", {
                                    className: "results collections",
                                    children: c.map((function(e) {
                                            return Object(h.jsx)(f, {
                                                poster_path: e.poster_path,
                                                alt: e.title,
                                                id: e.id,
                                                title: e.title,
                                                overview: e.overview,
                                                release_date: e.release_date,
                                                genre_ids: e.genre_ids
                                            }, e.id)
                                        }
                                    ))
                                })
                            })]
                        })
                }
        )
            , z = (c(97),
                function() {
                    var e = Object(a.useState)([])
                        , t = Object(r.a)(e, 2)
                        , c = t[0]
                        , s = t[1]
                        , n = "1dbf27409e387afe9abadb77b2745ddd";
                    return Object(a.useEffect)((function() {
                            var e = new AbortController
                                , t = e.signal;
                            return function() {
                                var e = Object(d.a)(j.a.mark((function e() {
                                        var c, a, r;
                                        return j.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2,
                                                                fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(n, "&query=national+geographic"), {
                                                                    signal: t
                                                                });
                                                        case 2:
                                                            return c = e.sent,
                                                                e.next = 5,
                                                                c.json();
                                                        case 5:
                                                            a = e.sent,
                                                                r = a.results,
                                                                s(r);
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }
                                        ), e)
                                    }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()(),
                                function() {
                                    return e.abort()
                                }
                        }
                    ), [n]),
                        Object(h.jsxs)("div", {
                            className: "wrapper collection",
                            children: [Object(h.jsx)("video", {
                                loop: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                className: "collectionsVideo",
                                children: Object(h.jsx)("source", {
                                    src: "https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/02/1564784586-national-geographic.mp4",
                                    type: "video/mp4"
                                })
                            }), Object(h.jsx)("img", {
                                src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B794A4647CDE36B4D8742BB6B3FDAEC940351C90F2D7D15E803B2376021C3826/scale?width=1200",
                                alt: "nat-geo",
                                className: "collectionsImg"
                            }), Object(h.jsx)("div", {
                                className: "page  collectionsNatGeo collectionsPage",
                                children: Object(h.jsx)("div", {
                                    className: "results collections",
                                    children: c.map((function(e) {
                                            return Object(h.jsx)(f, {
                                                poster_path: e.poster_path,
                                                alt: e.title,
                                                id: e.id,
                                                title: e.title,
                                                overview: e.overview,
                                                release_date: e.release_date,
                                                genre_ids: e.genre_ids
                                            }, e.id)
                                        }
                                    ))
                                })
                            })]
                        })
                }
        )
            , H = (c(98),
                function(e) {
                    var t = e.overview
                        , c = e.date
                        , a = e.genres
                        , s = e.rating
                        , n = e.creator
                        , r = e.cast
                        , i = e.name;
                    return Object(h.jsxs)(h.Fragment, {
                        children: [Object(h.jsx)("h2", {
                            children: i
                        }), Object(h.jsxs)("div", {
                            className: "extras",
                            children: [Object(h.jsx)("div", {
                                className: "column1",
                                children: Object(h.jsxs)("h5", {
                                    children: [" ", t || "No summary available."]
                                })
                            }), Object(h.jsxs)("div", {
                                className: "column2",
                                children: [Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Release Date:"
                                    }), Object(h.jsx)("p", {
                                        children: c || "N/A"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Genre:"
                                    }), Object(h.jsx)("p", {
                                        children: a.length > 0 ? "".concat(a.join(", ")) : "N/A"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Rating:"
                                    }), Object(h.jsx)("p", {
                                        children: s || "N/A"
                                    })]
                                })]
                            }), Object(h.jsxs)("div", {
                                className: "column3",
                                children: [Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Creator:"
                                    }), Object(h.jsx)("p", {
                                        className: "cast",
                                        children: n.length > 0 ? n.map((function(e) {
                                                return Object(h.jsx)("li", {
                                                    children: e
                                                }, e)
                                            }
                                        )) : "N/A"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    children: [Object(h.jsx)("p", {
                                        children: "Starring:"
                                    }), Object(h.jsx)("p", {
                                        className: "cast",
                                        children: r.length > 0 ? r.map((function(e) {
                                                return Object(h.jsx)("li", {
                                                    children: e
                                                }, e)
                                            }
                                        )) : "N/A"
                                    })]
                                })]
                            })]
                        })]
                    })
                }
        )
            , K = {
            dots: !1,
            infinite: !1,
            autoplay: !1,
            slidesToShow: 6,
            slidesToScroll: 1,
            centerMode: !1,
            arrows: !1,
            useTransform: !0,
            cssEase: "ease-in",
            responsive: [{
                breakpoint: 812,
                settings: {
                    slidesToShow: 2
                }
            }]
        }
            , Q = function(e) {
            var t = e.id
                , c = Object(a.useState)([])
                , s = Object(r.a)(c, 2)
                , n = s[0]
                , o = s[1]
                , l = Object(a.useState)(!1)
                , b = Object(r.a)(l, 2)
                , O = b[0]
                , m = b[1]
                , v = "1dbf27409e387afe9abadb77b2745ddd";
            return Object(a.useEffect)((function() {
                    var e = new AbortController
                        , c = e.signal;
                    return function() {
                        var e = Object(d.a)(j.a.mark((function e() {
                                var a, s, n;
                                return j.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                        m(!0),
                                                        e.next = 4,
                                                        fetch("https://api.themoviedb.org/3/tv/".concat(t, "/recommendations?api_key=").concat(v, "&language=en-US&page=1"), {
                                                            signal: c
                                                        });
                                                case 4:
                                                    if ((a = e.sent).ok) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    throw new Error("Request failed.");
                                                case 7:
                                                    return e.next = 9,
                                                        a.json();
                                                case 9:
                                                    s = e.sent,
                                                        n = s.results,
                                                        o(n),
                                                        m(!1),
                                                        e.next = 18;
                                                    break;
                                                case 15:
                                                    e.prev = 15,
                                                        e.t0 = e.catch(0),
                                                        console.log(e.t0);
                                                case 18:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e, null, [[0, 15]])
                            }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()(),
                        function() {
                            return e.abort()
                        }
                }
            ), [t, v]),
                Object(h.jsx)("div", {
                    className: "suggested",
                    children: O ? Object(h.jsx)("h3", {
                        children: "Loading..."
                    }) : 0 === n.length ? Object(h.jsx)("h3", {
                        className: "reccommendationsError",
                        children: "No Recommendations Available"
                    }) : Object(h.jsx)(p.a, Object(u.a)(Object(u.a)({}, K), {}, {
                        children: n.map((function(e) {
                                return Object(h.jsx)(i.b, {
                                    to: {
                                        pathname: "/show/".concat(e.id)
                                    },
                                    children: Object(h.jsx)("div", {
                                        className: "banner recBanner",
                                        children: Object(h.jsx)("img", {
                                            src: e.poster_path ? "https://image.tmdb.org/t/p/original/".concat(e.poster_path) : "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg",
                                            alt: e.title
                                        })
                                    })
                                }, e.id)
                            }
                        ))
                    }))
                })
        }
            , X = function(e) {
            var t = Object(a.useState)([])
                , c = Object(r.a)(t, 2)
                , s = c[0]
                , n = c[1]
                , o = Object(a.useState)("")
                , l = Object(r.a)(o, 2)
                , u = l[0]
                , b = l[1]
                , p = Object(a.useState)("")
                , O = Object(r.a)(p, 2)
                , m = O[0]
                , v = O[1]
                , x = Object(a.useState)("")
                , f = Object(r.a)(x, 2)
                , g = f[0]
                , y = f[1]
                , N = Object(a.useState)("")
                , _ = Object(r.a)(N, 2)
                , S = _[0]
                , k = _[1]
                , C = Object(a.useState)(!1)
                , E = Object(r.a)(C, 2)
                , A = E[0]
                , I = E[1]
                , P = Object(a.useState)("")
                , T = Object(r.a)(P, 2)
                , U = T[0]
                , L = T[1]
                , M = Object(a.useState)([])
                , W = Object(r.a)(M, 2)
                , V = W[0]
                , J = W[1]
                , Y = Object(a.useState)("")
                , q = Object(r.a)(Y, 2)
                , G = q[0]
                , z = q[1]
                , K = Object(a.useState)([])
                , X = Object(r.a)(K, 2)
                , Z = X[0]
                , $ = X[1]
                , ee = Object(a.useState)([])
                , te = Object(r.a)(ee, 2)
                , ce = te[0]
                , ae = te[1]
                , se = Object(a.useState)([])
                , ne = Object(r.a)(se, 2)
                , re = ne[0]
                , ie = ne[1]
                , oe = Object(a.useState)(!1)
                , le = Object(r.a)(oe, 2)
                , je = le[0]
                , de = le[1]
                , ue = Object(a.useState)(!1)
                , be = Object(r.a)(ue, 2)
                , pe = be[0]
                , he = be[1]
                , Oe = Object(a.useState)(!1)
                , me = Object(r.a)(Oe, 2)
                , ve = me[0]
                , xe = me[1]
                , fe = Object(a.useState)(!0)
                , ge = Object(r.a)(fe, 2)
                , we = ge[0]
                , ye = ge[1]
                , Ne = Object(a.useState)(!1)
                , _e = Object(r.a)(Ne, 2)
                , Se = _e[0]
                , ke = _e[1]
                , Ce = Object(a.useState)(!1)
                , Ee = Object(r.a)(Ce, 2)
                , Ae = Ee[0]
                , De = Ee[1]
                , Be = "1dbf27409e387afe9abadb77b2745ddd"
                , Ie = e.match.params.id;
            Object(a.useEffect)((function() {
                    (function() {
                            var e = Object(d.a)(j.a.mark((function e() {
                                    var t, c, a, s, r, i, o, l, d;
                                    return j.a.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            fetch("https://api.themoviedb.org/3/tv/".concat(Ie, "?api_key=").concat(Be, "&append_to_response=videos,images,credits,content_ratings"));
                                                    case 2:
                                                        return t = e.sent,
                                                            e.next = 5,
                                                            t.json();
                                                    case 5:
                                                        c = e.sent,
                                                            n(c),
                                                            v(c.name),
                                                            y(c.name),
                                                        0 !== c.images.length && 0 !== c.images.logos.length || I(!0),
                                                            c.images.logos.map((function(e) {
                                                                    return "en" === e.iso_639_1 && (I(!1),
                                                                        k(e.file_path)),
                                                                        e
                                                                }
                                                            )),
                                                            b(c.first_air_date.substr(0, c.first_air_date.indexOf("-"))),
                                                            c.genres.map((function(e) {
                                                                    return $((function(t) {
                                                                            return [].concat(Object(w.a)(t), [e.name])
                                                                        }
                                                                    )),
                                                                        e
                                                                }
                                                            )),
                                                            0 === c.videos.results.length ? he(!0) : (a = c.videos.results[0].key,
                                                                he(!1),
                                                                ae(a)),
                                                            0 === c.videos.results.length ? de(!0) : (de(!1),
                                                                ie(c.videos.results)),
                                                            c.content_ratings.results.map((function(e) {
                                                                    return "US" === e.iso_3166_1 && z(e.rating),
                                                                        e
                                                                }
                                                            )),
                                                            s = [],
                                                            r = c.created_by,
                                                            i = 0;
                                                    case 19:
                                                        if (!(i < 6)) {
                                                            e.next = 28;
                                                            break
                                                        }
                                                        if (void 0 !== r[i]) {
                                                            e.next = 24;
                                                            break
                                                        }
                                                        return e.abrupt("break", 28);
                                                    case 24:
                                                        s.push(r[i].name);
                                                    case 25:
                                                        i++,
                                                            e.next = 19;
                                                        break;
                                                    case 28:
                                                        s.length > 0 && L(s),
                                                            o = [],
                                                            l = c.credits.cast,
                                                            d = 0;
                                                    case 32:
                                                        if (!(d < 6)) {
                                                            e.next = 41;
                                                            break
                                                        }
                                                        if (void 0 !== l[d]) {
                                                            e.next = 37;
                                                            break
                                                        }
                                                        return e.abrupt("break", 41);
                                                    case 37:
                                                        o.push(l[d].name);
                                                    case 38:
                                                        d++,
                                                            e.next = 32;
                                                        break;
                                                    case 41:
                                                        o.length > 0 && J(o);
                                                    case 42:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e)
                                }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }
                    )()()
                }
            ), [Ie, Be]);
            var Fe = function() {
                xe(!0)
            };
            return Object(h.jsx)("div", {
                className: "resultPage",
                children: Object(h.jsxs)("div", {
                    className: "resultBackground",
                    children: [s.backdrop_path && Object(h.jsx)("img", {
                        className: "posterBackground",
                        src: s.backdrop_path ? "https://image.tmdb.org/t/p/original".concat(s.backdrop_path) : "https://i1.wp.com/www.africanflair.com/wp-content/uploads/2015/10/pix-horizontal-placeholder.jpg?w=1920&ssl=1",
                        alt: g
                    }), Object(h.jsxs)("div", {
                        className: "resultInfo",
                        children: [A ? Object(h.jsxs)("h1", {
                            children: [" ", m, " "]
                        }) : Object(h.jsx)("img", {
                            className: "resultLogo",
                            src: "https://image.tmdb.org/t/p/w500".concat(S),
                            alt: S
                        }), Object(h.jsxs)("div", {
                            className: "generalInfo",
                            children: [G ? "".concat(G, " \u2022 ") : "", " ", u, " ", Z.length > 0 ? "\u2022 ".concat(Z.join(", ")) : ""]
                        }), Object(h.jsxs)("div", {
                            className: "actions",
                            children: [Object(h.jsxs)("button", {
                                className: "play",
                                onClick: s.homepage ? function() {
                                        return window.open(s.homepage, "_blank")
                                    }
                                    : Fe,
                                children: [Object(h.jsx)(D.b, {}), Object(h.jsx)("p", {
                                    children: "Play"
                                })]
                            }), pe ? Object(h.jsx)("button", {
                                className: "play trailer trailerError",
                                children: Object(h.jsx)("p", {
                                    children: "No Trailer"
                                })
                            }) : Object(h.jsxs)("button", {
                                className: "play trailer",
                                onClick: Fe,
                                children: [Object(h.jsx)(D.b, {}), Object(h.jsx)("p", {
                                    children: "Trailer"
                                })]
                            }), Object(h.jsx)(i.b, {
                                to: "/watchlist",
                                className: "circleButton",
                                children: Object(h.jsx)(D.c, {})
                            }), Object(h.jsx)(i.b, {
                                to: "/login",
                                className: "circleButton",
                                children: Object(h.jsx)(B.a, {})
                            })]
                        }), Object(h.jsxs)("div", {
                            className: "overview",
                            children: [Object(h.jsx)("h5", {
                                children: s.overview ? s.overview.split(".")[0] + "." : "No summary available."
                            }), Object(h.jsx)(F.a, {
                                channel: "youtube",
                                autoplay: !0,
                                isOpen: ve,
                                videoId: ce,
                                onClose: function() {
                                    return xe(!1)
                                }
                            })]
                        }), Object(h.jsxs)("nav", {
                            className: "subNav",
                            children: [Object(h.jsx)("div", {
                                className: "subNavSection ".concat(we ? "active" : "", " "),
                                children: Object(h.jsx)("button", {
                                    onClick: function() {
                                        ye(!0),
                                            ke(!1),
                                            De(!1)
                                    },
                                    children: "Suggested"
                                })
                            }), Object(h.jsx)("div", {
                                className: "subNavSection ".concat(Se ? "active" : "", " "),
                                children: Object(h.jsx)("button", {
                                    onClick: function() {
                                        ye(!1),
                                            ke(!0),
                                            De(!1)
                                    },
                                    children: "Extras"
                                })
                            }), Object(h.jsx)("div", {
                                className: "subNavSection ".concat(Ae ? "active" : "", " "),
                                children: Object(h.jsx)("button", {
                                    onClick: function() {
                                        ye(!1),
                                            ke(!1),
                                            De(!0)
                                    },
                                    children: "Details"
                                })
                            })]
                        }), Object(h.jsxs)("div", {
                            className: "detailsWrapper",
                            children: [we && Object(h.jsx)(Q, {
                                name: m,
                                id: Ie
                            }), Se && Object(h.jsx)(R, {
                                extras: re,
                                noExtras: je
                            }), Ae && Object(h.jsx)(H, {
                                overview: s.overview,
                                name: m,
                                date: u,
                                genres: Z,
                                rating: G,
                                creator: U,
                                cast: V
                            })]
                        })]
                    })]
                })
            })
        }
            , Z = (c(99),
                function() {
                    return Object(h.jsxs)("div", {
                        className: "noMatch",
                        children: [Object(h.jsx)("div", {
                            className: "overlay"
                        }), Object(h.jsxs)("div", {
                            className: "errorMessage",
                            children: [Object(h.jsx)("h1", {
                                children: "The page you were looking for cannot be found."
                            }), Object(h.jsx)("h2", {
                                children: "Please go to the Disney++ home page by clicking the button below"
                            }), Object(h.jsx)(i.b, {
                                to: "/",
                                children: Object(h.jsx)("button", {
                                    children: "Disney++ Home"
                                })
                            })]
                        })]
                    })
                }
        )
            , $ = function() {
            var e = Object(a.useState)(null)
                , t = Object(r.a)(e, 2)
                , c = t[0]
                , s = t[1]
                , n = _.auth.user();
            Object(a.useEffect)((function() {
                    s(_.auth.session()),
                        _.auth.onAuthStateChange((function(e, t) {
                                s(t)
                            }
                        ))
                }
            ), []),
                window.onscroll = function() {
                    l()
                }
            ;
            var l = function() {
                return window.pageYOffset > 50 ? document.getElementById("nav").style.background = "black" : document.getElementById("nav").style.background = ""
            };
            return Object(h.jsx)(i.a, {
                children: Object(h.jsxs)("div", {
                    children: [Object(h.jsxs)("nav", {
                        className: "nav",
                        id: "nav",
                        children: [Object(h.jsx)(i.b, {
                            to: "/",
                            className: "logo",
                            children: Object(h.jsx)("img", {
                                className: "logoImg",
                                src: "/dpp.png",
                                alt: "logo"
                            })
                        }), Object(h.jsxs)("ul", {
                            className: "menu",
                            children: [Object(h.jsxs)("li", {
                                children: [Object(h.jsx)(y.c, {}), Object(h.jsx)(i.b, {
                                    to: "/",
                                    children: Object(h.jsx)("span", {
                                        children: "Home"
                                    })
                                })]
                            }), Object(h.jsxs)("li", {
                                children: [Object(h.jsx)(y.f, {}), Object(h.jsx)(i.b, {
                                    to: "/search",
                                    children: Object(h.jsx)("span", {
                                        children: "Search"
                                    })
                                })]
                            }), Object(h.jsxs)("li", {
                                children: [Object(h.jsx)(y.d, {}), Object(h.jsx)(i.b, {
                                    to: "/watchlist",
                                    children: Object(h.jsx)("span", {
                                        children: "Watchlist"
                                    })
                                })]
                            }), Object(h.jsxs)("li", {
                                children: [Object(h.jsx)(y.g, {}), Object(h.jsx)(i.b, {
                                    to: "/originals",
                                    children: Object(h.jsx)("span", {
                                        children: "Originals"
                                    })
                                })]
                            }), Object(h.jsxs)("li", {
                                children: [Object(h.jsx)(y.h, {}), Object(h.jsx)(i.b, {
                                    to: "/movies",
                                    children: Object(h.jsx)("span", {
                                        children: "Movies"
                                    })
                                })]
                            }), Object(h.jsxs)("li", {
                                children: [Object(h.jsx)(y.e, {}), Object(h.jsx)(i.b, {
                                    to: "/series",
                                    children: Object(h.jsx)("span", {
                                        children: "Series"
                                    })
                                })]
                            })]
                        }), Object(h.jsxs)(i.b, {
                            to: "/login",
                            className: "login",
                            children: [Object(h.jsx)("p", {
                                children: c ? n.email : "Log In"
                            }), Object(h.jsx)(y.a, {})]
                        })]
                    }), Object(h.jsxs)(o.c, {
                        children: [Object(h.jsx)(o.a, {
                            path: "/search",
                            children: Object(h.jsx)(g, {})
                        }), Object(h.jsx)(o.a, {
                            path: "/watchlist",
                            children: Object(h.jsx)(S, {})
                        }), Object(h.jsx)(o.a, {
                            path: "/originals",
                            children: Object(h.jsx)(C, {})
                        }), Object(h.jsx)(o.a, {
                            path: "/movies",
                            children: Object(h.jsx)(E, {})
                        }), Object(h.jsx)(o.a, {
                            path: "/series",
                            children: Object(h.jsx)(A, {})
                        }), Object(h.jsx)(o.a, {
                            path: "/login",
                            children: Object(h.jsx)(V, {})
                        }), Object(h.jsx)(o.a, {
                            path: "/movie/:id",
                            component: L
                        }), Object(h.jsx)(o.a, {
                            path: "/show/:id",
                            component: X
                        }), Object(h.jsx)(o.a, {
                            path: "/brand/disney",
                            component: J
                        }), Object(h.jsx)(o.a, {
                            path: "/brand/pixar",
                            component: Y
                        }), Object(h.jsx)(o.a, {
                            path: "/brand/marvel",
                            component: q
                        }), Object(h.jsx)(o.a, {
                            path: "/brand/star-wars",
                            component: G
                        }), Object(h.jsx)(o.a, {
                            path: "/brand/nat-geo",
                            component: z
                        }), Object(h.jsx)(o.a, {
                            exact: !0,
                            path: "/",
                            children: Object(h.jsx)(x, {})
                        }), Object(h.jsx)(o.a, {
                            path: "*",
                            component: Z
                        })]
                    })]
                })
            })
        }
            , ee = (c(100),
                function() {
                    return Object(h.jsxs)("div", {
                        className: "footer",
                        children: [Object(h.jsx)("a", {
                            href: "/",
                            className: "footerLogo",
                            children: Object(h.jsx)("img", {
                                src: "/dpp.png",
                                alt: "logo"
                            })
                        }), Object(h.jsxs)("ul", {
                            className: "footerList",
                            children: [Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://www.disneyplus.com/legal/privacy-policy",
                                    children: "Privacy Policy"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://www.disneyplus.com/legal/subscriber-agreement",
                                    children: "Subscriber Agreement"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://www.disneyplus.com/legal/your-california-privacy-rights",
                                    children: "Your California Privacy Rights"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://www.disneyplus.com/legal/do-not-sell-my-info",
                                    children: "Do Not Sell My Info"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/",
                                    children: "Children's Online Privacy Policy"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://help.disneyplus.com/csp",
                                    children: "Help"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=f0fb467ddbb04c503c0cf158bf961982",
                                    children: "Closed Captioning"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=f0fb467ddbb04c503c0cf158bf961982",
                                    children: "Supported Devices"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://www.disneyplus.com/welcome/gift-subscription",
                                    children: "Gift Disney+"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=8d061aaadb7004903c0cf158bf9619ed",
                                    children: "About Us"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://www.disneyplus.com/welcome/partner-program",
                                    children: "Disney+ Partner Program"
                                })
                            }), Object(h.jsx)("li", {
                                className: "footerItem",
                                children: Object(h.jsx)("a", {
                                    href: "https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus",
                                    children: "Interest-based Ads"
                                })
                            })]
                        }), Object(h.jsx)("p", {
                            className: "copyright",
                            children: "\xa9 Disney. All Rights Reserved."
                        })]
                    })
                }
        )
            , te = (c(101),
                function() {
                    return Object(h.jsxs)("div", {
                        className: "App",
                        children: [Object(h.jsx)($, {}), Object(h.jsx)(ee, {})]
                    })
                }
        );
        n.a.render(Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(te, {})
        }), document.getElementById("root"))
    },
    44: function(e, t, c) {},
    45: function(e, t, c) {},
    47: function(e, t, c) {},
    68: function(e, t, c) {},
    69: function(e, t, c) {},
    70: function(e, t, c) {},
    71: function(e, t, c) {},
    72: function(e, t, c) {},
    76: function(e, t, c) {},
    77: function(e, t, c) {},
    78: function(e, t, c) {},
    79: function(e, t, c) {},
    87: function(e, t, c) {},
    88: function(e, t, c) {},
    89: function(e, t, c) {},
    90: function(e, t, c) {},
    91: function(e, t, c) {},
    92: function(e, t, c) {},
    93: function(e, t, c) {},
    94: function(e, t, c) {},
    95: function(e, t, c) {},
    96: function(e, t, c) {},
    97: function(e, t, c) {},
    98: function(e, t, c) {},
    99: function(e, t, c) {}
}, [[102, 1, 2]]]);
//# sourceMappingURL=main.65086659.chunk.js.map
