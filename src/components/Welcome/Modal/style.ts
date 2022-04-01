import styled from "styled-components";

export const ModalContainer = styled.div`
    position:relative;

    h1{
        color: var(--blue-primary);
        font-size: 1.5rem;
        font-weight: 700;
        font-size: 2rem;
        text-align: start;
        margin-bottom: 40px;
    }
`

export const Title = styled.h1`

        color: var(--blue-primary);
        font-size: 1.5rem;
        font-weight: 700;
        font-size: 2rem;
        text-align: start;
        margin-bottom: 40px;

`

export const Input = styled.input`
        outline: none;
        border: none;
        border-radius:0.25rem;
        line-height: 2rem;
        font-size: 1.1rem;
        margin-bottom: 20px;
        padding: 10px 20px;
        :focus{
            background-color: rgba(219, 234, 254);
        }

`


export const ButtonContainer = styled.button`
    color: white;
    border-radius: 0.55rem;
    padding:10px;
    font-size: 1.25rem;
    border:0;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    width: 100%;
    background-color: var(--blue-primary);
    transition: background-color 400ms;
    margin-bottom: 5px;
    transition: filter 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    :hover{
        filter: brightness(1.4);
    }

    p{
        margin-right: 5px;
    }
  
`

