import { ChangeEventHandler } from "react";

type RadioProps = {
  id?: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  checked: boolean;
};

export const Radio = ({ id, label, onChange, value, checked }: RadioProps) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        className="focus:primaryBlue h-4 w-4 border-gray-300 text-primaryBlue"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
};
