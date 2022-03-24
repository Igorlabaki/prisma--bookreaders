import { Books, Posts, UsersBooks } from "@prisma/client"
import { useRouter } from "next/router"
import { getMaxListeners } from "process"
import { useEffect } from "react"
import useFriendsContext from "../../../../hook/useFollowContext"
import useMemberContext from "../../../../hook/useMemberContext"
import usePostsContext from "../../../../hook/usePostsContext"
import useUserContext from "../../../../hook/useUserContext"
import { BoxComponent } from "../../util/Box"
import { FeedComponent } from "../../util/Feed"
import { LoadingComponent } from "../../util/Loading"
import {MemberBooksContainer, MemberContainer, StatsContainer } from "./styles"

interface userIdProps{
    id?: any
}
export function MemberComponent({id}: userIdProps){
    const {user} = useUserContext()
    const {getPagesRead,getBooksMember} = useMemberContext()
   

    useEffect(() => {
        getBooksMember(id)
    }, [])
    


    return(
        <MemberContainer>   
            <FeedComponent type="userPost"></FeedComponent>
        </MemberContainer>
    )
}
