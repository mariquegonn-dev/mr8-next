import { LottiePlayer } from "@/app/components/LottiePlayer";

type ContainerProps = {
  src: string;
};

export const ContainerImage = ({ src }: ContainerProps) => {
  return (
    <div className="grid justify-items-center p-8">
      <div className="relative">
        <LottiePlayer src={src} />
      </div>
      <h2 className="text-2xl font-medium">Bem vindo(a) ao Mr8!</h2>
      <p className="font-light">Venha fazer parte da nossa história!</p>
    </div>
  );
};
