import Link from "next/link";
import Image from "next/image";
import { Button } from "../utils/Button";

export const Hero = () => {
  return (
    <div className="text-secundaryBlack mb-[2000px] grid items-center gap-10 px-4 lg:grid-cols-2">
      <div className="grid justify-center">
        <Image
          className="h-[300px] w-[500px] rounded-lg object-cover object-center sm:h-[400px]"
          src="/assets/image/gallery/heroPerfil.png"
          alt="alunos do mr8 em aula de campo"
          priority
          width={1504}
          height={703}
        />
      </div>

      <div className="grid gap-7">
        <h1 className="text-3xl font-bold sm:text-6xl">
          O curso que mais te prepara<span className="text-primaryBlue">!</span>
        </h1>
        <p className="text-base sm:text-xl">
          São mais de{" "}
          <span className="text-primaryBlue">200 alunos aprovados</span> em
          diversas modalidades! Top, né? Aprenda de forma simples e divertida
          junto a professores formados na área e com muitos anos de experiência.
        </p>
        <div className="flex gap-5">
          <Button href="/pre-matricula" title="pré matrícula" />
          <Button href="/contato" title="contato" />
        </div>
      </div>
    </div>
  );
};
