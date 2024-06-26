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
            font-size: 2.4rem;
            font-weight: 500;

            svg {
                width: 3.2rem;
                height: 3.2rem;
            }
        }
    }

    &[data-is-admin=true]{
        .plate-btn-wrapper > button{
            font: ${({ theme }) => theme.FONT.POPPINS_100_MEDIUM};
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {
        > main{
            padding-inline: 12.3rem;
            
        }
        
    }
`;

export const PlateInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    > img {
            align-self: center;
            width: 26.4rem;
            height: 26.4rem;

            margin-block: 1.6rem;
        }
    
    > div {
        text-align: center;

        h2{
            font-size: 2.7rem;
            font-weight: 500;
        }

        p{
            font-weight: 400;
            margin-block: 2.4rem;
        }

        .tag-wrapper{
            display: flex;
            flex-wrap: wrap;

            justify-content: center;
            gap: 2.4rem;

            span {
                height: 3.2rem;
                border-radius: 0.5rem;

                background-color: ${({ theme }) => theme.COLORS.DARK_1000};

                padding: 4px 8px;
            }
        }

        .plate-btn-wrapper{
            display: flex;
            gap: 1.6rem;

            height: 3.78rem;

            margin-top: 4.8rem;
            
            > div{
                padding-left: 0;
            }

            button{
                font-size: 1.2rem;
                font-weight: 500;
            }

            #add-to-order{
                svg {
                    width: 2rem;
                    
                }
            }
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {
        flex-direction: row;
        gap: 4.8rem;

        > img {
            width: auto;
            height: 38.9rem;
        }

        > div {
            text-align: left;

            h2{
                font: ${({ theme }) => theme.FONT.POPPINS_500_MEDIUM};
            }

            p{
                font: ${({ theme }) => theme.FONT.POPPINS_300_REGULAR};
            }
            
            .tag-wrapper{
                justify-content: flex-start;
            }

            .plate-btn-wrapper{
                justify-content: flex-start;
                width: fit-content;
                height: 4.8rem;
                gap: 3.3rem;

                div:first-child {
                    width: fit-content;
                    div{
                        justify-content: flex-start;
                        gap: 14px;
                    }
                }

                button{
                    font: ${({ theme }) => theme.FONT.POPPINS_100_MEDIUM};

                    svg {
                        height: 1.8rem;
                        width: 1.8rem;
                    }
                }

                #add-to-order, #edit-plate{
                    padding-inline: 2.4rem;
                    svg{
                        display: none;
                    }
                }


            }
            
        }

    }
`;