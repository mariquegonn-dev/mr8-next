"use client";

import { useMobile } from "@/app/hooks/useMobile";
import { Logo } from "../../Logo/Logo";
import { ToggleButton } from "../ToggleButton";
import Link from "next/link";
import { UserIcon } from "@/app/components/Icons";

export const MenuMobile = () => {
  const { handleToggleMenu, isOpenMenu } = useMobile();

  return (
    <nav
      className="flex items-center justify-between lg:hidden"
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
        <div className="absolute right-2 top-[90px] bg-red-500">teste</div>
      )}
    </nav>
  );
};
