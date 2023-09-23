import {
  BoardIcon,
  CursosIcon,
  HouseIcon,
  PersonGroupIcon,
  ProdutosIcon,
  ServicosIcon,
} from "@/app/components/Icons";
import { MenuMain } from "../types/MenuMobile";

export const MenuMobileConfig: MenuMain = {
  menu: [
    {
      name: "Início",
      icon: <HouseIcon size={24} color="#111111" />,
      current: true,
      href: "/",
    },
    {
      name: "Serviços",
      icon: <ServicosIcon size={24} color="#111111" />,
      current: false,
      children: [
        { name: "Aluguel de Sala", href: "/servicos/aluguel-de-sala" },
        { name: "Aula Particular", href: "/servicos/aula-particular" },
      ],
    },
    {
      name: "Cursos",
      icon: <CursosIcon size={24} color="#111111" />,
      current: false,
      children: [
        { name: "Pré IFBA", href: "/cursos/pre-ifba" },
        { name: "Pré ENEM", href: "/cursos/pre-enem" },
      ],
    },
    {
      name: "Produtos",
      icon: <ProdutosIcon size={24} color="#111111" />,
      current: false,
      children: [
        { name: "Livro Realidade", href: "#" },
        { name: "Livro Alma Nua", href: "#" },
      ],
    },
    {
      name: "Sobre",
      icon: <PersonGroupIcon size={24} color="#111111" />,
      current: false,
      href: "/sobre",
    },
    {
      name: "Pré Matrícula",
      icon: <BoardIcon size={24} color="#111111" />,
      current: false,
      href: "/pre-matricula",
    },
  ],
};
