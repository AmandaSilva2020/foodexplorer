import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1.3rem;
    align-items: center;
    padding-block: 1.6rem;

    img{
        width: 7.2rem;
        height: 7.2rem;
    }

    > div p{
        font: ${({ theme }) => theme.FONT.POPPINS_200_MEDIUM};
    }

    > div p span {
        font: ${({ theme }) => theme.FONT.ROBOTO_SMALLEST_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .remove-from-list-btn {
        font: ${({ theme }) => theme.FONT.ROBOTO_SMALLEST_REGULAR};
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`