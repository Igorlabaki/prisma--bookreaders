import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const infoLike  = JSON.parse(req.body) 
  console.log(infoLike.idU) 
  try {
    const likes = await prisma.likes.findFirst({
      where:{
        post_id: infoLike.idP,
        user_id: infoLike.idU
      },  
    }); 
    resp.json(likes)
  } catch (error) {
    resp.json(error.message)
  }

}