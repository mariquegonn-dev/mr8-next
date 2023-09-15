import { CourseIcon, MapIcon } from "../components/Icons";
import { FaqMain } from "../types/Faq";

export const FaqConfig: FaqMain = {
  faq: [
    {
      pergunta: "Qual o endereço do curso?",
      resposta:
        "R. do Mercado, 7A - 302 - Centro, Camaçari - BA, 42800-050, Brasil",
      link: "Acesse o maps aqui: ",
      href: "https://www.google.com/maps/place/MR-8+Cursos+PR%C3%89-ENEM+%2F+IFBA/@-12.69881,-38.322699,15z/data=!4m6!3m5!1s0x71669d053466cb3:0x4b874a497ce0e5e1!8m2!3d-12.6987683!4d-38.3248714!16s%2Fg%2F11bv1cfptx?hl=pt-BR&entry=ttu",
      icon: <MapIcon size={24} color="#fff" />,
      hrefTitle: "Localização",
    },
    {
      pergunta: "Quando as aulas começam?",
      resposta: ["Pré-IFBA: Março 2024", "Pré-ENEM: Fevereiro 2024"],
    },
    {
      pergunta: "Quais os cursos disponíveis?",
      resposta:
        "No mr8 temos duas opções de cursos disponíveis: o pré-ifba e o pré enem.",
      link: "Está interessado? Acesse os cursos aqui: ",
      href: "/cursos",
      hrefTitle: "Cursos Ofertados",
      icon: <CourseIcon size={24} color="#fff" />,
    },
    {
      pergunta: "O Mr8 Cursos é para mim?",
      resposta:
        "Com certeza! Se você está inseguro quanto aos assuntos, saiba que você verá o conteúdo de forma inicial e ir avançando aos poucos até chegar em coisas mais complexas. ",
    },
    {
      pergunta: "Sobre o Material",
      resposta:
        "O material do curso é produzido exclusivamente por nossos professores da casa, trazendo a maior qualidade possível e direcionado especificamente para o processo seletivo.",
    },
  ],
};
