import styled from "styled-components";

export const NavItemContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    cursor: pointer;
    line-height: 1.25rem;
    font-size: 20px;
    transition: background-color 0.3s;
    padding: 1.33rem;
    width: 25%;

    :hover{
        background-color: var(--blue-secundary);
    }

    :first-child{
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    :last-child{
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }

    .pathNavActive{
        background-color: var(--blue-secundary);
    }
`