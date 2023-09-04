import tw from "tailwind-styled-components";

export const Container = tw.div`
  block
  sm:hidden
  mx-auto
  max-w-[280px]
`;

export const Card = tw.div`
  h-[350px]
  rounded-3xl
  bg-white p-4
  mx-1
`;
