import { LayoutComponent } from "../components/layout"
import { ProfileComponent } from "../components/layout/Content/Profile"
import useUserContext from "../hook/useUserContext"


export default function Profile(){
    return (
        <LayoutComponent>
            <ProfileComponent/>
        </LayoutComponent>
    )
}