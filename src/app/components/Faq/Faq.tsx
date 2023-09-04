import Link from "next/link";
import * as S from "../utils/globalStyles/HeroContainer";
import { FaqDD } from "./FaqDD";
import { FaqConfig } from "@/app/config/Faq";

export const Faq = () => {
  return (
    <div className="mx-auto max-w-7xl py-16">
      <S.Container $white>
        <S.ContentMain>
          <S.Title>Dúvidas Frequentes</S.Title>
          <S.Description>
            Ao lado você poderá ver as principais dúvidas quanto aos nossos
            serviços, porém, caso não encontre o que procura,{" "}
            <Link
              className="font-medium underline transition-all duration-300 hover:font-bold"
              href="/contato"
            >
              entre em contato.
            </Link>
          </S.Description>
          <S.Description>
            Fale conosco diretamente!{" "}
            <Link
              className="font-medium underline transition-all duration-300 hover:font-bold"
              href="/contato"
            >
              Chama no zap!
            </Link>
          </S.Description>
        </S.ContentMain>

        <FaqDD items={FaqConfig} />
      </S.Container>
    </div>
  );
};
