import { FooterMain } from "../types/Footer";

export const FooterConfig: FooterMain = {
  sublinks: [
    {
      title: "Serviços",
      subtitle: [
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
      subtitle: [
        {
          title: "Curso Pré-Ifba",
          href: "/cursos/pre-ifba",
        },
        {
          title: "Curso Pré-Enem",
          href: "/cursos/pre-enem",
        },
      ],
    },
    {
      title: "Livros",
      subtitle: [
        {
          title: "Livro Realidade",
          href: "/",
        },
        {
          title: "Livro Alma Nua",
          href: "/",
        },
      ],
    },
  ],
  links: [
    {
      title: "Sobre",
      href: "/sobre",
    },
    {
      title: "Contato",
      href: "/contato",
    },
    {
      title: "Pré Matrícula",
      href: "/pre-matricula",
    },
  ],
};
