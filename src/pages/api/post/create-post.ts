import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const postInfo  = JSON.parse(req.body)
  
  try{
    const result = await prisma.posts.create({
      data:{
        text: postInfo.postInput.text,
        user:{
          connect:{
            id: postInfo.postInput.user_id
          }
        },
      }
    })
  }catch (error) {
    resp.json(error.message)
  }

}