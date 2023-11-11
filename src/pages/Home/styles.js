import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer"
    ;
    grid-template-rows: auto 1fr auto;

    > main{
        grid-area: main;
    }

    > #menu-overlay{
        grid-area: none;
        position: absolute;
        z-index: 2;

        transform: translateX(0);
        transition: transform 0.3s ease-in-out;

        width: 100%;
        height: calc(100vh - 7.7rem);
        padding: 5.6rem 2.8rem;

        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 3.6rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_400};

        > button{
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 400;
        }

        nav {
            width: 100%;
        }

        ul {
            list-style: none;
            
            li {
                border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
                padding-block: 1rem;
                
                button{
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};

                    font-size: 2.4rem;
                    font-weight: 300;
                }
            }
        }
    }

    &[data-menu-is-open=false]{
        #menu-overlay{
            transform: translateX(-100%);
        }
    }

    &[data-is-admin=false]{
        #btn-new-dish{
            display: none;
        }
    }

`;