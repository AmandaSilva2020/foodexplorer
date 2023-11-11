import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    padding-block: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > svg {
        margin-right: 0.8rem;

        width: 3.2rem;
        height: 3.2rem;
    }
`;