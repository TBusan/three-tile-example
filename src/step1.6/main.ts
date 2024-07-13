import { ArrowHelper, Group, Vector3 } from "three";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import * as ms from "../mapSource";
import city from "../assets/city.json";
import "./style.css";

import * as util from "../util";
/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 0, 10000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

/*----------------------------------------------------------------*/
// 添加标签容器
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(viewer.container.clientWidth, viewer.container.clientHeight);
labelRenderer.domElement.style.position = "absolute";
viewer.container.appendChild(labelRenderer.domElement);

viewer.addEventListener("update", () => {
	labelRenderer.render(viewer.scene, viewer.camera);
});
window.addEventListener("resize", () =>
	labelRenderer.setSize(viewer.container.clientWidth, viewer.container.clientHeight),
);

/*----------------------------------------------------------------*/
const labelGroup = new Group();
map.add(labelGroup);

(() => {
	const dir = new Vector3(0, 0, 1);
	city.forEach((element) => {
		// 经纬度转换为场景坐标
		const lon = Number.parseFloat(element.value[0]),
			lat = Number.parseFloat(element.value[1]);
		const pos = map.geo2pos(new Vector3(lon, lat));
		const arrow = new ArrowHelper(dir, new Vector3(pos.x, pos.y, -2), 20);
		arrow.name = element.name;
		arrow.userData = element;
		labelGroup.add(arrow);
	});

	labelGroup.traverse((obj) => {
		if (obj instanceof ArrowHelper) {
			const label = document.createElement("span");
			label.className = "label";

			label.innerHTML = `${obj.name}`;
			label.title = `${JSON.stringify(obj.userData)}`;

			const css = new CSS2DObject(label);
			css.position.copy(obj.position.clone().add(new Vector3(0, 0, 1)));
			labelGroup.add(css);
		}
	});
})();

/*----------------------------------------------------------------*/
util.showLocation(viewer, map);
util.showLoadstate(map);
