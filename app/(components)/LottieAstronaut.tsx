"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import spaceman from "../../public/animations/spaceman.json";
import { useState } from "react";
export default function LottieAstronaut() {
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
          width: 300,
          height: 300,
        }}
      />
      {loaded === false && (
        <Image
          className="lottie-player"
          priority={true}
          alt="Spaceman"
          src="/assets/graphics/spaceman.png"
          width={300}
          height={300}
        />
      )}
    </>
  );
}
