"use client";

import { useState } from "react";
import { DotLottiePlayer, PlayerEvents } from "@dotlottie/react-player";
import Loading from "../utils/Loading/Loading";
import cn from "@/app/functions/ClassName/cn";

type LottiePlayerProps = {
  src: string;
  className?: string;
};

export const LottiePlayer = ({ src, className }: LottiePlayerProps) => {
  const [loading, setLoading] = useState(true);

  const merge = cn("max-w-[400px]", className);

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
