import { create } from "zustand";

type stepType = {
  step: number;
  addStep: (payload: number) => void;
};

export const useStepStore = create<stepType>((set) => ({
  step: 0,
  addStep: (payload) => set(() => ({ step: payload })),
}));

type successType = {
  success: boolean;
  setSuccess: (payload: boolean) => void;
};

export const useSuccessStore = create<successType>((set) => ({
  success: false,
  setSuccess: (payload) => set(() => ({ success: payload })),
}));

type modalType = {
  modal: boolean;
  addModal: (payload: boolean) => void;
};

export const useModalStore = create<modalType>((set) => ({
  modal: true,
  addModal: (payload) => set(() => ({ modal: payload })),
}));

export type AlunoType = {
  nome: string;
  sobrenome: string;
  nomeSocialBoolean: string;
  nomeSocial: string;
  genero: string;
  contato: string;
  email: string;
};

type AlunoStore = {
  aluno: AlunoType;
  resetAluno: (payload: AlunoType) => void;
  addNome: (payload: string) => void;
  addSobrenome: (payload: string) => void;
  addNomeSocialBoolean: (payload: string) => void;
  addNomeSocial: (payload: string) => void;
  addGenero: (payload: string) => void;
  addContato: (payload: string) => void;
  addEmail: (payload: string) => void;
};

export const useAlunoStore = create<AlunoStore>((set) => ({
  aluno: {
    nome: "",
    sobrenome: "",
    nomeSocialBoolean: "",
    nomeSocial: "",
    genero: "",
    contato: "",
    email: "",
  },
  resetAluno: (payload) => set((state) => ({ ...state, aluno: payload })),
  addNome: (payload) =>
    set((state) => ({
      ...state,
      aluno: { ...state.aluno, nome: payload },
    })),
  addSobrenome: (payload) =>
    set((state) => ({
      ...state,
      aluno: { ...state.aluno, sobrenome: payload },
    })),
  addNomeSocialBoolean: (payload) =>
    set((state) => ({
      ...state,
      aluno: { ...state.aluno, nomeSocialBoolean: payload },
    })),
  addNomeSocial: (payload) =>
    set((state) => ({
      ...state,
      aluno: { ...state.aluno, nomeSocial: payload },
    })),
  addGenero: (payload) =>
    set((state) => ({
      ...state,
      aluno: { ...state.aluno, genero: payload },
    })),
  addContato: (payload) =>
    set((state) => ({
      ...state,
      aluno: { ...state.aluno, contato: payload },
    })),
  addEmail: (payload) =>
    set((state) => ({
      ...state,
      aluno: { ...state.aluno, email: payload },
    })),
}));

export type CursoType = {
  cursoOptions: string;
  dia: string;
  mes: string;
  ano: string;
  nomeEscola: string;
  anoEscola: string;
  endereco: string;
};

type CursoStore = {
  curso: CursoType;
  resetCurso: (payload: CursoType) => void;
  addCurso: (payload: string) => void;
  addDia: (payload: string) => void;
  addMes: (payload: string) => void;
  addAno: (payload: string) => void;
  addNomeEscola: (payload: string) => void;
  addAnoEscola: (payload: string) => void;
  addEndereco: (payload: string) => void;
};

export const useCursoStore = create<CursoStore>((set) => ({
  curso: {
    cursoOptions: "",
    dia: "",
    mes: "",
    ano: "",
    nomeEscola: "",
    anoEscola: "",
    endereco: "",
  },
  resetCurso: (payload) => set((state) => ({ ...state, curso: payload })),
  addCurso: (payload) =>
    set((state) => ({
      ...state,
      curso: { ...state.curso, cursoOptions: payload },
    })),
  addDia: (payload) =>
    set((state) => ({
      ...state,
      curso: { ...state.curso, dia: payload },
    })),
  addMes: (payload) =>
    set((state) => ({
      ...state,
      curso: { ...state.curso, mes: payload },
    })),
  addAno: (payload) =>
    set((state) => ({
      ...state,
      curso: { ...state.curso, ano: payload },
    })),
  addNomeEscola: (payload) =>
    set((state) => ({
      ...state,
      curso: { ...state.curso, nomeEscola: payload },
    })),
  addAnoEscola: (payload) =>
    set((state) => ({
      ...state,
      curso: { ...state.curso, anoEscola: payload },
    })),
  addEndereco: (payload) =>
    set((state) => ({
      ...state,
      curso: { ...state.curso, endereco: payload },
    })),
}));

export type ResponsavelType = {
  isResponsavel: string;
  nomeCompletoResponsavel: string;
  contatoResponsavel: string;
  contatoSecResponsavel: string;
  emailResponsavel: string;
};

type ResponsavelStore = {
  responsavel: ResponsavelType;
  resetResponsavel: (payload: ResponsavelType) => void;
  addResponsavel: (payload: string) => void;
  addNome: (payload: string) => void;
  addContato: (payload: string) => void;
  addContatoSec: (payload: string) => void;
  addEmail: (payload: string) => void;
};

export const useResponsavelStore = create<ResponsavelStore>((set) => ({
  responsavel: {
    isResponsavel: "",
    nomeCompletoResponsavel: "",
    contatoResponsavel: "",
    contatoSecResponsavel: "",
    emailResponsavel: "",
  },
  resetResponsavel: (payload) =>
    set((state) => ({ ...state, responsavel: payload })),
  addResponsavel: (payload) =>
    set((state) => ({
      ...state,
      responsavel: { ...state.responsavel, isResponsavel: payload },
    })),
  addNome: (payload) =>
    set((state) => ({
      ...state,
      responsavel: { ...state.responsavel, nomeCompletoResponsavel: payload },
    })),
  addContato: (payload) =>
    set((state) => ({
      ...state,
      responsavel: { ...state.responsavel, contatoResponsavel: payload },
    })),
  addContatoSec: (payload) =>
    set((state) => ({
      ...state,
      responsavel: { ...state.responsavel, contatoSecResponsavel: payload },
    })),
  addEmail: (payload) =>
    set((state) => ({
      ...state,
      responsavel: { ...state.responsavel, emailResponsavel: payload },
    })),
}));
