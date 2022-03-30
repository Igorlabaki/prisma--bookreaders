import { useState }    from "react";
import { InputPost } from "./styles";
import usePostsContext from "../../../../hook/usePostsContext";
import useUserContext from "../../../../hook/useUserContext";
import { Posts } from "@prisma/client";

interface InputProps{
    post?: Posts
}

export function InputPostComponent({post}:InputProps){
    
    const {user}                    = useUserContext()
    const {createPost,isLoading,createComment}    = usePostsContext()

    const [textInput, setTextInput] = useState('')

    const postInput = {
        text: textInput,
        user_id: user?.id
    }

    function handleButton(){
        if(post){
            const commentInput = {
                text: textInput,
                post_id: post?.id,
                user_id: user?.id,
            }
            return(
                <>
                    <button onClick={(e) => 
                    {e.preventDefault();
                    createComment({
                        commentInput
                    });
                    setTextInput("")}
                    }>
                        Comment
                    </button>
                </>
            )
        }else{
            return(
            <>
               <button 
                    onClick={ (e) =>{
                        e.preventDefault();
                        createPost({
                            postInput
                        });               
                        setTextInput("")}
                    }>
                    <p>Post</p>
                </button>
            </>
            )
        }
    }


    return(
        <>
            <InputPost>
                <textarea placeholder={"I Love Books..."} value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                {handleButton()}
            </InputPost>
        </>
    )
}
