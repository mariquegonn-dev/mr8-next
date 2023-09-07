export type FooterSublinkType = {
  title: string;
  subtitle: {
    title: string;
    href: string;
  }[];
};

export type FooterLinkType = {
  title: string;
  href: string;
};

export type FooterMain = {
  sublinks: FooterSublinkType[];
  links: FooterLinkType[];
};
