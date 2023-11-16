import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer"
    ;
    grid-template-rows: auto 1fr auto;
    
    overflow-y: auto;
    > main{
        grid-area: main;
        width: 100vw;

        display: flex;
        flex-direction: column;
        align-items: start;

        padding: 1.6rem 5.6rem 3.3rem;

        button {
            font-size: 1.65rem;
            font-weight: 500;

            svg {
                height: 2rem;
            }
        }

        h2 {
            font: ${({ theme }) => theme.FONT.POPPINS_400_MEDIUM};

            margin-block: 2rem;
        }
    }

`;

export const Form = styled.form`
    width: 100%;
    position: relative;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    > .input-wrapper{
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        div:first-child {
            input, span, svg {
                color: white;
            }

            svg {
                margin-left: 3.2rem;
            }

        }

        label > div:first-child{
            margin-top: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    } 
    
    .content-wrapper{
        margin-top: 2.4rem;

       .ingredients{
        display: flex;
        flex-direction: column;
       }
       
    }
    
    .tag-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.6rem;
    }


`;