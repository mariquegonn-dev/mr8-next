import Link from "next/link";

type ButtonProps = {
  title: string;
  href: string;
};

export const Button = ({ title, href }: ButtonProps) => {
  return (
    <>
      <Link
        className="mt-3 inline-block rounded-lg bg-primaryBlue p-2 text-primaryWhite transition-colors duration-300 hover:bg-secundaryBlue"
        href={href}
      >
        {title}
      </Link>
    </>
  );
};
