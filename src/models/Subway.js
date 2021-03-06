/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "drei/useGLTF";

export default function Subway(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/otherTrain.gltf");
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RedLocomotive_BogieB.geometry}
          material={nodes.RedLocomotive_BogieB.material}
          position={[2.5, 0.75, 0.3]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2, 2, 2]}
        />
        <group position={[-2.14, 0, -0.4]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.M_Rail_1.geometry}
            material={materials.M_Wood_Oak}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.M_Rail_2.geometry}
            material={nodes.M_Rail_2.material}
          />
        </group>
      </group>
    );
  }
  
  useGLTF.preload("/otherTrain.gltf");