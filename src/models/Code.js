/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "drei/useGLTF";

export default function Code(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/code.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[0, 1, 0]}
        scale={[0.32, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[0, 0.51, 0.42]}
        scale={0.1}
      />
    </group>
  );
}

useGLTF.preload("/code.gltf");