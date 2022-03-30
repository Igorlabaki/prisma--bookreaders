import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const email  = JSON.parse(req.body)
console.log(email)
  try {
    const login = await prisma.user.findFirst({
      where:{
          email: email,
      },
      include:{
        Books: true ,
        Posts: true,
        followers:true,
        following:true,
      }
    });
    resp.json(login)
  } catch (error) {
    resp.json(error.message)
    console.log(error)
  }

}