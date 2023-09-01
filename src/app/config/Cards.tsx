import {
  BookIcon,
  HeartIcon,
  HouseIcon,
  PersonGroupIcon,
  StudentIcon,
  TrophyIcon,
} from "../components/Icons";
import { CardsMain } from "../types/Cards";

export const CardsConfig: CardsMain = {
  cards: [
    {
      icon: <TrophyIcon weight="fill" color="#2250F4" width={60} height={60} />,
      title: "Aprovação número 1",
      tags: [
        "Primeiro colocado em Eletrotécnica há 7 anos.",
        "Primeiro colocado em Informática.",
      ],
    },
    {
      icon: <HeartIcon weight="fill" color="#2250F4" width={60} height={60} />,
      title: "Cuidado Emocional",
      tags: [
        "Respeito e Cuidado são prioridade.",
        "Programação Neurolinguística.",
      ],
    },
    {
      icon: (
        <PersonGroupIcon weight="fill" color="#2250F4" width={60} height={60} />
      ),
      title: "Respeito a diversidade",
      tags: [
        "Não aceitamos qualquer tipo de discriminação.",
        "Respeito e Igualdade com todos.",
      ],
    },
    {
      icon: <BookIcon weight="fill" color="#2250F4" width={60} height={60} />,
      title: "Material Exclusivo",
      tags: [
        "Produzido por nossos professores.",
        "Atualizado anualmente.",
        "Máxima qualidade.",
      ],
    },
    {
      icon: <HouseIcon weight="fill" color="#2250F4" width={60} height={60} />,
      title: "Estrutura",
      tags: ["Sala limpa e climatizada.", "Câmeras 24/7", "Seguro e conforto."],
    },
    {
      icon: (
        <StudentIcon weight="fill" color="#2250F4" width={60} height={60} />
      ),
      title: "Professores",
      tags: ["Formados na área de atuação.", "Muitos anos de experiência."],
    },
  ],
};
