// url: http://localhost:3000/api/posts/id
import prisma from "@/libs/prismadb";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: Params) => {
  try {
    const { id } = params;

    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 500 });
    }

    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const DELETE = async (request: Request, { params }: Params) => {
  try {
    const { id } = params;

    await prisma.post.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Post has been deleted");
  } catch (err) {
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
};
