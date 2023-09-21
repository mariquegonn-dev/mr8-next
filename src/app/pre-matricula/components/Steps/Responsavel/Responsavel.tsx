import {
  useAlunoStore,
  useCursoStore,
  useResponsavelStore,
  useStepStore,
  useSuccessStore,
} from "@/store/form";
import { ButtonForm } from "../../Forms/Button";
import { Container } from "../../Forms/Container";
import { Content } from "../../Forms/Content/Content";
import { Input } from "../../Forms/Input";
import { useState } from "react";
import { Error } from "../../Forms/Error";
import { Radio } from "../../Forms/Radio";
import { handleEmail } from "../../Forms/utils/handleEmail";
import { handlePhone } from "../../Forms/utils/handlePhone";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loading from "@/app/components/utils/Loading/Loading";
import Successfully from "../../Forms/Successfully/Successfully";

export const Responsavel = () => {
  const { step, addStep } = useStepStore();

  const router = useRouter();

  const { aluno } = useAlunoStore();
  const {
    nome,
    sobrenome,
    nomeSocialBoolean,
    nomeSocial,
    email,
    genero,
    contato,
  } = aluno;

  const { curso } = useCursoStore();
  const { cursoOptions, dia, mes, ano, nomeEscola, anoEscola, endereco } =
    curso;

  const {
    responsavel,
    addNome,
    addContato,
    addContatoSec,
    addEmail,
    addResponsavel,
  } = useResponsavelStore();
  const {
    isResponsavel,
    nomeCompletoResponsavel,
    contatoResponsavel,
    contatoSecResponsavel,
    emailResponsavel,
  } = responsavel;

  const { success, setSuccess } = useSuccessStore();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRegex = handleEmail(emailResponsavel);

  const contatoRegex = handlePhone(contatoResponsavel);

  function handleClick() {
    if (
      isResponsavel !== "" &&
      nomeCompletoResponsavel !== "" &&
      contatoRegex &&
      emailRegex
    ) {
      setLoading(true);
      axios
        .post("/api/forms", {
          nome,
          sobrenome,
          nomeSocialBoolean,
          nomeSocial,
          email,
          genero,
          contato,
          cursoOptions,
          dia,
          mes,
          ano,
          nomeEscola,
          anoEscola,
          endereco,
          isResponsavel,
          nomeCompletoResponsavel,
          contatoResponsavel,
          contatoSecResponsavel,
          emailResponsavel,
        })
        .catch((err) => {
          console.log("Fetching error", err);
        })
        .finally(() => {
          router.refresh();
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            if (!success) window.location.href = "/";
          }, 4000);
        });
    } else if (isResponsavel === "Sim") {
      setLoading(true);
      axios
        .post("/api/forms", {
          nome,
          sobrenome,
          nomeSocialBoolean,
          nomeSocial,
          email,
          genero,
          contato,
          cursoOptions,
          dia,
          mes,
          ano,
          nomeEscola,
          anoEscola,
          endereco,
          isResponsavel,
          nomeCompletoResponsavel,
          contatoResponsavel,
          contatoSecResponsavel,
          emailResponsavel,
        })
        .catch((err) => console.log("Fetching error", err))
        .finally(() => {
          router.refresh();
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            if (!success) window.location.href = "/";
          }, 4000);
        });
    } else {
      setError(true);
    }
  }

  return (
    <Container>
      {loading && (
        <div className="fixed left-0 top-0 z-[1000] h-full w-full bg-primaryBlack/70 p-4 text-center sm:items-center sm:p-0">
          <div className="absolute left-[30vw] top-[50%] rounded-md bg-primaryBlue p-8 cel550:left-[38vw] lg:left-[45vw]">
            <Loading />
            <div className="mt-3 text-primaryWhite">Enviando</div>
          </div>
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <Successfully />
        <Content title="Você é o seu próprio responsável?">
          <div
            className={`relative overflow-hidden p-1 transition-all duration-500 ${
              isResponsavel === "Não"
                ? "h-[360px] md:mb-6"
                : "mb-10 h-[50px] w-[70px]"
            }`}
          >
            <Radio
              label="Sim"
              value="Sim"
              onChange={({ target }) => addResponsavel(target.value)}
              checked={isResponsavel === "Sim"}
            />
            <Radio
              label="Não"
              value="Não"
              onChange={({ target }) => addResponsavel(target.value)}
              checked={isResponsavel === "Não"}
            />

            {isResponsavel === "Não" && (
              <Content title="Informações do Responsável">
                <div className="grid gap-5">
                  <div className="relative">
                    <Input
                      label="Nome completo"
                      id="nomeCompleto"
                      placeholder="Nome Completo"
                      value={nomeCompletoResponsavel}
                      onChange={({ target }) => addNome(target.value)}
                    />
                    {error && nomeCompletoResponsavel === "" && <Error />}
                  </div>
                  <div className="relative">
                    <Input
                      label="contato"
                      id="contato"
                      placeholder="71 98888-7777"
                      value={contatoResponsavel}
                      onChange={({ target }) => addContato(target.value)}
                      classNameLabel="peer-placeholder-shown:pr-16 "
                    />
                    {error && !contatoRegex && (
                      <Error label="Insira um contato com válido." />
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      label="contato secundário"
                      id="contatoSec"
                      placeholder="71 98888-7777"
                      value={contatoSecResponsavel}
                      onChange={({ target }) => addContatoSec(target.value)}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      label="email"
                      id="email"
                      type="email"
                      placeholder="seuemail@email.com"
                      value={emailResponsavel}
                      onChange={({ target }) => addEmail(target.value)}
                      classNameLabel="peer-placeholder-shown:pr-24 "
                    />
                    {error && !emailRegex && (
                      <Error label="Insira um email válido." className="" />
                    )}
                  </div>
                </div>
              </Content>
            )}
          </div>
        </Content>

        <div className="relative">
          {error && isResponsavel === "" && <Error className="bottom-[2px]" />}
        </div>

        <div className="mt-5 flex gap-3 cel409:mt-0">
          <ButtonForm label="Voltar" onClick={() => addStep(step - 1)} />
          <ButtonForm label="Concluir" type="submit" />
        </div>
      </form>
    </Container>
  );
};
