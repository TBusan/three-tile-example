import"./modulepreload-polyfill-3cfb730f.js";import{b9 as l,P as m,g as d,p as w,q as f,Y as u,a as x,m as g,V as p}from"./mapSource-8a728109.js";class y extends l{loadGeometry(t,s){const o=new m;return setTimeout(()=>s(o)),o}loadMaterial(t,s){const o=new d;return o.map=new w(z(t.coord.x,t.coord.y,t.coord.z)),setTimeout(()=>s([o])),[o]}}function z(r,t,s){const c=new OffscreenCanvas(256,256),e=c.getContext("2d");return e&&(e.strokeStyle="#ccc",e.lineWidth=2,e.strokeRect(5,5,256-10,256-10),e.fillStyle="#ccc",e.shadowColor="black",e.shadowBlur=5,e.shadowOffsetX=1,e.shadowOffsetY=1,e.font="bold 20px arial",e.textAlign="center",e.fillText("一块瓦片",256/2,60),e.fillText(`坐标(${r}, ${t}, ${s})`,256/2,100),e.fillText("采用googles scheme",256/2,140)),c}const h=document.querySelector("#map"),n=new f.GLViewer(h),S=new y,i=new u({loader:S,imgSource:[x],demSource:g,lon0:90,minLevel:2});n.scene.add(i);const a=i.geo2pos(new p(95,29.65));n.controls.target.set(a.x,a.y,0);n.camera.position.set(a.x,a.y-80,50);
