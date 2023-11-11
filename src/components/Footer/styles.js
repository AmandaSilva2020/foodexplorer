import styled from "styled-components";

export const Container = styled.footer`
    height: 7.7rem;
    grid-area: footer;

    background: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    padding-inline: 2.8rem;

    span{
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        font-size: 1.2rem;
        font-weight: 200;
    }
`;
