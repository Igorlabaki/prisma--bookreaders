import moment          from 'moment'
import { Posts } from "@prisma/client"
import { BoxComponent } from "../../../util/Box"
import { LoadingComponent } from "../../../util/Loading"
import { InputPostComponent } from "../../../util/inputPost"
import usePostsContext from "../../../../../hook/usePostsContext"
import { CommentIconContainer, EditContainer, IconsContainer, LikeIconContainer, Photo, PostContainer, PostContent, PostHeader, PostTextContainer, RelativeContainer } from "./styles"
import { EditComponent } from './edit'
import { CommentComponent } from './coment'
import { FcComments, FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { IoIosArrowDown } from 'react-icons/io'
import { useEffect, useState } from 'react'
import useUserContext from '../../../../../hook/useUserContext'
import { LikeComponent } from './like'

export function FeedComponent(){

    const {posts,isLoading,createLike,deleteLike} = usePostsContext()
    const {user} = useUserContext()
    const [liked, setLiked] = useState<any>()
    const [likeId, setLikeId] = useState<String>()

    useEffect(() => {
    }, [])


    return (
        <BoxComponent title="Feed">
            <InputPostComponent/>
            {isLoading ? 
                <LoadingComponent/> 
            :
            <>
                {posts?.map((post) => {
                    return(
                        <PostContainer key={post.id}>
                            <Photo src={post.user.avatar} alt="" />
                            <PostContent>
                                <PostHeader>
                                    <p>{post.user.username}</p>
                                    <EditContainer>
                                        <p><span>Posted at {moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                                        <EditComponent post={post}/>
                                    </EditContainer>
                                </PostHeader>
                                <PostTextContainer>
                                    <p>{post.text}</p>
                                </PostTextContainer>
                                <IconsContainer>
                                    <LikeComponent post={post}/>
                                    <CommentIconContainer>
                                        <FcComments fontSize={20} color={'rgb(188, 252, 179)'} /> {`(${post.Comments.length})`}                  
                                    </CommentIconContainer>
                                </IconsContainer>
                                {post.Comments  ? <CommentComponent post={post}/> : null}
                                <InputPostComponent post={post}/>
                            </PostContent>
                        </PostContainer>
                    )
                })}
            </>
            }
        </BoxComponent>
    )
}