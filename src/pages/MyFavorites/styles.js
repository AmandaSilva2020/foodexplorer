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

        display: flex;
        flex-direction: column;
        align-items: start;

        padding: 1.6rem 3.2rem 3.3rem;

        button {
            font-size: 1.65rem;
            font-weight: 500;

            svg {
                height: 2rem;
            }
        }

        h2 {
            font: ${({ theme }) => theme.FONT.POPPINS_400_MEDIUM};

            margin-block: 2rem;
        }

    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {
        > main{
            padding-inline: 12.3rem;
            
        }
        
    }
`

export const Content = styled.div`
    width: 100%;

    


    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        .items-wrapper{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 10rem;
            row-gap: 4.8rem;
        }
    }

`