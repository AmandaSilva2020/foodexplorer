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
            padding-inline: 12.3rem;
            
        }
    }
`;

export const Cover = styled.div`
    display: flex;
    justify-content: space-between;


    margin-top: 4.4rem;
    margin-left: 2rem;

    height: 12rem;


    border-radius: 0.3rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    > #cover-img {
        position: relative;
        width: 30%;
        height: 100%;
        
        img {
            bottom: -4px;
            left: -35px;
            position: absolute;
            height: 149px;
            width: 191px;
        }
    }

    > .cover-text {
        align-self: end;
        width: 20.2rem;
        margin-bottom: 2.2rem;
        margin-right: 2.1rem;

        h1 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1.2rem;
            line-height: 140%;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        height: 26rem;
        margin-top: 16.4rem;
        
        >#cover-img{
            img {
                bottom: -14px;
                left: -80px;
                width: 600px;
                height: auto;
            }
        }

        > .cover-text {
            margin-right: 10.4rem;
            margin-bottom: 9.2rem;
            width: fit-content;


            h1 {
                font: ${({ theme }) => theme.FONT.POPPINS_500_MEDIUM};
            }

            p {
                font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
            }
        }
        

    }
`;