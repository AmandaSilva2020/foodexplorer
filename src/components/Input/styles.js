import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    > label {

    }

    > .input-wrapper {
        width: 100%;
        padding: 1.2rem;
        border-radius: 0.5rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        display: grid;
        grid-template-columns: auto auto;

        > svg {
            width: 2.4rem;
            height: 2.4rem;

            margin-right: 1.4rem;
        }

        > input {
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_500};;

            &:focus{
                outline: none;
            }
        }
    }
    
`;
