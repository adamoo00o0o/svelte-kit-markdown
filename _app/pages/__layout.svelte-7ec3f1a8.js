import{D as s,S as e,i as a,s as t,e as c,k as r,E as l,t as v,c as h,a as o,d as i,n,g as d,b as f,F as p,f as u,G as g,H as b,I as E,J as m,j as $,m as k,o as x,K as A,v as w,r as I,w as L}from"../chunks/vendor-eee07125.js";import{b as _}from"../chunks/paths-45dac81d.js";const B={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function D(s){let e,a,t,E,m,$,k,x,A,w,I,L,_,B,D,H,K,M,S,j,V,C,F,G,N,O,R;return{c(){e=c("header"),a=c("div"),t=c("a"),E=c("img"),$=r(),k=c("nav"),x=l("svg"),A=l("path"),w=r(),I=c("ul"),L=c("li"),_=c("a"),B=v("Home"),D=r(),H=c("li"),K=c("a"),M=v("About"),S=r(),j=c("li"),V=c("a"),C=v("docs"),F=r(),G=l("svg"),N=l("path"),O=r(),R=c("div"),this.h()},l(s){e=h(s,"HEADER",{class:!0});var c=o(e);a=h(c,"DIV",{class:!0});var r=o(a);t=h(r,"A",{href:!0,class:!0});var l=o(t);E=h(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(i),r.forEach(i),$=n(c),k=h(c,"NAV",{class:!0});var v=o(k);x=h(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var f=o(x);A=h(f,"path",{d:!0,class:!0},1),o(A).forEach(i),f.forEach(i),w=n(v),I=h(v,"UL",{class:!0});var p=o(I);L=h(p,"LI",{class:!0});var u=o(L);_=h(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var g=o(_);B=d(g,"Home"),g.forEach(i),u.forEach(i),D=n(p),H=h(p,"LI",{class:!0});var b=o(H);K=h(b,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=o(K);M=d(m,"About"),m.forEach(i),b.forEach(i),S=n(p),j=h(p,"LI",{class:!0});var Z=o(j);V=h(Z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var J=o(V);C=d(J,"docs"),J.forEach(i),Z.forEach(i),p.forEach(i),F=n(v),G=h(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var P=o(G);N=h(P,"path",{d:!0,class:!0},1),o(N).forEach(i),P.forEach(i),v.forEach(i),O=n(c),R=h(c,"DIV",{class:!0}),o(R).forEach(i),c.forEach(i),this.h()},h(){E.src!==(m="/svelte-kit-markdown/_app/assets/svelte-logo.87df40b8.svg")&&f(E,"src","/svelte-kit-markdown/_app/assets/svelte-logo.87df40b8.svg"),f(E,"alt","SvelteKit"),f(E,"class","svelte-7hdcv7"),f(t,"href","https://kit.svelte.dev"),f(t,"class","svelte-7hdcv7"),f(a,"class","corner svelte-7hdcv7"),f(A,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),f(A,"class","svelte-7hdcv7"),f(x,"viewBox","0 0 2 3"),f(x,"aria-hidden","true"),f(x,"class","svelte-7hdcv7"),f(_,"sveltekit:prefetch",""),f(_,"href",s[1]),f(_,"class","svelte-7hdcv7"),f(L,"class","svelte-7hdcv7"),p(L,"active","/"===s[0].path),f(K,"sveltekit:prefetch",""),f(K,"href",s[2]),f(K,"class","svelte-7hdcv7"),f(H,"class","svelte-7hdcv7"),p(H,"active","/about"===s[0].path),f(V,"sveltekit:prefetch",""),f(V,"href",s[3]),f(V,"class","svelte-7hdcv7"),f(j,"class","svelte-7hdcv7"),p(j,"active","/docs"===s[0].path),f(I,"class","svelte-7hdcv7"),f(N,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),f(N,"class","svelte-7hdcv7"),f(G,"viewBox","0 0 2 3"),f(G,"aria-hidden","true"),f(G,"class","svelte-7hdcv7"),f(k,"class","svelte-7hdcv7"),f(R,"class","corner svelte-7hdcv7"),f(e,"class","svelte-7hdcv7")},m(s,c){u(s,e,c),g(e,a),g(a,t),g(t,E),g(e,$),g(e,k),g(k,x),g(x,A),g(k,w),g(k,I),g(I,L),g(L,_),g(_,B),g(I,D),g(I,H),g(H,K),g(K,M),g(I,S),g(I,j),g(j,V),g(V,C),g(k,F),g(k,G),g(G,N),g(e,O),g(e,R)},p(s,[e]){1&e&&p(L,"active","/"===s[0].path),1&e&&p(H,"active","/about"===s[0].path),1&e&&p(j,"active","/docs"===s[0].path)},i:b,o:b,d(s){s&&i(e)}}}function H(s,e,a){let t;E(s,B,(s=>a(0,t=s)));return[t,_+"/",_+"/about",_+"/docs"]}class K extends e{constructor(s){super(),a(this,s,H,D,t,{})}}function M(s){let e,a,t,l,p,b,E,_,B,D,H;e=new K({});const M=s[1].default,S=m(M,s,s[0],null);return{c(){$(e.$$.fragment),a=r(),t=c("main"),S&&S.c(),l=r(),p=c("footer"),b=c("p"),E=v("visit "),_=c("a"),B=v("kit.svelte.dev"),D=v(" to learn SvelteKit"),this.h()},l(s){k(e.$$.fragment,s),a=n(s),t=h(s,"MAIN",{class:!0});var c=o(t);S&&S.l(c),c.forEach(i),l=n(s),p=h(s,"FOOTER",{class:!0});var r=o(p);b=h(r,"P",{});var v=o(b);E=d(v,"visit "),_=h(v,"A",{href:!0,class:!0});var f=o(_);B=d(f,"kit.svelte.dev"),f.forEach(i),D=d(v," to learn SvelteKit"),v.forEach(i),r.forEach(i),this.h()},h(){f(t,"class","svelte-14x53a4"),f(_,"href","https://kit.svelte.dev"),f(_,"class","svelte-14x53a4"),f(p,"class","svelte-14x53a4")},m(s,c){x(e,s,c),u(s,a,c),u(s,t,c),S&&S.m(t,null),u(s,l,c),u(s,p,c),g(p,b),g(b,E),g(b,_),g(_,B),g(b,D),H=!0},p(s,[e]){S&&S.p&&(!H||1&e)&&A(S,M,s,s[0],H?e:-1,null,null)},i(s){H||(w(e.$$.fragment,s),w(S,s),H=!0)},o(s){I(e.$$.fragment,s),I(S,s),H=!1},d(s){L(e,s),s&&i(a),s&&i(t),S&&S.d(s),s&&i(l),s&&i(p)}}}const S=!1,j=!0,V=!0;function C(s,e,a){let{$$slots:t={},$$scope:c}=e;return s.$$set=s=>{"$$scope"in s&&a(0,c=s.$$scope)},[c,t]}export default class extends e{constructor(s){super(),a(this,s,C,M,t,{})}}export{S as hydrate,V as prerender,j as router};
