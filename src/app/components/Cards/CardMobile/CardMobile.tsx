"use client";

import { CardsMain } from "@/app/types/Cards";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import * as S from "../MainCard/styles";
import * as E from "./styles";
import { CheckIcon } from "../../Icons";

export type CardsProps = {
  cards: CardsMain;
};

export const CardMobile = ({ cards }: CardsProps) => {
  return (
    <E.Container>
      <Glider hasDots slidesToShow={1.1} draggable>
        {cards.cards.map((card) => (
          <E.Card key={card.title}>
            <div>{card.icon}</div>
            <S.TitleListItem>{card.title}</S.TitleListItem>
            <S.ListSecundary>
              {card.tags.map((tag) => (
                <S.ListItemSecundary key={tag}>
                  <CheckIcon color="#111" width={32} height={32} /> <p>{tag}</p>
                </S.ListItemSecundary>
              ))}
            </S.ListSecundary>
          </E.Card>
        ))}
      </Glider>
    </E.Container>
  );
};
