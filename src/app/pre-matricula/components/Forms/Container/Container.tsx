import { useStepStore } from "@/store/form";
import { ContainerImage } from "./ContainerImage";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  const { step } = useStepStore();

  const src = [
    "/assets/lottie/formBoy.lottie",
    "/assets/lottie/formGirl.lottie",
    "/assets/lottie/formFinal.lottie",
  ];

  return (
    <div className="mx-2 rounded-[20px] border border-secundaryBlue bg-white shadow-[4px_4px_4px_0px_#0A35CC]">
      <div className="flex items-center justify-center gap-2 pt-7 md:py-7 ">
        <span className="grid h-8 w-8 items-center justify-items-center rounded-full bg-primaryBlue  text-primaryWhite">
          {step + 1}
        </span>
        {["", "", ""].map((item, index) => (
          <span
            key={index}
            className={`h-1 w-5 rounded-sm ${
              step === index ? "bg-primaryBlue" : "bg-primaryBlue/40"
            }`}
          >
            {item}
          </span>
        ))}
        <span className="grid h-8 w-8 items-center justify-items-center rounded-full bg-primaryBlue  text-primaryWhite">
          3
        </span>
      </div>

      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="p-8">{children}</div>

        {src
          .filter((src, index) => index === step && src)
          .map((src) => (
            <ContainerImage key={src} src={src} />
          ))}
      </div>
    </div>
  );
};
