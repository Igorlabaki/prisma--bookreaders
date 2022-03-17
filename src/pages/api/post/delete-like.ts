import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const idLike  = JSON.parse(req.body)  
  console.log(idLike)
  try {
    const deletedlike = await prisma.likes.delete({
        where:{
            id: idLike
        }
    });

    resp.send('Post deleted')
  } catch (error) {
    resp.json(error.message)
  }

}