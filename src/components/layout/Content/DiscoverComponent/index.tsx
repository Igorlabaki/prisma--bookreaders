import { Posts } from "@prisma/client";
import { useEffect } from "react";
import usePostsContext from "../../../../hook/usePostsContext";
import { BoxComponent } from "../../util/Box";
import { InputPostComponent } from "../../util/inputPost";
import { LoadingComponent } from "../../util/Loading";
import { SliderComponent } from "./Slider";
import { DiscoverContainer } from "./style";

export function DiscoverComponent(){

    const {posts,getAllPosts,isLoading} = usePostsContext()
    
    useEffect(() => {
        getAllPosts()
    }, [])
    
    function renderPosts(){
        getAllPosts()
        return(
            <>
            {posts?.map((post: Posts) => {
                return(
                    <p>{post.id}</p>
                )
            })}
            </>
        )
    }

    return(
        <DiscoverContainer>
            <SliderComponent/>
            <LoadingComponent></LoadingComponent>
            <BoxComponent title="Feed">
                <InputPostComponent/>
                {isLoading ? 
                    <LoadingComponent/> 
                :
                    renderPosts()
                }
            </BoxComponent>
        </DiscoverContainer>
    )
}