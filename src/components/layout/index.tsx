import {Header} from "./Header";
import {Aside} from "./Aside"
import { LayoutContainer, MainContainer } from './style';
import { ReactNode, useEffect } from "react";
import { useRouter } from 'next/router'
import useModalContext from "../../hook/useModalContext";
import useUserContext from "../../hook/useUserContext";
import { useSession, getSession } from "next-auth/react"
import { GetServerSideProps } from "next";
interface LayoutProps{
    children: ReactNode;
}

export function LayoutComponent({children} : LayoutProps){

    const { asPath } = useRouter()
    const { login,user} = useUserContext()
    const {handleOpenLoginModal} = useModalContext()
    const router = useRouter()

    const {data: session} = useSession()

    useEffect(() => {
        if(!session){
            router.push('/')
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
        <>
            {session ? 
                <LayoutContainer>
                    <Header/>
                    <MainContainer>
                        {handleAsideProfile()}
                        {children}
                    </MainContainer>
                </LayoutContainer>
                :
                <p>jorge</p>
            }
        </>
    )
}

