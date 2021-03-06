/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "drei/useGLTF";

export default function Paddle(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/paddle.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 5.55, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.04, 0.1, 3.16]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={nodes.Cylinder001_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 2.92, 0]}
        scale={[1.74, 0.66, 0.39]}
      />
    </group>
  );
}

useGLTF.preload("/paddle.gltf");
