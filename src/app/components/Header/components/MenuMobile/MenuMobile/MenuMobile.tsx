"use client";

import { useMobile } from "@/app/hooks/useMobile";
import { Logo } from "../../Logo/Logo";
import { ToggleButton } from "../ToggleButton";
import Link from "next/link";
import { UserIcon } from "@/app/components/Icons";
import SideBar from "./components/SideBar/SideBar";
import { MenuMobileConfig } from "@/app/config/MenuMobile";

export const MenuMobile = () => {
  const { handleToggleMenu, isOpenMenu } = useMobile();

  return (
    <nav
      className="relative flex items-center justify-between lg:hidden"
      aria-label="menu mobile"
    >
      <Logo />
      <div className="flex items-center gap-2">
        <Link href="">
          <UserIcon size={32} color="#23272A" />
        </Link>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </div>
      {isOpenMenu && (
        <SideBar
          menu={MenuMobileConfig}
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      )}
    </nav>
  );
};
