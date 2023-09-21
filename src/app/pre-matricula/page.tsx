"use client";

import { Aluno } from "./components/Steps/Aluno";
import { Responsavel } from "./components/Steps/Responsavel";
import { Curso } from "./components/Steps/Curso";
import { useStepStore } from "@/store/form";

const PreMatricula = () => {
  const { step, addStep }: any = useStepStore();

  const arrayTeste = [
    <Aluno key={step} />,
    <Curso key={step} />,
    <Responsavel key={step} />,
  ];

  const selectedStepComponent = arrayTeste[step] || <Aluno />;

  return (
    <section className="bg-primaryBlue pb-20 pt-48">
      <div className="mx-auto max-w-7xl">{selectedStepComponent}</div>
    </section>
  );
};

export default PreMatricula;
