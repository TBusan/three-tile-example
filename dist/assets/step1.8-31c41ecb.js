import"./modulepreload-polyfill-3cfb730f.js";import{c as x,V as w,b as g,C as f,G as j,o as m,T as G,B as h,l as a,q as y,S as u,R as T,r as C,u as M,v as P,w as I,D as v,x as S,E as L,F as X,P as b,H as B,I as O,j as R,s as V,e as z,z as D}from"./util-bf818b98.js";import{T as E}from"./TeapotGeometry-52223971.js";const s=x([z,D]),p=s.project(105,35),H=new w(p.x,p.y,0),k=new w(0,-3e3,2e3),d=g("#map",H,k);d.scene.add(s);s.addEventListener("tile-loaded",o=>{var t;(t=o.tile.material.diffuse)==null||t.set(new f(8947848))});const n=new j;n.renderOrder=10;const c=new m({map:new G().load("../../image/test.jpg"),shininess:30});(()=>{const o=new h(8e3,8e3,1e3),t=new a(o);t.position.set(p.x,p.y,500),n.add(new y(t))})();(()=>{const o=s.project(80,40),t=new h(500,500,300),e=new a(t,c);e.position.set(o.x,o.y,150),n.add(e)})();(()=>{const o=s.project(90,40),t=new u(300),e=new a(t,c);e.position.set(o.x,o.y,150),n.add(e)})();(()=>{const o=s.project(100,40),t=new T(100,300),e=new a(t,c);e.position.set(o.x,o.y,150),n.add(e)})();(()=>{const o=s.project(110,40),t=new E(200),e=new a(t,c);e.position.set(o.x,o.y,100),e.rotateX(Math.PI/2),n.add(e)})();(()=>{const o=s.project(120,40),t=new C(300,500),e=new a(t,c);e.position.set(o.x,o.y,150),e.rotateX(Math.PI/2),n.add(e)})();(()=>{const o=s.project(130,40),t=new M(200,300,300),e=new a(t,c);e.position.set(o.x,o.y,150),e.rotateX(Math.PI/2),n.add(e)})();(()=>{const o=s.project(80,30),t=new P(150,200),e=new a(t,c);e.position.set(o.x,o.y,100),e.rotateX(Math.PI/2),n.add(e)})();(()=>{const o=s.project(90,30),t=new I(200),e=new a(t,c);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=s.project(100,30),t=new v(200),e=new a(t,c);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=s.project(110,30),t=new S(200,50),e=new a(t,c);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=s.project(120,30),t=new L(200),e=new a(t,c);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=s.project(130,30),t=new X(200,80),e=new a(t,c);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=s.project(105,50),t=new b(8e3,2e3),e=new OffscreenCanvas(2400,600),r=e.getContext("2d");r.fillStyle="#0033ff88",r.fillRect(0,0,e.width,e.height),r.fillStyle="#ffffff",r.font="bold 96px arial",r.textAlign="center",r==null||r.fillText("Three-Tile 几何体演示",1200,200);const l=new m({map:new B(e),transparent:!0}),i=new a(t,l);i.position.set(o.x,o.y,0),i.rotateX(Math.PI/2),n.add(new y(i)),n.add(i)})();d.scene.add(n);O(s);R(s);V(d,s);
