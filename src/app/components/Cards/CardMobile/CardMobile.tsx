"use client";

import { CardsMain } from "@/app/types/Cards";

import * as S from "../MainCard/styles";
import * as E from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { CheckIcon } from "../../Icons";

export type CardsProps = {
  cards: CardsMain;
};

export const CardMobile = ({ cards }: CardsProps) => {
  return (
    <E.Container>
      <Swiper
        className="mySwiper"
        slidesPerView={1.2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {cards.cards.map((card) => (
          <SwiperSlide key={card.title}>
            <E.Card>
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
            </E.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </E.Container>
  );
};
