import { useEffect } from "react";
import { FeedComponent } from "./../../util/Feed"
import { SliderComponent } from "./Slider";
import { DiscoverContainer } from "./style";
import usePostsContext from "../../../../hook/usePostsContext";

export function DiscoverComponent(){

    const {posts,getAllPosts,isLoading} = usePostsContext()
    
    useEffect(() => {
        getAllPosts()
    }, [])
    
    return(
        <DiscoverContainer>
            <SliderComponent/>
            <FeedComponent type="allPosts"/>
        </DiscoverContainer>
    )
}