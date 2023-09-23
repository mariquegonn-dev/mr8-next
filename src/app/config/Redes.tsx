import {
  InstaIcon,
  WhatsappIcon,
  PhoneIcon,
  PhoneSecIcon,
} from "../components/Icons";
import { RedesMain } from "../types/Redes";

const className = "hover:fill-[#2250F4] transition-all duration-300";

export const RedesSociais: RedesMain = {
  redes: [
    {
      href: "https://www.instagram.com/mr8cursosoficial/",
      icon: <InstaIcon className={className} size={32} color="#111" />,
      alt: "instagram @mr8cursosoficial",
    },
    {
      href: "https://wa.me/5571987665453",
      icon: <WhatsappIcon className={className} size={32} color="#111" />,
      alt: "whatsapp 5571987665453",
    },
    {
      href: "tel:+5507130273031",
      icon: <PhoneIcon className={className} size={32} color="#111" />,
      alt: "telefone 5507130273031",
    },
    {
      href: "tel:+55071987665453",
      icon: <PhoneSecIcon className={className} size={32} color="#111" />,
      alt: "celular 55071987665453",
    },
  ],
};
