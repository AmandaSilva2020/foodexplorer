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
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .col-1{
        flex: 1;
    }

    .placeOrderBtnWrapper {
        display: flex;
        width: 100%;
        justify-content: end;
    }

    .placeOrderBtn, .reviewOrderBtn{
        width: 21.6rem;
    }

    .total-wrapper {
        font: ${({ theme }) => theme.FONT.POPPINS_200_MEDIUM};
        padding-block: 1.6rem;
    }

    &[data-is-order-ready="false"]{
        .payment, .reviewOrderBtn {
            display: none;
        }
    }
    
    &[data-is-order-ready="true"]{
        .my-order{
            display: none;
        }

        .payment{
            display: block;
        }

        .reviewOrderBtn{
            display: flex;
        }

        .placeOrderBtn{
            display: none;
        }
    }


    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        flex-direction: row;
        gap: 0;

        &[data-is-order-ready="true"], &[data-is-order-ready="false"]{
            .my-order{
                display: block;
            }
            
            .payment {
                display: block;
            }
        }


        .placeOrderBtnWrapper{
            display: none;
        }
    }

`