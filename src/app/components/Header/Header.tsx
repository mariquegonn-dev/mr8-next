type HeaderType = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderType) => {
  return (
    <>
      <header className="px-8 py-10">{children}</header>
    </>
  );
};
