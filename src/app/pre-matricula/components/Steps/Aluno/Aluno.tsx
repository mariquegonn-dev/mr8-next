import { useState } from "react";
import { Select } from "../../Forms/Select";
import { Input } from "../../Forms/Input";
import { useAlunoStore, useStepStore } from "@/store/form";
import { Radio } from "../../Forms/Radio";
import { ButtonForm } from "../../Forms/Button";
import { Container } from "../../Forms/Container";
import { Content } from "../../Forms/Content/Content";
import { Error } from "../../Forms/Error";
import { handleEmail } from "../../Forms/utils/handleEmail";
import { handlePhone } from "../../Forms/utils/handlePhone";
import Message from "../../Forms/Message/Message";

export const Aluno = () => {
  const {
    aluno,
    addNome,
    addSobrenome,
    addNomeSocialBoolean,
    addNomeSocial,
    addGenero,
    addContato,
    addEmail,
  } = useAlunoStore();

  const {
    nome,
    sobrenome,
    nomeSocialBoolean,
    nomeSocial,
    email,
    genero,
    contato,
  } = aluno;

  const { step, addStep } = useStepStore();
  const [error, setError] = useState(false);

  const emailRegex = handleEmail(email);

  const contatoRegex = handlePhone(contato);

  function handleClick() {
    if (
      nome !== "" &&
      sobrenome !== "" &&
      nomeSocialBoolean !== "" &&
      genero !== "" &&
      contatoRegex &&
      emailRegex
    ) {
      addStep(step + 1);
    } else {
      setError(true);
    }
  }

  return (
    <Container>
      <Message />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <Content title="Como você se chama?">
          <div className="cel550:grid-cols-2 relative mb-5 grid grid-cols-1 gap-3">
            <Input
              label="nome"
              id="nome"
              placeholder="Cleber"
              value={nome}
              onChange={({ target }) => addNome(target.value)}
            />
            <Input
              label="sobrenome"
              id="sobrenome"
              placeholder="Carmo"
              value={sobrenome}
              onChange={({ target }) => addSobrenome(target.value)}
            />
            {((error && nome === "") || (error && sobrenome === "")) && (
              <Error label="Preencha todos os campos acima." />
            )}
          </div>
        </Content>

        <Content title="Você gostaria de utilizar um nome social?">
          <div
            className={`relative mb-6 transition-all duration-300 ${
              nomeSocialBoolean === "true" ? "h-[90px]" : "h-[30px]"
            }`}
          >
            <Radio
              label="Sim"
              onChange={({ target }) => {
                addNomeSocialBoolean(target.value);
              }}
              value="true"
              checked={nomeSocialBoolean === "true"}
            />
            <Radio
              label="Não"
              onChange={({ target }) => {
                addNomeSocialBoolean(target.value);
              }}
              value="false"
              checked={nomeSocialBoolean === "false"}
            />

            {error && nomeSocialBoolean === "" && (
              <Error className="-bottom-7" />
            )}

            {nomeSocialBoolean === "true" && (
              <div className="mt-3">
                <Input
                  label="nome social"
                  id="nomeSocial"
                  placeholder=""
                  value={nomeSocial}
                  onChange={({ target }) => addNomeSocial(target.value)}
                />
              </div>
            )}
          </div>
        </Content>

        <Content>
          <div className="relative mb-5">
            <Select
              label="Qual o seu gênero?"
              id="genero"
              onClick={({ currentTarget }) => {
                currentTarget[0].disabled = true;
              }}
              onChange={({ target }) => {
                addGenero(target.value);
              }}
              value={genero}
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="prefiro não dizer">Prefiro não dizer</option>
            </Select>
            {error && genero === "" && <Error className="-bottom-5" />}
          </div>
        </Content>

        <Content title="Qual o seu contato?">
          <div className="cel356:mb-5 relative mb-7">
            <Input
              label="contato"
              id="contato"
              placeholder="71 98888-7777"
              value={contato}
              onChange={({ target }) => addContato(target.value)}
              classNameLabel="peer-placeholder-shown:pr-10"
            />
            {error && !contatoRegex && (
              <Error
                label="Insira um contato válido, exemplo: 71 98888-7777"
                className="cel356:-bottom-4 -bottom-8"
              />
            )}
          </div>
        </Content>

        <Content title="Qual o seu email?">
          <div className="cel364:mb-6 relative mb-9">
            <Input
              label="email"
              id="email"
              type="email"
              placeholder="seuemail@email.com"
              value={email}
              onChange={({ target }) => addEmail(target.value)}
              classNameLabel="peer-placeholder-shown:pr-24"
            />
            {error && !emailRegex && (
              <Error
                label="Insira um email válido, exemplo: email@email.com"
                className="cel364:-bottom-4 -bottom-8"
              />
            )}
          </div>
        </Content>
        <ButtonForm label="Continuar" type="submit" />
      </form>
    </Container>
  );
};
