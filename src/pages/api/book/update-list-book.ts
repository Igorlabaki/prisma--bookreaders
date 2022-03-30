import { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const info  = JSON.parse(req.body)
  try {
    const savedBook = await prisma.userBooks.update({
      where:{
          id: info.bookId
      },
      data:{
          [info.typeList] : true
      }
    });
    resp.json(savedBook)
  } catch (error) {
    resp.json(error.message)
  }

}