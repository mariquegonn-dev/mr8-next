import { HeaderNav } from "@/app/types/Header";
import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

type MainNavType = {
  items: HeaderNav;
};

export const MainNav = ({ items }: MainNavType) => {
  return (
    <>
      <S.List>
        <Link href="/">
          <Image
            priority
            className="transition-all duration-300 hover:opacity-90"
            width={90}
            height={36}
            alt="logo mr8"
            src="/assets/image/logo.png"
          />
        </Link>
        {items.mainNav.map(({ title, href, icon }) => (
          <S.ListItem $icon={icon ? true : false} key={title}>
            <Link href={href}>{title} </Link>
            {icon && (
              <Image
                className="mt-1"
                src={icon}
                width={10}
                height={6}
                alt="down icon"
              />
            )}
          </S.ListItem>
        ))}
      </S.List>
    </>
  );
};
