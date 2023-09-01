"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { CardsMain } from "@/app/types/Cards";

import * as S from "../styles";
import { CheckIcon } from "../../Icons";

type CardMobileProps = {
  cards: CardsMain;
};

export const CardMobile = ({ cards }: CardMobileProps) => {
  const [message, setMessage] = useState(true);

  return (
    <div className="mt-5 block px-4 sm:hidden">
      {message ? (
        <p className="animate-bounce text-center text-primaryWhite/50">
          Deslize pro lado
        </p>
      ) : (
        ""
      )}
      <Swiper
        className="mx-auto h-[300px] max-w-[350px]"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {
          if (message) {
            setMessage(false);
          }
        }}
      >
        {cards.cards.map((card) => (
          <SwiperSlide
            className="rounded-3xl 
          bg-white p-4"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
