import styled from "styled-components";

export const FormContainer = styled.form`
    background-color: transparent;
    position: relative;
    h1{
        color: var(--blue-primary);
        font-size: 1.5rem;
        font-weight: 700;
        font-size: 2rem;
        text-align: start;
        margin-bottom: 40px;
    }

    .close-button{
        font-size: 1.1rem;
        color:rgba(125, 124, 124);
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        border: 0;
        background:transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.4);
        }
    }

    .redirect-text{
        margin: 10px 3px;
        font-size: 1.05rem;

        button{
            border:0;
            background-color: transparent;
            color: var(--blue-primary);
            font-size: 1.05rem;
            padding-left: 5px;
            transition: font-weight 0.25s;
            
            :hover{
                font-weight: 700;
            }
        }
    }

    .border-error{
        border: 3px solid  #ff9999 ;
    }
`

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    min-width: 100%;
    align-items:center;
    color:rgb(232, 51, 51);;
    font-weight: 700;
    padding: 1rem;
    border-radius: 0.60rem;
    margin-bottom:1rem;
    background-color: #ff9999;
    top:2rem;
`