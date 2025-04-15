
import React from 'react'
import{ useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

type GLTFResult = {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {
    [key: string]: THREE.Material
  }
}

export function Model(props: React.ComponentProps<'group'>) {
  const gltf = useGLTF('/objetc.glb');
  const nodes = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(gltf.nodes).filter(([_, node]) => node instanceof THREE.Mesh)
  ) as GLTFResult['nodes'];
  const materials = gltf.materials as GLTFResult['materials'];
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (meshRef.current) {
      const currentMaterial = meshRef.current.material;
      const newMaterial = new THREE.MeshStandardMaterial({
        color: "grey", // Mantener el color original
        map: (currentMaterial as THREE.MeshStandardMaterial).map,     // Mantener la textura original (si existe)
        // Puedes agregar más propiedades del MeshStandardMaterial aquí si lo deseas,
        // como roughness, metalness, envMap, etc.
      });
      meshRef.current.material = newMaterial;
      // Opcional: Disponer del material anterior si ya no lo necesitas
      if (Array.isArray(currentMaterial)) {
        currentMaterial.forEach((material) => {
          if (material.dispose) {
            material.dispose();
          }
        });
      } else if (currentMaterial.dispose) {
        currentMaterial.dispose();
      }
    }
  }, [meshRef, materials]);
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 3.1]} scale={0.001}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group position={[-79.536, 1415.11, -4299.849]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.detal_0_6_vodootliv_0.geometry}
              material={materials.vodootliv}
              position={[7.954, -141.511, 429.985]}
            />
          </group>
          <group position={[163.549, -3896.237, 1252.145]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['window_Material_#72_0'].geometry}
              material={materials.Material_72}
              position={[-16.355, 389.624, -125.214]}
            />
          </group>
          <group position={[-1877.664, 5556.573, 0.155]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['bath_walls_Material_#39_0'].geometry}
              material={materials.Material_39}
              position={[187.766, -555.657, -0.015]}
            />
          </group>
          <group position={[-1560.593, -706.949, 40.034]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['plinth_Material_#63_0'].geometry}
              material={materials.Material_63}
              position={[156.059, 70.695, -4.003]}
            />
          </group>
          <group position={[-1022.779, 2024.78, 986.862]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.handle_06_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[102.278, -202.478, -98.686]}
            />
          </group>
          <group position={[-799.801, 2316.832, 724.828]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rakovina_Chrome_Satin_0.geometry}
              material={materials.Chrome_Satin}
              position={[79.98, -231.683, -72.483]}
            />
          </group>
          <group position={[214.781, 2621.9, 850.154]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['detal_0_18_Material_#61_0'].geometry}
              material={materials.Material_61}
              position={[-21.478, -262.19, -85.015]}
            />
          </group>
          <group position={[-2574.919, 4317.8, -3135.708]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['kitchen_stoleshn_Material_#60_0'].geometry}
              material={materials.Material_60}
              position={[257.492, -431.78, 313.571]}
            />
          </group>
          <group position={[191.013, 2591.35, 875.733]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.kitchen_conf_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[-19.101, -259.135, -87.573]}
            />
          </group>
          <group position={[-807.92, 2474.389, 980.998]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.kitchen_axor_stark_kitchen_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[80.792, -247.439, -98.1]}
            />
          </group>
          <group position={[-70.408, 2484.789, 1613.965]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.kitchen_vitajka_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[7.041, -248.479, -161.396]}
            />
          </group>
          <group position={[-68.451, 2045.144, 452.535]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.kithen_glass_plita_glass_0.geometry}
              material={materials.plita_glass}
              position={[6.845, -204.514, -45.254]}
            />
          </group>
          <group position={[-27.338, -4811.513, 1371.406]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['outdoor_walls_Material_#40_0'].geometry}
              material={materials.Material_40}
              position={[2.734, 481.151, -137.141]}
            />
          </group>
          <group position={[-1877.664, 5556.573, 0.155]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['outside_window_Material_#44_0'].geometry}
              material={materials.Material_44}
              position={[187.766, -555.657, -0.015]}
            />
          </group>
          <group position={[214.432, 3950.443, 0.584]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.doorstep_def_0.geometry}
              material={materials.material}
              position={[-21.443, -395.044, -0.058]}
            />
          </group>
          <group position={[235.963, 3450.016, 772.524]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['electric_Material_#42_0'].geometry}
              material={materials.Material_42}
              position={[-23.596, -345.002, -77.252]}
            />
          </group>
          <group position={[-1095.836, 1020.608, 1908.468]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['lamp_above_table_Material_#43_0'].geometry}
              material={materials.Material_43}
              position={[109.584, -102.061, -190.847]}
            />
          </group>
          <group position={[-0.95, 969.298, 2730.725]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lampframe_ceeling01_def_0.geometry}
              material={materials.material}
              position={[0.095, -96.93, -273.073]}
            />
          </group>
          <group position={[-38.35, 752.434, -70.252]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['walls_clear_Material_#38_0'].geometry}
              material={materials.Material_38}
              position={[3.835, -75.243, 7.025]}
            />
          </group>
          <group position={[204.632, 735, 0]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['floor_Material_#57_0'].geometry}
              material={materials.Material_57}
              position={[-20.463, -73.5, 0]}
            />
          </group>
          <group position={[-364.015, 2185.063, 2389.392]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['kitchen_clear_Material_#59_0'].geometry}
              material={materials.Material_59}
              position={[36.401, -218.506, -238.939]}
            />
          </group>
          <group position={[1.88, 735.188, 2737.228]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['ceeling_Material_#50_0'].geometry}
              material={materials.Material_50}
              position={[-0.188, -73.519, -273.723]}
            />
          </group>
          <group position={[-603.724, -3542.5, 652.497]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_def_black_0.geometry}
              material={materials.def_black}
              position={[60.372, 354.25, -65.25]}
            />
          </group>
          <group position={[-603.681, -3542.299, 667.188]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['thermohead_Material_#69_0'].geometry}
              material={materials.Material_69}
              position={[60.368, 354.23, -66.719]}
            />
          </group>
          <group position={[-588.028, -3542.649, 642.741]} scale={10}>
            <group position={[58.803, 354.265, -64.274]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ventil_metall_20_0.geometry}
                material={materials.material_20}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ventil_metall_Chrome_Satin_0.geometry}
                material={materials.Chrome_Satin}
              />
            </group>
          </group>
          <group position={[-224.872, 3040.456, 869.612]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.knopka_sliva_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[22.487, -304.046, -86.961]}
            />
          </group>
          <group position={[1756.871, 1156.45, 875.138]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['stellaj2_Material_#66_0'].geometry}
              material={materials.Material_66}
               ref={meshRef}
              position={[-175.687, -115.645, -87.514]}
            />
          </group>
          <group position={[-308.5, 5011.286, 853.601]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.oras_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[30.85, -501.129, -85.36]}
            />
          </group>
          <group position={[92.06, 4770.662, 1272.051]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sushilka_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[-9.206, -477.066, -127.205]}
            />
          </group>
          <group position={[-0.95, 969.298, 2735.996]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.self_illum1_self_illum_0.geometry}
              material={materials.self_illum}
              position={[0.095, -96.93, -273.6]}
            />
          </group>
          <group position={[-128.285, -1296.437, 126.955]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.stolik_stolik_0.geometry}
              material={materials.stolik}
              position={[12.829, 129.644, -12.695]}
            />
          </group>
          <group position={[-1055.778, 993.279, 0.134]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['dining_table_Material_#52_0'].geometry}
              material={materials.Material_52}
              position={[105.578, -99.328, -0.013]}
            />
          </group>
          <group position={[-1095.836, 1020.608, 1908.468]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object1738_ceramics_0.geometry}
              material={materials.ceramics}
              position={[109.584, -102.061, -190.847]}
            />
          </group>
          <group position={[-1402.078, 1002.764, 787.129]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Vaza_02_Material_#49_0'].geometry}
              material={materials.Material_49}
              position={[140.208, -100.276, -78.713]}
            />
          </group>
          <group position={[-463.689, 2412.918, 839.716]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chainik_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[46.369, -241.292, -83.972]}
            />
          </group>
          <group position={[-20.742, -1032.668, 349.668]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['journal_Material_#58_0'].geometry}
              material={materials.Material_58}
              position={[2.074, 103.267, -34.967]}
            />
          </group>
          <group position={[219.736, -3410.949, 1397.41]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['curtains_uvs_Material_#51_0'].geometry}
              material={materials.Material_51}
              position={[-21.974, 341.095, -139.741]}
            />
          </group>
          <group position={[1103.061, 5086.864, 985.413]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['entrance_door_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-110.306, -508.686, -98.541]}
            />
          </group>
          <group position={[-307.944, 5077.928, 1440.491]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mirror_mirror_0.geometry}
              material={materials.mirror}
              position={[30.794, -507.793, -144.049]}
            />
          </group>
          <group position={[-307.944, 5077.928, 1440.491]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mirror_frame_frame_of_mirror_0.geometry}
              material={materials.frame_of_mirror}
              position={[30.794, -507.793, -144.049]}
            />
          </group>
          <group position={[-583.232, 4680.888, 639.169]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chrome_details_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[58.323, -468.089, -63.917]}
            />
          </group>
          <group position={[-583.232, 4680.888, 639.169]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object001732_def_0.geometry}
              material={materials.material}
              position={[58.323, -468.089, -63.917]}
            />
          </group>
          <group position={[-1195.461, 3874.979, 52.213]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Object002_Material_#46_0'].geometry}
              material={materials.Material_46}
              position={[119.546, -387.498, -5.221]}
            />
          </group>
          <group position={[191.013, 2591.35, 875.733]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Object1739_Material_#64_0'].geometry}
              material={materials.Material_64}
              position={[-19.101, -259.135, -87.573]}
            />
          </group>
          <group position={[1563.256, -413.042, 696.909]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cloth_Shape001577_Material_#45_0'].geometry}
              material={materials.Material_45}
              position={[-156.326, 41.304, -69.691]}
            />
          </group>
          <group position={[1126.175, -2934.648, 2155.785]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.provod_def_0.geometry}
              material={materials.material}
              position={[-112.618, 293.465, -215.579]}
            />
          </group>
          <group position={[1410.691, -3057.586, 1462.393]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere233_def_0.geometry}
              material={materials.material}
              position={[-141.069, 305.759, -146.239]}
            />
          </group>
          <group position={[-80.631, -1469.346, 2.503]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Plane03_Material_#41_0'].geometry}
              material={materials.Material_41}
              position={[8.063, 146.935, -0.25]}
            />
          </group>
          <group position={[-1417.708, 1024.57, 835.14]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.object_def_0.geometry}
              material={materials.material}
              position={[141.771, -102.457, -83.514]}
            />
          </group>
          <group position={[1966.553, -1293.662, 1778.515]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Ramki_2_Material_#35_0'].geometry}
              material={materials.Material_35}
              position={[-196.655, 129.366, -177.852]}
            />
          </group>
          <group position={[-36.874, 2298.61, 0]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box8423_table_0.geometry}
              material={materials.table}
              position={[3.687, -229.861, 0]}
            />
          </group>
          <group position={[-190.998, 2033.387, 729.337]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder001_Material_#2097628050_0'].geometry}
              material={materials.Material_2097628050}
              position={[19.1, -203.339, -72.934]}
            />
          </group>
          <group position={[-270.656, 2235.314, 391.636]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Line035_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[27.066, -223.531, -39.164]}
            />
          </group>
          <group position={[84.685, 2033.376, 726.826]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Text005_Material_#82_0'].geometry}
              material={materials.Material_82}
              position={[-8.469, -203.338, -72.683]}
            />
          </group>
          <group position={[1989.083, -1311.896, 518.016]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane005_plane_za_divanom_0.geometry}
              material={materials.plane_za_divanom}
              position={[-198.908, 131.19, -51.802]}
            />
          </group>
          <group position={[-79.536, 1415.11, -4299.849]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['otkosy001_Material_#62_0'].geometry}
              material={materials.Material_62}
              position={[7.954, -141.511, 429.985]}
            />
          </group>
          <group position={[168.96, -3911.113, 690.105]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box8424_window_glass_0.geometry}
              material={materials.window_glass}
              position={[-16.896, 391.111, -69.011]}
            />
          </group>
          <group position={[-687.86, 2664.453, 0]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box8425_def_0.geometry}
              material={materials.material}
              position={[68.786, -266.445, 0]}
            />
          </group>
          <group position={[327.759, -865.158, 2716.952]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.kreplenie003_Chrome_Satin_0.geometry}
              material={materials.Chrome_Satin}
              position={[-32.776, 86.516, -271.695]}
            />
          </group>
          <group position={[-108.011, -1311.022, 3234.658]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Sphere237_Material_#2125638307_0'].geometry}
              material={materials.Material_2125638307}
              position={[10.801, 131.102, -323.466]}
            />
          </group>
          <group position={[1976.628, -1422.109, 2171.629]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle02_metall_light_0.geometry}
              material={materials.metall_light}
              position={[-197.663, 142.211, -217.163]}
            />
          </group>
          <group position={[-1568.062, -2503.789, 1044.366]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Box8418_Chrome_Satin_0.geometry}
              material={materials.Chrome_Satin}
              position={[156.806, 250.379, -104.437]}
            />
          </group>
          <group position={[-1349.898, -2503.092, 1150.275]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder025_20_0.geometry}
              material={materials.material_20}
              position={[134.99, 250.309, -115.028]}
            />
          </group>
          <group position={[1410.402, -3056.764, 1621.211]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['lamp_ab_Material_#2125638286_0'].geometry}
              material={materials.Material_2125638286}
              position={[-141.04, 305.676, -162.121]}
            />
          </group>
          <group position={[1095.978, 5040.131, 2359.663]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Yuciken_BATTHA_cap_Yuciken_BATTHA_fase_0.geometry}
              material={materials.Yuciken_BATTHA_fase}
              position={[-109.598, -504.013, -235.966]}
            />
          </group>
          <group position={[1095.978, 5044.655, 2359.663]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Yuciken_BATTHA_base_Material_#73_0'].geometry}
              material={materials.Material_73}
              position={[-109.598, -504.466, -235.966]}
            />
          </group>
          <group position={[-1602.3, -1306.497, 1326.078]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Box008_Material_#71_0'].geometry}
              material={materials.Material_71}
              position={[160.23, 130.65, -132.608]}
            />
          </group>
          <group position={[-1481.717, -1306.497, 1326.078]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['tv_glass_Material_#70_0'].geometry}
              material={materials.Material_70}
              position={[148.172, 130.65, -132.608]}
            />
          </group>
          <group position={[-1101.487, 1450.803, 400.004]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['stul_sidenie001_Material_#67_0'].geometry}
              material={materials.Material_67}
              position={[110.149, -145.08, -40]}
            />
          </group>
          <group position={[-1101.487, 1450.803, 409.835]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chair001_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[110.149, -145.08, -40.983]}
            />
          </group>
          <group position={[-1195.421, 3509.54, 2259.358]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere232_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[119.542, -350.954, -225.936]}
            />
          </group>
          <group position={[-1112.142, 506.256, 400.004]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['stul_sidenie_Material_#68_0'].geometry}
              material={materials.Material_68}
              position={[111.214, -50.626, -40]}
            />
          </group>
          <group position={[-1112.142, 506.256, 409.835]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chair_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[111.214, -50.626, -40.983]}
            />
          </group>
          <group position={[-805.259, -2649.415, 136.662]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['armchair_Material_#36_0'].geometry}
              material={materials.Material_36}
              position={[80.526, 264.942, -13.666]}
            />
          </group>
          <group position={[1573.577, 38.651, 558.919]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['divan_brown_leather_Material_#48_0'].geometry}
              material={materials.Material_48}
              position={[-157.358, -3.865, -55.892]}
            />
          </group>
          <group position={[-1432.173, -2899.724, 0.441]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder19_black_plastic_0.geometry}
              material={materials.black_plastic}
              position={[143.217, 289.972, -0.044]}
            />
          </group>
          <group position={[-1076.017, -2412.552, 12.16]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder14_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[107.602, 241.255, -1.216]}
            />
          </group>
          <group position={[1762.972, -1303.404, 324.585]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['divan_white_cotton_Material_#54_0'].geometry}
              material={materials.Material_54}
              position={[-176.297, 130.34, -32.458]}
            />
          </group>
          <group position={[1483.304, -1304.31, 14.761]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.obj_03_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[-148.33, 130.431, -1.476]}
            />
          </group>
          <group position={[2205.185, 4062.164, -62.711]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['door_bath1_Material_#55_0'].geometry}
              material={materials.Material_55}
              position={[-220.518, -406.216, 6.271]}
            />
          </group>
          <group position={[2141.037, 4611.03, -57.098]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.AM109_031_01_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[-214.104, -461.103, 5.71]}
            />
          </group>
          <group position={[1505.279, 4653.002, 949.327]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.zamok_01_Chrome1_0.geometry}
              material={materials.Chrome1}
              position={[-150.528, -465.3, -94.933]}
            />
          </group>
          <group position={[-177.169, -3541.735, 595.618]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['radiator_inside2_Material_#2125638305_0'].geometry}
              material={materials.Material_2125638305}
              position={[17.717, 354.174, -59.562]}
            />
          </group>
          <group position={[-178.287, -3538.632, 430.87]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['radiator_polymesh_Material_#65_0'].geometry}
              material={materials.Material_65}
              position={[17.829, 353.863, -43.087]}
            />
          </group>
          <group position={[1410.399, -3057.476, 899.124]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lamp_chrome_Chrome_Satin_0.geometry}
              material={materials.Chrome_Satin}
              position={[-141.04, 305.748, -89.912]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/objetc.glb')