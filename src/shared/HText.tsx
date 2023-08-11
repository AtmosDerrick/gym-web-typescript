type Props = {
  children: React.ReactNode;
};

export const HText = ({ children }: Props) => {
  return (
    <div>
      <h1 className="basis-3/5 font-montserrate text-3xl font-bold">
        {children}
      </h1>
    </div>
  );
};
