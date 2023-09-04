"use client";

import { DepoimentosMain } from "@/app/types/Depoimentos";

import Glider from "react-glider";
import "glider-js/glider.min.css";
import "./depoimentos.css";
import * as S from "./styles";
import { useMedia } from "@/app/hooks/useMedia";

type CardProps = {
  items: DepoimentosMain;
};

export const DepoimentosCard = ({ items }: CardProps) => {
  const media = useMedia("(max-width: 640px)");
  const slides = media ? 1.1 : 2;

  return (
    <Glider
      className="mx-auto max-w-[1000px]"
      slidesToShow={slides}
      slidesToScroll={slides}
      draggable
      hasArrows={media ? false : true}
    >
      {items.depoimentos.map((item) => (
        <S.Content key={item.title}>
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
      ))}
    </Glider>
  );
};
