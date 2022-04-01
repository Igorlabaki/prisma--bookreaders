import { LayoutComponent } from "../components/layout"
import { ProfileComponent } from "../components/layout/Content/Profile"
import useUserContext from "../hook/useUserContext"
import prisma from "../service/prisma"


export default function Profile( {reading,read,want}){
    return (
        <LayoutComponent>
            <ProfileComponent/>
        </LayoutComponent>
    )
}

export async function getServerSideProps(context) {

    return {
      props: {  },
    }
  }