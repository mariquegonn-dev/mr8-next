import cn from "@/app/functions/ClassName/cn";

type ErrorType = {
  className?: string;
  label?: string;
};

export const Error = ({ className, label }: ErrorType) => {
  const merge = cn(
    "absolute -bottom-4 animate-slideDownFAQ text-xs font-medium text-red-400",
    className,
  );
  return (
    <span className={merge}>{label ? label : "Este campo é obrigatório"}</span>
  );
};
