import { FaqMain } from "@/app/types/Faq";

type FaqDDProps = {
  items: FaqMain;
};

export const FaqDD = ({ items }: FaqDDProps) => {
  return (
    <dl>
      {items.faq.map((item) => (
        <>
          <dt key={item.pergunta}>{item.pergunta}</dt>
        </>
      ))}
    </dl>
  );
};
