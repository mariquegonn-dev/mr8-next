"use client";

import { useState } from "react";
import { Select } from "../../Forms/Select";
import { Input } from "../../Forms/Input";
import { CursoType, useCursoStore, useStepStore } from "@/store/form";
import { Radio } from "../../Forms/Radio";
import { ButtonForm } from "../../Forms/Button";
import { Container } from "../../Forms/Container";
import { Content } from "../../Forms/Content/Content";
import { Error } from "../../Forms/Error";

export const Curso = () => {
  const { step, addStep } = useStepStore();
  const {
    curso,
    addCurso,
    addDia,
    addMes,
    addAno,
    addNomeEscola,
    addAnoEscola,
    addEndereco,
  } = useCursoStore();
  const [error, setError] = useState(false);

  const { cursoOptions, dia, mes, ano, nomeEscola, anoEscola, endereco } =
    curso;

  function handleClick() {
    if (
      cursoOptions !== "" &&
      dia !== "" &&
      mes !== "" &&
      ano !== "" &&
      nomeEscola !== "" &&
      anoEscola !== "" &&
      endereco !== ""
    ) {
      addStep(step + 1);
    } else {
      setError(true);
    }
  }

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <Content title="Qual o curso desejado?">
          <div className="relative mb-5 transition-all duration-300">
            <Radio
              label="Pré IFBA"
              value="Pré IFBA"
              onChange={({ target }) => addCurso(target.value)}
              checked={cursoOptions === "Pré IFBA"}
            />
            <Radio
              label="Pré ENEM"
              value="Pré ENEM"
              onChange={({ target }) => addCurso(target.value)}
              checked={cursoOptions === "Pré ENEM"}
            />
            {error && cursoOptions === "" && <Error className="-bottom-6" />}
          </div>
        </Content>

        <Content title="Qual escola você está  matriculado(a)?">
          <div className="cel550:grid-cols-2 relative mb-5 grid grid-cols-1 gap-3">
            <Input
              label="nome da escola"
              id="nomeEscola"
              placeholder="Mr8 Cursos"
              value={nomeEscola}
              onChange={({ target }) => addNomeEscola(target.value)}
            />

            <Input
              label="ano que estuda"
              id="anoEscola"
              placeholder="9 ano"
              value={anoEscola}
              onChange={({ target }) => addAnoEscola(target.value)}
            />
            {((error && anoEscola === "") || (error && nomeEscola === "")) && (
              <Error label="Preencha todos os campos acima." />
            )}
          </div>
        </Content>

        <Content title="Qual a sua data de  nascimento?">
          <div className="relative mb-5 grid cel550:grid-cols-[80px_200px_80px] gap-3">
            <Input
              type="number"
              min="1"
              max="31"
              label="dia"
              id="dia"
              placeholder="12"
              value={dia}
              classNameLabel="peer-placeholder-shown:pr-4"
              onChange={({ target }) => addDia(target.value)}
            />
            <Select
              id="mês"
              className="mb-[initial]"
              onClick={({ currentTarget }) =>
                (currentTarget[0].disabled = true)
              }
              onChange={({ target }) => addMes(target.value)}
              value={mes}
            >
              <option value="">mês</option>
              <option value="Janeiro">Janeiro</option>
              <option value="Fevereiro">Fevereiro</option>
              <option value="Março">Março</option>
              <option value="Abril">Abril</option>
              <option value="Maio">Maio</option>
              <option value="Junho">Junho</option>
              <option value="Julho">Julho</option>
              <option value="Agosto">Agosto</option>
              <option value="Setembro">Setembro</option>
              <option value="Outubro">Outubro</option>
              <option value="Novembro">Novembro</option>
              <option value="Dezembro">Dezembro</option>
            </Select>
            <Input
              type="number"
              label="ano"
              id="ano"
              placeholder="2006"
              value={ano}
              classNameLabel="peer-placeholder-shown:pr-4"
              onChange={({ target }) => addAno(target.value)}
              min="1950"
              max="2050"
            />
            {error && (dia && mes && ano) === "" && (
              <Error label="Preencha todos os campos acima." />
            )}
          </div>

          <Content title="Qual o seu endereço?">
            <div className="relative mb-5 ">
              <Input
                label="Endereço"
                id="endereco"
                placeholder="Rua n°, Bairro, Camaçari-BA"
                value={endereco}
                onChange={({ target }) => addEndereco(target.value)}
                classNameLabel="peer-placeholder-shown:pr-32 peer-placeholder-shown:pb-[1px]"
              />
              {error && endereco === "" && <Error />}
            </div>
          </Content>
        </Content>

        <div className="flex gap-3">
          <ButtonForm label="Voltar" onClick={() => addStep(step - 1)} />
          <ButtonForm label="Continuar" type="submit" />
        </div>
      </form>
    </Container>
  );
};
