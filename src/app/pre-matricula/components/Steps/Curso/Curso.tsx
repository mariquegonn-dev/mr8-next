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
  const [error, setError] = useState(false);
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

        <Content title="Qual instituição você está  matriculado(a)?">
          <div className="relative mb-5 grid grid-cols-1 items-center gap-3 cel550:grid-cols-2">
            <Input
              label="nome da instituição"
              id="nomeEscola"
              placeholder="Mr8 Cursos"
              value={nomeEscola}
              onChange={({ target }) => addNomeEscola(target.value)}
            />

            <Select
              className="mb-[inital]"
              id="anoEscola"
              onClick={({ currentTarget }) =>
                (currentTarget[0].disabled = true)
              }
              onChange={({ target }) => addAnoEscola(target.value)}
              value={anoEscola}
            >
              <option value="">Ano da escola</option>
              {cursoOptions === "Pré ENEM" ? (
                <>
                  <option value="1° ano">1° ano</option>
                  <option value="2° ano">2° ano</option>
                  <option value="3° ano">3° ano</option>
                  <option value="4° ano">4° ano</option>
                  <option value="outro">
                    Eu já concluí o ensino médio ou estou na faculdade.
                  </option>
                </>
              ) : (
                <>
                  <option value="8° ano">6º ano</option>
                  <option value="8° ano">7º ano</option>
                  <option value="8° ano">8° ano</option>
                  <option value="9° ano">9° ano</option>
                  <option value="outro">
                    Eu já concluí o ensino fundamental.
                  </option>
                </>
              )}
            </Select>

            {((error && anoEscola === "") || (error && nomeEscola === "")) && (
              <Error label="Preencha todos os campos acima." />
            )}
          </div>
        </Content>

        <Content title="Qual a sua data de  nascimento?">
          <div className="relative mb-5 grid gap-3 cel550:grid-cols-[80px_200px_80px]">
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
              id="mes"
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
