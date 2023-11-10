import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    padding-block: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;


    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    &:active{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    > svg {
        margin-right: 0.8rem;

        width: 3.2rem;
        height: 3.2rem;
    }
`;