import styled from "styled-components";

export const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    h1{
        cursor:pointer;
        font-family: 'Lora', serif;;
    }

    div{
        display: flex;
    }

    p{
        margin-right: 10px;
    }
    gap: 2rem;
`

export const LogoContainer = styled.img`
   cursor: pointer;
   width: 140px;

    @media (min-width: 768px) {
        width: 200px;
    }
    
`

export const ArrowButtonContainer = styled.div`
    display: hidden;
    @media (min-width: 768px) {
        margin-top: 10px;
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }
`

export const PhotoContainer = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export const MenuContainer = styled.div`
    display: none !important;
   
    @media (min-width: 768px) {
        display: flex !important;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`


export const HamburguerMenu = styled.div`
    display: flex !important;
    cursor: pointer;

    @media (min-width: 768px) {
       display: none !important;
    }
    
`