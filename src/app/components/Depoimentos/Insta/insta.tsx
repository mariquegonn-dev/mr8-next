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
          <S.ListItem key={index}>
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
        <Button href="/insta" title="Siga-nos!" />
      </S.ButtonContent>
    </div>
  );
};
