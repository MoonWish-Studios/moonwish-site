"use client";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./SpaceBoi";
import HomeTypeWriter from "./HomeTypeWriter";

export default function CanvasScene() {
  return (
    <>
      <Canvas className="canvas" dpr={1} performance={{ min: 0.1 }}>
        <Scene />
      </Canvas>

      <Loader
        innerStyles={{ transform: "scale(2)", zIndex: "-999" }} // Flex layout style
        dataStyles={{ color: "white", fontFamily: "var(--josefin-sans)" }} // Text styles
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} // Text
      />
    </>
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
