import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const commentInfo  = JSON.parse(req.body)
  try {
    const savedComment = await prisma.comments.create({
      data:{
        text: commentInfo.commentInput.text,
        post:{
          connect:{
            id: commentInfo.commentInput.post_id
          }
        },
        user:{
          connect:{
            id: commentInfo.commentInput.user_id
          }
        }
      }
    });
    resp.json(savedComment)
  } catch (error) {
    resp.json(error.message)
  }

}