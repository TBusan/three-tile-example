var m=Object.defineProperty;var l=(s,a,e)=>a in s?m(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e;var i=(s,a,e)=>(l(s,typeof a!="symbol"?a+"":a,e),e);import"./modulepreload-polyfill-3cfb730f.js";import{g}from"./lil-gui.module.min-a1e98589.js";import{O as p,U as w,W as u,X as x,Y as b,Z as f,$ as M,a0 as y,a1 as L,a2 as S,C,a3 as h,c as P,V as D,l as _,x as v,o as F,K as z,j as E,m as k,e as R}from"./util-bf818b98.js";import{M as A}from"./MapControls-9c73ad79.js";import{S as j}from"./stats.module-8826aad6.js";p.DEFAULT_UP.set(0,0,1);class I extends w{constructor(e,t){super();i(this,"scene",new u);i(this,"renderer",new x({antialias:!0,logarithmicDepthBuffer:!0}));i(this,"camera",new b(50,1,.1,1e3));i(this,"controls");i(this,"ambLight",new f(16777215,.1));i(this,"dirLight",new M(16777215,.8));i(this,"container");i(this,"_stats",new j);i(this,"_clock",new y);i(this,"_fogFactor",1);this.container=e,this.setRender(),this.setScene(),this.setCamera(t),this.controls=this.createControls(t),this.scene.add(this.ambLight),this.setDirLight(),this.setState(e),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.animate()}get fogFactor(){return this._fogFactor}set fogFactor(e){this._fogFactor=e,this.controls.dispatchEvent({type:"change",target:this.controls})}setState(e){this._stats.dom.style.left="",this._stats.dom.style.top="",this._stats.dom.style.right="0px",this._stats.dom.style.bottom="0px",this._stats.dom.style.zIndex="100",e.appendChild(this._stats.dom)}setDirLight(){const e=this.dirLight;e.target.position.copy(this.controls.target),e.position.set(e.target.position.x,e.target.position.y-100,100),e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=200,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,e.shadow.mapSize.setScalar(2048),this.scene.add(e),this.scene.add(new L(e)),this.scene.add(new S(e.shadow.camera))}setCamera(e){this.camera.position.set(e.x-10,e.y-20,e.z)}setScene(){this.scene.background=new C(11184810),this.scene.fog=new h(11184810)}setRender(){this.renderer.sortObjects=!0,this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement)}createControls(e){const t=new A(this.camera,this.container);return t.domElement=this.container,t.target.set(e.x,e.y,3),t.minDistance=.1,t.maxDistance=1e4,t.zoomSpeed=3,t.minPolarAngle=1,t.enableDamping=!0,t.listenToKeyEvents(window),t.addEventListener("change",()=>{const d=Math.max(t.getPolarAngle(),.2),c=Math.max(t.getDistance(),1);t.zoomSpeed=Math.max(Math.log(c),1.2),this.scene.fog instanceof h&&(this.scene.fog.density=d/c/4*this.fogFactor),this.camera.far=Math.min(c/d*8,6e4),this.camera.near=Math.min(Math.max(this.camera.far/100,.1),1),this.camera.updateProjectionMatrix()}),t}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this}animate(){this.controls.update(),this._stats.update(),this.renderer.render(this.scene,this.camera);const e=this._clock.getDelta();this.dispatchEvent({type:"update",delta:e}),requestAnimationFrame(this.animate.bind(this))}}const r=P(R,k),H=document.querySelector("#map"),n=r.project(86.92,27.95),o=new I(H,new D(n.x,n.y,10));o.scene.add(r);r.addEventListener("tile-created",s=>{s.tile.receiveShadow=!0,s.tile.castShadow=!0});const K=(()=>{const s=new _(new v(1,.3,128,16),new F({color:3355443,shininess:30,specular:13421772,emissive:0}));return s.position.set(n.x,n.y-5,8),s.castShadow=!0,s})();o.scene.add(K);(()=>{const s=new g,a=s.addFolder("地图控制");a.add(r.scale,"z",1,10,.1).name("高度拉伸倍数"),a.add(r.position,"z",-1,1,.01).name("高度偏移"),a.add(o.controls,"minPolarAngle",Math.PI/4,Math.PI/2,.1).name("最小倾角限制"),a.add(o.controls,"maxPolarAngle",Math.PI/4,Math.PI/2,.1).name("最大倾角限制"),a.add(o.controls,"enableDamping").name("惯性控制"),a.add(o.controls,"autoRotate").name("自动旋转"),a.add(r.loader,"showLoading").name("标记加载中瓦片"),a.add(r,"reload").name("重建瓦片树");const e=s.addFolder("环境设置");e.addColor(o.ambLight,"color").name("环境光颜色"),e.add(o.ambLight,"intensity",0,1,.1).name("环境光强度"),e.addColor(o.dirLight,"color").name("直射光颜色"),e.add(o.dirLight,"intensity",0,1,.1).name("直射光强度")})();z(r);E(r);
