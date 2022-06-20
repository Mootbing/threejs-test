/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { Suspense, useRef, useState } from "react";
import { useGLTF } from "drei/useGLTF";
import {useSpring, a} from "@react-spring/three";

import {useFrame} from "react-three-fiber";

import DrinkCupModel from "../models/DrinkCup"
import Flower from "../models/Flower"
import FloppyDisk from "../models/FloppyDisk"
import Subway from "../models/Subway"
import Code from "../models/Code"
import Paddle from "../models/Paddle"

export default function Model({callback}) {

  const [expand, setExpand] = useState(false);
  const [active, setActive] = useState(0);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  useFrame(
    () => {
      if (!shiftYRef || !callback)
      {
        return;
      }

      shiftYRef.current.rotation.y += 0.01;

      callback(shiftYRef, onExpand);
    }
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const onExpand = (oldPos, newPos) => {

    const reverser = (oldPos > newPos ? 1: -1); //going forwards if true, else backwards

    setCurrentIndex(currentIndex + reverser);
    console.log("new location" + (currentIndex + reverser));

    for (var i = 0; i < peopleRef.length; i++)
    {
      peopleRef[i].current.position.y -= reverser * spacer;
      peopleRef[i].current.visible = i === currentIndex + reverser;
    }
  }

  const shiftYRef = useRef();

  const peopleRef = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ]

  const spacer = -6;

  return (
    <Suspense>
      <a.group ref={shiftYRef}>
        <a.group ref={peopleRef[0]} position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
          <Subway position={[-7, -5, 0]} scale={[2, 2, 2]}/>
          <FloppyDisk position={[10, 2, -10]}/>
          <DrinkCupModel position={[-10, 0, 10]}/>
        </a.group>
        <a.group ref={peopleRef[1]} position={[0, spacer, 0]} scale={[0.1, 0.1, 0.1]}>
          <Code position={[0, 0, 0]} scale={[5, 5, 5]}/>
          <Code position={[0, 0, 10]} scale={[2, 2, 2]}/>
          <Code position={[0, 0, -10]} scale={[2, 2, 2]}/>
        </a.group>
        <a.group ref={peopleRef[2]} position={[0, spacer * 2, 0]} scale={[0.1, 0.1, 0.1]}>
          <DrinkCupModel position={[0, 0, 0]}/>
          <Flower position={[10, 0, 0]}/>
          <DrinkCupModel position={[-10, 0, 0]}/>
        </a.group>
        <a.group ref={peopleRef[3]} position={[0, spacer * 3, 0]} scale={[0.1, 0.1, 0.1]}>
          <Paddle position={[0, 0, 0]}/>
          <DrinkCupModel position={[10, 0, 0]}/>
          <Flower position={[-10, 0, 0]}/>
        </a.group>
        <a.group ref={peopleRef[4]} position={[0, spacer * 4, 0]} scale={[0.1, 0.1, 0.1]}>
          <FloppyDisk position={[0, 0, 0]}/>
          <FloppyDisk position={[10, 0, 0]}/>
          <FloppyDisk position={[-10, 0, 0]}/>
        </a.group>
      </a.group>
    </Suspense>
  );
}

useGLTF.preload("/Flower.gltf");