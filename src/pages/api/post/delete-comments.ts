import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const idComment  = JSON.parse(req.body)  
  try {
    const deletedPost = await prisma.comments.delete({
        where:{
            id: idComment
        }
    });

    resp.json(deletedPost)
  } catch (error) {
    resp.json(error.message)
  }

}