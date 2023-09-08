"use client";

import { FaqMain } from "@/app/types/Faq";
import { useState } from "react";
import { DownIcon } from "../../Icons";

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
            <DownIcon
              className={` transition-all duration-300 ${
                index === resposta ? "rotate-180" : ""
              }`}
              size={24}
              color="#fff"
            />
          </dt>
          <dd
            className={`bg-primaryBlack/50 p-4 ${
              resposta === index ? "block" : "hidden"
            }`}
          >
            <p className="animate-slideDownFAQ">{item.resposta}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
};
