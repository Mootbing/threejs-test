/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "drei/useGLTF";

export default function FloppyDisk(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/flopdisk.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={[5, 5, 5]}>
      <group scale={[0.1, 0.9, 0.8]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.FloppyBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.FloppyWhite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials.FloppyColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials["FloppyBlack.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/flopdisk.gltf");
