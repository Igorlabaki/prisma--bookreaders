import moment          from 'moment'
import { Posts } from "@prisma/client"

import { CommentIconContainer, EditContainer, IconsContainer, LikeIconContainer, Photo, PostContainer, PostContent, PostHeader, PostTextContainer, RedirectComponent, RelativeContainer } from "./styles"
import { EditComponent } from './edit'
import { CommentComponent } from './coment'
import { FcComments, FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { IoIosArrowDown } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { LikeComponent } from './like'
import { BookComponent } from './book'
import { useRouter } from 'next/router'
import usePostsContext from '../../../../hook/usePostsContext'
import useMemberContext from '../../../../hook/useMemberContext'
import usePaginationContext from '../../../../hook/usePaginationContext'
import { InputPostComponent } from '../inputPost'
import { BoxComponent } from '../Box'
import { LoadingComponent } from '../Loading'
import { PaginationComponent } from '../pagination'

interface FeedProps{
    type: string
}

export function FeedComponent({type}: FeedProps){

    const {isLoading,createLike,getAllPosts,posts,userPosts,getUserPots} = usePostsContext()
    const {getMember,getBooksMember,member} = useMemberContext()
    const {currentPage,elementsPerPage} = usePaginationContext()
    const router = useRouter()

    useEffect(() => {
        getAllPosts()
        getUserPots(member?.id)
    }, [])

    const indexOfLastBook   = currentPage       * elementsPerPage
    const indexOfFirstPost  = indexOfLastBook       - elementsPerPage
    let currentBooks

    if(type.includes('allPosts')){
        currentBooks      = posts?.slice(indexOfFirstPost,indexOfLastBook)
    }

    if(type.includes('userPost')){
        currentBooks      = userPosts?.slice(indexOfFirstPost,indexOfLastBook)
    }

    return (
        <BoxComponent title="Feed">
            {
                !type.includes('userPost') ? <InputPostComponent/> : null
            }
            {isLoading ? 
                <LoadingComponent/> 
            :
            <>
                {currentBooks?.map((post) => {
                    return(
                        <PostContainer key={post.id}>
                            <Photo src={post.user.avatar} alt="" />
                            <PostContent>
                                <PostHeader>
                                    <RedirectComponent onClick={() => {
                                        getMember(post.user.id)
                                        router.push(`/member/${post.user.id}`)
                                        }}>{post.user.username}</RedirectComponent>
                                    <EditContainer>
                                        <p><span>Posted at {moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                                        <EditComponent post={post}/>
                                    </EditContainer>
                                </PostHeader>
                                {post?.book?.title ?
                                    <BookComponent  post={post}/>
                                    :
                                    <PostTextContainer>
                                        <p>{post.text}</p>
                                    </PostTextContainer>
                                }
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
           <PaginationComponent type={type}/>
            </>
            }
        </BoxComponent>
    )
}