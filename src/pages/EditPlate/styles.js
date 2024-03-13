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

        padding: 1.6rem 3.2rem 3.3rem;

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

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {
        > main{
            padding-inline: 12.3rem;
            
        }
        
    }

`;

export const Form = styled.form`
    width: 100%;
    position: relative;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};

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

        #select-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1.6rem;

            div{
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }
        }
    } 
    

    .content{
        margin-block: 2.4rem;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        textarea {
            border: none;
            height: 17.2rem;
            font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
            color:${({ theme }) => theme.COLORS.LIGHT_100};
        }

        textarea:focus{
            outline: none;
        }
    }
    
    .tag-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.6rem;
        align-items: center;
        border-radius: 0.8rem;

        padding: 0.8rem 0.4rem;
        background-color:${({ theme }) => theme.COLORS.DARK_800};
    }

    .price{
        border: none;

        input {
            background: none;
            border: none;
            margin-left: 0.8rem;
            font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
            color:${({ theme }) => theme.COLORS.LIGHT_100};

            &:focus{
                outline: none;
            }
        }

    }

    .price, textarea {
        border-radius: 0.8rem;

        padding: 1.6rem 1.4rem;
        background-color:${({ theme }) => theme.COLORS.DARK_800};

        resize: none;
    }

    .button-wrapper{
        display: flex;
        gap: 2.4rem;

        .delete-plate{
            width: 100%;
            border-radius: 0.5rem;

            background-color:${({ theme }) => theme.COLORS.DARK_800};
            color:${({ theme }) => theme.COLORS.LIGHT_100};

            &:hover {
                background-color:${({ theme }) => theme.COLORS.DARK_900};
            }
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {

        .input-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
        
        .content-wrapper{
            display: flex;
            gap: 3.2rem;

            .content{
                flex: 2;
                margin-bottom: 0;
            }
            .second-content{
                flex: 1;
            }

            .tag-wrapper{
                grid-template-columns: repeat(4, 1fr);
            }   
        }

        .button-wrapper{
            justify-content: flex-end;
            
            
            button, .delete-plate{
                width: 100%;
                padding-inline: 2.4rem;
            }

        }
    }

`;