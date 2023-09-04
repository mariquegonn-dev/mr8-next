import React from "react";
import { Button } from "../utils/Button";
import { Insta } from "./Insta";
import { InstaConfig } from "@/app/config/Insta";

type DepoimentosProps = {
  children: React.ReactNode;
};

export const Depoimentos = ({ children }: DepoimentosProps) => {
  return (
    <div className="mx-1 justify-items-center rounded-[20px] bg-primaryBlack px-2 py-10 text-primaryWhite sm:mx-5 sm:px-8">
      <h2 className="mb-5 text-center text-base sm:text-2xl">
        Veja um pouco do que mais de{" "}
        <span className="cursor-pointer font-medium text-primaryBlue underline transition-all duration-200 hover:font-bold">
          1500 alunos
        </span>{" "}
        vivenciam durante o curso:
      </h2>
      {children}
      <h2 className="mt-10 text-center text-base sm:text-2xl">
        Você também pode ser eternizado em nossa página de{" "}
        <span className="cursor-pointer font-medium text-primaryBlue underline transition-all duration-200 hover:font-bold">
          aprovados!
        </span>{" "}
        Confira em
      </h2>
      <div className="mt-10 grid justify-center">
        <Button href="/aprovados" title="Alunos Aprovados" />
      </div>
      <Insta items={InstaConfig} />
    </div>
  );
};
