import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    &, input {
        font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
    }

    > label .input-wrapper{
        margin-top: 1.6rem;
    }

    > .input-wrapper, > label .input-wrapper{
        width: 100%;
        padding: 1.2rem;
        border-radius: 0.5rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        display: flex;
        align-items: center;

        > svg {
            width: 2.4rem;
            height: 2.4rem;

            margin-right: 1.4rem;
        }

        > input {
            flex: 1;
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_500};;

            &:focus{
                outline: none;
            }
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {
       flex: auto;
        
    }
    
`;
