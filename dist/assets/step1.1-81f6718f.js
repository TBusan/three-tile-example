import"./modulepreload-polyfill-3cfb730f.js";import{M as t,t as c,p as r,f as a,g as d,y as i,_ as n,L as l,a as m}from"./util-bf818b98.js";const s=document.querySelector("#map"),u=new t(s),o=m,e=c.create({imgSource:new r(o),demSource:new a(o),projCenterLon:90,minLevel:2,maxLevel:18});u.scene.add(e);document.querySelector("#mapbox").addEventListener("click",()=>{e.imgSource=new r(o),e.reload()});document.querySelector("#google").addEventListener("click",()=>{e.imgSource=new d("y"),e.reload()});document.querySelector("#bing").addEventListener("click",()=>{e.imgSource=new i,e.reload()});document.querySelector("#gd").addEventListener("click",()=>{e.imgSource=[new n("6"),new n("8")],e.reload()});document.querySelector("#tx").addEventListener("click",()=>{e.imgSource=[new l,new n("8")],e.reload()});
