import Link from "next/link";
import Image from "next/image";

export const Cursos = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Cursos</h1>
        <p className="mt-1 max-w-[40ch] text-lg font-light">
          O que você está esperando para iniciar seus estudos no melhor curso
          preparatório de Camaçari e Região Metropolitana?
        </p>
        <Link
          href="/contato"
          className="mt-3 inline-block rounded-lg bg-primaryBlue p-2 text-primaryWhite transition-colors duration-300 hover:bg-secundaryBlue"
        >
          Mandar mensagem no zap!
        </Link>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center gap-5">
          <div className="rounded-full p-2 text-primaryWhite transition-colors duration-300">
            <Image
              src="/assets/svg/ifba.svg"
              width={42}
              height={38.39}
              alt="ifba logo"
            />
          </div>
          <div>
            <h2 className="font-medium">Curso Pré-IFBA</h2>
            <p className="max-w-[20ch] font-light">
              Com mais de 250 alunos aprovados em diversas modalidades!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-full  p-2 text-primaryWhite transition-colors duration-300 ">
            <Image
              src="/assets/svg/enem.svg"
              width={48}
              height={48}
              alt="enem logo"
            />
          </div>
          <div>
            <h2 className="font-medium">Curso Pré-ENEM</h2>
            <p className="max-w-[20ch] font-light">
              Diversos alunos aprovados em universidades públicas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
