import Link from "next/link";

type ButtonProps = {
  title: string;
  href: string;
  color?: string;
};

export const Button = ({ title, href, color }: ButtonProps) => {
  const colorButton =
    color === "primaryYellow"
      ? "primaryYellow !text-primaryBlack"
      : "primaryBlue";

  const colorHoverButton =
    color === "primaryYellow" ? "secundaryYellow" : "secundaryBlue";
  return (
    <>
      <Link
        className={`rounded-lg bg-${colorButton} hover:bg-${colorHoverButton} p-2 text-primaryWhite transition-colors duration-300`}
        href={href}
      >
        {title}
      </Link>
    </>
  );
};
