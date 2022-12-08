"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import spaceman from "../../public/animations/spaceman.json";
export default function Custom404() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="fill-screen">
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

      <div className="text-404">We were unable to find the page you were looking for :(</div>
    </div>
  );
}
