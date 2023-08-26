"use client";

import { useMobile } from "@/app/hooks/useMobile";
import { Logo } from "../../Logo/Logo";
import { ToggleButton } from "../ToggleButton";

export const MenuMobile = () => {
  const { handleToggleMenu, isOpenMenu } = useMobile();

  return (
    <nav className="flex justify-between lg:hidden" aria-label="menu mobile">
      <Logo />
      <ToggleButton
        isOpenMenu={isOpenMenu}
        handleToggleMenu={handleToggleMenu}
      />
      {isOpenMenu && (
        <div className="absolute right-2 top-[90px] bg-red-500">teste</div>
      )}
    </nav>
  );
};
