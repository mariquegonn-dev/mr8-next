import { DropDownData } from "@/app/types/DropDown";
import Link from "next/link";

type DropDownProps = {
  items: DropDownData;
  value: number;
};

export const MainDropDown = ({ items, value }: DropDownProps) => {
  return (
    <>
      {items.mainDropDown
        .filter((items, index) => index === value)
        .map(({ title, description, href, linkTitle }) => (
          <div key={title}>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-1 max-w-[40ch] text-lg font-light">
              {description}
            </p>
            <Link
              className="mt-3 inline-block rounded-lg bg-primaryBlue p-2 text-primaryWhite transition-colors duration-300 hover:bg-secundaryBlue"
              href={href}
            >
              {linkTitle}
            </Link>
          </div>
        ))}
    </>
  );
};
