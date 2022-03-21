import { useRouter } from "next/router";
import { LayoutComponent } from "../../../components/layout";
import { SearchListComponent } from "../../../components/layout/Content/Search/list";

export default function Home(){
   const {query:search} = useRouter()

   return(
    <LayoutComponent>
       <SearchListComponent search={search} />
   </LayoutComponent>
   ) 
}
