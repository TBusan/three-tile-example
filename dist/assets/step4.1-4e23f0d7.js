import"./modulepreload-polyfill-3cfb730f.js";import{b9 as s,J as n,q as c,r as m,Y as i,a as l,m as d,V as u}from"./mapSource-8a728109.js";class w extends s{loadMaterial(y,t){const a=[new n({wireframe:!0,color:16776960})];return setTimeout(()=>t(a)),a}}const p=document.querySelector("#map"),o=new c.GLViewer(p);o.scene.background=new m(0);const g=new w,r=new i({loader:g,imgSource:[l],demSource:d,lon0:90,minLevel:2});o.scene.add(r);const e=r.geo2pos(new u(95,29.65));o.controls.target.set(e.x,e.y,0);o.camera.position.set(e.x,e.y+100,100);
