import { useRouter } from "next/router";
import { LayoutComponent } from "../../../components/layout";
import { SearchComponent } from "../../../components/layout/Content/Search/id";



export default function Home(){
   const {query:{id}} = useRouter()

   return(
    <LayoutComponent>
      <SearchComponent id={id}/>
   </LayoutComponent>
   ) 
}
