import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../service/prisma";

export default async (req:NextApiRequest,resp: NextApiResponse) => {
  const item = JSON.parse(req.body)
  let authors 
  let categories 
  let description
 
  if(item.book.volumeInfo?.categories != undefined){
    categories = item.book.volumeInfo?.categories[0]
  }
  if(item.book.volumeInfo?.authors != undefined){
    authors = item.book.volumeInfo?.authors[0]
  }

  if(item.book.volumeInfo?.description != undefined){
    description = item.book.volumeInfo?.description.slice(0,  200)
  }

  try {
    const savedBook = await prisma.books.create({
      data: {
        authors:        authors     || "",
        categories:     categories   || "",
        description:    description     || "",
        pageCount:      item.book.volumeInfo?.pageCount || "",
        google:         item.book.id,
        publishedDate:  item.book.volumeInfo?.publishedDate   || "",
        smallThumbnail: item.book.volumeInfo?.imageLinks.smallThumbnail || "",
        subtitle:       item.book.volumeInfo?.subtitle        || "",
        title:          item.book.volumeInfo?.title        || "",
      },
    });

    resp.json(savedBook)
  } catch (error) {
    console.log(error)
    resp.json(error.message)
  }

}


