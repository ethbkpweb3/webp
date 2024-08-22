/*! For license information please see 834.57093451.chunk.js.LICENSE.txt */
(self.webpackChunkray = self.webpackChunkray || []).push([[834], {
    83375: (e,t,n)=>{
        "use strict";
        t._S = t.K = t.TP = t.wE = t.Ee = void 0;
        const r = n(87027)
          , i = n(35357)
          , s = n(43963);
        function o(e) {
            const t = new Float64Array(16);
            if (e)
                for (let n = 0; n < e.length; n++)
                    t[n] = e[n];
            return t
        }
        t.Ee = 64,
        t.wE = 64,
        t.TP = 32;
        new Uint8Array(32)[0] = 9;
        const a = o()
          , c = o([1])
          , u = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
          , h = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
          , l = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
          , p = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
          , f = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function d(e, t) {
            for (let n = 0; n < 16; n++)
                e[n] = 0 | t[n]
        }
        function g(e) {
            let t = 1;
            for (let n = 0; n < 16; n++) {
                let r = e[n] + t + 65535;
                t = Math.floor(r / 65536),
                e[n] = r - 65536 * t
            }
            e[0] += t - 1 + 37 * (t - 1)
        }
        function v(e, t, n) {
            const r = ~(n - 1);
            for (let i = 0; i < 16; i++) {
                const n = r & (e[i] ^ t[i]);
                e[i] ^= n,
                t[i] ^= n
            }
        }
        function y(e, t) {
            const n = o()
              , r = o();
            for (let i = 0; i < 16; i++)
                r[i] = t[i];
            g(r),
            g(r),
            g(r);
            for (let i = 0; i < 2; i++) {
                n[0] = r[0] - 65517;
                for (let t = 1; t < 15; t++)
                    n[t] = r[t] - 65535 - (n[t - 1] >> 16 & 1),
                    n[t - 1] &= 65535;
                n[15] = r[15] - 32767 - (n[14] >> 16 & 1);
                const e = n[15] >> 16 & 1;
                n[14] &= 65535,
                v(r, n, 1 - e)
            }
            for (let i = 0; i < 16; i++)
                e[2 * i] = 255 & r[i],
                e[2 * i + 1] = r[i] >> 8
        }
        function m(e, t) {
            let n = 0;
            for (let r = 0; r < 32; r++)
                n |= e[r] ^ t[r];
            return (1 & n - 1 >>> 8) - 1
        }
        function w(e, t) {
            const n = new Uint8Array(32)
              , r = new Uint8Array(32);
            return y(n, e),
            y(r, t),
            m(n, r)
        }
        function b(e) {
            const t = new Uint8Array(32);
            return y(t, e),
            1 & t[0]
        }
        function _(e, t, n) {
            for (let r = 0; r < 16; r++)
                e[r] = t[r] + n[r]
        }
        function E(e, t, n) {
            for (let r = 0; r < 16; r++)
                e[r] = t[r] - n[r]
        }
        function I(e, t, n) {
            let r, i, s = 0, o = 0, a = 0, c = 0, u = 0, h = 0, l = 0, p = 0, f = 0, d = 0, g = 0, v = 0, y = 0, m = 0, w = 0, b = 0, _ = 0, E = 0, I = 0, P = 0, S = 0, O = 0, R = 0, A = 0, x = 0, N = 0, T = 0, C = 0, j = 0, D = 0, L = 0, M = n[0], U = n[1], k = n[2], q = n[3], z = n[4], H = n[5], V = n[6], K = n[7], B = n[8], W = n[9], F = n[10], G = n[11], Q = n[12], J = n[13], Y = n[14], $ = n[15];
            r = t[0],
            s += r * M,
            o += r * U,
            a += r * k,
            c += r * q,
            u += r * z,
            h += r * H,
            l += r * V,
            p += r * K,
            f += r * B,
            d += r * W,
            g += r * F,
            v += r * G,
            y += r * Q,
            m += r * J,
            w += r * Y,
            b += r * $,
            r = t[1],
            o += r * M,
            a += r * U,
            c += r * k,
            u += r * q,
            h += r * z,
            l += r * H,
            p += r * V,
            f += r * K,
            d += r * B,
            g += r * W,
            v += r * F,
            y += r * G,
            m += r * Q,
            w += r * J,
            b += r * Y,
            _ += r * $,
            r = t[2],
            a += r * M,
            c += r * U,
            u += r * k,
            h += r * q,
            l += r * z,
            p += r * H,
            f += r * V,
            d += r * K,
            g += r * B,
            v += r * W,
            y += r * F,
            m += r * G,
            w += r * Q,
            b += r * J,
            _ += r * Y,
            E += r * $,
            r = t[3],
            c += r * M,
            u += r * U,
            h += r * k,
            l += r * q,
            p += r * z,
            f += r * H,
            d += r * V,
            g += r * K,
            v += r * B,
            y += r * W,
            m += r * F,
            w += r * G,
            b += r * Q,
            _ += r * J,
            E += r * Y,
            I += r * $,
            r = t[4],
            u += r * M,
            h += r * U,
            l += r * k,
            p += r * q,
            f += r * z,
            d += r * H,
            g += r * V,
            v += r * K,
            y += r * B,
            m += r * W,
            w += r * F,
            b += r * G,
            _ += r * Q,
            E += r * J,
            I += r * Y,
            P += r * $,
            r = t[5],
            h += r * M,
            l += r * U,
            p += r * k,
            f += r * q,
            d += r * z,
            g += r * H,
            v += r * V,
            y += r * K,
            m += r * B,
            w += r * W,
            b += r * F,
            _ += r * G,
            E += r * Q,
            I += r * J,
            P += r * Y,
            S += r * $,
            r = t[6],
            l += r * M,
            p += r * U,
            f += r * k,
            d += r * q,
            g += r * z,
            v += r * H,
            y += r * V,
            m += r * K,
            w += r * B,
            b += r * W,
            _ += r * F,
            E += r * G,
            I += r * Q,
            P += r * J,
            S += r * Y,
            O += r * $,
            r = t[7],
            p += r * M,
            f += r * U,
            d += r * k,
            g += r * q,
            v += r * z,
            y += r * H,
            m += r * V,
            w += r * K,
            b += r * B,
            _ += r * W,
            E += r * F,
            I += r * G,
            P += r * Q,
            S += r * J,
            O += r * Y,
            R += r * $,
            r = t[8],
            f += r * M,
            d += r * U,
            g += r * k,
            v += r * q,
            y += r * z,
            m += r * H,
            w += r * V,
            b += r * K,
            _ += r * B,
            E += r * W,
            I += r * F,
            P += r * G,
            S += r * Q,
            O += r * J,
            R += r * Y,
            A += r * $,
            r = t[9],
            d += r * M,
            g += r * U,
            v += r * k,
            y += r * q,
            m += r * z,
            w += r * H,
            b += r * V,
            _ += r * K,
            E += r * B,
            I += r * W,
            P += r * F,
            S += r * G,
            O += r * Q,
            R += r * J,
            A += r * Y,
            x += r * $,
            r = t[10],
            g += r * M,
            v += r * U,
            y += r * k,
            m += r * q,
            w += r * z,
            b += r * H,
            _ += r * V,
            E += r * K,
            I += r * B,
            P += r * W,
            S += r * F,
            O += r * G,
            R += r * Q,
            A += r * J,
            x += r * Y,
            N += r * $,
            r = t[11],
            v += r * M,
            y += r * U,
            m += r * k,
            w += r * q,
            b += r * z,
            _ += r * H,
            E += r * V,
            I += r * K,
            P += r * B,
            S += r * W,
            O += r * F,
            R += r * G,
            A += r * Q,
            x += r * J,
            N += r * Y,
            T += r * $,
            r = t[12],
            y += r * M,
            m += r * U,
            w += r * k,
            b += r * q,
            _ += r * z,
            E += r * H,
            I += r * V,
            P += r * K,
            S += r * B,
            O += r * W,
            R += r * F,
            A += r * G,
            x += r * Q,
            N += r * J,
            T += r * Y,
            C += r * $,
            r = t[13],
            m += r * M,
            w += r * U,
            b += r * k,
            _ += r * q,
            E += r * z,
            I += r * H,
            P += r * V,
            S += r * K,
            O += r * B,
            R += r * W,
            A += r * F,
            x += r * G,
            N += r * Q,
            T += r * J,
            C += r * Y,
            j += r * $,
            r = t[14],
            w += r * M,
            b += r * U,
            _ += r * k,
            E += r * q,
            I += r * z,
            P += r * H,
            S += r * V,
            O += r * K,
            R += r * B,
            A += r * W,
            x += r * F,
            N += r * G,
            T += r * Q,
            C += r * J,
            j += r * Y,
            D += r * $,
            r = t[15],
            b += r * M,
            _ += r * U,
            E += r * k,
            I += r * q,
            P += r * z,
            S += r * H,
            O += r * V,
            R += r * K,
            A += r * B,
            x += r * W,
            N += r * F,
            T += r * G,
            C += r * Q,
            j += r * J,
            D += r * Y,
            L += r * $,
            s += 38 * _,
            o += 38 * E,
            a += 38 * I,
            c += 38 * P,
            u += 38 * S,
            h += 38 * O,
            l += 38 * R,
            p += 38 * A,
            f += 38 * x,
            d += 38 * N,
            g += 38 * T,
            v += 38 * C,
            y += 38 * j,
            m += 38 * D,
            w += 38 * L,
            i = 1,
            r = s + i + 65535,
            i = Math.floor(r / 65536),
            s = r - 65536 * i,
            r = o + i + 65535,
            i = Math.floor(r / 65536),
            o = r - 65536 * i,
            r = a + i + 65535,
            i = Math.floor(r / 65536),
            a = r - 65536 * i,
            r = c + i + 65535,
            i = Math.floor(r / 65536),
            c = r - 65536 * i,
            r = u + i + 65535,
            i = Math.floor(r / 65536),
            u = r - 65536 * i,
            r = h + i + 65535,
            i = Math.floor(r / 65536),
            h = r - 65536 * i,
            r = l + i + 65535,
            i = Math.floor(r / 65536),
            l = r - 65536 * i,
            r = p + i + 65535,
            i = Math.floor(r / 65536),
            p = r - 65536 * i,
            r = f + i + 65535,
            i = Math.floor(r / 65536),
            f = r - 65536 * i,
            r = d + i + 65535,
            i = Math.floor(r / 65536),
            d = r - 65536 * i,
            r = g + i + 65535,
            i = Math.floor(r / 65536),
            g = r - 65536 * i,
            r = v + i + 65535,
            i = Math.floor(r / 65536),
            v = r - 65536 * i,
            r = y + i + 65535,
            i = Math.floor(r / 65536),
            y = r - 65536 * i,
            r = m + i + 65535,
            i = Math.floor(r / 65536),
            m = r - 65536 * i,
            r = w + i + 65535,
            i = Math.floor(r / 65536),
            w = r - 65536 * i,
            r = b + i + 65535,
            i = Math.floor(r / 65536),
            b = r - 65536 * i,
            s += i - 1 + 37 * (i - 1),
            i = 1,
            r = s + i + 65535,
            i = Math.floor(r / 65536),
            s = r - 65536 * i,
            r = o + i + 65535,
            i = Math.floor(r / 65536),
            o = r - 65536 * i,
            r = a + i + 65535,
            i = Math.floor(r / 65536),
            a = r - 65536 * i,
            r = c + i + 65535,
            i = Math.floor(r / 65536),
            c = r - 65536 * i,
            r = u + i + 65535,
            i = Math.floor(r / 65536),
            u = r - 65536 * i,
            r = h + i + 65535,
            i = Math.floor(r / 65536),
            h = r - 65536 * i,
            r = l + i + 65535,
            i = Math.floor(r / 65536),
            l = r - 65536 * i,
            r = p + i + 65535,
            i = Math.floor(r / 65536),
            p = r - 65536 * i,
            r = f + i + 65535,
            i = Math.floor(r / 65536),
            f = r - 65536 * i,
            r = d + i + 65535,
            i = Math.floor(r / 65536),
            d = r - 65536 * i,
            r = g + i + 65535,
            i = Math.floor(r / 65536),
            g = r - 65536 * i,
            r = v + i + 65535,
            i = Math.floor(r / 65536),
            v = r - 65536 * i,
            r = y + i + 65535,
            i = Math.floor(r / 65536),
            y = r - 65536 * i,
            r = m + i + 65535,
            i = Math.floor(r / 65536),
            m = r - 65536 * i,
            r = w + i + 65535,
            i = Math.floor(r / 65536),
            w = r - 65536 * i,
            r = b + i + 65535,
            i = Math.floor(r / 65536),
            b = r - 65536 * i,
            s += i - 1 + 37 * (i - 1),
            e[0] = s,
            e[1] = o,
            e[2] = a,
            e[3] = c,
            e[4] = u,
            e[5] = h,
            e[6] = l,
            e[7] = p,
            e[8] = f,
            e[9] = d,
            e[10] = g,
            e[11] = v,
            e[12] = y,
            e[13] = m,
            e[14] = w,
            e[15] = b
        }
        function P(e, t) {
            I(e, t, t)
        }
        function S(e, t) {
            const n = o();
            let r;
            for (r = 0; r < 16; r++)
                n[r] = t[r];
            for (r = 253; r >= 0; r--)
                P(n, n),
                2 !== r && 4 !== r && I(n, n, t);
            for (r = 0; r < 16; r++)
                e[r] = n[r]
        }
        function O(e, t) {
            const n = o()
              , r = o()
              , i = o()
              , s = o()
              , a = o()
              , c = o()
              , u = o()
              , l = o()
              , p = o();
            E(n, e[1], e[0]),
            E(p, t[1], t[0]),
            I(n, n, p),
            _(r, e[0], e[1]),
            _(p, t[0], t[1]),
            I(r, r, p),
            I(i, e[3], t[3]),
            I(i, i, h),
            I(s, e[2], t[2]),
            _(s, s, s),
            E(a, r, n),
            E(c, s, i),
            _(u, s, i),
            _(l, r, n),
            I(e[0], a, c),
            I(e[1], l, u),
            I(e[2], u, c),
            I(e[3], a, l)
        }
        function R(e, t, n) {
            for (let r = 0; r < 4; r++)
                v(e[r], t[r], n)
        }
        function A(e, t) {
            const n = o()
              , r = o()
              , i = o();
            S(i, t[2]),
            I(n, t[0], i),
            I(r, t[1], i),
            y(e, r),
            e[31] ^= b(n) << 7
        }
        function x(e, t, n) {
            d(e[0], a),
            d(e[1], c),
            d(e[2], c),
            d(e[3], a);
            for (let r = 255; r >= 0; --r) {
                const i = n[r / 8 | 0] >> (7 & r) & 1;
                R(e, t, i),
                O(t, e),
                O(e, e),
                R(e, t, i)
            }
        }
        function N(e, t) {
            const n = [o(), o(), o(), o()];
            d(n[0], l),
            d(n[1], p),
            d(n[2], c),
            I(n[3], l, p),
            x(e, n, t)
        }
        function T(e) {
            if (e.length !== t.TP)
                throw new Error("ed25519: seed must be ".concat(t.TP, " bytes"));
            const n = (0,
            i.hash)(e);
            n[0] &= 248,
            n[31] &= 127,
            n[31] |= 64;
            const r = new Uint8Array(32)
              , s = [o(), o(), o(), o()];
            N(s, n),
            A(r, s);
            const a = new Uint8Array(64);
            return a.set(e),
            a.set(r, 32),
            {
                publicKey: r,
                secretKey: a
            }
        }
        t.K = T;
        const C = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function j(e, t) {
            let n, r, i, s;
            for (r = 63; r >= 32; --r) {
                for (n = 0,
                i = r - 32,
                s = r - 12; i < s; ++i)
                    t[i] += n - 16 * t[r] * C[i - (r - 32)],
                    n = Math.floor((t[i] + 128) / 256),
                    t[i] -= 256 * n;
                t[i] += n,
                t[r] = 0
            }
            for (n = 0,
            i = 0; i < 32; i++)
                t[i] += n - (t[31] >> 4) * C[i],
                n = t[i] >> 8,
                t[i] &= 255;
            for (i = 0; i < 32; i++)
                t[i] -= n * C[i];
            for (r = 0; r < 32; r++)
                t[r + 1] += t[r] >> 8,
                e[r] = 255 & t[r]
        }
        function D(e) {
            const t = new Float64Array(64);
            for (let n = 0; n < 64; n++)
                t[n] = e[n];
            for (let n = 0; n < 64; n++)
                e[n] = 0;
            j(e, t)
        }
        function L(e, t) {
            const n = o()
              , r = o()
              , i = o()
              , s = o()
              , h = o()
              , l = o()
              , p = o();
            return d(e[2], c),
            function(e, t) {
                for (let n = 0; n < 16; n++)
                    e[n] = t[2 * n] + (t[2 * n + 1] << 8);
                e[15] &= 32767
            }(e[1], t),
            P(i, e[1]),
            I(s, i, u),
            E(i, i, e[2]),
            _(s, e[2], s),
            P(h, s),
            P(l, h),
            I(p, l, h),
            I(n, p, i),
            I(n, n, s),
            function(e, t) {
                const n = o();
                let r;
                for (r = 0; r < 16; r++)
                    n[r] = t[r];
                for (r = 250; r >= 0; r--)
                    P(n, n),
                    1 !== r && I(n, n, t);
                for (r = 0; r < 16; r++)
                    e[r] = n[r]
            }(n, n),
            I(n, n, i),
            I(n, n, s),
            I(n, n, s),
            I(e[0], n, s),
            P(r, e[0]),
            I(r, r, s),
            w(r, i) && I(e[0], e[0], f),
            P(r, e[0]),
            I(r, r, s),
            w(r, i) ? -1 : (b(e[0]) === t[31] >> 7 && E(e[0], a, e[0]),
            I(e[3], e[0], e[1]),
            0)
        }
        t._S = function(e, t) {
            const n = new Float64Array(64)
              , r = [o(), o(), o(), o()]
              , s = (0,
            i.hash)(e.subarray(0, 32));
            s[0] &= 248,
            s[31] &= 127,
            s[31] |= 64;
            const a = new Uint8Array(64);
            a.set(s.subarray(32), 32);
            const c = new i.SHA512;
            c.update(a.subarray(32)),
            c.update(t);
            const u = c.digest();
            c.clean(),
            D(u),
            N(r, u),
            A(a, r),
            c.reset(),
            c.update(a.subarray(0, 32)),
            c.update(e.subarray(32)),
            c.update(t);
            const h = c.digest();
            D(h);
            for (let i = 0; i < 32; i++)
                n[i] = u[i];
            for (let i = 0; i < 32; i++)
                for (let e = 0; e < 32; e++)
                    n[i + e] += h[i] * s[e];
            return j(a.subarray(32), n),
            a
        }
    }
    ,
    35357: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(5843)
          , i = n(43963);
        t.DIGEST_LENGTH = 64,
        t.BLOCK_SIZE = 128;
        var s = function() {
            function e() {
                this.digestLength = t.DIGEST_LENGTH,
                this.blockSize = t.BLOCK_SIZE,
                this._stateHi = new Int32Array(8),
                this._stateLo = new Int32Array(8),
                this._tempHi = new Int32Array(16),
                this._tempLo = new Int32Array(16),
                this._buffer = new Uint8Array(256),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this.reset()
            }
            return e.prototype._initState = function() {
                this._stateHi[0] = 1779033703,
                this._stateHi[1] = 3144134277,
                this._stateHi[2] = 1013904242,
                this._stateHi[3] = 2773480762,
                this._stateHi[4] = 1359893119,
                this._stateHi[5] = 2600822924,
                this._stateHi[6] = 528734635,
                this._stateHi[7] = 1541459225,
                this._stateLo[0] = 4089235720,
                this._stateLo[1] = 2227873595,
                this._stateLo[2] = 4271175723,
                this._stateLo[3] = 1595750129,
                this._stateLo[4] = 2917565137,
                this._stateLo[5] = 725511199,
                this._stateLo[6] = 4215389547,
                this._stateLo[7] = 327033209
            }
            ,
            e.prototype.reset = function() {
                return this._initState(),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this
            }
            ,
            e.prototype.clean = function() {
                i.wipe(this._buffer),
                i.wipe(this._tempHi),
                i.wipe(this._tempLo),
                this.reset()
            }
            ,
            e.prototype.update = function(e, n) {
                if (void 0 === n && (n = e.length),
                this._finished)
                    throw new Error("SHA512: can't update because hash was finished.");
                var r = 0;
                if (this._bytesHashed += n,
                this._bufferLength > 0) {
                    for (; this._bufferLength < t.BLOCK_SIZE && n > 0; )
                        this._buffer[this._bufferLength++] = e[r++],
                        n--;
                    this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                    this._bufferLength = 0)
                }
                for (n >= this.blockSize && (r = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, r, n),
                n %= this.blockSize); n > 0; )
                    this._buffer[this._bufferLength++] = e[r++],
                    n--;
                return this
            }
            ,
            e.prototype.finish = function(e) {
                if (!this._finished) {
                    var t = this._bytesHashed
                      , n = this._bufferLength
                      , i = t / 536870912 | 0
                      , s = t << 3
                      , o = t % 128 < 112 ? 128 : 256;
                    this._buffer[n] = 128;
                    for (var c = n + 1; c < o - 8; c++)
                        this._buffer[c] = 0;
                    r.writeUint32BE(i, this._buffer, o - 8),
                    r.writeUint32BE(s, this._buffer, o - 4),
                    a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o),
                    this._finished = !0
                }
                for (c = 0; c < this.digestLength / 8; c++)
                    r.writeUint32BE(this._stateHi[c], e, 8 * c),
                    r.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
                return this
            }
            ,
            e.prototype.digest = function() {
                var e = new Uint8Array(this.digestLength);
                return this.finish(e),
                e
            }
            ,
            e.prototype.saveState = function() {
                if (this._finished)
                    throw new Error("SHA256: cannot save finished state");
                return {
                    stateHi: new Int32Array(this._stateHi),
                    stateLo: new Int32Array(this._stateLo),
                    buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                    bufferLength: this._bufferLength,
                    bytesHashed: this._bytesHashed
                }
            }
            ,
            e.prototype.restoreState = function(e) {
                return this._stateHi.set(e.stateHi),
                this._stateLo.set(e.stateLo),
                this._bufferLength = e.bufferLength,
                e.buffer && this._buffer.set(e.buffer),
                this._bytesHashed = e.bytesHashed,
                this._finished = !1,
                this
            }
            ,
            e.prototype.cleanSavedState = function(e) {
                i.wipe(e.stateHi),
                i.wipe(e.stateLo),
                e.buffer && i.wipe(e.buffer),
                e.bufferLength = 0,
                e.bytesHashed = 0
            }
            ,
            e
        }();
        t.SHA512 = s;
        var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
        function a(e, t, n, i, s, a, c) {
            for (var u, h, l, p, f, d, g, v, y = n[0], m = n[1], w = n[2], b = n[3], _ = n[4], E = n[5], I = n[6], P = n[7], S = i[0], O = i[1], R = i[2], A = i[3], x = i[4], N = i[5], T = i[6], C = i[7]; c >= 128; ) {
                for (var j = 0; j < 16; j++) {
                    var D = 8 * j + a;
                    e[j] = r.readUint32BE(s, D),
                    t[j] = r.readUint32BE(s, D + 4)
                }
                for (j = 0; j < 80; j++) {
                    var L, M, U = y, k = m, q = w, z = b, H = _, V = E, K = I, B = S, W = O, F = R, G = A, Q = x, J = N, Y = T;
                    if (f = 65535 & (h = C),
                    d = h >>> 16,
                    g = 65535 & (u = P),
                    v = u >>> 16,
                    f += 65535 & (h = (x >>> 14 | _ << 18) ^ (x >>> 18 | _ << 14) ^ (_ >>> 9 | x << 23)),
                    d += h >>> 16,
                    g += 65535 & (u = (_ >>> 14 | x << 18) ^ (_ >>> 18 | x << 14) ^ (x >>> 9 | _ << 23)),
                    v += u >>> 16,
                    f += 65535 & (h = x & N ^ ~x & T),
                    d += h >>> 16,
                    g += 65535 & (u = _ & E ^ ~_ & I),
                    v += u >>> 16,
                    u = o[2 * j],
                    f += 65535 & (h = o[2 * j + 1]),
                    d += h >>> 16,
                    g += 65535 & u,
                    v += u >>> 16,
                    u = e[j % 16],
                    d += (h = t[j % 16]) >>> 16,
                    g += 65535 & u,
                    v += u >>> 16,
                    g += (d += (f += 65535 & h) >>> 16) >>> 16,
                    f = 65535 & (h = p = 65535 & f | d << 16),
                    d = h >>> 16,
                    g = 65535 & (u = l = 65535 & g | (v += g >>> 16) << 16),
                    v = u >>> 16,
                    f += 65535 & (h = (S >>> 28 | y << 4) ^ (y >>> 2 | S << 30) ^ (y >>> 7 | S << 25)),
                    d += h >>> 16,
                    g += 65535 & (u = (y >>> 28 | S << 4) ^ (S >>> 2 | y << 30) ^ (S >>> 7 | y << 25)),
                    v += u >>> 16,
                    d += (h = S & O ^ S & R ^ O & R) >>> 16,
                    g += 65535 & (u = y & m ^ y & w ^ m & w),
                    v += u >>> 16,
                    L = 65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16) | (v += g >>> 16) << 16,
                    M = 65535 & f | d << 16,
                    f = 65535 & (h = G),
                    d = h >>> 16,
                    g = 65535 & (u = z),
                    v = u >>> 16,
                    d += (h = p) >>> 16,
                    g += 65535 & (u = l),
                    v += u >>> 16,
                    m = U,
                    w = k,
                    b = q,
                    _ = z = 65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16) | (v += g >>> 16) << 16,
                    E = H,
                    I = V,
                    P = K,
                    y = L,
                    O = B,
                    R = W,
                    A = F,
                    x = G = 65535 & f | d << 16,
                    N = Q,
                    T = J,
                    C = Y,
                    S = M,
                    j % 16 === 15)
                        for (D = 0; D < 16; D++)
                            u = e[D],
                            f = 65535 & (h = t[D]),
                            d = h >>> 16,
                            g = 65535 & u,
                            v = u >>> 16,
                            u = e[(D + 9) % 16],
                            f += 65535 & (h = t[(D + 9) % 16]),
                            d += h >>> 16,
                            g += 65535 & u,
                            v += u >>> 16,
                            l = e[(D + 1) % 16],
                            f += 65535 & (h = ((p = t[(D + 1) % 16]) >>> 1 | l << 31) ^ (p >>> 8 | l << 24) ^ (p >>> 7 | l << 25)),
                            d += h >>> 16,
                            g += 65535 & (u = (l >>> 1 | p << 31) ^ (l >>> 8 | p << 24) ^ l >>> 7),
                            v += u >>> 16,
                            l = e[(D + 14) % 16],
                            d += (h = ((p = t[(D + 14) % 16]) >>> 19 | l << 13) ^ (l >>> 29 | p << 3) ^ (p >>> 6 | l << 26)) >>> 16,
                            g += 65535 & (u = (l >>> 19 | p << 13) ^ (p >>> 29 | l << 3) ^ l >>> 6),
                            v += u >>> 16,
                            v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                            e[D] = 65535 & g | v << 16,
                            t[D] = 65535 & f | d << 16
                }
                f = 65535 & (h = S),
                d = h >>> 16,
                g = 65535 & (u = y),
                v = u >>> 16,
                u = n[0],
                d += (h = i[0]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                n[0] = y = 65535 & g | v << 16,
                i[0] = S = 65535 & f | d << 16,
                f = 65535 & (h = O),
                d = h >>> 16,
                g = 65535 & (u = m),
                v = u >>> 16,
                u = n[1],
                d += (h = i[1]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                n[1] = m = 65535 & g | v << 16,
                i[1] = O = 65535 & f | d << 16,
                f = 65535 & (h = R),
                d = h >>> 16,
                g = 65535 & (u = w),
                v = u >>> 16,
                u = n[2],
                d += (h = i[2]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                n[2] = w = 65535 & g | v << 16,
                i[2] = R = 65535 & f | d << 16,
                f = 65535 & (h = A),
                d = h >>> 16,
                g = 65535 & (u = b),
                v = u >>> 16,
                u = n[3],
                d += (h = i[3]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                n[3] = b = 65535 & g | v << 16,
                i[3] = A = 65535 & f | d << 16,
                f = 65535 & (h = x),
                d = h >>> 16,
                g = 65535 & (u = _),
                v = u >>> 16,
                u = n[4],
                d += (h = i[4]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                n[4] = _ = 65535 & g | v << 16,
                i[4] = x = 65535 & f | d << 16,
                f = 65535 & (h = N),
                d = h >>> 16,
                g = 65535 & (u = E),
                v = u >>> 16,
                u = n[5],
                d += (h = i[5]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                n[5] = E = 65535 & g | v << 16,
                i[5] = N = 65535 & f | d << 16,
                f = 65535 & (h = T),
                d = h >>> 16,
                g = 65535 & (u = I),
                v = u >>> 16,
                u = n[6],
                d += (h = i[6]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                n[6] = I = 65535 & g | v << 16,
                i[6] = T = 65535 & f | d << 16,
                f = 65535 & (h = C),
                d = h >>> 16,
                g = 65535 & (u = P),
                v = u >>> 16,
                u = n[7],
                d += (h = i[7]) >>> 16,
                g += 65535 & u,
                v += u >>> 16,
                v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16,
                n[7] = P = 65535 & g | v << 16,
                i[7] = C = 65535 & f | d << 16,
                a += 128,
                c -= 128
            }
            return a
        }
        t.hash = function(e) {
            var t = new s;
            t.update(e);
            var n = t.digest();
            return t.clean(),
            n
        }
    }
    ,
    98014: (e,t,n)=>{
        "use strict";
        function r() {
            return (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) || (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) || {}
        }
        function i() {
            const e = r();
            return e.subtle || e.webkitSubtle
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0,
        t.getBrowerCrypto = r,
        t.getSubtleCrypto = i,
        t.isBrowserCryptoAvailable = function() {
            return !!r() && !!i()
        }
    }
    ,
    60768: (e,t)=>{
        "use strict";
        function n() {
            return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
        }
        function r() {
            return "undefined" !== typeof process && "undefined" !== typeof process.versions && "undefined" !== typeof process.versions.node
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isBrowser = t.isNode = t.isReactNative = void 0,
        t.isReactNative = n,
        t.isNode = r,
        t.isBrowser = function() {
            return !n() && !r()
        }
    }
    ,
    8855: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(36831);
        r.__exportStar(n(98014), t),
        r.__exportStar(n(60768), t)
    }
    ,
    36831: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            __assign: ()=>s,
            __asyncDelegator: ()=>b,
            __asyncGenerator: ()=>w,
            __asyncValues: ()=>_,
            __await: ()=>m,
            __awaiter: ()=>h,
            __classPrivateFieldGet: ()=>S,
            __classPrivateFieldSet: ()=>O,
            __createBinding: ()=>p,
            __decorate: ()=>a,
            __exportStar: ()=>f,
            __extends: ()=>i,
            __generator: ()=>l,
            __importDefault: ()=>P,
            __importStar: ()=>I,
            __makeTemplateObject: ()=>E,
            __metadata: ()=>u,
            __param: ()=>c,
            __read: ()=>g,
            __rest: ()=>o,
            __spread: ()=>v,
            __spreadArrays: ()=>y,
            __values: ()=>d
        });
        var r = function(e, t) {
            return r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ,
            r(e, t)
        };
        function i(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        var s = function() {
            return s = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ,
            s.apply(this, arguments)
        };
        function o(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
            }
            return n
        }
        function a(e, t, n, r) {
            var i, s = arguments.length, o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                o = Reflect.decorate(e, t, n, r);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
            return s > 3 && o && Object.defineProperty(t, n, o),
            o
        }
        function c(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        }
        function u(e, t) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
        function h(e, t, n, r) {
            return new (n || (n = Promise))((function(i, s) {
                function o(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        s(t)
                    }
                }
                function a(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        s(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, a)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
        function l(e, t) {
            var n, r, i, s, o = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, s[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (s = [2 & s[0], i.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    r = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < i[1]) {
                                        o.label = i[1],
                                        i = s;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    i[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (a) {
                                s = [6, a],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        function p(e, t, n, r) {
            void 0 === r && (r = n),
            e[r] = t[n]
        }
        function f(e, t) {
            for (var n in e)
                "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
        }
        function d(e) {
            var t = "function" === typeof Symbol && Symbol.iterator
              , n = t && e[t]
              , r = 0;
            if (n)
                return n.call(e);
            if (e && "number" === typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function g(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, i, s = n.call(e), o = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = s.next()).done; )
                    o.push(r.value)
            } catch (a) {
                i = {
                    error: a
                }
            } finally {
                try {
                    r && !r.done && (n = s.return) && n.call(s)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return o
        }
        function v() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(g(arguments[t]));
            return e
        }
        function y() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length;
            var r = Array(e)
              , i = 0;
            for (t = 0; t < n; t++)
                for (var s = arguments[t], o = 0, a = s.length; o < a; o++,
                i++)
                    r[i] = s[o];
            return r
        }
        function m(e) {
            return this instanceof m ? (this.v = e,
            this) : new m(e)
        }
        function w(e, t, n) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, i = n.apply(e, t || []), s = [];
            return r = {},
            o("next"),
            o("throw"),
            o("return"),
            r[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            r;
            function o(e) {
                i[e] && (r[e] = function(t) {
                    return new Promise((function(n, r) {
                        s.push([e, t, n, r]) > 1 || a(e, t)
                    }
                    ))
                }
                )
            }
            function a(e, t) {
                try {
                    (n = i[e](t)).value instanceof m ? Promise.resolve(n.value.v).then(c, u) : h(s[0][2], n)
                } catch (r) {
                    h(s[0][3], r)
                }
                var n
            }
            function c(e) {
                a("next", e)
            }
            function u(e) {
                a("throw", e)
            }
            function h(e, t) {
                e(t),
                s.shift(),
                s.length && a(s[0][0], s[0][1])
            }
        }
        function b(e) {
            var t, n;
            return t = {},
            r("next"),
            r("throw", (function(e) {
                throw e
            }
            )),
            r("return"),
            t[Symbol.iterator] = function() {
                return this
            }
            ,
            t;
            function r(r, i) {
                t[r] = e[r] ? function(t) {
                    return (n = !n) ? {
                        value: m(e[r](t)),
                        done: "return" === r
                    } : i ? i(t) : t
                }
                : i
            }
        }
        function _(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, n = e[Symbol.asyncIterator];
            return n ? n.call(e) : (e = d(e),
            t = {},
            r("next"),
            r("throw"),
            r("return"),
            t[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            t);
            function r(n) {
                t[n] = e[n] && function(t) {
                    return new Promise((function(r, i) {
                        (function(e, t, n, r) {
                            Promise.resolve(r).then((function(t) {
                                e({
                                    value: t,
                                    done: n
                                })
                            }
                            ), t)
                        }
                        )(r, i, (t = e[n](t)).done, t.value)
                    }
                    ))
                }
            }
        }
        function E(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t,
            e
        }
        function I(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }
        function P(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function S(e, t) {
            if (!t.has(e))
                throw new TypeError("attempted to get private field on non-instance");
            return t.get(e)
        }
        function O(e, t, n) {
            if (!t.has(e))
                throw new TypeError("attempted to set private field on non-instance");
            return t.set(e, n),
            n
        }
    }
    ,
    834: (e,t,n)=>{
        "use strict";
        n.d(t, {
            EthereumProvider: ()=>_c
        });
        var r = n(63066)
          , i = n.n(r)
          , s = n(31499)
          , o = n(34735)
          , a = n(87027)
          , c = n(86939)
          , u = n(4985)
          , h = n(73528)
          , l = n(1391)
          , p = n(48215)
          , f = n(18578)
          , d = n(73308)
          , g = n(70683);
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
        Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
        const v = {
            INVALID_METHOD: {
                message: "Invalid method.",
                code: 1001
            },
            INVALID_EVENT: {
                message: "Invalid event.",
                code: 1002
            },
            INVALID_UPDATE_REQUEST: {
                message: "Invalid update request.",
                code: 1003
            },
            INVALID_EXTEND_REQUEST: {
                message: "Invalid extend request.",
                code: 1004
            },
            INVALID_SESSION_SETTLE_REQUEST: {
                message: "Invalid session settle request.",
                code: 1005
            },
            UNAUTHORIZED_METHOD: {
                message: "Unauthorized method.",
                code: 3001
            },
            UNAUTHORIZED_EVENT: {
                message: "Unauthorized event.",
                code: 3002
            },
            UNAUTHORIZED_UPDATE_REQUEST: {
                message: "Unauthorized update request.",
                code: 3003
            },
            UNAUTHORIZED_EXTEND_REQUEST: {
                message: "Unauthorized extend request.",
                code: 3004
            },
            USER_REJECTED: {
                message: "User rejected.",
                code: 5e3
            },
            USER_REJECTED_CHAINS: {
                message: "User rejected chains.",
                code: 5001
            },
            USER_REJECTED_METHODS: {
                message: "User rejected methods.",
                code: 5002
            },
            USER_REJECTED_EVENTS: {
                message: "User rejected events.",
                code: 5003
            },
            UNSUPPORTED_CHAINS: {
                message: "Unsupported chains.",
                code: 5100
            },
            UNSUPPORTED_METHODS: {
                message: "Unsupported methods.",
                code: 5101
            },
            UNSUPPORTED_EVENTS: {
                message: "Unsupported events.",
                code: 5102
            },
            UNSUPPORTED_ACCOUNTS: {
                message: "Unsupported accounts.",
                code: 5103
            },
            UNSUPPORTED_NAMESPACE_KEY: {
                message: "Unsupported namespace key.",
                code: 5104
            },
            USER_DISCONNECTED: {
                message: "User disconnected.",
                code: 6e3
            },
            SESSION_SETTLEMENT_FAILED: {
                message: "Session settlement failed.",
                code: 7e3
            },
            WC_METHOD_UNSUPPORTED: {
                message: "Unsupported wc_ method.",
                code: 10001
            }
        };
        function y(e, t) {
            const {message: n, code: r} = v[e];
            return {
                message: t ? "".concat(n, " ").concat(t) : n,
                code: r
            }
        }
        function m(e, t) {
            return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        }
        const w = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
          , b = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
          , _ = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
        function E(e, t) {
            if (!("__proto__" === e || "constructor" === e && t && "object" === typeof t && "prototype"in t))
                return t;
            !function(e) {
                console.warn('[destr] Dropping "'.concat(e, '" key to prevent prototype pollution.'))
            }(e)
        }
        function I(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ("string" !== typeof e)
                return e;
            const n = e.trim();
            if ('"' === e[0] && e.endsWith('"') && !e.includes("\\"))
                return n.slice(1, -1);
            if (n.length <= 9) {
                const e = n.toLowerCase();
                if ("true" === e)
                    return !0;
                if ("false" === e)
                    return !1;
                if ("undefined" === e)
                    return;
                if ("null" === e)
                    return null;
                if ("nan" === e)
                    return Number.NaN;
                if ("infinity" === e)
                    return Number.POSITIVE_INFINITY;
                if ("-infinity" === e)
                    return Number.NEGATIVE_INFINITY
            }
            if (!_.test(e)) {
                if (t.strict)
                    throw new SyntaxError("[destr] Invalid JSON");
                return e
            }
            try {
                if (w.test(e) || b.test(e)) {
                    if (t.strict)
                        throw new Error("[destr] Possible prototype pollution");
                    return JSON.parse(e, E)
                }
                return JSON.parse(e)
            } catch (r) {
                if (t.strict)
                    throw r;
                return e
            }
        }
        function P(e) {
            try {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return (i = e(...n)) && "function" === typeof i.then ? i : Promise.resolve(i)
            } catch (s) {
                return Promise.reject(s)
            }
            var i
        }
        function S(e) {
            if (function(e) {
                const t = typeof e;
                return null === e || "object" !== t && "function" !== t
            }(e))
                return String(e);
            if (function(e) {
                const t = Object.getPrototypeOf(e);
                return !t || t.isPrototypeOf(Object)
            }(e) || Array.isArray(e))
                return JSON.stringify(e);
            if ("function" === typeof e.toJSON)
                return S(e.toJSON());
            throw new Error("[unstorage] Cannot stringify value!")
        }
        function O() {
            if (void 0 === typeof Buffer)
                throw new TypeError("[unstorage] Buffer is not supported!")
        }
        const R = "base64:";
        function A(e) {
            return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
        }
        function x() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return A(t.join(":"))
        }
        function N(e) {
            return (e = A(e)) ? e + ":" : ""
        }
        const T = ()=>{
            const e = new Map;
            return {
                name: "memory",
                options: {},
                hasItem: t=>e.has(t),
                getItem(t) {
                    var n;
                    return null !== (n = e.get(t)) && void 0 !== n ? n : null
                },
                getItemRaw(t) {
                    var n;
                    return null !== (n = e.get(t)) && void 0 !== n ? n : null
                },
                setItem(t, n) {
                    e.set(t, n)
                },
                setItemRaw(t, n) {
                    e.set(t, n)
                },
                removeItem(t) {
                    e.delete(t)
                },
                getKeys: ()=>Array.from(e.keys()),
                clear() {
                    e.clear()
                },
                dispose() {
                    e.clear()
                }
            }
        }
        ;
        function C() {
            const e = {
                mounts: {
                    "": (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).driver || T()
                },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {}
            }
              , t = t=>{
                for (const n of e.mountpoints)
                    if (t.startsWith(n))
                        return {
                            base: n,
                            relativeKey: t.slice(n.length),
                            driver: e.mounts[n]
                        };
                return {
                    base: "",
                    relativeKey: t,
                    driver: e.mounts[""]
                }
            }
              , n = (t,n)=>e.mountpoints.filter((e=>e.startsWith(t) || n && t.startsWith(e))).map((n=>({
                relativeBase: t.length > n.length ? t.slice(n.length) : void 0,
                mountpoint: n,
                driver: e.mounts[n]
            })))
              , r = (t,n)=>{
                if (e.watching) {
                    n = A(n);
                    for (const r of e.watchListeners)
                        r(t, n)
                }
            }
              , i = async()=>{
                if (e.watching) {
                    for (const t in e.unwatch)
                        await e.unwatch[t]();
                    e.unwatch = {},
                    e.watching = !1
                }
            }
              , s = (e,n,r)=>{
                const i = new Map
                  , s = e=>{
                    let t = i.get(e.base);
                    return t || (t = {
                        driver: e.driver,
                        base: e.base,
                        items: []
                    },
                    i.set(e.base, t)),
                    t
                }
                ;
                for (const o of e) {
                    const e = "string" === typeof o
                      , r = A(e ? o : o.key)
                      , i = e ? void 0 : o.value
                      , a = e || !o.options ? n : {
                        ...n,
                        ...o.options
                    }
                      , c = t(r);
                    s(c).items.push({
                        key: r,
                        value: i,
                        relativeKey: c.relativeKey,
                        options: a
                    })
                }
                return Promise.all([...i.values()].map((e=>r(e)))).then((e=>e.flat()))
            }
              , o = {
                hasItem(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e = A(e);
                    const {relativeKey: r, driver: i} = t(e);
                    return P(i.hasItem, r, n)
                },
                getItem(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e = A(e);
                    const {relativeKey: r, driver: i} = t(e);
                    return P(i.getItem, r, n).then((e=>I(e)))
                },
                getItems: (e,t)=>s(e, t, (e=>e.driver.getItems ? P(e.driver.getItems, e.items.map((e=>({
                    key: e.relativeKey,
                    options: e.options
                }))), t).then((t=>t.map((t=>({
                    key: x(e.base, t.key),
                    value: I(t.value)
                }))))) : Promise.all(e.items.map((t=>P(e.driver.getItem, t.relativeKey, t.options).then((e=>({
                    key: t.key,
                    value: I(e)
                })))))))),
                getItemRaw(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e = A(e);
                    const {relativeKey: r, driver: i} = t(e);
                    return i.getItemRaw ? P(i.getItemRaw, r, n) : P(i.getItem, r, n).then((e=>function(e) {
                        return "string" !== typeof e ? e : e.startsWith(R) ? (O(),
                        Buffer.from(e.slice(R.length), "base64")) : e
                    }(e)))
                },
                async setItem(e, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (void 0 === n)
                        return o.removeItem(e);
                    e = A(e);
                    const {relativeKey: s, driver: a} = t(e);
                    a.setItem && (await P(a.setItem, s, S(n), i),
                    a.watch || r("update", e))
                },
                async setItems(e, t) {
                    await s(e, t, (async e=>{
                        if (e.driver.setItems)
                            return P(e.driver.setItems, e.items.map((e=>({
                                key: e.relativeKey,
                                value: S(e.value),
                                options: e.options
                            }))), t);
                        e.driver.setItem && await Promise.all(e.items.map((t=>P(e.driver.setItem, t.relativeKey, S(t.value), t.options))))
                    }
                    ))
                },
                async setItemRaw(e, n) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (void 0 === n)
                        return o.removeItem(e, i);
                    e = A(e);
                    const {relativeKey: s, driver: a} = t(e);
                    if (a.setItemRaw)
                        await P(a.setItemRaw, s, n, i);
                    else {
                        if (!a.setItem)
                            return;
                        await P(a.setItem, s, function(e) {
                            if ("string" === typeof e)
                                return e;
                            O();
                            const t = Buffer.from(e).toString("base64");
                            return R + t
                        }(n), i)
                    }
                    a.watch || r("update", e)
                },
                async removeItem(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    "boolean" === typeof n && (n = {
                        removeMeta: n
                    }),
                    e = A(e);
                    const {relativeKey: i, driver: s} = t(e);
                    s.removeItem && (await P(s.removeItem, i, n),
                    (n.removeMeta || n.removeMata) && await P(s.removeItem, i + "$", n),
                    s.watch || r("remove", e))
                },
                async getMeta(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    "boolean" === typeof n && (n = {
                        nativeOnly: n
                    }),
                    e = A(e);
                    const {relativeKey: r, driver: i} = t(e)
                      , s = Object.create(null);
                    if (i.getMeta && Object.assign(s, await P(i.getMeta, r, n)),
                    !n.nativeOnly) {
                        const e = await P(i.getItem, r + "$", n).then((e=>I(e)));
                        e && "object" === typeof e && ("string" === typeof e.atime && (e.atime = new Date(e.atime)),
                        "string" === typeof e.mtime && (e.mtime = new Date(e.mtime)),
                        Object.assign(s, e))
                    }
                    return s
                },
                setMeta(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.setItem(e + "$", t, n)
                },
                removeMeta(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.removeItem(e + "$", t)
                },
                async getKeys(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e = N(e);
                    const r = n(e, !0);
                    let i = [];
                    const s = [];
                    for (const n of r) {
                        const e = (await P(n.driver.getKeys, n.relativeBase, t)).map((e=>n.mountpoint + A(e))).filter((e=>!i.some((t=>e.startsWith(t)))));
                        s.push(...e),
                        i = [n.mountpoint, ...i.filter((e=>!e.startsWith(n.mountpoint)))]
                    }
                    return e ? s.filter((t=>t.startsWith(e) && !t.endsWith("$"))) : s.filter((e=>!e.endsWith("$")))
                },
                async clear(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e = N(e),
                    await Promise.all(n(e, !1).map((async e=>{
                        if (e.driver.clear)
                            return P(e.driver.clear, e.relativeBase, t);
                        if (e.driver.removeItem) {
                            const n = await e.driver.getKeys(e.relativeBase || "", t);
                            return Promise.all(n.map((n=>e.driver.removeItem(n, t))))
                        }
                    }
                    )))
                },
                async dispose() {
                    await Promise.all(Object.values(e.mounts).map((e=>D(e))))
                },
                watch: async t=>(await (async()=>{
                    if (!e.watching) {
                        e.watching = !0;
                        for (const t in e.mounts)
                            e.unwatch[t] = await j(e.mounts[t], r, t)
                    }
                }
                )(),
                e.watchListeners.push(t),
                async()=>{
                    e.watchListeners = e.watchListeners.filter((e=>e !== t)),
                    0 === e.watchListeners.length && await i()
                }
                ),
                async unwatch() {
                    e.watchListeners = [],
                    await i()
                },
                mount(t, n) {
                    if ((t = N(t)) && e.mounts[t])
                        throw new Error("already mounted at ".concat(t));
                    return t && (e.mountpoints.push(t),
                    e.mountpoints.sort(((e,t)=>t.length - e.length))),
                    e.mounts[t] = n,
                    e.watching && Promise.resolve(j(n, r, t)).then((n=>{
                        e.unwatch[t] = n
                    }
                    )).catch(console.error),
                    o
                },
                async unmount(t) {
                    let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    (t = N(t)) && e.mounts[t] && (e.watching && t in e.unwatch && (e.unwatch[t](),
                    delete e.unwatch[t]),
                    n && await D(e.mounts[t]),
                    e.mountpoints = e.mountpoints.filter((e=>e !== t)),
                    delete e.mounts[t])
                },
                getMount() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    e = A(e) + ":";
                    const n = t(e);
                    return {
                        driver: n.driver,
                        base: n.base
                    }
                },
                getMounts() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e = A(e);
                    return n(e, t.parents).map((e=>({
                        driver: e.driver,
                        base: e.mountpoint
                    })))
                }
            };
            return o
        }
        function j(e, t, n) {
            return e.watch ? e.watch(((e,r)=>t(e, n + r))) : ()=>{}
        }
        async function D(e) {
            "function" === typeof e.dispose && await P(e.dispose)
        }
        function L(e) {
            return new Promise(((t,n)=>{
                e.oncomplete = e.onsuccess = ()=>t(e.result),
                e.onabort = e.onerror = ()=>n(e.error)
            }
            ))
        }
        function M(e, t) {
            const n = indexedDB.open(e);
            n.onupgradeneeded = ()=>n.result.createObjectStore(t);
            const r = L(n);
            return (e,n)=>r.then((r=>n(r.transaction(t, e).objectStore(t))))
        }
        let U;
        function k() {
            return U || (U = M("keyval-store", "keyval")),
            U
        }
        function q(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k())("readonly", (t=>L(t.get(e))))
        }
        function z(e, t) {
            return e.openCursor().onsuccess = function() {
                this.result && (t(this.result),
                this.result.continue())
            }
            ,
            L(e.transaction)
        }
        const H = e=>JSON.stringify(e, ((e,t)=>"bigint" === typeof t ? t.toString() + "n" : t))
          , V = e=>{
            const t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
            return JSON.parse(t, ((e,t)=>"string" === typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t))
        }
        ;
        function K(e) {
            if ("string" !== typeof e)
                throw new Error("Cannot safe json parse value of type ".concat(typeof e));
            try {
                return V(e)
            } catch (t) {
                return e
            }
        }
        function B(e) {
            return "string" === typeof e ? e : H(e) || ""
        }
        var W = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const t = e.base && e.base.length > 0 ? "".concat(e.base, ":") : ""
              , n = e=>t + e;
            let r;
            return e.dbName && e.storeName && (r = M(e.dbName, e.storeName)),
            {
                name: "idb-keyval",
                options: e,
                hasItem: async e=>!(typeof await q(n(e), r) > "u"),
                async getItem(e) {
                    var t;
                    return null !== (t = await q(n(e), r)) && void 0 !== t ? t : null
                },
                setItem: (e,t)=>function(e, t) {
                    return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k())("readwrite", (n=>(n.put(t, e),
                    L(n.transaction))))
                }(n(e), t, r),
                removeItem: e=>function(e) {
                    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k())("readwrite", (t=>(t.delete(e),
                    L(t.transaction))))
                }(n(e), r),
                getKeys: ()=>function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k())("readonly", (e=>{
                        if (e.getAllKeys)
                            return L(e.getAllKeys());
                        const t = [];
                        return z(e, (e=>t.push(e.key))).then((()=>t))
                    }
                    ))
                }(r),
                clear: ()=>function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k())("readwrite", (e=>(e.clear(),
                    L(e.transaction))))
                }(r)
            }
        };
        class F {
            constructor() {
                this.indexedDb = C({
                    driver: W({
                        dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                        storeName: "keyvaluestorage"
                    })
                })
            }
            async getKeys() {
                return this.indexedDb.getKeys()
            }
            async getEntries() {
                return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e=>[e.key, e.value]))
            }
            async getItem(e) {
                const t = await this.indexedDb.getItem(e);
                if (null !== t)
                    return t
            }
            async setItem(e, t) {
                await this.indexedDb.setItem(e, B(t))
            }
            async removeItem(e) {
                await this.indexedDb.removeItem(e)
            }
        }
        var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof n.g < "u" ? n.g : typeof self < "u" ? self : {}
          , Q = {
            exports: {}
        };
        function J(e) {
            var t;
            return [e[0], K(null != (t = e[1]) ? t : "")]
        }
        !function() {
            let e;
            function t() {}
            e = t,
            e.prototype.getItem = function(e) {
                return this.hasOwnProperty(e) ? String(this[e]) : null
            }
            ,
            e.prototype.setItem = function(e, t) {
                this[e] = String(t)
            }
            ,
            e.prototype.removeItem = function(e) {
                delete this[e]
            }
            ,
            e.prototype.clear = function() {
                const e = this;
                Object.keys(e).forEach((function(t) {
                    e[t] = void 0,
                    delete e[t]
                }
                ))
            }
            ,
            e.prototype.key = function(e) {
                return e = e || 0,
                Object.keys(this)[e]
            }
            ,
            e.prototype.__defineGetter__("length", (function() {
                return Object.keys(this).length
            }
            )),
            typeof G < "u" && G.localStorage ? Q.exports = G.localStorage : typeof window < "u" && window.localStorage ? Q.exports = window.localStorage : Q.exports = new t
        }();
        class Y {
            constructor() {
                this.localStorage = Q.exports
            }
            async getKeys() {
                return Object.keys(this.localStorage)
            }
            async getEntries() {
                return Object.entries(this.localStorage).map(J)
            }
            async getItem(e) {
                const t = this.localStorage.getItem(e);
                if (null !== t)
                    return K(t)
            }
            async setItem(e, t) {
                this.localStorage.setItem(e, B(t))
            }
            async removeItem(e) {
                this.localStorage.removeItem(e)
            }
        }
        const $ = async(e,t)=>{
            t.length && t.forEach((async t=>{
                await e.removeItem(t)
            }
            ))
        }
        ;
        class Z {
            constructor() {
                this.initialized = !1,
                this.setInitialized = e=>{
                    this.storage = e,
                    this.initialized = !0
                }
                ;
                const e = new Y;
                this.storage = e;
                try {
                    (async(e,t,n)=>{
                        const r = "wc_storage_version"
                          , i = await t.getItem(r);
                        if (i && i >= 1)
                            return void n(t);
                        const s = await e.getKeys();
                        if (!s.length)
                            return void n(t);
                        const o = [];
                        for (; s.length; ) {
                            const n = s.shift();
                            if (!n)
                                continue;
                            const r = n.toLowerCase();
                            if (r.includes("wc@") || r.includes("walletconnect") || r.includes("wc_") || r.includes("wallet_connect")) {
                                const r = await e.getItem(n);
                                await t.setItem(n, r),
                                o.push(n)
                            }
                        }
                        await t.setItem(r, 1),
                        n(t),
                        $(e, o)
                    }
                    )(e, new F, this.setInitialized)
                } catch {
                    this.initialized = !0
                }
            }
            async getKeys() {
                return await this.initialize(),
                this.storage.getKeys()
            }
            async getEntries() {
                return await this.initialize(),
                this.storage.getEntries()
            }
            async getItem(e) {
                return await this.initialize(),
                this.storage.getItem(e)
            }
            async setItem(e, t) {
                return await this.initialize(),
                this.storage.setItem(e, t)
            }
            async removeItem(e) {
                return await this.initialize(),
                this.storage.removeItem(e)
            }
            async initialize() {
                this.initialized || await new Promise((e=>{
                    const t = setInterval((()=>{
                        this.initialized && (clearInterval(t),
                        e())
                    }
                    ), 20)
                }
                ))
            }
        }
        var X = n(97225)
          , ee = n(14063)
          , te = n.n(ee);
        const ne = "info"
          , re = "custom_context";
        Symbol.iterator;
        var ie = Object.defineProperty
          , se = Object.defineProperties
          , oe = Object.getOwnPropertyDescriptors
          , ae = Object.getOwnPropertySymbols
          , ce = Object.prototype.hasOwnProperty
          , ue = Object.prototype.propertyIsEnumerable
          , he = (e,t,n)=>t in e ? ie(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , le = (e,t)=>{
            for (var n in t || (t = {}))
                ce.call(t, n) && he(e, n, t[n]);
            if (ae)
                for (var n of ae(t))
                    ue.call(t, n) && he(e, n, t[n]);
            return e
        }
          , pe = (e,t)=>se(e, oe(t));
        function fe(e) {
            return pe(le({}, e), {
                level: (null === e || void 0 === e ? void 0 : e.level) || ne
            })
        }
        function de(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : re
              , n = "";
            return n = typeof e.bindings > "u" ? function(e) {
                return e[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : re] || ""
            }(e, t) : e.bindings().context || "",
            n
        }
        function ge(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : re;
            const r = function(e, t) {
                const n = de(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : re);
                return n.trim() ? "".concat(n, "/").concat(t) : t
            }(e, t, n);
            return function(e, t) {
                return e[arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : re] = t,
                e
            }(e.child({
                context: r
            }), r, n)
        }
        var ve = n(6841);
        class ye extends ve.H {
            constructor(e) {
                super(),
                this.opts = e,
                this.protocol = "wc",
                this.version = 2
            }
        }
        class me extends ve.H {
            constructor(e, t) {
                super(),
                this.core = e,
                this.logger = t,
                this.records = new Map
            }
        }
        class we {
            constructor(e, t) {
                this.logger = e,
                this.core = t
            }
        }
        class be extends ve.H {
            constructor(e, t) {
                super(),
                this.relayer = e,
                this.logger = t
            }
        }
        class _e extends ve.H {
            constructor(e) {
                super()
            }
        }
        class Ee {
            constructor(e, t, n, r) {
                this.core = e,
                this.logger = t,
                this.name = n
            }
        }
        class Ie extends ve.H {
            constructor(e, t) {
                super(),
                this.relayer = e,
                this.logger = t
            }
        }
        class Pe extends ve.H {
            constructor(e, t) {
                super(),
                this.core = e,
                this.logger = t
            }
        }
        class Se {
            constructor(e, t) {
                this.projectId = e,
                this.logger = t
            }
        }
        class Oe {
            constructor(e, t) {
                this.projectId = e,
                this.logger = t
            }
        }
        i();
        class Re {
            constructor(e) {
                this.opts = e,
                this.protocol = "wc",
                this.version = 2
            }
        }
        r.EventEmitter;
        class Ae {
            constructor(e) {
                this.client = e
            }
        }
        var xe = n(83375);
        const Ne = "."
          , Te = "base64url"
          , Ce = "utf8"
          , je = "utf8"
          , De = ":"
          , Le = "did"
          , Me = "key"
          , Ue = "base58btc"
          , ke = "z"
          , qe = "K36";
        var ze = n(73534)
          , He = n(37689)
          , Ve = n(14018);
        function Ke(e) {
            return (0,
            He.d)((0,
            Ve.s)(B(e), Ce), Te)
        }
        function Be(e) {
            const t = (0,
            Ve.s)(qe, Ue)
              , n = ke + (0,
            He.d)((0,
            ze.x)([t, e]), Ue);
            return [Le, Me, n].join(De)
        }
        function We() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0,
            a.randomBytes)(32);
            return xe.K(e)
        }
        async function Fe(e, t, n, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0,
            l.fromMiliseconds)(Date.now());
            const s = {
                alg: "EdDSA",
                typ: "JWT"
            }
              , o = {
                iss: Be(r.publicKey),
                sub: e,
                aud: t,
                iat: i,
                exp: i + n
            }
              , a = (c = {
                header: s,
                payload: o
            },
            (0,
            Ve.s)([Ke(c.header), Ke(c.payload)].join(Ne), je));
            var c;
            return function(e) {
                return [Ke(e.header), Ke(e.payload), (t = e.signature,
                (0,
                He.d)(t, Te))].join(Ne);
                var t
            }({
                header: s,
                payload: o,
                signature: xe._S(r.secretKey, a)
            })
        }
        n(75650);
        var Ge = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, i = 0, s = t.length; i < s; i++)
                    !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
                    r[i] = t[i]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
          , Qe = function(e, t, n) {
            this.name = e,
            this.version = t,
            this.os = n,
            this.type = "browser"
        }
          , Je = function(e) {
            this.version = e,
            this.type = "node",
            this.name = "node",
            this.os = process.platform
        }
          , Ye = function(e, t, n, r) {
            this.name = e,
            this.version = t,
            this.os = n,
            this.bot = r,
            this.type = "bot-device"
        }
          , $e = function() {
            this.type = "bot",
            this.bot = !0,
            this.name = "bot",
            this.version = null,
            this.os = null
        }
          , Ze = function() {
            this.type = "react-native",
            this.name = "react-native",
            this.version = null,
            this.os = null
        }
          , Xe = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
          , et = 3
          , tt = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FB[AS]V\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["curl", /^curl\/([0-9\.]+)$/], ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]]
          , nt = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
        function rt(e) {
            return e ? st(e) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new Ze : "undefined" !== typeof navigator ? st(navigator.userAgent) : "undefined" !== typeof process && process.version ? new Je(process.version.slice(1)) : null
        }
        function it(e) {
            return "" !== e && tt.reduce((function(t, n) {
                var r = n[0]
                  , i = n[1];
                if (t)
                    return t;
                var s = i.exec(e);
                return !!s && [r, s]
            }
            ), !1)
        }
        function st(e) {
            var t = it(e);
            if (!t)
                return null;
            var n = t[0]
              , r = t[1];
            if ("searchbot" === n)
                return new $e;
            var i = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
            i ? i.length < et && (i = Ge(Ge([], i, !0), function(e) {
                for (var t = [], n = 0; n < e; n++)
                    t.push("0");
                return t
            }(et - i.length), !0)) : i = [];
            var s = i.join(".")
              , o = function(e) {
                for (var t = 0, n = nt.length; t < n; t++) {
                    var r = nt[t]
                      , i = r[0];
                    if (r[1].exec(e))
                        return i
                }
                return null
            }(e)
              , a = Xe.exec(e);
            return a && a[1] ? new Ye(n,s,o,a[1]) : new Qe(n,s,o)
        }
        const ot = ":";
        function at(e) {
            const [t,n] = e.split(ot);
            return {
                namespace: t,
                reference: n
            }
        }
        function ct(e, t) {
            return e.includes(":") ? [e] : t.chains || []
        }
        const ut = "base10"
          , ht = "base16"
          , lt = "base64pad"
          , pt = "utf8"
          , ft = 0
          , dt = 1
          , gt = 0
          , vt = 1
          , yt = 12
          , mt = 32;
        function wt() {
            const e = (0,
            a.randomBytes)(mt);
            return (0,
            h.dI)(e, ht)
        }
        function bt(e) {
            const t = (0,
            c.tW)((0,
            h.sH)(e, pt));
            return (0,
            h.dI)(t, ht)
        }
        function _t(e) {
            return Number((0,
            h.dI)(e, ut))
        }
        function Et(e) {
            const t = function(e) {
                return (0,
                h.sH)("".concat(e), ut)
            }(typeof e.type < "u" ? e.type : ft);
            if (_t(t) === dt && typeof e.senderPublicKey > "u")
                throw new Error("Missing sender public key for type 1 envelope");
            const n = typeof e.senderPublicKey < "u" ? (0,
            h.sH)(e.senderPublicKey, ht) : void 0
              , r = typeof e.iv < "u" ? (0,
            h.sH)(e.iv, ht) : (0,
            a.randomBytes)(yt);
            return function(e) {
                if (_t(e.type) === dt) {
                    if (typeof e.senderPublicKey > "u")
                        throw new Error("Missing sender public key for type 1 envelope");
                    return (0,
                    h.dI)((0,
                    h.xW)([e.type, e.senderPublicKey, e.iv, e.sealed]), lt)
                }
                return (0,
                h.dI)((0,
                h.xW)([e.type, e.iv, e.sealed]), lt)
            }({
                type: t,
                sealed: new s.g6((0,
                h.sH)(e.symKey, ht)).seal(r, (0,
                h.sH)(e.message, pt)),
                iv: r,
                senderPublicKey: n
            })
        }
        function It(e) {
            const t = (0,
            h.sH)(e, lt)
              , n = t.slice(gt, vt)
              , r = vt;
            if (_t(n) === dt) {
                const e = r + mt
                  , i = e + yt
                  , s = t.slice(r, e)
                  , o = t.slice(e, i);
                return {
                    type: n,
                    sealed: t.slice(i),
                    iv: o,
                    senderPublicKey: s
                }
            }
            const i = r + yt
              , s = t.slice(r, i);
            return {
                type: n,
                sealed: t.slice(i),
                iv: s
            }
        }
        function Pt(e) {
            const t = (null === e || void 0 === e ? void 0 : e.type) || ft;
            if (t === dt) {
                if (typeof (null === e || void 0 === e ? void 0 : e.senderPublicKey) > "u")
                    throw new Error("missing sender public key");
                if (typeof (null === e || void 0 === e ? void 0 : e.receiverPublicKey) > "u")
                    throw new Error("missing receiver public key")
            }
            return {
                type: t,
                senderPublicKey: null === e || void 0 === e ? void 0 : e.senderPublicKey,
                receiverPublicKey: null === e || void 0 === e ? void 0 : e.receiverPublicKey
            }
        }
        function St(e) {
            return e.type === dt && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
        }
        var Ot = Object.defineProperty
          , Rt = Object.getOwnPropertySymbols
          , At = Object.prototype.hasOwnProperty
          , xt = Object.prototype.propertyIsEnumerable
          , Nt = (e,t,n)=>t in e ? Ot(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , Tt = (e,t)=>{
            for (var n in t || (t = {}))
                At.call(t, n) && Nt(e, n, t[n]);
            if (Rt)
                for (var n of Rt(t))
                    xt.call(t, n) && Nt(e, n, t[n]);
            return e
        }
        ;
        const Ct = "ReactNative"
          , jt = {
            reactNative: "react-native",
            node: "node",
            browser: "browser",
            unknown: "unknown"
        }
          , Dt = "js";
        function Lt() {
            return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
        }
        function Mt() {
            return !(0,
            p.getDocument)() && !!(0,
            p.getNavigator)() && navigator.product === Ct
        }
        function Ut() {
            return !Lt() && !!(0,
            p.getNavigator)() && !!(0,
            p.getDocument)()
        }
        function kt() {
            return Mt() ? jt.reactNative : Lt() ? jt.node : Ut() ? jt.browser : jt.unknown
        }
        function qt(e, t, r) {
            const i = function() {
                if (kt() === jt.reactNative && typeof n.g < "u" && typeof (null == n.g ? void 0 : n.g.Platform) < "u") {
                    const {OS: e, Version: t} = n.g.Platform;
                    return [e, t].join("-")
                }
                const e = rt();
                if (null === e)
                    return "unknown";
                const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
            }()
              , s = function() {
                var e;
                const t = kt();
                return t === jt.browser ? [t, (null == (e = (0,
                p.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
            }();
            return [[e, t].join("-"), [Dt, r].join("-"), i, s].join("/")
        }
        function zt(e) {
            let {protocol: t, version: n, relayUrl: r, sdkVersion: i, auth: s, projectId: o, useOnCloseEvent: a, bundleId: c} = e;
            const u = r.split("?")
              , h = {
                auth: s,
                ua: qt(t, n, i),
                projectId: o,
                useOnCloseEvent: a || void 0,
                origin: c || void 0
            }
              , l = function(e, t) {
                let n = d.parse(e);
                return n = Tt(Tt({}, n), t),
                d.stringify(n)
            }(u[1] || "", h);
            return u[0] + "?" + l
        }
        function Ht(e, t) {
            return e.filter((e=>t.includes(e))).length === e.length
        }
        function Vt(e) {
            return Object.fromEntries(e.entries())
        }
        function Kt(e) {
            return new Map(Object.entries(e))
        }
        function Bt() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.FIVE_MINUTES
              , t = arguments.length > 1 ? arguments[1] : void 0;
            const n = (0,
            l.toMiliseconds)(e || l.FIVE_MINUTES);
            let r, i, s;
            return {
                resolve: e=>{
                    s && r && (clearTimeout(s),
                    r(e))
                }
                ,
                reject: e=>{
                    s && i && (clearTimeout(s),
                    i(e))
                }
                ,
                done: ()=>new Promise(((e,o)=>{
                    s = setTimeout((()=>{
                        o(new Error(t))
                    }
                    ), n),
                    r = e,
                    i = o
                }
                ))
            }
        }
        function Wt(e, t, n) {
            return new Promise((async(r,i)=>{
                const s = setTimeout((()=>i(new Error(n))), t);
                try {
                    r(await e)
                } catch (le) {
                    i(le)
                }
                clearTimeout(s)
            }
            ))
        }
        function Ft(e, t) {
            if ("string" == typeof t && t.startsWith("".concat(e, ":")))
                return t;
            if ("topic" === e.toLowerCase()) {
                if ("string" != typeof t)
                    throw new Error('Value must be "string" for expirer target type: topic');
                return "topic:".concat(t)
            }
            if ("id" === e.toLowerCase()) {
                if ("number" != typeof t)
                    throw new Error('Value must be "number" for expirer target type: id');
                return "id:".concat(t)
            }
            throw new Error("Unknown expirer target type: ".concat(e))
        }
        function Gt(e) {
            const [t,n] = e.split(":")
              , r = {
                id: void 0,
                topic: void 0
            };
            if ("topic" === t && "string" == typeof n)
                r.topic = n;
            else {
                if ("id" !== t || !Number.isInteger(Number(n)))
                    throw new Error("Invalid target, expected id:number or topic:string, got ".concat(t, ":").concat(n));
                r.id = Number(n)
            }
            return r
        }
        function Qt(e, t) {
            return (0,
            l.fromMiliseconds)((t || Date.now()) + (0,
            l.toMiliseconds)(e))
        }
        function Jt(e) {
            return Date.now() >= (0,
            l.toMiliseconds)(e)
        }
        function Yt(e, t) {
            return "".concat(e).concat(t ? ":".concat(t) : "")
        }
        function $t() {
            return [...new Set([...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []])]
        }
        function Zt(e) {
            return (null === e || void 0 === e ? void 0 : e.relay) || {
                protocol: "irn"
            }
        }
        function Xt(e) {
            const t = g.CG[e];
            if (typeof t > "u")
                throw new Error("Relay Protocol not supported: ".concat(e));
            return t
        }
        var en = Object.defineProperty
          , tn = Object.getOwnPropertySymbols
          , nn = Object.prototype.hasOwnProperty
          , rn = Object.prototype.propertyIsEnumerable
          , sn = (e,t,n)=>t in e ? en(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        function on(e) {
            const t = {}
              , n = "relay" + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-");
            return Object.keys(e).forEach((r=>{
                if (r.startsWith(n)) {
                    const i = r.replace(n, "")
                      , s = e[r];
                    t[i] = s
                }
            }
            )),
            t
        }
        function an(e) {
            const t = (e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e).indexOf(":")
              , n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0
              , r = e.substring(0, t)
              , i = e.substring(t + 1, n).split("@")
              , s = typeof n < "u" ? e.substring(n) : ""
              , o = d.parse(s);
            return {
                protocol: r,
                topic: cn(i[0]),
                version: parseInt(i[1], 10),
                symKey: o.symKey,
                relay: on(o)
            }
        }
        function cn(e) {
            return e.startsWith("//") ? e.substring(2) : e
        }
        function un(e) {
            return "".concat(e.protocol, ":").concat(e.topic, "@").concat(e.version, "?") + d.stringify(((e,t)=>{
                for (var n in t || (t = {}))
                    nn.call(t, n) && sn(e, n, t[n]);
                if (tn)
                    for (var n of tn(t))
                        rn.call(t, n) && sn(e, n, t[n]);
                return e
            }
            )({
                symKey: e.symKey
            }, function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
                const n = {};
                return Object.keys(e).forEach((r=>{
                    const i = "relay" + t + r;
                    e[r] && (n[i] = e[r])
                }
                )),
                n
            }(e.relay)))
        }
        Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
        function hn(e) {
            const t = [];
            return e.forEach((e=>{
                const [n,r] = e.split(":");
                t.push("".concat(n, ":").concat(r))
            }
            )),
            t
        }
        function ln(e) {
            return e.includes(":")
        }
        function pn(e) {
            return ln(e) ? e.split(":")[0] : e
        }
        const fn = {
            INVALID_METHOD: {
                message: "Invalid method.",
                code: 1001
            },
            INVALID_EVENT: {
                message: "Invalid event.",
                code: 1002
            },
            INVALID_UPDATE_REQUEST: {
                message: "Invalid update request.",
                code: 1003
            },
            INVALID_EXTEND_REQUEST: {
                message: "Invalid extend request.",
                code: 1004
            },
            INVALID_SESSION_SETTLE_REQUEST: {
                message: "Invalid session settle request.",
                code: 1005
            },
            UNAUTHORIZED_METHOD: {
                message: "Unauthorized method.",
                code: 3001
            },
            UNAUTHORIZED_EVENT: {
                message: "Unauthorized event.",
                code: 3002
            },
            UNAUTHORIZED_UPDATE_REQUEST: {
                message: "Unauthorized update request.",
                code: 3003
            },
            UNAUTHORIZED_EXTEND_REQUEST: {
                message: "Unauthorized extend request.",
                code: 3004
            },
            USER_REJECTED: {
                message: "User rejected.",
                code: 5e3
            },
            USER_REJECTED_CHAINS: {
                message: "User rejected chains.",
                code: 5001
            },
            USER_REJECTED_METHODS: {
                message: "User rejected methods.",
                code: 5002
            },
            USER_REJECTED_EVENTS: {
                message: "User rejected events.",
                code: 5003
            },
            UNSUPPORTED_CHAINS: {
                message: "Unsupported chains.",
                code: 5100
            },
            UNSUPPORTED_METHODS: {
                message: "Unsupported methods.",
                code: 5101
            },
            UNSUPPORTED_EVENTS: {
                message: "Unsupported events.",
                code: 5102
            },
            UNSUPPORTED_ACCOUNTS: {
                message: "Unsupported accounts.",
                code: 5103
            },
            UNSUPPORTED_NAMESPACE_KEY: {
                message: "Unsupported namespace key.",
                code: 5104
            },
            USER_DISCONNECTED: {
                message: "User disconnected.",
                code: 6e3
            },
            SESSION_SETTLEMENT_FAILED: {
                message: "Session settlement failed.",
                code: 7e3
            },
            WC_METHOD_UNSUPPORTED: {
                message: "Unsupported wc_ method.",
                code: 10001
            }
        }
          , dn = {
            NOT_INITIALIZED: {
                message: "Not initialized.",
                code: 1
            },
            NO_MATCHING_KEY: {
                message: "No matching key.",
                code: 2
            },
            RESTORE_WILL_OVERRIDE: {
                message: "Restore will override.",
                code: 3
            },
            RESUBSCRIBED: {
                message: "Resubscribed.",
                code: 4
            },
            MISSING_OR_INVALID: {
                message: "Missing or invalid.",
                code: 5
            },
            EXPIRED: {
                message: "Expired.",
                code: 6
            },
            UNKNOWN_TYPE: {
                message: "Unknown type.",
                code: 7
            },
            MISMATCHED_TOPIC: {
                message: "Mismatched topic.",
                code: 8
            },
            NON_CONFORMING_NAMESPACES: {
                message: "Non conforming namespaces.",
                code: 9
            }
        };
        function gn(e, t) {
            const {message: n, code: r} = dn[e];
            return {
                message: t ? "".concat(n, " ").concat(t) : n,
                code: r
            }
        }
        function vn(e, t) {
            const {message: n, code: r} = fn[e];
            return {
                message: t ? "".concat(n, " ").concat(t) : n,
                code: r
            }
        }
        function yn(e, t) {
            return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        }
        function mn(e) {
            return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        }
        function wn(e) {
            return typeof e > "u"
        }
        function bn(e, t) {
            return !(!t || !wn(e)) || "string" == typeof e && !!e.trim().length
        }
        function _n(e, t) {
            return !(!t || !wn(e)) || "number" == typeof e && !isNaN(e)
        }
        function En(e) {
            return !(!bn(e, !1) || !e.includes(":")) && 2 === e.split(":").length
        }
        function In(e) {
            let t = !0;
            return yn(e) ? e.length && (t = e.every((e=>bn(e, !1)))) : t = !1,
            t
        }
        function Pn(e, t, n) {
            let r = null;
            return Object.entries(e).forEach((e=>{
                let[i,s] = e;
                if (r)
                    return;
                const o = function(e, t, n) {
                    let r = null;
                    return yn(t) && t.length ? t.forEach((e=>{
                        r || En(e) || (r = vn("UNSUPPORTED_CHAINS", "".concat(n, ", chain ").concat(e, ' should be a string and conform to "namespace:chainId" format')))
                    }
                    )) : En(e) || (r = vn("UNSUPPORTED_CHAINS", "".concat(n, ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'))),
                    r
                }(i, ct(i, s), "".concat(t, " ").concat(n));
                o && (r = o)
            }
            )),
            r
        }
        function Sn(e, t) {
            let n = null;
            return yn(e) ? e.forEach((e=>{
                n || function(e) {
                    if (bn(e, !1) && e.includes(":")) {
                        const t = e.split(":");
                        if (3 === t.length) {
                            const e = t[0] + ":" + t[1];
                            return !!t[2] && En(e)
                        }
                    }
                    return !1
                }(e) || (n = vn("UNSUPPORTED_ACCOUNTS", "".concat(t, ", account ").concat(e, ' should be a string and conform to "namespace:chainId:address" format')))
            }
            )) : n = vn("UNSUPPORTED_ACCOUNTS", "".concat(t, ', accounts should be an array of strings conforming to "namespace:chainId:address" format')),
            n
        }
        function On(e, t) {
            let n = null;
            return Object.values(e).forEach((e=>{
                if (n)
                    return;
                const r = function(e, t) {
                    let n = null;
                    return In(null === e || void 0 === e ? void 0 : e.methods) ? In(null === e || void 0 === e ? void 0 : e.events) || (n = vn("UNSUPPORTED_EVENTS", "".concat(t, ", events should be an array of strings or empty array for no events"))) : n = vn("UNSUPPORTED_METHODS", "".concat(t, ", methods should be an array of strings or empty array for no methods")),
                    n
                }(e, "".concat(t, ", namespace"));
                r && (n = r)
            }
            )),
            n
        }
        function Rn(e, t) {
            let n = null;
            if (e && mn(e)) {
                const r = On(e, t);
                r && (n = r);
                const i = function(e, t) {
                    let n = null;
                    return Object.values(e).forEach((e=>{
                        if (n)
                            return;
                        const r = Sn(null === e || void 0 === e ? void 0 : e.accounts, "".concat(t, " namespace"));
                        r && (n = r)
                    }
                    )),
                    n
                }(e, t);
                i && (n = i)
            } else
                n = gn("MISSING_OR_INVALID", "".concat(t, ", namespaces should be an object with data"));
            return n
        }
        function An(e) {
            return bn(e.protocol, !0)
        }
        function xn(e) {
            return typeof e < "u" && null !== typeof e
        }
        function Nn(e, t) {
            return !(!En(t) || !function(e) {
                const t = [];
                return Object.values(e).forEach((e=>{
                    t.push(...hn(e.accounts))
                }
                )),
                t
            }(e).includes(t))
        }
        function Tn(e, t, n) {
            return !!bn(n, !1) && function(e, t) {
                const n = [];
                return Object.values(e).forEach((e=>{
                    hn(e.accounts).includes(t) && n.push(...e.methods)
                }
                )),
                n
            }(e, t).includes(n)
        }
        function Cn(e, t, n) {
            return !!bn(n, !1) && function(e, t) {
                const n = [];
                return Object.values(e).forEach((e=>{
                    hn(e.accounts).includes(t) && n.push(...e.events)
                }
                )),
                n
            }(e, t).includes(n)
        }
        function jn(e, t, n) {
            let r = null;
            const i = function(e) {
                const t = {};
                return Object.keys(e).forEach((n=>{
                    var r;
                    n.includes(":") ? t[n] = e[n] : null == (r = e[n].chains) || r.forEach((r=>{
                        t[r] = {
                            methods: e[n].methods,
                            events: e[n].events
                        }
                    }
                    ))
                }
                )),
                t
            }(e)
              , s = function(e) {
                const t = {};
                return Object.keys(e).forEach((n=>{
                    if (n.includes(":"))
                        t[n] = e[n];
                    else {
                        const r = hn(e[n].accounts);
                        null === r || void 0 === r || r.forEach((r=>{
                            t[r] = {
                                accounts: e[n].accounts.filter((e=>e.includes("".concat(r, ":")))),
                                methods: e[n].methods,
                                events: e[n].events
                            }
                        }
                        ))
                    }
                }
                )),
                t
            }(t)
              , o = Object.keys(i)
              , a = Object.keys(s)
              , c = Dn(Object.keys(e))
              , u = Dn(Object.keys(t))
              , h = c.filter((e=>!u.includes(e)));
            return h.length && (r = gn("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces keys don't satisfy requiredNamespaces.\n      Required: ").concat(h.toString(), "\n      Received: ").concat(Object.keys(t).toString()))),
            Ht(o, a) || (r = gn("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces chains don't satisfy required namespaces.\n      Required: ").concat(o.toString(), "\n      Approved: ").concat(a.toString()))),
            Object.keys(t).forEach((e=>{
                if (!e.includes(":") || r)
                    return;
                const i = hn(t[e].accounts);
                i.includes(e) || (r = gn("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces accounts don't satisfy namespace accounts for ").concat(e, "\n        Required: ").concat(e, "\n        Approved: ").concat(i.toString())))
            }
            )),
            o.forEach((e=>{
                r || (Ht(i[e].methods, s[e].methods) ? Ht(i[e].events, s[e].events) || (r = gn("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces events don't satisfy namespace events for ").concat(e))) : r = gn("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces methods don't satisfy namespace methods for ").concat(e)))
            }
            )),
            r
        }
        function Dn(e) {
            return [...new Set(e.map((e=>e.includes(":") ? e.split(":")[0] : e)))]
        }
        function Ln() {
            const e = kt();
            return new Promise((t=>{
                switch (e) {
                case jt.browser:
                    t(function() {
                        var e;
                        return Ut() && (null === (e = navigator) || void 0 === e ? void 0 : e.onLine)
                    }());
                    break;
                case jt.reactNative:
                    t(async function() {
                        if (Mt() && typeof n.g < "u" && null != n.g && n.g.NetInfo) {
                            const e = await (null == n.g ? void 0 : n.g.NetInfo.fetch());
                            return null === e || void 0 === e ? void 0 : e.isConnected
                        }
                        return !0
                    }());
                    break;
                case jt.node:
                default:
                    t(!0)
                }
            }
            ))
        }
        function Mn(e) {
            switch (kt()) {
            case jt.browser:
                !function(e) {
                    !Mt() && Ut() && (window.addEventListener("online", (()=>e(!0))),
                    window.addEventListener("offline", (()=>e(!1))))
                }(e);
                break;
            case jt.reactNative:
                !function(e) {
                    var t;
                    Mt() && typeof n.g < "u" && null != n.g && n.g.NetInfo && (null === (t = n.g) || void 0 === t || t.NetInfo.addEventListener((t=>e(null === t || void 0 === t ? void 0 : t.isConnected))))
                }(e);
            case jt.node:
            }
        }
        const Un = {};
        class kn {
            static get(e) {
                return Un[e]
            }
            static set(e, t) {
                Un[e] = t
            }
            static delete(e) {
                delete Un[e]
            }
        }
        const qn = "PARSE_ERROR"
          , zn = "INVALID_REQUEST"
          , Hn = "METHOD_NOT_FOUND"
          , Vn = "INVALID_PARAMS"
          , Kn = "INTERNAL_ERROR"
          , Bn = "SERVER_ERROR"
          , Wn = [-32700, -32600, -32601, -32602, -32603]
          , Fn = {
            [qn]: {
                code: -32700,
                message: "Parse error"
            },
            [zn]: {
                code: -32600,
                message: "Invalid Request"
            },
            [Hn]: {
                code: -32601,
                message: "Method not found"
            },
            [Vn]: {
                code: -32602,
                message: "Invalid params"
            },
            [Kn]: {
                code: -32603,
                message: "Internal error"
            },
            [Bn]: {
                code: -32e3,
                message: "Server error"
            }
        }
          , Gn = Bn;
        function Qn(e) {
            return Wn.includes(e)
        }
        function Jn(e) {
            return Object.keys(Fn).includes(e) ? Fn[e] : Fn[Gn]
        }
        function Yn(e) {
            const t = Object.values(Fn).find((t=>t.code === e));
            return t || Fn[Gn]
        }
        function $n(e, t, n) {
            return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error("Unavailable ".concat(n, " RPC url at ").concat(t)) : e
        }
        var Zn = n(8855);
        function Xn() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
            return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
        }
        function er() {
            return BigInt(Xn(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6))
        }
        function tr(e, t, n) {
            return {
                id: n || Xn(),
                jsonrpc: "2.0",
                method: e,
                params: t
            }
        }
        function nr(e, t) {
            return {
                id: e,
                jsonrpc: "2.0",
                result: t
            }
        }
        function rr(e, t, n) {
            return {
                id: e,
                jsonrpc: "2.0",
                error: ir(t, n)
            }
        }
        function ir(e, t) {
            return "undefined" === typeof e ? Jn(Kn) : ("string" === typeof e && (e = Object.assign(Object.assign({}, Jn(Bn)), {
                message: e
            })),
            "undefined" !== typeof t && (e.data = t),
            Qn(e.code) && (e = Yn(e.code)),
            e)
        }
        class sr {
        }
        class or extends sr {
            constructor() {
                super()
            }
        }
        class ar extends or {
            constructor(e) {
                super()
            }
        }
        function cr(e, t) {
            const n = function(e) {
                const t = e.match(new RegExp(/^\w+:/,"gi"));
                if (t && t.length)
                    return t[0]
            }(e);
            return "undefined" !== typeof n && new RegExp(t).test(n)
        }
        function ur(e) {
            return cr(e, "^https?:")
        }
        function hr(e) {
            return cr(e, "^wss?:")
        }
        function lr(e) {
            return "object" === typeof e && "id"in e && "jsonrpc"in e && "2.0" === e.jsonrpc
        }
        function pr(e) {
            return lr(e) && "method"in e
        }
        function fr(e) {
            return lr(e) && (dr(e) || gr(e))
        }
        function dr(e) {
            return "result"in e
        }
        function gr(e) {
            return "error"in e
        }
        class vr extends ar {
            constructor(e) {
                super(e),
                this.events = new r.EventEmitter,
                this.hasRegisteredEventListeners = !1,
                this.connection = this.setConnection(e),
                this.connection.connected && this.registerEventListeners()
            }
            async connect() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                await this.open(e)
            }
            async disconnect() {
                await this.close()
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            async request(e, t) {
                return this.requestStrict(tr(e.method, e.params || [], e.id || er().toString()), t)
            }
            async requestStrict(e, t) {
                return new Promise((async(n,r)=>{
                    if (!this.connection.connected)
                        try {
                            await this.open()
                        } catch (sr) {
                            r(sr)
                        }
                    this.events.on("".concat(e.id), (e=>{
                        gr(e) ? r(e.error) : n(e.result)
                    }
                    ));
                    try {
                        await this.connection.send(e, t)
                    } catch (sr) {
                        r(sr)
                    }
                }
                ))
            }
            setConnection() {
                return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
            }
            onPayload(e) {
                this.events.emit("payload", e),
                fr(e) ? this.events.emit("".concat(e.id), e) : this.events.emit("message", {
                    type: e.method,
                    data: e.params
                })
            }
            onClose(e) {
                e && 3e3 === e.code && this.events.emit("error", new Error("WebSocket connection closed abnormally with code: ".concat(e.code, " ").concat(e.reason ? "(".concat(e.reason, ")") : ""))),
                this.events.emit("disconnect")
            }
            async open() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                this.connection === e && this.connection.connected || (this.connection.connected && this.close(),
                "string" === typeof e && (await this.connection.open(e),
                e = this.connection),
                this.connection = this.setConnection(e),
                await this.connection.open(),
                this.registerEventListeners(),
                this.events.emit("connect"))
            }
            async close() {
                await this.connection.close()
            }
            registerEventListeners() {
                this.hasRegisteredEventListeners || (this.connection.on("payload", (e=>this.onPayload(e))),
                this.connection.on("close", (e=>this.onClose(e))),
                this.connection.on("error", (e=>this.events.emit("error", e))),
                this.connection.on("register_error", (e=>this.onClose())),
                this.hasRegisteredEventListeners = !0)
            }
        }
        const yr = e=>e.split("?")[0]
          , mr = typeof WebSocket < "u" ? WebSocket : typeof n.g < "u" && typeof n.g.WebSocket < "u" ? n.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : n(48448);
        class wr {
            constructor(e) {
                if (this.url = e,
                this.events = new r.EventEmitter,
                this.registering = !1,
                !hr(e))
                    throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
                this.url = e
            }
            get connected() {
                return typeof this.socket < "u"
            }
            get connecting() {
                return this.registering
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            async open() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                await this.register(e)
            }
            async close() {
                return new Promise(((e,t)=>{
                    typeof this.socket > "u" ? t(new Error("Connection already closed")) : (this.socket.onclose = t=>{
                        this.onClose(t),
                        e()
                    }
                    ,
                    this.socket.close())
                }
                ))
            }
            async send(e) {
                typeof this.socket > "u" && (this.socket = await this.register());
                try {
                    this.socket.send(B(e))
                } catch (t) {
                    this.onError(e.id, t)
                }
            }
            register() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                if (!hr(e))
                    throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
                if (this.registering) {
                    const e = this.events.getMaxListeners();
                    return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1),
                    new Promise(((e,t)=>{
                        this.events.once("register_error", (e=>{
                            this.resetMaxListeners(),
                            t(e)
                        }
                        )),
                        this.events.once("open", (()=>{
                            if (this.resetMaxListeners(),
                            typeof this.socket > "u")
                                return t(new Error("WebSocket connection is missing or invalid"));
                            e(this.socket)
                        }
                        ))
                    }
                    ))
                }
                return this.url = e,
                this.registering = !0,
                new Promise(((t,r)=>{
                    const i = new URLSearchParams(e).get("origin")
                      , s = (0,
                    Zn.isReactNative)() ? {
                        headers: {
                            origin: i
                        }
                    } : {
                        rejectUnauthorized: (a = e,
                        !new RegExp("wss?://localhost(:d{2,5})?").test(a))
                    }
                      , o = new mr(e,[],s);
                    var a;
                    typeof WebSocket < "u" || typeof n.g < "u" && typeof n.g.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? o.onerror = e=>{
                        const t = e;
                        r(this.emitError(t.error))
                    }
                    : o.on("error", (e=>{
                        r(this.emitError(e))
                    }
                    )),
                    o.onopen = ()=>{
                        this.onOpen(o),
                        t(o)
                    }
                }
                ))
            }
            onOpen(e) {
                e.onmessage = e=>this.onPayload(e),
                e.onclose = e=>this.onClose(e),
                this.socket = e,
                this.registering = !1,
                this.events.emit("open")
            }
            onClose(e) {
                this.socket = void 0,
                this.registering = !1,
                this.events.emit("close", e)
            }
            onPayload(e) {
                if (typeof e.data > "u")
                    return;
                const t = "string" == typeof e.data ? K(e.data) : e.data;
                this.events.emit("payload", t)
            }
            onError(e, t) {
                const n = this.parseError(t)
                  , r = rr(e, n.message || n.toString());
                this.events.emit("payload", r)
            }
            parseError(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                return $n(e, yr(t), "WS")
            }
            resetMaxListeners() {
                this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
            }
            emitError(e) {
                const t = this.parseError(new Error((null === e || void 0 === e ? void 0 : e.message) || "WebSocket connection failed for host: ".concat(yr(this.url))));
                return this.events.emit("register_error", t),
                t
            }
        }
        var br = n(96905)
          , _r = n.n(br)
          , Er = n(11663)
          , Ir = n.n(Er);
        var Pr = function(e, t) {
            if (e.length >= 255)
                throw new TypeError("Alphabet too long");
            for (var n = new Uint8Array(256), r = 0; r < n.length; r++)
                n[r] = 255;
            for (var i = 0; i < e.length; i++) {
                var s = e.charAt(i)
                  , o = s.charCodeAt(0);
                if (255 !== n[o])
                    throw new TypeError(s + " is ambiguous");
                n[o] = i
            }
            var a = e.length
              , c = e.charAt(0)
              , u = Math.log(a) / Math.log(256)
              , h = Math.log(256) / Math.log(a);
            function l(e) {
                if ("string" != typeof e)
                    throw new TypeError("Expected String");
                if (0 === e.length)
                    return new Uint8Array;
                var t = 0;
                if (" " !== e[t]) {
                    for (var r = 0, i = 0; e[t] === c; )
                        r++,
                        t++;
                    for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t]; ) {
                        var h = n[e.charCodeAt(t)];
                        if (255 === h)
                            return;
                        for (var l = 0, p = s - 1; (0 !== h || l < i) && -1 !== p; p--,
                        l++)
                            h += a * o[p] >>> 0,
                            o[p] = h % 256 >>> 0,
                            h = h / 256 >>> 0;
                        if (0 !== h)
                            throw new Error("Non-zero carry");
                        i = l,
                        t++
                    }
                    if (" " !== e[t]) {
                        for (var f = s - i; f !== s && 0 === o[f]; )
                            f++;
                        for (var d = new Uint8Array(r + (s - f)), g = r; f !== s; )
                            d[g++] = o[f++];
                        return d
                    }
                }
            }
            return {
                encode: function(t) {
                    if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))),
                    !(t instanceof Uint8Array))
                        throw new TypeError("Expected Uint8Array");
                    if (0 === t.length)
                        return "";
                    for (var n = 0, r = 0, i = 0, s = t.length; i !== s && 0 === t[i]; )
                        i++,
                        n++;
                    for (var o = (s - i) * h + 1 >>> 0, u = new Uint8Array(o); i !== s; ) {
                        for (var l = t[i], p = 0, f = o - 1; (0 !== l || p < r) && -1 !== f; f--,
                        p++)
                            l += 256 * u[f] >>> 0,
                            u[f] = l % a >>> 0,
                            l = l / a >>> 0;
                        if (0 !== l)
                            throw new Error("Non-zero carry");
                        r = p,
                        i++
                    }
                    for (var d = o - r; d !== o && 0 === u[d]; )
                        d++;
                    for (var g = c.repeat(n); d < o; ++d)
                        g += e.charAt(u[d]);
                    return g
                },
                decodeUnsafe: l,
                decode: function(e) {
                    var n = l(e);
                    if (n)
                        return n;
                    throw new Error("Non-".concat(t, " character"))
                }
            }
        }
          , Sr = Pr;
        const Or = e=>{
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
                return e;
            if (e instanceof ArrayBuffer)
                return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
                return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
            throw new Error("Unknown type, must be binary type")
        }
        ;
        class Rr {
            constructor(e, t, n) {
                this.name = e,
                this.prefix = t,
                this.baseEncode = n
            }
            encode(e) {
                if (e instanceof Uint8Array)
                    return "".concat(this.prefix).concat(this.baseEncode(e));
                throw Error("Unknown type, must be binary type")
            }
        }
        class Ar {
            constructor(e, t, n) {
                if (this.name = e,
                this.prefix = t,
                void 0 === t.codePointAt(0))
                    throw new Error("Invalid prefix character");
                this.prefixCodePoint = t.codePointAt(0),
                this.baseDecode = n
            }
            decode(e) {
                if ("string" == typeof e) {
                    if (e.codePointAt(0) !== this.prefixCodePoint)
                        throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
                    return this.baseDecode(e.slice(this.prefix.length))
                }
                throw Error("Can only multibase decode strings")
            }
            or(e) {
                return Nr(this, e)
            }
        }
        class xr {
            constructor(e) {
                this.decoders = e
            }
            or(e) {
                return Nr(this, e)
            }
            decode(e) {
                const t = e[0]
                  , n = this.decoders[t];
                if (n)
                    return n.decode(e);
                throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"))
            }
        }
        const Nr = (e,t)=>new xr({
            ...e.decoders || {
                [e.prefix]: e
            },
            ...t.decoders || {
                [t.prefix]: t
            }
        });
        class Tr {
            constructor(e, t, n, r) {
                this.name = e,
                this.prefix = t,
                this.baseEncode = n,
                this.baseDecode = r,
                this.encoder = new Rr(e,t,n),
                this.decoder = new Ar(e,t,r)
            }
            encode(e) {
                return this.encoder.encode(e)
            }
            decode(e) {
                return this.decoder.decode(e)
            }
        }
        const Cr = e=>{
            let {name: t, prefix: n, encode: r, decode: i} = e;
            return new Tr(t,n,r,i)
        }
          , jr = e=>{
            let {prefix: t, name: n, alphabet: r} = e;
            const {encode: i, decode: s} = Sr(r, n);
            return Cr({
                prefix: t,
                name: n,
                encode: i,
                decode: e=>Or(s(e))
            })
        }
          , Dr = e=>{
            let {name: t, prefix: n, bitsPerChar: r, alphabet: i} = e;
            return Cr({
                prefix: n,
                name: t,
                encode: e=>((e,t,n)=>{
                    const r = "=" === t[t.length - 1]
                      , i = (1 << n) - 1;
                    let s = ""
                      , o = 0
                      , a = 0;
                    for (let c = 0; c < e.length; ++c)
                        for (a = a << 8 | e[c],
                        o += 8; o > n; )
                            o -= n,
                            s += t[i & a >> o];
                    if (o && (s += t[i & a << n - o]),
                    r)
                        for (; s.length * n & 7; )
                            s += "=";
                    return s
                }
                )(e, i, r),
                decode: e=>((e,t,n,r)=>{
                    const i = {};
                    for (let h = 0; h < t.length; ++h)
                        i[t[h]] = h;
                    let s = e.length;
                    for (; "=" === e[s - 1]; )
                        --s;
                    const o = new Uint8Array(s * n / 8 | 0);
                    let a = 0
                      , c = 0
                      , u = 0;
                    for (let h = 0; h < s; ++h) {
                        const t = i[e[h]];
                        if (void 0 === t)
                            throw new SyntaxError("Non-".concat(r, " character"));
                        c = c << n | t,
                        a += n,
                        a >= 8 && (a -= 8,
                        o[u++] = 255 & c >> a)
                    }
                    if (a >= n || 255 & c << 8 - a)
                        throw new SyntaxError("Unexpected end of data");
                    return o
                }
                )(e, i, r, t)
            })
        }
          , Lr = Cr({
            prefix: "\0",
            name: "identity",
            encode: e=>(e=>(new TextDecoder).decode(e))(e),
            decode: e=>(e=>(new TextEncoder).encode(e))(e)
        });
        var Mr = Object.freeze({
            __proto__: null,
            identity: Lr
        });
        const Ur = Dr({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1
        });
        var kr = Object.freeze({
            __proto__: null,
            base2: Ur
        });
        const qr = Dr({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3
        });
        var zr = Object.freeze({
            __proto__: null,
            base8: qr
        });
        const Hr = jr({
            prefix: "9",
            name: "base10",
            alphabet: "0123456789"
        });
        var Vr = Object.freeze({
            __proto__: null,
            base10: Hr
        });
        const Kr = Dr({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4
        })
          , Br = Dr({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4
        });
        var Wr = Object.freeze({
            __proto__: null,
            base16: Kr,
            base16upper: Br
        });
        const Fr = Dr({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5
        })
          , Gr = Dr({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5
        })
          , Qr = Dr({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5
        })
          , Jr = Dr({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5
        })
          , Yr = Dr({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5
        })
          , $r = Dr({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5
        })
          , Zr = Dr({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5
        })
          , Xr = Dr({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5
        })
          , ei = Dr({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5
        });
        var ti = Object.freeze({
            __proto__: null,
            base32: Fr,
            base32upper: Gr,
            base32pad: Qr,
            base32padupper: Jr,
            base32hex: Yr,
            base32hexupper: $r,
            base32hexpad: Zr,
            base32hexpadupper: Xr,
            base32z: ei
        });
        const ni = jr({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        })
          , ri = jr({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        var ii = Object.freeze({
            __proto__: null,
            base36: ni,
            base36upper: ri
        });
        const si = jr({
            name: "base58btc",
            prefix: "z",
            alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        })
          , oi = jr({
            name: "base58flickr",
            prefix: "Z",
            alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        });
        var ai = Object.freeze({
            __proto__: null,
            base58btc: si,
            base58flickr: oi
        });
        const ci = Dr({
            prefix: "m",
            name: "base64",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6
        })
          , ui = Dr({
            prefix: "M",
            name: "base64pad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6
        })
          , hi = Dr({
            prefix: "u",
            name: "base64url",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6
        })
          , li = Dr({
            prefix: "U",
            name: "base64urlpad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6
        });
        var pi = Object.freeze({
            __proto__: null,
            base64: ci,
            base64pad: ui,
            base64url: hi,
            base64urlpad: li
        });
        const fi = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42")
          , di = fi.reduce(((e,t,n)=>(e[n] = t,
        e)), [])
          , gi = fi.reduce(((e,t,n)=>(e[t.codePointAt(0)] = n,
        e)), []);
        const vi = Cr({
            prefix: "\ud83d\ude80",
            name: "base256emoji",
            encode: function(e) {
                return e.reduce(((e,t)=>e += di[t]), "")
            },
            decode: function(e) {
                const t = [];
                for (const n of e) {
                    const e = gi[n.codePointAt(0)];
                    if (void 0 === e)
                        throw new Error("Non-base256emoji character: ".concat(n));
                    t.push(e)
                }
                return new Uint8Array(t)
            }
        });
        var yi = Object.freeze({
            __proto__: null,
            base256emoji: vi
        })
          , mi = function e(t, n, r) {
            n = n || [];
            for (var i = r = r || 0; t >= _i; )
                n[r++] = 255 & t | wi,
                t /= 128;
            for (; t & bi; )
                n[r++] = 255 & t | wi,
                t >>>= 7;
            return n[r] = 0 | t,
            e.bytes = r - i + 1,
            n
        }
          , wi = 128
          , bi = -128
          , _i = Math.pow(2, 31);
        var Ei = function e(t, n) {
            var r, i = 0, s = (n = n || 0,
            0), o = n, a = t.length;
            do {
                if (o >= a)
                    throw e.bytes = 0,
                    new RangeError("Could not decode varint");
                r = t[o++],
                i += s < 28 ? (r & Pi) << s : (r & Pi) * Math.pow(2, s),
                s += 7
            } while (r >= Ii);
            return e.bytes = o - n,
            i
        }
          , Ii = 128
          , Pi = 127;
        var Si = Math.pow(2, 7)
          , Oi = Math.pow(2, 14)
          , Ri = Math.pow(2, 21)
          , Ai = Math.pow(2, 28)
          , xi = Math.pow(2, 35)
          , Ni = Math.pow(2, 42)
          , Ti = Math.pow(2, 49)
          , Ci = Math.pow(2, 56)
          , ji = Math.pow(2, 63)
          , Di = {
            encode: mi,
            decode: Ei,
            encodingLength: function(e) {
                return e < Si ? 1 : e < Oi ? 2 : e < Ri ? 3 : e < Ai ? 4 : e < xi ? 5 : e < Ni ? 6 : e < Ti ? 7 : e < Ci ? 8 : e < ji ? 9 : 10
            }
        }
          , Li = Di;
        const Mi = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return Li.encode(e, t, n),
            t
        }
          , Ui = e=>Li.encodingLength(e)
          , ki = (e,t)=>{
            const n = t.byteLength
              , r = Ui(e)
              , i = r + Ui(n)
              , s = new Uint8Array(i + n);
            return Mi(e, s, 0),
            Mi(n, s, r),
            s.set(t, i),
            new qi(e,n,t,s)
        }
        ;
        class qi {
            constructor(e, t, n, r) {
                this.code = e,
                this.size = t,
                this.digest = n,
                this.bytes = r
            }
        }
        const zi = e=>{
            let {name: t, code: n, encode: r} = e;
            return new Hi(t,n,r)
        }
        ;
        class Hi {
            constructor(e, t, n) {
                this.name = e,
                this.code = t,
                this.encode = n
            }
            digest(e) {
                if (e instanceof Uint8Array) {
                    const t = this.encode(e);
                    return t instanceof Uint8Array ? ki(this.code, t) : t.then((e=>ki(this.code, e)))
                }
                throw Error("Unknown type, must be binary type")
            }
        }
        const Vi = e=>async t=>new Uint8Array(await crypto.subtle.digest(e, t))
          , Ki = zi({
            name: "sha2-256",
            code: 18,
            encode: Vi("SHA-256")
        })
          , Bi = zi({
            name: "sha2-512",
            code: 19,
            encode: Vi("SHA-512")
        });
        Object.freeze({
            __proto__: null,
            sha256: Ki,
            sha512: Bi
        });
        const Wi = Or
          , Fi = {
            code: 0,
            name: "identity",
            encode: Wi,
            digest: e=>ki(0, Wi(e))
        };
        Object.freeze({
            __proto__: null,
            identity: Fi
        });
        new TextEncoder,
        new TextDecoder;
        const Gi = {
            ...Mr,
            ...kr,
            ...zr,
            ...Vr,
            ...Wr,
            ...ti,
            ...ii,
            ...ai,
            ...pi,
            ...yi
        };
        function Qi(e) {
            return null != globalThis.Buffer ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : e
        }
        function Ji(e, t, n, r) {
            return {
                name: e,
                prefix: t,
                encoder: {
                    name: e,
                    prefix: t,
                    encode: n
                },
                decoder: {
                    decode: r
                }
            }
        }
        const Yi = Ji("utf8", "u", (e=>"u" + new TextDecoder("utf8").decode(e)), (e=>(new TextEncoder).encode(e.substring(1))))
          , $i = Ji("ascii", "a", (e=>{
            let t = "a";
            for (let n = 0; n < e.length; n++)
                t += String.fromCharCode(e[n]);
            return t
        }
        ), (e=>{
            const t = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Qi(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }((e = e.substring(1)).length);
            for (let n = 0; n < e.length; n++)
                t[n] = e.charCodeAt(n);
            return t
        }
        ))
          , Zi = {
            utf8: Yi,
            "utf-8": Yi,
            hex: Gi.base16,
            latin1: $i,
            ascii: $i,
            binary: $i,
            ...Gi
        };
        const Xi = "core"
          , es = "".concat("wc", "@2:").concat(Xi, ":")
          , ts = "error"
          , ns = {
            database: ":memory:"
        }
          , rs = "client_ed25519_seed"
          , is = l.ONE_DAY
          , ss = l.SIX_HOURS
          , os = "wss://relay.walletconnect.com"
          , as = "wss://relay.walletconnect.org"
          , cs = "relayer_message"
          , us = "relayer_message_ack"
          , hs = "relayer_connect"
          , ls = "relayer_disconnect"
          , ps = "relayer_error"
          , fs = "relayer_connection_stalled"
          , ds = "relayer_publish"
          , gs = "payload"
          , vs = "connect"
          , ys = "disconnect"
          , ms = "error"
          , ws = l.ONE_SECOND
          , bs = "subscription_created"
          , _s = "subscription_deleted"
          , Es = "subscription_sync"
          , Is = "subscription_resubscribed"
          , Ps = 1e3 * l.FIVE_SECONDS
          , Ss = {
            wc_pairingDelete: {
                req: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 1e3
                },
                res: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 1001
                }
            },
            wc_pairingPing: {
                req: {
                    ttl: l.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1002
                },
                res: {
                    ttl: l.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1003
                }
            },
            unregistered_method: {
                req: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 0
                },
                res: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 0
                }
            }
        }
          , Os = "pairing_create"
          , Rs = "pairing_expire"
          , As = "pairing_delete"
          , xs = "pairing_ping"
          , Ns = "history_created"
          , Ts = "history_updated"
          , Cs = "history_deleted"
          , js = "history_sync"
          , Ds = "expirer_created"
          , Ls = "expirer_deleted"
          , Ms = "expirer_expired"
          , Us = "expirer_sync"
          , ks = "verify-api"
          , qs = "https://verify.walletconnect.com"
          , zs = "https://verify.walletconnect.org"
          , Hs = [qs, zs];
        class Vs {
            constructor(e, t) {
                this.core = e,
                this.logger = t,
                this.keychain = new Map,
                this.name = "keychain",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = es,
                this.init = async()=>{
                    if (!this.initialized) {
                        const e = await this.getKeyChain();
                        typeof e < "u" && (this.keychain = e),
                        this.initialized = !0
                    }
                }
                ,
                this.has = e=>(this.isInitialized(),
                this.keychain.has(e)),
                this.set = async(e,t)=>{
                    this.isInitialized(),
                    this.keychain.set(e, t),
                    await this.persist()
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    const t = this.keychain.get(e);
                    if (typeof t > "u") {
                        const {message: t} = gn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw new Error(t)
                    }
                    return t
                }
                ,
                this.del = async e=>{
                    this.isInitialized(),
                    this.keychain.delete(e),
                    await this.persist()
                }
                ,
                this.core = e,
                this.logger = ge(t, this.name)
            }
            get context() {
                return de(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            async setKeyChain(e) {
                await this.core.storage.setItem(this.storageKey, Vt(e))
            }
            async getKeyChain() {
                const e = await this.core.storage.getItem(this.storageKey);
                return typeof e < "u" ? Kt(e) : void 0
            }
            async persist() {
                await this.setKeyChain(this.keychain)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class Ks {
            constructor(e, t, n) {
                this.core = e,
                this.logger = t,
                this.name = "crypto",
                this.initialized = !1,
                this.init = async()=>{
                    this.initialized || (await this.keychain.init(),
                    this.initialized = !0)
                }
                ,
                this.hasKeys = e=>(this.isInitialized(),
                this.keychain.has(e)),
                this.getClientId = async()=>{
                    this.isInitialized();
                    return Be(We(await this.getClientSeed()).publicKey)
                }
                ,
                this.generateKeyPair = ()=>{
                    this.isInitialized();
                    const e = function() {
                        const e = u.TZ();
                        return {
                            privateKey: (0,
                            h.dI)(e.secretKey, ht),
                            publicKey: (0,
                            h.dI)(e.publicKey, ht)
                        }
                    }();
                    return this.setPrivateKey(e.publicKey, e.privateKey)
                }
                ,
                this.signJWT = async e=>{
                    this.isInitialized();
                    const t = We(await this.getClientSeed())
                      , n = wt()
                      , r = is;
                    return await Fe(n, e, r, t)
                }
                ,
                this.generateSharedKey = (e,t,n)=>{
                    this.isInitialized();
                    const r = function(e, t) {
                        const n = u.Tc((0,
                        h.sH)(e, ht), (0,
                        h.sH)(t, ht), !0)
                          , r = new o.i(c.aD,n).expand(mt);
                        return (0,
                        h.dI)(r, ht)
                    }(this.getPrivateKey(e), t);
                    return this.setSymKey(r, n)
                }
                ,
                this.setSymKey = async(e,t)=>{
                    this.isInitialized();
                    const n = t || function(e) {
                        const t = (0,
                        c.tW)((0,
                        h.sH)(e, ht));
                        return (0,
                        h.dI)(t, ht)
                    }(e);
                    return await this.keychain.set(n, e),
                    n
                }
                ,
                this.deleteKeyPair = async e=>{
                    this.isInitialized(),
                    await this.keychain.del(e)
                }
                ,
                this.deleteSymKey = async e=>{
                    this.isInitialized(),
                    await this.keychain.del(e)
                }
                ,
                this.encode = async(e,t,n)=>{
                    this.isInitialized();
                    const r = Pt(n)
                      , i = B(t);
                    if (St(r)) {
                        const t = r.senderPublicKey
                          , n = r.receiverPublicKey;
                        e = await this.generateSharedKey(t, n)
                    }
                    const s = this.getSymKey(e)
                      , {type: o, senderPublicKey: a} = r;
                    return Et({
                        type: o,
                        symKey: s,
                        message: i,
                        senderPublicKey: a
                    })
                }
                ,
                this.decode = async(e,t,n)=>{
                    this.isInitialized();
                    const r = function(e, t) {
                        const n = It(e);
                        return Pt({
                            type: _t(n.type),
                            senderPublicKey: typeof n.senderPublicKey < "u" ? (0,
                            h.dI)(n.senderPublicKey, ht) : void 0,
                            receiverPublicKey: null === t || void 0 === t ? void 0 : t.receiverPublicKey
                        })
                    }(t, n);
                    if (St(r)) {
                        const t = r.receiverPublicKey
                          , n = r.senderPublicKey;
                        e = await this.generateSharedKey(t, n)
                    }
                    try {
                        const n = function(e) {
                            const t = new s.g6((0,
                            h.sH)(e.symKey, ht))
                              , {sealed: n, iv: r} = It(e.encoded)
                              , i = t.open(r, n);
                            if (null === i)
                                throw new Error("Failed to decrypt");
                            return (0,
                            h.dI)(i, pt)
                        }({
                            symKey: this.getSymKey(e),
                            encoded: t
                        });
                        return K(n)
                    } catch (i) {
                        this.logger.error("Failed to decode message from topic: '".concat(e, "', clientId: '").concat(await this.getClientId(), "'")),
                        this.logger.error(i)
                    }
                }
                ,
                this.getPayloadType = e=>_t(It(e).type),
                this.getPayloadSenderPublicKey = e=>{
                    const t = It(e);
                    return t.senderPublicKey ? (0,
                    h.dI)(t.senderPublicKey, ht) : void 0
                }
                ,
                this.core = e,
                this.logger = ge(t, this.name),
                this.keychain = n || new Vs(this.core,this.logger)
            }
            get context() {
                return de(this.logger)
            }
            async setPrivateKey(e, t) {
                return await this.keychain.set(e, t),
                e
            }
            getPrivateKey(e) {
                return this.keychain.get(e)
            }
            async getClientSeed() {
                let e = "";
                try {
                    e = this.keychain.get(rs)
                } catch {
                    e = wt(),
                    await this.keychain.set(rs, e)
                }
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                    const n = Zi[t];
                    if (!n)
                        throw new Error('Unsupported encoding "'.concat(t, '"'));
                    return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? n.decoder.decode("".concat(n.prefix).concat(e)) : Qi(globalThis.Buffer.from(e, "utf-8"))
                }(e, "base16")
            }
            getSymKey(e) {
                return this.keychain.get(e)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class Bs extends we {
            constructor(e, t) {
                super(e, t),
                this.logger = e,
                this.core = t,
                this.messages = new Map,
                this.name = "messages",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = es,
                this.init = async()=>{
                    if (!this.initialized) {
                        this.logger.trace("Initialized");
                        try {
                            const e = await this.getRelayerMessages();
                            typeof e < "u" && (this.messages = e),
                            this.logger.debug("Successfully Restored records for ".concat(this.name)),
                            this.logger.trace({
                                type: "method",
                                method: "restore",
                                size: this.messages.size
                            })
                        } catch (le) {
                            this.logger.debug("Failed to Restore records for ".concat(this.name)),
                            this.logger.error(le)
                        } finally {
                            this.initialized = !0
                        }
                    }
                }
                ,
                this.set = async(e,t)=>{
                    this.isInitialized();
                    const n = bt(t);
                    let r = this.messages.get(e);
                    return typeof r > "u" && (r = {}),
                    typeof r[n] < "u" || (r[n] = t,
                    this.messages.set(e, r),
                    await this.persist()),
                    n
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    let t = this.messages.get(e);
                    return typeof t > "u" && (t = {}),
                    t
                }
                ,
                this.has = (e,t)=>{
                    this.isInitialized();
                    return typeof this.get(e)[bt(t)] < "u"
                }
                ,
                this.del = async e=>{
                    this.isInitialized(),
                    this.messages.delete(e),
                    await this.persist()
                }
                ,
                this.logger = ge(e, this.name),
                this.core = t
            }
            get context() {
                return de(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            async setRelayerMessages(e) {
                await this.core.storage.setItem(this.storageKey, Vt(e))
            }
            async getRelayerMessages() {
                const e = await this.core.storage.getItem(this.storageKey);
                return typeof e < "u" ? Kt(e) : void 0
            }
            async persist() {
                await this.setRelayerMessages(this.messages)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class Ws extends be {
            constructor(e, t) {
                super(e, t),
                this.relayer = e,
                this.logger = t,
                this.events = new r.EventEmitter,
                this.name = "publisher",
                this.queue = new Map,
                this.publishTimeout = (0,
                l.toMiliseconds)(l.TEN_SECONDS),
                this.needsTransportRestart = !1,
                this.publish = async(e,t,n)=>{
                    var r;
                    this.logger.debug("Publishing Payload"),
                    this.logger.trace({
                        type: "method",
                        method: "publish",
                        params: {
                            topic: e,
                            message: t,
                            opts: n
                        }
                    });
                    try {
                        const s = (null === n || void 0 === n ? void 0 : n.ttl) || ss
                          , o = Zt(n)
                          , a = (null === n || void 0 === n ? void 0 : n.prompt) || !1
                          , c = (null === n || void 0 === n ? void 0 : n.tag) || 0
                          , u = (null === n || void 0 === n ? void 0 : n.id) || er().toString()
                          , h = {
                            topic: e,
                            message: t,
                            opts: {
                                ttl: s,
                                relay: o,
                                prompt: a,
                                tag: c,
                                id: u
                            }
                        }
                          , l = setTimeout((()=>this.queue.set(u, h)), this.publishTimeout);
                        try {
                            await await Wt(this.rpcPublish(e, t, s, o, a, c, u), this.publishTimeout, "Failed to publish payload, please try again."),
                            this.removeRequestFromQueue(u),
                            this.relayer.events.emit(ds, h)
                        } catch (i) {
                            if (this.logger.debug("Publishing Payload stalled"),
                            this.needsTransportRestart = !0,
                            null != (r = null === n || void 0 === n ? void 0 : n.internal) && r.throwOnFailedPublish)
                                throw this.removeRequestFromQueue(u),
                                i;
                            return
                        } finally {
                            clearTimeout(l)
                        }
                        this.logger.debug("Successfully Published Payload"),
                        this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: n
                            }
                        })
                    } catch (we) {
                        throw this.logger.debug("Failed to Publish Payload"),
                        this.logger.error(we),
                        we
                    }
                }
                ,
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.relayer = e,
                this.logger = ge(t, this.name),
                this.registerEventListeners()
            }
            get context() {
                return de(this.logger)
            }
            rpcPublish(e, t, n, r, i, s, o) {
                var a, c, u, h;
                const l = {
                    method: Xt(r.protocol).publish,
                    params: {
                        topic: e,
                        message: t,
                        ttl: n,
                        prompt: i,
                        tag: s
                    },
                    id: o
                };
                return wn(null == (a = l.params) ? void 0 : a.prompt) && (null == (c = l.params) || delete c.prompt),
                wn(null == (u = l.params) ? void 0 : u.tag) && (null == (h = l.params) || delete h.tag),
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "message",
                    direction: "outgoing",
                    request: l
                }),
                this.relayer.request(l)
            }
            removeRequestFromQueue(e) {
                this.queue.delete(e)
            }
            checkQueue() {
                this.queue.forEach((async e=>{
                    const {topic: t, message: n, opts: r} = e;
                    await this.publish(t, n, r)
                }
                ))
            }
            registerEventListeners() {
                this.relayer.core.heartbeat.on(X.HEARTBEAT_EVENTS.pulse, (()=>{
                    if (this.needsTransportRestart)
                        return this.needsTransportRestart = !1,
                        void this.relayer.events.emit(fs);
                    this.checkQueue()
                }
                )),
                this.relayer.on(us, (e=>{
                    this.removeRequestFromQueue(e.id.toString())
                }
                ))
            }
        }
        class Fs {
            constructor() {
                this.map = new Map,
                this.set = (e,t)=>{
                    const n = this.get(e);
                    this.exists(e, t) || this.map.set(e, [...n, t])
                }
                ,
                this.get = e=>this.map.get(e) || [],
                this.exists = (e,t)=>this.get(e).includes(t),
                this.delete = (e,t)=>{
                    if (typeof t > "u")
                        return void this.map.delete(e);
                    if (!this.map.has(e))
                        return;
                    const n = this.get(e);
                    if (!this.exists(e, t))
                        return;
                    const r = n.filter((e=>e !== t));
                    r.length ? this.map.set(e, r) : this.map.delete(e)
                }
                ,
                this.clear = ()=>{
                    this.map.clear()
                }
            }
            get topics() {
                return Array.from(this.map.keys())
            }
        }
        var Gs = Object.defineProperty
          , Qs = Object.defineProperties
          , Js = Object.getOwnPropertyDescriptors
          , Ys = Object.getOwnPropertySymbols
          , $s = Object.prototype.hasOwnProperty
          , Zs = Object.prototype.propertyIsEnumerable
          , Xs = (e,t,n)=>t in e ? Gs(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , eo = (e,t)=>{
            for (var n in t || (t = {}))
                $s.call(t, n) && Xs(e, n, t[n]);
            if (Ys)
                for (var n of Ys(t))
                    Zs.call(t, n) && Xs(e, n, t[n]);
            return e
        }
          , to = (e,t)=>Qs(e, Js(t));
        class no extends Ie {
            constructor(e, t) {
                super(e, t),
                this.relayer = e,
                this.logger = t,
                this.subscriptions = new Map,
                this.topicMap = new Fs,
                this.events = new r.EventEmitter,
                this.name = "subscription",
                this.version = "0.3",
                this.pending = new Map,
                this.cached = [],
                this.initialized = !1,
                this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
                this.pollingInterval = 20,
                this.storagePrefix = es,
                this.subscribeTimeout = 1e4,
                this.restartInProgress = !1,
                this.batchSubscribeTopicsLimit = 500,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    this.registerEventListeners(),
                    this.clientId = await this.relayer.core.crypto.getClientId())
                }
                ,
                this.subscribe = async(e,t)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    this.logger.debug("Subscribing Topic"),
                    this.logger.trace({
                        type: "method",
                        method: "subscribe",
                        params: {
                            topic: e,
                            opts: t
                        }
                    });
                    try {
                        const n = Zt(t)
                          , r = {
                            topic: e,
                            relay: n
                        };
                        this.pending.set(e, r);
                        const i = await this.rpcSubscribe(e, n);
                        return this.onSubscribe(i, r),
                        this.logger.debug("Successfully Subscribed Topic"),
                        this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        }),
                        i
                    } catch (re) {
                        throw this.logger.debug("Failed to Subscribe Topic"),
                        this.logger.error(re),
                        re
                    }
                }
                ,
                this.unsubscribe = async(e,t)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    typeof (null === t || void 0 === t ? void 0 : t.id) < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                }
                ,
                this.isSubscribed = async e=>!!this.topics.includes(e) || await new Promise(((t,n)=>{
                    const r = new l.Watch;
                    r.start(this.pendingSubscriptionWatchLabel);
                    const i = setInterval((()=>{
                        !this.pending.has(e) && this.topics.includes(e) && (clearInterval(i),
                        r.stop(this.pendingSubscriptionWatchLabel),
                        t(!0)),
                        r.elapsed(this.pendingSubscriptionWatchLabel) >= Ps && (clearInterval(i),
                        r.stop(this.pendingSubscriptionWatchLabel),
                        n(new Error("Subscription resolution timeout")))
                    }
                    ), this.pollingInterval)
                }
                )).catch((()=>!1)),
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.restart = async()=>{
                    this.restartInProgress = !0,
                    await this.restore(),
                    await this.reset(),
                    this.restartInProgress = !1
                }
                ,
                this.relayer = e,
                this.logger = ge(t, this.name),
                this.clientId = ""
            }
            get context() {
                return de(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.subscriptions.size
            }
            get ids() {
                return Array.from(this.subscriptions.keys())
            }
            get values() {
                return Array.from(this.subscriptions.values())
            }
            get topics() {
                return this.topicMap.topics
            }
            hasSubscription(e, t) {
                let n = !1;
                try {
                    n = this.getSubscription(e).topic === t
                } catch {}
                return n
            }
            onEnable() {
                this.cached = [],
                this.initialized = !0
            }
            onDisable() {
                this.cached = this.values,
                this.subscriptions.clear(),
                this.topicMap.clear()
            }
            async unsubscribeByTopic(e, t) {
                const n = this.topicMap.get(e);
                await Promise.all(n.map((async n=>await this.unsubscribeById(e, n, t))))
            }
            async unsubscribeById(e, t, n) {
                this.logger.debug("Unsubscribing Topic"),
                this.logger.trace({
                    type: "method",
                    method: "unsubscribe",
                    params: {
                        topic: e,
                        id: t,
                        opts: n
                    }
                });
                try {
                    const r = Zt(n);
                    await this.rpcUnsubscribe(e, t, r);
                    const i = vn("USER_DISCONNECTED", "".concat(this.name, ", ").concat(e));
                    await this.onUnsubscribe(e, t, i),
                    this.logger.debug("Successfully Unsubscribed Topic"),
                    this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: n
                        }
                    })
                } catch (r) {
                    throw this.logger.debug("Failed to Unsubscribe Topic"),
                    this.logger.error(r),
                    r
                }
            }
            async rpcSubscribe(e, t) {
                const n = {
                    method: Xt(t.protocol).subscribe,
                    params: {
                        topic: e
                    }
                };
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: n
                });
                try {
                    await await Wt(this.relayer.request(n), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                    this.relayer.events.emit(fs)
                }
                return bt(e + this.clientId)
            }
            async rpcBatchSubscribe(e) {
                if (!e.length)
                    return;
                const t = {
                    method: Xt(e[0].relay.protocol).batchSubscribe,
                    params: {
                        topics: e.map((e=>e.topic))
                    }
                };
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: t
                });
                try {
                    return await await Wt(this.relayer.request(t), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Payload stalled"),
                    this.relayer.events.emit(fs)
                }
            }
            rpcUnsubscribe(e, t, n) {
                const r = {
                    method: Xt(n.protocol).unsubscribe,
                    params: {
                        topic: e,
                        id: t
                    }
                };
                return this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: r
                }),
                this.relayer.request(r)
            }
            onSubscribe(e, t) {
                this.setSubscription(e, to(eo({}, t), {
                    id: e
                })),
                this.pending.delete(t.topic)
            }
            onBatchSubscribe(e) {
                e.length && e.forEach((e=>{
                    this.setSubscription(e.id, eo({}, e)),
                    this.pending.delete(e.topic)
                }
                ))
            }
            async onUnsubscribe(e, t, n) {
                this.events.removeAllListeners(t),
                this.hasSubscription(t, e) && this.deleteSubscription(t, n),
                await this.relayer.messages.del(e)
            }
            async setRelayerSubscriptions(e) {
                await this.relayer.core.storage.setItem(this.storageKey, e)
            }
            async getRelayerSubscriptions() {
                return await this.relayer.core.storage.getItem(this.storageKey)
            }
            setSubscription(e, t) {
                this.subscriptions.has(e) || (this.logger.debug("Setting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "setSubscription",
                    id: e,
                    subscription: t
                }),
                this.addSubscription(e, t))
            }
            addSubscription(e, t) {
                this.subscriptions.set(e, eo({}, t)),
                this.topicMap.set(t.topic, e),
                this.events.emit(bs, t)
            }
            getSubscription(e) {
                this.logger.debug("Getting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "getSubscription",
                    id: e
                });
                const t = this.subscriptions.get(e);
                if (!t) {
                    const {message: t} = gn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                    throw new Error(t)
                }
                return t
            }
            deleteSubscription(e, t) {
                this.logger.debug("Deleting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "deleteSubscription",
                    id: e,
                    reason: t
                });
                const n = this.getSubscription(e);
                this.subscriptions.delete(e),
                this.topicMap.delete(n.topic, e),
                this.events.emit(_s, to(eo({}, n), {
                    reason: t
                }))
            }
            async persist() {
                await this.setRelayerSubscriptions(this.values),
                this.events.emit(Es)
            }
            async reset() {
                if (this.cached.length) {
                    const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                    for (let t = 0; t < e; t++) {
                        const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                        await this.batchSubscribe(e)
                    }
                }
                this.events.emit(Is)
            }
            async restore() {
                try {
                    const e = await this.getRelayerSubscriptions();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.subscriptions.size) {
                        const {message: e} = gn("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        this.logger.error("".concat(this.name, ": ").concat(JSON.stringify(this.values))),
                        new Error(e)
                    }
                    this.cached = e,
                    this.logger.debug("Successfully Restored subscriptions for ".concat(this.name)),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        subscriptions: this.values
                    })
                } catch (sr) {
                    this.logger.debug("Failed to Restore subscriptions for ".concat(this.name)),
                    this.logger.error(sr)
                }
            }
            async batchSubscribe(e) {
                if (!e.length)
                    return;
                const t = await this.rpcBatchSubscribe(e);
                yn(t) && this.onBatchSubscribe(t.map(((t,n)=>to(eo({}, e[n]), {
                    id: t
                }))))
            }
            async onConnect() {
                this.restartInProgress || (await this.restart(),
                this.onEnable())
            }
            onDisconnect() {
                this.onDisable()
            }
            async checkPending() {
                if (!this.initialized || this.relayer.transportExplicitlyClosed)
                    return;
                const e = [];
                this.pending.forEach((t=>{
                    e.push(t)
                }
                )),
                await this.batchSubscribe(e)
            }
            registerEventListeners() {
                this.relayer.core.heartbeat.on(X.HEARTBEAT_EVENTS.pulse, (async()=>{
                    await this.checkPending()
                }
                )),
                this.relayer.on(hs, (async()=>{
                    await this.onConnect()
                }
                )),
                this.relayer.on(ls, (()=>{
                    this.onDisconnect()
                }
                )),
                this.events.on(bs, (async e=>{
                    const t = bs;
                    this.logger.info("Emitting ".concat(t)),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    await this.persist()
                }
                )),
                this.events.on(_s, (async e=>{
                    const t = _s;
                    this.logger.info("Emitting ".concat(t)),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    await this.persist()
                }
                ))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
            async restartToComplete() {
                this.restartInProgress && await new Promise((e=>{
                    const t = setInterval((()=>{
                        this.restartInProgress || (clearInterval(t),
                        e())
                    }
                    ), this.pollingInterval)
                }
                ))
            }
        }
        var ro = Object.defineProperty
          , io = Object.getOwnPropertySymbols
          , so = Object.prototype.hasOwnProperty
          , oo = Object.prototype.propertyIsEnumerable
          , ao = (e,t,n)=>t in e ? ro(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        class co extends _e {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.events = new r.EventEmitter,
                this.name = "relayer",
                this.transportExplicitlyClosed = !1,
                this.initialized = !1,
                this.connectionAttemptInProgress = !1,
                this.connectionStatusPollingInterval = 20,
                this.staleConnectionErrors = ["socket hang up", "socket stalled"],
                this.hasExperiencedNetworkDisruption = !1,
                this.request = async e=>{
                    this.logger.debug("Publishing Request Payload");
                    try {
                        return await this.toEstablishConnection(),
                        await this.provider.request(e)
                    } catch (le) {
                        throw this.logger.debug("Failed to Publish Request"),
                        this.logger.error(le),
                        le
                    }
                }
                ,
                this.onPayloadHandler = e=>{
                    this.onProviderPayload(e)
                }
                ,
                this.onConnectHandler = ()=>{
                    this.events.emit(hs)
                }
                ,
                this.onDisconnectHandler = ()=>{
                    this.onProviderDisconnect()
                }
                ,
                this.onProviderErrorHandler = e=>{
                    this.logger.error(e),
                    this.events.emit(ps, e),
                    this.logger.info("Fatal socket error received, closing transport"),
                    this.transportClose()
                }
                ,
                this.registerProviderListeners = ()=>{
                    this.provider.on(gs, this.onPayloadHandler),
                    this.provider.on(vs, this.onConnectHandler),
                    this.provider.on(ys, this.onDisconnectHandler),
                    this.provider.on(ms, this.onProviderErrorHandler)
                }
                ,
                this.core = e.core,
                this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? ge(e.logger, this.name) : te()(fe({
                    level: e.logger || "error"
                })),
                this.messages = new Bs(this.logger,e.core),
                this.subscriber = new no(this,this.logger),
                this.publisher = new Ws(this,this.logger),
                this.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || os,
                this.projectId = e.projectId,
                this.bundleId = function() {
                    var e;
                    try {
                        return Mt() && typeof n.g < "u" && typeof (null == n.g ? void 0 : n.g.Application) < "u" ? null == (e = n.g.Application) ? void 0 : e.applicationId : void 0
                    } catch {
                        return
                    }
                }(),
                this.provider = {}
            }
            async init() {
                this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.createProvider(),
                await Promise.all([this.messages.init(), this.subscriber.init()]);
                try {
                    await this.transportOpen()
                } catch {
                    this.logger.warn("Connection via ".concat(this.relayUrl, " failed, attempting to connect via failover domain ").concat(as, "...")),
                    await this.restartTransport(as)
                }
                this.initialized = !0,
                setTimeout((async()=>{
                    0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"),
                    await this.transportClose(),
                    this.transportExplicitlyClosed = !1)
                }
                ), 1e4)
            }
            get context() {
                return de(this.logger)
            }
            get connected() {
                return this.provider.connection.connected
            }
            get connecting() {
                return this.provider.connection.connecting
            }
            async publish(e, t, n) {
                this.isInitialized(),
                await this.publisher.publish(e, t, n),
                await this.recordMessageEvent({
                    topic: e,
                    message: t,
                    publishedAt: Date.now()
                })
            }
            async subscribe(e, t) {
                var n;
                this.isInitialized();
                let r, i = (null == (n = this.subscriber.topicMap.get(e)) ? void 0 : n[0]) || "";
                if (i)
                    return i;
                const s = t=>{
                    t.topic === e && (this.subscriber.off(bs, s),
                    r())
                }
                ;
                return await Promise.all([new Promise((e=>{
                    r = e,
                    this.subscriber.on(bs, s)
                }
                )), new Promise((async n=>{
                    i = await this.subscriber.subscribe(e, t),
                    n()
                }
                ))]),
                i
            }
            async unsubscribe(e, t) {
                this.isInitialized(),
                await this.subscriber.unsubscribe(e, t)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            async transportClose() {
                this.transportExplicitlyClosed = !0,
                this.hasExperiencedNetworkDisruption && this.connected ? await Wt(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((()=>this.onProviderDisconnect())) : this.connected && await this.provider.disconnect()
            }
            async transportOpen(e) {
                if (this.transportExplicitlyClosed = !1,
                await this.confirmOnlineStateOrThrow(),
                !this.connectionAttemptInProgress) {
                    e && e !== this.relayUrl && (this.relayUrl = e,
                    await this.transportClose(),
                    await this.createProvider()),
                    this.connectionAttemptInProgress = !0;
                    try {
                        await Promise.all([new Promise((e=>{
                            if (!this.initialized)
                                return e();
                            this.subscriber.once(Is, (()=>{
                                e()
                            }
                            ))
                        }
                        )), new Promise((async(e,t)=>{
                            try {
                                await Wt(this.provider.connect(), 1e4, "Socket stalled when trying to connect to ".concat(this.relayUrl))
                            } catch (n) {
                                return void t(n)
                            }
                            e()
                        }
                        ))])
                    } catch (t) {
                        this.logger.error(t);
                        const e = t;
                        if (!this.isConnectionStalled(e.message))
                            throw t;
                        this.provider.events.emit(ys)
                    } finally {
                        this.connectionAttemptInProgress = !1,
                        this.hasExperiencedNetworkDisruption = !1
                    }
                }
            }
            async restartTransport(e) {
                await this.confirmOnlineStateOrThrow(),
                !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl,
                await this.transportClose(),
                await this.createProvider(),
                await this.transportOpen())
            }
            async confirmOnlineStateOrThrow() {
                if (!await Ln())
                    throw new Error("No internet connection detected. Please restart your network and try again.")
            }
            isConnectionStalled(e) {
                return this.staleConnectionErrors.some((t=>e.includes(t)))
            }
            async createProvider() {
                this.provider.connection && this.unregisterProviderListeners();
                const e = await this.core.crypto.signJWT(this.relayUrl);
                this.provider = new vr(new wr(zt({
                    sdkVersion: "2.11.0",
                    protocol: this.protocol,
                    version: this.version,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId,
                    auth: e,
                    useOnCloseEvent: !0,
                    bundleId: this.bundleId
                }))),
                this.registerProviderListeners()
            }
            async recordMessageEvent(e) {
                const {topic: t, message: n} = e;
                await this.messages.set(t, n)
            }
            async shouldIgnoreMessageEvent(e) {
                const {topic: t, message: n} = e;
                if (!n || 0 === n.length)
                    return this.logger.debug("Ignoring invalid/empty message: ".concat(n)),
                    !0;
                if (!await this.subscriber.isSubscribed(t))
                    return this.logger.debug("Ignoring message for non-subscribed topic ".concat(t)),
                    !0;
                const r = this.messages.has(t, n);
                return r && this.logger.debug("Ignoring duplicate message: ".concat(n)),
                r
            }
            async onProviderPayload(e) {
                if (this.logger.debug("Incoming Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "incoming",
                    payload: e
                }),
                pr(e)) {
                    if (!e.method.endsWith("_subscription"))
                        return;
                    const t = e.params
                      , {topic: n, message: r, publishedAt: i} = t.data
                      , s = {
                        topic: n,
                        message: r,
                        publishedAt: i
                    };
                    this.logger.debug("Emitting Relayer Payload"),
                    this.logger.trace(((e,t)=>{
                        for (var n in t || (t = {}))
                            so.call(t, n) && ao(e, n, t[n]);
                        if (io)
                            for (var n of io(t))
                                oo.call(t, n) && ao(e, n, t[n]);
                        return e
                    }
                    )({
                        type: "event",
                        event: t.id
                    }, s)),
                    this.events.emit(t.id, s),
                    await this.acknowledgePayload(e),
                    await this.onMessageEvent(s)
                } else
                    fr(e) && this.events.emit(us, e)
            }
            async onMessageEvent(e) {
                await this.shouldIgnoreMessageEvent(e) || (this.events.emit(cs, e),
                await this.recordMessageEvent(e))
            }
            async acknowledgePayload(e) {
                const t = nr(e.id, !0);
                await this.provider.connection.send(t)
            }
            unregisterProviderListeners() {
                this.provider.off(gs, this.onPayloadHandler),
                this.provider.off(vs, this.onConnectHandler),
                this.provider.off(ys, this.onDisconnectHandler),
                this.provider.off(ms, this.onProviderErrorHandler)
            }
            async registerEventListeners() {
                this.events.on(fs, (()=>{
                    this.restartTransport().catch((e=>this.logger.error(e)))
                }
                ));
                let e = await Ln();
                Mn((async t=>{
                    this.initialized && e !== t && (e = t,
                    t ? await this.restartTransport().catch((e=>this.logger.error(e))) : (this.hasExperiencedNetworkDisruption = !0,
                    await this.transportClose().catch((e=>this.logger.error(e)))))
                }
                ))
            }
            onProviderDisconnect() {
                this.events.emit(ls),
                this.attemptToReconnect()
            }
            attemptToReconnect() {
                this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
                setTimeout((async()=>{
                    await this.restartTransport().catch((e=>this.logger.error(e)))
                }
                ), (0,
                l.toMiliseconds)(ws)))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
            async toEstablishConnection() {
                if (await this.confirmOnlineStateOrThrow(),
                !this.connected) {
                    if (this.connectionAttemptInProgress)
                        return await new Promise((e=>{
                            const t = setInterval((()=>{
                                this.connected && (clearInterval(t),
                                e())
                            }
                            ), this.connectionStatusPollingInterval)
                        }
                        ));
                    await this.restartTransport()
                }
            }
        }
        var uo = Object.defineProperty
          , ho = Object.getOwnPropertySymbols
          , lo = Object.prototype.hasOwnProperty
          , po = Object.prototype.propertyIsEnumerable
          , fo = (e,t,n)=>t in e ? uo(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , go = (e,t)=>{
            for (var n in t || (t = {}))
                lo.call(t, n) && fo(e, n, t[n]);
            if (ho)
                for (var n of ho(t))
                    po.call(t, n) && fo(e, n, t[n]);
            return e
        }
        ;
        class vo extends Ee {
            constructor(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : es
                  , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                super(e, t, n, r),
                this.core = e,
                this.logger = t,
                this.name = n,
                this.map = new Map,
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = es,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((e=>{
                        this.getKey && null !== e && !wn(e) ? this.map.set(this.getKey(e), e) : function(e) {
                            var t;
                            return null == (t = null === e || void 0 === e ? void 0 : e.proposer) ? void 0 : t.publicKey
                        }(e) ? this.map.set(e.id, e) : function(e) {
                            return null === e || void 0 === e ? void 0 : e.topic
                        }(e) && this.map.set(e.topic, e)
                    }
                    )),
                    this.cached = [],
                    this.initialized = !0)
                }
                ,
                this.set = async(e,t)=>{
                    this.isInitialized(),
                    this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"),
                    this.logger.trace({
                        type: "method",
                        method: "set",
                        key: e,
                        value: t
                    }),
                    this.map.set(e, t),
                    await this.persist())
                }
                ,
                this.get = e=>(this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({
                    type: "method",
                    method: "get",
                    key: e
                }),
                this.getData(e)),
                this.getAll = e=>(this.isInitialized(),
                e ? this.values.filter((t=>Object.keys(e).every((n=>_r()(t[n], e[n]))))) : this.values),
                this.update = async(e,t)=>{
                    this.isInitialized(),
                    this.logger.debug("Updating value"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        key: e,
                        update: t
                    });
                    const n = go(go({}, this.getData(e)), t);
                    this.map.set(e, n),
                    await this.persist()
                }
                ,
                this.delete = async(e,t)=>{
                    this.isInitialized(),
                    this.map.has(e) && (this.logger.debug("Deleting value"),
                    this.logger.trace({
                        type: "method",
                        method: "delete",
                        key: e,
                        reason: t
                    }),
                    this.map.delete(e),
                    await this.persist())
                }
                ,
                this.logger = ge(t, this.name),
                this.storagePrefix = r,
                this.getKey = i
            }
            get context() {
                return de(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.map.size
            }
            get keys() {
                return Array.from(this.map.keys())
            }
            get values() {
                return Array.from(this.map.values())
            }
            async setDataStore(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getDataStore() {
                return await this.core.storage.getItem(this.storageKey)
            }
            getData(e) {
                const t = this.map.get(e);
                if (!t) {
                    const {message: t} = gn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                    throw this.logger.error(t),
                    new Error(t)
                }
                return t
            }
            async persist() {
                await this.setDataStore(this.values)
            }
            async restore() {
                try {
                    const e = await this.getDataStore();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.map.size) {
                        const {message: e} = gn("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        new Error(e)
                    }
                    this.cached = e,
                    this.logger.debug("Successfully Restored value for ".concat(this.name)),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        value: this.values
                    })
                } catch (sr) {
                    this.logger.debug("Failed to Restore value for ".concat(this.name)),
                    this.logger.error(sr)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class yo {
            constructor(e, t) {
                this.core = e,
                this.logger = t,
                this.name = "pairing",
                this.version = "0.3",
                this.events = new (i()),
                this.initialized = !1,
                this.storagePrefix = es,
                this.ignoredPayloadTypes = [dt],
                this.registeredMethods = [],
                this.init = async()=>{
                    this.initialized || (await this.pairings.init(),
                    await this.cleanup(),
                    this.registerRelayerEvents(),
                    this.registerExpirerEvents(),
                    this.initialized = !0,
                    this.logger.trace("Initialized"))
                }
                ,
                this.register = e=>{
                    let {methods: t} = e;
                    this.isInitialized(),
                    this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
                }
                ,
                this.create = async()=>{
                    this.isInitialized();
                    const e = wt()
                      , t = await this.core.crypto.setSymKey(e)
                      , n = Qt(l.FIVE_MINUTES)
                      , r = {
                        protocol: "irn"
                    }
                      , i = {
                        topic: t,
                        expiry: n,
                        relay: r,
                        active: !1
                    }
                      , s = un({
                        protocol: this.core.protocol,
                        version: this.core.version,
                        topic: t,
                        symKey: e,
                        relay: r
                    });
                    return await this.pairings.set(t, i),
                    await this.core.relayer.subscribe(t),
                    this.core.expirer.set(t, n),
                    {
                        topic: t,
                        uri: s
                    }
                }
                ,
                this.pair = async e=>{
                    this.isInitialized(),
                    this.isValidPair(e);
                    const {topic: t, symKey: n, relay: r} = an(e.uri);
                    let i;
                    if (this.pairings.keys.includes(t) && (i = this.pairings.get(t),
                    i.active))
                        throw new Error("Pairing already exists: ".concat(t, ". Please try again with a new connection URI."));
                    const s = Qt(l.FIVE_MINUTES)
                      , o = {
                        topic: t,
                        relay: r,
                        expiry: s,
                        active: !1
                    };
                    return await this.pairings.set(t, o),
                    this.core.expirer.set(t, s),
                    e.activatePairing && await this.activate({
                        topic: t
                    }),
                    this.events.emit(Os, o),
                    this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(n, t),
                    await this.core.relayer.subscribe(t, {
                        relay: r
                    })),
                    o
                }
                ,
                this.activate = async e=>{
                    let {topic: t} = e;
                    this.isInitialized();
                    const n = Qt(l.THIRTY_DAYS);
                    await this.pairings.update(t, {
                        active: !0,
                        expiry: n
                    }),
                    this.core.expirer.set(t, n)
                }
                ,
                this.ping = async e=>{
                    this.isInitialized(),
                    await this.isValidPing(e);
                    const {topic: t} = e;
                    if (this.pairings.keys.includes(t)) {
                        const e = await this.sendRequest(t, "wc_pairingPing", {})
                          , {done: n, resolve: r, reject: i} = Bt();
                        this.events.once(Yt("pairing_ping", e), (e=>{
                            let {error: t} = e;
                            t ? i(t) : r()
                        }
                        )),
                        await n()
                    }
                }
                ,
                this.updateExpiry = async e=>{
                    let {topic: t, expiry: n} = e;
                    this.isInitialized(),
                    await this.pairings.update(t, {
                        expiry: n
                    })
                }
                ,
                this.updateMetadata = async e=>{
                    let {topic: t, metadata: n} = e;
                    this.isInitialized(),
                    await this.pairings.update(t, {
                        peerMetadata: n
                    })
                }
                ,
                this.getPairings = ()=>(this.isInitialized(),
                this.pairings.values),
                this.disconnect = async e=>{
                    this.isInitialized(),
                    await this.isValidDisconnect(e);
                    const {topic: t} = e;
                    this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", vn("USER_DISCONNECTED")),
                    await this.deletePairing(t))
                }
                ,
                this.sendRequest = async(e,t,n)=>{
                    const r = tr(t, n)
                      , i = await this.core.crypto.encode(e, r)
                      , s = Ss[t].req;
                    return this.core.history.set(e, r),
                    this.core.relayer.publish(e, i, s),
                    r.id
                }
                ,
                this.sendResult = async(e,t,n)=>{
                    const r = nr(e, n)
                      , i = await this.core.crypto.encode(t, r)
                      , s = await this.core.history.get(t, e)
                      , o = Ss[s.request.method].res;
                    await this.core.relayer.publish(t, i, o),
                    await this.core.history.resolve(r)
                }
                ,
                this.sendError = async(e,t,n)=>{
                    const r = rr(e, n)
                      , i = await this.core.crypto.encode(t, r)
                      , s = await this.core.history.get(t, e)
                      , o = Ss[s.request.method] ? Ss[s.request.method].res : Ss.unregistered_method.res;
                    await this.core.relayer.publish(t, i, o),
                    await this.core.history.resolve(r)
                }
                ,
                this.deletePairing = async(e,t)=>{
                    await this.core.relayer.unsubscribe(e),
                    await Promise.all([this.pairings.delete(e, vn("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                }
                ,
                this.cleanup = async()=>{
                    const e = this.pairings.getAll().filter((e=>Jt(e.expiry)));
                    await Promise.all(e.map((e=>this.deletePairing(e.topic))))
                }
                ,
                this.onRelayEventRequest = e=>{
                    const {topic: t, payload: n} = e;
                    switch (n.method) {
                    case "wc_pairingPing":
                        return this.onPairingPingRequest(t, n);
                    case "wc_pairingDelete":
                        return this.onPairingDeleteRequest(t, n);
                    default:
                        return this.onUnknownRpcMethodRequest(t, n)
                    }
                }
                ,
                this.onRelayEventResponse = async e=>{
                    const {topic: t, payload: n} = e
                      , r = (await this.core.history.get(t, n.id)).request.method;
                    return "wc_pairingPing" === r ? this.onPairingPingResponse(t, n) : this.onUnknownRpcMethodResponse(r)
                }
                ,
                this.onPairingPingRequest = async(e,t)=>{
                    const {id: n} = t;
                    try {
                        this.isValidPing({
                            topic: e
                        }),
                        await this.sendResult(n, e, !0),
                        this.events.emit(xs, {
                            id: n,
                            topic: e
                        })
                    } catch (r) {
                        await this.sendError(n, e, r),
                        this.logger.error(r)
                    }
                }
                ,
                this.onPairingPingResponse = (e,t)=>{
                    const {id: n} = t;
                    setTimeout((()=>{
                        dr(t) ? this.events.emit(Yt("pairing_ping", n), {}) : gr(t) && this.events.emit(Yt("pairing_ping", n), {
                            error: t.error
                        })
                    }
                    ), 500)
                }
                ,
                this.onPairingDeleteRequest = async(e,t)=>{
                    const {id: n} = t;
                    try {
                        this.isValidDisconnect({
                            topic: e
                        }),
                        await this.deletePairing(e),
                        this.events.emit(As, {
                            id: n,
                            topic: e
                        })
                    } catch (r) {
                        await this.sendError(n, e, r),
                        this.logger.error(r)
                    }
                }
                ,
                this.onUnknownRpcMethodRequest = async(e,t)=>{
                    const {id: n, method: r} = t;
                    try {
                        if (this.registeredMethods.includes(r))
                            return;
                        const t = vn("WC_METHOD_UNSUPPORTED", r);
                        await this.sendError(n, e, t),
                        this.logger.error(t)
                    } catch (we) {
                        await this.sendError(n, e, we),
                        this.logger.error(we)
                    }
                }
                ,
                this.onUnknownRpcMethodResponse = e=>{
                    this.registeredMethods.includes(e) || this.logger.error(vn("WC_METHOD_UNSUPPORTED", e))
                }
                ,
                this.isValidPair = e=>{
                    var t;
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "pair() params: ".concat(e));
                        throw new Error(t)
                    }
                    if (!function(e) {
                        if (bn(e, !1))
                            try {
                                return typeof new URL(e) < "u"
                            } catch {
                                return !1
                            }
                        return !1
                    }(e.uri)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "pair() uri: ".concat(e.uri));
                        throw new Error(t)
                    }
                    const n = an(e.uri);
                    if (null == (t = null === n || void 0 === n ? void 0 : n.relay) || !t.protocol) {
                        const {message: e} = gn("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                        throw new Error(e)
                    }
                    if (null == n || !n.symKey) {
                        const {message: e} = gn("MISSING_OR_INVALID", "pair() uri#symKey");
                        throw new Error(e)
                    }
                }
                ,
                this.isValidPing = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "ping() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidPairingTopic(t)
                }
                ,
                this.isValidDisconnect = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "disconnect() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidPairingTopic(t)
                }
                ,
                this.isValidPairingTopic = async e=>{
                    if (!bn(e, !1)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(e));
                        throw new Error(t)
                    }
                    if (!this.pairings.keys.includes(e)) {
                        const {message: t} = gn("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(e));
                        throw new Error(t)
                    }
                    if (Jt(this.pairings.get(e).expiry)) {
                        await this.deletePairing(e);
                        const {message: t} = gn("EXPIRED", "pairing topic: ".concat(e));
                        throw new Error(t)
                    }
                }
                ,
                this.core = e,
                this.logger = ge(t, this.name),
                this.pairings = new vo(this.core,this.logger,this.name,this.storagePrefix)
            }
            get context() {
                return de(this.logger)
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
            registerRelayerEvents() {
                this.core.relayer.on(cs, (async e=>{
                    const {topic: t, message: n} = e;
                    if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
                        return;
                    const r = await this.core.crypto.decode(t, n);
                    try {
                        pr(r) ? (this.core.history.set(t, r),
                        this.onRelayEventRequest({
                            topic: t,
                            payload: r
                        })) : fr(r) && (await this.core.history.resolve(r),
                        await this.onRelayEventResponse({
                            topic: t,
                            payload: r
                        }),
                        this.core.history.delete(t, r.id))
                    } catch (re) {
                        this.logger.error(re)
                    }
                }
                ))
            }
            registerExpirerEvents() {
                this.core.expirer.on(Ms, (async e=>{
                    const {topic: t} = Gt(e.target);
                    t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
                    this.events.emit(Rs, {
                        topic: t
                    }))
                }
                ))
            }
        }
        class mo extends me {
            constructor(e, t) {
                super(e, t),
                this.core = e,
                this.logger = t,
                this.records = new Map,
                this.events = new r.EventEmitter,
                this.name = "history",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = es,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((e=>this.records.set(e.id, e))),
                    this.cached = [],
                    this.registerEventListeners(),
                    this.initialized = !0)
                }
                ,
                this.set = (e,t,n)=>{
                    if (this.isInitialized(),
                    this.logger.debug("Setting JSON-RPC request history record"),
                    this.logger.trace({
                        type: "method",
                        method: "set",
                        topic: e,
                        request: t,
                        chainId: n
                    }),
                    this.records.has(t.id))
                        return;
                    const r = {
                        id: t.id,
                        topic: e,
                        request: {
                            method: t.method,
                            params: t.params || null
                        },
                        chainId: n,
                        expiry: Qt(l.THIRTY_DAYS)
                    };
                    this.records.set(r.id, r),
                    this.events.emit(Ns, r)
                }
                ,
                this.resolve = async e=>{
                    if (this.isInitialized(),
                    this.logger.debug("Updating JSON-RPC response history record"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        response: e
                    }),
                    !this.records.has(e.id))
                        return;
                    const t = await this.getRecord(e.id);
                    typeof t.response > "u" && (t.response = gr(e) ? {
                        error: e.error
                    } : {
                        result: e.result
                    },
                    this.records.set(t.id, t),
                    this.events.emit(Ts, t))
                }
                ,
                this.get = async(e,t)=>(this.isInitialized(),
                this.logger.debug("Getting record"),
                this.logger.trace({
                    type: "method",
                    method: "get",
                    topic: e,
                    id: t
                }),
                await this.getRecord(t)),
                this.delete = (e,t)=>{
                    this.isInitialized(),
                    this.logger.debug("Deleting record"),
                    this.logger.trace({
                        type: "method",
                        method: "delete",
                        id: t
                    }),
                    this.values.forEach((n=>{
                        if (n.topic === e) {
                            if (typeof t < "u" && n.id !== t)
                                return;
                            this.records.delete(n.id),
                            this.events.emit(Cs, n)
                        }
                    }
                    ))
                }
                ,
                this.exists = async(e,t)=>(this.isInitialized(),
                !!this.records.has(t) && (await this.getRecord(t)).topic === e),
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.logger = ge(t, this.name)
            }
            get context() {
                return de(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get size() {
                return this.records.size
            }
            get keys() {
                return Array.from(this.records.keys())
            }
            get values() {
                return Array.from(this.records.values())
            }
            get pending() {
                const e = [];
                return this.values.forEach((t=>{
                    if (typeof t.response < "u")
                        return;
                    const n = {
                        topic: t.topic,
                        request: tr(t.request.method, t.request.params, t.id),
                        chainId: t.chainId
                    };
                    return e.push(n)
                }
                )),
                e
            }
            async setJsonRpcRecords(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getJsonRpcRecords() {
                return await this.core.storage.getItem(this.storageKey)
            }
            getRecord(e) {
                this.isInitialized();
                const t = this.records.get(e);
                if (!t) {
                    const {message: t} = gn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                    throw new Error(t)
                }
                return t
            }
            async persist() {
                await this.setJsonRpcRecords(this.values),
                this.events.emit(js)
            }
            async restore() {
                try {
                    const e = await this.getJsonRpcRecords();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.records.size) {
                        const {message: e} = gn("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        new Error(e)
                    }
                    this.cached = e,
                    this.logger.debug("Successfully Restored records for ".concat(this.name)),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        records: this.values
                    })
                } catch (sr) {
                    this.logger.debug("Failed to Restore records for ".concat(this.name)),
                    this.logger.error(sr)
                }
            }
            registerEventListeners() {
                this.events.on(Ns, (e=>{
                    const t = Ns;
                    this.logger.info("Emitting ".concat(t)),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(Ts, (e=>{
                    const t = Ts;
                    this.logger.info("Emitting ".concat(t)),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(Cs, (e=>{
                    const t = Cs;
                    this.logger.info("Emitting ".concat(t)),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                )),
                this.core.heartbeat.on(X.HEARTBEAT_EVENTS.pulse, (()=>{
                    this.cleanup()
                }
                ))
            }
            cleanup() {
                try {
                    this.records.forEach((e=>{
                        (0,
                        l.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info("Deleting expired history log: ".concat(e.id)),
                        this.delete(e.topic, e.id))
                    }
                    ))
                } catch (sr) {
                    this.logger.warn(sr)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class wo extends Pe {
            constructor(e, t) {
                super(e, t),
                this.core = e,
                this.logger = t,
                this.expirations = new Map,
                this.events = new r.EventEmitter,
                this.name = "expirer",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = es,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach((e=>this.expirations.set(e.target, e))),
                    this.cached = [],
                    this.registerEventListeners(),
                    this.initialized = !0)
                }
                ,
                this.has = e=>{
                    try {
                        const t = this.formatTarget(e);
                        return typeof this.getExpiration(t) < "u"
                    } catch {
                        return !1
                    }
                }
                ,
                this.set = (e,t)=>{
                    this.isInitialized();
                    const n = this.formatTarget(e)
                      , r = {
                        target: n,
                        expiry: t
                    };
                    this.expirations.set(n, r),
                    this.checkExpiry(n, r),
                    this.events.emit(Ds, {
                        target: n,
                        expiration: r
                    })
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    const t = this.formatTarget(e);
                    return this.getExpiration(t)
                }
                ,
                this.del = e=>{
                    if (this.isInitialized(),
                    this.has(e)) {
                        const t = this.formatTarget(e)
                          , n = this.getExpiration(t);
                        this.expirations.delete(t),
                        this.events.emit(Ls, {
                            target: t,
                            expiration: n
                        })
                    }
                }
                ,
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.logger = ge(t, this.name)
            }
            get context() {
                return de(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
            }
            get length() {
                return this.expirations.size
            }
            get keys() {
                return Array.from(this.expirations.keys())
            }
            get values() {
                return Array.from(this.expirations.values())
            }
            formatTarget(e) {
                if ("string" == typeof e)
                    return function(e) {
                        return Ft("topic", e)
                    }(e);
                if ("number" == typeof e)
                    return function(e) {
                        return Ft("id", e)
                    }(e);
                const {message: t} = gn("UNKNOWN_TYPE", "Target type: ".concat(typeof e));
                throw new Error(t)
            }
            async setExpirations(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getExpirations() {
                return await this.core.storage.getItem(this.storageKey)
            }
            async persist() {
                await this.setExpirations(this.values),
                this.events.emit(Us)
            }
            async restore() {
                try {
                    const e = await this.getExpirations();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.expirations.size) {
                        const {message: e} = gn("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        new Error(e)
                    }
                    this.cached = e,
                    this.logger.debug("Successfully Restored expirations for ".concat(this.name)),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        expirations: this.values
                    })
                } catch (sr) {
                    this.logger.debug("Failed to Restore expirations for ".concat(this.name)),
                    this.logger.error(sr)
                }
            }
            getExpiration(e) {
                const t = this.expirations.get(e);
                if (!t) {
                    const {message: t} = gn("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                    throw this.logger.error(t),
                    new Error(t)
                }
                return t
            }
            checkExpiry(e, t) {
                const {expiry: n} = t;
                (0,
                l.toMiliseconds)(n) - Date.now() <= 0 && this.expire(e, t)
            }
            expire(e, t) {
                this.expirations.delete(e),
                this.events.emit(Ms, {
                    target: e,
                    expiration: t
                })
            }
            checkExpirations() {
                this.core.relayer.connected && this.expirations.forEach(((e,t)=>this.checkExpiry(t, e)))
            }
            registerEventListeners() {
                this.core.heartbeat.on(X.HEARTBEAT_EVENTS.pulse, (()=>this.checkExpirations())),
                this.events.on(Ds, (e=>{
                    const t = Ds;
                    this.logger.info("Emitting ".concat(t)),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(Ms, (e=>{
                    const t = Ms;
                    this.logger.info("Emitting ".concat(t)),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                )),
                this.events.on(Ls, (e=>{
                    const t = Ls;
                    this.logger.info("Emitting ".concat(t)),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                ))
            }
            isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
            }
        }
        class bo extends Se {
            constructor(e, t) {
                super(e, t),
                this.projectId = e,
                this.logger = t,
                this.name = ks,
                this.initialized = !1,
                this.queue = [],
                this.verifyDisabled = !1,
                this.init = async e=>{
                    if (this.verifyDisabled || Mt() || !Ut())
                        return;
                    const t = this.getVerifyUrl(null === e || void 0 === e ? void 0 : e.verifyUrl);
                    this.verifyUrl !== t && this.removeIframe(),
                    this.verifyUrl = t;
                    try {
                        await this.createIframe()
                    } catch (re) {
                        this.logger.info("Verify iframe failed to load: ".concat(this.verifyUrl)),
                        this.logger.info(re)
                    }
                    if (!this.initialized) {
                        this.removeIframe(),
                        this.verifyUrl = zs;
                        try {
                            await this.createIframe()
                        } catch (re) {
                            this.logger.info("Verify iframe failed to load: ".concat(this.verifyUrl)),
                            this.logger.info(re),
                            this.verifyDisabled = !0
                        }
                    }
                }
                ,
                this.register = async e=>{
                    this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId),
                    await this.init())
                }
                ,
                this.resolve = async e=>{
                    if (this.isDevEnv)
                        return "";
                    const t = this.getVerifyUrl(null === e || void 0 === e ? void 0 : e.verifyUrl);
                    let n;
                    try {
                        n = await this.fetchAttestation(e.attestationId, t)
                    } catch (r) {
                        this.logger.info("failed to resolve attestation: ".concat(e.attestationId, " from url: ").concat(t)),
                        this.logger.info(r),
                        n = await this.fetchAttestation(e.attestationId, zs)
                    }
                    return n
                }
                ,
                this.fetchAttestation = async(e,t)=>{
                    this.logger.info("resolving attestation: ".concat(e, " from url: ").concat(t));
                    const n = this.startAbortTimer(2 * l.ONE_SECOND)
                      , r = await fetch("".concat(t, "/attestation/").concat(e), {
                        signal: this.abortController.signal
                    });
                    return clearTimeout(n),
                    200 === r.status ? await r.json() : void 0
                }
                ,
                this.addToQueue = e=>{
                    this.queue.push(e)
                }
                ,
                this.processQueue = ()=>{
                    0 !== this.queue.length && (this.queue.forEach((e=>this.sendPost(e))),
                    this.queue = [])
                }
                ,
                this.sendPost = e=>{
                    var t;
                    try {
                        if (!this.iframe)
                            return;
                        null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"),
                        this.logger.info("postMessage sent: ".concat(e, " ").concat(this.verifyUrl))
                    } catch {}
                }
                ,
                this.createIframe = async()=>{
                    let e;
                    const t = n=>{
                        "verify_ready" === n.data && (this.initialized = !0,
                        this.processQueue(),
                        window.removeEventListener("message", t),
                        e())
                    }
                    ;
                    await Promise.race([new Promise((n=>{
                        if (document.getElementById(ks))
                            return n();
                        window.addEventListener("message", t);
                        const r = document.createElement("iframe");
                        r.id = ks,
                        r.src = "".concat(this.verifyUrl, "/").concat(this.projectId),
                        r.style.display = "none",
                        document.body.append(r),
                        this.iframe = r,
                        e = n
                    }
                    )), new Promise(((e,n)=>setTimeout((()=>{
                        window.removeEventListener("message", t),
                        n("verify iframe load timeout")
                    }
                    ), (0,
                    l.toMiliseconds)(l.FIVE_SECONDS))))])
                }
                ,
                this.removeIframe = ()=>{
                    this.iframe && (this.iframe.remove(),
                    this.iframe = void 0,
                    this.initialized = !1)
                }
                ,
                this.getVerifyUrl = e=>{
                    let t = e || qs;
                    return Hs.includes(t) || (this.logger.info("verify url: ".concat(t, ", not included in trusted list, assigning default: ").concat(qs)),
                    t = qs),
                    t
                }
                ,
                this.logger = ge(t, this.name),
                this.verifyUrl = qs,
                this.abortController = new AbortController,
                this.isDevEnv = Lt() && {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_API_DOMAIN: "https://www.token.reva.finance/api/",
                    REACT_APP_API_KEY: "ZMpAShQwlOxzHYnJ97UkwLaW",
                    REACT_APP_API_SECRET: "ZMpAShQwlOxzHYnJ97UkwLaW",
                    REACT_APP_BASE_URL: "reva.fianance",
                    REACT_APP_chainId: "97",
                    REACT_APP_contractAddr: "0xd155b9011f22F293dE5f9b42aBA68Af9302405b7",
                    REACT_APP_CONTRACT_LIVE_ADDRESS: "0x55EeA87CddB0fC1856a269B78793510504e8ffdB",
                    REACT_APP_CONTRACT_LIVE_NETWORK: "BEP20",
                    REACT_APP_DOMAIN: "https://www.reva.finance/",
                    REACT_APP_FLUTTERWAVE_KEY: "FLWPUBK_TEST-54d5c407aacb6bdabf34a42a63bb1032-X",
                    REACT_APP_PAYSTACK_KEY: "pk_test_f073b61d9339904c565360eabde249ca5e5a29dd",
                    REACT_APP_SERVER_DOMAIN: "https://www.token.reva.finance/",
                    REACT_APP_tokenAdd: "0x6048Dc7Db8E395CAbA6F634BB40FE91c2F542312",
                    REACT_APP_tokenEthAdd: "0x69295f9cA92c91ae4f4FcE5cB8FdB47C9e365BC8",
                    REACT_APP_tokenUsdtAdd: "0x852ef866e9d5F4a75581d826C47A47AFD8c08c63",
                    REACT_APP_X_MONEY_KEY: "u_live_api_e4561ae0-d319-46f3-b258-36394939a0ae"
                }.IS_VITEST
            }
            get context() {
                return de(this.logger)
            }
            startAbortTimer(e) {
                return this.abortController = new AbortController,
                setTimeout((()=>this.abortController.abort()), (0,
                l.toMiliseconds)(e))
            }
        }
        class _o extends Oe {
            constructor(e, t) {
                super(e, t),
                this.projectId = e,
                this.logger = t,
                this.context = "echo",
                this.registerDeviceToken = async e=>{
                    const {clientId: t, token: n, notificationType: r, enableEncrypted: i=!1} = e
                      , s = "".concat("https://echo.walletconnect.com", "/").concat(this.projectId, "/clients");
                    await Ir()(s, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            client_id: t,
                            type: r,
                            token: n,
                            always_raw: i
                        })
                    })
                }
                ,
                this.logger = ge(t, this.context)
            }
        }
        var Eo = Object.defineProperty
          , Io = Object.getOwnPropertySymbols
          , Po = Object.prototype.hasOwnProperty
          , So = Object.prototype.propertyIsEnumerable
          , Oo = (e,t,n)=>t in e ? Eo(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , Ro = (e,t)=>{
            for (var n in t || (t = {}))
                Po.call(t, n) && Oo(e, n, t[n]);
            if (Io)
                for (var n of Io(t))
                    So.call(t, n) && Oo(e, n, t[n]);
            return e
        }
        ;
        class Ao extends ye {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.name = Xi,
                this.events = new r.EventEmitter,
                this.initialized = !1,
                this.on = (e,t)=>this.events.on(e, t),
                this.once = (e,t)=>this.events.once(e, t),
                this.off = (e,t)=>this.events.off(e, t),
                this.removeListener = (e,t)=>this.events.removeListener(e, t),
                this.projectId = null === e || void 0 === e ? void 0 : e.projectId,
                this.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || os,
                this.customStoragePrefix = null != e && e.customStoragePrefix ? ":".concat(e.customStoragePrefix) : "";
                const t = typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof (null === e || void 0 === e ? void 0 : e.logger) ? e.logger : te()(fe({
                    level: (null === e || void 0 === e ? void 0 : e.logger) || ts
                }));
                this.logger = ge(t, this.name),
                this.heartbeat = new X.HeartBeat,
                this.crypto = new Ks(this,this.logger,null === e || void 0 === e ? void 0 : e.keychain),
                this.history = new mo(this,this.logger),
                this.expirer = new wo(this,this.logger),
                this.storage = null != e && e.storage ? e.storage : new Z(Ro(Ro({}, ns), null === e || void 0 === e ? void 0 : e.storageOptions)),
                this.relayer = new co({
                    core: this,
                    logger: this.logger,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId
                }),
                this.pairing = new yo(this,this.logger),
                this.verify = new bo(this.projectId || "",this.logger),
                this.echoClient = new _o(this.projectId || "",this.logger)
            }
            static async init(e) {
                const t = new Ao(e);
                await t.initialize();
                const n = await t.crypto.getClientId();
                return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", n),
                t
            }
            get context() {
                return de(this.logger)
            }
            async start() {
                this.initialized || await this.initialize()
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.crypto.init(),
                    await this.history.init(),
                    await this.expirer.init(),
                    await this.relayer.init(),
                    await this.heartbeat.init(),
                    await this.pairing.init(),
                    this.initialized = !0,
                    this.logger.info("Core Initialization Success")
                } catch (sr) {
                    throw this.logger.warn("Core Initialization Failure at epoch ".concat(Date.now()), sr),
                    this.logger.error(sr.message),
                    sr
                }
            }
        }
        const xo = Ao
          , No = "client"
          , To = "".concat("wc", "@").concat(2, ":").concat(No, ":")
          , Co = No
          , jo = "error"
          , Do = "WALLETCONNECT_DEEPLINK_CHOICE"
          , Lo = "Proposal expired"
          , Mo = l.SEVEN_DAYS
          , Uo = {
            wc_sessionPropose: {
                req: {
                    ttl: l.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1100
                },
                res: {
                    ttl: l.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1101
                }
            },
            wc_sessionSettle: {
                req: {
                    ttl: l.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1102
                },
                res: {
                    ttl: l.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1103
                }
            },
            wc_sessionUpdate: {
                req: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 1104
                },
                res: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 1105
                }
            },
            wc_sessionExtend: {
                req: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 1106
                },
                res: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 1107
                }
            },
            wc_sessionRequest: {
                req: {
                    ttl: l.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1108
                },
                res: {
                    ttl: l.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1109
                }
            },
            wc_sessionEvent: {
                req: {
                    ttl: l.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1110
                },
                res: {
                    ttl: l.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1111
                }
            },
            wc_sessionDelete: {
                req: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 1112
                },
                res: {
                    ttl: l.ONE_DAY,
                    prompt: !1,
                    tag: 1113
                }
            },
            wc_sessionPing: {
                req: {
                    ttl: l.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1114
                },
                res: {
                    ttl: l.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1115
                }
            }
        }
          , ko = {
            min: l.FIVE_MINUTES,
            max: l.SEVEN_DAYS
        }
          , qo = "IDLE"
          , zo = "ACTIVE"
          , Ho = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
        var Vo = Object.defineProperty
          , Ko = Object.defineProperties
          , Bo = Object.getOwnPropertyDescriptors
          , Wo = Object.getOwnPropertySymbols
          , Fo = Object.prototype.hasOwnProperty
          , Go = Object.prototype.propertyIsEnumerable
          , Qo = (e,t,n)=>t in e ? Vo(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , Jo = (e,t)=>{
            for (var n in t || (t = {}))
                Fo.call(t, n) && Qo(e, n, t[n]);
            if (Wo)
                for (var n of Wo(t))
                    Go.call(t, n) && Qo(e, n, t[n]);
            return e
        }
          , Yo = (e,t)=>Ko(e, Bo(t));
        class $o extends Ae {
            constructor(e) {
                var t;
                super(e),
                t = this,
                this.name = "engine",
                this.events = new (i()),
                this.initialized = !1,
                this.ignoredPayloadTypes = [dt],
                this.requestQueue = {
                    state: qo,
                    queue: []
                },
                this.sessionRequestQueue = {
                    state: qo,
                    queue: []
                },
                this.requestQueueDelay = l.ONE_SECOND,
                this.init = async()=>{
                    this.initialized || (await this.cleanup(),
                    this.registerRelayerEvents(),
                    this.registerExpirerEvents(),
                    this.registerPairingEvents(),
                    this.client.core.pairing.register({
                        methods: Object.keys(Uo)
                    }),
                    this.initialized = !0,
                    setTimeout((()=>{
                        this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                        this.processSessionRequestQueue()
                    }
                    ), (0,
                    l.toMiliseconds)(this.requestQueueDelay)))
                }
                ,
                this.connect = async e=>{
                    await this.isInitialized();
                    const t = Yo(Jo({}, e), {
                        requiredNamespaces: e.requiredNamespaces || {},
                        optionalNamespaces: e.optionalNamespaces || {}
                    });
                    await this.isValidConnect(t);
                    const {pairingTopic: n, requiredNamespaces: r, optionalNamespaces: i, sessionProperties: s, relays: o} = t;
                    let a, c = n, u = !1;
                    if (c && (u = this.client.core.pairing.pairings.get(c).active),
                    !c || !u) {
                        const {topic: e, uri: t} = await this.client.core.pairing.create();
                        c = e,
                        a = t
                    }
                    const h = await this.client.core.crypto.generateKeyPair()
                      , p = Jo({
                        requiredNamespaces: r,
                        optionalNamespaces: i,
                        relays: null !== o && void 0 !== o ? o : [{
                            protocol: "irn"
                        }],
                        proposer: {
                            publicKey: h,
                            metadata: this.client.metadata
                        }
                    }, s && {
                        sessionProperties: s
                    })
                      , {reject: f, resolve: d, done: g} = Bt(l.FIVE_MINUTES, Lo);
                    if (this.events.once(Yt("session_connect"), (async e=>{
                        let {error: t, session: n} = e;
                        if (t)
                            f(t);
                        else if (n) {
                            n.self.publicKey = h;
                            const e = Yo(Jo({}, n), {
                                requiredNamespaces: n.requiredNamespaces,
                                optionalNamespaces: n.optionalNamespaces
                            });
                            await this.client.session.set(n.topic, e),
                            await this.setExpiry(n.topic, n.expiry),
                            c && await this.client.core.pairing.updateMetadata({
                                topic: c,
                                metadata: n.peer.metadata
                            }),
                            d(e)
                        }
                    }
                    )),
                    !c) {
                        const {message: e} = gn("NO_MATCHING_KEY", "connect() pairing topic: ".concat(c));
                        throw new Error(e)
                    }
                    const v = await this.sendRequest({
                        topic: c,
                        method: "wc_sessionPropose",
                        params: p
                    })
                      , y = Qt(l.FIVE_MINUTES);
                    return await this.setProposal(v, Jo({
                        id: v,
                        expiry: y
                    }, p)),
                    {
                        uri: a,
                        approval: g
                    }
                }
                ,
                this.pair = async e=>(await this.isInitialized(),
                await this.client.core.pairing.pair(e)),
                this.approve = async e=>{
                    await this.isInitialized(),
                    await this.isValidApprove(e);
                    const {id: t, relayProtocol: n, namespaces: r, sessionProperties: i} = e
                      , s = this.client.proposal.get(t);
                    let {pairingTopic: o, proposer: a, requiredNamespaces: c, optionalNamespaces: u} = s;
                    o = o || "",
                    mn(c) || (c = function(e, t) {
                        const n = Rn(e, t);
                        if (n)
                            throw new Error(n.message);
                        const r = {};
                        for (const [i,s] of Object.entries(e))
                            r[i] = {
                                methods: s.methods,
                                events: s.events,
                                chains: s.accounts.map((e=>"".concat(e.split(":")[0], ":").concat(e.split(":")[1])))
                            };
                        return r
                    }(r, "approve()"));
                    const h = await this.client.core.crypto.generateKeyPair()
                      , l = a.publicKey
                      , p = await this.client.core.crypto.generateSharedKey(h, l);
                    o && t && (await this.client.core.pairing.updateMetadata({
                        topic: o,
                        metadata: a.metadata
                    }),
                    await this.sendResult({
                        id: t,
                        topic: o,
                        result: {
                            relay: {
                                protocol: null !== n && void 0 !== n ? n : "irn"
                            },
                            responderPublicKey: h
                        }
                    }),
                    await this.client.proposal.delete(t, vn("USER_DISCONNECTED")),
                    await this.client.core.pairing.activate({
                        topic: o
                    }));
                    const f = Jo({
                        relay: {
                            protocol: null !== n && void 0 !== n ? n : "irn"
                        },
                        namespaces: r,
                        requiredNamespaces: c,
                        optionalNamespaces: u,
                        pairingTopic: o,
                        controller: {
                            publicKey: h,
                            metadata: this.client.metadata
                        },
                        expiry: Qt(Mo)
                    }, i && {
                        sessionProperties: i
                    });
                    await this.client.core.relayer.subscribe(p),
                    await this.sendRequest({
                        topic: p,
                        method: "wc_sessionSettle",
                        params: f,
                        throwOnFailedPublish: !0
                    });
                    const d = Yo(Jo({}, f), {
                        topic: p,
                        pairingTopic: o,
                        acknowledged: !1,
                        self: f.controller,
                        peer: {
                            publicKey: a.publicKey,
                            metadata: a.metadata
                        },
                        controller: h
                    });
                    return await this.client.session.set(p, d),
                    await this.setExpiry(p, Qt(Mo)),
                    {
                        topic: p,
                        acknowledged: ()=>new Promise((e=>setTimeout((()=>e(this.client.session.get(p))), 500)))
                    }
                }
                ,
                this.reject = async e=>{
                    await this.isInitialized(),
                    await this.isValidReject(e);
                    const {id: t, reason: n} = e
                      , {pairingTopic: r} = this.client.proposal.get(t);
                    r && (await this.sendError(t, r, n),
                    await this.client.proposal.delete(t, vn("USER_DISCONNECTED")))
                }
                ,
                this.update = async e=>{
                    await this.isInitialized(),
                    await this.isValidUpdate(e);
                    const {topic: t, namespaces: n} = e
                      , r = await this.sendRequest({
                        topic: t,
                        method: "wc_sessionUpdate",
                        params: {
                            namespaces: n
                        }
                    })
                      , {done: i, resolve: s, reject: o} = Bt();
                    return this.events.once(Yt("session_update", r), (e=>{
                        let {error: t} = e;
                        t ? o(t) : s()
                    }
                    )),
                    await this.client.session.update(t, {
                        namespaces: n
                    }),
                    {
                        acknowledged: i
                    }
                }
                ,
                this.extend = async e=>{
                    await this.isInitialized(),
                    await this.isValidExtend(e);
                    const {topic: t} = e
                      , n = await this.sendRequest({
                        topic: t,
                        method: "wc_sessionExtend",
                        params: {}
                    })
                      , {done: r, resolve: i, reject: s} = Bt();
                    return this.events.once(Yt("session_extend", n), (e=>{
                        let {error: t} = e;
                        t ? s(t) : i()
                    }
                    )),
                    await this.setExpiry(t, Qt(Mo)),
                    {
                        acknowledged: r
                    }
                }
                ,
                this.request = async t=>{
                    await this.isInitialized(),
                    await this.isValidRequest(t);
                    const {chainId: r, request: i, topic: s, expiry: o} = t
                      , a = Xn()
                      , {done: c, resolve: u, reject: h} = Bt(o, "Request expired. Please try again.");
                    return this.events.once(Yt("session_request", a), (e=>{
                        let {error: t, result: n} = e;
                        t ? h(t) : u(n)
                    }
                    )),
                    await Promise.all([new Promise((async e=>{
                        await this.sendRequest({
                            clientRpcId: a,
                            topic: s,
                            method: "wc_sessionRequest",
                            params: {
                                request: i,
                                chainId: r
                            },
                            expiry: o,
                            throwOnFailedPublish: !0
                        }).catch((e=>h(e))),
                        this.client.events.emit("session_request_sent", {
                            topic: s,
                            request: i,
                            chainId: r,
                            id: a
                        }),
                        e()
                    }
                    )), new Promise((async t=>{
                        const r = await async function(e, t) {
                            try {
                                return await e.getItem(t) || (Ut() ? localStorage.getItem(t) : void 0)
                            } catch (i) {
                                console.error(i)
                            }
                        }(this.client.core.storage, Do);
                        (async function(t) {
                            let {id: r, topic: i, wcDeepLink: s} = t;
                            try {
                                if (!s)
                                    return;
                                const e = "string" == typeof s ? JSON.parse(s) : s;
                                let t = null === e || void 0 === e ? void 0 : e.href;
                                if ("string" != typeof t)
                                    return;
                                t.endsWith("/") && (t = t.slice(0, -1));
                                const o = "".concat(t, "/wc?requestId=").concat(r, "&sessionTopic=").concat(i)
                                  , a = kt();
                                a === jt.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === jt.reactNative && typeof (null == n.g ? void 0 : n.g.Linking) < "u" && await n.g.Linking.openURL(o)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        )({
                            id: a,
                            topic: s,
                            wcDeepLink: r
                        }),
                        t()
                    }
                    )), c()]).then((e=>e[2]))
                }
                ,
                this.respond = async e=>{
                    await this.isInitialized(),
                    await this.isValidRespond(e);
                    const {topic: t, response: n} = e
                      , {id: r} = n;
                    dr(n) ? await this.sendResult({
                        id: r,
                        topic: t,
                        result: n.result,
                        throwOnFailedPublish: !0
                    }) : gr(n) && await this.sendError(r, t, n.error),
                    this.cleanupAfterResponse(e)
                }
                ,
                this.ping = async e=>{
                    await this.isInitialized(),
                    await this.isValidPing(e);
                    const {topic: t} = e;
                    if (this.client.session.keys.includes(t)) {
                        const e = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionPing",
                            params: {}
                        })
                          , {done: n, resolve: r, reject: i} = Bt();
                        this.events.once(Yt("session_ping", e), (e=>{
                            let {error: t} = e;
                            t ? i(t) : r()
                        }
                        )),
                        await n()
                    } else
                        this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                }
                ,
                this.emit = async e=>{
                    await this.isInitialized(),
                    await this.isValidEmit(e);
                    const {topic: t, event: n, chainId: r} = e;
                    await this.sendRequest({
                        topic: t,
                        method: "wc_sessionEvent",
                        params: {
                            event: n,
                            chainId: r
                        }
                    })
                }
                ,
                this.disconnect = async e=>{
                    await this.isInitialized(),
                    await this.isValidDisconnect(e);
                    const {topic: t} = e;
                    this.client.session.keys.includes(t) ? (await this.sendRequest({
                        topic: t,
                        method: "wc_sessionDelete",
                        params: vn("USER_DISCONNECTED"),
                        throwOnFailedPublish: !0
                    }),
                    await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                        topic: t
                    })
                }
                ,
                this.find = e=>(this.isInitialized(),
                this.client.session.getAll().filter((t=>function(e, t) {
                    const {requiredNamespaces: n} = t
                      , r = Object.keys(e.namespaces)
                      , i = Object.keys(n);
                    let s = !0;
                    return !!Ht(i, r) && (r.forEach((t=>{
                        const {accounts: r, methods: i, events: o} = e.namespaces[t]
                          , a = hn(r)
                          , c = n[t];
                        (!Ht(ct(t, c), a) || !Ht(c.methods, i) || !Ht(c.events, o)) && (s = !1)
                    }
                    )),
                    s)
                }(t, e)))),
                this.getPendingSessionRequests = ()=>(this.isInitialized(),
                this.client.pendingRequest.getAll()),
                this.cleanupDuplicatePairings = async e=>{
                    if (e.pairingTopic)
                        try {
                            const t = this.client.core.pairing.pairings.get(e.pairingTopic)
                              , n = this.client.core.pairing.pairings.getAll().filter((n=>{
                                var r, i;
                                return (null == (r = n.peerMetadata) ? void 0 : r.url) && (null == (i = n.peerMetadata) ? void 0 : i.url) === e.peer.metadata.url && n.topic && n.topic !== t.topic
                            }
                            ));
                            if (0 === n.length)
                                return;
                            this.client.logger.info("Cleaning up ".concat(n.length, " duplicate pairing(s)")),
                            await Promise.all(n.map((e=>this.client.core.pairing.disconnect({
                                topic: e.topic
                            })))),
                            this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                }
                ,
                this.deleteSession = async(e,t)=>{
                    const {self: n} = this.client.session.get(e);
                    await this.client.core.relayer.unsubscribe(e),
                    this.client.session.delete(e, vn("USER_DISCONNECTED")),
                    this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey),
                    this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e),
                    t || this.client.core.expirer.del(e),
                    this.client.core.storage.removeItem(Do).catch((e=>this.client.logger.warn(e))),
                    this.getPendingSessionRequests().forEach((t=>{
                        t.topic === e && this.deletePendingSessionRequest(t.id, vn("USER_DISCONNECTED"))
                    }
                    ))
                }
                ,
                this.deleteProposal = async(e,t)=>{
                    await Promise.all([this.client.proposal.delete(e, vn("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                }
                ,
                this.deletePendingSessionRequest = async function(e, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    await Promise.all([t.client.pendingRequest.delete(e, n), r ? Promise.resolve() : t.client.core.expirer.del(e)]),
                    t.sessionRequestQueue.queue = t.sessionRequestQueue.queue.filter((t=>t.id !== e)),
                    r && (t.sessionRequestQueue.state = qo)
                }
                ,
                this.setExpiry = async(e,t)=>{
                    this.client.session.keys.includes(e) && await this.client.session.update(e, {
                        expiry: t
                    }),
                    this.client.core.expirer.set(e, t)
                }
                ,
                this.setProposal = async(e,t)=>{
                    await this.client.proposal.set(e, t),
                    this.client.core.expirer.set(e, t.expiry)
                }
                ,
                this.setPendingSessionRequest = async e=>{
                    const t = Uo.wc_sessionRequest.req.ttl
                      , {id: n, topic: r, params: i, verifyContext: s} = e;
                    await this.client.pendingRequest.set(n, {
                        id: n,
                        topic: r,
                        params: i,
                        verifyContext: s
                    }),
                    t && this.client.core.expirer.set(n, Qt(t))
                }
                ,
                this.sendRequest = async e=>{
                    const {topic: t, method: n, params: r, expiry: i, relayRpcId: s, clientRpcId: o, throwOnFailedPublish: a} = e
                      , c = tr(n, r, o);
                    if (Ut() && Ho.includes(n)) {
                        const e = bt(JSON.stringify(c));
                        this.client.core.verify.register({
                            attestationId: e
                        })
                    }
                    const u = await this.client.core.crypto.encode(t, c)
                      , h = Uo[n].req;
                    return i && (h.ttl = i),
                    s && (h.id = s),
                    this.client.core.history.set(t, c),
                    a ? (h.internal = Yo(Jo({}, h.internal), {
                        throwOnFailedPublish: !0
                    }),
                    await this.client.core.relayer.publish(t, u, h)) : this.client.core.relayer.publish(t, u, h).catch((e=>this.client.logger.error(e))),
                    c.id
                }
                ,
                this.sendResult = async e=>{
                    const {id: t, topic: n, result: r, throwOnFailedPublish: i} = e
                      , s = nr(t, r)
                      , o = await this.client.core.crypto.encode(n, s)
                      , a = await this.client.core.history.get(n, t)
                      , c = Uo[a.request.method].res;
                    i ? (c.internal = Yo(Jo({}, c.internal), {
                        throwOnFailedPublish: !0
                    }),
                    await this.client.core.relayer.publish(n, o, c)) : this.client.core.relayer.publish(n, o, c).catch((e=>this.client.logger.error(e))),
                    await this.client.core.history.resolve(s)
                }
                ,
                this.sendError = async(e,t,n)=>{
                    const r = rr(e, n)
                      , i = await this.client.core.crypto.encode(t, r)
                      , s = await this.client.core.history.get(t, e)
                      , o = Uo[s.request.method].res;
                    this.client.core.relayer.publish(t, i, o),
                    await this.client.core.history.resolve(r)
                }
                ,
                this.cleanup = async()=>{
                    const e = []
                      , t = [];
                    this.client.session.getAll().forEach((t=>{
                        Jt(t.expiry) && e.push(t.topic)
                    }
                    )),
                    this.client.proposal.getAll().forEach((e=>{
                        Jt(e.expiry) && t.push(e.id)
                    }
                    )),
                    await Promise.all([...e.map((e=>this.deleteSession(e))), ...t.map((e=>this.deleteProposal(e)))])
                }
                ,
                this.onRelayEventRequest = async e=>{
                    this.requestQueue.queue.push(e),
                    await this.processRequestsQueue()
                }
                ,
                this.processRequestsQueue = async()=>{
                    if (this.requestQueue.state !== zo) {
                        for (this.client.logger.info("Request queue starting with ".concat(this.requestQueue.queue.length, " requests")); this.requestQueue.queue.length > 0; ) {
                            this.requestQueue.state = zo;
                            const t = this.requestQueue.queue.shift();
                            if (t)
                                try {
                                    this.processRequest(t),
                                    await new Promise((e=>setTimeout(e, 300)))
                                } catch (e) {
                                    this.client.logger.warn(e)
                                }
                        }
                        this.requestQueue.state = qo
                    } else
                        this.client.logger.info("Request queue already active, skipping...")
                }
                ,
                this.processRequest = e=>{
                    const {topic: t, payload: n} = e
                      , r = n.method;
                    switch (r) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeRequest(t, n);
                    case "wc_sessionSettle":
                        return this.onSessionSettleRequest(t, n);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateRequest(t, n);
                    case "wc_sessionExtend":
                        return this.onSessionExtendRequest(t, n);
                    case "wc_sessionPing":
                        return this.onSessionPingRequest(t, n);
                    case "wc_sessionDelete":
                        return this.onSessionDeleteRequest(t, n);
                    case "wc_sessionRequest":
                        return this.onSessionRequest(t, n);
                    case "wc_sessionEvent":
                        return this.onSessionEventRequest(t, n);
                    default:
                        return this.client.logger.info("Unsupported request method ".concat(r))
                    }
                }
                ,
                this.onRelayEventResponse = async e=>{
                    const {topic: t, payload: n} = e
                      , r = (await this.client.core.history.get(t, n.id)).request.method;
                    switch (r) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeResponse(t, n);
                    case "wc_sessionSettle":
                        return this.onSessionSettleResponse(t, n);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateResponse(t, n);
                    case "wc_sessionExtend":
                        return this.onSessionExtendResponse(t, n);
                    case "wc_sessionPing":
                        return this.onSessionPingResponse(t, n);
                    case "wc_sessionRequest":
                        return this.onSessionRequestResponse(t, n);
                    default:
                        return this.client.logger.info("Unsupported response method ".concat(r))
                    }
                }
                ,
                this.onRelayEventUnknownPayload = e=>{
                    const {topic: t} = e
                      , {message: n} = gn("MISSING_OR_INVALID", "Decoded payload on topic ".concat(t, " is not identifiable as a JSON-RPC request or a response."));
                    throw new Error(n)
                }
                ,
                this.onSessionProposeRequest = async(e,t)=>{
                    const {params: n, id: r} = t;
                    try {
                        this.isValidConnect(Jo({}, t.params));
                        const i = Qt(l.FIVE_MINUTES)
                          , s = Jo({
                            id: r,
                            pairingTopic: e,
                            expiry: i
                        }, n);
                        await this.setProposal(r, s);
                        const o = bt(JSON.stringify(t))
                          , a = await this.getVerifyContext(o, s.proposer.metadata);
                        this.client.events.emit("session_proposal", {
                            id: r,
                            params: s,
                            verifyContext: a
                        })
                    } catch (re) {
                        await this.sendError(r, e, re),
                        this.client.logger.error(re)
                    }
                }
                ,
                this.onSessionProposeResponse = async(e,t)=>{
                    const {id: n} = t;
                    if (dr(t)) {
                        const {result: r} = t;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            result: r
                        });
                        const i = this.client.proposal.get(n);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            proposal: i
                        });
                        const s = i.proposer.publicKey;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            selfPublicKey: s
                        });
                        const o = r.responderPublicKey;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            peerPublicKey: o
                        });
                        const a = await this.client.core.crypto.generateSharedKey(s, o);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            sessionTopic: a
                        });
                        const c = await this.client.core.relayer.subscribe(a);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            subscriptionId: c
                        }),
                        await this.client.core.pairing.activate({
                            topic: e
                        })
                    } else
                        gr(t) && (await this.client.proposal.delete(n, vn("USER_DISCONNECTED")),
                        this.events.emit(Yt("session_connect"), {
                            error: t.error
                        }))
                }
                ,
                this.onSessionSettleRequest = async(e,t)=>{
                    const {id: n, params: r} = t;
                    try {
                        this.isValidSessionSettleRequest(r);
                        const {relay: n, controller: i, expiry: s, namespaces: o, requiredNamespaces: a, optionalNamespaces: c, sessionProperties: u, pairingTopic: h} = t.params
                          , l = Jo({
                            topic: e,
                            relay: n,
                            expiry: s,
                            namespaces: o,
                            acknowledged: !0,
                            pairingTopic: h,
                            requiredNamespaces: a,
                            optionalNamespaces: c,
                            controller: i.publicKey,
                            self: {
                                publicKey: "",
                                metadata: this.client.metadata
                            },
                            peer: {
                                publicKey: i.publicKey,
                                metadata: i.metadata
                            }
                        }, u && {
                            sessionProperties: u
                        });
                        await this.sendResult({
                            id: t.id,
                            topic: e,
                            result: !0
                        }),
                        this.events.emit(Yt("session_connect"), {
                            session: l
                        }),
                        this.cleanupDuplicatePairings(l)
                    } catch (re) {
                        await this.sendError(n, e, re),
                        this.client.logger.error(re)
                    }
                }
                ,
                this.onSessionSettleResponse = async(e,t)=>{
                    const {id: n} = t;
                    dr(t) ? (await this.client.session.update(e, {
                        acknowledged: !0
                    }),
                    this.events.emit(Yt("session_approve", n), {})) : gr(t) && (await this.client.session.delete(e, vn("USER_DISCONNECTED")),
                    this.events.emit(Yt("session_approve", n), {
                        error: t.error
                    }))
                }
                ,
                this.onSessionUpdateRequest = async(e,t)=>{
                    const {params: n, id: r} = t;
                    try {
                        const t = "".concat(e, "_session_update")
                          , i = kn.get(t);
                        if (i && this.isRequestOutOfSync(i, r))
                            return void this.client.logger.info("Discarding out of sync request - ".concat(r));
                        this.isValidUpdate(Jo({
                            topic: e
                        }, n)),
                        await this.client.session.update(e, {
                            namespaces: n.namespaces
                        }),
                        await this.sendResult({
                            id: r,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_update", {
                            id: r,
                            topic: e,
                            params: n
                        }),
                        kn.set(t, r)
                    } catch (re) {
                        await this.sendError(r, e, re),
                        this.client.logger.error(re)
                    }
                }
                ,
                this.isRequestOutOfSync = (e,t)=>parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)),
                this.onSessionUpdateResponse = (e,t)=>{
                    const {id: n} = t;
                    dr(t) ? this.events.emit(Yt("session_update", n), {}) : gr(t) && this.events.emit(Yt("session_update", n), {
                        error: t.error
                    })
                }
                ,
                this.onSessionExtendRequest = async(e,t)=>{
                    const {id: n} = t;
                    try {
                        this.isValidExtend({
                            topic: e
                        }),
                        await this.setExpiry(e, Qt(Mo)),
                        await this.sendResult({
                            id: n,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_extend", {
                            id: n,
                            topic: e
                        })
                    } catch (le) {
                        await this.sendError(n, e, le),
                        this.client.logger.error(le)
                    }
                }
                ,
                this.onSessionExtendResponse = (e,t)=>{
                    const {id: n} = t;
                    dr(t) ? this.events.emit(Yt("session_extend", n), {}) : gr(t) && this.events.emit(Yt("session_extend", n), {
                        error: t.error
                    })
                }
                ,
                this.onSessionPingRequest = async(e,t)=>{
                    const {id: n} = t;
                    try {
                        this.isValidPing({
                            topic: e
                        }),
                        await this.sendResult({
                            id: n,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_ping", {
                            id: n,
                            topic: e
                        })
                    } catch (le) {
                        await this.sendError(n, e, le),
                        this.client.logger.error(le)
                    }
                }
                ,
                this.onSessionPingResponse = (e,t)=>{
                    const {id: n} = t;
                    setTimeout((()=>{
                        dr(t) ? this.events.emit(Yt("session_ping", n), {}) : gr(t) && this.events.emit(Yt("session_ping", n), {
                            error: t.error
                        })
                    }
                    ), 500)
                }
                ,
                this.onSessionDeleteRequest = async(e,t)=>{
                    const {id: n} = t;
                    try {
                        this.isValidDisconnect({
                            topic: e,
                            reason: t.params
                        }),
                        await Promise.all([new Promise((t=>{
                            this.client.core.relayer.once(ds, (async()=>{
                                t(await this.deleteSession(e))
                            }
                            ))
                        }
                        )), this.sendResult({
                            id: n,
                            topic: e,
                            result: !0
                        })]),
                        this.client.events.emit("session_delete", {
                            id: n,
                            topic: e
                        })
                    } catch (le) {
                        this.client.logger.error(le)
                    }
                }
                ,
                this.onSessionRequest = async(e,t)=>{
                    const {id: n, params: r} = t;
                    try {
                        this.isValidRequest(Jo({
                            topic: e
                        }, r));
                        const t = bt(JSON.stringify(tr("wc_sessionRequest", r, n)))
                          , i = this.client.session.get(e)
                          , s = {
                            id: n,
                            topic: e,
                            params: r,
                            verifyContext: await this.getVerifyContext(t, i.peer.metadata)
                        };
                        await this.setPendingSessionRequest(s),
                        this.addSessionRequestToSessionRequestQueue(s),
                        this.processSessionRequestQueue()
                    } catch (re) {
                        await this.sendError(n, e, re),
                        this.client.logger.error(re)
                    }
                }
                ,
                this.onSessionRequestResponse = (e,t)=>{
                    const {id: n} = t;
                    dr(t) ? this.events.emit(Yt("session_request", n), {
                        result: t.result
                    }) : gr(t) && this.events.emit(Yt("session_request", n), {
                        error: t.error
                    })
                }
                ,
                this.onSessionEventRequest = async(e,t)=>{
                    const {id: n, params: r} = t;
                    try {
                        const t = "".concat(e, "_session_event_").concat(r.event.name)
                          , i = kn.get(t);
                        if (i && this.isRequestOutOfSync(i, n))
                            return void this.client.logger.info("Discarding out of sync request - ".concat(n));
                        this.isValidEmit(Jo({
                            topic: e
                        }, r)),
                        this.client.events.emit("session_event", {
                            id: n,
                            topic: e,
                            params: r
                        }),
                        kn.set(t, n)
                    } catch (re) {
                        await this.sendError(n, e, re),
                        this.client.logger.error(re)
                    }
                }
                ,
                this.addSessionRequestToSessionRequestQueue = e=>{
                    this.sessionRequestQueue.queue.push(e)
                }
                ,
                this.cleanupAfterResponse = e=>{
                    this.deletePendingSessionRequest(e.response.id, {
                        message: "fulfilled",
                        code: 0
                    }),
                    setTimeout((()=>{
                        this.sessionRequestQueue.state = qo,
                        this.processSessionRequestQueue()
                    }
                    ), (0,
                    l.toMiliseconds)(this.requestQueueDelay))
                }
                ,
                this.processSessionRequestQueue = ()=>{
                    if (this.sessionRequestQueue.state === zo)
                        return void this.client.logger.info("session request queue is already active.");
                    const e = this.sessionRequestQueue.queue[0];
                    if (e)
                        try {
                            this.sessionRequestQueue.state = zo,
                            this.client.events.emit("session_request", e)
                        } catch (t) {
                            this.client.logger.error(t)
                        }
                    else
                        this.client.logger.info("session request queue is empty.")
                }
                ,
                this.onPairingCreated = e=>{
                    if (e.active)
                        return;
                    const t = this.client.proposal.getAll().find((t=>t.pairingTopic === e.topic));
                    t && this.onSessionProposeRequest(e.topic, tr("wc_sessionPropose", {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                        relays: t.relays,
                        proposer: t.proposer,
                        sessionProperties: t.sessionProperties
                    }, t.id))
                }
                ,
                this.isValidConnect = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "connect() params: ".concat(JSON.stringify(e)));
                        throw new Error(t)
                    }
                    const {pairingTopic: t, requiredNamespaces: n, optionalNamespaces: r, sessionProperties: i, relays: s} = e;
                    if (wn(t) || await this.isValidPairingTopic(t),
                    !function(e, t) {
                        let n = !1;
                        return t && !e ? n = !0 : e && yn(e) && e.length && e.forEach((e=>{
                            n = An(e)
                        }
                        )),
                        n
                    }(s, !0)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "connect() relays: ".concat(s));
                        throw new Error(e)
                    }
                    !wn(n) && 0 !== mn(n) && this.validateNamespaces(n, "requiredNamespaces"),
                    !wn(r) && 0 !== mn(r) && this.validateNamespaces(r, "optionalNamespaces"),
                    wn(i) || this.validateSessionProps(i, "sessionProperties")
                }
                ,
                this.validateNamespaces = (e,t)=>{
                    const n = function(e, t, n) {
                        let r = null;
                        if (e && mn(e)) {
                            const i = On(e, t);
                            i && (r = i);
                            const s = Pn(e, t, n);
                            s && (r = s)
                        } else
                            r = gn("MISSING_OR_INVALID", "".concat(t, ", ").concat(n, " should be an object with data"));
                        return r
                    }(e, "connect()", t);
                    if (n)
                        throw new Error(n.message)
                }
                ,
                this.isValidApprove = async e=>{
                    if (!xn(e))
                        throw new Error(gn("MISSING_OR_INVALID", "approve() params: ".concat(e)).message);
                    const {id: t, namespaces: n, relayProtocol: r, sessionProperties: i} = e;
                    await this.isValidProposalId(t);
                    const s = this.client.proposal.get(t)
                      , o = Rn(n, "approve()");
                    if (o)
                        throw new Error(o.message);
                    const a = jn(s.requiredNamespaces, n, "approve()");
                    if (a)
                        throw new Error(a.message);
                    if (!bn(r, !0)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "approve() relayProtocol: ".concat(r));
                        throw new Error(e)
                    }
                    wn(i) || this.validateSessionProps(i, "sessionProperties")
                }
                ,
                this.isValidReject = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "reject() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {id: t, reason: n} = e;
                    if (await this.isValidProposalId(t),
                    !function(e) {
                        return !(!e || "object" != typeof e || !e.code || !_n(e.code, !1) || !e.message || !bn(e.message, !1))
                    }(n)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "reject() reason: ".concat(JSON.stringify(n)));
                        throw new Error(e)
                    }
                }
                ,
                this.isValidSessionSettleRequest = e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "onSessionSettleRequest() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {relay: t, controller: n, namespaces: r, expiry: i} = e;
                    if (!An(t)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                        throw new Error(e)
                    }
                    const s = function(e, t) {
                        let n = null;
                        return bn(null === e || void 0 === e ? void 0 : e.publicKey, !1) || (n = gn("MISSING_OR_INVALID", "".concat(t, " controller public key should be a string"))),
                        n
                    }(n, "onSessionSettleRequest()");
                    if (s)
                        throw new Error(s.message);
                    const o = Rn(r, "onSessionSettleRequest()");
                    if (o)
                        throw new Error(o.message);
                    if (Jt(i)) {
                        const {message: e} = gn("EXPIRED", "onSessionSettleRequest()");
                        throw new Error(e)
                    }
                }
                ,
                this.isValidUpdate = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "update() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: t, namespaces: n} = e;
                    await this.isValidSessionTopic(t);
                    const r = this.client.session.get(t)
                      , i = Rn(n, "update()");
                    if (i)
                        throw new Error(i.message);
                    const s = jn(r.requiredNamespaces, n, "update()");
                    if (s)
                        throw new Error(s.message)
                }
                ,
                this.isValidExtend = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "extend() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidSessionTopic(t)
                }
                ,
                this.isValidRequest = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "request() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: t, request: n, chainId: r, expiry: i} = e;
                    await this.isValidSessionTopic(t);
                    const {namespaces: s} = this.client.session.get(t);
                    if (!Nn(s, r)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "request() chainId: ".concat(r));
                        throw new Error(e)
                    }
                    if (!function(e) {
                        return !(wn(e) || !bn(e.method, !1))
                    }(n)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "request() ".concat(JSON.stringify(n)));
                        throw new Error(e)
                    }
                    if (!Tn(s, r, n.method)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "request() method: ".concat(n.method));
                        throw new Error(e)
                    }
                    if (i && !function(e, t) {
                        return _n(e, !1) && e <= t.max && e >= t.min
                    }(i, ko)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "request() expiry: ".concat(i, ". Expiry must be a number (in seconds) between ").concat(ko.min, " and ").concat(ko.max));
                        throw new Error(e)
                    }
                }
                ,
                this.isValidRespond = async e=>{
                    var t;
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "respond() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: n, response: r} = e;
                    try {
                        await this.isValidSessionTopic(n)
                    } catch (re) {
                        throw null != (t = null === e || void 0 === e ? void 0 : e.response) && t.id && this.cleanupAfterResponse(e),
                        re
                    }
                    if (!function(e) {
                        return !(wn(e) || wn(e.result) && wn(e.error) || !_n(e.id, !1) || !bn(e.jsonrpc, !1))
                    }(r)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "respond() response: ".concat(JSON.stringify(r)));
                        throw new Error(e)
                    }
                }
                ,
                this.isValidPing = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "ping() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidSessionOrPairingTopic(t)
                }
                ,
                this.isValidEmit = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "emit() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: t, event: n, chainId: r} = e;
                    await this.isValidSessionTopic(t);
                    const {namespaces: i} = this.client.session.get(t);
                    if (!Nn(i, r)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "emit() chainId: ".concat(r));
                        throw new Error(e)
                    }
                    if (!function(e) {
                        return !(wn(e) || !bn(e.name, !1))
                    }(n)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(n)));
                        throw new Error(e)
                    }
                    if (!Cn(i, r, n.name)) {
                        const {message: e} = gn("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(n)));
                        throw new Error(e)
                    }
                }
                ,
                this.isValidDisconnect = async e=>{
                    if (!xn(e)) {
                        const {message: t} = gn("MISSING_OR_INVALID", "disconnect() params: ".concat(e));
                        throw new Error(t)
                    }
                    const {topic: t} = e;
                    await this.isValidSessionOrPairingTopic(t)
                }
                ,
                this.getVerifyContext = async(e,t)=>{
                    const n = {
                        verified: {
                            verifyUrl: t.verifyUrl || qs,
                            validation: "UNKNOWN",
                            origin: t.url || ""
                        }
                    };
                    try {
                        const r = await this.client.core.verify.resolve({
                            attestationId: e,
                            verifyUrl: t.verifyUrl
                        });
                        r && (n.verified.origin = r.origin,
                        n.verified.isScam = r.isScam,
                        n.verified.validation = r.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                    } catch (le) {
                        this.client.logger.info(le)
                    }
                    return this.client.logger.info("Verify context: ".concat(JSON.stringify(n))),
                    n
                }
                ,
                this.validateSessionProps = (e,t)=>{
                    Object.values(e).forEach((e=>{
                        if (!bn(e, !1)) {
                            const {message: n} = gn("MISSING_OR_INVALID", "".concat(t, " must be in Record<string, string> format. Received: ").concat(JSON.stringify(e)));
                            throw new Error(n)
                        }
                    }
                    ))
                }
            }
            async isInitialized() {
                if (!this.initialized) {
                    const {message: e} = gn("NOT_INITIALIZED", this.name);
                    throw new Error(e)
                }
                await this.client.core.relayer.confirmOnlineStateOrThrow()
            }
            registerRelayerEvents() {
                this.client.core.relayer.on(cs, (async e=>{
                    const {topic: t, message: n} = e;
                    if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
                        return;
                    const r = await this.client.core.crypto.decode(t, n);
                    try {
                        pr(r) ? (this.client.core.history.set(t, r),
                        this.onRelayEventRequest({
                            topic: t,
                            payload: r
                        })) : fr(r) ? (await this.client.core.history.resolve(r),
                        await this.onRelayEventResponse({
                            topic: t,
                            payload: r
                        }),
                        this.client.core.history.delete(t, r.id)) : this.onRelayEventUnknownPayload({
                            topic: t,
                            payload: r
                        })
                    } catch (le) {
                        this.client.logger.error(le)
                    }
                }
                ))
            }
            registerExpirerEvents() {
                this.client.core.expirer.on(Ms, (async e=>{
                    const {topic: t, id: n} = Gt(e.target);
                    if (n && this.client.pendingRequest.keys.includes(n))
                        return await this.deletePendingSessionRequest(n, gn("EXPIRED"), !0);
                    t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0),
                    this.client.events.emit("session_expire", {
                        topic: t
                    })) : n && (await this.deleteProposal(n, !0),
                    this.client.events.emit("proposal_expire", {
                        id: n
                    }))
                }
                ))
            }
            registerPairingEvents() {
                this.client.core.pairing.events.on(Os, (e=>this.onPairingCreated(e)))
            }
            isValidPairingTopic(e) {
                if (!bn(e, !1)) {
                    const {message: t} = gn("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(e));
                    throw new Error(t)
                }
                if (!this.client.core.pairing.pairings.keys.includes(e)) {
                    const {message: t} = gn("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(e));
                    throw new Error(t)
                }
                if (Jt(this.client.core.pairing.pairings.get(e).expiry)) {
                    const {message: t} = gn("EXPIRED", "pairing topic: ".concat(e));
                    throw new Error(t)
                }
            }
            async isValidSessionTopic(e) {
                if (!bn(e, !1)) {
                    const {message: t} = gn("MISSING_OR_INVALID", "session topic should be a string: ".concat(e));
                    throw new Error(t)
                }
                if (!this.client.session.keys.includes(e)) {
                    const {message: t} = gn("NO_MATCHING_KEY", "session topic doesn't exist: ".concat(e));
                    throw new Error(t)
                }
                if (Jt(this.client.session.get(e).expiry)) {
                    await this.deleteSession(e);
                    const {message: t} = gn("EXPIRED", "session topic: ".concat(e));
                    throw new Error(t)
                }
            }
            async isValidSessionOrPairingTopic(e) {
                if (this.client.session.keys.includes(e))
                    await this.isValidSessionTopic(e);
                else {
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        if (bn(e, !1)) {
                            const {message: t} = gn("NO_MATCHING_KEY", "session or pairing topic doesn't exist: ".concat(e));
                            throw new Error(t)
                        }
                        {
                            const {message: t} = gn("MISSING_OR_INVALID", "session or pairing topic should be a string: ".concat(e));
                            throw new Error(t)
                        }
                    }
                    this.isValidPairingTopic(e)
                }
            }
            async isValidProposalId(e) {
                if (!function(e) {
                    return "number" == typeof e
                }(e)) {
                    const {message: t} = gn("MISSING_OR_INVALID", "proposal id should be a number: ".concat(e));
                    throw new Error(t)
                }
                if (!this.client.proposal.keys.includes(e)) {
                    const {message: t} = gn("NO_MATCHING_KEY", "proposal id doesn't exist: ".concat(e));
                    throw new Error(t)
                }
                if (Jt(this.client.proposal.get(e).expiry)) {
                    await this.deleteProposal(e);
                    const {message: t} = gn("EXPIRED", "proposal id: ".concat(e));
                    throw new Error(t)
                }
            }
        }
        class Zo extends vo {
            constructor(e, t) {
                super(e, t, "proposal", To),
                this.core = e,
                this.logger = t
            }
        }
        class Xo extends vo {
            constructor(e, t) {
                super(e, t, "session", To),
                this.core = e,
                this.logger = t
            }
        }
        class ea extends vo {
            constructor(e, t) {
                super(e, t, "request", To, (e=>e.id)),
                this.core = e,
                this.logger = t
            }
        }
        class ta extends Re {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.name = Co,
                this.events = new r.EventEmitter,
                this.on = (e,t)=>this.events.on(e, t),
                this.once = (e,t)=>this.events.once(e, t),
                this.off = (e,t)=>this.events.off(e, t),
                this.removeListener = (e,t)=>this.events.removeListener(e, t),
                this.removeAllListeners = e=>this.events.removeAllListeners(e),
                this.connect = async e=>{
                    try {
                        return await this.engine.connect(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.pair = async e=>{
                    try {
                        return await this.engine.pair(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.approve = async e=>{
                    try {
                        return await this.engine.approve(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.reject = async e=>{
                    try {
                        return await this.engine.reject(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.update = async e=>{
                    try {
                        return await this.engine.update(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.extend = async e=>{
                    try {
                        return await this.engine.extend(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.request = async e=>{
                    try {
                        return await this.engine.request(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.respond = async e=>{
                    try {
                        return await this.engine.respond(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.ping = async e=>{
                    try {
                        return await this.engine.ping(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.emit = async e=>{
                    try {
                        return await this.engine.emit(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.disconnect = async e=>{
                    try {
                        return await this.engine.disconnect(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.find = e=>{
                    try {
                        return this.engine.find(e)
                    } catch (t) {
                        throw this.logger.error(t.message),
                        t
                    }
                }
                ,
                this.getPendingSessionRequests = ()=>{
                    try {
                        return this.engine.getPendingSessionRequests()
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.name = (null === e || void 0 === e ? void 0 : e.name) || Co,
                this.metadata = (null === e || void 0 === e ? void 0 : e.metadata) || (0,
                f.g)() || {
                    name: "",
                    description: "",
                    url: "",
                    icons: [""]
                };
                const t = typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof (null === e || void 0 === e ? void 0 : e.logger) ? e.logger : te()(fe({
                    level: (null === e || void 0 === e ? void 0 : e.logger) || jo
                }));
                this.core = (null === e || void 0 === e ? void 0 : e.core) || new xo(e),
                this.logger = ge(t, this.name),
                this.session = new Xo(this.core,this.logger),
                this.proposal = new Zo(this.core,this.logger),
                this.pendingRequest = new ea(this.core,this.logger),
                this.engine = new $o(this)
            }
            static async init(e) {
                const t = new ta(e);
                return await t.initialize(),
                t
            }
            get context() {
                return de(this.logger)
            }
            get pairing() {
                return this.core.pairing.pairings
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.core.start(),
                    await this.session.init(),
                    await this.proposal.init(),
                    await this.pendingRequest.init(),
                    await this.engine.init(),
                    this.core.verify.init({
                        verifyUrl: this.metadata.verifyUrl
                    }),
                    this.logger.info("SignClient Initialization Success")
                } catch (ar) {
                    throw this.logger.info("SignClient Initialization Failure"),
                    this.logger.error(ar.message),
                    ar
                }
            }
        }
        var na = n(14555)
          , ra = n.n(na)
          , ia = Object.defineProperty
          , sa = Object.defineProperties
          , oa = Object.getOwnPropertyDescriptors
          , aa = Object.getOwnPropertySymbols
          , ca = Object.prototype.hasOwnProperty
          , ua = Object.prototype.propertyIsEnumerable
          , ha = (e,t,n)=>t in e ? ia(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , la = (e,t)=>{
            for (var n in t || (t = {}))
                ca.call(t, n) && ha(e, n, t[n]);
            if (aa)
                for (var n of aa(t))
                    ua.call(t, n) && ha(e, n, t[n]);
            return e
        }
          , pa = (e,t)=>sa(e, oa(t));
        const fa = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        };
        class da {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.url = e,
                this.disableProviderPing = t,
                this.events = new r.EventEmitter,
                this.isAvailable = !1,
                this.registering = !1,
                !ur(e))
                    throw new Error("Provided URL is not compatible with HTTP connection: ".concat(e));
                this.url = e,
                this.disableProviderPing = t
            }
            get connected() {
                return this.isAvailable
            }
            get connecting() {
                return this.registering
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            async open() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                await this.register(e)
            }
            async close() {
                if (!this.isAvailable)
                    throw new Error("Connection already closed");
                this.onClose()
            }
            async send(e) {
                this.isAvailable || await this.register();
                try {
                    const t = B(e)
                      , n = await (await ra()(this.url, pa(la({}, fa), {
                        body: t
                    }))).json();
                    this.onPayload({
                        data: n
                    })
                } catch (sr) {
                    this.onError(e.id, sr)
                }
            }
            async register() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                if (!ur(e))
                    throw new Error("Provided URL is not compatible with HTTP connection: ".concat(e));
                if (this.registering) {
                    const e = this.events.getMaxListeners();
                    return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1),
                    new Promise(((e,t)=>{
                        this.events.once("register_error", (e=>{
                            this.resetMaxListeners(),
                            t(e)
                        }
                        )),
                        this.events.once("open", (()=>{
                            if (this.resetMaxListeners(),
                            typeof this.isAvailable > "u")
                                return t(new Error("HTTP connection is missing or invalid"));
                            e()
                        }
                        ))
                    }
                    ))
                }
                this.url = e,
                this.registering = !0;
                try {
                    if (!this.disableProviderPing) {
                        const t = B({
                            id: 1,
                            jsonrpc: "2.0",
                            method: "test",
                            params: []
                        });
                        await ra()(e, pa(la({}, fa), {
                            body: t
                        }))
                    }
                    this.onOpen()
                } catch (sr) {
                    const t = this.parseError(sr);
                    throw this.events.emit("register_error", t),
                    this.onClose(),
                    t
                }
            }
            onOpen() {
                this.isAvailable = !0,
                this.registering = !1,
                this.events.emit("open")
            }
            onClose() {
                this.isAvailable = !1,
                this.registering = !1,
                this.events.emit("close")
            }
            onPayload(e) {
                if (typeof e.data > "u")
                    return;
                const t = "string" == typeof e.data ? K(e.data) : e.data;
                this.events.emit("payload", t)
            }
            onError(e, t) {
                const n = this.parseError(t)
                  , r = rr(e, n.message || n.toString());
                this.events.emit("payload", r)
            }
            parseError(e) {
                return $n(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url, "HTTP")
            }
            resetMaxListeners() {
                this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
            }
        }
        const ga = "error"
          , va = "".concat("wc", "@2:").concat("universal_provider", ":")
          , ya = "default_chain_changed";
        var ma = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof n.g < "u" ? n.g : typeof self < "u" ? self : {}
          , wa = {
            exports: {}
        };
        !function(e, t) {
            (function() {
                var n, r = "Expected a function", i = "__lodash_hash_undefined__", s = "__lodash_placeholder__", o = 16, a = 32, c = 64, u = 128, h = 256, l = 1 / 0, p = 9007199254740991, f = NaN, d = 4294967295, g = d - 1, v = d >>> 1, y = [["ary", u], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", o], ["flip", 512], ["partial", a], ["partialRight", c], ["rearg", h]], m = "[object Arguments]", w = "[object Array]", b = "[object Boolean]", _ = "[object Date]", E = "[object Error]", I = "[object Function]", P = "[object GeneratorFunction]", S = "[object Map]", O = "[object Number]", R = "[object Object]", A = "[object Promise]", x = "[object RegExp]", N = "[object Set]", T = "[object String]", C = "[object Symbol]", j = "[object WeakMap]", D = "[object ArrayBuffer]", L = "[object DataView]", M = "[object Float32Array]", U = "[object Float64Array]", k = "[object Int8Array]", q = "[object Int16Array]", z = "[object Int32Array]", H = "[object Uint8Array]", V = "[object Uint8ClampedArray]", K = "[object Uint16Array]", B = "[object Uint32Array]", W = /\b__p \+= '';/g, F = /\b(__p \+=) '' \+/g, G = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Q = /&(?:amp|lt|gt|quot|#39);/g, J = /[&<>"']/g, Y = RegExp(Q.source), $ = RegExp(J.source), Z = /<%-([\s\S]+?)%>/g, X = /<%([\s\S]+?)%>/g, ee = /<%=([\s\S]+?)%>/g, te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ne = /^\w*$/, re = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ie = /[\\^$.*+?()[\]{}|]/g, se = RegExp(ie.source), oe = /^\s+/, ae = /\s/, ce = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ue = /\{\n\/\* \[wrapped with (.+)\] \*/, he = /,? & /, le = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, pe = /[()=,{}\[\]\/\s]/, fe = /\\(\\)?/g, de = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ge = /\w*$/, ve = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, me = /^\[object .+?Constructor\]$/, we = /^0o[0-7]+$/i, be = /^(?:0|[1-9]\d*)$/, _e = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ee = /($^)/, Ie = /['\n\r\u2028\u2029\\]/g, Pe = "\\ud800-\\udfff", Se = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Oe = "\\u2700-\\u27bf", Re = "a-z\\xdf-\\xf6\\xf8-\\xff", Ae = "A-Z\\xc0-\\xd6\\xd8-\\xde", xe = "\\ufe0e\\ufe0f", Ne = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Te = "['\u2019]", Ce = "[" + Pe + "]", je = "[" + Ne + "]", De = "[" + Se + "]", Le = "\\d+", Me = "[" + Oe + "]", Ue = "[" + Re + "]", ke = "[^" + Pe + Ne + Le + Oe + Re + Ae + "]", qe = "\\ud83c[\\udffb-\\udfff]", ze = "[^" + Pe + "]", He = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ve = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ke = "[" + Ae + "]", Be = "\\u200d", We = "(?:" + Ue + "|" + ke + ")", Fe = "(?:" + Ke + "|" + ke + ")", Ge = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?", Qe = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", Je = "(?:" + De + "|" + qe + ")" + "?", Ye = "[" + xe + "]?", $e = Ye + Je + ("(?:" + Be + "(?:" + [ze, He, Ve].join("|") + ")" + Ye + Je + ")*"), Ze = "(?:" + [Me, He, Ve].join("|") + ")" + $e, Xe = "(?:" + [ze + De + "?", De, He, Ve, Ce].join("|") + ")", et = RegExp(Te, "g"), tt = RegExp(De, "g"), nt = RegExp(qe + "(?=" + qe + ")|" + Xe + $e, "g"), rt = RegExp([Ke + "?" + Ue + "+" + Ge + "(?=" + [je, Ke, "$"].join("|") + ")", Fe + "+" + Qe + "(?=" + [je, Ke + We, "$"].join("|") + ")", Ke + "?" + We + "+" + Ge, Ke + "+" + Qe, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Le, Ze].join("|"), "g"), it = RegExp("[" + Be + Pe + Se + xe + "]"), st = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ot = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], at = -1, ct = {};
                ct[M] = ct[U] = ct[k] = ct[q] = ct[z] = ct[H] = ct[V] = ct[K] = ct[B] = !0,
                ct[m] = ct[w] = ct[D] = ct[b] = ct[L] = ct[_] = ct[E] = ct[I] = ct[S] = ct[O] = ct[R] = ct[x] = ct[N] = ct[T] = ct[j] = !1;
                var ut = {};
                ut[m] = ut[w] = ut[D] = ut[L] = ut[b] = ut[_] = ut[M] = ut[U] = ut[k] = ut[q] = ut[z] = ut[S] = ut[O] = ut[R] = ut[x] = ut[N] = ut[T] = ut[C] = ut[H] = ut[V] = ut[K] = ut[B] = !0,
                ut[E] = ut[I] = ut[j] = !1;
                var ht = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , lt = parseFloat
                  , pt = parseInt
                  , ft = "object" == typeof ma && ma && ma.Object === Object && ma
                  , dt = "object" == typeof self && self && self.Object === Object && self
                  , gt = ft || dt || Function("return this")()
                  , vt = t && !t.nodeType && t
                  , yt = vt && e && !e.nodeType && e
                  , mt = yt && yt.exports === vt
                  , wt = mt && ft.process
                  , bt = function() {
                    try {
                        return yt && yt.require && yt.require("util").types || wt && wt.binding && wt.binding("util")
                    } catch {}
                }()
                  , _t = bt && bt.isArrayBuffer
                  , Et = bt && bt.isDate
                  , It = bt && bt.isMap
                  , Pt = bt && bt.isRegExp
                  , St = bt && bt.isSet
                  , Ot = bt && bt.isTypedArray;
                function Rt(e, t, n) {
                    switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                    }
                    return e.apply(t, n)
                }
                function At(e, t, n, r) {
                    for (var i = -1, s = null == e ? 0 : e.length; ++i < s; ) {
                        var o = e[i];
                        t(r, o, n(o), e)
                    }
                    return r
                }
                function xt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); )
                        ;
                    return e
                }
                function Nt(e, t) {
                    for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); )
                        ;
                    return e
                }
                function Tt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                        if (!t(e[n], n, e))
                            return !1;
                    return !0
                }
                function Ct(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = 0, s = []; ++n < r; ) {
                        var o = e[n];
                        t(o, n, e) && (s[i++] = o)
                    }
                    return s
                }
                function jt(e, t) {
                    return !!(null == e ? 0 : e.length) && Kt(e, t, 0) > -1
                }
                function Dt(e, t, n) {
                    for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                        if (n(t, e[r]))
                            return !0;
                    return !1
                }
                function Lt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
                        i[n] = t(e[n], n, e);
                    return i
                }
                function Mt(e, t) {
                    for (var n = -1, r = t.length, i = e.length; ++n < r; )
                        e[i + n] = t[n];
                    return e
                }
                function Ut(e, t, n, r) {
                    var i = -1
                      , s = null == e ? 0 : e.length;
                    for (r && s && (n = e[++i]); ++i < s; )
                        n = t(n, e[i], i, e);
                    return n
                }
                function kt(e, t, n, r) {
                    var i = null == e ? 0 : e.length;
                    for (r && i && (n = e[--i]); i--; )
                        n = t(n, e[i], i, e);
                    return n
                }
                function qt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                        if (t(e[n], n, e))
                            return !0;
                    return !1
                }
                var zt = Gt("length");
                function Ht(e, t, n) {
                    var r;
                    return n(e, (function(e, n, i) {
                        if (t(e, n, i))
                            return r = n,
                            !1
                    }
                    )),
                    r
                }
                function Vt(e, t, n, r) {
                    for (var i = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i; )
                        if (t(e[s], s, e))
                            return s;
                    return -1
                }
                function Kt(e, t, n) {
                    return t === t ? function(e, t, n) {
                        for (var r = n - 1, i = e.length; ++r < i; )
                            if (e[r] === t)
                                return r;
                        return -1
                    }(e, t, n) : Vt(e, Wt, n)
                }
                function Bt(e, t, n, r) {
                    for (var i = n - 1, s = e.length; ++i < s; )
                        if (r(e[i], t))
                            return i;
                    return -1
                }
                function Wt(e) {
                    return e !== e
                }
                function Ft(e, t) {
                    var n = null == e ? 0 : e.length;
                    return n ? Yt(e, t) / n : f
                }
                function Gt(e) {
                    return function(t) {
                        return null == t ? n : t[e]
                    }
                }
                function Qt(e) {
                    return function(t) {
                        return null == e ? n : e[t]
                    }
                }
                function Jt(e, t, n, r, i) {
                    return i(e, (function(e, i, s) {
                        n = r ? (r = !1,
                        e) : t(n, e, i, s)
                    }
                    )),
                    n
                }
                function Yt(e, t) {
                    for (var r, i = -1, s = e.length; ++i < s; ) {
                        var o = t(e[i]);
                        o !== n && (r = r === n ? o : r + o)
                    }
                    return r
                }
                function $t(e, t) {
                    for (var n = -1, r = Array(e); ++n < e; )
                        r[n] = t(n);
                    return r
                }
                function Zt(e) {
                    return e && e.slice(0, gn(e) + 1).replace(oe, "")
                }
                function Xt(e) {
                    return function(t) {
                        return e(t)
                    }
                }
                function en(e, t) {
                    return Lt(t, (function(t) {
                        return e[t]
                    }
                    ))
                }
                function tn(e, t) {
                    return e.has(t)
                }
                function nn(e, t) {
                    for (var n = -1, r = e.length; ++n < r && Kt(t, e[n], 0) > -1; )
                        ;
                    return n
                }
                function rn(e, t) {
                    for (var n = e.length; n-- && Kt(t, e[n], 0) > -1; )
                        ;
                    return n
                }
                var sn = Qt({
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\xc3": "A",
                    "\xc4": "A",
                    "\xc5": "A",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\xe3": "a",
                    "\xe4": "a",
                    "\xe5": "a",
                    "\xc7": "C",
                    "\xe7": "c",
                    "\xd0": "D",
                    "\xf0": "d",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\xcb": "E",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\xeb": "e",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\xcf": "I",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\xef": "i",
                    "\xd1": "N",
                    "\xf1": "n",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\xd5": "O",
                    "\xd6": "O",
                    "\xd8": "O",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\xf5": "o",
                    "\xf6": "o",
                    "\xf8": "o",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\xdc": "U",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\xfc": "u",
                    "\xdd": "Y",
                    "\xfd": "y",
                    "\xff": "y",
                    "\xc6": "Ae",
                    "\xe6": "ae",
                    "\xde": "Th",
                    "\xfe": "th",
                    "\xdf": "ss",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u0104": "A",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u0105": "a",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\u010e": "D",
                    "\u0110": "D",
                    "\u010f": "d",
                    "\u0111": "d",
                    "\u0112": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\u0118": "E",
                    "\u011a": "E",
                    "\u0113": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\u0119": "e",
                    "\u011b": "e",
                    "\u011c": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u0122": "G",
                    "\u011d": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u0123": "g",
                    "\u0124": "H",
                    "\u0126": "H",
                    "\u0125": "h",
                    "\u0127": "h",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u012e": "I",
                    "\u0130": "I",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\u012f": "i",
                    "\u0131": "i",
                    "\u0134": "J",
                    "\u0135": "j",
                    "\u0136": "K",
                    "\u0137": "k",
                    "\u0138": "k",
                    "\u0139": "L",
                    "\u013b": "L",
                    "\u013d": "L",
                    "\u013f": "L",
                    "\u0141": "L",
                    "\u013a": "l",
                    "\u013c": "l",
                    "\u013e": "l",
                    "\u0140": "l",
                    "\u0142": "l",
                    "\u0143": "N",
                    "\u0145": "N",
                    "\u0147": "N",
                    "\u014a": "N",
                    "\u0144": "n",
                    "\u0146": "n",
                    "\u0148": "n",
                    "\u014b": "n",
                    "\u014c": "O",
                    "\u014e": "O",
                    "\u0150": "O",
                    "\u014d": "o",
                    "\u014f": "o",
                    "\u0151": "o",
                    "\u0154": "R",
                    "\u0156": "R",
                    "\u0158": "R",
                    "\u0155": "r",
                    "\u0157": "r",
                    "\u0159": "r",
                    "\u015a": "S",
                    "\u015c": "S",
                    "\u015e": "S",
                    "\u0160": "S",
                    "\u015b": "s",
                    "\u015d": "s",
                    "\u015f": "s",
                    "\u0161": "s",
                    "\u0162": "T",
                    "\u0164": "T",
                    "\u0166": "T",
                    "\u0163": "t",
                    "\u0165": "t",
                    "\u0167": "t",
                    "\u0168": "U",
                    "\u016a": "U",
                    "\u016c": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u0172": "U",
                    "\u0169": "u",
                    "\u016b": "u",
                    "\u016d": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u0173": "u",
                    "\u0174": "W",
                    "\u0175": "w",
                    "\u0176": "Y",
                    "\u0177": "y",
                    "\u0178": "Y",
                    "\u0179": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u017a": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u0132": "IJ",
                    "\u0133": "ij",
                    "\u0152": "Oe",
                    "\u0153": "oe",
                    "\u0149": "'n",
                    "\u017f": "s"
                })
                  , on = Qt({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function an(e) {
                    return "\\" + ht[e]
                }
                function cn(e) {
                    return it.test(e)
                }
                function un(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach((function(e, r) {
                        n[++t] = [r, e]
                    }
                    )),
                    n
                }
                function hn(e, t) {
                    return function(n) {
                        return e(t(n))
                    }
                }
                function ln(e, t) {
                    for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                        var a = e[n];
                        (a === t || a === s) && (e[n] = s,
                        o[i++] = n)
                    }
                    return o
                }
                function pn(e) {
                    var t = -1
                      , n = Array(e.size);
                    return e.forEach((function(e) {
                        n[++t] = e
                    }
                    )),
                    n
                }
                function fn(e) {
                    return cn(e) ? function(e) {
                        for (var t = nt.lastIndex = 0; nt.test(e); )
                            ++t;
                        return t
                    }(e) : zt(e)
                }
                function dn(e) {
                    return cn(e) ? function(e) {
                        return e.match(nt) || []
                    }(e) : function(e) {
                        return e.split("")
                    }(e)
                }
                function gn(e) {
                    for (var t = e.length; t-- && ae.test(e.charAt(t)); )
                        ;
                    return t
                }
                var vn = Qt({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                });
                var yn = function e(t) {
                    var ae = (t = null == t ? gt : yn.defaults(gt.Object(), t, yn.pick(gt, ot))).Array
                      , Pe = t.Date
                      , Se = t.Error
                      , Oe = t.Function
                      , Re = t.Math
                      , Ae = t.Object
                      , xe = t.RegExp
                      , Ne = t.String
                      , Te = t.TypeError
                      , Ce = ae.prototype
                      , je = Oe.prototype
                      , De = Ae.prototype
                      , Le = t["__core-js_shared__"]
                      , Me = je.toString
                      , Ue = De.hasOwnProperty
                      , ke = 0
                      , qe = function() {
                        var e = /[^.]+$/.exec(Le && Le.keys && Le.keys.IE_PROTO || "");
                        return e ? "Symbol(src)_1." + e : ""
                    }()
                      , ze = De.toString
                      , He = Me.call(Ae)
                      , Ve = gt._
                      , Ke = xe("^" + Me.call(Ue).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
                      , Be = mt ? t.Buffer : n
                      , We = t.Symbol
                      , Fe = t.Uint8Array
                      , Ge = Be ? Be.allocUnsafe : n
                      , Qe = hn(Ae.getPrototypeOf, Ae)
                      , Je = Ae.create
                      , Ye = De.propertyIsEnumerable
                      , $e = Ce.splice
                      , Ze = We ? We.isConcatSpreadable : n
                      , Xe = We ? We.iterator : n
                      , nt = We ? We.toStringTag : n
                      , it = function() {
                        try {
                            var e = fs(Ae, "defineProperty");
                            return e({}, "", {}),
                            e
                        } catch {}
                    }()
                      , ht = t.clearTimeout !== gt.clearTimeout && t.clearTimeout
                      , ft = Pe && Pe.now !== gt.Date.now && Pe.now
                      , dt = t.setTimeout !== gt.setTimeout && t.setTimeout
                      , vt = Re.ceil
                      , yt = Re.floor
                      , wt = Ae.getOwnPropertySymbols
                      , bt = Be ? Be.isBuffer : n
                      , zt = t.isFinite
                      , Qt = Ce.join
                      , mn = hn(Ae.keys, Ae)
                      , wn = Re.max
                      , bn = Re.min
                      , _n = Pe.now
                      , En = t.parseInt
                      , In = Re.random
                      , Pn = Ce.reverse
                      , Sn = fs(t, "DataView")
                      , On = fs(t, "Map")
                      , Rn = fs(t, "Promise")
                      , An = fs(t, "Set")
                      , xn = fs(t, "WeakMap")
                      , Nn = fs(Ae, "create")
                      , Tn = xn && new xn
                      , Cn = {}
                      , jn = qs(Sn)
                      , Dn = qs(On)
                      , Ln = qs(Rn)
                      , Mn = qs(An)
                      , Un = qs(xn)
                      , kn = We ? We.prototype : n
                      , qn = kn ? kn.valueOf : n
                      , zn = kn ? kn.toString : n;
                    function Hn(e) {
                        if (ra(e) && !Fo(e) && !(e instanceof Wn)) {
                            if (e instanceof Bn)
                                return e;
                            if (Ue.call(e, "__wrapped__"))
                                return zs(e)
                        }
                        return new Bn(e)
                    }
                    var Vn = function() {
                        function e() {}
                        return function(t) {
                            if (!na(t))
                                return {};
                            if (Je)
                                return Je(t);
                            e.prototype = t;
                            var r = new e;
                            return e.prototype = n,
                            r
                        }
                    }();
                    function Kn() {}
                    function Bn(e, t) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__chain__ = !!t,
                        this.__index__ = 0,
                        this.__values__ = n
                    }
                    function Wn(e) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = d,
                        this.__views__ = []
                    }
                    function Fn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Gn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Qn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function Jn(e) {
                        var t = -1
                          , n = null == e ? 0 : e.length;
                        for (this.__data__ = new Qn; ++t < n; )
                            this.add(e[t])
                    }
                    function Yn(e) {
                        var t = this.__data__ = new Gn(e);
                        this.size = t.size
                    }
                    function $n(e, t) {
                        var n = Fo(e)
                          , r = !n && Wo(e)
                          , i = !n && !r && Yo(e)
                          , s = !n && !r && !i && la(e)
                          , o = n || r || i || s
                          , a = o ? $t(e.length, Ne) : []
                          , c = a.length;
                        for (var u in e)
                            (t || Ue.call(e, u)) && (!o || !("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || bs(u, c))) && a.push(u);
                        return a
                    }
                    function Zn(e) {
                        var t = e.length;
                        return t ? e[Yr(0, t - 1)] : n
                    }
                    function Xn(e, t) {
                        return Ms(Ti(e), ur(t, 0, e.length))
                    }
                    function er(e) {
                        return Ms(Ti(e))
                    }
                    function tr(e, t, r) {
                        (r !== n && !Vo(e[t], r) || r === n && !(t in e)) && ar(e, t, r)
                    }
                    function nr(e, t, r) {
                        var i = e[t];
                        (!Ue.call(e, t) || !Vo(i, r) || r === n && !(t in e)) && ar(e, t, r)
                    }
                    function rr(e, t) {
                        for (var n = e.length; n--; )
                            if (Vo(e[n][0], t))
                                return n;
                        return -1
                    }
                    function ir(e, t, n, r) {
                        return dr(e, (function(e, i, s) {
                            t(r, e, n(e), s)
                        }
                        )),
                        r
                    }
                    function or(e, t) {
                        return e && Ci(t, ja(t), e)
                    }
                    function ar(e, t, n) {
                        "__proto__" == t && it ? it(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        }) : e[t] = n
                    }
                    function cr(e, t) {
                        for (var r = -1, i = t.length, s = ae(i), o = null == e; ++r < i; )
                            s[r] = o ? n : Aa(e, t[r]);
                        return s
                    }
                    function ur(e, t, r) {
                        return e === e && (r !== n && (e = e <= r ? e : r),
                        t !== n && (e = e >= t ? e : t)),
                        e
                    }
                    function hr(e, t, r, i, s, o) {
                        var a, c = 1 & t, u = 2 & t, h = 4 & t;
                        if (r && (a = s ? r(e, i, s, o) : r(e)),
                        a !== n)
                            return a;
                        if (!na(e))
                            return e;
                        var l = Fo(e);
                        if (l) {
                            if (a = function(e) {
                                var t = e.length
                                  , n = new e.constructor(t);
                                return t && "string" == typeof e[0] && Ue.call(e, "index") && (n.index = e.index,
                                n.input = e.input),
                                n
                            }(e),
                            !c)
                                return Ti(e, a)
                        } else {
                            var p = vs(e)
                              , f = p == I || p == P;
                            if (Yo(e))
                                return Si(e, c);
                            if (p == R || p == m || f && !s) {
                                if (a = u || f ? {} : ms(e),
                                !c)
                                    return u ? function(e, t) {
                                        return Ci(e, gs(e), t)
                                    }(e, function(e, t) {
                                        return e && Ci(t, Da(t), e)
                                    }(a, e)) : function(e, t) {
                                        return Ci(e, ds(e), t)
                                    }(e, or(a, e))
                            } else {
                                if (!ut[p])
                                    return s ? e : {};
                                a = function(e, t, n) {
                                    var r = e.constructor;
                                    switch (t) {
                                    case D:
                                        return Oi(e);
                                    case b:
                                    case _:
                                        return new r(+e);
                                    case L:
                                        return function(e, t) {
                                            var n = t ? Oi(e.buffer) : e.buffer;
                                            return new e.constructor(n,e.byteOffset,e.byteLength)
                                        }(e, n);
                                    case M:
                                    case U:
                                    case k:
                                    case q:
                                    case z:
                                    case H:
                                    case V:
                                    case K:
                                    case B:
                                        return Ri(e, n);
                                    case S:
                                        return new r;
                                    case O:
                                    case T:
                                        return new r(e);
                                    case x:
                                        return function(e) {
                                            var t = new e.constructor(e.source,ge.exec(e));
                                            return t.lastIndex = e.lastIndex,
                                            t
                                        }(e);
                                    case N:
                                        return new r;
                                    case C:
                                        return function(e) {
                                            return qn ? Ae(qn.call(e)) : {}
                                        }(e)
                                    }
                                }(e, p, c)
                            }
                        }
                        o || (o = new Yn);
                        var d = o.get(e);
                        if (d)
                            return d;
                        o.set(e, a),
                        ca(e) ? e.forEach((function(n) {
                            a.add(hr(n, t, r, n, e, o))
                        }
                        )) : ia(e) && e.forEach((function(n, i) {
                            a.set(i, hr(n, t, r, i, e, o))
                        }
                        ));
                        var g = l ? n : (h ? u ? os : ss : u ? Da : ja)(e);
                        return xt(g || e, (function(n, i) {
                            g && (n = e[i = n]),
                            nr(a, i, hr(n, t, r, i, e, o))
                        }
                        )),
                        a
                    }
                    function lr(e, t, r) {
                        var i = r.length;
                        if (null == e)
                            return !i;
                        for (e = Ae(e); i--; ) {
                            var s = r[i]
                              , o = t[s]
                              , a = e[s];
                            if (a === n && !(s in e) || !o(a))
                                return !1
                        }
                        return !0
                    }
                    function pr(e, t, i) {
                        if ("function" != typeof e)
                            throw new Te(r);
                        return Cs((function() {
                            e.apply(n, i)
                        }
                        ), t)
                    }
                    function fr(e, t, n, r) {
                        var i = -1
                          , s = jt
                          , o = !0
                          , a = e.length
                          , c = []
                          , u = t.length;
                        if (!a)
                            return c;
                        n && (t = Lt(t, Xt(n))),
                        r ? (s = Dt,
                        o = !1) : t.length >= 200 && (s = tn,
                        o = !1,
                        t = new Jn(t));
                        e: for (; ++i < a; ) {
                            var h = e[i]
                              , l = null == n ? h : n(h);
                            if (h = r || 0 !== h ? h : 0,
                            o && l === l) {
                                for (var p = u; p--; )
                                    if (t[p] === l)
                                        continue e;
                                c.push(h)
                            } else
                                s(t, l, r) || c.push(h)
                        }
                        return c
                    }
                    Hn.templateSettings = {
                        escape: Z,
                        evaluate: X,
                        interpolate: ee,
                        variable: "",
                        imports: {
                            _: Hn
                        }
                    },
                    Hn.prototype = Kn.prototype,
                    Hn.prototype.constructor = Hn,
                    Bn.prototype = Vn(Kn.prototype),
                    Bn.prototype.constructor = Bn,
                    Wn.prototype = Vn(Kn.prototype),
                    Wn.prototype.constructor = Wn,
                    Fn.prototype.clear = function() {
                        this.__data__ = Nn ? Nn(null) : {},
                        this.size = 0
                    }
                    ,
                    Fn.prototype.delete = function(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    Fn.prototype.get = function(e) {
                        var t = this.__data__;
                        if (Nn) {
                            var r = t[e];
                            return r === i ? n : r
                        }
                        return Ue.call(t, e) ? t[e] : n
                    }
                    ,
                    Fn.prototype.has = function(e) {
                        var t = this.__data__;
                        return Nn ? t[e] !== n : Ue.call(t, e)
                    }
                    ,
                    Fn.prototype.set = function(e, t) {
                        var r = this.__data__;
                        return this.size += this.has(e) ? 0 : 1,
                        r[e] = Nn && t === n ? i : t,
                        this
                    }
                    ,
                    Gn.prototype.clear = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    ,
                    Gn.prototype.delete = function(e) {
                        var t = this.__data__
                          , n = rr(t, e);
                        return !(n < 0) && (n == t.length - 1 ? t.pop() : $e.call(t, n, 1),
                        --this.size,
                        !0)
                    }
                    ,
                    Gn.prototype.get = function(e) {
                        var t = this.__data__
                          , r = rr(t, e);
                        return r < 0 ? n : t[r][1]
                    }
                    ,
                    Gn.prototype.has = function(e) {
                        return rr(this.__data__, e) > -1
                    }
                    ,
                    Gn.prototype.set = function(e, t) {
                        var n = this.__data__
                          , r = rr(n, e);
                        return r < 0 ? (++this.size,
                        n.push([e, t])) : n[r][1] = t,
                        this
                    }
                    ,
                    Qn.prototype.clear = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new Fn,
                            map: new (On || Gn),
                            string: new Fn
                        }
                    }
                    ,
                    Qn.prototype.delete = function(e) {
                        var t = ls(this, e).delete(e);
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    Qn.prototype.get = function(e) {
                        return ls(this, e).get(e)
                    }
                    ,
                    Qn.prototype.has = function(e) {
                        return ls(this, e).has(e)
                    }
                    ,
                    Qn.prototype.set = function(e, t) {
                        var n = ls(this, e)
                          , r = n.size;
                        return n.set(e, t),
                        this.size += n.size == r ? 0 : 1,
                        this
                    }
                    ,
                    Jn.prototype.add = Jn.prototype.push = function(e) {
                        return this.__data__.set(e, i),
                        this
                    }
                    ,
                    Jn.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    Yn.prototype.clear = function() {
                        this.__data__ = new Gn,
                        this.size = 0
                    }
                    ,
                    Yn.prototype.delete = function(e) {
                        var t = this.__data__
                          , n = t.delete(e);
                        return this.size = t.size,
                        n
                    }
                    ,
                    Yn.prototype.get = function(e) {
                        return this.__data__.get(e)
                    }
                    ,
                    Yn.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    Yn.prototype.set = function(e, t) {
                        var n = this.__data__;
                        if (n instanceof Gn) {
                            var r = n.__data__;
                            if (!On || r.length < 199)
                                return r.push([e, t]),
                                this.size = ++n.size,
                                this;
                            n = this.__data__ = new Qn(r)
                        }
                        return n.set(e, t),
                        this.size = n.size,
                        this
                    }
                    ;
                    var dr = Li(Er)
                      , gr = Li(Ir, !0);
                    function vr(e, t) {
                        var n = !0;
                        return dr(e, (function(e, r, i) {
                            return n = !!t(e, r, i)
                        }
                        )),
                        n
                    }
                    function yr(e, t, r) {
                        for (var i = -1, s = e.length; ++i < s; ) {
                            var o = e[i]
                              , a = t(o);
                            if (null != a && (c === n ? a === a && !ha(a) : r(a, c)))
                                var c = a
                                  , u = o
                        }
                        return u
                    }
                    function mr(e, t) {
                        var n = [];
                        return dr(e, (function(e, r, i) {
                            t(e, r, i) && n.push(e)
                        }
                        )),
                        n
                    }
                    function wr(e, t, n, r, i) {
                        var s = -1
                          , o = e.length;
                        for (n || (n = ws),
                        i || (i = []); ++s < o; ) {
                            var a = e[s];
                            t > 0 && n(a) ? t > 1 ? wr(a, t - 1, n, r, i) : Mt(i, a) : r || (i[i.length] = a)
                        }
                        return i
                    }
                    var br = Mi()
                      , _r = Mi(!0);
                    function Er(e, t) {
                        return e && br(e, t, ja)
                    }
                    function Ir(e, t) {
                        return e && _r(e, t, ja)
                    }
                    function Pr(e, t) {
                        return Ct(t, (function(t) {
                            return Xo(e[t])
                        }
                        ))
                    }
                    function Sr(e, t) {
                        for (var r = 0, i = (t = _i(t, e)).length; null != e && r < i; )
                            e = e[ks(t[r++])];
                        return r && r == i ? e : n
                    }
                    function Or(e, t, n) {
                        var r = t(e);
                        return Fo(e) ? r : Mt(r, n(e))
                    }
                    function Rr(e) {
                        return null == e ? e === n ? "[object Undefined]" : "[object Null]" : nt && nt in Ae(e) ? function(e) {
                            var t = Ue.call(e, nt)
                              , r = e[nt];
                            try {
                                e[nt] = n;
                                var i = !0
                            } catch {}
                            var s = ze.call(e);
                            return i && (t ? e[nt] = r : delete e[nt]),
                            s
                        }(e) : function(e) {
                            return ze.call(e)
                        }(e)
                    }
                    function Ar(e, t) {
                        return e > t
                    }
                    function xr(e, t) {
                        return null != e && Ue.call(e, t)
                    }
                    function Nr(e, t) {
                        return null != e && t in Ae(e)
                    }
                    function Tr(e, t, r) {
                        for (var i = r ? Dt : jt, s = e[0].length, o = e.length, a = o, c = ae(o), u = 1 / 0, h = []; a--; ) {
                            var l = e[a];
                            a && t && (l = Lt(l, Xt(t))),
                            u = bn(l.length, u),
                            c[a] = !r && (t || s >= 120 && l.length >= 120) ? new Jn(a && l) : n
                        }
                        l = e[0];
                        var p = -1
                          , f = c[0];
                        e: for (; ++p < s && h.length < u; ) {
                            var d = l[p]
                              , g = t ? t(d) : d;
                            if (d = r || 0 !== d ? d : 0,
                            !(f ? tn(f, g) : i(h, g, r))) {
                                for (a = o; --a; ) {
                                    var v = c[a];
                                    if (!(v ? tn(v, g) : i(e[a], g, r)))
                                        continue e
                                }
                                f && f.push(g),
                                h.push(d)
                            }
                        }
                        return h
                    }
                    function Cr(e, t, r) {
                        var i = null == (e = xs(e, t = _i(t, e))) ? e : e[ks($s(t))];
                        return null == i ? n : Rt(i, e, r)
                    }
                    function jr(e) {
                        return ra(e) && Rr(e) == m
                    }
                    function Dr(e, t, r, i, s) {
                        return e === t || (null == e || null == t || !ra(e) && !ra(t) ? e !== e && t !== t : function(e, t, r, i, s, o) {
                            var a = Fo(e)
                              , c = Fo(t)
                              , u = a ? w : vs(e)
                              , h = c ? w : vs(t);
                            u = u == m ? R : u;
                            var l = u == R
                              , p = (h = h == m ? R : h) == R
                              , f = u == h;
                            if (f && Yo(e)) {
                                if (!Yo(t))
                                    return !1;
                                a = !0,
                                l = !1
                            }
                            if (f && !l)
                                return o || (o = new Yn),
                                a || la(e) ? rs(e, t, r, i, s, o) : function(e, t, n, r, i, s, o) {
                                    switch (n) {
                                    case L:
                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                            return !1;
                                        e = e.buffer,
                                        t = t.buffer;
                                    case D:
                                        return !(e.byteLength != t.byteLength || !s(new Fe(e), new Fe(t)));
                                    case b:
                                    case _:
                                    case O:
                                        return Vo(+e, +t);
                                    case E:
                                        return e.name == t.name && e.message == t.message;
                                    case x:
                                    case T:
                                        return e == t + "";
                                    case S:
                                        var a = un;
                                    case N:
                                        var c = 1 & r;
                                        if (a || (a = pn),
                                        e.size != t.size && !c)
                                            return !1;
                                        var u = o.get(e);
                                        if (u)
                                            return u == t;
                                        r |= 2,
                                        o.set(e, t);
                                        var h = rs(a(e), a(t), r, i, s, o);
                                        return o.delete(e),
                                        h;
                                    case C:
                                        if (qn)
                                            return qn.call(e) == qn.call(t)
                                    }
                                    return !1
                                }(e, t, u, r, i, s, o);
                            if (!(1 & r)) {
                                var d = l && Ue.call(e, "__wrapped__")
                                  , g = p && Ue.call(t, "__wrapped__");
                                if (d || g) {
                                    var v = d ? e.value() : e
                                      , y = g ? t.value() : t;
                                    return o || (o = new Yn),
                                    s(v, y, r, i, o)
                                }
                            }
                            return !!f && (o || (o = new Yn),
                            function(e, t, r, i, s, o) {
                                var a = 1 & r
                                  , c = ss(e)
                                  , u = c.length
                                  , h = ss(t)
                                  , l = h.length;
                                if (u != l && !a)
                                    return !1;
                                for (var p = u; p--; ) {
                                    var f = c[p];
                                    if (!(a ? f in t : Ue.call(t, f)))
                                        return !1
                                }
                                var d = o.get(e)
                                  , g = o.get(t);
                                if (d && g)
                                    return d == t && g == e;
                                var v = !0;
                                o.set(e, t),
                                o.set(t, e);
                                for (var y = a; ++p < u; ) {
                                    var m = e[f = c[p]]
                                      , w = t[f];
                                    if (i)
                                        var b = a ? i(w, m, f, t, e, o) : i(m, w, f, e, t, o);
                                    if (!(b === n ? m === w || s(m, w, r, i, o) : b)) {
                                        v = !1;
                                        break
                                    }
                                    y || (y = "constructor" == f)
                                }
                                if (v && !y) {
                                    var _ = e.constructor
                                      , E = t.constructor;
                                    _ != E && "constructor"in e && "constructor"in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof E && E instanceof E) && (v = !1)
                                }
                                return o.delete(e),
                                o.delete(t),
                                v
                            }(e, t, r, i, s, o))
                        }(e, t, r, i, Dr, s))
                    }
                    function Lr(e, t, r, i) {
                        var s = r.length
                          , o = s
                          , a = !i;
                        if (null == e)
                            return !o;
                        for (e = Ae(e); s--; ) {
                            var c = r[s];
                            if (a && c[2] ? c[1] !== e[c[0]] : !(c[0]in e))
                                return !1
                        }
                        for (; ++s < o; ) {
                            var u = (c = r[s])[0]
                              , h = e[u]
                              , l = c[1];
                            if (a && c[2]) {
                                if (h === n && !(u in e))
                                    return !1
                            } else {
                                var p = new Yn;
                                if (i)
                                    var f = i(h, l, u, e, t, p);
                                if (!(f === n ? Dr(l, h, 3, i, p) : f))
                                    return !1
                            }
                        }
                        return !0
                    }
                    function Mr(e) {
                        return !(!na(e) || function(e) {
                            return !!qe && qe in e
                        }(e)) && (Xo(e) ? Ke : me).test(qs(e))
                    }
                    function Ur(e) {
                        return "function" == typeof e ? e : null == e ? sc : "object" == typeof e ? Fo(e) ? Kr(e[0], e[1]) : Vr(e) : dc(e)
                    }
                    function kr(e) {
                        if (!Ss(e))
                            return mn(e);
                        var t = [];
                        for (var n in Ae(e))
                            Ue.call(e, n) && "constructor" != n && t.push(n);
                        return t
                    }
                    function qr(e) {
                        if (!na(e))
                            return function(e) {
                                var t = [];
                                if (null != e)
                                    for (var n in Ae(e))
                                        t.push(n);
                                return t
                            }(e);
                        var t = Ss(e)
                          , n = [];
                        for (var r in e)
                            "constructor" == r && (t || !Ue.call(e, r)) || n.push(r);
                        return n
                    }
                    function zr(e, t) {
                        return e < t
                    }
                    function Hr(e, t) {
                        var n = -1
                          , r = Qo(e) ? ae(e.length) : [];
                        return dr(e, (function(e, i, s) {
                            r[++n] = t(e, i, s)
                        }
                        )),
                        r
                    }
                    function Vr(e) {
                        var t = ps(e);
                        return 1 == t.length && t[0][2] ? Rs(t[0][0], t[0][1]) : function(n) {
                            return n === e || Lr(n, e, t)
                        }
                    }
                    function Kr(e, t) {
                        return Es(e) && Os(t) ? Rs(ks(e), t) : function(r) {
                            var i = Aa(r, e);
                            return i === n && i === t ? xa(r, e) : Dr(t, i, 3)
                        }
                    }
                    function Br(e, t, r, i, s) {
                        e !== t && br(t, (function(o, a) {
                            if (s || (s = new Yn),
                            na(o))
                                !function(e, t, r, i, s, o, a) {
                                    var c = Ns(e, r)
                                      , u = Ns(t, r)
                                      , h = a.get(u);
                                    if (h)
                                        return void tr(e, r, h);
                                    var l = o ? o(c, u, r + "", e, t, a) : n
                                      , p = l === n;
                                    if (p) {
                                        var f = Fo(u)
                                          , d = !f && Yo(u)
                                          , g = !f && !d && la(u);
                                        l = u,
                                        f || d || g ? Fo(c) ? l = c : Jo(c) ? l = Ti(c) : d ? (p = !1,
                                        l = Si(u, !0)) : g ? (p = !1,
                                        l = Ri(u, !0)) : l = [] : oa(u) || Wo(u) ? (l = c,
                                        Wo(c) ? l = wa(c) : (!na(c) || Xo(c)) && (l = ms(u))) : p = !1
                                    }
                                    p && (a.set(u, l),
                                    s(l, u, i, o, a),
                                    a.delete(u)),
                                    tr(e, r, l)
                                }(e, t, a, r, Br, i, s);
                            else {
                                var c = i ? i(Ns(e, a), o, a + "", e, t, s) : n;
                                c === n && (c = o),
                                tr(e, a, c)
                            }
                        }
                        ), Da)
                    }
                    function Wr(e, t) {
                        var r = e.length;
                        if (r)
                            return bs(t += t < 0 ? r : 0, r) ? e[t] : n
                    }
                    function Fr(e, t, n) {
                        t = t.length ? Lt(t, (function(e) {
                            return Fo(e) ? function(t) {
                                return Sr(t, 1 === e.length ? e[0] : e)
                            }
                            : e
                        }
                        )) : [sc];
                        var r = -1;
                        t = Lt(t, Xt(hs()));
                        var i = Hr(e, (function(e, n, i) {
                            return {
                                criteria: Lt(t, (function(t) {
                                    return t(e)
                                }
                                )),
                                index: ++r,
                                value: e
                            }
                        }
                        ));
                        return function(e, t) {
                            var n = e.length;
                            for (e.sort(t); n--; )
                                e[n] = e[n].value;
                            return e
                        }(i, (function(e, t) {
                            return function(e, t, n) {
                                for (var r = -1, i = e.criteria, s = t.criteria, o = i.length, a = n.length; ++r < o; ) {
                                    var c = Ai(i[r], s[r]);
                                    if (c)
                                        return r >= a ? c : c * ("desc" == n[r] ? -1 : 1)
                                }
                                return e.index - t.index
                            }(e, t, n)
                        }
                        ))
                    }
                    function Gr(e, t, n) {
                        for (var r = -1, i = t.length, s = {}; ++r < i; ) {
                            var o = t[r]
                              , a = Sr(e, o);
                            n(a, o) && ti(s, _i(o, e), a)
                        }
                        return s
                    }
                    function Qr(e, t, n, r) {
                        var i = r ? Bt : Kt
                          , s = -1
                          , o = t.length
                          , a = e;
                        for (e === t && (t = Ti(t)),
                        n && (a = Lt(e, Xt(n))); ++s < o; )
                            for (var c = 0, u = t[s], h = n ? n(u) : u; (c = i(a, h, c, r)) > -1; )
                                a !== e && $e.call(a, c, 1),
                                $e.call(e, c, 1);
                        return e
                    }
                    function Jr(e, t) {
                        for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                            var i = t[n];
                            if (n == r || i !== s) {
                                var s = i;
                                bs(i) ? $e.call(e, i, 1) : fi(e, i)
                            }
                        }
                        return e
                    }
                    function Yr(e, t) {
                        return e + yt(In() * (t - e + 1))
                    }
                    function $r(e, t) {
                        var n = "";
                        if (!e || t < 1 || t > p)
                            return n;
                        do {
                            t % 2 && (n += e),
                            (t = yt(t / 2)) && (e += e)
                        } while (t);
                        return n
                    }
                    function Zr(e, t) {
                        return js(As(e, t, sc), e + "")
                    }
                    function Xr(e) {
                        return Zn(Va(e))
                    }
                    function ei(e, t) {
                        var n = Va(e);
                        return Ms(n, ur(t, 0, n.length))
                    }
                    function ti(e, t, r, i) {
                        if (!na(e))
                            return e;
                        for (var s = -1, o = (t = _i(t, e)).length, a = o - 1, c = e; null != c && ++s < o; ) {
                            var u = ks(t[s])
                              , h = r;
                            if ("__proto__" === u || "constructor" === u || "prototype" === u)
                                return e;
                            if (s != a) {
                                var l = c[u];
                                (h = i ? i(l, u, c) : n) === n && (h = na(l) ? l : bs(t[s + 1]) ? [] : {})
                            }
                            nr(c, u, h),
                            c = c[u]
                        }
                        return e
                    }
                    var ni = Tn ? function(e, t) {
                        return Tn.set(e, t),
                        e
                    }
                    : sc
                      , ri = it ? function(e, t) {
                        return it(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: nc(t),
                            writable: !0
                        })
                    }
                    : sc;
                    function ii(e) {
                        return Ms(Va(e))
                    }
                    function si(e, t, n) {
                        var r = -1
                          , i = e.length;
                        t < 0 && (t = -t > i ? 0 : i + t),
                        (n = n > i ? i : n) < 0 && (n += i),
                        i = t > n ? 0 : n - t >>> 0,
                        t >>>= 0;
                        for (var s = ae(i); ++r < i; )
                            s[r] = e[r + t];
                        return s
                    }
                    function oi(e, t) {
                        var n;
                        return dr(e, (function(e, r, i) {
                            return !(n = t(e, r, i))
                        }
                        )),
                        !!n
                    }
                    function ai(e, t, n) {
                        var r = 0
                          , i = null == e ? r : e.length;
                        if ("number" == typeof t && t === t && i <= v) {
                            for (; r < i; ) {
                                var s = r + i >>> 1
                                  , o = e[s];
                                null !== o && !ha(o) && (n ? o <= t : o < t) ? r = s + 1 : i = s
                            }
                            return i
                        }
                        return ci(e, t, sc, n)
                    }
                    function ci(e, t, r, i) {
                        var s = 0
                          , o = null == e ? 0 : e.length;
                        if (0 === o)
                            return 0;
                        for (var a = (t = r(t)) !== t, c = null === t, u = ha(t), h = t === n; s < o; ) {
                            var l = yt((s + o) / 2)
                              , p = r(e[l])
                              , f = p !== n
                              , d = null === p
                              , v = p === p
                              , y = ha(p);
                            if (a)
                                var m = i || v;
                            else
                                m = h ? v && (i || f) : c ? v && f && (i || !d) : u ? v && f && !d && (i || !y) : !d && !y && (i ? p <= t : p < t);
                            m ? s = l + 1 : o = l
                        }
                        return bn(o, g)
                    }
                    function ui(e, t) {
                        for (var n = -1, r = e.length, i = 0, s = []; ++n < r; ) {
                            var o = e[n]
                              , a = t ? t(o) : o;
                            if (!n || !Vo(a, c)) {
                                var c = a;
                                s[i++] = 0 === o ? 0 : o
                            }
                        }
                        return s
                    }
                    function hi(e) {
                        return "number" == typeof e ? e : ha(e) ? f : +e
                    }
                    function li(e) {
                        if ("string" == typeof e)
                            return e;
                        if (Fo(e))
                            return Lt(e, li) + "";
                        if (ha(e))
                            return zn ? zn.call(e) : "";
                        var t = e + "";
                        return "0" == t && 1 / e == -l ? "-0" : t
                    }
                    function pi(e, t, n) {
                        var r = -1
                          , i = jt
                          , s = e.length
                          , o = !0
                          , a = []
                          , c = a;
                        if (n)
                            o = !1,
                            i = Dt;
                        else if (s >= 200) {
                            var u = t ? null : $i(e);
                            if (u)
                                return pn(u);
                            o = !1,
                            i = tn,
                            c = new Jn
                        } else
                            c = t ? [] : a;
                        e: for (; ++r < s; ) {
                            var h = e[r]
                              , l = t ? t(h) : h;
                            if (h = n || 0 !== h ? h : 0,
                            o && l === l) {
                                for (var p = c.length; p--; )
                                    if (c[p] === l)
                                        continue e;
                                t && c.push(l),
                                a.push(h)
                            } else
                                i(c, l, n) || (c !== a && c.push(l),
                                a.push(h))
                        }
                        return a
                    }
                    function fi(e, t) {
                        return null == (e = xs(e, t = _i(t, e))) || delete e[ks($s(t))]
                    }
                    function di(e, t, n, r) {
                        return ti(e, t, n(Sr(e, t)), r)
                    }
                    function gi(e, t, n, r) {
                        for (var i = e.length, s = r ? i : -1; (r ? s-- : ++s < i) && t(e[s], s, e); )
                            ;
                        return n ? si(e, r ? 0 : s, r ? s + 1 : i) : si(e, r ? s + 1 : 0, r ? i : s)
                    }
                    function vi(e, t) {
                        var n = e;
                        return n instanceof Wn && (n = n.value()),
                        Ut(t, (function(e, t) {
                            return t.func.apply(t.thisArg, Mt([e], t.args))
                        }
                        ), n)
                    }
                    function yi(e, t, n) {
                        var r = e.length;
                        if (r < 2)
                            return r ? pi(e[0]) : [];
                        for (var i = -1, s = ae(r); ++i < r; )
                            for (var o = e[i], a = -1; ++a < r; )
                                a != i && (s[i] = fr(s[i] || o, e[a], t, n));
                        return pi(wr(s, 1), t, n)
                    }
                    function mi(e, t, r) {
                        for (var i = -1, s = e.length, o = t.length, a = {}; ++i < s; ) {
                            var c = i < o ? t[i] : n;
                            r(a, e[i], c)
                        }
                        return a
                    }
                    function wi(e) {
                        return Jo(e) ? e : []
                    }
                    function bi(e) {
                        return "function" == typeof e ? e : sc
                    }
                    function _i(e, t) {
                        return Fo(e) ? e : Es(e, t) ? [e] : Us(ba(e))
                    }
                    var Ei = Zr;
                    function Ii(e, t, r) {
                        var i = e.length;
                        return r = r === n ? i : r,
                        !t && r >= i ? e : si(e, t, r)
                    }
                    var Pi = ht || function(e) {
                        return gt.clearTimeout(e)
                    }
                    ;
                    function Si(e, t) {
                        if (t)
                            return e.slice();
                        var n = e.length
                          , r = Ge ? Ge(n) : new e.constructor(n);
                        return e.copy(r),
                        r
                    }
                    function Oi(e) {
                        var t = new e.constructor(e.byteLength);
                        return new Fe(t).set(new Fe(e)),
                        t
                    }
                    function Ri(e, t) {
                        var n = t ? Oi(e.buffer) : e.buffer;
                        return new e.constructor(n,e.byteOffset,e.length)
                    }
                    function Ai(e, t) {
                        if (e !== t) {
                            var r = e !== n
                              , i = null === e
                              , s = e === e
                              , o = ha(e)
                              , a = t !== n
                              , c = null === t
                              , u = t === t
                              , h = ha(t);
                            if (!c && !h && !o && e > t || o && a && u && !c && !h || i && a && u || !r && u || !s)
                                return 1;
                            if (!i && !o && !h && e < t || h && r && s && !i && !o || c && r && s || !a && s || !u)
                                return -1
                        }
                        return 0
                    }
                    function xi(e, t, n, r) {
                        for (var i = -1, s = e.length, o = n.length, a = -1, c = t.length, u = wn(s - o, 0), h = ae(c + u), l = !r; ++a < c; )
                            h[a] = t[a];
                        for (; ++i < o; )
                            (l || i < s) && (h[n[i]] = e[i]);
                        for (; u--; )
                            h[a++] = e[i++];
                        return h
                    }
                    function Ni(e, t, n, r) {
                        for (var i = -1, s = e.length, o = -1, a = n.length, c = -1, u = t.length, h = wn(s - a, 0), l = ae(h + u), p = !r; ++i < h; )
                            l[i] = e[i];
                        for (var f = i; ++c < u; )
                            l[f + c] = t[c];
                        for (; ++o < a; )
                            (p || i < s) && (l[f + n[o]] = e[i++]);
                        return l
                    }
                    function Ti(e, t) {
                        var n = -1
                          , r = e.length;
                        for (t || (t = ae(r)); ++n < r; )
                            t[n] = e[n];
                        return t
                    }
                    function Ci(e, t, r, i) {
                        var s = !r;
                        r || (r = {});
                        for (var o = -1, a = t.length; ++o < a; ) {
                            var c = t[o]
                              , u = i ? i(r[c], e[c], c, r, e) : n;
                            u === n && (u = e[c]),
                            s ? ar(r, c, u) : nr(r, c, u)
                        }
                        return r
                    }
                    function ji(e, t) {
                        return function(n, r) {
                            var i = Fo(n) ? At : ir
                              , s = t ? t() : {};
                            return i(n, e, hs(r, 2), s)
                        }
                    }
                    function Di(e) {
                        return Zr((function(t, r) {
                            var i = -1
                              , s = r.length
                              , o = s > 1 ? r[s - 1] : n
                              , a = s > 2 ? r[2] : n;
                            for (o = e.length > 3 && "function" == typeof o ? (s--,
                            o) : n,
                            a && _s(r[0], r[1], a) && (o = s < 3 ? n : o,
                            s = 1),
                            t = Ae(t); ++i < s; ) {
                                var c = r[i];
                                c && e(t, c, i, o)
                            }
                            return t
                        }
                        ))
                    }
                    function Li(e, t) {
                        return function(n, r) {
                            if (null == n)
                                return n;
                            if (!Qo(n))
                                return e(n, r);
                            for (var i = n.length, s = t ? i : -1, o = Ae(n); (t ? s-- : ++s < i) && !1 !== r(o[s], s, o); )
                                ;
                            return n
                        }
                    }
                    function Mi(e) {
                        return function(t, n, r) {
                            for (var i = -1, s = Ae(t), o = r(t), a = o.length; a--; ) {
                                var c = o[e ? a : ++i];
                                if (!1 === n(s[c], c, s))
                                    break
                            }
                            return t
                        }
                    }
                    function Ui(e) {
                        return function(t) {
                            var r = cn(t = ba(t)) ? dn(t) : n
                              , i = r ? r[0] : t.charAt(0)
                              , s = r ? Ii(r, 1).join("") : t.slice(1);
                            return i[e]() + s
                        }
                    }
                    function ki(e) {
                        return function(t) {
                            return Ut(Xa(Wa(t).replace(et, "")), e, "")
                        }
                    }
                    function qi(e) {
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0],t[1]);
                            case 3:
                                return new e(t[0],t[1],t[2]);
                            case 4:
                                return new e(t[0],t[1],t[2],t[3]);
                            case 5:
                                return new e(t[0],t[1],t[2],t[3],t[4]);
                            case 6:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                            case 7:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                            }
                            var n = Vn(e.prototype)
                              , r = e.apply(n, t);
                            return na(r) ? r : n
                        }
                    }
                    function zi(e) {
                        return function(t, r, i) {
                            var s = Ae(t);
                            if (!Qo(t)) {
                                var o = hs(r, 3);
                                t = ja(t),
                                r = function(e) {
                                    return o(s[e], e, s)
                                }
                            }
                            var a = e(t, r, i);
                            return a > -1 ? s[o ? t[a] : a] : n
                        }
                    }
                    function Hi(e) {
                        return is((function(t) {
                            var i = t.length
                              , s = i
                              , o = Bn.prototype.thru;
                            for (e && t.reverse(); s--; ) {
                                var a = t[s];
                                if ("function" != typeof a)
                                    throw new Te(r);
                                if (o && !c && "wrapper" == cs(a))
                                    var c = new Bn([],!0)
                            }
                            for (s = c ? s : i; ++s < i; ) {
                                var u = cs(a = t[s])
                                  , h = "wrapper" == u ? as(a) : n;
                                c = h && Is(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? c[cs(h[0])].apply(c, h[3]) : 1 == a.length && Is(a) ? c[u]() : c.thru(a)
                            }
                            return function() {
                                var e = arguments
                                  , n = e[0];
                                if (c && 1 == e.length && Fo(n))
                                    return c.plant(n).value();
                                for (var r = 0, s = i ? t[r].apply(this, e) : n; ++r < i; )
                                    s = t[r].call(this, s);
                                return s
                            }
                        }
                        ))
                    }
                    function Vi(e, t, r, i, s, o, a, c, h, l) {
                        var p = t & u
                          , f = 1 & t
                          , d = 2 & t
                          , g = 24 & t
                          , v = 512 & t
                          , y = d ? n : qi(e);
                        return function u() {
                            for (var m = arguments.length, w = ae(m), b = m; b--; )
                                w[b] = arguments[b];
                            if (g)
                                var _ = us(u)
                                  , E = function(e, t) {
                                    for (var n = e.length, r = 0; n--; )
                                        e[n] === t && ++r;
                                    return r
                                }(w, _);
                            if (i && (w = xi(w, i, s, g)),
                            o && (w = Ni(w, o, a, g)),
                            m -= E,
                            g && m < l) {
                                var I = ln(w, _);
                                return Ji(e, t, Vi, u.placeholder, r, w, I, c, h, l - m)
                            }
                            var P = f ? r : this
                              , S = d ? P[e] : e;
                            return m = w.length,
                            c ? w = function(e, t) {
                                for (var r = e.length, i = bn(t.length, r), s = Ti(e); i--; ) {
                                    var o = t[i];
                                    e[i] = bs(o, r) ? s[o] : n
                                }
                                return e
                            }(w, c) : v && m > 1 && w.reverse(),
                            p && h < m && (w.length = h),
                            this && this !== gt && this instanceof u && (S = y || qi(S)),
                            S.apply(P, w)
                        }
                    }
                    function Ki(e, t) {
                        return function(n, r) {
                            return function(e, t, n, r) {
                                return Er(e, (function(e, i, s) {
                                    t(r, n(e), i, s)
                                }
                                )),
                                r
                            }(n, e, t(r), {})
                        }
                    }
                    function Bi(e, t) {
                        return function(r, i) {
                            var s;
                            if (r === n && i === n)
                                return t;
                            if (r !== n && (s = r),
                            i !== n) {
                                if (s === n)
                                    return i;
                                "string" == typeof r || "string" == typeof i ? (r = li(r),
                                i = li(i)) : (r = hi(r),
                                i = hi(i)),
                                s = e(r, i)
                            }
                            return s
                        }
                    }
                    function Wi(e) {
                        return is((function(t) {
                            return t = Lt(t, Xt(hs())),
                            Zr((function(n) {
                                var r = this;
                                return e(t, (function(e) {
                                    return Rt(e, r, n)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    function Fi(e, t) {
                        var r = (t = t === n ? " " : li(t)).length;
                        if (r < 2)
                            return r ? $r(t, e) : t;
                        var i = $r(t, vt(e / fn(t)));
                        return cn(t) ? Ii(dn(i), 0, e).join("") : i.slice(0, e)
                    }
                    function Gi(e) {
                        return function(t, r, i) {
                            return i && "number" != typeof i && _s(t, r, i) && (r = i = n),
                            t = ga(t),
                            r === n ? (r = t,
                            t = 0) : r = ga(r),
                            function(e, t, n, r) {
                                for (var i = -1, s = wn(vt((t - e) / (n || 1)), 0), o = ae(s); s--; )
                                    o[r ? s : ++i] = e,
                                    e += n;
                                return o
                            }(t, r, i = i === n ? t < r ? 1 : -1 : ga(i), e)
                        }
                    }
                    function Qi(e) {
                        return function(t, n) {
                            return "string" == typeof t && "string" == typeof n || (t = ma(t),
                            n = ma(n)),
                            e(t, n)
                        }
                    }
                    function Ji(e, t, r, i, s, o, u, h, l, p) {
                        var f = 8 & t;
                        t |= f ? a : c,
                        4 & (t &= ~(f ? c : a)) || (t &= -4);
                        var d = [e, t, s, f ? o : n, f ? u : n, f ? n : o, f ? n : u, h, l, p]
                          , g = r.apply(n, d);
                        return Is(e) && Ts(g, d),
                        g.placeholder = i,
                        Ds(g, e, t)
                    }
                    function Yi(e) {
                        var t = Re[e];
                        return function(e, n) {
                            if (e = ma(e),
                            (n = null == n ? 0 : bn(va(n), 292)) && zt(e)) {
                                var r = (ba(e) + "e").split("e");
                                return +((r = (ba(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                            }
                            return t(e)
                        }
                    }
                    var $i = An && 1 / pn(new An([, -0]))[1] == l ? function(e) {
                        return new An(e)
                    }
                    : hc;
                    function Zi(e) {
                        return function(t) {
                            var n = vs(t);
                            return n == S ? un(t) : n == N ? function(e) {
                                var t = -1
                                  , n = Array(e.size);
                                return e.forEach((function(e) {
                                    n[++t] = [e, e]
                                }
                                )),
                                n
                            }(t) : function(e, t) {
                                return Lt(t, (function(t) {
                                    return [t, e[t]]
                                }
                                ))
                            }(t, e(t))
                        }
                    }
                    function Xi(e, t, i, l, p, f, d, g) {
                        var v = 2 & t;
                        if (!v && "function" != typeof e)
                            throw new Te(r);
                        var y = l ? l.length : 0;
                        if (y || (t &= -97,
                        l = p = n),
                        d = d === n ? d : wn(va(d), 0),
                        g = g === n ? g : va(g),
                        y -= p ? p.length : 0,
                        t & c) {
                            var m = l
                              , w = p;
                            l = p = n
                        }
                        var b = v ? n : as(e)
                          , _ = [e, t, i, l, p, m, w, f, d, g];
                        if (b && function(e, t) {
                            var n = e[1]
                              , r = t[1]
                              , i = n | r
                              , o = i < 131
                              , a = r == u && 8 == n || r == u && n == h && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
                            if (!o && !a)
                                return e;
                            1 & r && (e[2] = t[2],
                            i |= 1 & n ? 0 : 4);
                            var c = t[3];
                            if (c) {
                                var l = e[3];
                                e[3] = l ? xi(l, c, t[4]) : c,
                                e[4] = l ? ln(e[3], s) : t[4]
                            }
                            c = t[5],
                            c && (l = e[5],
                            e[5] = l ? Ni(l, c, t[6]) : c,
                            e[6] = l ? ln(e[5], s) : t[6]),
                            c = t[7],
                            c && (e[7] = c),
                            r & u && (e[8] = null == e[8] ? t[8] : bn(e[8], t[8])),
                            null == e[9] && (e[9] = t[9]),
                            e[0] = t[0],
                            e[1] = i
                        }(_, b),
                        e = _[0],
                        t = _[1],
                        i = _[2],
                        l = _[3],
                        p = _[4],
                        !(g = _[9] = _[9] === n ? v ? 0 : e.length : wn(_[9] - y, 0)) && 24 & t && (t &= -25),
                        t && 1 != t)
                            E = 8 == t || t == o ? function(e, t, r) {
                                var i = qi(e);
                                return function s() {
                                    for (var o = arguments.length, a = ae(o), c = o, u = us(s); c--; )
                                        a[c] = arguments[c];
                                    var h = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : ln(a, u);
                                    return (o -= h.length) < r ? Ji(e, t, Vi, s.placeholder, n, a, h, n, n, r - o) : Rt(this && this !== gt && this instanceof s ? i : e, this, a)
                                }
                            }(e, t, g) : t != a && 33 != t || p.length ? Vi.apply(n, _) : function(e, t, n, r) {
                                var i = 1 & t
                                  , s = qi(e);
                                return function t() {
                                    for (var o = -1, a = arguments.length, c = -1, u = r.length, h = ae(u + a), l = this && this !== gt && this instanceof t ? s : e; ++c < u; )
                                        h[c] = r[c];
                                    for (; a--; )
                                        h[c++] = arguments[++o];
                                    return Rt(l, i ? n : this, h)
                                }
                            }(e, t, i, l);
                        else
                            var E = function(e, t, n) {
                                var r = 1 & t
                                  , i = qi(e);
                                return function t() {
                                    return (this && this !== gt && this instanceof t ? i : e).apply(r ? n : this, arguments)
                                }
                            }(e, t, i);
                        return Ds((b ? ni : Ts)(E, _), e, t)
                    }
                    function es(e, t, r, i) {
                        return e === n || Vo(e, De[r]) && !Ue.call(i, r) ? t : e
                    }
                    function ts(e, t, r, i, s, o) {
                        return na(e) && na(t) && (o.set(t, e),
                        Br(e, t, n, ts, o),
                        o.delete(t)),
                        e
                    }
                    function ns(e) {
                        return oa(e) ? n : e
                    }
                    function rs(e, t, r, i, s, o) {
                        var a = 1 & r
                          , c = e.length
                          , u = t.length;
                        if (c != u && !(a && u > c))
                            return !1;
                        var h = o.get(e)
                          , l = o.get(t);
                        if (h && l)
                            return h == t && l == e;
                        var p = -1
                          , f = !0
                          , d = 2 & r ? new Jn : n;
                        for (o.set(e, t),
                        o.set(t, e); ++p < c; ) {
                            var g = e[p]
                              , v = t[p];
                            if (i)
                                var y = a ? i(v, g, p, t, e, o) : i(g, v, p, e, t, o);
                            if (y !== n) {
                                if (y)
                                    continue;
                                f = !1;
                                break
                            }
                            if (d) {
                                if (!qt(t, (function(e, t) {
                                    if (!tn(d, t) && (g === e || s(g, e, r, i, o)))
                                        return d.push(t)
                                }
                                ))) {
                                    f = !1;
                                    break
                                }
                            } else if (g !== v && !s(g, v, r, i, o)) {
                                f = !1;
                                break
                            }
                        }
                        return o.delete(e),
                        o.delete(t),
                        f
                    }
                    function is(e) {
                        return js(As(e, n, Fs), e + "")
                    }
                    function ss(e) {
                        return Or(e, ja, ds)
                    }
                    function os(e) {
                        return Or(e, Da, gs)
                    }
                    var as = Tn ? function(e) {
                        return Tn.get(e)
                    }
                    : hc;
                    function cs(e) {
                        for (var t = e.name + "", n = Cn[t], r = Ue.call(Cn, t) ? n.length : 0; r--; ) {
                            var i = n[r]
                              , s = i.func;
                            if (null == s || s == e)
                                return i.name
                        }
                        return t
                    }
                    function us(e) {
                        return (Ue.call(Hn, "placeholder") ? Hn : e).placeholder
                    }
                    function hs() {
                        var e = Hn.iteratee || oc;
                        return e = e === oc ? Ur : e,
                        arguments.length ? e(arguments[0], arguments[1]) : e
                    }
                    function ls(e, t) {
                        var n = e.__data__;
                        return function(e) {
                            var t = typeof e;
                            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                        }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                    }
                    function ps(e) {
                        for (var t = ja(e), n = t.length; n--; ) {
                            var r = t[n]
                              , i = e[r];
                            t[n] = [r, i, Os(i)]
                        }
                        return t
                    }
                    function fs(e, t) {
                        var r = function(e, t) {
                            return null == e ? n : e[t]
                        }(e, t);
                        return Mr(r) ? r : n
                    }
                    var ds = wt ? function(e) {
                        return null == e ? [] : (e = Ae(e),
                        Ct(wt(e), (function(t) {
                            return Ye.call(e, t)
                        }
                        )))
                    }
                    : yc
                      , gs = wt ? function(e) {
                        for (var t = []; e; )
                            Mt(t, ds(e)),
                            e = Qe(e);
                        return t
                    }
                    : yc
                      , vs = Rr;
                    function ys(e, t, n) {
                        for (var r = -1, i = (t = _i(t, e)).length, s = !1; ++r < i; ) {
                            var o = ks(t[r]);
                            if (!(s = null != e && n(e, o)))
                                break;
                            e = e[o]
                        }
                        return s || ++r != i ? s : !!(i = null == e ? 0 : e.length) && ta(i) && bs(o, i) && (Fo(e) || Wo(e))
                    }
                    function ms(e) {
                        return "function" != typeof e.constructor || Ss(e) ? {} : Vn(Qe(e))
                    }
                    function ws(e) {
                        return Fo(e) || Wo(e) || !!(Ze && e && e[Ze])
                    }
                    function bs(e, t) {
                        var n, r = typeof e;
                        return !!(t = null !== (n = t) && void 0 !== n ? n : p) && ("number" == r || "symbol" != r && be.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }
                    function _s(e, t, n) {
                        if (!na(n))
                            return !1;
                        var r = typeof t;
                        return !!("number" == r ? Qo(n) && bs(t, n.length) : "string" == r && t in n) && Vo(n[t], e)
                    }
                    function Es(e, t) {
                        if (Fo(e))
                            return !1;
                        var n = typeof e;
                        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ha(e)) || (ne.test(e) || !te.test(e) || null != t && e in Ae(t))
                    }
                    function Is(e) {
                        var t = cs(e)
                          , n = Hn[t];
                        if ("function" != typeof n || !(t in Wn.prototype))
                            return !1;
                        if (e === n)
                            return !0;
                        var r = as(n);
                        return !!r && e === r[0]
                    }
                    (Sn && vs(new Sn(new ArrayBuffer(1))) != L || On && vs(new On) != S || Rn && vs(Rn.resolve()) != A || An && vs(new An) != N || xn && vs(new xn) != j) && (vs = function(e) {
                        var t = Rr(e)
                          , r = t == R ? e.constructor : n
                          , i = r ? qs(r) : "";
                        if (i)
                            switch (i) {
                            case jn:
                                return L;
                            case Dn:
                                return S;
                            case Ln:
                                return A;
                            case Mn:
                                return N;
                            case Un:
                                return j
                            }
                        return t
                    }
                    );
                    var Ps = Le ? Xo : mc;
                    function Ss(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || De)
                    }
                    function Os(e) {
                        return e === e && !na(e)
                    }
                    function Rs(e, t) {
                        return function(r) {
                            return null != r && (r[e] === t && (t !== n || e in Ae(r)))
                        }
                    }
                    function As(e, t, r) {
                        return t = wn(t === n ? e.length - 1 : t, 0),
                        function() {
                            for (var n = arguments, i = -1, s = wn(n.length - t, 0), o = ae(s); ++i < s; )
                                o[i] = n[t + i];
                            i = -1;
                            for (var a = ae(t + 1); ++i < t; )
                                a[i] = n[i];
                            return a[t] = r(o),
                            Rt(e, this, a)
                        }
                    }
                    function xs(e, t) {
                        return t.length < 2 ? e : Sr(e, si(t, 0, -1))
                    }
                    function Ns(e, t) {
                        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t)
                            return e[t]
                    }
                    var Ts = Ls(ni)
                      , Cs = dt || function(e, t) {
                        return gt.setTimeout(e, t)
                    }
                      , js = Ls(ri);
                    function Ds(e, t, n) {
                        var r = t + "";
                        return js(e, function(e, t) {
                            var n = t.length;
                            if (!n)
                                return e;
                            var r = n - 1;
                            return t[r] = (n > 1 ? "& " : "") + t[r],
                            t = t.join(n > 2 ? ", " : " "),
                            e.replace(ce, "{\n/* [wrapped with " + t + "] */\n")
                        }(r, function(e, t) {
                            return xt(y, (function(n) {
                                var r = "_." + n[0];
                                t & n[1] && !jt(e, r) && e.push(r)
                            }
                            )),
                            e.sort()
                        }(function(e) {
                            var t = e.match(ue);
                            return t ? t[1].split(he) : []
                        }(r), n)))
                    }
                    function Ls(e) {
                        var t = 0
                          , r = 0;
                        return function() {
                            var i = _n()
                              , s = 16 - (i - r);
                            if (r = i,
                            s > 0) {
                                if (++t >= 800)
                                    return arguments[0]
                            } else
                                t = 0;
                            return e.apply(n, arguments)
                        }
                    }
                    function Ms(e, t) {
                        var r = -1
                          , i = e.length
                          , s = i - 1;
                        for (t = t === n ? i : t; ++r < t; ) {
                            var o = Yr(r, s)
                              , a = e[o];
                            e[o] = e[r],
                            e[r] = a
                        }
                        return e.length = t,
                        e
                    }
                    var Us = function(e) {
                        var t = Mo(e, (function(e) {
                            return 500 === n.size && n.clear(),
                            e
                        }
                        ))
                          , n = t.cache;
                        return t
                    }((function(e) {
                        var t = [];
                        return 46 === e.charCodeAt(0) && t.push(""),
                        e.replace(re, (function(e, n, r, i) {
                            t.push(r ? i.replace(fe, "$1") : n || e)
                        }
                        )),
                        t
                    }
                    ));
                    function ks(e) {
                        if ("string" == typeof e || ha(e))
                            return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -l ? "-0" : t
                    }
                    function qs(e) {
                        if (null != e) {
                            try {
                                return Me.call(e)
                            } catch {}
                            try {
                                return e + ""
                            } catch {}
                        }
                        return ""
                    }
                    function zs(e) {
                        if (e instanceof Wn)
                            return e.clone();
                        var t = new Bn(e.__wrapped__,e.__chain__);
                        return t.__actions__ = Ti(e.__actions__),
                        t.__index__ = e.__index__,
                        t.__values__ = e.__values__,
                        t
                    }
                    var Hs = Zr((function(e, t) {
                        return Jo(e) ? fr(e, wr(t, 1, Jo, !0)) : []
                    }
                    ))
                      , Vs = Zr((function(e, t) {
                        var r = $s(t);
                        return Jo(r) && (r = n),
                        Jo(e) ? fr(e, wr(t, 1, Jo, !0), hs(r, 2)) : []
                    }
                    ))
                      , Ks = Zr((function(e, t) {
                        var r = $s(t);
                        return Jo(r) && (r = n),
                        Jo(e) ? fr(e, wr(t, 1, Jo, !0), n, r) : []
                    }
                    ));
                    function Bs(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var i = null == n ? 0 : va(n);
                        return i < 0 && (i = wn(r + i, 0)),
                        Vt(e, hs(t, 3), i)
                    }
                    function Ws(e, t, r) {
                        var i = null == e ? 0 : e.length;
                        if (!i)
                            return -1;
                        var s = i - 1;
                        return r !== n && (s = va(r),
                        s = r < 0 ? wn(i + s, 0) : bn(s, i - 1)),
                        Vt(e, hs(t, 3), s, !0)
                    }
                    function Fs(e) {
                        return (null == e ? 0 : e.length) ? wr(e, 1) : []
                    }
                    function Gs(e) {
                        return e && e.length ? e[0] : n
                    }
                    var Qs = Zr((function(e) {
                        var t = Lt(e, wi);
                        return t.length && t[0] === e[0] ? Tr(t) : []
                    }
                    ))
                      , Js = Zr((function(e) {
                        var t = $s(e)
                          , r = Lt(e, wi);
                        return t === $s(r) ? t = n : r.pop(),
                        r.length && r[0] === e[0] ? Tr(r, hs(t, 2)) : []
                    }
                    ))
                      , Ys = Zr((function(e) {
                        var t = $s(e)
                          , r = Lt(e, wi);
                        return (t = "function" == typeof t ? t : n) && r.pop(),
                        r.length && r[0] === e[0] ? Tr(r, n, t) : []
                    }
                    ));
                    function $s(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? e[t - 1] : n
                    }
                    var Zs = Zr(Xs);
                    function Xs(e, t) {
                        return e && e.length && t && t.length ? Qr(e, t) : e
                    }
                    var eo = is((function(e, t) {
                        var n = null == e ? 0 : e.length
                          , r = cr(e, t);
                        return Jr(e, Lt(t, (function(e) {
                            return bs(e, n) ? +e : e
                        }
                        )).sort(Ai)),
                        r
                    }
                    ));
                    function to(e) {
                        return null == e ? e : Pn.call(e)
                    }
                    var no = Zr((function(e) {
                        return pi(wr(e, 1, Jo, !0))
                    }
                    ))
                      , ro = Zr((function(e) {
                        var t = $s(e);
                        return Jo(t) && (t = n),
                        pi(wr(e, 1, Jo, !0), hs(t, 2))
                    }
                    ))
                      , io = Zr((function(e) {
                        var t = $s(e);
                        return t = "function" == typeof t ? t : n,
                        pi(wr(e, 1, Jo, !0), n, t)
                    }
                    ));
                    function so(e) {
                        if (!e || !e.length)
                            return [];
                        var t = 0;
                        return e = Ct(e, (function(e) {
                            if (Jo(e))
                                return t = wn(e.length, t),
                                !0
                        }
                        )),
                        $t(t, (function(t) {
                            return Lt(e, Gt(t))
                        }
                        ))
                    }
                    function oo(e, t) {
                        if (!e || !e.length)
                            return [];
                        var r = so(e);
                        return null == t ? r : Lt(r, (function(e) {
                            return Rt(t, n, e)
                        }
                        ))
                    }
                    var ao = Zr((function(e, t) {
                        return Jo(e) ? fr(e, t) : []
                    }
                    ))
                      , co = Zr((function(e) {
                        return yi(Ct(e, Jo))
                    }
                    ))
                      , uo = Zr((function(e) {
                        var t = $s(e);
                        return Jo(t) && (t = n),
                        yi(Ct(e, Jo), hs(t, 2))
                    }
                    ))
                      , ho = Zr((function(e) {
                        var t = $s(e);
                        return t = "function" == typeof t ? t : n,
                        yi(Ct(e, Jo), n, t)
                    }
                    ))
                      , lo = Zr(so);
                    var po = Zr((function(e) {
                        var t = e.length
                          , r = t > 1 ? e[t - 1] : n;
                        return r = "function" == typeof r ? (e.pop(),
                        r) : n,
                        oo(e, r)
                    }
                    ));
                    function fo(e) {
                        var t = Hn(e);
                        return t.__chain__ = !0,
                        t
                    }
                    function go(e, t) {
                        return t(e)
                    }
                    var vo = is((function(e) {
                        var t = e.length
                          , r = t ? e[0] : 0
                          , i = this.__wrapped__
                          , s = function(t) {
                            return cr(t, e)
                        };
                        return !(t > 1 || this.__actions__.length) && i instanceof Wn && bs(r) ? ((i = i.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                            func: go,
                            args: [s],
                            thisArg: n
                        }),
                        new Bn(i,this.__chain__).thru((function(e) {
                            return t && !e.length && e.push(n),
                            e
                        }
                        ))) : this.thru(s)
                    }
                    ));
                    var yo = ji((function(e, t, n) {
                        Ue.call(e, n) ? ++e[n] : ar(e, n, 1)
                    }
                    ));
                    var mo = zi(Bs)
                      , wo = zi(Ws);
                    function bo(e, t) {
                        return (Fo(e) ? xt : dr)(e, hs(t, 3))
                    }
                    function _o(e, t) {
                        return (Fo(e) ? Nt : gr)(e, hs(t, 3))
                    }
                    var Eo = ji((function(e, t, n) {
                        Ue.call(e, n) ? e[n].push(t) : ar(e, n, [t])
                    }
                    ));
                    var Io = Zr((function(e, t, n) {
                        var r = -1
                          , i = "function" == typeof t
                          , s = Qo(e) ? ae(e.length) : [];
                        return dr(e, (function(e) {
                            s[++r] = i ? Rt(t, e, n) : Cr(e, t, n)
                        }
                        )),
                        s
                    }
                    ))
                      , Po = ji((function(e, t, n) {
                        ar(e, n, t)
                    }
                    ));
                    function So(e, t) {
                        return (Fo(e) ? Lt : Hr)(e, hs(t, 3))
                    }
                    var Oo = ji((function(e, t, n) {
                        e[n ? 0 : 1].push(t)
                    }
                    ), (function() {
                        return [[], []]
                    }
                    ));
                    var Ro = Zr((function(e, t) {
                        if (null == e)
                            return [];
                        var n = t.length;
                        return n > 1 && _s(e, t[0], t[1]) ? t = [] : n > 2 && _s(t[0], t[1], t[2]) && (t = [t[0]]),
                        Fr(e, wr(t, 1), [])
                    }
                    ))
                      , Ao = ft || function() {
                        return gt.Date.now()
                    }
                    ;
                    function xo(e, t, r) {
                        return t = r ? n : t,
                        t = e && null == t ? e.length : t,
                        Xi(e, u, n, n, n, n, t)
                    }
                    function No(e, t) {
                        var i;
                        if ("function" != typeof t)
                            throw new Te(r);
                        return e = va(e),
                        function() {
                            return --e > 0 && (i = t.apply(this, arguments)),
                            e <= 1 && (t = n),
                            i
                        }
                    }
                    var To = Zr((function(e, t, n) {
                        var r = 1;
                        if (n.length) {
                            var i = ln(n, us(To));
                            r |= a
                        }
                        return Xi(e, r, t, n, i)
                    }
                    ))
                      , Co = Zr((function(e, t, n) {
                        var r = 3;
                        if (n.length) {
                            var i = ln(n, us(Co));
                            r |= a
                        }
                        return Xi(t, r, e, n, i)
                    }
                    ));
                    function jo(e, t, i) {
                        var s, o, a, c, u, h, l = 0, p = !1, f = !1, d = !0;
                        if ("function" != typeof e)
                            throw new Te(r);
                        function g(t) {
                            var r = s
                              , i = o;
                            return s = o = n,
                            l = t,
                            c = e.apply(i, r)
                        }
                        function v(e) {
                            var r = e - h;
                            return h === n || r >= t || r < 0 || f && e - l >= a
                        }
                        function y() {
                            var e = Ao();
                            if (v(e))
                                return m(e);
                            u = Cs(y, function(e) {
                                var n = t - (e - h);
                                return f ? bn(n, a - (e - l)) : n
                            }(e))
                        }
                        function m(e) {
                            return u = n,
                            d && s ? g(e) : (s = o = n,
                            c)
                        }
                        function w() {
                            var e = Ao()
                              , r = v(e);
                            if (s = arguments,
                            o = this,
                            h = e,
                            r) {
                                if (u === n)
                                    return function(e) {
                                        return l = e,
                                        u = Cs(y, t),
                                        p ? g(e) : c
                                    }(h);
                                if (f)
                                    return Pi(u),
                                    u = Cs(y, t),
                                    g(h)
                            }
                            return u === n && (u = Cs(y, t)),
                            c
                        }
                        return t = ma(t) || 0,
                        na(i) && (p = !!i.leading,
                        a = (f = "maxWait"in i) ? wn(ma(i.maxWait) || 0, t) : a,
                        d = "trailing"in i ? !!i.trailing : d),
                        w.cancel = function() {
                            u !== n && Pi(u),
                            l = 0,
                            s = h = o = u = n
                        }
                        ,
                        w.flush = function() {
                            return u === n ? c : m(Ao())
                        }
                        ,
                        w
                    }
                    var Do = Zr((function(e, t) {
                        return pr(e, 1, t)
                    }
                    ))
                      , Lo = Zr((function(e, t, n) {
                        return pr(e, ma(t) || 0, n)
                    }
                    ));
                    function Mo(e, t) {
                        if ("function" != typeof e || null != t && "function" != typeof t)
                            throw new Te(r);
                        var n = function() {
                            var r = arguments
                              , i = t ? t.apply(this, r) : r[0]
                              , s = n.cache;
                            if (s.has(i))
                                return s.get(i);
                            var o = e.apply(this, r);
                            return n.cache = s.set(i, o) || s,
                            o
                        };
                        return n.cache = new (Mo.Cache || Qn),
                        n
                    }
                    function Uo(e) {
                        if ("function" != typeof e)
                            throw new Te(r);
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                            }
                            return !e.apply(this, t)
                        }
                    }
                    Mo.Cache = Qn;
                    var ko = Ei((function(e, t) {
                        var n = (t = 1 == t.length && Fo(t[0]) ? Lt(t[0], Xt(hs())) : Lt(wr(t, 1), Xt(hs()))).length;
                        return Zr((function(r) {
                            for (var i = -1, s = bn(r.length, n); ++i < s; )
                                r[i] = t[i].call(this, r[i]);
                            return Rt(e, this, r)
                        }
                        ))
                    }
                    ))
                      , qo = Zr((function(e, t) {
                        var r = ln(t, us(qo));
                        return Xi(e, a, n, t, r)
                    }
                    ))
                      , zo = Zr((function(e, t) {
                        var r = ln(t, us(zo));
                        return Xi(e, c, n, t, r)
                    }
                    ))
                      , Ho = is((function(e, t) {
                        return Xi(e, h, n, n, n, t)
                    }
                    ));
                    function Vo(e, t) {
                        return e === t || e !== e && t !== t
                    }
                    var Ko = Qi(Ar)
                      , Bo = Qi((function(e, t) {
                        return e >= t
                    }
                    ))
                      , Wo = jr(function() {
                        return arguments
                    }()) ? jr : function(e) {
                        return ra(e) && Ue.call(e, "callee") && !Ye.call(e, "callee")
                    }
                      , Fo = ae.isArray
                      , Go = _t ? Xt(_t) : function(e) {
                        return ra(e) && Rr(e) == D
                    }
                    ;
                    function Qo(e) {
                        return null != e && ta(e.length) && !Xo(e)
                    }
                    function Jo(e) {
                        return ra(e) && Qo(e)
                    }
                    var Yo = bt || mc
                      , $o = Et ? Xt(Et) : function(e) {
                        return ra(e) && Rr(e) == _
                    }
                    ;
                    function Zo(e) {
                        if (!ra(e))
                            return !1;
                        var t = Rr(e);
                        return t == E || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !oa(e)
                    }
                    function Xo(e) {
                        if (!na(e))
                            return !1;
                        var t = Rr(e);
                        return t == I || t == P || "[object AsyncFunction]" == t || "[object Proxy]" == t
                    }
                    function ea(e) {
                        return "number" == typeof e && e == va(e)
                    }
                    function ta(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= p
                    }
                    function na(e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    }
                    function ra(e) {
                        return null != e && "object" == typeof e
                    }
                    var ia = It ? Xt(It) : function(e) {
                        return ra(e) && vs(e) == S
                    }
                    ;
                    function sa(e) {
                        return "number" == typeof e || ra(e) && Rr(e) == O
                    }
                    function oa(e) {
                        if (!ra(e) || Rr(e) != R)
                            return !1;
                        var t = Qe(e);
                        if (null === t)
                            return !0;
                        var n = Ue.call(t, "constructor") && t.constructor;
                        return "function" == typeof n && n instanceof n && Me.call(n) == He
                    }
                    var aa = Pt ? Xt(Pt) : function(e) {
                        return ra(e) && Rr(e) == x
                    }
                    ;
                    var ca = St ? Xt(St) : function(e) {
                        return ra(e) && vs(e) == N
                    }
                    ;
                    function ua(e) {
                        return "string" == typeof e || !Fo(e) && ra(e) && Rr(e) == T
                    }
                    function ha(e) {
                        return "symbol" == typeof e || ra(e) && Rr(e) == C
                    }
                    var la = Ot ? Xt(Ot) : function(e) {
                        return ra(e) && ta(e.length) && !!ct[Rr(e)]
                    }
                    ;
                    var pa = Qi(zr)
                      , fa = Qi((function(e, t) {
                        return e <= t
                    }
                    ));
                    function da(e) {
                        if (!e)
                            return [];
                        if (Qo(e))
                            return ua(e) ? dn(e) : Ti(e);
                        if (Xe && e[Xe])
                            return function(e) {
                                for (var t, n = []; !(t = e.next()).done; )
                                    n.push(t.value);
                                return n
                            }(e[Xe]());
                        var t = vs(e);
                        return (t == S ? un : t == N ? pn : Va)(e)
                    }
                    function ga(e) {
                        return e ? (e = ma(e)) === l || e === -l ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
                    }
                    function va(e) {
                        var t = ga(e)
                          , n = t % 1;
                        return t === t ? n ? t - n : t : 0
                    }
                    function ya(e) {
                        return e ? ur(va(e), 0, d) : 0
                    }
                    function ma(e) {
                        if ("number" == typeof e)
                            return e;
                        if (ha(e))
                            return f;
                        if (na(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = na(t) ? t + "" : t
                        }
                        if ("string" != typeof e)
                            return 0 === e ? e : +e;
                        e = Zt(e);
                        var n = ye.test(e);
                        return n || we.test(e) ? pt(e.slice(2), n ? 2 : 8) : ve.test(e) ? f : +e
                    }
                    function wa(e) {
                        return Ci(e, Da(e))
                    }
                    function ba(e) {
                        return null == e ? "" : li(e)
                    }
                    var _a = Di((function(e, t) {
                        if (Ss(t) || Qo(t))
                            Ci(t, ja(t), e);
                        else
                            for (var n in t)
                                Ue.call(t, n) && nr(e, n, t[n])
                    }
                    ))
                      , Ea = Di((function(e, t) {
                        Ci(t, Da(t), e)
                    }
                    ))
                      , Ia = Di((function(e, t, n, r) {
                        Ci(t, Da(t), e, r)
                    }
                    ))
                      , Pa = Di((function(e, t, n, r) {
                        Ci(t, ja(t), e, r)
                    }
                    ))
                      , Sa = is(cr);
                    var Oa = Zr((function(e, t) {
                        e = Ae(e);
                        var r = -1
                          , i = t.length
                          , s = i > 2 ? t[2] : n;
                        for (s && _s(t[0], t[1], s) && (i = 1); ++r < i; )
                            for (var o = t[r], a = Da(o), c = -1, u = a.length; ++c < u; ) {
                                var h = a[c]
                                  , l = e[h];
                                (l === n || Vo(l, De[h]) && !Ue.call(e, h)) && (e[h] = o[h])
                            }
                        return e
                    }
                    ))
                      , Ra = Zr((function(e) {
                        return e.push(n, ts),
                        Rt(Ma, n, e)
                    }
                    ));
                    function Aa(e, t, r) {
                        var i = null == e ? n : Sr(e, t);
                        return i === n ? r : i
                    }
                    function xa(e, t) {
                        return null != e && ys(e, t, Nr)
                    }
                    var Na = Ki((function(e, t, n) {
                        null != t && "function" != typeof t.toString && (t = ze.call(t)),
                        e[t] = n
                    }
                    ), nc(sc))
                      , Ta = Ki((function(e, t, n) {
                        null != t && "function" != typeof t.toString && (t = ze.call(t)),
                        Ue.call(e, t) ? e[t].push(n) : e[t] = [n]
                    }
                    ), hs)
                      , Ca = Zr(Cr);
                    function ja(e) {
                        return Qo(e) ? $n(e) : kr(e)
                    }
                    function Da(e) {
                        return Qo(e) ? $n(e, !0) : qr(e)
                    }
                    var La = Di((function(e, t, n) {
                        Br(e, t, n)
                    }
                    ))
                      , Ma = Di((function(e, t, n, r) {
                        Br(e, t, n, r)
                    }
                    ))
                      , Ua = is((function(e, t) {
                        var n = {};
                        if (null == e)
                            return n;
                        var r = !1;
                        t = Lt(t, (function(t) {
                            return t = _i(t, e),
                            r || (r = t.length > 1),
                            t
                        }
                        )),
                        Ci(e, os(e), n),
                        r && (n = hr(n, 7, ns));
                        for (var i = t.length; i--; )
                            fi(n, t[i]);
                        return n
                    }
                    ));
                    var ka = is((function(e, t) {
                        return null == e ? {} : function(e, t) {
                            return Gr(e, t, (function(t, n) {
                                return xa(e, n)
                            }
                            ))
                        }(e, t)
                    }
                    ));
                    function qa(e, t) {
                        if (null == e)
                            return {};
                        var n = Lt(os(e), (function(e) {
                            return [e]
                        }
                        ));
                        return t = hs(t),
                        Gr(e, n, (function(e, n) {
                            return t(e, n[0])
                        }
                        ))
                    }
                    var za = Zi(ja)
                      , Ha = Zi(Da);
                    function Va(e) {
                        return null == e ? [] : en(e, ja(e))
                    }
                    var Ka = ki((function(e, t, n) {
                        return t = t.toLowerCase(),
                        e + (n ? Ba(t) : t)
                    }
                    ));
                    function Ba(e) {
                        return Za(ba(e).toLowerCase())
                    }
                    function Wa(e) {
                        return (e = ba(e)) && e.replace(_e, sn).replace(tt, "")
                    }
                    var Fa = ki((function(e, t, n) {
                        return e + (n ? "-" : "") + t.toLowerCase()
                    }
                    ))
                      , Ga = ki((function(e, t, n) {
                        return e + (n ? " " : "") + t.toLowerCase()
                    }
                    ))
                      , Qa = Ui("toLowerCase");
                    var Ja = ki((function(e, t, n) {
                        return e + (n ? "_" : "") + t.toLowerCase()
                    }
                    ));
                    var Ya = ki((function(e, t, n) {
                        return e + (n ? " " : "") + Za(t)
                    }
                    ));
                    var $a = ki((function(e, t, n) {
                        return e + (n ? " " : "") + t.toUpperCase()
                    }
                    ))
                      , Za = Ui("toUpperCase");
                    function Xa(e, t, r) {
                        return e = ba(e),
                        (t = r ? n : t) === n ? function(e) {
                            return st.test(e)
                        }(e) ? function(e) {
                            return e.match(rt) || []
                        }(e) : function(e) {
                            return e.match(le) || []
                        }(e) : e.match(t) || []
                    }
                    var ec = Zr((function(e, t) {
                        try {
                            return Rt(e, n, t)
                        } catch (sr) {
                            return Zo(sr) ? sr : new Se(sr)
                        }
                    }
                    ))
                      , tc = is((function(e, t) {
                        return xt(t, (function(t) {
                            t = ks(t),
                            ar(e, t, To(e[t], e))
                        }
                        )),
                        e
                    }
                    ));
                    function nc(e) {
                        return function() {
                            return e
                        }
                    }
                    var rc = Hi()
                      , ic = Hi(!0);
                    function sc(e) {
                        return e
                    }
                    function oc(e) {
                        return Ur("function" == typeof e ? e : hr(e, 1))
                    }
                    var ac = Zr((function(e, t) {
                        return function(n) {
                            return Cr(n, e, t)
                        }
                    }
                    ))
                      , cc = Zr((function(e, t) {
                        return function(n) {
                            return Cr(e, n, t)
                        }
                    }
                    ));
                    function uc(e, t, n) {
                        var r = ja(t)
                          , i = Pr(t, r);
                        null == n && (!na(t) || !i.length && r.length) && (n = t,
                        t = e,
                        e = this,
                        i = Pr(t, ja(t)));
                        var s = !(na(n) && "chain"in n) || !!n.chain
                          , o = Xo(e);
                        return xt(i, (function(n) {
                            var r = t[n];
                            e[n] = r,
                            o && (e.prototype[n] = function() {
                                var t = this.__chain__;
                                if (s || t) {
                                    var n = e(this.__wrapped__);
                                    return (n.__actions__ = Ti(this.__actions__)).push({
                                        func: r,
                                        args: arguments,
                                        thisArg: e
                                    }),
                                    n.__chain__ = t,
                                    n
                                }
                                return r.apply(e, Mt([this.value()], arguments))
                            }
                            )
                        }
                        )),
                        e
                    }
                    function hc() {}
                    var lc = Wi(Lt)
                      , pc = Wi(Tt)
                      , fc = Wi(qt);
                    function dc(e) {
                        return Es(e) ? Gt(ks(e)) : function(e) {
                            return function(t) {
                                return Sr(t, e)
                            }
                        }(e)
                    }
                    var gc = Gi()
                      , vc = Gi(!0);
                    function yc() {
                        return []
                    }
                    function mc() {
                        return !1
                    }
                    var wc = Bi((function(e, t) {
                        return e + t
                    }
                    ), 0)
                      , bc = Yi("ceil")
                      , _c = Bi((function(e, t) {
                        return e / t
                    }
                    ), 1)
                      , Ec = Yi("floor");
                    var Ic = Bi((function(e, t) {
                        return e * t
                    }
                    ), 1)
                      , Pc = Yi("round")
                      , Sc = Bi((function(e, t) {
                        return e - t
                    }
                    ), 0);
                    return Hn.after = function(e, t) {
                        if ("function" != typeof t)
                            throw new Te(r);
                        return e = va(e),
                        function() {
                            if (--e < 1)
                                return t.apply(this, arguments)
                        }
                    }
                    ,
                    Hn.ary = xo,
                    Hn.assign = _a,
                    Hn.assignIn = Ea,
                    Hn.assignInWith = Ia,
                    Hn.assignWith = Pa,
                    Hn.at = Sa,
                    Hn.before = No,
                    Hn.bind = To,
                    Hn.bindAll = tc,
                    Hn.bindKey = Co,
                    Hn.castArray = function() {
                        if (!arguments.length)
                            return [];
                        var e = arguments[0];
                        return Fo(e) ? e : [e]
                    }
                    ,
                    Hn.chain = fo,
                    Hn.chunk = function(e, t, r) {
                        t = (r ? _s(e, t, r) : t === n) ? 1 : wn(va(t), 0);
                        var i = null == e ? 0 : e.length;
                        if (!i || t < 1)
                            return [];
                        for (var s = 0, o = 0, a = ae(vt(i / t)); s < i; )
                            a[o++] = si(e, s, s += t);
                        return a
                    }
                    ,
                    Hn.compact = function(e) {
                        for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n; ) {
                            var s = e[t];
                            s && (i[r++] = s)
                        }
                        return i
                    }
                    ,
                    Hn.concat = function() {
                        var e = arguments.length;
                        if (!e)
                            return [];
                        for (var t = ae(e - 1), n = arguments[0], r = e; r--; )
                            t[r - 1] = arguments[r];
                        return Mt(Fo(n) ? Ti(n) : [n], wr(t, 1))
                    }
                    ,
                    Hn.cond = function(e) {
                        var t = null == e ? 0 : e.length
                          , n = hs();
                        return e = t ? Lt(e, (function(e) {
                            if ("function" != typeof e[1])
                                throw new Te(r);
                            return [n(e[0]), e[1]]
                        }
                        )) : [],
                        Zr((function(n) {
                            for (var r = -1; ++r < t; ) {
                                var i = e[r];
                                if (Rt(i[0], this, n))
                                    return Rt(i[1], this, n)
                            }
                        }
                        ))
                    }
                    ,
                    Hn.conforms = function(e) {
                        return function(e) {
                            var t = ja(e);
                            return function(n) {
                                return lr(n, e, t)
                            }
                        }(hr(e, 1))
                    }
                    ,
                    Hn.constant = nc,
                    Hn.countBy = yo,
                    Hn.create = function(e, t) {
                        var n = Vn(e);
                        return null == t ? n : or(n, t)
                    }
                    ,
                    Hn.curry = function e(t, r, i) {
                        var s = Xi(t, 8, n, n, n, n, n, r = i ? n : r);
                        return s.placeholder = e.placeholder,
                        s
                    }
                    ,
                    Hn.curryRight = function e(t, r, i) {
                        var s = Xi(t, o, n, n, n, n, n, r = i ? n : r);
                        return s.placeholder = e.placeholder,
                        s
                    }
                    ,
                    Hn.debounce = jo,
                    Hn.defaults = Oa,
                    Hn.defaultsDeep = Ra,
                    Hn.defer = Do,
                    Hn.delay = Lo,
                    Hn.difference = Hs,
                    Hn.differenceBy = Vs,
                    Hn.differenceWith = Ks,
                    Hn.drop = function(e, t, r) {
                        var i = null == e ? 0 : e.length;
                        return i ? si(e, (t = r || t === n ? 1 : va(t)) < 0 ? 0 : t, i) : []
                    }
                    ,
                    Hn.dropRight = function(e, t, r) {
                        var i = null == e ? 0 : e.length;
                        return i ? si(e, 0, (t = i - (t = r || t === n ? 1 : va(t))) < 0 ? 0 : t) : []
                    }
                    ,
                    Hn.dropRightWhile = function(e, t) {
                        return e && e.length ? gi(e, hs(t, 3), !0, !0) : []
                    }
                    ,
                    Hn.dropWhile = function(e, t) {
                        return e && e.length ? gi(e, hs(t, 3), !0) : []
                    }
                    ,
                    Hn.fill = function(e, t, r, i) {
                        var s = null == e ? 0 : e.length;
                        return s ? (r && "number" != typeof r && _s(e, t, r) && (r = 0,
                        i = s),
                        function(e, t, r, i) {
                            var s = e.length;
                            for ((r = va(r)) < 0 && (r = -r > s ? 0 : s + r),
                            (i = i === n || i > s ? s : va(i)) < 0 && (i += s),
                            i = r > i ? 0 : ya(i); r < i; )
                                e[r++] = t;
                            return e
                        }(e, t, r, i)) : []
                    }
                    ,
                    Hn.filter = function(e, t) {
                        return (Fo(e) ? Ct : mr)(e, hs(t, 3))
                    }
                    ,
                    Hn.flatMap = function(e, t) {
                        return wr(So(e, t), 1)
                    }
                    ,
                    Hn.flatMapDeep = function(e, t) {
                        return wr(So(e, t), l)
                    }
                    ,
                    Hn.flatMapDepth = function(e, t, r) {
                        return r = r === n ? 1 : va(r),
                        wr(So(e, t), r)
                    }
                    ,
                    Hn.flatten = Fs,
                    Hn.flattenDeep = function(e) {
                        return (null == e ? 0 : e.length) ? wr(e, l) : []
                    }
                    ,
                    Hn.flattenDepth = function(e, t) {
                        return (null == e ? 0 : e.length) ? wr(e, t = t === n ? 1 : va(t)) : []
                    }
                    ,
                    Hn.flip = function(e) {
                        return Xi(e, 512)
                    }
                    ,
                    Hn.flow = rc,
                    Hn.flowRight = ic,
                    Hn.fromPairs = function(e) {
                        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                            var i = e[t];
                            r[i[0]] = i[1]
                        }
                        return r
                    }
                    ,
                    Hn.functions = function(e) {
                        return null == e ? [] : Pr(e, ja(e))
                    }
                    ,
                    Hn.functionsIn = function(e) {
                        return null == e ? [] : Pr(e, Da(e))
                    }
                    ,
                    Hn.groupBy = Eo,
                    Hn.initial = function(e) {
                        return (null == e ? 0 : e.length) ? si(e, 0, -1) : []
                    }
                    ,
                    Hn.intersection = Qs,
                    Hn.intersectionBy = Js,
                    Hn.intersectionWith = Ys,
                    Hn.invert = Na,
                    Hn.invertBy = Ta,
                    Hn.invokeMap = Io,
                    Hn.iteratee = oc,
                    Hn.keyBy = Po,
                    Hn.keys = ja,
                    Hn.keysIn = Da,
                    Hn.map = So,
                    Hn.mapKeys = function(e, t) {
                        var n = {};
                        return t = hs(t, 3),
                        Er(e, (function(e, r, i) {
                            ar(n, t(e, r, i), e)
                        }
                        )),
                        n
                    }
                    ,
                    Hn.mapValues = function(e, t) {
                        var n = {};
                        return t = hs(t, 3),
                        Er(e, (function(e, r, i) {
                            ar(n, r, t(e, r, i))
                        }
                        )),
                        n
                    }
                    ,
                    Hn.matches = function(e) {
                        return Vr(hr(e, 1))
                    }
                    ,
                    Hn.matchesProperty = function(e, t) {
                        return Kr(e, hr(t, 1))
                    }
                    ,
                    Hn.memoize = Mo,
                    Hn.merge = La,
                    Hn.mergeWith = Ma,
                    Hn.method = ac,
                    Hn.methodOf = cc,
                    Hn.mixin = uc,
                    Hn.negate = Uo,
                    Hn.nthArg = function(e) {
                        return e = va(e),
                        Zr((function(t) {
                            return Wr(t, e)
                        }
                        ))
                    }
                    ,
                    Hn.omit = Ua,
                    Hn.omitBy = function(e, t) {
                        return qa(e, Uo(hs(t)))
                    }
                    ,
                    Hn.once = function(e) {
                        return No(2, e)
                    }
                    ,
                    Hn.orderBy = function(e, t, r, i) {
                        return null == e ? [] : (Fo(t) || (t = null == t ? [] : [t]),
                        Fo(r = i ? n : r) || (r = null == r ? [] : [r]),
                        Fr(e, t, r))
                    }
                    ,
                    Hn.over = lc,
                    Hn.overArgs = ko,
                    Hn.overEvery = pc,
                    Hn.overSome = fc,
                    Hn.partial = qo,
                    Hn.partialRight = zo,
                    Hn.partition = Oo,
                    Hn.pick = ka,
                    Hn.pickBy = qa,
                    Hn.property = dc,
                    Hn.propertyOf = function(e) {
                        return function(t) {
                            return null == e ? n : Sr(e, t)
                        }
                    }
                    ,
                    Hn.pull = Zs,
                    Hn.pullAll = Xs,
                    Hn.pullAllBy = function(e, t, n) {
                        return e && e.length && t && t.length ? Qr(e, t, hs(n, 2)) : e
                    }
                    ,
                    Hn.pullAllWith = function(e, t, r) {
                        return e && e.length && t && t.length ? Qr(e, t, n, r) : e
                    }
                    ,
                    Hn.pullAt = eo,
                    Hn.range = gc,
                    Hn.rangeRight = vc,
                    Hn.rearg = Ho,
                    Hn.reject = function(e, t) {
                        return (Fo(e) ? Ct : mr)(e, Uo(hs(t, 3)))
                    }
                    ,
                    Hn.remove = function(e, t) {
                        var n = [];
                        if (!e || !e.length)
                            return n;
                        var r = -1
                          , i = []
                          , s = e.length;
                        for (t = hs(t, 3); ++r < s; ) {
                            var o = e[r];
                            t(o, r, e) && (n.push(o),
                            i.push(r))
                        }
                        return Jr(e, i),
                        n
                    }
                    ,
                    Hn.rest = function(e, t) {
                        if ("function" != typeof e)
                            throw new Te(r);
                        return Zr(e, t = t === n ? t : va(t))
                    }
                    ,
                    Hn.reverse = to,
                    Hn.sampleSize = function(e, t, r) {
                        return t = (r ? _s(e, t, r) : t === n) ? 1 : va(t),
                        (Fo(e) ? Xn : ei)(e, t)
                    }
                    ,
                    Hn.set = function(e, t, n) {
                        return null == e ? e : ti(e, t, n)
                    }
                    ,
                    Hn.setWith = function(e, t, r, i) {
                        return i = "function" == typeof i ? i : n,
                        null == e ? e : ti(e, t, r, i)
                    }
                    ,
                    Hn.shuffle = function(e) {
                        return (Fo(e) ? er : ii)(e)
                    }
                    ,
                    Hn.slice = function(e, t, r) {
                        var i = null == e ? 0 : e.length;
                        return i ? (r && "number" != typeof r && _s(e, t, r) ? (t = 0,
                        r = i) : (t = null == t ? 0 : va(t),
                        r = r === n ? i : va(r)),
                        si(e, t, r)) : []
                    }
                    ,
                    Hn.sortBy = Ro,
                    Hn.sortedUniq = function(e) {
                        return e && e.length ? ui(e) : []
                    }
                    ,
                    Hn.sortedUniqBy = function(e, t) {
                        return e && e.length ? ui(e, hs(t, 2)) : []
                    }
                    ,
                    Hn.split = function(e, t, r) {
                        return r && "number" != typeof r && _s(e, t, r) && (t = r = n),
                        (r = r === n ? d : r >>> 0) ? (e = ba(e)) && ("string" == typeof t || null != t && !aa(t)) && (!(t = li(t)) && cn(e)) ? Ii(dn(e), 0, r) : e.split(t, r) : []
                    }
                    ,
                    Hn.spread = function(e, t) {
                        if ("function" != typeof e)
                            throw new Te(r);
                        return t = null == t ? 0 : wn(va(t), 0),
                        Zr((function(n) {
                            var r = n[t]
                              , i = Ii(n, 0, t);
                            return r && Mt(i, r),
                            Rt(e, this, i)
                        }
                        ))
                    }
                    ,
                    Hn.tail = function(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? si(e, 1, t) : []
                    }
                    ,
                    Hn.take = function(e, t, r) {
                        return e && e.length ? si(e, 0, (t = r || t === n ? 1 : va(t)) < 0 ? 0 : t) : []
                    }
                    ,
                    Hn.takeRight = function(e, t, r) {
                        var i = null == e ? 0 : e.length;
                        return i ? si(e, (t = i - (t = r || t === n ? 1 : va(t))) < 0 ? 0 : t, i) : []
                    }
                    ,
                    Hn.takeRightWhile = function(e, t) {
                        return e && e.length ? gi(e, hs(t, 3), !1, !0) : []
                    }
                    ,
                    Hn.takeWhile = function(e, t) {
                        return e && e.length ? gi(e, hs(t, 3)) : []
                    }
                    ,
                    Hn.tap = function(e, t) {
                        return t(e),
                        e
                    }
                    ,
                    Hn.throttle = function(e, t, n) {
                        var i = !0
                          , s = !0;
                        if ("function" != typeof e)
                            throw new Te(r);
                        return na(n) && (i = "leading"in n ? !!n.leading : i,
                        s = "trailing"in n ? !!n.trailing : s),
                        jo(e, t, {
                            leading: i,
                            maxWait: t,
                            trailing: s
                        })
                    }
                    ,
                    Hn.thru = go,
                    Hn.toArray = da,
                    Hn.toPairs = za,
                    Hn.toPairsIn = Ha,
                    Hn.toPath = function(e) {
                        return Fo(e) ? Lt(e, ks) : ha(e) ? [e] : Ti(Us(ba(e)))
                    }
                    ,
                    Hn.toPlainObject = wa,
                    Hn.transform = function(e, t, n) {
                        var r = Fo(e)
                          , i = r || Yo(e) || la(e);
                        if (t = hs(t, 4),
                        null == n) {
                            var s = e && e.constructor;
                            n = i ? r ? new s : [] : na(e) && Xo(s) ? Vn(Qe(e)) : {}
                        }
                        return (i ? xt : Er)(e, (function(e, r, i) {
                            return t(n, e, r, i)
                        }
                        )),
                        n
                    }
                    ,
                    Hn.unary = function(e) {
                        return xo(e, 1)
                    }
                    ,
                    Hn.union = no,
                    Hn.unionBy = ro,
                    Hn.unionWith = io,
                    Hn.uniq = function(e) {
                        return e && e.length ? pi(e) : []
                    }
                    ,
                    Hn.uniqBy = function(e, t) {
                        return e && e.length ? pi(e, hs(t, 2)) : []
                    }
                    ,
                    Hn.uniqWith = function(e, t) {
                        return t = "function" == typeof t ? t : n,
                        e && e.length ? pi(e, n, t) : []
                    }
                    ,
                    Hn.unset = function(e, t) {
                        return null == e || fi(e, t)
                    }
                    ,
                    Hn.unzip = so,
                    Hn.unzipWith = oo,
                    Hn.update = function(e, t, n) {
                        return null == e ? e : di(e, t, bi(n))
                    }
                    ,
                    Hn.updateWith = function(e, t, r, i) {
                        return i = "function" == typeof i ? i : n,
                        null == e ? e : di(e, t, bi(r), i)
                    }
                    ,
                    Hn.values = Va,
                    Hn.valuesIn = function(e) {
                        return null == e ? [] : en(e, Da(e))
                    }
                    ,
                    Hn.without = ao,
                    Hn.words = Xa,
                    Hn.wrap = function(e, t) {
                        return qo(bi(t), e)
                    }
                    ,
                    Hn.xor = co,
                    Hn.xorBy = uo,
                    Hn.xorWith = ho,
                    Hn.zip = lo,
                    Hn.zipObject = function(e, t) {
                        return mi(e || [], t || [], nr)
                    }
                    ,
                    Hn.zipObjectDeep = function(e, t) {
                        return mi(e || [], t || [], ti)
                    }
                    ,
                    Hn.zipWith = po,
                    Hn.entries = za,
                    Hn.entriesIn = Ha,
                    Hn.extend = Ea,
                    Hn.extendWith = Ia,
                    uc(Hn, Hn),
                    Hn.add = wc,
                    Hn.attempt = ec,
                    Hn.camelCase = Ka,
                    Hn.capitalize = Ba,
                    Hn.ceil = bc,
                    Hn.clamp = function(e, t, r) {
                        return r === n && (r = t,
                        t = n),
                        r !== n && (r = (r = ma(r)) === r ? r : 0),
                        t !== n && (t = (t = ma(t)) === t ? t : 0),
                        ur(ma(e), t, r)
                    }
                    ,
                    Hn.clone = function(e) {
                        return hr(e, 4)
                    }
                    ,
                    Hn.cloneDeep = function(e) {
                        return hr(e, 5)
                    }
                    ,
                    Hn.cloneDeepWith = function(e, t) {
                        return hr(e, 5, t = "function" == typeof t ? t : n)
                    }
                    ,
                    Hn.cloneWith = function(e, t) {
                        return hr(e, 4, t = "function" == typeof t ? t : n)
                    }
                    ,
                    Hn.conformsTo = function(e, t) {
                        return null == t || lr(e, t, ja(t))
                    }
                    ,
                    Hn.deburr = Wa,
                    Hn.defaultTo = function(e, t) {
                        return null == e || e !== e ? t : e
                    }
                    ,
                    Hn.divide = _c,
                    Hn.endsWith = function(e, t, r) {
                        e = ba(e),
                        t = li(t);
                        var i = e.length
                          , s = r = r === n ? i : ur(va(r), 0, i);
                        return (r -= t.length) >= 0 && e.slice(r, s) == t
                    }
                    ,
                    Hn.eq = Vo,
                    Hn.escape = function(e) {
                        return (e = ba(e)) && $.test(e) ? e.replace(J, on) : e
                    }
                    ,
                    Hn.escapeRegExp = function(e) {
                        return (e = ba(e)) && se.test(e) ? e.replace(ie, "\\$&") : e
                    }
                    ,
                    Hn.every = function(e, t, r) {
                        var i = Fo(e) ? Tt : vr;
                        return r && _s(e, t, r) && (t = n),
                        i(e, hs(t, 3))
                    }
                    ,
                    Hn.find = mo,
                    Hn.findIndex = Bs,
                    Hn.findKey = function(e, t) {
                        return Ht(e, hs(t, 3), Er)
                    }
                    ,
                    Hn.findLast = wo,
                    Hn.findLastIndex = Ws,
                    Hn.findLastKey = function(e, t) {
                        return Ht(e, hs(t, 3), Ir)
                    }
                    ,
                    Hn.floor = Ec,
                    Hn.forEach = bo,
                    Hn.forEachRight = _o,
                    Hn.forIn = function(e, t) {
                        return null == e ? e : br(e, hs(t, 3), Da)
                    }
                    ,
                    Hn.forInRight = function(e, t) {
                        return null == e ? e : _r(e, hs(t, 3), Da)
                    }
                    ,
                    Hn.forOwn = function(e, t) {
                        return e && Er(e, hs(t, 3))
                    }
                    ,
                    Hn.forOwnRight = function(e, t) {
                        return e && Ir(e, hs(t, 3))
                    }
                    ,
                    Hn.get = Aa,
                    Hn.gt = Ko,
                    Hn.gte = Bo,
                    Hn.has = function(e, t) {
                        return null != e && ys(e, t, xr)
                    }
                    ,
                    Hn.hasIn = xa,
                    Hn.head = Gs,
                    Hn.identity = sc,
                    Hn.includes = function(e, t, n, r) {
                        e = Qo(e) ? e : Va(e),
                        n = n && !r ? va(n) : 0;
                        var i = e.length;
                        return n < 0 && (n = wn(i + n, 0)),
                        ua(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Kt(e, t, n) > -1
                    }
                    ,
                    Hn.indexOf = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var i = null == n ? 0 : va(n);
                        return i < 0 && (i = wn(r + i, 0)),
                        Kt(e, t, i)
                    }
                    ,
                    Hn.inRange = function(e, t, r) {
                        return t = ga(t),
                        r === n ? (r = t,
                        t = 0) : r = ga(r),
                        function(e, t, n) {
                            return e >= bn(t, n) && e < wn(t, n)
                        }(e = ma(e), t, r)
                    }
                    ,
                    Hn.invoke = Ca,
                    Hn.isArguments = Wo,
                    Hn.isArray = Fo,
                    Hn.isArrayBuffer = Go,
                    Hn.isArrayLike = Qo,
                    Hn.isArrayLikeObject = Jo,
                    Hn.isBoolean = function(e) {
                        return !0 === e || !1 === e || ra(e) && Rr(e) == b
                    }
                    ,
                    Hn.isBuffer = Yo,
                    Hn.isDate = $o,
                    Hn.isElement = function(e) {
                        return ra(e) && 1 === e.nodeType && !oa(e)
                    }
                    ,
                    Hn.isEmpty = function(e) {
                        if (null == e)
                            return !0;
                        if (Qo(e) && (Fo(e) || "string" == typeof e || "function" == typeof e.splice || Yo(e) || la(e) || Wo(e)))
                            return !e.length;
                        var t = vs(e);
                        if (t == S || t == N)
                            return !e.size;
                        if (Ss(e))
                            return !kr(e).length;
                        for (var n in e)
                            if (Ue.call(e, n))
                                return !1;
                        return !0
                    }
                    ,
                    Hn.isEqual = function(e, t) {
                        return Dr(e, t)
                    }
                    ,
                    Hn.isEqualWith = function(e, t, r) {
                        var i = (r = "function" == typeof r ? r : n) ? r(e, t) : n;
                        return i === n ? Dr(e, t, n, r) : !!i
                    }
                    ,
                    Hn.isError = Zo,
                    Hn.isFinite = function(e) {
                        return "number" == typeof e && zt(e)
                    }
                    ,
                    Hn.isFunction = Xo,
                    Hn.isInteger = ea,
                    Hn.isLength = ta,
                    Hn.isMap = ia,
                    Hn.isMatch = function(e, t) {
                        return e === t || Lr(e, t, ps(t))
                    }
                    ,
                    Hn.isMatchWith = function(e, t, r) {
                        return r = "function" == typeof r ? r : n,
                        Lr(e, t, ps(t), r)
                    }
                    ,
                    Hn.isNaN = function(e) {
                        return sa(e) && e != +e
                    }
                    ,
                    Hn.isNative = function(e) {
                        if (Ps(e))
                            throw new Se("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return Mr(e)
                    }
                    ,
                    Hn.isNil = function(e) {
                        return null == e
                    }
                    ,
                    Hn.isNull = function(e) {
                        return null === e
                    }
                    ,
                    Hn.isNumber = sa,
                    Hn.isObject = na,
                    Hn.isObjectLike = ra,
                    Hn.isPlainObject = oa,
                    Hn.isRegExp = aa,
                    Hn.isSafeInteger = function(e) {
                        return ea(e) && e >= -p && e <= p
                    }
                    ,
                    Hn.isSet = ca,
                    Hn.isString = ua,
                    Hn.isSymbol = ha,
                    Hn.isTypedArray = la,
                    Hn.isUndefined = function(e) {
                        return e === n
                    }
                    ,
                    Hn.isWeakMap = function(e) {
                        return ra(e) && vs(e) == j
                    }
                    ,
                    Hn.isWeakSet = function(e) {
                        return ra(e) && "[object WeakSet]" == Rr(e)
                    }
                    ,
                    Hn.join = function(e, t) {
                        return null == e ? "" : Qt.call(e, t)
                    }
                    ,
                    Hn.kebabCase = Fa,
                    Hn.last = $s,
                    Hn.lastIndexOf = function(e, t, r) {
                        var i = null == e ? 0 : e.length;
                        if (!i)
                            return -1;
                        var s = i;
                        return r !== n && (s = (s = va(r)) < 0 ? wn(i + s, 0) : bn(s, i - 1)),
                        t === t ? function(e, t, n) {
                            for (var r = n + 1; r--; )
                                if (e[r] === t)
                                    return r;
                            return r
                        }(e, t, s) : Vt(e, Wt, s, !0)
                    }
                    ,
                    Hn.lowerCase = Ga,
                    Hn.lowerFirst = Qa,
                    Hn.lt = pa,
                    Hn.lte = fa,
                    Hn.max = function(e) {
                        return e && e.length ? yr(e, sc, Ar) : n
                    }
                    ,
                    Hn.maxBy = function(e, t) {
                        return e && e.length ? yr(e, hs(t, 2), Ar) : n
                    }
                    ,
                    Hn.mean = function(e) {
                        return Ft(e, sc)
                    }
                    ,
                    Hn.meanBy = function(e, t) {
                        return Ft(e, hs(t, 2))
                    }
                    ,
                    Hn.min = function(e) {
                        return e && e.length ? yr(e, sc, zr) : n
                    }
                    ,
                    Hn.minBy = function(e, t) {
                        return e && e.length ? yr(e, hs(t, 2), zr) : n
                    }
                    ,
                    Hn.stubArray = yc,
                    Hn.stubFalse = mc,
                    Hn.stubObject = function() {
                        return {}
                    }
                    ,
                    Hn.stubString = function() {
                        return ""
                    }
                    ,
                    Hn.stubTrue = function() {
                        return !0
                    }
                    ,
                    Hn.multiply = Ic,
                    Hn.nth = function(e, t) {
                        return e && e.length ? Wr(e, va(t)) : n
                    }
                    ,
                    Hn.noConflict = function() {
                        return gt._ === this && (gt._ = Ve),
                        this
                    }
                    ,
                    Hn.noop = hc,
                    Hn.now = Ao,
                    Hn.pad = function(e, t, n) {
                        e = ba(e);
                        var r = (t = va(t)) ? fn(e) : 0;
                        if (!t || r >= t)
                            return e;
                        var i = (t - r) / 2;
                        return Fi(yt(i), n) + e + Fi(vt(i), n)
                    }
                    ,
                    Hn.padEnd = function(e, t, n) {
                        e = ba(e);
                        var r = (t = va(t)) ? fn(e) : 0;
                        return t && r < t ? e + Fi(t - r, n) : e
                    }
                    ,
                    Hn.padStart = function(e, t, n) {
                        e = ba(e);
                        var r = (t = va(t)) ? fn(e) : 0;
                        return t && r < t ? Fi(t - r, n) + e : e
                    }
                    ,
                    Hn.parseInt = function(e, t, n) {
                        return n || null == t ? t = 0 : t && (t = +t),
                        En(ba(e).replace(oe, ""), t || 0)
                    }
                    ,
                    Hn.random = function(e, t, r) {
                        if (r && "boolean" != typeof r && _s(e, t, r) && (t = r = n),
                        r === n && ("boolean" == typeof t ? (r = t,
                        t = n) : "boolean" == typeof e && (r = e,
                        e = n)),
                        e === n && t === n ? (e = 0,
                        t = 1) : (e = ga(e),
                        t === n ? (t = e,
                        e = 0) : t = ga(t)),
                        e > t) {
                            var i = e;
                            e = t,
                            t = i
                        }
                        if (r || e % 1 || t % 1) {
                            var s = In();
                            return bn(e + s * (t - e + lt("1e-" + ((s + "").length - 1))), t)
                        }
                        return Yr(e, t)
                    }
                    ,
                    Hn.reduce = function(e, t, n) {
                        var r = Fo(e) ? Ut : Jt
                          , i = arguments.length < 3;
                        return r(e, hs(t, 4), n, i, dr)
                    }
                    ,
                    Hn.reduceRight = function(e, t, n) {
                        var r = Fo(e) ? kt : Jt
                          , i = arguments.length < 3;
                        return r(e, hs(t, 4), n, i, gr)
                    }
                    ,
                    Hn.repeat = function(e, t, r) {
                        return t = (r ? _s(e, t, r) : t === n) ? 1 : va(t),
                        $r(ba(e), t)
                    }
                    ,
                    Hn.replace = function() {
                        var e = arguments
                          , t = ba(e[0]);
                        return e.length < 3 ? t : t.replace(e[1], e[2])
                    }
                    ,
                    Hn.result = function(e, t, r) {
                        var i = -1
                          , s = (t = _i(t, e)).length;
                        for (s || (s = 1,
                        e = n); ++i < s; ) {
                            var o = null == e ? n : e[ks(t[i])];
                            o === n && (i = s,
                            o = r),
                            e = Xo(o) ? o.call(e) : o
                        }
                        return e
                    }
                    ,
                    Hn.round = Pc,
                    Hn.runInContext = e,
                    Hn.sample = function(e) {
                        return (Fo(e) ? Zn : Xr)(e)
                    }
                    ,
                    Hn.size = function(e) {
                        if (null == e)
                            return 0;
                        if (Qo(e))
                            return ua(e) ? fn(e) : e.length;
                        var t = vs(e);
                        return t == S || t == N ? e.size : kr(e).length
                    }
                    ,
                    Hn.snakeCase = Ja,
                    Hn.some = function(e, t, r) {
                        var i = Fo(e) ? qt : oi;
                        return r && _s(e, t, r) && (t = n),
                        i(e, hs(t, 3))
                    }
                    ,
                    Hn.sortedIndex = function(e, t) {
                        return ai(e, t)
                    }
                    ,
                    Hn.sortedIndexBy = function(e, t, n) {
                        return ci(e, t, hs(n, 2))
                    }
                    ,
                    Hn.sortedIndexOf = function(e, t) {
                        var n = null == e ? 0 : e.length;
                        if (n) {
                            var r = ai(e, t);
                            if (r < n && Vo(e[r], t))
                                return r
                        }
                        return -1
                    }
                    ,
                    Hn.sortedLastIndex = function(e, t) {
                        return ai(e, t, !0)
                    }
                    ,
                    Hn.sortedLastIndexBy = function(e, t, n) {
                        return ci(e, t, hs(n, 2), !0)
                    }
                    ,
                    Hn.sortedLastIndexOf = function(e, t) {
                        if (null == e ? 0 : e.length) {
                            var n = ai(e, t, !0) - 1;
                            if (Vo(e[n], t))
                                return n
                        }
                        return -1
                    }
                    ,
                    Hn.startCase = Ya,
                    Hn.startsWith = function(e, t, n) {
                        return e = ba(e),
                        n = null == n ? 0 : ur(va(n), 0, e.length),
                        t = li(t),
                        e.slice(n, n + t.length) == t
                    }
                    ,
                    Hn.subtract = Sc,
                    Hn.sum = function(e) {
                        return e && e.length ? Yt(e, sc) : 0
                    }
                    ,
                    Hn.sumBy = function(e, t) {
                        return e && e.length ? Yt(e, hs(t, 2)) : 0
                    }
                    ,
                    Hn.template = function(e, t, r) {
                        var i = Hn.templateSettings;
                        r && _s(e, t, r) && (t = n),
                        e = ba(e),
                        t = Ia({}, t, i, es);
                        var s, o, a = Ia({}, t.imports, i.imports, es), c = ja(a), u = en(a, c), h = 0, l = t.interpolate || Ee, p = "__p += '", f = xe((t.escape || Ee).source + "|" + l.source + "|" + (l === ee ? de : Ee).source + "|" + (t.evaluate || Ee).source + "|$", "g"), d = "//# sourceURL=" + (Ue.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++at + "]") + "\n";
                        e.replace(f, (function(t, n, r, i, a, c) {
                            return r || (r = i),
                            p += e.slice(h, c).replace(Ie, an),
                            n && (s = !0,
                            p += "' +\n__e(" + n + ") +\n'"),
                            a && (o = !0,
                            p += "';\n" + a + ";\n__p += '"),
                            r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                            h = c + t.length,
                            t
                        }
                        )),
                        p += "';\n";
                        var g = Ue.call(t, "variable") && t.variable;
                        if (g) {
                            if (pe.test(g))
                                throw new Se("Invalid `variable` option passed into `_.template`")
                        } else
                            p = "with (obj) {\n" + p + "\n}\n";
                        p = (o ? p.replace(W, "") : p).replace(F, "$1").replace(G, "$1;"),
                        p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                        var v = ec((function() {
                            return Oe(c, d + "return " + p).apply(n, u)
                        }
                        ));
                        if (v.source = p,
                        Zo(v))
                            throw v;
                        return v
                    }
                    ,
                    Hn.times = function(e, t) {
                        if ((e = va(e)) < 1 || e > p)
                            return [];
                        var n = d
                          , r = bn(e, d);
                        t = hs(t),
                        e -= d;
                        for (var i = $t(r, t); ++n < e; )
                            t(n);
                        return i
                    }
                    ,
                    Hn.toFinite = ga,
                    Hn.toInteger = va,
                    Hn.toLength = ya,
                    Hn.toLower = function(e) {
                        return ba(e).toLowerCase()
                    }
                    ,
                    Hn.toNumber = ma,
                    Hn.toSafeInteger = function(e) {
                        return e ? ur(va(e), -p, p) : 0 === e ? e : 0
                    }
                    ,
                    Hn.toString = ba,
                    Hn.toUpper = function(e) {
                        return ba(e).toUpperCase()
                    }
                    ,
                    Hn.trim = function(e, t, r) {
                        if ((e = ba(e)) && (r || t === n))
                            return Zt(e);
                        if (!e || !(t = li(t)))
                            return e;
                        var i = dn(e)
                          , s = dn(t);
                        return Ii(i, nn(i, s), rn(i, s) + 1).join("")
                    }
                    ,
                    Hn.trimEnd = function(e, t, r) {
                        if ((e = ba(e)) && (r || t === n))
                            return e.slice(0, gn(e) + 1);
                        if (!e || !(t = li(t)))
                            return e;
                        var i = dn(e);
                        return Ii(i, 0, rn(i, dn(t)) + 1).join("")
                    }
                    ,
                    Hn.trimStart = function(e, t, r) {
                        if ((e = ba(e)) && (r || t === n))
                            return e.replace(oe, "");
                        if (!e || !(t = li(t)))
                            return e;
                        var i = dn(e);
                        return Ii(i, nn(i, dn(t))).join("")
                    }
                    ,
                    Hn.truncate = function(e, t) {
                        var r = 30
                          , i = "...";
                        if (na(t)) {
                            var s = "separator"in t ? t.separator : s;
                            r = "length"in t ? va(t.length) : r,
                            i = "omission"in t ? li(t.omission) : i
                        }
                        var o = (e = ba(e)).length;
                        if (cn(e)) {
                            var a = dn(e);
                            o = a.length
                        }
                        if (r >= o)
                            return e;
                        var c = r - fn(i);
                        if (c < 1)
                            return i;
                        var u = a ? Ii(a, 0, c).join("") : e.slice(0, c);
                        if (s === n)
                            return u + i;
                        if (a && (c += u.length - c),
                        aa(s)) {
                            if (e.slice(c).search(s)) {
                                var h, l = u;
                                for (s.global || (s = xe(s.source, ba(ge.exec(s)) + "g")),
                                s.lastIndex = 0; h = s.exec(l); )
                                    var p = h.index;
                                u = u.slice(0, p === n ? c : p)
                            }
                        } else if (e.indexOf(li(s), c) != c) {
                            var f = u.lastIndexOf(s);
                            f > -1 && (u = u.slice(0, f))
                        }
                        return u + i
                    }
                    ,
                    Hn.unescape = function(e) {
                        return (e = ba(e)) && Y.test(e) ? e.replace(Q, vn) : e
                    }
                    ,
                    Hn.uniqueId = function(e) {
                        var t = ++ke;
                        return ba(e) + t
                    }
                    ,
                    Hn.upperCase = $a,
                    Hn.upperFirst = Za,
                    Hn.each = bo,
                    Hn.eachRight = _o,
                    Hn.first = Gs,
                    uc(Hn, function() {
                        var e = {};
                        return Er(Hn, (function(t, n) {
                            Ue.call(Hn.prototype, n) || (e[n] = t)
                        }
                        )),
                        e
                    }(), {
                        chain: !1
                    }),
                    Hn.VERSION = "4.17.21",
                    xt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                        Hn[e].placeholder = Hn
                    }
                    )),
                    xt(["drop", "take"], (function(e, t) {
                        Wn.prototype[e] = function(r) {
                            r = r === n ? 1 : wn(va(r), 0);
                            var i = this.__filtered__ && !t ? new Wn(this) : this.clone();
                            return i.__filtered__ ? i.__takeCount__ = bn(r, i.__takeCount__) : i.__views__.push({
                                size: bn(r, d),
                                type: e + (i.__dir__ < 0 ? "Right" : "")
                            }),
                            i
                        }
                        ,
                        Wn.prototype[e + "Right"] = function(t) {
                            return this.reverse()[e](t).reverse()
                        }
                    }
                    )),
                    xt(["filter", "map", "takeWhile"], (function(e, t) {
                        var n = t + 1
                          , r = 1 == n || 3 == n;
                        Wn.prototype[e] = function(e) {
                            var t = this.clone();
                            return t.__iteratees__.push({
                                iteratee: hs(e, 3),
                                type: n
                            }),
                            t.__filtered__ = t.__filtered__ || r,
                            t
                        }
                    }
                    )),
                    xt(["head", "last"], (function(e, t) {
                        var n = "take" + (t ? "Right" : "");
                        Wn.prototype[e] = function() {
                            return this[n](1).value()[0]
                        }
                    }
                    )),
                    xt(["initial", "tail"], (function(e, t) {
                        var n = "drop" + (t ? "" : "Right");
                        Wn.prototype[e] = function() {
                            return this.__filtered__ ? new Wn(this) : this[n](1)
                        }
                    }
                    )),
                    Wn.prototype.compact = function() {
                        return this.filter(sc)
                    }
                    ,
                    Wn.prototype.find = function(e) {
                        return this.filter(e).head()
                    }
                    ,
                    Wn.prototype.findLast = function(e) {
                        return this.reverse().find(e)
                    }
                    ,
                    Wn.prototype.invokeMap = Zr((function(e, t) {
                        return "function" == typeof e ? new Wn(this) : this.map((function(n) {
                            return Cr(n, e, t)
                        }
                        ))
                    }
                    )),
                    Wn.prototype.reject = function(e) {
                        return this.filter(Uo(hs(e)))
                    }
                    ,
                    Wn.prototype.slice = function(e, t) {
                        e = va(e);
                        var r = this;
                        return r.__filtered__ && (e > 0 || t < 0) ? new Wn(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)),
                        t !== n && (r = (t = va(t)) < 0 ? r.dropRight(-t) : r.take(t - e)),
                        r)
                    }
                    ,
                    Wn.prototype.takeRightWhile = function(e) {
                        return this.reverse().takeWhile(e).reverse()
                    }
                    ,
                    Wn.prototype.toArray = function() {
                        return this.take(d)
                    }
                    ,
                    Er(Wn.prototype, (function(e, t) {
                        var r = /^(?:filter|find|map|reject)|While$/.test(t)
                          , i = /^(?:head|last)$/.test(t)
                          , s = Hn[i ? "take" + ("last" == t ? "Right" : "") : t]
                          , o = i || /^find/.test(t);
                        s && (Hn.prototype[t] = function() {
                            var t = this.__wrapped__
                              , a = i ? [1] : arguments
                              , c = t instanceof Wn
                              , u = a[0]
                              , h = c || Fo(t)
                              , l = function(e) {
                                var t = s.apply(Hn, Mt([e], a));
                                return i && p ? t[0] : t
                            };
                            h && r && "function" == typeof u && 1 != u.length && (c = h = !1);
                            var p = this.__chain__
                              , f = !!this.__actions__.length
                              , d = o && !p
                              , g = c && !f;
                            if (!o && h) {
                                t = g ? t : new Wn(this);
                                var v = e.apply(t, a);
                                return v.__actions__.push({
                                    func: go,
                                    args: [l],
                                    thisArg: n
                                }),
                                new Bn(v,p)
                            }
                            return d && g ? e.apply(this, a) : (v = this.thru(l),
                            d ? i ? v.value()[0] : v.value() : v)
                        }
                        )
                    }
                    )),
                    xt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                        var t = Ce[e]
                          , n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                          , r = /^(?:pop|shift)$/.test(e);
                        Hn.prototype[e] = function() {
                            var e = arguments;
                            if (r && !this.__chain__) {
                                var i = this.value();
                                return t.apply(Fo(i) ? i : [], e)
                            }
                            return this[n]((function(n) {
                                return t.apply(Fo(n) ? n : [], e)
                            }
                            ))
                        }
                    }
                    )),
                    Er(Wn.prototype, (function(e, t) {
                        var n = Hn[t];
                        if (n) {
                            var r = n.name + "";
                            Ue.call(Cn, r) || (Cn[r] = []),
                            Cn[r].push({
                                name: t,
                                func: n
                            })
                        }
                    }
                    )),
                    Cn[Vi(n, 2).name] = [{
                        name: "wrapper",
                        func: n
                    }],
                    Wn.prototype.clone = function() {
                        var e = new Wn(this.__wrapped__);
                        return e.__actions__ = Ti(this.__actions__),
                        e.__dir__ = this.__dir__,
                        e.__filtered__ = this.__filtered__,
                        e.__iteratees__ = Ti(this.__iteratees__),
                        e.__takeCount__ = this.__takeCount__,
                        e.__views__ = Ti(this.__views__),
                        e
                    }
                    ,
                    Wn.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var e = new Wn(this);
                            e.__dir__ = -1,
                            e.__filtered__ = !0
                        } else
                            (e = this.clone()).__dir__ *= -1;
                        return e
                    }
                    ,
                    Wn.prototype.value = function() {
                        var e = this.__wrapped__.value()
                          , t = this.__dir__
                          , n = Fo(e)
                          , r = t < 0
                          , i = n ? e.length : 0
                          , s = function(e, t, n) {
                            for (var r = -1, i = n.length; ++r < i; ) {
                                var s = n[r]
                                  , o = s.size;
                                switch (s.type) {
                                case "drop":
                                    e += o;
                                    break;
                                case "dropRight":
                                    t -= o;
                                    break;
                                case "take":
                                    t = bn(t, e + o);
                                    break;
                                case "takeRight":
                                    e = wn(e, t - o)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }(0, i, this.__views__)
                          , o = s.start
                          , a = s.end
                          , c = a - o
                          , u = r ? a : o - 1
                          , h = this.__iteratees__
                          , l = h.length
                          , p = 0
                          , f = bn(c, this.__takeCount__);
                        if (!n || !r && i == c && f == c)
                            return vi(e, this.__actions__);
                        var d = [];
                        e: for (; c-- && p < f; ) {
                            for (var g = -1, v = e[u += t]; ++g < l; ) {
                                var y = h[g]
                                  , m = y.iteratee
                                  , w = y.type
                                  , b = m(v);
                                if (2 == w)
                                    v = b;
                                else if (!b) {
                                    if (1 == w)
                                        continue e;
                                    break e
                                }
                            }
                            d[p++] = v
                        }
                        return d
                    }
                    ,
                    Hn.prototype.at = vo,
                    Hn.prototype.chain = function() {
                        return fo(this)
                    }
                    ,
                    Hn.prototype.commit = function() {
                        return new Bn(this.value(),this.__chain__)
                    }
                    ,
                    Hn.prototype.next = function() {
                        this.__values__ === n && (this.__values__ = da(this.value()));
                        var e = this.__index__ >= this.__values__.length;
                        return {
                            done: e,
                            value: e ? n : this.__values__[this.__index__++]
                        }
                    }
                    ,
                    Hn.prototype.plant = function(e) {
                        for (var t, r = this; r instanceof Kn; ) {
                            var i = zs(r);
                            i.__index__ = 0,
                            i.__values__ = n,
                            t ? s.__wrapped__ = i : t = i;
                            var s = i;
                            r = r.__wrapped__
                        }
                        return s.__wrapped__ = e,
                        t
                    }
                    ,
                    Hn.prototype.reverse = function() {
                        var e = this.__wrapped__;
                        if (e instanceof Wn) {
                            var t = e;
                            return this.__actions__.length && (t = new Wn(this)),
                            (t = t.reverse()).__actions__.push({
                                func: go,
                                args: [to],
                                thisArg: n
                            }),
                            new Bn(t,this.__chain__)
                        }
                        return this.thru(to)
                    }
                    ,
                    Hn.prototype.toJSON = Hn.prototype.valueOf = Hn.prototype.value = function() {
                        return vi(this.__wrapped__, this.__actions__)
                    }
                    ,
                    Hn.prototype.first = Hn.prototype.head,
                    Xe && (Hn.prototype[Xe] = function() {
                        return this
                    }
                    ),
                    Hn
                }();
                yt ? ((yt.exports = yn)._ = yn,
                vt._ = yn) : gt._ = yn
            }
            ).call(ma)
        }(wa, wa.exports);
        var ba = Object.defineProperty
          , _a = Object.defineProperties
          , Ea = Object.getOwnPropertyDescriptors
          , Ia = Object.getOwnPropertySymbols
          , Pa = Object.prototype.hasOwnProperty
          , Sa = Object.prototype.propertyIsEnumerable
          , Oa = (e,t,n)=>t in e ? ba(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , Ra = (e,t)=>{
            for (var n in t || (t = {}))
                Pa.call(t, n) && Oa(e, n, t[n]);
            if (Ia)
                for (var n of Ia(t))
                    Sa.call(t, n) && Oa(e, n, t[n]);
            return e
        }
          , Aa = (e,t)=>_a(e, Ea(t));
        function xa(e, t, n) {
            var r;
            const i = at(e);
            return (null == (r = t.rpcMap) ? void 0 : r[i.reference]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=").concat(i.namespace, ":").concat(i.reference, "&projectId=").concat(n)
        }
        function Na(e) {
            return e.includes(":") ? e.split(":")[1] : e
        }
        function Ta(e) {
            return e.map((e=>"".concat(e.split(":")[0], ":").concat(e.split(":")[1])))
        }
        function Ca(e) {
            var t, n, r, i;
            const s = {};
            if (!mn(e))
                return s;
            for (const [o,a] of Object.entries(e)) {
                const e = ln(o) ? [o] : a.chains
                  , c = a.methods || []
                  , u = a.events || []
                  , h = a.rpcMap || {}
                  , l = pn(o);
                s[l] = Aa(Ra(Ra({}, s[l]), a), {
                    chains: $t(e, null == (t = s[l]) ? void 0 : t.chains),
                    methods: $t(c, null == (n = s[l]) ? void 0 : n.methods),
                    events: $t(u, null == (r = s[l]) ? void 0 : r.events),
                    rpcMap: Ra(Ra({}, h), null == (i = s[l]) ? void 0 : i.rpcMap)
                })
            }
            return s
        }
        function ja(e) {
            return e.includes(":") ? e.split(":")[2] : e
        }
        function Da(e) {
            const t = {};
            for (const [n,r] of Object.entries(e)) {
                const e = r.methods || []
                  , i = r.events || []
                  , s = r.accounts || []
                  , o = ln(n) ? [n] : r.chains ? r.chains : Ta(r.accounts);
                t[n] = {
                    chains: o,
                    methods: e,
                    events: i,
                    accounts: s
                }
            }
            return t
        }
        function La(e) {
            return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
        }
        const Ma = {}
          , Ua = e=>Ma[e]
          , ka = (e,t)=>{
            Ma[e] = t
        }
        ;
        class qa {
            constructor(e) {
                this.name = "polkadot",
                this.namespace = e.namespace,
                this.events = Ua("events"),
                this.client = Ua("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(ya, "".concat(this.name, ":").concat(e))
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e && e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])) || []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var n;
                    const r = Na(t);
                    e[r] = this.createHttpProvider(r, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = "".concat(this.name, ":").concat(this.chainId)
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                return t
            }
            setHttpProvider(e, t) {
                const n = this.createHttpProvider(e, t);
                n && (this.httpProviders[e] = n)
            }
            createHttpProvider(e, t) {
                const n = t || xa(e, this.namespace, this.client.core.projectId);
                if (!n)
                    throw new Error("No RPC url provided for chainId: ".concat(e));
                return new vr(new da(n,Ua("disableProviderPing")))
            }
        }
        class za {
            constructor(e) {
                this.name = "eip155",
                this.namespace = e.namespace,
                this.events = Ua("events"),
                this.client = Ua("client"),
                this.httpProviders = this.createHttpProviders(),
                this.chainId = parseInt(this.getDefaultChain())
            }
            async request(e) {
                switch (e.request.method) {
                case "eth_requestAccounts":
                case "eth_accounts":
                    return this.getAccounts();
                case "wallet_switchEthereumChain":
                    return await this.handleSwitchChain(e);
                case "eth_chainId":
                    return parseInt(this.getDefaultChain())
                }
                return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
                this.chainId = parseInt(e),
                this.events.emit(ya, "".concat(this.name, ":").concat(e))
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId.toString();
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            createHttpProvider(e, t) {
                const n = t || xa("".concat(this.name, ":").concat(e), this.namespace, this.client.core.projectId);
                if (!n)
                    throw new Error("No RPC url provided for chainId: ".concat(e));
                return new vr(new da(n,Ua("disableProviderPing")))
            }
            setHttpProvider(e, t) {
                const n = this.createHttpProvider(e, t);
                n && (this.httpProviders[e] = n)
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var n;
                    const r = parseInt(Na(t));
                    e[r] = this.createHttpProvider(r, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
                }
                )),
                e
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            getHttpProvider() {
                const e = this.chainId
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                return t
            }
            async handleSwitchChain(e) {
                var t, n;
                let r = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                r = r.startsWith("0x") ? r : "0x".concat(r);
                const i = parseInt(r, 16);
                if (this.isChainApproved(i))
                    this.setDefaultChain("".concat(i));
                else {
                    if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
                        throw new Error("Failed to switch to chain 'eip155:".concat(i, "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."));
                    await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: r
                            }]
                        },
                        chainId: null == (n = this.namespace.chains) ? void 0 : n[0]
                    }),
                    this.setDefaultChain("".concat(i))
                }
                return null
            }
            isChainApproved(e) {
                return this.namespace.chains.includes("".concat(this.name, ":").concat(e))
            }
        }
        class Ha {
            constructor(e) {
                this.name = "solana",
                this.namespace = e.namespace,
                this.events = Ua("events"),
                this.client = Ua("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(ya, "".concat(this.name, ":").concat(e))
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var n;
                    const r = Na(t);
                    e[r] = this.createHttpProvider(r, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = "".concat(this.name, ":").concat(this.chainId)
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                return t
            }
            setHttpProvider(e, t) {
                const n = this.createHttpProvider(e, t);
                n && (this.httpProviders[e] = n)
            }
            createHttpProvider(e, t) {
                const n = t || xa(e, this.namespace, this.client.core.projectId);
                if (!n)
                    throw new Error("No RPC url provided for chainId: ".concat(e));
                return new vr(new da(n,Ua("disableProviderPing")))
            }
        }
        class Va {
            constructor(e) {
                this.name = "cosmos",
                this.namespace = e.namespace,
                this.events = Ua("events"),
                this.client = Ua("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(ya, "".concat(this.name, ":").concat(this.chainId))
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var n;
                    const r = Na(t);
                    e[r] = this.createHttpProvider(r, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = "".concat(this.name, ":").concat(this.chainId)
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                return t
            }
            setHttpProvider(e, t) {
                const n = this.createHttpProvider(e, t);
                n && (this.httpProviders[e] = n)
            }
            createHttpProvider(e, t) {
                const n = t || xa(e, this.namespace, this.client.core.projectId);
                if (!n)
                    throw new Error("No RPC url provided for chainId: ".concat(e));
                return new vr(new da(n,Ua("disableProviderPing")))
            }
        }
        class Ka {
            constructor(e) {
                this.name = "cip34",
                this.namespace = e.namespace,
                this.events = Ua("events"),
                this.client = Ua("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(ya, "".concat(this.name, ":").concat(this.chainId))
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    const n = this.getCardanoRPCUrl(t)
                      , r = Na(t);
                    e[r] = this.createHttpProvider(r, n)
                }
                )),
                e
            }
            getHttpProvider() {
                const e = "".concat(this.name, ":").concat(this.chainId)
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                return t
            }
            getCardanoRPCUrl(e) {
                const t = this.namespace.rpcMap;
                if (t)
                    return t[e]
            }
            setHttpProvider(e, t) {
                const n = this.createHttpProvider(e, t);
                n && (this.httpProviders[e] = n)
            }
            createHttpProvider(e, t) {
                const n = t || this.getCardanoRPCUrl(e);
                if (!n)
                    throw new Error("No RPC url provided for chainId: ".concat(e));
                return new vr(new da(n,Ua("disableProviderPing")))
            }
        }
        class Ba {
            constructor(e) {
                this.name = "elrond",
                this.namespace = e.namespace,
                this.events = Ua("events"),
                this.client = Ua("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(ya, "".concat(this.name, ":").concat(e))
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var n;
                    const r = Na(t);
                    e[r] = this.createHttpProvider(r, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = "".concat(this.name, ":").concat(this.chainId)
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                return t
            }
            setHttpProvider(e, t) {
                const n = this.createHttpProvider(e, t);
                n && (this.httpProviders[e] = n)
            }
            createHttpProvider(e, t) {
                const n = t || xa(e, this.namespace, this.client.core.projectId);
                if (!n)
                    throw new Error("No RPC url provided for chainId: ".concat(e));
                return new vr(new da(n,Ua("disableProviderPing")))
            }
        }
        class Wa {
            constructor(e) {
                this.name = "multiversx",
                this.namespace = e.namespace,
                this.events = Ua("events"),
                this.client = Ua("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(ya, "".concat(this.name, ":").concat(e))
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e ? [...new Set(e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])))] : []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var n;
                    const r = Na(t);
                    e[r] = this.createHttpProvider(r, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = "".concat(this.name, ":").concat(this.chainId)
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                return t
            }
            setHttpProvider(e, t) {
                const n = this.createHttpProvider(e, t);
                n && (this.httpProviders[e] = n)
            }
            createHttpProvider(e, t) {
                const n = t || xa(e, this.namespace, this.client.core.projectId);
                if (!n)
                    throw new Error("No RPC url provided for chainId: ".concat(e));
                return new vr(new da(n,Ua("disableProviderPing")))
            }
        }
        class Fa {
            constructor(e) {
                this.name = "near",
                this.namespace = e.namespace,
                this.events = Ua("events"),
                this.client = Ua("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                const e = this.namespace.chains[0];
                if (!e)
                    throw new Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                if (this.chainId = e,
                !this.httpProviders[e]) {
                    const n = t || xa("".concat(this.name, ":").concat(e), this.namespace);
                    if (!n)
                        throw new Error("No RPC url provided for chainId: ".concat(e));
                    this.setHttpProvider(e, n)
                }
                this.events.emit(ya, "".concat(this.name, ":").concat(this.chainId))
            }
            getAccounts() {
                const e = this.namespace.accounts;
                return e && e.filter((e=>e.split(":")[1] === this.chainId.toString())).map((e=>e.split(":")[2])) || []
            }
            createHttpProviders() {
                const e = {};
                return this.namespace.chains.forEach((t=>{
                    var n;
                    e[t] = this.createHttpProvider(t, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
                }
                )),
                e
            }
            getHttpProvider() {
                const e = "".concat(this.name, ":").concat(this.chainId)
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                return t
            }
            setHttpProvider(e, t) {
                const n = this.createHttpProvider(e, t);
                n && (this.httpProviders[e] = n)
            }
            createHttpProvider(e, t) {
                const n = t || xa(e, this.namespace);
                return typeof n > "u" ? void 0 : new vr(new da(n,Ua("disableProviderPing")))
            }
        }
        var Ga = Object.defineProperty
          , Qa = Object.defineProperties
          , Ja = Object.getOwnPropertyDescriptors
          , Ya = Object.getOwnPropertySymbols
          , $a = Object.prototype.hasOwnProperty
          , Za = Object.prototype.propertyIsEnumerable
          , Xa = (e,t,n)=>t in e ? Ga(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , ec = (e,t)=>{
            for (var n in t || (t = {}))
                $a.call(t, n) && Xa(e, n, t[n]);
            if (Ya)
                for (var n of Ya(t))
                    Za.call(t, n) && Xa(e, n, t[n]);
            return e
        }
          , tc = (e,t)=>Qa(e, Ja(t));
        class nc {
            constructor(e) {
                this.events = new (i()),
                this.rpcProviders = {},
                this.shouldAbortPairingAttempt = !1,
                this.maxPairingAttempts = 10,
                this.disableProviderPing = !1,
                this.providerOpts = e,
                this.logger = typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof (null === e || void 0 === e ? void 0 : e.logger) ? e.logger : te()(fe({
                    level: (null === e || void 0 === e ? void 0 : e.logger) || ga
                })),
                this.disableProviderPing = (null === e || void 0 === e ? void 0 : e.disableProviderPing) || !1
            }
            static async init(e) {
                const t = new nc(e);
                return await t.initialize(),
                t
            }
            async request(e, t) {
                const [n,r] = this.validateChain(t);
                if (!this.session)
                    throw new Error("Please call connect() before request()");
                return await this.getProvider(n).request({
                    request: ec({}, e),
                    chainId: "".concat(n, ":").concat(r),
                    topic: this.session.topic
                })
            }
            sendAsync(e, t, n) {
                const r = (new Date).getTime();
                this.request(e, n).then((e=>t(null, nr(r, e)))).catch((e=>t(e, void 0)))
            }
            async enable() {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                return this.session || await this.connect({
                    namespaces: this.namespaces,
                    optionalNamespaces: this.optionalNamespaces,
                    sessionProperties: this.sessionProperties
                }),
                await this.requestAccounts()
            }
            async disconnect() {
                var e;
                if (!this.session)
                    throw new Error("Please call connect() before enable()");
                await this.client.disconnect({
                    topic: null == (e = this.session) ? void 0 : e.topic,
                    reason: vn("USER_DISCONNECTED")
                }),
                await this.cleanup()
            }
            async connect(e) {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                if (this.setNamespaces(e),
                await this.cleanupPendingPairings(),
                !e.skipPairing)
                    return await this.pair(e.pairingTopic)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            get isWalletConnect() {
                return !0
            }
            async pair(e) {
                this.shouldAbortPairingAttempt = !1;
                let t = 0;
                do {
                    if (this.shouldAbortPairingAttempt)
                        throw new Error("Pairing aborted");
                    if (t >= this.maxPairingAttempts)
                        throw new Error("Max auto pairing attempts reached");
                    const {uri: n, approval: r} = await this.client.connect({
                        pairingTopic: e,
                        requiredNamespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    });
                    n && (this.uri = n,
                    this.events.emit("display_uri", n)),
                    await r().then((e=>{
                        this.session = e,
                        this.namespaces || (this.namespaces = Da(e.namespaces),
                        this.persist("namespaces", this.namespaces))
                    }
                    )).catch((e=>{
                        if (e.message !== Lo)
                            throw e;
                        t++
                    }
                    ))
                } while (!this.session);
                return this.onConnect(),
                this.session
            }
            setDefaultChain(e, t) {
                try {
                    if (!this.session)
                        return;
                    const [n,r] = this.validateChain(e);
                    this.getProvider(n).setDefaultChain(r, t)
                } catch (n) {
                    if (!/Please call connect/.test(n.message))
                        throw n
                }
            }
            async cleanupPendingPairings() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.logger.info("Cleaning up inactive pairings...");
                const t = this.client.pairing.getAll();
                if (yn(t)) {
                    for (const n of t)
                        e.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
                    this.logger.info("Inactive pairings cleared: ".concat(t.length))
                }
            }
            abortPairingAttempt() {
                this.shouldAbortPairingAttempt = !0
            }
            async checkStorage() {
                if (this.namespaces = await this.getFromStore("namespaces"),
                this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
                this.client.session.length) {
                    const e = this.client.session.keys.length - 1;
                    this.session = this.client.session.get(this.client.session.keys[e]),
                    this.createProviders()
                }
            }
            async initialize() {
                this.logger.trace("Initialized"),
                await this.createClient(),
                await this.checkStorage(),
                this.registerEventListeners()
            }
            async createClient() {
                this.client = this.providerOpts.client || await ta.init({
                    logger: this.providerOpts.logger || ga,
                    relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                    projectId: this.providerOpts.projectId,
                    metadata: this.providerOpts.metadata,
                    storageOptions: this.providerOpts.storageOptions,
                    storage: this.providerOpts.storage,
                    name: this.providerOpts.name
                }),
                this.logger.trace("SignClient Initialized")
            }
            createProviders() {
                if (!this.client)
                    throw new Error("Sign Client not initialized");
                if (!this.session)
                    throw new Error("Session not initialized. Please call connect() before enable()");
                const e = [...new Set(Object.keys(this.session.namespaces).map((e=>pn(e))))];
                ka("client", this.client),
                ka("events", this.events),
                ka("disableProviderPing", this.disableProviderPing),
                e.forEach((e=>{
                    if (!this.session)
                        return;
                    const t = function(e, t) {
                        const n = Object.keys(t.namespaces).filter((t=>t.includes(e)));
                        if (!n.length)
                            return [];
                        const r = [];
                        return n.forEach((e=>{
                            const n = t.namespaces[e].accounts;
                            r.push(...n)
                        }
                        )),
                        r
                    }(e, this.session)
                      , n = Ta(t)
                      , r = function() {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const t = Ca(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                          , n = Ca(e);
                        return wa.exports.merge(t, n)
                    }(this.namespaces, this.optionalNamespaces)
                      , i = tc(ec({}, r[e]), {
                        accounts: t,
                        chains: n
                    });
                    switch (e) {
                    case "eip155":
                        this.rpcProviders[e] = new za({
                            namespace: i
                        });
                        break;
                    case "solana":
                        this.rpcProviders[e] = new Ha({
                            namespace: i
                        });
                        break;
                    case "cosmos":
                        this.rpcProviders[e] = new Va({
                            namespace: i
                        });
                        break;
                    case "polkadot":
                        this.rpcProviders[e] = new qa({
                            namespace: i
                        });
                        break;
                    case "cip34":
                        this.rpcProviders[e] = new Ka({
                            namespace: i
                        });
                        break;
                    case "elrond":
                        this.rpcProviders[e] = new Ba({
                            namespace: i
                        });
                        break;
                    case "multiversx":
                        this.rpcProviders[e] = new Wa({
                            namespace: i
                        });
                        break;
                    case "near":
                        this.rpcProviders[e] = new Fa({
                            namespace: i
                        })
                    }
                }
                ))
            }
            registerEventListeners() {
                if (typeof this.client > "u")
                    throw new Error("Sign Client is not initialized");
                this.client.on("session_ping", (e=>{
                    this.events.emit("session_ping", e)
                }
                )),
                this.client.on("session_event", (e=>{
                    const {params: t} = e
                      , {event: n} = t;
                    if ("accountsChanged" === n.name) {
                        const e = n.data;
                        e && yn(e) && this.events.emit("accountsChanged", e.map(ja))
                    } else if ("chainChanged" === n.name) {
                        const e = t.chainId
                          , n = t.event.data
                          , r = pn(e)
                          , i = La(e) !== La(n) ? "".concat(r, ":").concat(La(n)) : e;
                        this.onChainChanged(i)
                    } else
                        this.events.emit(n.name, n.data);
                    this.events.emit("session_event", e)
                }
                )),
                this.client.on("session_update", (e=>{
                    let {topic: t, params: n} = e;
                    var r;
                    const {namespaces: i} = n
                      , s = null == (r = this.client) ? void 0 : r.session.get(t);
                    this.session = tc(ec({}, s), {
                        namespaces: i
                    }),
                    this.onSessionUpdate(),
                    this.events.emit("session_update", {
                        topic: t,
                        params: n
                    })
                }
                )),
                this.client.on("session_delete", (async e=>{
                    await this.cleanup(),
                    this.events.emit("session_delete", e),
                    this.events.emit("disconnect", tc(ec({}, vn("USER_DISCONNECTED")), {
                        data: e.topic
                    }))
                }
                )),
                this.on(ya, (e=>{
                    this.onChainChanged(e, !0)
                }
                ))
            }
            getProvider(e) {
                if (!this.rpcProviders[e])
                    throw new Error("Provider not found: ".concat(e));
                return this.rpcProviders[e]
            }
            onSessionUpdate() {
                Object.keys(this.rpcProviders).forEach((e=>{
                    var t;
                    this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                }
                ))
            }
            setNamespaces(e) {
                const {namespaces: t, optionalNamespaces: n, sessionProperties: r} = e;
                t && Object.keys(t).length && (this.namespaces = t),
                n && Object.keys(n).length && (this.optionalNamespaces = n),
                this.sessionProperties = r,
                this.persist("namespaces", t),
                this.persist("optionalNamespaces", n)
            }
            validateChain(e) {
                const [t,n] = (null === e || void 0 === e ? void 0 : e.split(":")) || ["", ""];
                if (!this.namespaces || !Object.keys(this.namespaces).length)
                    return [t, n];
                if (t && !Object.keys(this.namespaces || {}).map((e=>pn(e))).includes(t))
                    throw new Error("Namespace '".concat(t, "' is not configured. Please call connect() first with namespace config."));
                if (t && n)
                    return [t, n];
                const r = pn(Object.keys(this.namespaces)[0]);
                return [r, this.rpcProviders[r].getDefaultChain()]
            }
            async requestAccounts() {
                const [e] = this.validateChain();
                return await this.getProvider(e).requestAccounts()
            }
            onChainChanged(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var n;
                if (!this.namespaces)
                    return;
                const [r,i] = this.validateChain(e);
                t || this.getProvider(r).setDefaultChain(i),
                (null != (n = this.namespaces[r]) ? n : this.namespaces["".concat(r, ":").concat(i)]).defaultChain = i,
                this.persist("namespaces", this.namespaces),
                this.events.emit("chainChanged", i)
            }
            onConnect() {
                this.createProviders(),
                this.events.emit("connect", {
                    session: this.session
                })
            }
            async cleanup() {
                this.session = void 0,
                this.namespaces = void 0,
                this.optionalNamespaces = void 0,
                this.sessionProperties = void 0,
                this.persist("namespaces", void 0),
                this.persist("optionalNamespaces", void 0),
                this.persist("sessionProperties", void 0),
                await this.cleanupPendingPairings({
                    deletePairings: !0
                })
            }
            persist(e, t) {
                this.client.core.storage.setItem("".concat(va, "/").concat(e), t)
            }
            async getFromStore(e) {
                return await this.client.core.storage.getItem("".concat(va, "/").concat(e))
            }
        }
        const rc = nc
          , ic = "".concat("wc", "@2:").concat("ethereum_provider", ":")
          , sc = ["eth_sendTransaction", "personal_sign"]
          , oc = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
          , ac = ["chainChanged", "accountsChanged"]
          , cc = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
        var uc = Object.defineProperty
          , hc = Object.defineProperties
          , lc = Object.getOwnPropertyDescriptors
          , pc = Object.getOwnPropertySymbols
          , fc = Object.prototype.hasOwnProperty
          , dc = Object.prototype.propertyIsEnumerable
          , gc = (e,t,n)=>t in e ? uc(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , vc = (e,t)=>{
            for (var n in t || (t = {}))
                fc.call(t, n) && gc(e, n, t[n]);
            if (pc)
                for (var n of pc(t))
                    dc.call(t, n) && gc(e, n, t[n]);
            return e
        }
          , yc = (e,t)=>hc(e, lc(t));
        function mc(e) {
            return Number(e[0].split(":")[1])
        }
        function wc(e) {
            return "0x".concat(e.toString(16))
        }
        class bc {
            constructor() {
                this.events = new r.EventEmitter,
                this.namespace = "eip155",
                this.accounts = [],
                this.chainId = 1,
                this.STORAGE_KEY = ic,
                this.on = (e,t)=>(this.events.on(e, t),
                this),
                this.once = (e,t)=>(this.events.once(e, t),
                this),
                this.removeListener = (e,t)=>(this.events.removeListener(e, t),
                this),
                this.off = (e,t)=>(this.events.off(e, t),
                this),
                this.parseAccount = e=>this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e,
                this.signer = {},
                this.rpc = {}
            }
            static async init(e) {
                const t = new bc;
                return await t.initialize(e),
                t
            }
            async request(e) {
                return await this.signer.request(e, this.formatChainId(this.chainId))
            }
            sendAsync(e, t) {
                this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
            }
            get connected() {
                return !!this.signer.client && this.signer.client.core.relayer.connected
            }
            get connecting() {
                return !!this.signer.client && this.signer.client.core.relayer.connecting
            }
            async enable() {
                return this.session || await this.connect(),
                await this.request({
                    method: "eth_requestAccounts"
                })
            }
            async connect(e) {
                if (!this.signer.client)
                    throw new Error("Provider not initialized. Call init() first");
                this.loadConnectOpts(e);
                const {required: t, optional: n} = function(e) {
                    const {chains: t, optionalChains: n, methods: r, optionalMethods: i, events: s, optionalEvents: o, rpcMap: a} = e;
                    if (!m(t))
                        throw new Error("Invalid chains");
                    const c = {
                        chains: t,
                        methods: r || sc,
                        events: s || ac,
                        rpcMap: vc({}, t.length ? {
                            [mc(t)]: a[mc(t)]
                        } : {})
                    }
                      , u = null === s || void 0 === s ? void 0 : s.filter((e=>!ac.includes(e)))
                      , h = null === r || void 0 === r ? void 0 : r.filter((e=>!sc.includes(e)));
                    if (!n && !o && !i && (null == u || !u.length) && (null == h || !h.length))
                        return {
                            required: t.length ? c : void 0
                        };
                    const l = (null === u || void 0 === u ? void 0 : u.length) && (null === h || void 0 === h ? void 0 : h.length) || !n
                      , p = {
                        chains: [...new Set(l ? c.chains.concat(n || []) : n)],
                        methods: [...new Set(c.methods.concat(null != i && i.length ? i : oc))],
                        events: [...new Set(c.events.concat(null != o && o.length ? o : cc))],
                        rpcMap: a
                    };
                    return {
                        required: t.length ? c : void 0,
                        optional: n.length ? p : void 0
                    }
                }(this.rpc);
                try {
                    const r = await new Promise((async(r,i)=>{
                        var s;
                        this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((e=>{
                            !e.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                            i(new Error("Connection request reset. Please try again.")))
                        }
                        ))),
                        await this.signer.connect(yc(vc({
                            namespaces: vc({}, t && {
                                [this.namespace]: t
                            })
                        }, n && {
                            optionalNamespaces: {
                                [this.namespace]: n
                            }
                        }), {
                            pairingTopic: null === e || void 0 === e ? void 0 : e.pairingTopic
                        })).then((e=>{
                            r(e)
                        }
                        )).catch((e=>{
                            i(new Error(e.message))
                        }
                        ))
                    }
                    ));
                    if (!r)
                        return;
                    const i = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        const n = [];
                        return Object.keys(e).forEach((r=>{
                            if (t.length && !t.includes(r))
                                return;
                            const i = e[r];
                            n.push(...i.accounts)
                        }
                        )),
                        n
                    }(r.namespaces, [this.namespace]);
                    this.setChainIds(this.rpc.chains.length ? this.rpc.chains : i),
                    this.setAccounts(i),
                    this.events.emit("connect", {
                        chainId: wc(this.chainId)
                    })
                } catch (re) {
                    throw this.signer.logger.error(re),
                    re
                } finally {
                    this.modal && this.modal.closeModal()
                }
            }
            async disconnect() {
                this.session && await this.signer.disconnect(),
                this.reset()
            }
            get isWalletConnect() {
                return !0
            }
            get session() {
                return this.signer.session
            }
            registerEventListeners() {
                this.signer.on("session_event", (e=>{
                    const {params: t} = e
                      , {event: n} = t;
                    "accountsChanged" === n.name ? (this.accounts = this.parseAccounts(n.data),
                    this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === n.name ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data),
                    this.events.emit("session_event", e)
                }
                )),
                this.signer.on("chainChanged", (e=>{
                    const t = parseInt(e);
                    this.chainId = t,
                    this.events.emit("chainChanged", wc(this.chainId)),
                    this.persist()
                }
                )),
                this.signer.on("session_update", (e=>{
                    this.events.emit("session_update", e)
                }
                )),
                this.signer.on("session_delete", (e=>{
                    this.reset(),
                    this.events.emit("session_delete", e),
                    this.events.emit("disconnect", yc(vc({}, y("USER_DISCONNECTED")), {
                        data: e.topic,
                        name: "USER_DISCONNECTED"
                    }))
                }
                )),
                this.signer.on("display_uri", (e=>{
                    var t, n;
                    this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(),
                    null == (n = this.modal) || n.openModal({
                        uri: e
                    })),
                    this.events.emit("display_uri", e)
                }
                ))
            }
            switchEthereumChain(e) {
                this.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: e.toString(16)
                    }]
                })
            }
            isCompatibleChainId(e) {
                return "string" == typeof e && e.startsWith("".concat(this.namespace, ":"))
            }
            formatChainId(e) {
                return "".concat(this.namespace, ":").concat(e)
            }
            parseChainId(e) {
                return Number(e.split(":")[1])
            }
            setChainIds(e) {
                const t = e.filter((e=>this.isCompatibleChainId(e))).map((e=>this.parseChainId(e)));
                t.length && (this.chainId = t[0],
                this.events.emit("chainChanged", wc(this.chainId)),
                this.persist())
            }
            setChainId(e) {
                if (this.isCompatibleChainId(e)) {
                    const t = this.parseChainId(e);
                    this.chainId = t,
                    this.switchEthereumChain(t)
                }
            }
            parseAccountId(e) {
                const [t,n,r] = e.split(":");
                return {
                    chainId: "".concat(t, ":").concat(n),
                    address: r
                }
            }
            setAccounts(e) {
                this.accounts = e.filter((e=>this.parseChainId(this.parseAccountId(e).chainId) === this.chainId)).map((e=>this.parseAccountId(e).address)),
                this.events.emit("accountsChanged", this.accounts)
            }
            getRpcConfig(e) {
                var t, n;
                const r = null != (t = null === e || void 0 === e ? void 0 : e.chains) ? t : []
                  , i = null != (n = null === e || void 0 === e ? void 0 : e.optionalChains) ? n : []
                  , s = r.concat(i);
                if (!s.length)
                    throw new Error("No chains specified in either `chains` or `optionalChains`");
                const o = r.length ? (null === e || void 0 === e ? void 0 : e.methods) || sc : []
                  , a = r.length ? (null === e || void 0 === e ? void 0 : e.events) || ac : []
                  , c = (null === e || void 0 === e ? void 0 : e.optionalMethods) || []
                  , u = (null === e || void 0 === e ? void 0 : e.optionalEvents) || []
                  , h = (null === e || void 0 === e ? void 0 : e.rpcMap) || this.buildRpcMap(s, e.projectId)
                  , l = (null === e || void 0 === e ? void 0 : e.qrModalOptions) || void 0;
                return {
                    chains: null === r || void 0 === r ? void 0 : r.map((e=>this.formatChainId(e))),
                    optionalChains: i.map((e=>this.formatChainId(e))),
                    methods: o,
                    events: a,
                    optionalMethods: c,
                    optionalEvents: u,
                    rpcMap: h,
                    showQrModal: !(null == e || !e.showQrModal),
                    qrModalOptions: l,
                    projectId: e.projectId,
                    metadata: e.metadata
                }
            }
            buildRpcMap(e, t) {
                const n = {};
                return e.forEach((e=>{
                    n[e] = this.getRpcUrl(e, t)
                }
                )),
                n
            }
            async initialize(e) {
                if (this.rpc = this.getRpcConfig(e),
                this.chainId = this.rpc.chains.length ? mc(this.rpc.chains) : mc(this.rpc.optionalChains),
                this.signer = await rc.init({
                    projectId: this.rpc.projectId,
                    metadata: this.rpc.metadata,
                    disableProviderPing: e.disableProviderPing,
                    relayUrl: e.relayUrl,
                    storageOptions: e.storageOptions
                }),
                this.registerEventListeners(),
                await this.loadPersistedSession(),
                this.rpc.showQrModal) {
                    let e;
                    try {
                        const {WalletConnectModal: t} = await n.e(643).then(n.bind(n, 87643));
                        e = t
                    } catch {
                        throw new Error("To use QR modal, please install @walletconnect/modal package")
                    }
                    if (e)
                        try {
                            this.modal = new e(vc({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (le) {
                            throw this.signer.logger.error(le),
                            new Error("Could not generate WalletConnectModal Instance")
                        }
                }
            }
            loadConnectOpts(e) {
                if (!e)
                    return;
                const {chains: t, optionalChains: n, rpcMap: r} = e;
                t && m(t) && (this.rpc.chains = t.map((e=>this.formatChainId(e))),
                t.forEach((e=>{
                    this.rpc.rpcMap[e] = (null === r || void 0 === r ? void 0 : r[e]) || this.getRpcUrl(e)
                }
                ))),
                n && m(n) && (this.rpc.optionalChains = [],
                this.rpc.optionalChains = null === n || void 0 === n ? void 0 : n.map((e=>this.formatChainId(e))),
                n.forEach((e=>{
                    this.rpc.rpcMap[e] = (null === r || void 0 === r ? void 0 : r[e]) || this.getRpcUrl(e)
                }
                )))
            }
            getRpcUrl(e, t) {
                var n;
                return (null == (n = this.rpc.rpcMap) ? void 0 : n[e]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=eip155:").concat(e, "&projectId=").concat(t || this.rpc.projectId)
            }
            async loadPersistedSession() {
                if (!this.session)
                    return;
                const e = await this.signer.client.core.storage.getItem("".concat(this.STORAGE_KEY, "/chainId"))
                  , t = this.session.namespaces["".concat(this.namespace, ":").concat(e)] ? this.session.namespaces["".concat(this.namespace, ":").concat(e)] : this.session.namespaces[this.namespace];
                this.setChainIds(e ? [this.formatChainId(e)] : null === t || void 0 === t ? void 0 : t.accounts),
                this.setAccounts(null === t || void 0 === t ? void 0 : t.accounts)
            }
            reset() {
                this.chainId = 1,
                this.accounts = []
            }
            persist() {
                this.session && this.signer.client.core.storage.setItem("".concat(this.STORAGE_KEY, "/chainId"), this.chainId)
            }
            parseAccounts(e) {
                return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((e=>this.parseAccount(e)))
            }
        }
        const _c = bc
    }
    ,
    6841: (e,t,n)=>{
        "use strict";
        n.d(t, {
            H: ()=>r
        });
        class r {
        }
    }
    ,
    45810: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            IEvents: ()=>r.H
        });
        var r = n(6841)
    }
    ,
    14555: function(e, t) {
        var n = "undefined" !== typeof self ? self : this
          , r = function() {
            function e() {
                this.fetch = !1,
                this.DOMException = n.DOMException
            }
            return e.prototype = n,
            new e
        }();
        !function(e) {
            !function(t) {
                var n = "URLSearchParams"in e
                  , r = "Symbol"in e && "iterator"in Symbol
                  , i = "FileReader"in e && "Blob"in e && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (e) {
                        return !1
                    }
                }()
                  , s = "FormData"in e
                  , o = "ArrayBuffer"in e;
                if (o)
                    var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                      , c = ArrayBuffer.isView || function(e) {
                        return e && a.indexOf(Object.prototype.toString.call(e)) > -1
                    }
                    ;
                function u(e) {
                    if ("string" !== typeof e && (e = String(e)),
                    /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
                        throw new TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }
                function h(e) {
                    return "string" !== typeof e && (e = String(e)),
                    e
                }
                function l(e) {
                    var t = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return r && (t[Symbol.iterator] = function() {
                        return t
                    }
                    ),
                    t
                }
                function p(e) {
                    this.map = {},
                    e instanceof p ? e.forEach((function(e, t) {
                        this.append(t, e)
                    }
                    ), this) : Array.isArray(e) ? e.forEach((function(e) {
                        this.append(e[0], e[1])
                    }
                    ), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                        this.append(t, e[t])
                    }
                    ), this)
                }
                function f(e) {
                    if (e.bodyUsed)
                        return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }
                function d(e) {
                    return new Promise((function(t, n) {
                        e.onload = function() {
                            t(e.result)
                        }
                        ,
                        e.onerror = function() {
                            n(e.error)
                        }
                    }
                    ))
                }
                function g(e) {
                    var t = new FileReader
                      , n = d(t);
                    return t.readAsArrayBuffer(e),
                    n
                }
                function v(e) {
                    if (e.slice)
                        return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)),
                    t.buffer
                }
                function y() {
                    return this.bodyUsed = !1,
                    this._initBody = function(e) {
                        var t;
                        this._bodyInit = e,
                        e ? "string" === typeof e ? this._bodyText = e : i && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : n && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : o && i && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = v(e.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = v(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
                        this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }
                    ,
                    i && (this.blob = function() {
                        var e = f(this);
                        if (e)
                            return e;
                        if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }
                    ,
                    this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g)
                    }
                    ),
                    this.text = function() {
                        var e = f(this);
                        if (e)
                            return e;
                        if (this._bodyBlob)
                            return function(e) {
                                var t = new FileReader
                                  , n = d(t);
                                return t.readAsText(e),
                                n
                            }(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(function(e) {
                                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
                                    n[r] = String.fromCharCode(t[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }
                    ,
                    s && (this.formData = function() {
                        return this.text().then(b)
                    }
                    ),
                    this.json = function() {
                        return this.text().then(JSON.parse)
                    }
                    ,
                    this
                }
                p.prototype.append = function(e, t) {
                    e = u(e),
                    t = h(t);
                    var n = this.map[e];
                    this.map[e] = n ? n + ", " + t : t
                }
                ,
                p.prototype.delete = function(e) {
                    delete this.map[u(e)]
                }
                ,
                p.prototype.get = function(e) {
                    return e = u(e),
                    this.has(e) ? this.map[e] : null
                }
                ,
                p.prototype.has = function(e) {
                    return this.map.hasOwnProperty(u(e))
                }
                ,
                p.prototype.set = function(e, t) {
                    this.map[u(e)] = h(t)
                }
                ,
                p.prototype.forEach = function(e, t) {
                    for (var n in this.map)
                        this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }
                ,
                p.prototype.keys = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push(n)
                    }
                    )),
                    l(e)
                }
                ,
                p.prototype.values = function() {
                    var e = [];
                    return this.forEach((function(t) {
                        e.push(t)
                    }
                    )),
                    l(e)
                }
                ,
                p.prototype.entries = function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push([n, t])
                    }
                    )),
                    l(e)
                }
                ,
                r && (p.prototype[Symbol.iterator] = p.prototype.entries);
                var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                function w(e, t) {
                    var n = (t = t || {}).body;
                    if (e instanceof w) {
                        if (e.bodyUsed)
                            throw new TypeError("Already read");
                        this.url = e.url,
                        this.credentials = e.credentials,
                        t.headers || (this.headers = new p(e.headers)),
                        this.method = e.method,
                        this.mode = e.mode,
                        this.signal = e.signal,
                        n || null == e._bodyInit || (n = e._bodyInit,
                        e.bodyUsed = !0)
                    } else
                        this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin",
                    !t.headers && this.headers || (this.headers = new p(t.headers)),
                    this.method = function(e) {
                        var t = e.toUpperCase();
                        return m.indexOf(t) > -1 ? t : e
                    }(t.method || this.method || "GET"),
                    this.mode = t.mode || this.mode || null,
                    this.signal = t.signal || this.signal,
                    this.referrer = null,
                    ("GET" === this.method || "HEAD" === this.method) && n)
                        throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(n)
                }
                function b(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach((function(e) {
                        if (e) {
                            var n = e.split("=")
                              , r = n.shift().replace(/\+/g, " ")
                              , i = n.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(r), decodeURIComponent(i))
                        }
                    }
                    )),
                    t
                }
                function _(e) {
                    var t = new p;
                    return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                        var n = e.split(":")
                          , r = n.shift().trim();
                        if (r) {
                            var i = n.join(":").trim();
                            t.append(r, i)
                        }
                    }
                    )),
                    t
                }
                function E(e, t) {
                    t || (t = {}),
                    this.type = "default",
                    this.status = void 0 === t.status ? 200 : t.status,
                    this.ok = this.status >= 200 && this.status < 300,
                    this.statusText = "statusText"in t ? t.statusText : "OK",
                    this.headers = new p(t.headers),
                    this.url = t.url || "",
                    this._initBody(e)
                }
                w.prototype.clone = function() {
                    return new w(this,{
                        body: this._bodyInit
                    })
                }
                ,
                y.call(w.prototype),
                y.call(E.prototype),
                E.prototype.clone = function() {
                    return new E(this._bodyInit,{
                        status: this.status,
                        statusText: this.statusText,
                        headers: new p(this.headers),
                        url: this.url
                    })
                }
                ,
                E.error = function() {
                    var e = new E(null,{
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error",
                    e
                }
                ;
                var I = [301, 302, 303, 307, 308];
                E.redirect = function(e, t) {
                    if (-1 === I.indexOf(t))
                        throw new RangeError("Invalid status code");
                    return new E(null,{
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }
                ,
                t.DOMException = e.DOMException;
                try {
                    new t.DOMException
                } catch (S) {
                    t.DOMException = function(e, t) {
                        this.message = e,
                        this.name = t;
                        var n = Error(e);
                        this.stack = n.stack
                    }
                    ,
                    t.DOMException.prototype = Object.create(Error.prototype),
                    t.DOMException.prototype.constructor = t.DOMException
                }
                function P(e, n) {
                    return new Promise((function(r, s) {
                        var o = new w(e,n);
                        if (o.signal && o.signal.aborted)
                            return s(new t.DOMException("Aborted","AbortError"));
                        var a = new XMLHttpRequest;
                        function c() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: _(a.getAllResponseHeaders() || "")
                            };
                            e.url = "responseURL"in a ? a.responseURL : e.headers.get("X-Request-URL");
                            var t = "response"in a ? a.response : a.responseText;
                            r(new E(t,e))
                        }
                        ,
                        a.onerror = function() {
                            s(new TypeError("Network request failed"))
                        }
                        ,
                        a.ontimeout = function() {
                            s(new TypeError("Network request failed"))
                        }
                        ,
                        a.onabort = function() {
                            s(new t.DOMException("Aborted","AbortError"))
                        }
                        ,
                        a.open(o.method, o.url, !0),
                        "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1),
                        "responseType"in a && i && (a.responseType = "blob"),
                        o.headers.forEach((function(e, t) {
                            a.setRequestHeader(t, e)
                        }
                        )),
                        o.signal && (o.signal.addEventListener("abort", c),
                        a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", c)
                        }
                        ),
                        a.send("undefined" === typeof o._bodyInit ? null : o._bodyInit)
                    }
                    ))
                }
                P.polyfill = !0,
                e.fetch || (e.fetch = P,
                e.Headers = p,
                e.Request = w,
                e.Response = E),
                t.Headers = p,
                t.Request = w,
                t.Response = E,
                t.fetch = P,
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }({})
        }(r),
        r.fetch.ponyfill = !0,
        delete r.fetch.polyfill;
        var i = r;
        (t = i.fetch).default = i.fetch,
        t.fetch = i.fetch,
        t.Headers = i.Headers,
        t.Request = i.Request,
        t.Response = i.Response,
        e.exports = t
    },
    75650: ()=>{}
    ,
    3523: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
        const r = n(1391);
        t.HEARTBEAT_INTERVAL = r.FIVE_SECONDS,
        t.HEARTBEAT_EVENTS = {
            pulse: "heartbeat_pulse"
        }
    }
    ,
    711: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        n(84855).__exportStar(n(3523), t)
    }
    ,
    82201: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HeartBeat = void 0;
        const r = n(84855)
          , i = n(63066)
          , s = n(1391)
          , o = n(76367)
          , a = n(711);
        class c extends o.IHeartBeat {
            constructor(e) {
                super(e),
                this.events = new i.EventEmitter,
                this.interval = a.HEARTBEAT_INTERVAL,
                this.interval = (null === e || void 0 === e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
            }
            static init(e) {
                return r.__awaiter(this, void 0, void 0, (function*() {
                    const t = new c(e);
                    return yield t.init(),
                    t
                }
                ))
            }
            init() {
                return r.__awaiter(this, void 0, void 0, (function*() {
                    yield this.initialize()
                }
                ))
            }
            stop() {
                clearInterval(this.intervalRef)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            initialize() {
                return r.__awaiter(this, void 0, void 0, (function*() {
                    this.intervalRef = setInterval((()=>this.pulse()), s.toMiliseconds(this.interval))
                }
                ))
            }
            pulse() {
                this.events.emit(a.HEARTBEAT_EVENTS.pulse)
            }
        }
        t.HeartBeat = c
    }
    ,
    97225: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(84855);
        r.__exportStar(n(82201), t),
        r.__exportStar(n(76367), t),
        r.__exportStar(n(711), t)
    }
    ,
    70635: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.IHeartBeat = void 0;
        const r = n(45810);
        class i extends r.IEvents {
            constructor(e) {
                super()
            }
        }
        t.IHeartBeat = i
    }
    ,
    76367: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        n(84855).__exportStar(n(70635), t)
    }
    ,
    84855: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            __assign: ()=>s,
            __asyncDelegator: ()=>b,
            __asyncGenerator: ()=>w,
            __asyncValues: ()=>_,
            __await: ()=>m,
            __awaiter: ()=>h,
            __classPrivateFieldGet: ()=>S,
            __classPrivateFieldSet: ()=>O,
            __createBinding: ()=>p,
            __decorate: ()=>a,
            __exportStar: ()=>f,
            __extends: ()=>i,
            __generator: ()=>l,
            __importDefault: ()=>P,
            __importStar: ()=>I,
            __makeTemplateObject: ()=>E,
            __metadata: ()=>u,
            __param: ()=>c,
            __read: ()=>g,
            __rest: ()=>o,
            __spread: ()=>v,
            __spreadArrays: ()=>y,
            __values: ()=>d
        });
        var r = function(e, t) {
            return r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ,
            r(e, t)
        };
        function i(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        var s = function() {
            return s = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ,
            s.apply(this, arguments)
        };
        function o(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
            }
            return n
        }
        function a(e, t, n, r) {
            var i, s = arguments.length, o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                o = Reflect.decorate(e, t, n, r);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
            return s > 3 && o && Object.defineProperty(t, n, o),
            o
        }
        function c(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        }
        function u(e, t) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
        function h(e, t, n, r) {
            return new (n || (n = Promise))((function(i, s) {
                function o(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        s(t)
                    }
                }
                function a(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        s(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, a)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
        function l(e, t) {
            var n, r, i, s, o = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, s[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (s = [2 & s[0], i.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    r = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < i[1]) {
                                        o.label = i[1],
                                        i = s;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    i[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (a) {
                                s = [6, a],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        function p(e, t, n, r) {
            void 0 === r && (r = n),
            e[r] = t[n]
        }
        function f(e, t) {
            for (var n in e)
                "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
        }
        function d(e) {
            var t = "function" === typeof Symbol && Symbol.iterator
              , n = t && e[t]
              , r = 0;
            if (n)
                return n.call(e);
            if (e && "number" === typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function g(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, i, s = n.call(e), o = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = s.next()).done; )
                    o.push(r.value)
            } catch (a) {
                i = {
                    error: a
                }
            } finally {
                try {
                    r && !r.done && (n = s.return) && n.call(s)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return o
        }
        function v() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(g(arguments[t]));
            return e
        }
        function y() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length;
            var r = Array(e)
              , i = 0;
            for (t = 0; t < n; t++)
                for (var s = arguments[t], o = 0, a = s.length; o < a; o++,
                i++)
                    r[i] = s[o];
            return r
        }
        function m(e) {
            return this instanceof m ? (this.v = e,
            this) : new m(e)
        }
        function w(e, t, n) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, i = n.apply(e, t || []), s = [];
            return r = {},
            o("next"),
            o("throw"),
            o("return"),
            r[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            r;
            function o(e) {
                i[e] && (r[e] = function(t) {
                    return new Promise((function(n, r) {
                        s.push([e, t, n, r]) > 1 || a(e, t)
                    }
                    ))
                }
                )
            }
            function a(e, t) {
                try {
                    (n = i[e](t)).value instanceof m ? Promise.resolve(n.value.v).then(c, u) : h(s[0][2], n)
                } catch (r) {
                    h(s[0][3], r)
                }
                var n
            }
            function c(e) {
                a("next", e)
            }
            function u(e) {
                a("throw", e)
            }
            function h(e, t) {
                e(t),
                s.shift(),
                s.length && a(s[0][0], s[0][1])
            }
        }
        function b(e) {
            var t, n;
            return t = {},
            r("next"),
            r("throw", (function(e) {
                throw e
            }
            )),
            r("return"),
            t[Symbol.iterator] = function() {
                return this
            }
            ,
            t;
            function r(r, i) {
                t[r] = e[r] ? function(t) {
                    return (n = !n) ? {
                        value: m(e[r](t)),
                        done: "return" === r
                    } : i ? i(t) : t
                }
                : i
            }
        }
        function _(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, n = e[Symbol.asyncIterator];
            return n ? n.call(e) : (e = d(e),
            t = {},
            r("next"),
            r("throw"),
            r("return"),
            t[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            t);
            function r(n) {
                t[n] = e[n] && function(t) {
                    return new Promise((function(r, i) {
                        (function(e, t, n, r) {
                            Promise.resolve(r).then((function(t) {
                                e({
                                    value: t,
                                    done: n
                                })
                            }
                            ), t)
                        }
                        )(r, i, (t = e[n](t)).done, t.value)
                    }
                    ))
                }
            }
        }
        function E(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t,
            e
        }
        function I(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e,
            t
        }
        function P(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function S(e, t) {
            if (!t.has(e))
                throw new TypeError("attempted to get private field on non-instance");
            return t.get(e)
        }
        function O(e, t, n) {
            if (!t.has(e))
                throw new TypeError("attempted to set private field on non-instance");
            return t.set(e, n),
            n
        }
    }
    ,
    63066: e=>{
        "use strict";
        var t, n = "object" === typeof Reflect ? Reflect : null, r = n && "function" === typeof n.apply ? n.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        }
        ;
        t = n && "function" === typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var i = Number.isNaN || function(e) {
            return e !== e
        }
        ;
        function s() {
            s.init.call(this)
        }
        e.exports = s,
        e.exports.once = function(e, t) {
            return new Promise((function(n, r) {
                function i(n) {
                    e.removeListener(t, s),
                    r(n)
                }
                function s() {
                    "function" === typeof e.removeListener && e.removeListener("error", i),
                    n([].slice.call(arguments))
                }
                g(e, t, s, {
                    once: !0
                }),
                "error" !== t && function(e, t, n) {
                    "function" === typeof e.on && g(e, "error", t, n)
                }(e, i, {
                    once: !0
                })
            }
            ))
        }
        ,
        s.EventEmitter = s,
        s.prototype._events = void 0,
        s.prototype._eventsCount = 0,
        s.prototype._maxListeners = void 0;
        var o = 10;
        function a(e) {
            if ("function" !== typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function c(e) {
            return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
        }
        function u(e, t, n, r) {
            var i, s, o, u;
            if (a(n),
            void 0 === (s = e._events) ? (s = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
            s = e._events),
            o = s[t]),
            void 0 === o)
                o = s[t] = n,
                ++e._eventsCount;
            else if ("function" === typeof o ? o = s[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n),
            (i = c(e)) > 0 && o.length > i && !o.warned) {
                o.warned = !0;
                var h = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                h.name = "MaxListenersExceededWarning",
                h.emitter = e,
                h.type = t,
                h.count = o.length,
                u = h,
                console && console.warn && console.warn(u)
            }
            return e
        }
        function h() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function l(e, t, n) {
            var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            }
              , i = h.bind(r);
            return i.listener = n,
            r.wrapFn = i,
            i
        }
        function p(e, t, n) {
            var r = e._events;
            if (void 0 === r)
                return [];
            var i = r[t];
            return void 0 === i ? [] : "function" === typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                    t[n] = e[n].listener || e[n];
                return t
            }(i) : d(i, i.length)
        }
        function f(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" === typeof n)
                    return 1;
                if (void 0 !== n)
                    return n.length
            }
            return 0
        }
        function d(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r)
                n[r] = e[r];
            return n
        }
        function g(e, t, n, r) {
            if ("function" === typeof e.on)
                r.once ? e.once(t, n) : e.on(t, n);
            else {
                if ("function" !== typeof e.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function i(s) {
                    r.once && e.removeEventListener(t, i),
                    n(s)
                }
                ))
            }
        }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return o
            },
            set: function(e) {
                if ("number" !== typeof e || e < 0 || i(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                o = e
            }
        }),
        s.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        s.prototype.setMaxListeners = function(e) {
            if ("number" !== typeof e || e < 0 || i(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        s.prototype.getMaxListeners = function() {
            return c(this)
        }
        ,
        s.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t.push(arguments[n]);
            var i = "error" === e
              , s = this._events;
            if (void 0 !== s)
                i = i && void 0 === s.error;
            else if (!i)
                return !1;
            if (i) {
                var o;
                if (t.length > 0 && (o = t[0]),
                o instanceof Error)
                    throw o;
                var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw a.context = o,
                a
            }
            var c = s[e];
            if (void 0 === c)
                return !1;
            if ("function" === typeof c)
                r(c, this, t);
            else {
                var u = c.length
                  , h = d(c, u);
                for (n = 0; n < u; ++n)
                    r(h[n], this, t)
            }
            return !0
        }
        ,
        s.prototype.addListener = function(e, t) {
            return u(this, e, t, !1)
        }
        ,
        s.prototype.on = s.prototype.addListener,
        s.prototype.prependListener = function(e, t) {
            return u(this, e, t, !0)
        }
        ,
        s.prototype.once = function(e, t) {
            return a(t),
            this.on(e, l(this, e, t)),
            this
        }
        ,
        s.prototype.prependOnceListener = function(e, t) {
            return a(t),
            this.prependListener(e, l(this, e, t)),
            this
        }
        ,
        s.prototype.removeListener = function(e, t) {
            var n, r, i, s, o;
            if (a(t),
            void 0 === (r = this._events))
                return this;
            if (void 0 === (n = r[e]))
                return this;
            if (n === t || n.listener === t)
                0 === --this._eventsCount ? this._events = Object.create(null) : (delete r[e],
                r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" !== typeof n) {
                for (i = -1,
                s = n.length - 1; s >= 0; s--)
                    if (n[s] === t || n[s].listener === t) {
                        o = n[s].listener,
                        i = s;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? n.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(n, i),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener && this.emit("removeListener", e, o || t)
            }
            return this
        }
        ,
        s.prototype.off = s.prototype.removeListener,
        s.prototype.removeAllListeners = function(e) {
            var t, n, r;
            if (void 0 === (n = this._events))
                return this;
            if (void 0 === n.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== n[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
                this;
            if (0 === arguments.length) {
                var i, s = Object.keys(n);
                for (r = 0; r < s.length; ++r)
                    "removeListener" !== (i = s[r]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" === typeof (t = n[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--)
                    this.removeListener(e, t[r]);
            return this
        }
        ,
        s.prototype.listeners = function(e) {
            return p(this, e, !0)
        }
        ,
        s.prototype.rawListeners = function(e) {
            return p(this, e, !1)
        }
        ,
        s.listenerCount = function(e, t) {
            return "function" === typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t)
        }
        ,
        s.prototype.listenerCount = f,
        s.prototype.eventNames = function() {
            return this._eventsCount > 0 ? t(this._events) : []
        }
    }
    ,
    11663: (e,t,n)=>{
        e.exports = self.fetch || (self.fetch = n(35351).default || n(35351))
    }
    ,
    96905: (e,t,n)=>{
        e = n.nmd(e);
        var r = "__lodash_hash_undefined__"
          , i = 1
          , s = 2
          , o = 9007199254740991
          , a = "[object Arguments]"
          , c = "[object Array]"
          , u = "[object AsyncFunction]"
          , h = "[object Boolean]"
          , l = "[object Date]"
          , p = "[object Error]"
          , f = "[object Function]"
          , d = "[object GeneratorFunction]"
          , g = "[object Map]"
          , v = "[object Number]"
          , y = "[object Null]"
          , m = "[object Object]"
          , w = "[object Promise]"
          , b = "[object Proxy]"
          , _ = "[object RegExp]"
          , E = "[object Set]"
          , I = "[object String]"
          , P = "[object Symbol]"
          , S = "[object Undefined]"
          , O = "[object WeakMap]"
          , R = "[object ArrayBuffer]"
          , A = "[object DataView]"
          , x = /^\[object .+?Constructor\]$/
          , N = /^(?:0|[1-9]\d*)$/
          , T = {};
        T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0,
        T[a] = T[c] = T[R] = T[h] = T[A] = T[l] = T[p] = T[f] = T[g] = T[v] = T[m] = T[_] = T[E] = T[I] = T[O] = !1;
        var C = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
          , j = "object" == typeof self && self && self.Object === Object && self
          , D = C || j || Function("return this")()
          , L = t && !t.nodeType && t
          , M = L && e && !e.nodeType && e
          , U = M && M.exports === L
          , k = U && C.process
          , q = function() {
            try {
                return k && k.binding && k.binding("util")
            } catch (e) {}
        }()
          , z = q && q.isTypedArray;
        function H(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e))
                    return !0;
            return !1
        }
        function V(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach((function(e, r) {
                n[++t] = [r, e]
            }
            )),
            n
        }
        function K(e) {
            var t = -1
              , n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            }
            )),
            n
        }
        var B, W, F = Array.prototype, G = Function.prototype, Q = Object.prototype, J = D["__core-js_shared__"], Y = G.toString, $ = Q.hasOwnProperty, Z = function() {
            var e = /[^.]+$/.exec(J && J.keys && J.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }(), X = Q.toString, ee = RegExp("^" + Y.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), te = U ? D.Buffer : void 0, ne = D.Symbol, re = D.Uint8Array, ie = Q.propertyIsEnumerable, se = F.splice, oe = ne ? ne.toStringTag : void 0, ae = Object.getOwnPropertySymbols, ce = te ? te.isBuffer : void 0, ue = (B = Object.keys,
        W = Object,
        function(e) {
            return B(W(e))
        }
        ), he = ke(D, "DataView"), le = ke(D, "Map"), pe = ke(D, "Promise"), fe = ke(D, "Set"), de = ke(D, "WeakMap"), ge = ke(Object, "create"), ve = Ve(he), ye = Ve(le), me = Ve(pe), we = Ve(fe), be = Ve(de), _e = ne ? ne.prototype : void 0, Ee = _e ? _e.valueOf : void 0;
        function Ie(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function Pe(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function Se(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function Oe(e) {
            var t = -1
              , n = null == e ? 0 : e.length;
            for (this.__data__ = new Se; ++t < n; )
                this.add(e[t])
        }
        function Re(e) {
            var t = this.__data__ = new Pe(e);
            this.size = t.size
        }
        function Ae(e, t) {
            var n = We(e)
              , r = !n && Be(e)
              , i = !n && !r && Fe(e)
              , s = !n && !r && !i && $e(e)
              , o = n || r || i || s
              , a = o ? function(e, t) {
                for (var n = -1, r = Array(e); ++n < e; )
                    r[n] = t(n);
                return r
            }(e.length, String) : []
              , c = a.length;
            for (var u in e)
                !t && !$.call(e, u) || o && ("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || He(u, c)) || a.push(u);
            return a
        }
        function xe(e, t) {
            for (var n = e.length; n--; )
                if (Ke(e[n][0], t))
                    return n;
            return -1
        }
        function Ne(e) {
            return null == e ? void 0 === e ? S : y : oe && oe in Object(e) ? function(e) {
                var t = $.call(e, oe)
                  , n = e[oe];
                try {
                    e[oe] = void 0;
                    var r = !0
                } catch (s) {}
                var i = X.call(e);
                r && (t ? e[oe] = n : delete e[oe]);
                return i
            }(e) : function(e) {
                return X.call(e)
            }(e)
        }
        function Te(e) {
            return Ye(e) && Ne(e) == a
        }
        function Ce(e, t, n, r, o) {
            return e === t || (null == e || null == t || !Ye(e) && !Ye(t) ? e !== e && t !== t : function(e, t, n, r, o, u) {
                var f = We(e)
                  , d = We(t)
                  , y = f ? c : ze(e)
                  , w = d ? c : ze(t)
                  , b = (y = y == a ? m : y) == m
                  , S = (w = w == a ? m : w) == m
                  , O = y == w;
                if (O && Fe(e)) {
                    if (!Fe(t))
                        return !1;
                    f = !0,
                    b = !1
                }
                if (O && !b)
                    return u || (u = new Re),
                    f || $e(e) ? Le(e, t, n, r, o, u) : function(e, t, n, r, o, a, c) {
                        switch (n) {
                        case A:
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                return !1;
                            e = e.buffer,
                            t = t.buffer;
                        case R:
                            return !(e.byteLength != t.byteLength || !a(new re(e), new re(t)));
                        case h:
                        case l:
                        case v:
                            return Ke(+e, +t);
                        case p:
                            return e.name == t.name && e.message == t.message;
                        case _:
                        case I:
                            return e == t + "";
                        case g:
                            var u = V;
                        case E:
                            var f = r & i;
                            if (u || (u = K),
                            e.size != t.size && !f)
                                return !1;
                            var d = c.get(e);
                            if (d)
                                return d == t;
                            r |= s,
                            c.set(e, t);
                            var y = Le(u(e), u(t), r, o, a, c);
                            return c.delete(e),
                            y;
                        case P:
                            if (Ee)
                                return Ee.call(e) == Ee.call(t)
                        }
                        return !1
                    }(e, t, y, n, r, o, u);
                if (!(n & i)) {
                    var x = b && $.call(e, "__wrapped__")
                      , N = S && $.call(t, "__wrapped__");
                    if (x || N) {
                        var T = x ? e.value() : e
                          , C = N ? t.value() : t;
                        return u || (u = new Re),
                        o(T, C, n, r, u)
                    }
                }
                if (!O)
                    return !1;
                return u || (u = new Re),
                function(e, t, n, r, s, o) {
                    var a = n & i
                      , c = Me(e)
                      , u = c.length
                      , h = Me(t)
                      , l = h.length;
                    if (u != l && !a)
                        return !1;
                    var p = u;
                    for (; p--; ) {
                        var f = c[p];
                        if (!(a ? f in t : $.call(t, f)))
                            return !1
                    }
                    var d = o.get(e);
                    if (d && o.get(t))
                        return d == t;
                    var g = !0;
                    o.set(e, t),
                    o.set(t, e);
                    var v = a;
                    for (; ++p < u; ) {
                        var y = e[f = c[p]]
                          , m = t[f];
                        if (r)
                            var w = a ? r(m, y, f, t, e, o) : r(y, m, f, e, t, o);
                        if (!(void 0 === w ? y === m || s(y, m, n, r, o) : w)) {
                            g = !1;
                            break
                        }
                        v || (v = "constructor" == f)
                    }
                    if (g && !v) {
                        var b = e.constructor
                          , _ = t.constructor;
                        b == _ || !("constructor"in e) || !("constructor"in t) || "function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _ || (g = !1)
                    }
                    return o.delete(e),
                    o.delete(t),
                    g
                }(e, t, n, r, o, u)
            }(e, t, n, r, Ce, o))
        }
        function je(e) {
            return !(!Je(e) || function(e) {
                return !!Z && Z in e
            }(e)) && (Ge(e) ? ee : x).test(Ve(e))
        }
        function De(e) {
            if (!function(e) {
                var t = e && e.constructor
                  , n = "function" == typeof t && t.prototype || Q;
                return e === n
            }(e))
                return ue(e);
            var t = [];
            for (var n in Object(e))
                $.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
        function Le(e, t, n, r, o, a) {
            var c = n & i
              , u = e.length
              , h = t.length;
            if (u != h && !(c && h > u))
                return !1;
            var l = a.get(e);
            if (l && a.get(t))
                return l == t;
            var p = -1
              , f = !0
              , d = n & s ? new Oe : void 0;
            for (a.set(e, t),
            a.set(t, e); ++p < u; ) {
                var g = e[p]
                  , v = t[p];
                if (r)
                    var y = c ? r(v, g, p, t, e, a) : r(g, v, p, e, t, a);
                if (void 0 !== y) {
                    if (y)
                        continue;
                    f = !1;
                    break
                }
                if (d) {
                    if (!H(t, (function(e, t) {
                        if (i = t,
                        !d.has(i) && (g === e || o(g, e, n, r, a)))
                            return d.push(t);
                        var i
                    }
                    ))) {
                        f = !1;
                        break
                    }
                } else if (g !== v && !o(g, v, n, r, a)) {
                    f = !1;
                    break
                }
            }
            return a.delete(e),
            a.delete(t),
            f
        }
        function Me(e) {
            return function(e, t, n) {
                var r = t(e);
                return We(e) ? r : function(e, t) {
                    for (var n = -1, r = t.length, i = e.length; ++n < r; )
                        e[i + n] = t[n];
                    return e
                }(r, n(e))
            }(e, Ze, qe)
        }
        function Ue(e, t) {
            var n = e.__data__;
            return function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
        function ke(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return je(n) ? n : void 0
        }
        Ie.prototype.clear = function() {
            this.__data__ = ge ? ge(null) : {},
            this.size = 0
        }
        ,
        Ie.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        Ie.prototype.get = function(e) {
            var t = this.__data__;
            if (ge) {
                var n = t[e];
                return n === r ? void 0 : n
            }
            return $.call(t, e) ? t[e] : void 0
        }
        ,
        Ie.prototype.has = function(e) {
            var t = this.__data__;
            return ge ? void 0 !== t[e] : $.call(t, e)
        }
        ,
        Ie.prototype.set = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            n[e] = ge && void 0 === t ? r : t,
            this
        }
        ,
        Pe.prototype.clear = function() {
            this.__data__ = [],
            this.size = 0
        }
        ,
        Pe.prototype.delete = function(e) {
            var t = this.__data__
              , n = xe(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : se.call(t, n, 1),
            --this.size,
            !0)
        }
        ,
        Pe.prototype.get = function(e) {
            var t = this.__data__
              , n = xe(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        ,
        Pe.prototype.has = function(e) {
            return xe(this.__data__, e) > -1
        }
        ,
        Pe.prototype.set = function(e, t) {
            var n = this.__data__
              , r = xe(n, e);
            return r < 0 ? (++this.size,
            n.push([e, t])) : n[r][1] = t,
            this
        }
        ,
        Se.prototype.clear = function() {
            this.size = 0,
            this.__data__ = {
                hash: new Ie,
                map: new (le || Pe),
                string: new Ie
            }
        }
        ,
        Se.prototype.delete = function(e) {
            var t = Ue(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        Se.prototype.get = function(e) {
            return Ue(this, e).get(e)
        }
        ,
        Se.prototype.has = function(e) {
            return Ue(this, e).has(e)
        }
        ,
        Se.prototype.set = function(e, t) {
            var n = Ue(this, e)
              , r = n.size;
            return n.set(e, t),
            this.size += n.size == r ? 0 : 1,
            this
        }
        ,
        Oe.prototype.add = Oe.prototype.push = function(e) {
            return this.__data__.set(e, r),
            this
        }
        ,
        Oe.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        Re.prototype.clear = function() {
            this.__data__ = new Pe,
            this.size = 0
        }
        ,
        Re.prototype.delete = function(e) {
            var t = this.__data__
              , n = t.delete(e);
            return this.size = t.size,
            n
        }
        ,
        Re.prototype.get = function(e) {
            return this.__data__.get(e)
        }
        ,
        Re.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        Re.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof Pe) {
                var r = n.__data__;
                if (!le || r.length < 199)
                    return r.push([e, t]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new Se(r)
            }
            return n.set(e, t),
            this.size = n.size,
            this
        }
        ;
        var qe = ae ? function(e) {
            return null == e ? [] : (e = Object(e),
            function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = 0, s = []; ++n < r; ) {
                    var o = e[n];
                    t(o, n, e) && (s[i++] = o)
                }
                return s
            }(ae(e), (function(t) {
                return ie.call(e, t)
            }
            )))
        }
        : function() {
            return []
        }
          , ze = Ne;
        function He(e, t) {
            return !!(t = null == t ? o : t) && ("number" == typeof e || N.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        function Ve(e) {
            if (null != e) {
                try {
                    return Y.call(e)
                } catch (t) {}
                try {
                    return e + ""
                } catch (t) {}
            }
            return ""
        }
        function Ke(e, t) {
            return e === t || e !== e && t !== t
        }
        (he && ze(new he(new ArrayBuffer(1))) != A || le && ze(new le) != g || pe && ze(pe.resolve()) != w || fe && ze(new fe) != E || de && ze(new de) != O) && (ze = function(e) {
            var t = Ne(e)
              , n = t == m ? e.constructor : void 0
              , r = n ? Ve(n) : "";
            if (r)
                switch (r) {
                case ve:
                    return A;
                case ye:
                    return g;
                case me:
                    return w;
                case we:
                    return E;
                case be:
                    return O
                }
            return t
        }
        );
        var Be = Te(function() {
            return arguments
        }()) ? Te : function(e) {
            return Ye(e) && $.call(e, "callee") && !ie.call(e, "callee")
        }
          , We = Array.isArray;
        var Fe = ce || function() {
            return !1
        }
        ;
        function Ge(e) {
            if (!Je(e))
                return !1;
            var t = Ne(e);
            return t == f || t == d || t == u || t == b
        }
        function Qe(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o
        }
        function Je(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        function Ye(e) {
            return null != e && "object" == typeof e
        }
        var $e = z ? function(e) {
            return function(t) {
                return e(t)
            }
        }(z) : function(e) {
            return Ye(e) && Qe(e.length) && !!T[Ne(e)]
        }
        ;
        function Ze(e) {
            return null != (t = e) && Qe(t.length) && !Ge(t) ? Ae(e) : De(e);
            var t
        }
        e.exports = function(e, t) {
            return Ce(e, t)
        }
    }
    ,
    55606: e=>{
        "use strict";
        function t(e) {
            try {
                return JSON.stringify(e)
            } catch (t) {
                return '"[Circular]"'
            }
        }
        e.exports = function(e, n, r) {
            var i = r && r.stringify || t;
            if ("object" === typeof e && null !== e) {
                var s = n.length + 1;
                if (1 === s)
                    return e;
                var o = new Array(s);
                o[0] = i(e);
                for (var a = 1; a < s; a++)
                    o[a] = i(n[a]);
                return o.join(" ")
            }
            if ("string" !== typeof e)
                return e;
            var c = n.length;
            if (0 === c)
                return e;
            for (var u = "", h = 0, l = -1, p = e && e.length || 0, f = 0; f < p; ) {
                if (37 === e.charCodeAt(f) && f + 1 < p) {
                    switch (l = l > -1 ? l : 0,
                    e.charCodeAt(f + 1)) {
                    case 100:
                    case 102:
                        if (h >= c)
                            break;
                        if (null == n[h])
                            break;
                        l < f && (u += e.slice(l, f)),
                        u += Number(n[h]),
                        l = f + 2,
                        f++;
                        break;
                    case 105:
                        if (h >= c)
                            break;
                        if (null == n[h])
                            break;
                        l < f && (u += e.slice(l, f)),
                        u += Math.floor(Number(n[h])),
                        l = f + 2,
                        f++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (h >= c)
                            break;
                        if (void 0 === n[h])
                            break;
                        l < f && (u += e.slice(l, f));
                        var d = typeof n[h];
                        if ("string" === d) {
                            u += "'" + n[h] + "'",
                            l = f + 2,
                            f++;
                            break
                        }
                        if ("function" === d) {
                            u += n[h].name || "<anonymous>",
                            l = f + 2,
                            f++;
                            break
                        }
                        u += i(n[h]),
                        l = f + 2,
                        f++;
                        break;
                    case 115:
                        if (h >= c)
                            break;
                        l < f && (u += e.slice(l, f)),
                        u += String(n[h]),
                        l = f + 2,
                        f++;
                        break;
                    case 37:
                        l < f && (u += e.slice(l, f)),
                        u += "%",
                        l = f + 2,
                        f++,
                        h--
                    }
                    ++h
                }
                ++f
            }
            if (-1 === l)
                return e;
            l < p && (u += e.slice(l));
            return u
        }
    }
    ,
    35351: (e,t,n)=>{
        "use strict";
        function r(e, t) {
            return t = t || {},
            new Promise((function(n, r) {
                var i = new XMLHttpRequest
                  , s = []
                  , o = []
                  , a = {}
                  , c = function() {
                    return {
                        ok: 2 == (i.status / 100 | 0),
                        statusText: i.statusText,
                        status: i.status,
                        url: i.responseURL,
                        text: function() {
                            return Promise.resolve(i.responseText)
                        },
                        json: function() {
                            return Promise.resolve(i.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([i.response]))
                        },
                        clone: c,
                        headers: {
                            keys: function() {
                                return s
                            },
                            entries: function() {
                                return o
                            },
                            get: function(e) {
                                return a[e.toLowerCase()]
                            },
                            has: function(e) {
                                return e.toLowerCase()in a
                            }
                        }
                    }
                };
                for (var u in i.open(t.method || "get", e, !0),
                i.onload = function() {
                    i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
                        s.push(t = t.toLowerCase()),
                        o.push([t, n]),
                        a[t] = a[t] ? a[t] + "," + n : n
                    }
                    )),
                    n(c())
                }
                ,
                i.onerror = r,
                i.withCredentials = "include" == t.credentials,
                t.headers)
                    i.setRequestHeader(u, t.headers[u]);
                i.send(t.body || null)
            }
            ))
        }
        n.r(t),
        n.d(t, {
            default: ()=>r
        })
    }
    ,
    48448: e=>{
        "use strict";
        e.exports = function() {
            throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
        }
    }
    ,
    14063: (e,t,n)=>{
        "use strict";
        const r = n(55606);
        e.exports = o;
        const i = function() {
            function e(e) {
                return "undefined" !== typeof e && e
            }
            try {
                return "undefined" !== typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                    get: function() {
                        return delete Object.prototype.globalThis,
                        this.globalThis = this
                    },
                    configurable: !0
                }),
                globalThis
            } catch (t) {
                return e(self) || e(window) || e(this) || {}
            }
        }().console || {}
          , s = {
            mapHttpRequest: p,
            mapHttpResponse: p,
            wrapRequestSerializer: f,
            wrapResponseSerializer: f,
            wrapErrorSerializer: f,
            req: p,
            res: p,
            err: function(e) {
                const t = {
                    type: e.constructor.name,
                    msg: e.message,
                    stack: e.stack
                };
                for (const n in e)
                    void 0 === t[n] && (t[n] = e[n]);
                return t
            }
        };
        function o(e) {
            (e = e || {}).browser = e.browser || {};
            const t = e.browser.transmit;
            if (t && "function" !== typeof t.send)
                throw Error("pino: transmit option must have a send function");
            const n = e.browser.write || i;
            e.browser.write && (e.browser.asObject = !0);
            const r = e.serializers || {}
              , s = function(e, t) {
                if (Array.isArray(e))
                    return e.filter((function(e) {
                        return "!stdSerializers.err" !== e
                    }
                    ));
                return !0 === e && Object.keys(t)
            }(e.browser.serialize, r);
            let p = e.browser.serialize;
            Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (p = !1);
            "function" === typeof n && (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n),
            !1 === e.enabled && (e.level = "silent");
            const f = e.level || "info"
              , g = Object.create(n);
            g.log || (g.log = d),
            Object.defineProperty(g, "levelVal", {
                get: function() {
                    return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                }
            }),
            Object.defineProperty(g, "level", {
                get: function() {
                    return this._level
                },
                set: function(e) {
                    if ("silent" !== e && !this.levels.values[e])
                        throw Error("unknown level " + e);
                    this._level = e,
                    a(v, g, "error", "log"),
                    a(v, g, "fatal", "error"),
                    a(v, g, "warn", "error"),
                    a(v, g, "info", "log"),
                    a(v, g, "debug", "log"),
                    a(v, g, "trace", "log")
                }
            });
            const v = {
                transmit: t,
                serialize: s,
                asObject: e.browser.asObject,
                levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                timestamp: l(e)
            };
            return g.levels = o.levels,
            g.level = f,
            g.setMaxListeners = g.getMaxListeners = g.emit = g.addListener = g.on = g.prependListener = g.once = g.prependOnceListener = g.removeListener = g.removeAllListeners = g.listeners = g.listenerCount = g.eventNames = g.write = g.flush = d,
            g.serializers = r,
            g._serialize = s,
            g._stdErrSerialize = p,
            g.child = function(n, i) {
                if (!n)
                    throw new Error("missing bindings for child Pino");
                i = i || {},
                s && n.serializers && (i.serializers = n.serializers);
                const o = i.serializers;
                if (s && o) {
                    var a = Object.assign({}, r, o)
                      , l = !0 === e.browser.serialize ? Object.keys(a) : s;
                    delete n.serializers,
                    c([n], l, a, this._stdErrSerialize)
                }
                function p(e) {
                    this._childLevel = 1 + (0 | e._childLevel),
                    this.error = u(e, n, "error"),
                    this.fatal = u(e, n, "fatal"),
                    this.warn = u(e, n, "warn"),
                    this.info = u(e, n, "info"),
                    this.debug = u(e, n, "debug"),
                    this.trace = u(e, n, "trace"),
                    a && (this.serializers = a,
                    this._serialize = l),
                    t && (this._logEvent = h([].concat(e._logEvent.bindings, n)))
                }
                return p.prototype = this,
                new p(this)
            }
            ,
            t && (g._logEvent = h()),
            g
        }
        function a(e, t, n, s) {
            const a = Object.getPrototypeOf(t);
            t[n] = t.levelVal > t.levels.values[n] ? d : a[n] ? a[n] : i[n] || i[s] || d,
            function(e, t, n) {
                if (!e.transmit && t[n] === d)
                    return;
                t[n] = (s = t[n],
                function() {
                    const a = e.timestamp()
                      , u = new Array(arguments.length)
                      , l = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
                    for (var p = 0; p < u.length; p++)
                        u[p] = arguments[p];
                    if (e.serialize && !e.asObject && c(u, this._serialize, this.serializers, this._stdErrSerialize),
                    e.asObject ? s.call(l, function(e, t, n, i) {
                        e._serialize && c(n, e._serialize, e.serializers, e._stdErrSerialize);
                        const s = n.slice();
                        let a = s[0];
                        const u = {};
                        i && (u.time = i),
                        u.level = o.levels.values[t];
                        let h = 1 + (0 | e._childLevel);
                        if (h < 1 && (h = 1),
                        null !== a && "object" === typeof a) {
                            for (; h-- && "object" === typeof s[0]; )
                                Object.assign(u, s.shift());
                            a = s.length ? r(s.shift(), s) : void 0
                        } else
                            "string" === typeof a && (a = r(s.shift(), s));
                        return void 0 !== a && (u.msg = a),
                        u
                    }(this, n, u, a)) : s.apply(l, u),
                    e.transmit) {
                        const r = e.transmit.level || t.level
                          , i = o.levels.values[r]
                          , s = o.levels.values[n];
                        if (s < i)
                            return;
                        !function(e, t, n) {
                            const r = t.send
                              , i = t.ts
                              , s = t.methodLevel
                              , o = t.methodValue
                              , a = t.val
                              , u = e._logEvent.bindings;
                            c(n, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize),
                            e._logEvent.ts = i,
                            e._logEvent.messages = n.filter((function(e) {
                                return -1 === u.indexOf(e)
                            }
                            )),
                            e._logEvent.level.label = s,
                            e._logEvent.level.value = o,
                            r(s, e._logEvent, a),
                            e._logEvent = h(u)
                        }(this, {
                            ts: a,
                            methodLevel: n,
                            methodValue: s,
                            transmitLevel: r,
                            transmitValue: o.levels.values[e.transmit.level || t.level],
                            send: e.transmit.send,
                            val: t.levelVal
                        }, u)
                    }
                }
                );
                var s
            }(e, t, n)
        }
        function c(e, t, n, r) {
            for (const i in e)
                if (r && e[i]instanceof Error)
                    e[i] = o.stdSerializers.err(e[i]);
                else if ("object" === typeof e[i] && !Array.isArray(e[i]))
                    for (const r in e[i])
                        t && t.indexOf(r) > -1 && r in n && (e[i][r] = n[r](e[i][r]))
        }
        function u(e, t, n) {
            return function() {
                const r = new Array(1 + arguments.length);
                r[0] = t;
                for (var i = 1; i < r.length; i++)
                    r[i] = arguments[i - 1];
                return e[n].apply(this, r)
            }
        }
        function h(e) {
            return {
                ts: 0,
                messages: [],
                bindings: e || [],
                level: {
                    label: "",
                    value: 0
                }
            }
        }
        function l(e) {
            return "function" === typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? g : v
        }
        function p() {
            return {}
        }
        function f(e) {
            return e
        }
        function d() {}
        function g() {
            return !1
        }
        function v() {
            return Date.now()
        }
        o.levels = {
            values: {
                fatal: 60,
                error: 50,
                warn: 40,
                info: 30,
                debug: 20,
                trace: 10
            },
            labels: {
                10: "trace",
                20: "debug",
                30: "info",
                40: "warn",
                50: "error",
                60: "fatal"
            }
        },
        o.stdSerializers = s,
        o.stdTimeFunctions = Object.assign({}, {
            nullTime: g,
            epochTime: v,
            unixTime: function() {
                return Math.round(Date.now() / 1e3)
            },
            isoTime: function() {
                return new Date(Date.now()).toISOString()
            }
        })
    }
}]);
//# sourceMappingURL=834.57093451.chunk.js.map
