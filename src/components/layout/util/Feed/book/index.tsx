import { useRouter } from "next/router"
import { useEffect } from "react"
import { PostBookContainer, PostTextContainer } from "./styles"

interface BookComponentProps{
    post: any
}

export function BookComponent({post}: BookComponentProps){

    useEffect(() => {

    }, [])
    
    const router = useRouter()
    return (
        <PostBookContainer>
            <img src={post.book.smallThumbnail} onClick={() => router.push(`/search/id/${post.book.google}`)} alt="book-cover" />
            <div>
                <h3 onClick={() => router.push(`/search/id/${post.book.google}`)}>{post.book.title}</h3>
                <p>{`${post.book.description}...`}</p>
                <span>
                    <p><strong>Author:&nbsp;</strong>{post.book.author}</p>
                    <p><strong>Pages:&nbsp;</strong>{post.book.pageCount}</p>
                </span>
                <PostTextContainer>
                    <p>{post.text}</p>
                </PostTextContainer>
            </div>
        </PostBookContainer>
    )
}
