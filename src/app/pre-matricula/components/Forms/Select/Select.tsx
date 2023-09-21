import { twMerge } from "tailwind-merge";

type SelectProps = {
  label?: string;
  id: string;
  onClick: React.MouseEventHandler<HTMLSelectElement>;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
  className?: string;
  value: string;
};

export const Select = ({
  label,
  id,
  onClick,
  onChange,
  children,
  className,
  value,
}: SelectProps) => {
  const merge = twMerge(
    "mb-3 block text-2xl font-semibold text-primaryBlack",
    className,
  );
  return (
    <div>
      <label htmlFor={id} className={merge}>
        {label}
      </label>
      <select
        id={id}
        className="select-custom z-10 block w-full rounded-lg border border-gray-300 bg-gray-50 bg-[url('/assets/svg/down24.svg')] p-2.5 text-gray-900 focus:border-primaryBlue focus:text-primaryBlue focus:ring-primaryBlue"
        onClick={onClick}
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
    </div>
  );
};
