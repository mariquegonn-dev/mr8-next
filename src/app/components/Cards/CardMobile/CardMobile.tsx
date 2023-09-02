"use client";

import { CardsMain } from "@/app/types/Cards";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import * as S from "../styles";
import { CheckIcon } from "../../Icons";

export type CardsProps = {
  cards: CardsMain;
};

export const CardMobile = ({ cards }: CardsProps) => {
  return (
    <div className="mt-10">
      <Glider
        className="mx-auto max-w-[350px]"
        hasDots
        slidesToShow={1.1}
        scrollLock
        draggable
      >
        {cards.cards.map((card) => (
          <div
            className="mb-2 
          ml-2 h-[350px] rounded-3xl  bg-white p-4"
            key={card.title}
          >
            <div>{card.icon}</div>
            <S.Title>{card.title}</S.Title>
            <S.ListSecundary>
              {card.tags.map((tag) => (
                <S.ListItemSecundary key={tag}>
                  <CheckIcon color="#111" width={32} height={32} /> <p>{tag}</p>
                </S.ListItemSecundary>
              ))}
            </S.ListSecundary>
          </div>
        ))}
      </Glider>
    </div>
  );
};
