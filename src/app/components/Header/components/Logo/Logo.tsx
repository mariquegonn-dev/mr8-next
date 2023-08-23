import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        priority
        className="transition-all duration-300 hover:opacity-90"
        width={90}
        height={36}
        alt="logo mr8"
        src="/assets/image/logo.png"
      />
    </Link>
  );
};
