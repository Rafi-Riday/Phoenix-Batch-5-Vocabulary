import{S as ie,i as ce,s as ne,k as E,q as A,a as M,K as ge,l as T,m as R,r as q,h as _,c as I,L as ve,n as d,b as j,G as s,M as J,u as V,H as Y,N as re,O as se,P as ae,Q as ze,R as Pe,w as Me,J as Ge,g as K,d as te,f as ke,I as He,y as Ie,z as Qe,A as Le,B as je,v as we}from"../chunks/index.37b6f188.mjs";import{p as Ve}from"../chunks/stores.f6138522.mjs";function Ee(r,e,t){const l=r.slice();return l[18]=e[t].finalOptionSet,l[19]=e[t].qSet,l[21]=t,l}function Te(r,e,t){const l=r.slice();return l[22]=e[t],l[24]=t,l}function ye(r,e){let t,l,i,h,u,k,b,w,y=e[22][e[2]==="dataOne"?"dataTwo":"dataOne"]+"",O,n,a,g,v,m;function N(){return e[10](e[21],e[19],e[22])}return{key:r,first:null,c(){t=E("div"),l=E("input"),b=M(),w=E("label"),O=A(y),g=M(),this.h()},l(p){t=T(p,"DIV",{class:!0});var o=R(t);l=T(o,"INPUT",{class:!0,type:!0,name:!0,id:!0}),b=I(o),w=T(o,"LABEL",{class:!0,for:!0});var f=R(w);O=q(f,y),f.forEach(_),g=I(o),o.forEach(_),this.h()},h(){d(l,"class","peer"),l.disabled=i=e[4]!=="Submit",d(l,"type","radio"),d(l,"name",h="q_"+e[21]),d(l,"id",u="op_"+e[21]+"_"+e[24]),l.value=k=e[22][e[2]==="dataOne"?"dataTwo":"dataOne"],d(w,"class",n="w-full border px-2 py-1 "+(e[4]==="Submit"?"border-slate-300 peer-checked:bg-gray-300 peer-checked:border-slate-600":e[4]==="Reset"&&e[22].n===e[19].n?"bg-sky-100 border-sky-800 peer-checked:bg-emerald-200 peer-checked:border-green-800":e[4]==="Reset"&&e[22].n!==e[19].n?"border-slate-300 peer-checked:bg-red-100 peer-checked:border-red-600":"")),d(w,"for",a="op_"+e[21]+"_"+e[24]),d(t,"class","flex flex-row last:grow gap-1"),this.first=t},m(p,o){j(p,t,o),s(t,l),s(t,b),s(t,w),s(w,O),s(t,g),v||(m=J(l,"click",N),v=!0)},p(p,o){e=p,o&16&&i!==(i=e[4]!=="Submit")&&(l.disabled=i),o&32&&h!==(h="q_"+e[21])&&d(l,"name",h),o&32&&u!==(u="op_"+e[21]+"_"+e[24])&&d(l,"id",u),o&36&&k!==(k=e[22][e[2]==="dataOne"?"dataTwo":"dataOne"])&&(l.value=k),o&36&&y!==(y=e[22][e[2]==="dataOne"?"dataTwo":"dataOne"]+"")&&V(O,y),o&48&&n!==(n="w-full border px-2 py-1 "+(e[4]==="Submit"?"border-slate-300 peer-checked:bg-gray-300 peer-checked:border-slate-600":e[4]==="Reset"&&e[22].n===e[19].n?"bg-sky-100 border-sky-800 peer-checked:bg-emerald-200 peer-checked:border-green-800":e[4]==="Reset"&&e[22].n!==e[19].n?"border-slate-300 peer-checked:bg-red-100 peer-checked:border-red-600":""))&&d(w,"class",n),o&32&&a!==(a="op_"+e[21]+"_"+e[24])&&d(w,"for",a)},d(p){p&&_(t),v=!1,m()}}}function Se(r,e){let t,l,i,h=e[21]+1+"",u,k,b=e[19][e[2]]+"",w,y,O,n,a=[],g=new Map,v,m=e[18];const N=p=>p[24];for(let p=0;p<m.length;p+=1){let o=Te(e,m,p),f=N(o);g.set(f,a[p]=ye(f,o))}return{key:r,first:null,c(){t=E("fieldset"),l=E("legend"),i=E("a"),u=A(h),k=A(". "),w=A(b),O=M(),n=E("div");for(let p=0;p<a.length;p+=1)a[p].c();v=M(),this.h()},l(p){t=T(p,"FIELDSET",{class:!0});var o=R(t);l=T(o,"LEGEND",{class:!0});var f=R(l);i=T(f,"A",{href:!0,target:!0,rel:!0,class:!0});var c=R(i);u=q(c,h),k=q(c,". "),w=q(c,b),c.forEach(_),f.forEach(_),O=I(o),n=T(o,"DIV",{class:!0});var C=R(n);for(let S=0;S<a.length;S+=1)a[S].l(C);C.forEach(_),v=I(o),o.forEach(_),this.h()},h(){d(i,"href",y="https://www.google.com/search?q="+e[19][e[2]].split(" ").join("+")),d(i,"target","_blank"),d(i,"rel","noreferrer"),d(i,"class","font-semibold underline"),d(l,"class","bg-slate-200 border border-slate-300 py-1 px-2"),d(n,"class","grid grid-cols-2 gap-2"),d(t,"class","border border-solid border-slate-300 bg-white text-left p-2"),this.first=t},m(p,o){j(p,t,o),s(t,l),s(l,i),s(i,u),s(i,k),s(i,w),s(t,O),s(t,n);for(let f=0;f<a.length;f+=1)a[f].m(n,null);s(t,v)},p(p,o){e=p,o&32&&h!==(h=e[21]+1+"")&&V(u,h),o&36&&b!==(b=e[19][e[2]]+"")&&V(w,b),o&36&&y!==(y="https://www.google.com/search?q="+e[19][e[2]].split(" ").join("+"))&&d(i,"href",y),o&54&&(m=e[18],a=re(a,o,N,1,e,m,g,n,se,ye,null,Te))},d(p){p&&_(t);for(let o=0;o<a.length;o+=1)a[o].d()}}}function We(r){var o,f,c,C;let e,t,l,i,h,u=((o=r[6])==null?void 0:o.total)+"",k,b,w=((f=r[6])==null?void 0:f.answered)+"",y,O,n=((c=r[6])==null?void 0:c.correct)+"",a,g,v=((C=r[6])==null?void 0:C.wrong)+"",m,N,p;return{c(){e=E("button"),t=A("Reset"),l=M(),i=E("div"),h=A("Total: "),k=A(u),b=A(", Answered: "),y=A(w),O=A(`,
                    Correct: `),a=A(n),g=A(", Wrong: "),m=A(v),this.h()},l(S){e=T(S,"BUTTON",{class:!0});var D=R(e);t=q(D,"Reset"),D.forEach(_),l=I(S),i=T(S,"DIV",{class:!0});var B=R(i);h=q(B,"Total: "),k=q(B,u),b=q(B,", Answered: "),y=q(B,w),O=q(B,`,
                    Correct: `),a=q(B,n),g=q(B,", Wrong: "),m=q(B,v),B.forEach(_),this.h()},h(){d(e,"class","bg-sky-400 shadow-custom font-semibold px-4 py-2 underline svelte-1pp2eyb"),d(i,"class","bg-sky-200 mt-2 px-2 py-1 border border-slate-500 font-semibold shadow-custom svelte-1pp2eyb")},m(S,D){j(S,e,D),s(e,t),j(S,l,D),j(S,i,D),s(i,h),s(i,k),s(i,b),s(i,y),s(i,O),s(i,a),s(i,g),s(i,m),N||(p=J(e,"click",r[12]),N=!0)},p(S,D){var B,L,H,U;D&64&&u!==(u=((B=S[6])==null?void 0:B.total)+"")&&V(k,u),D&64&&w!==(w=((L=S[6])==null?void 0:L.answered)+"")&&V(y,w),D&64&&n!==(n=((H=S[6])==null?void 0:H.correct)+"")&&V(a,n),D&64&&v!==(v=((U=S[6])==null?void 0:U.wrong)+"")&&V(m,v)},d(S){S&&_(e),S&&_(l),S&&_(i),N=!1,p()}}}function Fe(r){let e,t,l,i;return{c(){e=E("button"),t=A("Submit"),this.h()},l(h){e=T(h,"BUTTON",{class:!0});var u=R(e);t=q(u,"Submit"),u.forEach(_),this.h()},h(){d(e,"class","bg-sky-400 shadow-custom font-semibold px-4 py-2 underline svelte-1pp2eyb")},m(h,u){j(h,e,u),s(e,t),l||(i=J(e,"click",r[11]),l=!0)},p:Y,d(h){h&&_(e),l=!1,i()}}}function Re(r){let e,t=[],l=new Map,i,h,u,k,b=r[5];const w=a=>a[19].n;for(let a=0;a<b.length;a+=1){let g=Ee(r,b,a),v=w(g);l.set(v,t[a]=Se(v,g))}function y(a,g){return a[4]==="Submit"?Fe:We}let O=y(r),n=O(r);return{c(){e=E("div");for(let a=0;a<t.length;a+=1)t[a].c();h=M(),u=E("div"),n.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var g=R(e);for(let m=0;m<t.length;m+=1)t[m].l(g);g.forEach(_),h=I(a),u=T(a,"DIV",{class:!0});var v=R(u);n.l(v),v.forEach(_),this.h()},h(){d(e,"class",i="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-0 "+(r[4]==="Submit"?"mb-12":"mb-44 sm:mb-32")),d(u,"class",k="fixed "+(r[4]==="Reset"?"-bottom-6":"-bottom-3")+" left-1/2 -translate-x-1/2 -translate-y-1/2")},m(a,g){j(a,e,g);for(let v=0;v<t.length;v+=1)t[v].m(e,null);j(a,h,g),j(a,u,g),n.m(u,null)},p(a,g){g&54&&(b=a[5],t=re(t,g,w,1,a,b,l,e,se,Se,null,Ee)),g&16&&i!==(i="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-0 "+(a[4]==="Submit"?"mb-12":"mb-44 sm:mb-32"))&&d(e,"class",i),O===(O=y(a))&&n?n.p(a,g):(n.d(1),n=O(a),n&&(n.c(),n.m(u,null))),g&16&&k!==(k="fixed "+(a[4]==="Reset"?"-bottom-6":"-bottom-3")+" left-1/2 -translate-x-1/2 -translate-y-1/2")&&d(u,"class",k)},d(a){a&&_(e);for(let g=0;g<t.length;g+=1)t[g].d();a&&_(h),a&&_(u),n.d()}}}function Je(r){let e,t,l,i,h,u,k,b,w,y,O,n,a,g,v,m,N,p,o,f=r[0].dataOne+"",c,C,S,D,B,L,H,U=r[0].dataTwo+"",P,Q,Z,X=r[3],$,le,W=Re(r);return{c(){e=E("main"),t=E("center"),l=A("Select the "),i=E("span"),h=A("right"),u=A(" answer"),k=M(),b=E("center"),w=E("button"),y=A("Right"),O=M(),n=E("button"),a=A("Unselected Right"),g=M(),v=E("button"),m=A("Wrong"),N=M(),p=E("center"),o=E("span"),c=A(f),C=M(),S=E("button"),D=ge("svg"),B=ge("path"),L=M(),H=E("span"),P=A(U),Z=M(),W.c(),this.h()},l(G){e=T(G,"MAIN",{});var z=R(e);t=T(z,"CENTER",{class:!0});var F=R(t);l=q(F,"Select the "),i=T(F,"SPAN",{class:!0});var ue=R(i);h=q(ue,"right"),ue.forEach(_),u=q(F," answer"),F.forEach(_),k=I(z),b=T(z,"CENTER",{class:!0});var x=R(b);w=T(x,"BUTTON",{class:!0});var fe=R(w);y=q(fe,"Right"),fe.forEach(_),O=I(x),n=T(x,"BUTTON",{class:!0});var de=R(n);a=q(de,"Unselected Right"),de.forEach(_),g=I(x),v=T(x,"BUTTON",{class:!0});var he=R(v);m=q(he,"Wrong"),he.forEach(_),x.forEach(_),N=I(z),p=T(z,"CENTER",{class:!0});var ee=R(p);o=T(ee,"SPAN",{});var _e=R(o);c=q(_e,f),_e.forEach(_),C=I(ee),S=T(ee,"BUTTON",{class:!0});var be=R(S);D=ve(be,"svg",{class:!0,focusable:!0,xmlns:!0,viewBox:!0});var pe=R(D);B=ve(pe,"path",{d:!0}),R(B).forEach(_),pe.forEach(_),be.forEach(_),L=I(ee),H=T(ee,"SPAN",{});var me=R(H);P=q(me,U),me.forEach(_),ee.forEach(_),Z=I(z),W.l(z),z.forEach(_),this.h()},h(){d(i,"class","text-green-700"),d(t,"class","mb-2"),d(w,"class","cursor-default px-2 py-1 bg-emerald-200 border border-green-800"),d(n,"class","cursor-default px-2 py-1 bg-sky-100 border border-sky-800"),d(v,"class","cursor-default px-2 py-1 bg-red-100 border border-red-600"),d(b,"class","mb-2"),d(B,"d","M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"),d(D,"class","w-5 h-5"),d(D,"focusable","false"),d(D,"xmlns","http://www.w3.org/2000/svg"),d(D,"viewBox","0 0 24 24"),d(S,"class","border border-sky-200 p-1 bg-sky-200 hover:bg-transparent"),d(p,"class",Q="mb-4 flex "+(r[2]==="dataOne"?"flex-row":"flex-row-reverse")+" gap-2 justify-center items-center")},m(G,z){j(G,e,z),s(e,t),s(t,l),s(t,i),s(i,h),s(t,u),s(e,k),s(e,b),s(b,w),s(w,y),s(b,O),s(b,n),s(n,a),s(b,g),s(b,v),s(v,m),s(e,N),s(e,p),s(p,o),s(o,c),s(p,C),s(p,S),s(S,D),s(D,B),s(p,L),s(p,H),s(H,P),s(e,Z),W.m(e,null),$||(le=J(S,"click",r[9]),$=!0)},p(G,[z]){z&1&&f!==(f=G[0].dataOne+"")&&V(c,f),z&1&&U!==(U=G[0].dataTwo+"")&&V(P,U),z&4&&Q!==(Q="mb-4 flex "+(G[2]==="dataOne"?"flex-row":"flex-row-reverse")+" gap-2 justify-center items-center")&&d(p,"class",Q),z&8&&ne(X,X=G[3])?(W.d(1),W=Re(G),W.c(),W.m(e,null)):W.p(G,z)},i:Y,o:Y,d(G){G&&_(e),W.d(G),$=!1,le()}}}const oe=4;function Ke(r,e,t){let{producedUsableData:l}=e,{direction:i}=e,h="dataOne",u=!0,k="Submit";const b=c=>Math.floor(Math.random()*c),w=c=>{const C=[];for(let S=1;S<=oe;S++)c-S>=0?C.push(l[c-S]):C.push(l[l.length+c-S]),c+S<=l.length-1?C.push(l[c+S]):C.push(l[c+S-l.length]);return{optionSet:C,qSet:l[c]}},y=c=>{const{optionSet:C,qSet:S}=w(c),D=[],B=()=>{const U=C[b(C.length)];D.find(P=>P.n===U.n)||D.push(U),D.length<oe-1&&B()};B();const L=b(oe);return{finalOptionSet:[].concat(D.slice(0,L)).concat([S]).concat(D.slice(L,D.length)),qSet:S}};let O=[];(()=>{O=[],l.forEach(({n:c},C)=>{O.push(y(C))})})();let a=[];const g=()=>{const c=O[b(O.length)];a.find(C=>C.qSet.n===c.qSet.n)||a.push(c),a.length!==O.length&&g()};g();const v={};let m;const N=()=>h==="dataOne"?t(2,h="dataTwo"):t(2,h="dataOne"),p=(c,C,S)=>{t(1,v[c]={qSet:C,option:S},v)},o=()=>t(4,k="Reset"),f=()=>{t(5,a=[]),g(),t(3,u=!u),t(4,k="Submit"),t(6,m.answered=0,m),t(6,m.correct=0,m),t(6,m.wrong=0,m)};return r.$$set=c=>{"producedUsableData"in c&&t(8,l=c.producedUsableData),"direction"in c&&t(0,i=c.direction)},r.$$.update=()=>{r.$$.dirty&258&&t(6,m={total:l.length,answered:Object.keys(v).length,correct:Object.keys(v).filter(c=>v[c].qSet.n===v[c].option.n).length,wrong:Object.keys(v).filter(c=>v[c].qSet.n!==v[c].option.n).length})},[i,v,h,u,k,a,m,g,l,N,p,o,f]}class Ye extends ie{constructor(e){super(),ce(this,e,Ke,Je,ne,{producedUsableData:8,direction:0})}}function Oe(r,e,t){const l=r.slice();return l[9]=e[t].n,l[10]=e[t].dataOne,l[11]=e[t].dataTwo,l[13]=t,l}function Ne(r,e,t){const l=r.slice();return l[14]=e[t],l}function De(r,e){let t,l=e[14]+"",i;return{key:r,first:null,c(){t=E("th"),i=A(l),this.h()},l(h){t=T(h,"TH",{class:!0});var u=R(t);i=q(u,l),u.forEach(_),this.h()},h(){d(t,"class","bg-slate-300 border border-slate-400 px-3 py-1"),this.first=t},m(h,u){j(h,t,u),s(t,i)},p(h,u){e=h,u&1&&l!==(l=e[14]+"")&&V(i,l)},d(h){h&&_(t)}}}function Ue(r,e){let t,l,i=e[13]+1+"",h,u,k,b,w=e[10]+"",y,O,n,a,g,v=e[11]+"",m,N,p,o;return{key:r,first:null,c(){t=E("tr"),l=E("td"),h=A(i),u=M(),k=E("td"),b=E("a"),y=A(w),n=M(),a=E("td"),g=E("a"),m=A(v),p=M(),this.h()},l(f){t=T(f,"TR",{class:!0});var c=R(t);l=T(c,"TD",{class:!0});var C=R(l);h=q(C,i),C.forEach(_),u=I(c),k=T(c,"TD",{class:!0});var S=R(k);b=T(S,"A",{target:!0,rel:!0,href:!0});var D=R(b);y=q(D,w),D.forEach(_),S.forEach(_),n=I(c),a=T(c,"TD",{class:!0});var B=R(a);g=T(B,"A",{target:!0,rel:!0,href:!0});var L=R(g);m=q(L,v),L.forEach(_),B.forEach(_),p=I(c),c.forEach(_),this.h()},h(){d(l,"class","font-semibold border border-slate-400 px-3 py-1"),d(b,"target","_blank"),d(b,"rel","noreferrer"),d(b,"href",O="https://www.google.com/search?q="+e[10].split(" ").join("+")),d(k,"class","border border-slate-400 px-3 py-1 underline"),d(g,"target","_blank"),d(g,"rel","noreferrer"),d(g,"href",N="https://www.google.com/search?q="+e[11].split(" ").join("+")),d(a,"class","border border-slate-400 px-3 py-1 underline"),d(t,"class",o=((e[13]+1)%2===0?"bg-slate-100":"bg-white")+" hover:bg-slate-300"),this.first=t},m(f,c){j(f,t,c),s(t,l),s(l,h),s(t,u),s(t,k),s(k,b),s(b,y),s(t,n),s(t,a),s(a,g),s(g,m),s(t,p)},p(f,c){e=f,c&16&&i!==(i=e[13]+1+"")&&V(h,i),c&16&&w!==(w=e[10]+"")&&V(y,w),c&16&&O!==(O="https://www.google.com/search?q="+e[10].split(" ").join("+"))&&d(b,"href",O),c&16&&v!==(v=e[11]+"")&&V(m,v),c&16&&N!==(N="https://www.google.com/search?q="+e[11].split(" ").join("+"))&&d(g,"href",N),c&16&&o!==(o=((e[13]+1)%2===0?"bg-slate-100":"bg-white")+" hover:bg-slate-300")&&d(t,"class",o)},d(f){f&&_(t)}}}function Xe(r){let e,t,l,i,h,u=r[2]===""?"Search":"Clear",k,b,w,y,O,n=[],a=new Map,g,v,m=[],N=new Map,p,o,f,c,C,S,D=["Serial No.",`${r[0].dataOne}`,`${r[0].dataTwo}`];const B=U=>U[14];for(let U=0;U<3;U+=1){let P=Ne(r,D,U),Q=B(P);a.set(Q,n[U]=De(Q,P))}let L=r[4];const H=U=>U[9];for(let U=0;U<L.length;U+=1){let P=Oe(r,L,U),Q=H(P);N.set(Q,m[U]=Ue(Q,P))}return{c(){e=E("main"),t=E("center"),l=E("input"),i=M(),h=E("button"),k=A(u),b=M(),w=E("table"),y=E("thead"),O=E("tr");for(let U=0;U<3;U+=1)n[U].c();g=M(),v=E("tbody");for(let U=0;U<m.length;U+=1)m[U].c();p=M(),o=E("aside"),f=E("button"),c=A("Give Test"),this.h()},l(U){e=T(U,"MAIN",{class:!0});var P=R(e);t=T(P,"CENTER",{class:!0});var Q=R(t);l=T(Q,"INPUT",{class:!0,type:!0,placeholder:!0}),i=I(Q),h=T(Q,"BUTTON",{class:!0});var Z=R(h);k=q(Z,u),Z.forEach(_),Q.forEach(_),b=I(P),w=T(P,"TABLE",{class:!0});var X=R(w);y=T(X,"THEAD",{});var $=R(y);O=T($,"TR",{});var le=R(O);for(let F=0;F<3;F+=1)n[F].l(le);le.forEach(_),$.forEach(_),g=I(X),v=T(X,"TBODY",{});var W=R(v);for(let F=0;F<m.length;F+=1)m[F].l(W);W.forEach(_),X.forEach(_),p=I(P),o=T(P,"ASIDE",{class:!0});var G=R(o);f=T(G,"BUTTON",{class:!0});var z=R(f);c=q(z,"Give Test"),z.forEach(_),G.forEach(_),P.forEach(_),this.h()},h(){d(l,"class","w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border border-slate-400 focus:outline-none focus:border-slate-600"),d(l,"type","text"),d(l,"placeholder","Search here"),d(h,"class","flex items-center px-4 font-bold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-600 focus:border-black focus:outline-none"),d(t,"class","text-gray-700 mt-2 mb-4 px-2 max-w-sm flex flex-row first:grow"),d(w,"class","border-collapse border border-slate-400"),d(f,"class","bg-sky-400 shadow-custom font-semibold px-4 py-2 underline svelte-1pp2eyb"),d(o,"class","fixed -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2"),d(e,"class","pb-12")},m(U,P){j(U,e,P),s(e,t),s(t,l),ae(l,r[2]),r[7](l),s(t,i),s(t,h),s(h,k),s(e,b),s(e,w),s(w,y),s(y,O);for(let Q=0;Q<3;Q+=1)n[Q].m(O,null);s(w,g),s(w,v);for(let Q=0;Q<m.length;Q+=1)m[Q].m(v,null);s(e,p),s(e,o),s(o,f),s(f,c),C||(S=[J(l,"input",r[6]),J(h,"click",r[8]),J(f,"click",function(){ze(r[1])&&r[1].apply(this,arguments)})],C=!0)},p(U,[P]){r=U,P&4&&l.value!==r[2]&&ae(l,r[2]),P&4&&u!==(u=r[2]===""?"Search":"Clear")&&V(k,u),P&1&&(D=["Serial No.",`${r[0].dataOne}`,`${r[0].dataTwo}`],n=re(n,P,B,1,r,D,a,O,se,De,null,Ne)),P&16&&(L=r[4],m=re(m,P,H,1,r,L,N,v,se,Ue,null,Oe))},i:Y,o:Y,d(U){U&&_(e),r[7](null);for(let P=0;P<3;P+=1)n[P].d();for(let P=0;P<m.length;P+=1)m[P].d();C=!1,Pe(S)}}}function Ze(r,e,t){let{producedUsableData:l}=e,{direction:i}=e,{switchToTest:h}=e,u,k="",b;function w(){k=this.value,t(2,k)}function y(n){Me[n?"unshift":"push"](()=>{b=n,t(3,b)})}const O=n=>{k!==""?t(2,k=""):n.target.parentElement.children[0].focus()};return r.$$set=n=>{"producedUsableData"in n&&t(5,l=n.producedUsableData),"direction"in n&&t(0,i=n.direction),"switchToTest"in n&&t(1,h=n.switchToTest)},r.$$.update=()=>{r.$$.dirty&36&&(k!==""?t(4,u=l.filter(n=>n.dataOne.toLowerCase().includes(k.toLowerCase())||n.dataTwo.includes(k))):t(4,u=l)),r.$$.dirty&8&&(b==null||b.focus())},[i,h,k,b,u,l,w,y,O]}class $e extends ie{constructor(e){super(),ce(this,e,Ze,Xe,ne,{producedUsableData:5,direction:0,switchToTest:1})}}function Ce(r){let e,t,l,i,h,u,k,b,w,y,O,n,a,g,v,m,N,p,o;return{c(){e=E("center"),t=E("button"),l=A("Read"),i=A(`
                or
                `),h=E("button"),u=A("Give Test"),k=M(),b=E("center"),w=A("Click "),y=E("u"),O=A("Links"),n=A(" to view definitions"),a=M(),g=E("center"),v=A("Copyright©"),m=E("a"),N=A("Phoenix Admission Care"),this.h()},l(f){e=T(f,"CENTER",{});var c=R(e);t=T(c,"BUTTON",{class:!0});var C=R(t);l=q(C,"Read"),C.forEach(_),i=q(c,`
                or
                `),h=T(c,"BUTTON",{class:!0});var S=R(h);u=q(S,"Give Test"),S.forEach(_),c.forEach(_),k=I(f),b=T(f,"CENTER",{});var D=R(b);w=q(D,"Click "),y=T(D,"U",{class:!0});var B=R(y);O=q(B,"Links"),B.forEach(_),n=q(D," to view definitions"),D.forEach(_),a=I(f),g=T(f,"CENTER",{});var L=R(g);v=q(L,"Copyright©"),m=T(L,"A",{class:!0,href:!0});var H=R(m);N=q(H,"Phoenix Admission Care"),H.forEach(_),L.forEach(_),this.h()},h(){d(t,"class","bg-sky-200 font-semibold px-2 py-1 underline"),d(h,"class","bg-sky-200 font-semibold px-2 py-1 underline"),d(y,"class","cursor-pointer"),d(m,"class","text-sky-700 underline"),d(m,"href","https://www.facebook.com/PhoenixAdmissionCare")},m(f,c){j(f,e,c),s(e,t),s(t,l),s(e,i),s(e,h),s(h,u),j(f,k,c),j(f,b,c),s(b,w),s(b,y),s(y,O),s(b,n),j(f,a,c),j(f,g,c),s(g,v),s(g,m),s(m,N),p||(o=[J(t,"click",r[10]),J(h,"click",r[11])],p=!0)},p:Y,d(f){f&&_(e),f&&_(k),f&&_(b),f&&_(a),f&&_(g),p=!1,Pe(o)}}}function Ae(r){let e,t,l,i,h,u,k,b,w,y,O;return{c(){e=E("center"),t=E("center"),l=A("Don't go Forward unless you are an admin!"),i=M(),h=E("center"),u=E("input"),k=M(),b=E("button"),w=A("Enter"),this.h()},l(n){e=T(n,"CENTER",{class:!0});var a=R(e);t=T(a,"CENTER",{});var g=R(t);l=q(g,"Don't go Forward unless you are an admin!"),g.forEach(_),i=I(a),h=T(a,"CENTER",{class:!0});var v=R(h);u=T(v,"INPUT",{class:!0,type:!0,placeholder:!0}),k=I(v),b=T(v,"BUTTON",{class:!0});var m=R(b);w=q(m,"Enter"),m.forEach(_),v.forEach(_),a.forEach(_),this.h()},h(){d(u,"class","w-36 sm:w-full h-10 pl-3 pr-0 text-base placeholder-gray-600 border border-slate-400 focus:outline-none focus:border-slate-600"),d(u,"type","text"),d(u,"placeholder","Enter Password"),d(b,"class","flex items-center px-4 font-bold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-600 focus:border-black focus:outline-none"),d(h,"class","text-gray-700 mb-4 px-2 max-w-sm flex flex-row first:grow"),d(e,"class","flex flex-col gap-2 font-semibold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")},m(n,a){j(n,e,a),s(e,t),s(t,l),s(e,i),s(e,h),s(h,u),ae(u,r[1]),r[13](u),s(h,k),s(h,b),s(b,w),y||(O=J(u,"input",r[12]),y=!0)},p(n,a){a&2&&u.value!==n[1]&&ae(u,n[1])},d(n){n&&_(e),r[13](null),y=!1,O()}}}function qe(r){let e,t;return e=new $e({props:{producedUsableData:r[9],direction:r[7],switchToTest:r[8]}}),{c(){Ie(e.$$.fragment)},l(l){Qe(e.$$.fragment,l)},m(l,i){Le(e,l,i),t=!0},p:Y,i(l){t||(K(e.$$.fragment,l),t=!0)},o(l){te(e.$$.fragment,l),t=!1},d(l){je(e,l)}}}function Be(r){let e,t;return e=new Ye({props:{producedUsableData:r[9],direction:r[7]}}),{c(){Ie(e.$$.fragment)},l(l){Qe(e.$$.fragment,l)},m(l,i){Le(e,l,i),t=!0},p:Y,i(l){t||(K(e.$$.fragment,l),t=!0)},o(l){te(e.$$.fragment,l),t=!1},d(l){je(e,l)}}}function xe(r){let e,t,l,i,h,u,k,b,w,y,O,n,a,g,v;document.title=e=r[3];let m=(r[2]==="Read"||r[2]==="Test")&&Ce(r),N=r[2]==="Pass"&&Ae(r),p=r[2]==="Read"&&qe(r),o=r[2]==="Test"&&Be(r);return{c(){t=E("meta"),l=E("meta"),i=E("meta"),h=M(),u=E("main"),k=E("div"),b=E("center"),w=A(r[3]),y=M(),m&&m.c(),O=M(),n=E("center"),N&&N.c(),a=M(),p&&p.c(),g=M(),o&&o.c(),this.h()},l(f){const c=Ge("svelte-hvgr3t",document.head);t=T(c,"META",{name:!0,content:!0}),l=T(c,"META",{name:!0,content:!0}),i=T(c,"META",{name:!0,content:!0}),c.forEach(_),h=I(f),u=T(f,"MAIN",{class:!0});var C=R(u);k=T(C,"DIV",{class:!0});var S=R(k);b=T(S,"CENTER",{class:!0});var D=R(b);w=q(D,r[3]),D.forEach(_),y=I(S),m&&m.l(S),S.forEach(_),O=I(C),n=T(C,"CENTER",{});var B=R(n);N&&N.l(B),a=I(B),p&&p.l(B),g=I(B),o&&o.l(B),B.forEach(_),C.forEach(_),this.h()},h(){d(t,"name","description"),d(t,"content",r[4]),d(l,"name","keywords"),d(l,"content",r[5]),d(i,"name","author"),d(i,"content",r[6]),d(b,"class","font-semibold text-lg"),d(k,"class","flex flex-col gap-1"),d(u,"class","text-gray-900 flex flex-col gap-1 py-4 sm:px-4")},m(f,c){s(document.head,t),s(document.head,l),s(document.head,i),j(f,h,c),j(f,u,c),s(u,k),s(k,b),s(b,w),s(k,y),m&&m.m(k,null),s(u,O),s(u,n),N&&N.m(n,null),s(n,a),p&&p.m(n,null),s(n,g),o&&o.m(n,null),v=!0},p(f,[c]){(!v||c&8)&&e!==(e=f[3])&&(document.title=e),f[2]==="Read"||f[2]==="Test"?m?m.p(f,c):(m=Ce(f),m.c(),m.m(k,null)):m&&(m.d(1),m=null),f[2]==="Pass"?N?N.p(f,c):(N=Ae(f),N.c(),N.m(n,a)):N&&(N.d(1),N=null),f[2]==="Read"?p?(p.p(f,c),c&4&&K(p,1)):(p=qe(f),p.c(),K(p,1),p.m(n,g)):p&&(we(),te(p,1,1,()=>{p=null}),ke()),f[2]==="Test"?o?(o.p(f,c),c&4&&K(o,1)):(o=Be(f),o.c(),K(o,1),o.m(n,null)):o&&(we(),te(o,1,1,()=>{o=null}),ke())},i(f){v||(K(p),K(o),v=!0)},o(f){te(p),te(o),v=!1},d(f){_(t),_(l),_(i),f&&_(h),f&&_(u),m&&m.d(),N&&N.d(),p&&p.d(),o&&o.d()}}}function et(r,e,t){let l;He(r,Ve,o=>t(14,l=o));const{title:i,description:h,keywords:u,author:k,direction:b,dataSet:w}=l.data.mainData;let y="Pass";const O=()=>{t(2,y="Test")};let n=[];w.forEach((o,f)=>{o.n=f+1,n.push(o)});let a,g;const v=()=>t(2,y="Read"),m=()=>t(2,y="Test");function N(){g=this.value,t(1,g)}function p(o){Me[o?"unshift":"push"](()=>{a=o,t(0,a)})}return r.$$.update=()=>{r.$$.dirty&1&&(a==null||a.focus()),r.$$.dirty&2&&g==="Rima"&&t(2,y="Read")},[a,g,y,i,h,u,k,b,O,n,v,m,N,p]}class rt extends ie{constructor(e){super(),ce(this,e,et,xe,ne,{})}}export{rt as default};
