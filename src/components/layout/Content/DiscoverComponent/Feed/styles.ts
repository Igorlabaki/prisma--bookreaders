import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    min-height: 100px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

export const PostContent = styled.div`
    display:flex ;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
    position: relative;
`

export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.2rem;

    span{
        font-size: 0.8rem;
        color: gray;
    }
`
export const Photo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`



export const PostTextContainer = styled.div`
    width: 100%;
    border-top-right-radius: 0.80rem;
    border-bottom-right-radius: 0.80rem;
    border-bottom-left-radius: 0.80rem;
    padding: 1.5rem;
    background-color: var(--blue-secundary);
    font-weight: 700;
`

export const EditContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;

    div{
        cursor: pointer;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: start;
    align-items: center;
    gap: 1rem;

    div{
    
    }
`

export const LikeIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
    color: rgb(252, 153, 162);
    font-size: 0.8rem;
`

export const CommentIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1rem;
    color: #8BC34A;
    font-size: 0.8rem;
`

export const RelativeContainer = styled.div`
    position: relative;
`