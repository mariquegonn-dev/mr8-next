"use client";

import { DownIcon } from "@/app/components/Icons";
import cn from "@/app/functions/ClassName/cn";
import { useMedia } from "@/app/hooks/useMedia";
import { MenuMain } from "@/app/types/MenuMobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuProps = {
  menu: MenuMain;
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};
export default function SideBar({
  menu,
  isOpenMenu,
  handleToggleMenu,
}: MenuProps) {
  const media = useMedia("(max-width: 550px)");

  const [open, setOpen] = useState(-1);

  const handleClick = (index: number, isDropDown: boolean) => {
    if (isDropDown) {
      setOpen(-1);
      if (open !== index) {
        setTimeout(() => setOpen(index), 10);
      }
    }
  };

  return (
    <div
      className={cn(
        "absolute -right-8 top-16 h-screen w-[40vw] overflow-y-auto border-r border-gray-200 bg-white py-2",
        media && "w-screen",
      )}
    >
      <ul>
        {menu.menu.map((item, index) => (
          <li key={item.name} className="px-4">
            <Link
              href={item.href ? item.href : ""}
              className="flex items-center justify-between gap-3 rounded p-4 "
              onClick={() => {
                handleClick(index, item.children ? true : false);
                if (!item.children) {
                  setTimeout(() => handleToggleMenu(), 100);
                }
              }}
            >
              <div
                className={cn(
                  "hoverIcon flex items-center gap-3 hover:text-primaryBlue ",
                  open === index && "text-primaryBlue",
                )}
              >
                <span
                  className={cn("hoverIconSpan", open === index && "IconBlue")}
                >
                  {item.icon}
                </span>
                <h2 className="text-lg font-medium"> {item.name}</h2>
              </div>
              {item.children && (
                <DownIcon
                  size={18}
                  className={cn(
                    "-rotate-90 transition-all duration-300",
                    open === index && "rotate-0",
                  )}
                />
              )}
            </Link>

            <ul
              className={cn(
                "grid overflow-hidden transition-all duration-500",
                open === index ? "h-[140px]" : "h-0 ",
              )}
            >
              {open === index &&
                item.children?.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="m-3 grid rounded border bg-primaryBlue p-3 text-primaryWhite transition-all hover:bg-secundaryBlue"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
