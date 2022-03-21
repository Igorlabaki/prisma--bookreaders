import styled from "styled-components";

export const MemberContainer = styled.div`
    margin-left: 1rem;
    flex: 1;
`

export const MemberBooksContainer = styled.div`
 display: flex;
`
export const BookContainer = styled.div`
 display: flex;
 height: auto;
 gap: 1rem;
 width: 100%;
 align-items: flex-start;
 `

export const CooverBook = styled.img`
    height: 120px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`

export const DisplayBookContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column  ;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
     
    div{
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        justify-content: center;
        align-items: center;

        p{
            font-size: 0.7rem;
            color: gray;
        }
    }
`

export const StatsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap:1rem
`



