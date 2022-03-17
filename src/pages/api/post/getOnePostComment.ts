import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const idPost  = JSON.parse(req.body)  
  try {
    const comments = await prisma.comments.findMany({
      where:{
        post_id: idPost
      },  
      include:{
            user: true,
            post: true     
        },
        orderBy:{
            created_at: 'asc'
        }
    });
    resp.json(comments)
  } catch (error) {
    resp.json(error.message)
  }

}