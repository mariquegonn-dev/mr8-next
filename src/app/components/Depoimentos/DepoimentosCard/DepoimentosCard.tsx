"use client";

import { DepoimentosMain } from "@/app/types/Depoimentos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./depoimentos.css";
import { useMedia } from "@/app/hooks/useMedia";
import * as S from "./styles";

type CardProps = {
  items: DepoimentosMain;
};

export const DepoimentosCard = ({ items }: CardProps) => {
  const media = useMedia("(max-width: 800px)");
  const slides = media ? 1.2 : 2;

  return (
    <Swiper
      className="mySwiper"
      slidesPerView={slides}
      pagination={
        !media && {
          clickable: true,
        }
      }
      navigation={!media}
      modules={[Pagination, Navigation]}
    >
      {items.depoimentos.map((item) => (
        <SwiperSlide key={item.title} className="p-5 sm:p-10">
          <S.Content>
            <S.GliderItem>
              <div className="h-20 w-20 rounded-full bg-primaryBlack"></div>
              <div>
                <p>{item.title}</p>
                <p>{item.curso}</p>
              </div>
            </S.GliderItem>
            <S.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              facilis, iusto vitae sapiente optio iure incidunt neque est dicta,
              nihil nisi, harum aliquam magni deserunt!
            </S.Description>
          </S.Content>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
