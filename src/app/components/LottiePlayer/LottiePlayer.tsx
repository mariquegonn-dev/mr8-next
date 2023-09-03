"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useMedia } from "@/app/hooks/useMedia";
import { useState } from "react";

import "./loading.css";

type LottiePlayerProps = {
  src: object;
};

export const LottiePlayer = ({ src }: LottiePlayerProps) => {
  const [loading, setLoading] = useState(true);
  const sizeScreen = useMedia("(max-width:640px)");

  const ternaryScreen = `${sizeScreen ? "250px" : "400px"}`;

  return (
    <>
      {loading && <div className="loader"></div>}

      <Player
        onEvent={(event) => {
          if (event !== "load") {
            setLoading(false);
          }
        }}
        autoplay
        loop
        src={src}
        style={{
          height: loading ? "0px" : ternaryScreen,
          width: loading ? "0px" : ternaryScreen,
        }}
      >
        <Controls visible={false} />
      </Player>
    </>
  );
};
