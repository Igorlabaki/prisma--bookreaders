import { useRouter } from "next/router";
import { useEffect } from "react";
import { LayoutComponent } from "../../../components/layout";


export default function Home(){
   const {query:search} = useRouter()

   return(
    <LayoutComponent>
     
   </LayoutComponent>
   ) 
}
