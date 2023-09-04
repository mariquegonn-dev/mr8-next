export type FaqType = {
  pergunta: string;
  resposta: string;
  link?: string;
  href?: string;
};

export type FaqMain = {
  faq: FaqType[];
};
