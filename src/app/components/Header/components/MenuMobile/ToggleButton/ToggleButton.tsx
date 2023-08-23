import { CloseIcon, OpenIcon } from "@/app/components/Icons";
import { ButtonHTMLAttributes } from "react";

type ToggleButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const ToggleButton = ({
  isOpenMenu,
  handleToggleMenu,
  ...rest
}: ToggleButton) => {
  const title = isOpenMenu ? "Fechar" : "Abrir";
  return (
    <button {...rest} onClick={handleToggleMenu} title={title}>
      {isOpenMenu && <CloseIcon size={32} />}
      {!isOpenMenu && <OpenIcon size={32} />}
    </button>
  );
};
