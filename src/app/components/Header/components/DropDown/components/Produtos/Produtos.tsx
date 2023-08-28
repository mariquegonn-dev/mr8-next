import Link from "next/link";
import Image from "next/image";

export const Produtos = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Produtos</h1>
        <p className="mt-1 max-w-[40ch] text-lg font-light">
          O Mr8 também é uma editora, sabia? Temos livros autorais e materiais
          exclusivos!
        </p>
        <Link
          href="/contato"
          className="mt-3 inline-block rounded-lg bg-primaryBlue p-2 text-primaryWhite transition-colors duration-300 hover:bg-secundaryBlue"
        >
          Ver mais
        </Link>
      </div>

      <div className="flex gap-2">
        <div className="flex items-center gap-5">
          <div>
            <Image
              src="/assets/image/books/bookRealidade.png"
              width={85.12}
              height={128}
              alt="livro Realidade"
            />
          </div>
          <div>
            <h2 className="font-medium">Livro Realidade</h2>
            <p className="max-w-[20ch] font-light">
              Disponível para compra na amazon{" "}
              <Link
                href=""
                className="text-primaryBlue underline transition-colors duration-300 hover:text-secundaryBlue"
              >
                compre aqui
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div>
            <Image
              src="/assets/image/books/bookAlmaNua.png"
              width={85.12}
              height={128}
              alt="livro Alma Nua"
              priority
            />
          </div>
          <div>
            <h2 className="font-medium">Livro Espelho Espelho Meu</h2>
            <p className="max-w-[20ch] font-light">
              Disponível para compra na amazon{" "}
              <Link
                href=""
                className="text-primaryBlue underline transition-colors duration-300 hover:text-secundaryBlue"
              >
                compre aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
