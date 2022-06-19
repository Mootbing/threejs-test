import React, {Suspense, useRef, useState, useEffect} from "react";
import "./App.css"

import {Canvas, useFrame, useThree} from "react-three-fiber";

import { softShadows } from "drei/softShadows";
import { OrbitControls } from "drei/OrbitControls";

import Model from './components/Model';

softShadows();

function App() {

  let currentY = 0;

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const perFrame = (ref, callback) => {
    const pendingPos = ((scrollPosition * 0.01)) % 6;
    ref.current.scale.z = ref.current.scale.x = ref.current.scale.y = (pendingPos <= 3 ? pendingPos : 3 - (pendingPos - 3));

    if (Math.abs(lastScrollPosition - pendingPos) > 1)
    {
      callback(lastScrollPosition, pendingPos);
    }

    setLastScrollPosition(pendingPos);
  }

  return (
    <div className="App" style={{width: "100%", height: "100%", position: "absolute"}}>
      <Canvas className="canvas-frame" shadows camera={{position: [-5, 2, 10], fov: 40}} style={{top: "0", left: "0", position: "fixed"}}>
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
        <pointLight position={[10, 0, 20]} intensity={1.5}/>

        <group>
          <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0, -1, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity="0.3"/>
          </mesh>
        </group>

        <Suspense>
          <Model callback={perFrame}/>
        </Suspense>
      </Canvas>

      <main>
        <div class="text-over">
          <p style={{fontSize: "100px"}}>
            <br />
            Jason
            <br />
            <br />
            <br />
            <br />
            <br />
            Larry
            <br />
            <br />
            <br />
            <br />
            <br />
            Agni
            <br />
            <br />
            <br />
            <br />
            <br />
            Sushant
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
