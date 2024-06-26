import styled from "styled-components";

export const Container = styled.div`
    width: 21rem;
    
    display: flex;
    flex-direction: column;
    position: relative;

    align-items: center;
    justify-content: space-between;

    > button{
        padding: 0;
    }

    > #description{
        display: none;
    }

    > #price{
        margin-top: 1.2rem;

        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
    }

    &[data-is-admin=true]{
        div:last-child{
            display: none;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        width: 30.4rem;

        > #description{
            display: block;
            
            font: ${({ theme }) => theme.FONT.ROBOTO_SMALLER_REGULAR};
            text-align: center;
            margin-block: 1.5rem;
            padding-inline: 3rem;
        }

        > #price {
            font: ${({ theme }) => theme.FONT.ROBOTO_BIGGEST_REGULAR};
        }

        > button {
            font: ${({ theme }) => theme.FONT.POPPINS_300_BOLD};
        }

        >div{
            img{
                width: 17.6rem;
                height: 17.6rem;
            }
        }
        
    }
`;

export const Product = styled.div`
    > img{
        width: 8.8rem;
        height: 8.8rem;
    }

    > a {
        svg{
            position: absolute;
            top: 0;
            right: 1.6rem;

            width: 2.4rem;
            height: 2.2rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }  
`;