import { useEffect } from "react";
import useBookContext from "../../../hook/useBookContext";
import PhotoModalComponent  from "./Modal";
import { NavDefault}        from "./Nav/NavDefault";
import { NavProfile }       from "./Nav/NavProfile";
import { ContainerAside }   from "./style";

interface AsideProps{
    profileMode?:Boolean
}

export function Aside({profileMode}:AsideProps){

    /*const {pageRead,getCountPages} =     useBookFirebaseContext()*/
    
    useEffect(() => {
        /*getCountPages()*/
    }, [])
    

    return(
        <ContainerAside>
            {
                profileMode ? 
                <>
                   <NavProfile/>
                </>
                :    
                <NavDefault/>
            }
            <PhotoModalComponent/>
        </ContainerAside>
    )
}