import styled from "styled-components";

export const PhotoContainer = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    cursor: pointer;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2); 
    opacity: 1;
    display: block;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    border-radius: 50%;
    
    :hover{
        opacity: 0.5;
    }
`

export const NavProfileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 0.80rem;
    border-top-right-radius: 0.80rem;
    background-color: aliceblue;
    position: relative ;
    gap: 2rem;
    padding: 1rem;
`

export const InfoContainer = styled.div`
    height: 100% ;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;
    font-size: 1rem;
    gap: 0.5rem;
    padding-top: 1rem;
    label{
        font-weight: 600;
    }

    div{
        display: flex;
    }
`

export const ButtonFollowContainer = styled.button`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: #61a755;
    color:white;
    padding: 0.5rem;
    border-radius: 0.80rem;
    transition: filter 0.3s;
    width: 150px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    :hover{
        filter: brightness(1.1);
    }
    `

export const ButtonUnFollowContainer = styled.button`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    color: white;
    background-color: #F44336;
    padding: 0.5rem;
    border-radius: 0.80rem;
    transition: filter 0.3s;
    width: 150px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    :hover{
        filter: brightness(1.1);
    }
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
export const BookContainer = styled.div`
    display: flex;
    height: auto;
    gap: 1rem;
    width: 100%;
    align-items: flex-start;
 `

export const CooverBook = styled.img`
    height: 110px ;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`


export const MiddleContainer = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%)
`
