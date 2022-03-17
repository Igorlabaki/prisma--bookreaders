import { useEffect, useState } from "react"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import usePostsContext from "../../../../../../hook/usePostsContext"
import useUserContext from "../../../../../../hook/useUserContext"
import { LikeIconContainer } from "../styles"

interface likeProps{
    post: any
}

export function LikeComponent({post}: likeProps){

    const {posts,isLoading,createLike,deleteLike} = usePostsContext()
    const {user} = useUserContext()
    const [liked, setLiked] = useState<Boolean>()
    const [likeId, setLikeId] = useState<String>()
    const [linkLength, setLinkLength] = useState<number>()

    useEffect(() => {

    }, [])
    
   

    async function getLike(postId:String, userId: String){
        const info = {
            idP:postId,
            idU: userId
        }
        try {
            const response =  await fetch('/api/post/getOnePostLike',{
            method:'POST',
            body: JSON.stringify(info)
            })
            const result    = await response.json()
            if(result){
                setLiked(true)
                setLikeId(result.id)
            }else{
                setLiked(false)
            }
        } catch (error) {
            console.log(error)          
        }
    }


    function handleLikeChange(post){
        getLike(post.id,user.id)
        if(liked){
            return (
                <LikeIconContainer onClick={() => {deleteLike(likeId)}} >
                        <FcLike fontSize={20} cursor={'pointer'}/>  {`(${post.Comments.length})`}
                </LikeIconContainer> 
            )
        }else{
            return (
                <LikeIconContainer>
                    <FcLikePlaceholder fontSize={20} cursor={'pointer'} onClick={() =>{ createLike(post,user.id)}}/>
                    {`(${post.Likes.length})`}
                </LikeIconContainer>
            )
        }
    }

    return(
        <>
            {handleLikeChange(post)}
        </>
    )
}