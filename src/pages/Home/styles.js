import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    display: grid;
    grid-template-areas:
    "header"
    "main"
    ;
    grid-template-rows: auto 1fr auto;
    
    overflow: auto;
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
        height: 100vh;

        background-color: ${({ theme }) => theme.COLORS.DARK_400};

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > div{
            padding: 5.6rem 2.8rem;
    
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 3.6rem;
    
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
    }

    &[data-menu-is-open=false]{
        #menu-overlay {
            transform: translateX(-100%);
        }

    }

    &[data-is-admin=false]{
        #btn-new-dish{
            display: none;
        }
    }

`;

export const Cover = styled.div`
    display: flex;
    width: 100vw;
    align-items: end;
    margin-top: 1.5rem;
    position: relative;

    > div {
        margin-bottom: 2.2rem;
        h1 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1.2rem;
            line-height: 140%;
        }
    }

    &::before{
        content: "";
        position: absolute;
        left: 3.6rem;
        z-index: -1;
        
        height: 12rem;
        width: 87%;

        border-radius: 0.3rem;
        background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    }
`;