"use client";

import { useState } from "react";
import { DotLottiePlayer, PlayerEvents } from "@dotlottie/react-player";
import Loading from "../utils/Loading/Loading";
import { twMerge } from "tailwind-merge";

type LottiePlayerProps = {
  src: string;
  className?: string;
};

export const LottiePlayer = ({ src, className }: LottiePlayerProps) => {
  const [loading, setLoading] = useState(true);

  const merge = twMerge("max-w-[400px]", className);

  return (
    <>
      {loading && <Loading />}

      <div className={merge}>
        <DotLottiePlayer
          src={src}
          autoplay
          loop
          onEvent={(event: PlayerEvents) => {
            if (event === PlayerEvents.Ready) {
              setLoading(false);
            }
          }}
        ></DotLottiePlayer>
      </div>
    </>
  );
};
