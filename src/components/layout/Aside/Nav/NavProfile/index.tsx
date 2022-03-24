import PhotoModalComponent  from "../../Modal";
import { PhotoContainer,NavProfileContainer, InfoContainer, ButtonFollowContainer, ButtonUnFollowContainer, DisplayBookContainer, CooverBook, BookContainer} from "./style";
import useModalContext from "../../../../../hook/useModalContext";
import useUserContext from "../../../../../hook/useUserContext";
import useMemberContext from "../../../../../hook/useMemberContext";
import { useEffect, useState } from "react";
import { LoadingComponent } from "../../../util/Loading";
import useFollowContext from "../../../../../hook/useFollowContext";
import { useRouter } from "next/router";
import getMember from "../../../../../pages/api/user/get-member";

export function NavProfile(){

    const {user} = useUserContext()
    const {handleOpenPhotoModal} = useModalContext()
    const { member,getPagesRead,getBooksMember,memberBooks, 
        getAveragePages,getMember,getLongestBook,getShortestBook,getLastRead} = useMemberContext()
    const { follow,unfollow} = useFollowContext()
    const router = useRouter()

    const memberid = router.asPath.slice(8)

    useEffect(() => {
        getMember(memberid)
    }, [])
    
   function handleFollow(){
        if(user?.following?.filter( (item) => item.followingId = member?.id).length == 0){
            return(
                <ButtonFollowContainer onClick={() => {
                    follow(user?.id,member?.id)
                }}>
                        Follow 
                </ButtonFollowContainer>
            )
        }else{
            return(
                <ButtonUnFollowContainer onClick={() => {
                    unfollow(user?.id,member?.id)
                }}>
                        Unfollow
                </ButtonUnFollowContainer>
            )
        }
   }


   const shortest    =   getShortestBook(memberBooks)
   const longest     =   getLongestBook(memberBooks)
   const lastBook    =   getLastRead(memberBooks)
   const pagesRead   =   getPagesRead(memberBooks)
   const averagePages=   getAveragePages(memberBooks)


    return(
        <>
            <NavProfileContainer>
                { user?.id == member?.id ? <PhotoContainer src={member?.avatar} alt="" onClick={handleOpenPhotoModal}/> : <PhotoContainer src={member?.avatar} alt=""/>}
                <PhotoModalComponent/>
                <InfoContainer>
                    <div>
                        <label>Username:&nbsp;</label>
                        <p>{member?.username}</p>    
                    </div>
                    <div>
                        <label>Books read: &nbsp;</label>
                        <p>{memberBooks?.length}</p>    
                    </div>
                    <div>
                        <label>Pages read: &nbsp;</label>
                        <p>{pagesRead}</p>    
                    </div>
                    <div>
                        <label>Average pages: &nbsp;</label>
                        {averagePages != NaN ? <p>{averagePages}</p> : null}    
                    </div>
                    {   
                    member?.id != user?.id ?
                     handleFollow()
                    :
                        null
                    }
                </InfoContainer>`
                <BookContainer>
                    {
                        shortest ?
                        <DisplayBookContainer>
                        <CooverBook src={shortest?.book?.smallThumbnail} alt="" onClick={() => router.push(`/search/id/${shortest?.book?.google}`)}/>
                        <div>
                            <h3>Shortest</h3>
                            <p>{`(${shortest?.book?.pageCount} pages)`}</p>
                        </div>
                        </DisplayBookContainer> : null
                    }
                   {
                       longest ? 
                        <DisplayBookContainer>
                            <CooverBook src={longest?.book?.smallThumbnail} alt=""  onClick={() => router.push(`/search/id/${longest?.book?.google}`)}/>
                            <div>
                                <h3>Longest</h3>
                                <p>{`(${longest?.book?.pageCount} pages)`}</p>
                            </div>
                        </DisplayBookContainer> : null
                   }
                    { lastBook ? 
                    <DisplayBookContainer>
                        <CooverBook src={lastBook?.book?.smallThumbnail} alt=""  onClick={() => router.push(`/search/id/${lastBook?.book?.google}`)}/>
                        <h3>Last read</h3>
                    </DisplayBookContainer> : null
                    }
                </BookContainer>
            </NavProfileContainer>
        </>
    )
}