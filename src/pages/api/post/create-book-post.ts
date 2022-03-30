import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const postInfo  = JSON.parse(req.body)
  try {
    const savedBookUser = await prisma.userBooks.create({
      data: {
        book:{
          connect:{
            id: postInfo.bookId
          }
        },
        user:{
          connect:{
            id: postInfo.userId
          }
        }
      },
    });
    const savedPost = await prisma.posts.create({
      data: {
       text: postInfo.postText,
       user:{
           connect:{
               id: postInfo.userId
           }
       },
       book:{
         connect:{
           id: postInfo.bookId
         }
       }

      },
    }); 
    resp.json(savedBookUser)
  } catch (error) {
    resp.json(error.message)
  }

}