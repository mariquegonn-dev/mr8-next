"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import lottieBoy from "@/../../public/assets/lottie/boy.json";
import { useMedia } from "@/app/hooks/useMedia";

export const LottiePlayer = () => {
  const sizeScreen = useMedia("(max-width:640px)");

  const ternaryScreen = `${sizeScreen ? "250px" : "400px"}`;
  return (
    <Player
      autoplay
      loop
      src={lottieBoy}
      style={{
        height: ternaryScreen,
        width: ternaryScreen,
      }}
    >
      <Controls visible={false} />
    </Player>
  );
};
