function y(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function M(){return Object.create(null)}function E(t){t.forEach(w)}function j(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function A(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t,n,e){t.$$.on_destroy.push(v(n,e))}function D(t,n,e,o){if(t){const c=m(t,n,e,o);return t[0](c)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function F(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],f=Math.max(n.dirty.length,c.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function P(t,n,e,o,c,l){if(c){const f=m(n,e,o,l);t.p(f,c)}}function U(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function H(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function I(t){return t&&j(t.destroy)?t.destroy:y}let i;function d(t){i=t}function b(){if(!i)throw new Error("Function called outside component initialization");return i}function J(t){b().$$.on_mount.push(t)}function K(t){b().$$.after_update.push(t)}function L(t){return b().$$.context.get(t)}function N(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const a=[],g=[];let s=[];const h=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(z))}function Q(){return O(),x}function q(t){s.push(t)}function R(t){h.push(t)}const _=new Set;let r=0;function z(){if(r!==0)return;const t=i;do{try{for(;r<a.length;){const n=a[r];r++,d(n),C(n.$$)}}catch(n){throw a.length=0,r=0,n}for(d(null),a.length=0,r=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];_.has(e)||(_.add(e),e())}s.length=0}while(a.length);for(;h.length;)h.pop()();p=!1,_.clear(),d(t)}function C(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function T(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{i as A,d as B,w as C,a as D,O as E,K as a,g as b,N as c,H as d,b as e,k as f,L as g,G as h,D as i,I as j,U as k,F as l,j as m,R as n,J as o,B as p,y as q,E as r,S as s,Q as t,P as u,M as v,z as w,A as x,q as y,T as z};
