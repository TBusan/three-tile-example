import"./modulepreload-polyfill-3cfb730f.js";import{V as r,m as c,a as m,n as i,t as p}from"./mapSource-8a84da65.js";import{c as l,a as h,u as d,s as f,b as u}from"./util-572711e2.js";const a=l(m,c),w=new r(100,30,0),g=new r(100,0,3e4),t=h("#map",a,w,g);d(t);function k(o,n){var s;const e=new i.FakeEarth(((s=o.scene.fog)==null?void 0:s.color)||new p(0));return e.name="fakeearth",e.applyMatrix4(n.rootTile.matrix),o.controls.addEventListener("change",()=>{e.visible=o.controls.getDistance()>3e3}),e}a.add(k(t,a));f(t,a);u(a);
