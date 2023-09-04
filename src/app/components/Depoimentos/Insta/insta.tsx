import { InstaMain } from "@/app/types/Insta";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../utils/Button";

type InstaProps = {
  items: InstaMain;
};

export const Insta = ({ items }: InstaProps) => {
  return (
    <div>
      <h1 className="mt-10 text-center text-3xl font-bold text-primaryWhite sm:text-6xl">
        Nos acompanhe no <span className="text-primaryBlue">Insta!</span>
      </h1>

      <ul className="mt-10 flex flex-wrap justify-center gap-5">
        {items.insta.map((item) => (
          <li
            key={item.href}
            className="rounded-[10px] border-2 border-transparent transition-colors duration-300 hover:border-primaryBlue"
          >
            <Link href={item.href}>
              <Image
                src={item.src}
                width={272.55}
                height={350}
                alt="instagram image"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid justify-center">
        <Button href="/insta" title="Siga-nos!" />
      </div>
    </div>
  );
};
