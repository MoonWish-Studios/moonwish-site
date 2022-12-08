"use client";
import React, { Suspense, useEffect, useState } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
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
        // <div className="lottie-player">
        <Image
          className="lottie-player"
          priority={true}
          alt=""
          src="/animations/spaceman.svg"
          width={300}
          height={300}
        />
        // </div>
      )}

      <div className="text-404">We were unable to find the page you were looking for :(</div>
    </div>
  );
}
