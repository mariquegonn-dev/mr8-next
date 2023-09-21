import { Button } from "../utils/Button";
import { ButtonIcon } from "../utils/ButtonIcon/ButtonIcon";
import { PhoneIcon, WhatsappIcon } from "../Icons";
import * as S from "@/app/components/utils/globalStyles/HeroContainer";

type HeroProps = {
  children: React.ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <div className="mx-auto max-w-7xl pt-32 sm:pt-48">
      <S.Container $white={true}>
        <S.ContentMain>
          <S.Title>O curso que mais te prepara!</S.Title>
          <S.Description>
            São mais de{" "}
            <span className="font-bold underline">200 alunos aprovados</span> em
            diversas modalidades! Top, né? Aprenda de forma simples e divertida
            junto a professores formados na área e com muitos anos de
            experiência.
          </S.Description>
          <S.ButtonAction>
            <Button
              className="bg-primaryWhite text-primaryBlue hover:animate-pulseTest hover:bg-primaryWhite"
              href="/pre-matricula"
              title="pré matrícula"
            />
            <ButtonIcon
              href="https://wa.me/5571987665453"
              title="whatsapp"
              icon={<WhatsappIcon size={24} />}
            />
          </S.ButtonAction>
        </S.ContentMain>

        <S.ContentImage>{children}</S.ContentImage>
      </S.Container>
    </div>
  );
};
