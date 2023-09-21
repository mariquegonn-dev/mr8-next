"use client";

import { FaqMain } from "@/app/types/Faq";
import { useState } from "react";
import { CloseIcon, DownIcon, MapIcon } from "../../Icons";
import Link from "next/link";

type FaqDDProps = {
  items: FaqMain;
};

export const FaqDD = ({ items }: FaqDDProps) => {
  const [resposta, setResposta] = useState(0);

  function toggleResposta(index: number) {
    if (resposta === index) {
      setResposta(-1);
    } else {
      setResposta(index);
    }
  }

  return (
    <dl className="grid gap-5">
      {items.faq.map((item, index) => (
        <div key={item.pergunta}>
          <dt
            className="flex cursor-pointer items-center justify-between rounded-[8px_8px_0px_0px] bg-primaryBlack/50 p-4 text-xl font-semibold shadow-md"
            onClick={() => toggleResposta(index)}
          >
            {item.pergunta}{" "}
            <CloseIcon
              className={` transition-all duration-300 ${
                index === resposta ? "rotate-0" : "-rotate-45"
              }`}
              size={24}
              color="#fff"
            />
          </dt>
          <dd
            className={`overflow-hidden bg-primaryBlack/50 transition-all duration-500 ${
              resposta === index ? "max-h-[170px] md:max-h-[100px]" : "max-h-0"
            }`}
          >
            {typeof item.resposta === "string" ? (
              <p className="px-4 py-2">{item.resposta}</p>
            ) : (
              item.resposta.map((items) => (
                <p className="px-4 py-2" key={items}>
                  {items}
                </p>
              ))
            )}

            {item.link && (
              <p className="flex gap-1 px-4 py-2">
                {item.link}{" "}
                {item.href && (
                  <Link
                    target="_blank"
                    className="flex items-start  gap-1 underline"
                    href={item.href}
                  >
                    {item.hrefTitle}
                    <span>{item.icon}</span>
                  </Link>
                )}
              </p>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
};
