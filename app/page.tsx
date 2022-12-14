"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  AsciiRenderer,
  Html,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  RoundedBox,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "./(components)/SpaceBoi.jsx";
import HomeTypeWriter from "./(components)/HomeTypeWriter";
import Image from "next/image";
import { CameraHelper, TOUCH } from "three";
import { lerp } from "three/src/math/MathUtils.js";
// imagine each folder as a page
// a page has the HTML, head.tsx is the <head> part of the HTML. We can add keywords, icons here to improve SEO for this specific page
// in layout.tsx - we have the body of the html, the {children} = this page.tsx file.
//         here, we can add navbars and footers, they act as a global page template across all so we don't write duplicate code
// page.tsx - the unique UI design for this page.

// so now we can navigate

// head.tsx + layout.tsx are optional files. PAGE.tsx is mandatory as it act as the page

export default function Home() {
  return (
    <div className="container">
      <Canvas className="canvas" dpr={1} performance={{ min: 0.1 }}>
        <Scene />
      </Canvas>
      <Loader
        innerStyles={{ transform: "scale(2)", zIndex: "-999" }} // Flex layout style
        dataStyles={{ color: "white", fontFamily: "var(--josefin-sans)" }} // Text styles
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} // Text
      />
    </div>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera fov={70} makeDefault name="Camera" position={[0.3, 7, 11]}>
        <pointLight castShadow intensity={1} />
        <HomeTypeWriter />
      </PerspectiveCamera>
      <ambientLight intensity={0.15} />
      <OrbitControls
        dampingFactor={0.01}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        // touches={{ ONE: TOUCH.DOLLY_PAN, TWO: TOUCH.ROTATE }}
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </>
  );
}
