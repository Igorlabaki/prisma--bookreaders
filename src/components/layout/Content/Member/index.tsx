import { Books, Posts, UsersBooks } from "@prisma/client"
import { useRouter } from "next/router"
import { useEffect } from "react"
import useMemberContext from "../../../../hook/useMemberContext"
import usePostsContext from "../../../../hook/usePostsContext"
import { BoxComponent } from "../../util/Box"
import { FeedComponent } from "../../util/Feed"
import { LoadingComponent } from "../../util/Loading"
import ChartComponent from "./chart"
import { BookContainer, CooverBook, MemberBooksContainer, MemberContainer, StatsContainer,DisplayBookContainer } from "./styles"

interface userIdProps{
    id?: any
}
export function MemberComponent({id}: userIdProps){
    const { member,getMember,getBooksMember,memberBooks,pagesRead,averagePages,longestBook,shortestBook,lastRead, getList,isLoading} = useMemberContext()
    const {userPosts,getUserPots} = usePostsContext()
    const router = useRouter()

    useEffect(() => {
        getList()   
        getBooksMember(id)
    }, [])
    return(
        <MemberContainer>
            <BoxComponent title="Stats"> 
                {isLoading ? 
                    <LoadingComponent/>
                    :
                <MemberBooksContainer>                   
                    <StatsContainer>
                        {member.username}
                        <p>Read Books: {memberBooks?.length}</p>
                        <p>Pages read: {pagesRead}</p>
                        <p>Average Pages: {averagePages}</p>
                    </StatsContainer>
                    <BookContainer>
                        {
                            <>  
                                <DisplayBookContainer>
                                    <CooverBook src={shortestBook?.book?.smallThumbnail} alt="" onClick={() => router.push(`/search/id/${shortestBook?.book?.google}`)}/>
                                    <div>
                                        <h3>Shortest</h3>
                                        <p>{`(${shortestBook?.book?.pageCount} pages)`}</p>
                                    </div>
                                </DisplayBookContainer>
                                <DisplayBookContainer>
                                    <CooverBook src={longestBook?.book?.smallThumbnail} alt=""  onClick={() => router.push(`/search/id/${longestBook?.book?.google}`)}/>
                                    <div>
                                        <h3>Longest</h3>
                                        <p>{`(${longestBook?.book?.pageCount} pages)`}</p>
                                    </div>
                                </DisplayBookContainer>
                                <DisplayBookContainer>
                                    <CooverBook src={lastRead?.book?.smallThumbnail} alt=""  onClick={() => router.push(`/search/id/${longestBook?.book?.google}`)}/>
                                    <h3>Last read</h3>
                                </DisplayBookContainer>
                            </>
                        }
                    </BookContainer>
                </MemberBooksContainer>
                }
            </BoxComponent>
            <FeedComponent type="userPost"></FeedComponent>
        </MemberContainer>
    )
}