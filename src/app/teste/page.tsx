import React from "react";
import Button from "./components/Button/Button";
import Date from "./components/Date/Date";

async function getData() {
  const response = await fetch("http://localhost:3000/api/forms", {
    cache: "no-store",
  });

  if (!response.ok) {
    console.log("Erro no fetch");
  }

  const json = await response.json();
  return json;
}

interface Posts {
  createdAt: string;
  id: string;
  nome: string;
  sobrenome: string;
  nomeSocialBoolean: string;
  nomeSocial: string;
  genero: string;
  contato: string;
  email: string;
  cursoOptions: string;
  dia: string;
  mes: string;
  ano: string;
  nomeEscola: string;
  anoEscola: string;
  endereco: string;
  isResponsavel: string;
  nomeCompletoResponsavel: string;
  contatoResponsavel: string;
  contatoSecResponsavel: string;
  emailResponsavel: string;
}

const pageTeste = async () => {
  const posts: Posts[] = await getData();

  return (
    <div className="mx-auto mt-60 max-w-7xl">
      {posts?.map((item, index) => (
        <div key={index} className="mb-3">
          <div className="grid grid-cols-3 content-end bg-red-400">
            <Date dataCriada={item.createdAt} />
            <div>Nome: {item.nome}</div>
            <div>Sobrenome: {item.sobrenome}</div>
            <div>email: {item.email}</div>
            <div>contato: {item.contato}</div>
          </div>
          <Button id={item.id} />
        </div>
      ))}
    </div>
  );
};

export default pageTeste;
