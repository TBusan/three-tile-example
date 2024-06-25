import{Y as c,a as d,q as i,b as l,a2 as g,e as m,P as x,J as u,T as L,af as f,r as p}from"./mapSource-8a728109.js";const h=(e=d,o)=>c.create({imgSource:e,demSource:o,lon0:90,minLevel:2,maxLevel:18}),b=(e,o,t)=>{const n=document.querySelector(e);if(!n)throw new Error(`Element ${e} is not found!`);return new i.GLViewer(n,o,o.clone().add(t))},k=(e,o="#load-state")=>{const t=document.querySelector(o);t&&(e.addEventListener("loading-start",n=>{t.innerHTML="Started: "+n.itemsLoaded+" of "+n.itemsTotal+" files."}),e.addEventListener("loading-progress",n=>{t.innerHTML="Loading: "+n.itemsLoaded+" of "+n.itemsTotal+" files."}),e.addEventListener("loading-complete",()=>{t.innerHTML="Loading complete!"}),e.addEventListener("loading-error",n=>{t.innerHTML="There was an error loading "+n}))},F=(e,o="#camera")=>{const t=document.querySelector(o);t&&e.controls.addEventListener("change",()=>{t.innerHTML=`摄像机:(${e.camera.position.x.toFixed(2)},
                               ${e.camera.position.y.toFixed(2)},
                               ${e.camera.position.z.toFixed(2)}) 
                           焦点:(${e.controls.target.x.toFixed(2)},
                                ${e.controls.target.y.toFixed(2)},
                                ${e.controls.target.z.toFixed(2)}) 
                          方位角:${e.controls.getAzimuthalAngle().toFixed(2)}° 
                          俯仰角:${e.controls.getPolarAngle().toFixed(2)}°`})},T=(e,o,t="#location")=>{const n=document.querySelector(t);if(n){const r=new l;e.container.addEventListener("pointermove",s=>{r.x=s.clientX/e.container.clientWidth*2-1,r.y=-(s.clientY/e.container.clientHeight)*2+1;const a=o.getLocalInfoFromScreen(e.camera,r);a?n.innerHTML=`经度:${a.location.x.toFixed(3)}°  
                            纬度:${a.location.y.toFixed(3)}°  
                            海拔:${(a.location.z*1e3).toFixed(1)}m
                            离摄像机距离:${a.distance.toFixed(3)}km `:n.innerHTML=""})}},M=(e,o="#attribution")=>{const t=document.querySelector(o);if(t){const n=()=>t.innerHTML="© "+e.attributions.join(" | © ");e.addEventListener("source-changed",n),n()}},E=e=>{const o=new g().setPath("../image/skybox/").load(["skybox_nx.png","skybox_px.png","skybox_ny.png","skybox_py.png","skybox_nz.png","skybox_pz.png"]);e.scene.background=o},$=e=>{const o=new m(new x,new u({map:new L().load("../image/tile0.png",t=>t.colorSpace=f)}));o.name="background",o.material.polygonOffsetFactor=10,o.material.polygonOffsetUnits=1,o.material.polygonOffset=!0,o.renderOrder=-1,o.translateZ(-.1),o.applyMatrix4(e.rootTile.matrix),e.add(o)};function S(e,o){var n;const t=new i.FakeEarth(((n=e.scene.fog)==null?void 0:n.color)||new p(0));t.name="fakeearth",t.applyMatrix4(o.rootTile.matrix),e.controls.addEventListener("change",()=>{t.visible=e.controls.getDistance()>3e3}),o.add(t)}export{b as a,k as b,h as c,$ as d,S as e,E as f,M as g,F as h,T as s};
