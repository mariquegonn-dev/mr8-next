import tw from "tailwind-styled-components";

export const Title = tw.h1`
  mt-5
  sm:mt-10
  text-center
  text-3xl
  font-bold
  text-primaryWhite
  sm:text-6xl
`;

export const List = tw.ul`
  mt-5
  sm:mt-10
  flex
  flex-wrap
  justify-center
  gap-5
`;

export const ListItem = tw.li`
  rounded-[10px]
  border-2
  border-transparent
  transition-colors
  duration-300
  hover:border-primaryBlue
`;

export const ButtonContent = tw.div`
  mt-5
  sm:mt-10
  grid
  justify-center
`;
