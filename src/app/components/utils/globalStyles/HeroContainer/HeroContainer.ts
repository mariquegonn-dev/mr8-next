import tw from "tailwind-styled-components";

type ImageProps = {
  $start: boolean;
};

export const Container = tw.div`
  grid
  items-center
  gap-10
  px-4
  text-secundaryBlack
  lg:grid-cols-2
`;

export const ContentImage = tw.div<ImageProps>`
  grid
  ${(props) =>
    props.$start ? "lg:justify-start justify-center" : "lg:justify-end"}
`;

export const ContentMain = tw.div`
  grid
  gap-7
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
