import { FooterMain } from "../types/Footer";

export const FooterConfig: FooterMain = {
  footer: [
    {
      title: "Serviços",
      sublinks: [
        {
          title: "Aluguel de Sala",
          href: "/servicos/aluguel-de-sala",
        },
        {
          title: "Aula Particular",
          href: "/servicos/aula-particular",
        },
      ],
    },
    {
      title: "Cursos",
      sublinks: [
        {
          title: "Pré-Ifba",
          href: "/cursos/pre-ifba",
        },
        {
          title: "Pré-Enem",
          href: "/cursos/pre-enem",
        },
      ],
    },
    {
      title: "Livros",
      sublinks: [
        {
          title: "Livro Realidade",
          href: "/",
        },
        {
          title: "Livro Alma Nua",
          href: "/",
        },
      ],
      link: "/",
    },
    {
      title: "Sobre",
      link: "/",
    },
    {
      title: "Contato",
      link: "/",
    },
    {
      title: "Pré Matrícula",
      link: "/",
    },
  ],
};
