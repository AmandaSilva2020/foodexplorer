import styled from "styled-components";

export const Container = styled.div`
    width: 21rem;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;

    align-items: center;

    > button{
        padding: 0;
    }

    > p{
        margin: 1.2rem 0;

        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
    }
`;

export const Product = styled.div`
    position: relative;

    > img{
        width: 8.8rem;
        height: 8.8rem;
    }

    > button {
        svg{
            position: absolute;
            top: 0;
            width: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }
`;