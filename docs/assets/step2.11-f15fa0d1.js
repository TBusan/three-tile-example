import"./modulepreload-polyfill-3cfb730f.js";import{g as l}from"./lil-gui.module.min-a1e98589.js";import{V as r,af as g,m as h,a as f,d}from"./mapSource-79018fe4.js";import{S as C}from"./Sky-b0ec1489.js";import{c as y,a as v,b as w,s as x}from"./util-407bc242.js";const s=y(f,h),S=new r(87.4,27.8,3),M=new r(87.35,27.7,8),o=v("#map",s,S,M);var m;(m=o.scene.fog)==null||m.color.set(8947848);o.renderer.toneMapping=g;o.renderer.toneMappingExposure=.5;G();function G(){const t=new C;t.scale.setScalar(45e4),o.scene.add(t);const c=new r,e={turbidity:10,rayleigh:.5,mieCoefficient:.005,mieDirectionalG:.7,elevation:2,azimuth:180,exposure:o.renderer.toneMappingExposure};function a(){const i=t.material.uniforms;i.turbidity.value=e.turbidity,i.rayleigh.value=e.rayleigh,i.mieCoefficient.value=e.mieCoefficient,i.mieDirectionalG.value=e.mieDirectionalG;const p=d.degToRad(90-e.elevation),u=d.degToRad(e.azimuth);c.setFromSphericalCoords(1,p,u),i.sunPosition.value.copy(c),o.renderer.toneMappingExposure=e.exposure,o.renderer.render(o.scene,o.camera)}const n=new l;n.add(e,"turbidity",0,20,.1).onChange(a),n.add(e,"rayleigh",0,4,.001).onChange(a),n.add(e,"mieCoefficient",0,.1,.001).onChange(a),n.add(e,"mieDirectionalG",0,1,.001).onChange(a),n.add(e,"elevation",0,90,.1).onChange(a),n.add(e,"azimuth",-180,180,.1).onChange(a),n.add(e,"exposure",0,1,1e-4).onChange(a),a()}w(s);x(o,s);
