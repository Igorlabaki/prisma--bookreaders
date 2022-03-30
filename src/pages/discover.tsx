import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { useEffect } from "react"
import { LayoutComponent } from "../components/layout"
import { DiscoverComponent } from "../components/layout/Content/DiscoverComponent"
import useUserContext from "../hook/useUserContext"


export default function Home({session}){

  const {login,user} = useUserContext()

    useEffect(() => {
      login(session?.user.email)
    }, [])
    

    return (
        <LayoutComponent>
            <DiscoverComponent/>
        </LayoutComponent>
    )
}

  
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session =  await getSession(context)

    return {
      props: {
        session: session
      },
    }
  }