import { RedesMain } from "@/app/types/Redes";
import Link from "next/link";

type RedesProps = {
  items: RedesMain;
};

export const Redes = ({ items }: RedesProps) => {
  return (
    <ul className="flex gap-3">
      {items.redes.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.icon}</Link>
        </li>
      ))}
    </ul>
  );
};
