import { LayoutComponent } from "../components/layout"
import { DiscoverComponent } from "../components/layout/Content/DiscoverComponent"
import useUserContext from "../hook/useUserContext"


export default function Home(){
    const {user} =  useUserContext()
    return (
        <LayoutComponent>
            <DiscoverComponent/>
        </LayoutComponent>
    )
}