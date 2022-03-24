import { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const info  = JSON.parse(req.body)
  try {
    const follow = await prisma.follows.create({
      data:{
        followerId: info.followerId,
        followingId:  info.followingId,
      }
    });
    resp.json(follow)
  } catch (error) {
    resp.json(error.message)
    console.log(error)
  }

}