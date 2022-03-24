 import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: 100vh;
    width: 100%;
    margin:auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    @media (min-width:  1200px) {
        max-width: 80%;
    }
`

export const MainContainer = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items:start;
    height: 100vh;
`

