"use client";

import { DepoimentosMain } from "@/app/types/Depoimentos";

import Glider from "react-glider";
import "glider-js/glider.min.css";
import "./depoimentos.css";
import { useMedia } from "@/app/hooks/useMedia";

type CardProps = {
  items: DepoimentosMain;
};

export const DepoimentosCard = ({ items }: CardProps) => {
  const media = useMedia("(max-width: 640px)");
  const slides = media ? 1.2 : 2;

  return (
    <Glider
      className="mx-auto max-w-[1000px]"
      hasDots
      slidesToShow={slides}
      slidesToScroll={slides}
      scrollLock
      draggable
      hasArrows={media ? false : true}
    >
      {items.depoimentos.map((item) => (
        <div
          key={item.title}
          className="relative m-4 rounded-[20px] bg-primaryBlue p-4 text-primaryWhite"
        >
          <div className="flex items-center gap-5 after:absolute after:left-0 after:top-28 after:w-full after:border-b-2 after:border-primaryWhite after:content-['']">
            <div className="h-20 w-20 rounded-full bg-primaryBlack"></div>
            <div>
              <p>{item.title}</p>
              <p>{item.curso}</p>
            </div>
          </div>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            facilis, iusto vitae sapiente optio iure incidunt neque est dicta,
            nihil nisi, harum aliquam magni deserunt!
          </p>
        </div>
      ))}
    </Glider>
  );
};
