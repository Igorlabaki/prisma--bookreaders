
import { useEffect } from "react"
import useMemberContext from "../../../../hook/useMemberContext"
import useUserContext from "../../../../hook/useUserContext"
import getMember from "../../../../pages/api/user/get-member"
import { FeedComponent } from "../../util/Feed"
import {ProfileContainer} from "./styles"

interface userIdProps{
    id?: any
}
export function ProfileComponent({id}: userIdProps){

    const {user} = useUserContext()
    const { getMember} =  useMemberContext()

    useEffect(() => {
        getMember(user.id)
    }, [])
    
    return(
        <ProfileContainer>   
            <FeedComponent type="userPost"></FeedComponent>
        </ProfileContainer>
    )
}
