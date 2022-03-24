import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const idInput  = JSON.parse(req.body)
  try {
    const member = await prisma.users.findFirst({
      where:{
          id: idInput
      },
      include:{
        Books: true ,
        Posts: true,
        followers:true,
        following:true,
      }
    });
    resp.json(member)
  } catch (error) {
    console.log(error)
  }

}