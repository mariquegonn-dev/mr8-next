import {
  FaceIcon,
  InstaIcon,
  WhatsappIcon,
  PhoneIcon,
} from "../components/Icons";
import { RedesMain } from "../types/Redes";

const className = "hover:fill-[#2250F4] transition-all duration-300";

export const RedesSociais: RedesMain = {
  redes: [
    {
      href: "/insta",
      icon: <InstaIcon className={className} size={32} color="#111" />,
    },
    {
      href: "/whatsapp",
      icon: <WhatsappIcon className={className} size={32} color="#111" />,
    },
    {
      href: "/facebook",
      icon: <FaceIcon className={className} size={32} color="#111" />,
    },
    {
      href: "/ligar",
      icon: <PhoneIcon className={className} size={32} color="#111" />,
    },
  ],
};
