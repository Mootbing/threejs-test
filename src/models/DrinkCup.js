/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "drei/useGLTF";

export default function DrinkCupModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/DrinkCup.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        scale={[2, 1, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, 0.81, 0]}
        scale={[0.25, 1, 0.25]}
      />
    </group>
  );
}

useGLTF.preload("/DrinkCup.gltf");
