export type NavItem = {
  title: string;
  href: string;
  icon?: string;
};

export type HeaderNav = {
  mainNav: NavItem[];
  loginNav: NavItem[];
};
