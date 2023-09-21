import Link from "next/link";
import * as S from "../utils/globalStyles/HeroContainer";
import { FaqDD } from "./FaqDD";
import { FaqConfig } from "@/app/config/Faq";
import { WhatsappIcon } from "../Icons";

export const Faq = () => {
  return (
    <div className="mx-auto max-w-7xl py-10 sm:py-16">
      <S.Container $white>
        <S.ContentMain>
          <S.Title>Dúvidas Frequentes</S.Title>
          <S.Description>
            A seguir você poderá ver as principais dúvidas quanto aos nossos
            serviços, porém, caso não encontre o que procura, fale conosco
            diretamente!
            <span className="flex items-center justify-items-start gap-2">
              {" "}
              <Link
                className=" font-medium underline transition-all duration-300 hover:font-bold"
                href="https://wa.me/5571987665453"
                target="_blank"
              >
                Chama no zap!
              </Link>
              <WhatsappIcon width={24} />
            </span>
          </S.Description>
        </S.ContentMain>

        <FaqDD items={FaqConfig} />
      </S.Container>
    </div>
  );
};
