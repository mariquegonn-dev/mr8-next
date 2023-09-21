type ContentProps = {
  title?: string;
  children: React.ReactNode;
};

export const Content = ({ title, children }: ContentProps) => {
  return (
    <div>
      {title && <h1 className="mb-2 text-2xl font-semibold">{title}</h1>}
      {children}
    </div>
  );
};
