import styled from "styled-components";

export const SwiperContainer = styled.div`
    width:100%;
    max-width: 1190px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-top-left-radius:0.80rem;
    border-top-right-radius:0.80rem;
    overflow: hidden;
`
export const SliderContainer = styled.div`
    width:100%;
    border-top-left-radius:0.80rem;
    border-top-right-radius:0.80rem;
    overflow: auto;
    object-fit:cover ;
    position:relative ;
    z-index:0 ;
    
    img{
        max-width: 100%;
        max-height: 30%;
        object-fit:cover;

    }
`

export const HeaderComponent = styled.div`
    display:flex ;
    justify-content: space-between ;
    font-weight:700 ;
`

export const TextContainer = styled.div`
    color:white ;
    font-size:3rem;
    position: absolute ;
    top:40px;
    left: 20px ;
    width: 95% ;   
    display : flex ;
    flex-direction: column ;
    gap:1.5rem ;
    
    img{
         height: 30px ;
    }

    p{
        width: 60% ;
        font-size:1.4rem ;
        font-weight:500 ;
        text-align:start ;
        line-height: 1.7rem;
    }

    z-index: 50;

`

export const OverlayContainer = styled.div`
 position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 2;
  cursor: pointer;
`