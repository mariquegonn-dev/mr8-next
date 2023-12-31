import Link from "next/link";
import Image from "next/image";

export const Produtos = () => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-5">
        <div>
          <Image
            src="/assets/menu/books/bookRealidade.webp"
            width={85.12}
            height={128}
            alt="livro Realidade"
            priority
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
            src="/assets/menu/books/bookAlmaNua.webp"
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
  );
};
