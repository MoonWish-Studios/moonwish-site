"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import spaceman from "../../public/animations/spaceman.json";
import { useState } from "react";
export default function LottieAstronaut({ size }: { size: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="lottie-container">
      <Lottie
        className="lottie-player"
        animationData={spaceman}
        onDOMLoaded={() => {
          setLoaded(true);
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      {loaded === false && (
        <div className="lottie-player">
          <Image
            priority={true}
            alt="Spaceman"
            src="/assets/graphics/spaceman.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
}
