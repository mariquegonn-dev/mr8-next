import tw from "tailwind-styled-components";

export const List = tw.ul`
  hidden
  lg:flex
  items-center
  gap-10
`;

export const ListItem = tw.li<{ $icon?: boolean }>`
  ${(props) => (props.$icon ? "flex cursor-pointer items-center gap-1 " : "")}
  transition-colors
  duration-300
  hover:text-primaryBlue
`;
