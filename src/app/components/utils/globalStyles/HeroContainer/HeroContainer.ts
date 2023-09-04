import tw from "tailwind-styled-components";

type TypeProps = {
  $white?: boolean;
};

export const Container = tw.div<TypeProps>`
  grid
  items-center
  sm:gap-10
  gap-5
  px-4
  text-primaryWhite
  ${(props) => (props.$white ? "text-primaryWhite" : "text-primaryBlack")}
  lg:grid-cols-2
`;

export const ContentImage = tw.div`
  grid
  justify-center
`;

export const ContentMain = tw.div`
  grid
  sm:gap-7
  gap-5
`;

export const Title = tw.h1`
  text-3xl
  font-bold
  sm:text-6xl
`;

export const Description = tw.p`
  text-base
  sm:text-xl
`;

export const ButtonAction = tw.div`
  flex
  gap-5
`;
