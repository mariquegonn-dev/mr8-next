type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <section className="mx-auto max-w-screen-2xl">{children}</section>
    </>
  );
};
