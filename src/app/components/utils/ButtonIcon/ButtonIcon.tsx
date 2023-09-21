import Link from "next/link";

type ButtonIconProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export const ButtonIcon = ({ href, title, icon }: ButtonIconProps) => {
  return (
    <>
      <Link
        className="font-base group flex items-center gap-2 rounded-lg p-2 transition-all duration-300"
        href={href}
        target="_blank"
      >
        {title}
        <span className="group-hover:animate-handleRotate">{icon}</span>
      </Link>
    </>
  );
};
