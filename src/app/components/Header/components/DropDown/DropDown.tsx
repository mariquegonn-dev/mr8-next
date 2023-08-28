import { Cursos } from "./components/Cursos";
import { Servicos } from "./components/Servicos";
import { Produtos } from "./components/Produtos";

type DropDownProps = {
  title: number;
};

export const DropDown = ({ title }: DropDownProps) => {
  const arrayTeste = [
    <Servicos key={title} />,
    <Cursos key={title} />,
    <Produtos key={title} />,
  ];

  const selectedStepComponent = arrayTeste[title] || <></>;

  return (
    <>
      <div className="fixed left-0 top-[116px] w-full animate-slideContainer rounded-b-2xl shadow-custom">
        <div className="mx-auto grid h-60 max-w-screen-2xl animate-slideDown grid-cols-2 content-center px-8 text-primaryBlack">
          {selectedStepComponent}
        </div>
      </div>
    </>
  );
};
