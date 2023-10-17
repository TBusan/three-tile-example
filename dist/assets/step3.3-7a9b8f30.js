var A=Object.defineProperty;var D=(t,r,e)=>r in t?A(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var i=(t,r,e)=>(D(t,typeof r!="symbol"?r+"":r,e),e);import"./modulepreload-polyfill-3cfb730f.js";import{g as z}from"./lil-gui.module.min-a1e98589.js";import{V as w,U as S,aq as j,O as I,a0 as R,$ as Z,Z as W,Y as K,W as X,C as O,a3 as T,X as Y,c as q,G,l as U,S as V,o as N,T as B,h as Q,K as H,j as J,s as $,m as ee,d as F,e as te,aE as oe,af as ae}from"./util-bf818b98.js";import{a as k,T as f}from"./tween.module-97c976ec.js";import{S as re}from"./stats.module-8826aad6.js";const h=new j(0,0,0,"YXZ"),l=new w,ne={type:"change"},se={type:"lock"},ie={type:"unlock"},P=Math.PI/2;class ce extends S{constructor(r,e){super(),this.camera=r,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=de.bind(this),this._onPointerlockChange=me.bind(this),this._onPointerlockError=he.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(r){return r.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(r){const e=this.camera;l.setFromMatrixColumn(e.matrix,0),l.crossVectors(e.up,l),e.position.addScaledVector(l,r)}moveRight(r){const e=this.camera;l.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(l,r)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function de(t){if(this.isLocked===!1)return;const r=t.movementX||t.mozMovementX||t.webkitMovementX||0,e=t.movementY||t.mozMovementY||t.webkitMovementY||0,o=this.camera;h.setFromQuaternion(o.quaternion),h.y-=r*.002*this.pointerSpeed,h.x-=e*.002*this.pointerSpeed,h.x=Math.max(P-this.maxPolarAngle,Math.min(P-this.minPolarAngle,h.x)),o.quaternion.setFromEuler(h),this.dispatchEvent(ne)}function me(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(se),this.isLocked=!0):(this.dispatchEvent(ie),this.isLocked=!1)}function he(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}I.DEFAULT_UP.set(0,1,0);let p=!1,b=!1,y=!1,L=!1,E=!1,M=performance.now();const c=new w,g=new w;class le extends S{constructor(e,o=new w(0,-1e3,1e4)){super();i(this,"scene");i(this,"renderer");i(this,"camera");i(this,"controls");i(this,"ambLight");i(this,"dirLight");i(this,"container");i(this,"_stats");i(this,"_clock",new R);i(this,"_autoForward",!1);i(this,"cameraZ",8);this.container=e,this.renderer=this._createRenderer(),this.scene=this._createScene(),this.camera=this._createCamera(o),this.controls=this._createControls(this.camera,e),this.scene.add(this.controls.getObject()),this._stats=this.createStats(),e.appendChild(this._stats.dom),this.ambLight=this._createAmbLight(),this.scene.add(this.ambLight),this.dirLight=this._createDirLight(),this.scene.add(this.dirLight),this.container.appendChild(this.renderer.domElement),this.container.addEventListener("click",n=>{this.controls.isLocked?n.button===2&&this.controls.unlock():this.controls.lock()}),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.animate()}get autoForward(){return this._autoForward}set autoForward(e){p=e,this._autoForward=e}createStats(){const e=new re;return e.dom.style.left="",e.dom.style.top="",e.dom.style.right="0px",e.dom.style.bottom="0px",e.dom.style.zIndex="100",e}_createDirLight(){const e=new Z(16777215,.5);return e.target.position.copy(this.camera.position),e.position.set(-1e3,-2e3,1e4),e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=100,e.shadow.camera.left=-10,e.shadow.camera.right=10,e.shadow.camera.top=10,e.shadow.camera.bottom=-10,e.shadow.mapSize.setScalar(1024),e}_createAmbLight(){return new W(16777215,.7)}_createControls(e,o){const n=new ce(e,o);n.minPolarAngle=Math.PI/1.9,n.maxPolarAngle=Math.PI;const d=function(m){switch(m.code){case"ArrowUp":case"KeyW":p=!0;break;case"ArrowLeft":case"KeyA":y=!0;break;case"ArrowDown":case"KeyS":b=!0;break;case"ArrowRight":case"KeyD":L=!0;break;case"Space":E===!0&&(c.y+=350),E=!1;break}},v=function(m){switch(m.code){case"ArrowUp":case"KeyW":p=!1;break;case"ArrowLeft":case"KeyA":y=!1;break;case"ArrowDown":case"KeyS":b=!1;break;case"ArrowRight":case"KeyD":L=!1;break}};return document.addEventListener("keydown",d),document.addEventListener("keyup",v),n}_createCamera(e){const o=new K(80,1,.1,5e4);return o.position.copy(e),o.name="mainCamera",o}_createScene(){const o=new X;return o.background=new O(12312063),o.fog=new T(12312063,0),o}_createRenderer(){const e=new Y({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0,precision:"highp"});return e.shadowMap.enabled=!0,e.sortObjects=!0,e.setPixelRatio(window.devicePixelRatio),e}resize(){const e=this.container.clientWidth,o=this.container.clientHeight;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,o),this.camera.aspect=e/o,this.camera.updateProjectionMatrix(),this}animate(){requestAnimationFrame(this.animate.bind(this)),this._stats.update();const e=performance.now(),o=this.controls;if(o.isLocked===!0){p||(p=this.autoForward);const n=(e-M)/1e3;c.x-=c.x*10*n,c.z-=c.z*10*n,c.y-=9.8*300*n,g.z=Number(p)-Number(b),g.x=Number(L)-Number(y),g.normalize(),(p||b)&&(c.z-=g.z*this.cameraZ*5*n),(y||L)&&(c.x-=g.x*this.cameraZ*5*n),o.moveRight(-c.x*n),o.moveForward(-c.z*n),o.getObject().position.y+=c.y*n,o.getObject().position.y<this.cameraZ&&(c.y=0,o.getObject().position.y=this.cameraZ,E=!0)}M=e,this.renderer.render(this.scene,this.camera),this.dispatchEvent({type:"update",delta:this._clock.getDelta()})}}const s=q(F,ee);s.rotateX(-Math.PI/2);const pe=document.querySelector("#map"),x=s.project(85.7,28.3),a=new le(pe,new w(x.x-2,8,-x.y-6));a.camera.lookAt(x.x,5,-x.y);a.scene.add(s);s.addEventListener("tile-created",t=>{t.tile.receiveShadow=!0});const C=new G;s.add(C);const _=new U(new V,new N({map:new B().load("../../image/test.jpg"),transparent:!0}));_.castShadow=!0;_.receiveShadow=!0;a.container.addEventListener("click",t=>{var m;const r=a.controls.getObject();if(!a.controls.isLocked||t.button!=0)return;const e=(m=s.getLocationFromScreen(r,new Q(0,0)))==null?void 0:m.point;if(!e)return;const o=_.clone();o.scale.setScalar(a.cameraZ/40),C.add(o);const n=r.position.clone().applyMatrix4(s.matrixWorld.clone().invert());o.position.copy(n);const d=1e3;new k(o.position).to({x:e.x,y:e.y},d).easing(f.Easing.Quadratic.Out).start(),new k(o.position).to({z:e.z},d).easing(f.Easing.Quadratic.In).start().onComplete(()=>{setTimeout(()=>{o.removeFromParent(),o.geometry.dispose(),o.material.dispose()},10*d)}),new k(o.rotation).to({x:Math.PI,y:Math.PI,z:Math.PI},d).start();const v=r.position.y;new k(r.position).to({y:v+1},100).repeat(1).yoyo(!0).start(1)});a.container.addEventListener("mousewheel",t=>{a.controls.isLocked&&t instanceof WheelEvent&&(a.cameraZ+=t.deltaY/500)});a.addEventListener("update",t=>{f.update(),a.dirLight.position.set(1,3,0),a.dirLight.position.applyMatrix4(a.camera.matrixWorld),a.dirLight.updateMatrixWorld(),a.dirLight.target.position.set(0,2,-5),a.dirLight.target.position.applyMatrix4(a.camera.matrixWorld),a.dirLight.target.updateMatrixWorld()});const u={mapbox:()=>{s.imgSource=te,s.reload()},google:()=>{s.imgSource=F,s.reload()},bing:()=>{s.imgSource=oe,s.reload()},toXian:()=>{const t=s.project(108.94,34.3);a.camera.position.set(t.x,2,-t.y+5),a.cameraZ=2,a.camera.rotation.set(-.46,0,0)},toXiangGang:()=>{const t=s.project(114.18,22.3);a.camera.position.set(t.x,2,-t.y),a.cameraZ=2,a.camera.rotation.set(-.46,0,0)},toFushishan:()=>{const t=s.project(138.7322,35.35356);a.camera.position.set(t.x,5,-t.y+5),a.cameraZ=5,a.camera.rotation.set(-.46,0,0)}};(()=>{const t=new z,r=t.addFolder("环境");r.add(a.scene.fog,"density",1e-4,.01,1e-4).name("能见度系数"),r.add(a.ambLight,"intensity",.1,2,.1).name("环境光强度"),r.add(a.dirLight,"intensity",.1,2,.1).name("直射光强度");const e=t.addFolder("地图源");e.add(u,"mapbox"),e.add(u,"google").name("google(有偏移)"),e.add(u,"bing").name("bing(有偏移)");const o=t.addFolder("定位");o.add(u,"toXian").name("西安"),o.add(u,"toXiangGang").name("香港"),o.add(u,"toFushishan").name("富士山");const n=t.addFolder("控制");n.add(a,"cameraZ",0,10,.1).name("飞行海拔高度km").listen().onChange(d=>a.camera.position.setY(d)),n.add(a,"autoForward").name("自动前进")})();const ue=t=>{const r=new ae().setPath("../image/skybox/").load(["skybox_py.png","skybox_py.png","skybox_px.png","skybox_px.png","skybox_pz.png","skybox_pz.png"]);t.scene.background=r};ue(a);H(s);J(s);$(a,s);
