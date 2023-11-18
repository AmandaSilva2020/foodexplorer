import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer"
    ;
    grid-template-rows: auto 1fr auto;
    
    overflow-y: auto;
    > main{
        grid-area: main;
        width: 100vw;
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {
        > main{
            padding-inline: 12.2rem;
            
        }
    }
`;

export const Cover = styled.div`
    display: flex;
    width: 100vw;
    align-items: end;
    margin-top: 1.5rem;
    position: relative;

    > div {
        margin-bottom: 2.2rem;
        h1 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1.2rem;
            line-height: 140%;
        }
    }

    &::before{
        content: "";
        position: absolute;
        left: 3.6rem;
        z-index: -1;
        
        height: 12rem;
        width: 87%;

        border-radius: 0.3rem;
        background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        &::before{
            width: 80%;
        }
    }
`;