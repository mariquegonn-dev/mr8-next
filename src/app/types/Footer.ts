export type FooterType = {
  title: string;
  link?: string;
  sublinks?: {
    title: string;
    href: string;
  }[];
};

export type FooterMain = {
  footer: FooterType[];
};
