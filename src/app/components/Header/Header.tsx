type HeaderType = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderType) => {
  return (
    <>
      <header>{children}</header>
    </>
  );
};
