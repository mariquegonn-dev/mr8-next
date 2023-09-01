type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl">{children}</section>
    </>
  );
};
