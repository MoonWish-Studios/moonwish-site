import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import TypewriterC from "./TypewriterC";
import Button from "./Button/Button";
import { lerp } from "three/src/math/MathUtils";

export default function HomeTypeWriter() {
  const groupRef = useRef();

  //animate name to follow mouse
  useFrame(({ mouse, clock }) => {
    if (groupRef.current !== undefined && groupRef.current.rotation != undefined) {
      groupRef.current.rotation.x = lerp(
        groupRef.current.rotation.x,
        (-mouse.y * Math.PI) / 8,
        0.1
      );
      groupRef.current.rotation.y = lerp(groupRef.current.rotation.y, (mouse.x * Math.PI) / 8, 0.1);
    }
  });
  return (
    <group ref={groupRef}>
      <Html
        zIndexRange={[0, 0]}
        transform
        position={[0, 5.5, 0]}
        rotation={[0.2, 0, 0]}
        center
        fullscreen
        scale={0.45}
      >
        <main className="main">
          <TypewriterC />
          <Button />
        </main>
      </Html>
    </group>
  );
}
