import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 0.8rem;
    
    padding: 1.2rem;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    display: grid;
    grid-template-columns: auto 1fr;

    > button {
        height: 100%;
        display: flex;
        justify-content: center;

        svg {
            width: 2.4rem;
            height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
    
            margin-right: 1.4rem;
        }
    }

    > input {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};

        &:focus{
            outline: none;
        }
    }

    &, input {
        font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
    }

    
    
`;
