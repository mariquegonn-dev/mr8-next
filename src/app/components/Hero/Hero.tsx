import Image from "next/image";
import { Button } from "../utils/Button";
import { ButtonIcon } from "../utils/ButtonIcon/ButtonIcon";
import { PhoneIcon } from "../Icons";
import * as S from "@/app/components/utils/globalStyles/HeroContainer";

type HeroProps = {
  children: React.ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <S.Container $start={true}>
      <S.ContentMain>
        <S.Title>O curso que mais te prepara!</S.Title>
        <S.Description>
          São mais de{" "}
          <span className="cursor-pointer font-medium underline transition-all duration-300 hover:font-bold">
            200 alunos aprovados
          </span>{" "}
          em diversas modalidades! Top, né? Aprenda de forma simples e divertida
          junto a professores formados na área e com muitos anos de experiência.
        </S.Description>
        <S.ButtonAction>
          <Button
            href="/pre-matricula"
            title="pré matrícula"
            color="primaryWhite"
            colorHover="random"
          />
          <ButtonIcon
            href="/contato"
            title="contato"
            icon={<PhoneIcon size={24} />}
          />
        </S.ButtonAction>
      </S.ContentMain>

      <S.ContentImage $start={false}>
        {/* <Image
          className="h-[300px] w-[500px] rounded-lg object-cover object-center sm:h-[400px]"
          src="/assets/image/gallery/heroPerfil.png"
          alt="alunos do mr8 em aula de campo"
          priority
          width={1504}
          height={703}
        /> */}
        {children}
      </S.ContentImage>
    </S.Container>
  );
};
