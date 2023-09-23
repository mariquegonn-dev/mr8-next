export type MenuMobileType = {
  name: string;
  icon: React.ReactNode;
  current: boolean;
  children?: {
    name: string;
    href: string;
  }[];
  href?: string;
};

export type MenuMain = {
  menu: MenuMobileType[];
};
