import { StaticImageData } from "next/image";

export type InstaType = {
  href: string;
  src: StaticImageData;
};

export type InstaMain = {
  insta: InstaType[];
};
