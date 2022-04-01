import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  try {
    const userBooks = await prisma.userBooks.findMany({
        include:{
            user: true,
            book: true,    
        },
    });
    resp.json(userBooks)
  } catch (error) {
    resp.json(error.message)
    console.log(error.message)
  }

}