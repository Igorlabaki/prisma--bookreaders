import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const idPost  = JSON.parse(req.body)  
  try {
    const deletedPost = await prisma.posts.delete({
        where:{
            id: idPost
        }
    });
    resp.json(deletedPost)
  } catch (error) {
    console.log('nao encontrado')
    resp.json(error.message)
  }

}