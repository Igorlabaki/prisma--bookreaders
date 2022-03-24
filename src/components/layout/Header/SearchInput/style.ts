import styled from "styled-components";


export const SerachInputContainer = styled.form`
    display: flex;
    position: relative  ;
    flex-direction: column;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    width: 100%;
    min-width: 250px;
    box-shadow: 2px 0px 2px 2px rgba(0, 0, 0, 0.2);

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue-primary);
        border-bottom-left-radius: 0.25rem;
        border-top-left-radius: 0.25rem;
        height: 100%;
        padding:10px;
        transition: filter 0.3s;
        cursor: pointer;

        :hover{
            filter: brightness(1.3);
        }
    }

    input{
        flex: 1;
        font-size: 1rem;
        height: 1rem;
        border: 0;
        padding-left: 5px;

        :focus{
            outline: none;
        }
    }
`

export const ResultListContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: white;
    position: absolute;
    top:2.85rem;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    max-height: 500px;
    overflow: auto;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    z-index: 20;
    

    button{
        padding:0.5rem;
        display: flex;
        width: 100%;
        height: 100%;
        background-color:transparent;
        border: 0;
        font-size: 1.2rem;
        cursor: pointer;
        display: flex;
        justify-content:center;
        align-items: center;
        margin-top: 1rem;
        :hover{
            font-weight: 600;
            color:rgba(29, 78, 216);
        }
    }
`


export const BookContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom:1px solid rgb(220, 224, 221);
    cursor: pointer;
    gap: 1rem;
    transition: background-color 0.3s;
    padding: 0.5rem;

    :hover{
        background-color: var(--blue-secundary);
    }

    img{
       height: 60px;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`


export const ErrorContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: absolute;
    top:2.85rem;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    max-height: 500px;
    overflow: auto;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    z-index: 20;
    padding: 2rem;
    background-color: white;
    color: var(--blue-primary);
`

export const ContainerExternal = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    background: rgba( 0, 0, 0, 0 );

    top:0px;
    left: 0px;

    z-index: 20;

    display: flex;
`

export const ContainerInternal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow:hidden;

    background: white;

    width: 140px;
    top: 50px;
    right:-42px ;

    border: none;
    border-top-left-radius: 0.60rem;
    border-bottom-left-radius: 0.60rem;
    border-bottom-right-radius: 0.60rem;
    margin-right: 57px;

    position: absolute;
    z-index: 300;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`


export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`