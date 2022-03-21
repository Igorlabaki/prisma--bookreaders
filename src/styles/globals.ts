import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` 

    :root{
        --blue-primary:       rgba(29, 53, 87);
        --blue-secundary:     #cce0ff;
        --dark-gray:          hsl(0, 0%, 59%);
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }

    }

    body{
        background: var (--background);
        -webkit-font-smoothing: antialiased; // deixa os caracteres mais nitidos
    }

    body, input, textarea, button{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }

    /////Modal Auth
    .react-modal-auth-overlay{
            background-color: rgba(0,0,0,0.2);
            position:fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .react-modal-auth-content{
            width: 100%;
            max-width: 576px;
            background-color: rgb(235, 229, 228);
            padding: 1.5rem;
            position: relative;
            border-radius: 0.60rem;
        }
    /////Modal Search
    .react-modal-search-overlay{
            background-color: rgba(0,0,0,0.5);
            position:absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .react-modal-search-content{
            width: 100%;
            max-width: 576px;
            background-color: rgb(235, 229, 228);
            padding: 1.5rem;
            position: absolute;
            border-radius: 0.60rem;
        }
    
    .currentPage{
        background-color: #b3e0ff;
    }

    .comment-arrow{
        position: absolute;
        left: 92px;
        top: -23px;
        color: #8BC34A;
    }

    .chart{
        background-color: var(--blue-secundary);
    }
`
