import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const info = JSON.parse(req.body)
  try {
    const reading = await prisma.userBooks.findMany({
      where:{
        list_type: info.typeList,
        fk_id_user: info.userId 
      },
      include:{
          book: true,
          user: true
      }
    });
    resp.json(reading)
  } catch (error) {
    console.log(error)
    resp.json(error.message)
  }

}


