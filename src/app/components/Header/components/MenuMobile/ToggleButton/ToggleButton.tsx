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
      {isOpenMenu && (
        <div className="p-2">
          <CloseIcon size={32} />
        </div>
      )}
      {!isOpenMenu && (
        <div className="p-2">
          <OpenIcon size={32} />
        </div>
      )}
    </button>
  );
};
