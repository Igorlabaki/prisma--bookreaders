import { useRouter } from "next/router";
import { LayoutComponent } from "../../../components/layout";



export default function Home(){
   const {query:{id}} = useRouter()

   return(
    <LayoutComponent>
 
   </LayoutComponent>
   ) 
}
