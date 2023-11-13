import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    height: 7.7rem;
    width: 100vw;

    background: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2.8rem;

    span{
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        font-size: 1.2rem;
        font-weight: 200;
    }
`;
