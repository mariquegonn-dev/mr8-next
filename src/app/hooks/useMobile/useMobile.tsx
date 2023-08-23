"use client";

import { useCallback, useState } from "react";

export const useMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsOpenMenu((prevState) => !prevState);
  }, []);

  return {
    isOpenMenu,
    handleToggleMenu,
  };
};
