import { twMerge } from "tailwind-merge";

type ErrorType = {
  className?: string;
  label?: string;
};

export const Error = ({ className, label }: ErrorType) => {
  const merge = twMerge(
    "absolute -bottom-4 animate-slideDownFAQ text-xs font-medium text-red-400",
    className,
  );
  return (
    <span className={merge}>{label ? label : "Este campo é obrigatório"}</span>
  );
};
