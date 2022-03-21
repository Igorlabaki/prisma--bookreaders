import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const postInfo  = JSON.parse(req.body)
  try {
    const savedLike = await prisma.likes.create({
      data:{
        like: true,
        post:{
          connect:{
            id: postInfo.idP
          }
        },
        user:{
          connect:{
            id: postInfo.idU
          }
        }
      }
    });
    resp.json(savedLike)
  } catch (error) {
    console.log(error)
    resp.json(error.message)
  }

}