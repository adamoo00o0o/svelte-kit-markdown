import{D as s,S as e,i as a,s as t,e as r,k as c,E as l,t as v,c as i,a as o,d as f,n as h,g as n,b as d,F as p,f as u,G as k,H as m,I as g,J as b,j as w,m as E,o as $,K as A,v as I,r as L,w as x}from"../chunks/vendor-be40cf64.js";const _={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function B(s){let e,a,t,g,b,w,E,$,A,I,L,x,_,B,D,H,K,M,S,z,T,V,j,C,F,G,N;return{c(){e=r("header"),a=r("div"),t=r("a"),g=r("img"),w=c(),E=r("nav"),$=l("svg"),A=l("path"),I=c(),L=r("ul"),x=r("li"),_=r("a"),B=v("Home"),D=c(),H=r("li"),K=r("a"),M=v("About"),S=c(),z=r("li"),T=r("a"),V=v("Todos"),j=c(),C=l("svg"),F=l("path"),G=c(),N=r("div"),this.h()},l(s){e=i(s,"HEADER",{class:!0});var r=o(e);a=i(r,"DIV",{class:!0});var c=o(a);t=i(c,"A",{href:!0,class:!0});var l=o(t);g=i(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(f),c.forEach(f),w=h(r),E=i(r,"NAV",{class:!0});var v=o(E);$=i(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=o($);A=i(d,"path",{d:!0,class:!0},1),o(A).forEach(f),d.forEach(f),I=h(v),L=i(v,"UL",{class:!0});var p=o(L);x=i(p,"LI",{class:!0});var u=o(x);_=i(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var k=o(_);B=n(k,"Home"),k.forEach(f),u.forEach(f),D=h(p),H=i(p,"LI",{class:!0});var m=o(H);K=i(m,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=o(K);M=n(b,"About"),b.forEach(f),m.forEach(f),S=h(p),z=i(p,"LI",{class:!0});var O=o(z);T=i(O,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var R=o(T);V=n(R,"Todos"),R.forEach(f),O.forEach(f),p.forEach(f),j=h(v),C=i(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var Z=o(C);F=i(Z,"path",{d:!0,class:!0},1),o(F).forEach(f),Z.forEach(f),v.forEach(f),G=h(r),N=i(r,"DIV",{class:!0}),o(N).forEach(f),r.forEach(f),this.h()},h(){g.src!==(b="/svelte-kit-markdown/_app/assets/svelte-logo.87df40b8.svg")&&d(g,"src","/svelte-kit-markdown/_app/assets/svelte-logo.87df40b8.svg"),d(g,"alt","SvelteKit"),d(g,"class","svelte-1twf6mk"),d(t,"href","https://kit.svelte.dev"),d(t,"class","svelte-1twf6mk"),d(a,"class","corner svelte-1twf6mk"),d(A,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d(A,"class","svelte-1twf6mk"),d($,"viewBox","0 0 2 3"),d($,"aria-hidden","true"),d($,"class","svelte-1twf6mk"),d(_,"sveltekit:prefetch",""),d(_,"href","/"),d(_,"class","svelte-1twf6mk"),d(x,"class","svelte-1twf6mk"),p(x,"active","/"===s[0].path),d(K,"sveltekit:prefetch",""),d(K,"href","/about"),d(K,"class","svelte-1twf6mk"),d(H,"class","svelte-1twf6mk"),p(H,"active","/about"===s[0].path),d(T,"sveltekit:prefetch",""),d(T,"href","/todos"),d(T,"class","svelte-1twf6mk"),d(z,"class","svelte-1twf6mk"),p(z,"active","/todos"===s[0].path),d(L,"class","svelte-1twf6mk"),d(F,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(F,"class","svelte-1twf6mk"),d(C,"viewBox","0 0 2 3"),d(C,"aria-hidden","true"),d(C,"class","svelte-1twf6mk"),d(E,"class","svelte-1twf6mk"),d(N,"class","corner svelte-1twf6mk"),d(e,"class","svelte-1twf6mk")},m(s,r){u(s,e,r),k(e,a),k(a,t),k(t,g),k(e,w),k(e,E),k(E,$),k($,A),k(E,I),k(E,L),k(L,x),k(x,_),k(_,B),k(L,D),k(L,H),k(H,K),k(K,M),k(L,S),k(L,z),k(z,T),k(T,V),k(E,j),k(E,C),k(C,F),k(e,G),k(e,N)},p(s,[e]){1&e&&p(x,"active","/"===s[0].path),1&e&&p(H,"active","/about"===s[0].path),1&e&&p(z,"active","/todos"===s[0].path)},i:m,o:m,d(s){s&&f(e)}}}function D(s,e,a){let t;return g(s,_,(s=>a(0,t=s))),[t]}class H extends e{constructor(s){super(),a(this,s,D,B,t,{})}}function K(s){let e,a,t,l,p,m,g,_,B,D,K;e=new H({});const M=s[1].default,S=b(M,s,s[0],null);return{c(){w(e.$$.fragment),a=c(),t=r("main"),S&&S.c(),l=c(),p=r("footer"),m=r("p"),g=v("visit "),_=r("a"),B=v("kit.svelte.dev"),D=v(" to learn SvelteKit"),this.h()},l(s){E(e.$$.fragment,s),a=h(s),t=i(s,"MAIN",{class:!0});var r=o(t);S&&S.l(r),r.forEach(f),l=h(s),p=i(s,"FOOTER",{class:!0});var c=o(p);m=i(c,"P",{});var v=o(m);g=n(v,"visit "),_=i(v,"A",{href:!0,class:!0});var d=o(_);B=n(d,"kit.svelte.dev"),d.forEach(f),D=n(v," to learn SvelteKit"),v.forEach(f),c.forEach(f),this.h()},h(){d(t,"class","svelte-1izrdc8"),d(_,"href","https://kit.svelte.dev"),d(_,"class","svelte-1izrdc8"),d(p,"class","svelte-1izrdc8")},m(s,r){$(e,s,r),u(s,a,r),u(s,t,r),S&&S.m(t,null),u(s,l,r),u(s,p,r),k(p,m),k(m,g),k(m,_),k(_,B),k(m,D),K=!0},p(s,[e]){S&&S.p&&(!K||1&e)&&A(S,M,s,s[0],K?e:-1,null,null)},i(s){K||(I(e.$$.fragment,s),I(S,s),K=!0)},o(s){L(e.$$.fragment,s),L(S,s),K=!1},d(s){x(e,s),s&&f(a),s&&f(t),S&&S.d(s),s&&f(l),s&&f(p)}}}function M(s,e,a){let{$$slots:t={},$$scope:r}=e;return s.$$set=s=>{"$$scope"in s&&a(0,r=s.$$scope)},[r,t]}export default class extends e{constructor(s){super(),a(this,s,M,K,t,{})}}
