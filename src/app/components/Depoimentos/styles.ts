import tw from "tailwind-styled-components";

export const Container = tw.div`
  sm:mx-5
  mx-2
  rounded-[20px]
  bg-primaryBlack
  sm:py-10
  py-5
  text-primaryWhite
  sm:px-8
  px-4
`;

export const Title = tw.h2`
  text-center
  text-base
  sm:text-2xl
`;

export const Span = tw.span`
  font-bold
  text-primaryBlue
  underline
`;

export const GliderContent = tw.div`
  py-5
  sm:py-10
`;

export const TitleSecundary = tw.h2`
  text-center
  text-base
  sm:text-2xl
`;

export const Content = tw.div`
  mt-5
  sm:mt-10
  grid
  justify-center
`;
