import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const idInput  = JSON.parse(req.body)
  try {
    const memberBooks = await prisma.userBooks.findMany({
      where:{
          fk_id_user: idInput,
      },
      include:{
        book: true,
        user: true
      }
    });
    resp.json(memberBooks)
} catch (error) {
    console.log(error)
  }
}