import { Material, MeshBasicMaterial } from "three";
import * as tt from "../../src/three-tile";

/**
 * 测试加载器，仅用于测试，不加载实际数据
 */
export class MyLoader extends tt.TileLoader {
    /**
     * 加载几何体
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 几何体
     */
    // public loadGeometry(_tile: tt.Tile, onLoad: (geometry: BufferGeometry) => void) {
    //     const geometry = new PlaneGeometry();
    //     setTimeout(() => onLoad(geometry), 1);
    //     return geometry;
    // }

    /**
     * 加载纹理
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 纹理
     */
    public loadMaterial(
        _tile: tt.Tile,
        onLoad: (material: Material[]) => void
    ) {
        const material = [
            new MeshBasicMaterial({ wireframe: true, color: 0xffff00 }),
        ];
        setTimeout(() => onLoad(material), 1);
        return material;
    }
}
