import { HeaderNav } from "@/app/types/Header";
import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { Logo } from "../Logo/Logo";

type MainNavType = {
  items: HeaderNav;
};

export const MainNav = ({ items }: MainNavType) => {
  return (
    <S.Nav aria-label="menu">
      <S.Content>
        <Logo />
        <S.List>
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
      </S.Content>
      <S.List>
        {items.loginNav.map(({ title, href }) => (
          <S.ListItem key={title}>
            <Link
              className={
                title === "pré matrícula"
                  ? "text-primaryWhite hover:bg-secundaryBlue rounded-lg bg-primaryBlue p-2 transition-colors duration-300"
                  : ""
              }
              href={href}
            >
              {title}
            </Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Nav>
  );
};
