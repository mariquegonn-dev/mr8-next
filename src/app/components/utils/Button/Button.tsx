import Link from "next/link";

type ButtonProps = {
  title: string;
  href: string;
  color?: string;
  colorHover?: string;
};

export const Button = ({
  title,
  href,
  color = "primaryBlue",
  colorHover = "secundaryBlue",
}: ButtonProps) => {
  const textColor = color !== "primaryBlue" ? "primaryBlue" : "primaryWhite";

  const bgHover =
    colorHover !== "secundaryBlue"
      ? "hover:animate-pulseTest transition-shadow"
      : "";
  return (
    <>
      <Link
        className={`rounded-lg bg-${color} hover:bg-${colorHover} p-2 text-${textColor} font-bold transition-colors duration-300 ${bgHover} animate-pulseTest sm:animate-none`}
        href={href}
      >
        {title}
      </Link>
    </>
  );
};
