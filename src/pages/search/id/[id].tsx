import axios from "axios";
import { useRouter } from "next/router";
import { LayoutComponent } from "../../../components/layout";
import { SearchComponent } from "../../../components/layout/Content/Search/id";



export default function Home({list}){
   const {query:{id}} = useRouter()
 
   return(
    <LayoutComponent>
      <SearchComponent id={id} authorList={list}/>
   </LayoutComponent>
   ) 
}

export async function getServerSideProps(context) {
   const { id } = context.query;
   const list = []
   let author = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
               .then(resp => resp.data.volumeInfo?.authors[0])

   author = author?.replace(' ' , '+')
   const url = `q=a+inauthor:${author}`

   const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes?${url}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ`)
         .then(resp => {
            for (let index = 0; index < resp.data.items.length; index++) {
               list.push(resp.data.items[index]);
            }
         })
   return {
     props: { list },
   }
 }
