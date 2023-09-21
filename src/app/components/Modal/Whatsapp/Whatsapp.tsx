import Link from "next/link";
import { WhatsappIcon } from "../../Icons";

export const Whatsapp = () => {
  return (
    <>
      <div className="fixed bottom-10 right-10 z-[9999] animate-pulseAnimation rounded-full bg-green-400 p-2">
        <Link href="https://wa.me/5571987665453" target="_blank">
          {" "}
          <WhatsappIcon size={32} color="#f7f7f7" />
        </Link>
      </div>
    </>
  );
};
