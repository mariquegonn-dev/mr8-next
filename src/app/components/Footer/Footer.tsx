import { FooterMain } from "@/app/types/Footer";

type FooterProps = {
  items: FooterMain;
};

export const Footer = ({ items }: FooterProps) => {
  return (
    <>
      <div>
        {items.footer.map((item, index) => (
          <div key={item.title}>{item.title}</div>
        ))}
      </div>
    </>
  );
};
