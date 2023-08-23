import { Header } from "./components/Header";
import { MainNav } from "./components/Header/components/MainNav";
import { MenuMobile } from "./components/Header/components/MenuMobile";
import { headerConfig } from "./config";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Mr8 Cursos",
  description:
    "O Mr8 Cursos é reconhecido por sua excelência na preparação de estudantes para o IFBA e outras modalidades, proporcionando um ambiente altamente capacitado e focado no sucesso dos alunos. A equipe de profissionais é formada por especialistas experientes, que se dedicam com afinco ao desenvolvimento acadêmico de cada estudante. Com essa dedicação, temos alcançado resultados impressionantes, com mais de 300 de alunos aprovados em diversas modalidades ao longo dos anos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={outfit.className}>
        <Header>
          <MainNav items={headerConfig} />
          <MenuMobile />
        </Header>

        {children}
      </body>
    </html>
  );
}
