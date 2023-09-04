import tw from "tailwind-styled-components";

export const Content = tw.div`
  relative
  mx-2
  rounded-[20px]
  bg-primaryBlue
  p-4
  text-primaryWhite
`;

export const GliderItem = tw.div`
  flex
  items-center
  gap-5
  after:absolute
  after:left-0
  after:top-28
  after:w-full
  after:border-b-2
  after:border-primaryWhite
  after:content-['']"
`;

export const Description = tw.p`
  mt-10
`