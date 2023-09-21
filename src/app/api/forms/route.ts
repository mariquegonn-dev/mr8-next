// url: http://localhost:3000/api/forms
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const {
      nome,
      sobrenome,
      nomeSocialBoolean,
      nomeSocial,
      genero,
      contato,
      email,
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
    } = body;

    const newPost = await prisma.post.create({
      data: {
        nome,
        sobrenome,
        nomeSocialBoolean,
        nomeSocial,
        genero,
        contato,
        email,
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
      },
    });

    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
