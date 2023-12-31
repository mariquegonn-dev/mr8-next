import tw from "tailwind-styled-components";

export const Nav = tw.nav`
  hidden  
  lg:flex
  gap-10
  justify-between
  max-w-screen-xl
  mx-auto
  px-4
`;

export const Content = tw.div`
  flex
  gap-10
  items-center
`;

export const List = tw.ul`
  flex
  items-center
  gap-10
`;

export const ListItem = tw.li<{ $icon?: boolean }>`
  ${(props) => (props.$icon ? "flex cursor-pointer items-center gap-1" : "")}
  transition-colors
  duration-300
  hover:text-primaryBlue
`;
