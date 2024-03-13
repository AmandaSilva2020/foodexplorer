import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    padding-block: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: color 0.3s ease;

    &:hover, &:active {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > svg {
        margin-right: 0.8rem;

        width: 1.8rem;
        height: 1.8rem;
    }
`;