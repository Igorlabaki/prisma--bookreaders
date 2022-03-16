import { useState }    from "react";
import { InputPost } from "./styles";
import usePostsContext from "../../../../hook/usePostsContext";
import useUserContext from "../../../../hook/useUserContext";

export function InputPostComponent(){
    
    const {user}                    = useUserContext()
    const {createPost,isLoading}    = usePostsContext()

    const [textInput, setTextInput] = useState('')

    const postInput = {
        text: textInput,
        user_id: user.id
    }


    return(
        <>
            <InputPost>
            <textarea placeholder={"I Love Books..."} value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
            <div>
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
            </div>
            </InputPost>
        </>
    )
}
