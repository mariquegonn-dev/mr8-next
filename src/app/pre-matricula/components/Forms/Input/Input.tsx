import cn from "@/app/functions/ClassName/cn";

type InputProps = {
  label: string;
  id: string;
  placeholder: string;
  value: string | undefined;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  className?: string;
  classNameLabel?: string;
  min?: string;
  max?: string;
};

export const Input = ({
  label,
  id,
  onClick,
  onChange,
  placeholder,
  value,
  type = "text",
  className,
  classNameLabel,
  min,
  max,
}: InputProps) => {
  const merge = cn("relative", className);
  const mergeLabel = cn(
    "absolute left-1 top-[6px] z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-[6px] peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primaryBlue",
    classNameLabel,
  );
  return (
    <div className={merge}>
      <input
        type={type}
        id={id}
        className="peer block w-full appearance-none rounded-lg border border-gray-200 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primaryBlue focus:outline-none focus:ring-0"
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        value={value}
        min={min}
        max={max}
      />
      <label htmlFor={id} className={mergeLabel}>
        {label}
      </label>
    </div>
  );
};
