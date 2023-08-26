import { Servicos } from "./components/Servicos";

type DropDownProps = {
  title: number;
};

export const DropDown = ({ title }: DropDownProps) => {
  const arrayTeste = [<Servicos key={title} />, "cursos", "produtos"];

  const selectedStepComponent = arrayTeste[title] || <></>;

  return (
    <>
      <div className="animate-slideContainer fixed left-0 top-[116px] w-full rounded-b-2xl shadow-custom">
        <div className="animate-slideDown mx-auto grid h-60 max-w-screen-2xl grid-cols-2 content-center px-8 text-primaryBlack">
          {selectedStepComponent}
        </div>
      </div>
    </>
  );
};
