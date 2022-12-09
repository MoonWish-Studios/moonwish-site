"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import spaceman from "../../public/animations/spaceman.json";
import { useState } from "react";
export default function LottieAstronaut({ size }: { size: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Lottie
        className="lottie-player"
        animationData={spaceman}
        onDOMLoaded={() => {
          setLoaded(true);
        }}
        style={{
          width: size,
          height: size,
        }}
      />
      {loaded === false && (
        <Image
          className="lottie-player"
          priority={true}
          alt="Spaceman"
          src="/assets/graphics/spaceman.png"
          width={size}
          height={size}
        />
      )}
    </>
  );
}
