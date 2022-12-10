"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import spaceman from "../../public/animations/spaceman.json";
import { useState } from "react";
export default function LottieAstronaut() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="lottie-container">
      <Lottie
        className="lottie-player"
        animationData={spaceman}
        onDOMLoaded={() => {
          setLoaded(true);
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
            sizes="(max-width: 768px) 30vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      )}
    </div>
  );
}
