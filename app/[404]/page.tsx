"use client";
import React, { Suspense } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Custom404() {
  return (
    <div className="fill-screen">
      <div>
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_2QSlz3Li88.json"
          className="lottie-404"
        />
        {/* <Lottie animationData={astronaut404Animation} loop={true} className="lottie-404" /> */}
        <div>We were unable to find the page you were looking for :(</div>
      </div>
    </div>
  );
}
