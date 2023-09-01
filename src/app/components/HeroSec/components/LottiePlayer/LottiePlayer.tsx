"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useMedia } from "@/app/hooks/useMedia";

type LottiePlayerProps = {
  src: object;
};

export const LottiePlayer = ({ src }: LottiePlayerProps) => {
  const sizeScreen = useMedia("(max-width:640px)");

  const ternaryScreen = `${sizeScreen ? "250px" : "400px"}`;
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{
        height: ternaryScreen,
        width: ternaryScreen,
      }}
    >
      <Controls visible={false} />
    </Player>
  );
};
