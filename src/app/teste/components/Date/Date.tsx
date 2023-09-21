import React from "react";

type DateProps = {
  dataCriada: string;
};

const Date = ({ dataCriada }: DateProps) => {
  return <div>Data: {dataCriada}</div>;
};

export default Date;
