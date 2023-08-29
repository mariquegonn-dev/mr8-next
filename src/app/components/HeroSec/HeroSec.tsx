"use client";

import * as S from "@/app/components/utils/globalStyles/HeroContainer";
import Link from "next/link";
import { Button } from "../utils/Button";
import { ButtonIcon } from "../utils/ButtonIcon/ButtonIcon";
import { BookIcon } from "../Icons";

type HeroSecProps = {
  children: React.ReactNode;
};

export const HeroSec = ({ children }: HeroSecProps) => {
  return (
    <S.Container>
      <S.ContentMain>
        <S.Title>
          Conheça o mr8<span className="text-primaryYellow">!</span>
        </S.Title>
        <S.Description>
          No nosso site você poderá ver comentários e depoimentos de ex-alunos,
          além de ficar por dentro do que estamos postando nas redes sociais!
          Acesse o menu para mais informações, ou{" "}
          <Link
            href="/contato"
            className="text-primaryYellow hover:text-secundaryYellow underline transition-colors duration-300"
          >
            contate-nos!
          </Link>
        </S.Description>
        <S.ButtonAction>
          <Button
            title="pré ifba"
            href="/cursos/pre-ifba"
            color="primaryYellow"
          />
          <ButtonIcon
            title="pré enem"
            href="/cursos/pre-enem"
            icon={<BookIcon size={24} />}
          />
        </S.ButtonAction>
      </S.ContentMain>

      <S.ContentImage $start={false}>{children}</S.ContentImage>
    </S.Container>
  );
};
