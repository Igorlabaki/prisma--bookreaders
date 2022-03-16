import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const userInfo  = JSON.parse(req.body)

  try {
    const savedUser = await prisma.users.create({
      data: {
        email:    userInfo.email,
        password: userInfo.password,
        username: userInfo.username,
      },
    });
    resp.json(savedUser)
    console.log(resp.json(savedUser))
  } catch (error) {
    resp.json(error.message)
  }

}