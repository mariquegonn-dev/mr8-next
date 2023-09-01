import { CardsMain } from "@/app/types/Cards";
import { CheckIcon } from "../../Icons";
import * as S from "../styles";
import { Button } from "../../utils/Button";
import { CardMobile } from "../CardMobile";

type CardsProps = {
  cards: CardsMain;
  children: React.ReactNode;
};

export const MainCard = ({ cards, children }: CardsProps) => {
  return (
    <>
      <div className="grid justify-items-center gap-10 px-4">
        <h1 className="text-3xl font-bold text-primaryWhite sm:text-6xl">
          Muito mais que a sua aprovação!
        </h1>
        <ul className="hidden grid-cols-1 gap-7 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {cards.cards.map((card) => (
            <S.ListItem key={card.title}>
              <div>{card.icon}</div>
              <S.Title>{card.title}</S.Title>
              <S.ListSecundary>
                {card.tags.map((tag) => (
                  <S.ListItemSecundary key={tag}>
                    <CheckIcon color="#111" width={32} height={32} />{" "}
                    <p>{tag}</p>
                  </S.ListItemSecundary>
                ))}
              </S.ListSecundary>
            </S.ListItem>
          ))}
        </ul>
      </div>
      {children}
      <div className="mt-5 grid justify-items-center gap-5 sm:mt-10">
        <h2 className="text-xl text-primaryWhite">
          O que você está esperando?
        </h2>
        <Button
          title="Quero ser aprovado"
          href="/pre-matricula"
          color="primaryWhite"
          colorHover="random"
        />
      </div>
    </>
  );
};
