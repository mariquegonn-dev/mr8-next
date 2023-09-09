import { FooterMain } from "@/app/types/Footer";
import { Logo } from "../Header/components/Logo/Logo";
import { Redes } from "../Redes";
import { RedesSociais } from "@/app/config/Redes";
import Link from "next/link";

type FooterProps = {
  items: FooterMain;
};

export const Footer = ({ items }: FooterProps) => {
  const date = new Date().getFullYear();
  return (
    <div className="mx-auto max-w-7xl px-4 pb-5 pt-10">
      <div className="grid grid-cols-1 gap-5 pb-5 lg:grid-cols-2">
        <div className="grid gap-5">
          <Logo />
          <p>Mais que um curso, um futuro brilhante!</p>
          <div>
            <Redes items={RedesSociais} />
          </div>
        </div>

        <div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-4">
            {items.sublinks.map((item) => (
              <li key={item.title}>
                <h2 className="cursor-default font-bold">
                  {item.title.toUpperCase()}
                </h2>
                <div className="mt-3 grid justify-items-start gap-3">
                  {item.subtitle.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="transition-colors duration-300 hover:text-primaryBlue"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
            <li className="grid justify-items-start gap-3">
              {items.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="font-bold transition-colors duration-300 hover:text-primaryBlue"
                >
                  {item.title.toUpperCase()}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between border-t-[1px] border-primaryBlack/20 py-5 sm:flex-row">
        <h2>© Todos os direitos reservados. Mr8 Cursos 2012-{date}.</h2>
        <Link
          target="_blank"
          href="https://mariquegonnportfolio.netlify.app/"
          className="text-primaryBlue transition-all duration-300 hover:font-bold"
        >
          Feito por <span className="underline">@riquegonn</span>
        </Link>
      </div>
    </div>
  );
};
