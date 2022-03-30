import { useEffect, useState } from 'react'
import {FcComments, FcLike, FcLikePlaceholder} from 'react-icons/fc'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { CommentButton, CommentEditContainer, CommentInfo, Comment, Photo, PostHeader } from './styles'
import { ComentBody, ComentContainer } from './styles'
import { EditComponent } from '../edit'
import moment from 'moment'
import usePostsContext from '../../../../../hook/usePostsContext'
import useUserContext from '../../../../../hook/useUserContext'

interface EditProps{
   post: any
}

export function CommentComponent({post}: EditProps){

    const {} = usePostsContext()
    const {user} = useUserContext()
    const [comment, setComment] = useState(false)
    const [commentList, setCommentList] = useState([])

    useEffect(() => {
        getOnePostComment(post.id)
    }, [])

    function handleArrowDown(){
        if(post.Comments.length > 0){
            return(
                <>
                    <IoIosArrowDown fontSize={12} cursor={'pointer'} className='comment-arrow'/>
                </>
            )
        }
    }


    async function  getOnePostComment (postId: String){
        try {
            const response =  await fetch('/api/post/getOnePostComment',{
            method:'POST',
            body: JSON.stringify(postId)
            })
            const result    = await response.json()
            setCommentList(result)
        } catch (error) {
            console.log(error)          
        }
    }
  
    return (
        <Comment>
            <CommentButton onClick={() => setComment(!comment)}>
       
                {comment ?  
                    <IoIosArrowUp fontSize={12} cursor={'pointer'}  className='comment-arrow' /> 
                    : 
                    <>
                       {handleArrowDown()}
                        
                    </>
                }
            </CommentButton>
            {comment  ? 
                <>
                    {commentList.map((comment:any) => {
                        return(
                            <>
                                <ComentBody key={comment.id}>
                                    <Photo src={comment.user.image} alt="avatar" />
                                    <CommentInfo>
                                        <CommentEditContainer>
                                            <PostHeader>
                                                <p>{comment.user.name}</p>
                                                <p><span>Posted at {moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
                                            </PostHeader>
                                        <EditComponent comment={comment}></EditComponent>   
                                        </CommentEditContainer>
                                        <ComentContainer >{comment.text}</ComentContainer> 
                                    </CommentInfo>
                                </ComentBody>
                            </>
                        )
                    })}
                </>
            : null}     
        </Comment>
    )
}
