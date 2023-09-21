import tw from "tailwind-styled-components";

export const Content = tw.div`
  grid
  justify-items-center
  sm:gap-10
  gap-5
`;

export const Title = tw.h1`
  text-3xl
  font-bold
  text-primaryWhite
  sm:text-6xl
`;

export const List = tw.ul`
  hidden
  grid-cols-1
  gap-7
  sm:grid
  sm:grid-cols-2
  lg:grid-cols-3
`;

export const ListItem = tw.li`
  rounded-3xl
  bg-white 
  p-4
  sm:p-10
  shadow-[8px_8px_0_#111]
  hover:animate-kickUp
  hover:cursor-cell
`;

export const TitleListItem = tw.h2`
  border-primaryGray
  mt-3
  border-b-[1px]
  pb-2
  text-2xl
  font-semibold
`;

export const ListSecundary = tw.ul`
  mt-5
  flex
  flex-col
  gap-2
`;

export const ListItemSecundary = tw.li`
  grid
  grid-cols-[auto_1fr]
  items-start
  gap-2
  text-base
  sm:text-xl
`;

export const TitleAction = tw.h2`
  text-xl
  text-primaryWhite
`;
