import { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
};

export const ButtonForm = ({ label, onClick, type }: ButtonProps) => {
  return (
    <button
      className="rounded-[4px] bg-primaryBlue p-3 font-medium tracking-wide text-primaryWhite transition-colors duration-300 hover:bg-secundaryBlue"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
