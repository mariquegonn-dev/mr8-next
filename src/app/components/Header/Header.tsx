type HeaderType = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderType) => {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 border-b-[1px] bg-white px-8 py-5 lg:py-10">
        {children}
      </header>
    </>
  );
};
