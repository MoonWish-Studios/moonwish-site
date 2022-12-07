"use client";
import React, { Suspense, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import astro404 from "../../public/animations/404-lottie.json";
import lottie from "lottie-web";

export default function Custom404() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".lottie-player")!,
      path: "/animations/data.json",
      renderer: "svg",
    });

    return () => lottie.destroy();
  }, []);
  return (
    <div className="fill-screen">
      <div>
        <div className="lottie-player" />

        <div>We were unable to find the page you were looking for :(</div>
      </div>
    </div>
  );
}
