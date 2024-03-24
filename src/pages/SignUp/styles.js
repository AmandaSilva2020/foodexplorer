import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding-inline: 5.6rem;

    display: flex;
    flex-direction: column;

    align-items: start;

    gap: 7.3rem;

    > img{
        width: 100%;
        margin-top: 15.8rem;
        max-width: 27.8rem;
    }

    > main {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 3.2rem;

    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        >img{
            margin-top: 0;
        }

        > main {
            background-color: ${({ theme }) => theme.COLORS.DARK_700};
            padding: 6.4rem;
            width: 47.6rem;

            border-radius: 1.6rem;
        }

        > main a {
            font-size: 1.4rem;
        }
    }

`;