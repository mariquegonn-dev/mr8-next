import { InstaMain } from "@/app/types/Insta";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../utils/Button";
import * as S from "./styles";

type InstaProps = {
  items: InstaMain;
};

export const Insta = ({ items }: InstaProps) => {
  return (
    <div>
      <S.Title>
        Nos acompanhe no <span className="text-primaryBlue">Insta!</span>
      </S.Title>

      <S.List>
        {items.insta.map((item, index) => (
          <S.ListItem key={index * Math.random()}>
            <Link href={item.href}>
              <Image
                src={item.src}
                width={272.55}
                height={350}
                alt="instagram image"
              />
            </Link>
          </S.ListItem>
        ))}
      </S.List>

      <S.ButtonContent>
        <Link
          href="https://www.instagram.com/mr8cursosoficial/"
          className="animate-pulseTest rounded-lg bg-primaryBlue p-2 font-bold text-primaryWhite transition-colors duration-300 hover:bg-secundaryBlue sm:animate-none"
          target="_blank"
        >
          Siga-nos!
        </Link>
      </S.ButtonContent>
    </div>
  );
};
