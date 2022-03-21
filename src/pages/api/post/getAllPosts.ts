import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  try {
    const posts = await prisma.posts.findMany({
        include:{
            user: true,
            book: true,
            Comments: true,
            Likes: true      
        },
        orderBy:{
            created_at: 'desc'
        }
    });
    resp.json(posts)
  } catch (error) {
    resp.json(error.message)
    console.log(error.message)
  }

}