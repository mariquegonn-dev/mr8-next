import Link from "next/link";
import cn from "@/app/functions/ClassName/cn";

type ButtonProps = {
  title: string;
  href: string;
  className?: string;
};

export const Button = ({ title, href, className }: ButtonProps) => {
  const merge = cn(
    "animate-pulseTest rounded-lg bg-primaryBlue p-2 font-bold text-primaryWhite transition-colors duration-300 hover:bg-secundaryBlue sm:animate-none",
    className,
  );
  return (
    <>
      <Link className={merge} href={href}>
        {title}
      </Link>
    </>
  );
};
