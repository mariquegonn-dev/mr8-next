"use client";

import { HeaderNav } from "@/app/types/Header";
import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { Logo } from "../Logo/Logo";
import { DropDown } from "../DropDown";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
type MainNavType = {
  items: HeaderNav;
};

export const MainNav = ({ items }: MainNavType) => {
  const [menuTitle, setMenuTitle] = useState(-1);

  const handleFunction = (index: number) => {
    setMenuTitle(-1);
    if (menuTitle !== index) {
      setTimeout(() => setMenuTitle(index), 10);
    }
  };

  return (
    <S.Nav aria-label="menu">
      <S.Content>
        <Logo />
        <S.List>
          {items.mainNav.map(({ title, href, icon }, index) => (
            <S.ListItem $icon={icon ? true : false} key={title}>
              {href !== "" ? (
                <Link href={href}>
                  <p>{title}</p>
                </Link>
              ) : (
                <button
                  className="flex items-center gap-1 py-3"
                  onClick={() => {
                    if (icon) {
                      handleFunction(index);
                    }
                  }}
                >
                  <p className={index === menuTitle ? "text-primaryBlue" : ""}>
                    {title}
                  </p>
                  {icon && (
                    <Image
                      className={`mt-1 transition-all duration-300 ${
                        menuTitle === index ? "rotate-180" : ""
                      }`}
                      src={icon}
                      width={10}
                      height={6}
                      alt="down icon"
                    />
                  )}
                </button>
              )}
            </S.ListItem>
          ))}
          {menuTitle !== -1 && (
            <OutsideClickHandler
              onOutsideClick={() => setTimeout(() => setMenuTitle(-1), 10)}
            >
              <DropDown title={menuTitle} />
            </OutsideClickHandler>
          )}
        </S.List>
      </S.Content>
      <S.List>
        {items.loginNav.map(({ title, href }) => (
          <S.ListItem key={title}>
            <Link
              className={
                title === "pré matrícula"
                  ? "rounded-lg bg-primaryBlue p-2 text-primaryWhite transition-colors duration-300 hover:bg-secundaryBlue"
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
