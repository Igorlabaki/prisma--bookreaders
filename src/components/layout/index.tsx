import {Header} from "./Header";
import {Aside} from "./Aside"
import { LayoutContainer, MainContainer } from './style';
import { ReactNode, useEffect } from "react";
import { useRouter } from 'next/router'
import useModalContext from "../../hook/useModalContext";
import useUserContext from "../../hook/useUserContext";


interface LayoutProps{
    children: ReactNode;
}

export function LayoutComponent({children} : LayoutProps){

    const { asPath } = useRouter()
    const { user} = useUserContext()
    const {handleOpenLoginModal} = useModalContext()
    const router = useRouter()
    
    useEffect(() => {
        if(!user){
            router.push('/')
            handleOpenLoginModal()
        }
    }, [])
    

    function handleAsideProfile(){
        if(asPath.includes('profile') || asPath.includes('member')){
           return  <Aside profileMode={true}/>
        }else{
           return  <Aside profileMode={false}/>
        }
    }

    return(
        <LayoutContainer>
            <Header/>
            <MainContainer>
                {handleAsideProfile()}
                {children}
            </MainContainer>
        </LayoutContainer>
    )
}