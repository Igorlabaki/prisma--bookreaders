import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  
  try{
      const result = await prisma.posts.findMany({
       include:{
           user: true,
           book: true
       }
      })
      resp.send(result)
  }catch (error) {
    resp.json(error.message)
    console.log('jorge')
  }

}