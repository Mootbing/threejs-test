import React, {Suspense, useRef, useState} from "react";
import "./App.css"

import {Canvas, useFrame} from "react-three-fiber";

import {useSpring, a} from "@react-spring/three";

import { softShadows } from "drei/softShadows";
import {MeshWobbleMaterial} from "drei/MeshWobbleMaterial";
import { OrbitControls } from "drei/OrbitControls";

import Model from './components/Model';

const SpinningBox = ({position, args, speed, color}) => {

  const mesh = useRef(null);

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  useFrame(
    () => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01)
  );

  return (
    // <primitive object={fbx} />
    <a.mesh castShadow onClick={() => {setExpand(!expand)}} ref={mesh} position={position} scale={props.scale}>
      <boxBufferGeometry attach="geometry" args={args}/>
      <MeshWobbleMaterial attach="material" speed={speed} factor={0.6} color={color}/>
    </a.mesh>
  );
}

softShadows();

function App() {

  return (
    <div className="App" style={{position: "absolute", width: "100%", height:  "100%"}}>
      <Canvas shadows colorManagement camera={{position: [-5, 2, 10], fov: 40}} className="fp">
        <ambientLight intensity={0.3}></ambientLight>
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0005}
          shadow-camera-near={0.01}
          shadow-camera-far={40}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={-10}
          shadow-camera-bottom={10}
        />
        <pointLight position={[-10, 0, -20]} intensity={1.5}/>

        <group>
          <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0, -1, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity="0.3"/>
            {/* <meshStandardMaterial attach="material" color="white" /> */}
          </mesh>
        </group>

        <SpinningBox position={[0, 1, 2]} args={[3, 2, 1]} speed={3} color="lightblue"/>
        <SpinningBox position={[2, 4, 1]} args={[3, 2, 1]} speed={2}  color="pink"/>
        <SpinningBox position={[4, 3, 5]} args={[3, 2, 1]} speed={6}  color="orange"/>
        

        <OrbitControls />
      </Canvas>
      
    </div>
  );
}

export default App;
