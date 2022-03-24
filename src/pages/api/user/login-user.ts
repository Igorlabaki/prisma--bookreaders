import { Console } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const userInfo  = JSON.parse(req.body)

  try {
    const login = await prisma.users.findFirst({
      where:{
          email:    userInfo.email,
          password: userInfo.password
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
  }

}