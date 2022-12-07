"use client";
import React, { Suspense, useEffect } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Custom404() {
  return (
    <div className="fill-screen">
      <div>
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_qhzucuii.json"
          style={{
            height: "300px",
            width: "300px",
          }}
        />

        <div className="lottie-player">
          {/* <Image fill alt="" src="/animations/spaceman.svg" /> */}
        </div>
        <div>We were unable to find the page you were looking for :(</div>
      </div>
    </div>
  );
}
