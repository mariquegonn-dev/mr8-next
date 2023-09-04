import React from "react";
import { Button } from "../utils/Button";
import { Insta } from "./Insta";
import { InstaConfig } from "@/app/config/Insta";
import * as S from "./styles";

type DepoimentosProps = {
  children: React.ReactNode;
};

export const Depoimentos = ({ children }: DepoimentosProps) => {
  return (
    <div className="mx-auto max-w-7xl">
      <S.Container>
        <S.Title>
          Veja um pouco do que mais de <S.Span>1500 alunos</S.Span> vivenciam
          durante o curso:
        </S.Title>
        <S.GliderContent>{children}</S.GliderContent>
        <S.TitleSecundary>
          Você também pode ser eternizado em nossa página de{" "}
          <S.Span>aprovados!</S.Span> Confira em
        </S.TitleSecundary>
        <S.Content>
          <Button href="/aprovados" title="Alunos Aprovados" />
        </S.Content>
        <Insta items={InstaConfig} />
      </S.Container>
    </div>
  );
};
