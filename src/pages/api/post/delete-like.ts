import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const idLike  = JSON.parse(req.body)  
  try {
    const deletedlike = await prisma.likes.delete({
        where:{
            id: idLike
        }
    });

    resp.json(deletedlike)
  } catch (error) {
    resp.json(error.message)
  }

}