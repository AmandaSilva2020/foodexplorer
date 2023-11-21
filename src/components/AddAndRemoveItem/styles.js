import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    padding-block: 1.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    > button {
        height: 3.2rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        flex-direction: row;
        width: auto;

        > button{
            width: 92px;
        }
    }
`;

export const AddAndRemove = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 11.2rem;
    
    > button {
        display: flex;
        justify-content: center;

        svg {
            width: 2.4rem;
            height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font: ${({ theme }) => theme.FONT.ROBOTO_BIG_BOLD};
        font-size: 23px;
    }
`;