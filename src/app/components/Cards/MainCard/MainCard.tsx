import { CardsMain } from "@/app/types/Cards";
import { CheckIcon } from "../../Icons";
import * as S from "./styles";
import { Button } from "../../utils/Button";

type CardsProps = {
  cards: CardsMain;
  children: React.ReactNode;
};

export const MainCard = ({ cards, children }: CardsProps) => {
  return (
    <div className="mx-auto mt-0 max-w-7xl px-4 sm:mt-20">
      <S.Content>
        <S.Title>Muito mais que a sua aprovação!</S.Title>
        <S.List>
          {cards.cards.map((card) => (
            <S.ListItem key={card.title}>
              <div>{card.icon}</div>
              <S.TitleListItem>{card.title}</S.TitleListItem>
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
        </S.List>

        {children}

        <S.TitleAction>O que você está esperando?</S.TitleAction>
        <Button
          title="Quero ser aprovado"
          href="/pre-matricula"
          color="primaryWhite"
          colorHover="random"
        />
      </S.Content>
    </div>
  );
};
