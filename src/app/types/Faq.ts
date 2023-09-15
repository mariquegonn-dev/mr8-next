export type FaqType = {
  pergunta: string;
  resposta: string | string[];
  link?: string;
  href?: string;
  icon?: React.ReactNode;
  hrefTitle?: string;
};

export type FaqMain = {
  faq: FaqType[];
};
