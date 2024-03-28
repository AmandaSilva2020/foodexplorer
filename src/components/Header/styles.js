import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    position: sticky;
    top: 0;
    z-index: 200;
    
    height: 11.4rem;
    width: 100vw;

    display: flex;
    align-items: end;

    padding-bottom: 2.8rem;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    button > svg, a > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    nav{
        width: 100%;
        height: 3.4rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        #menu-hamb{
            display: flex;
            justify-items: center;
            svg{
                width: 2.4rem;
                height: 2.4rem;
            }
    
        }
    
        .logo-role{
            display: flex;
            justify-items: center;
    
            img {
                width: 16.6rem;
            }
    
            span{
                font: ${({ theme }) => theme.FONT.ROBOTO_SMALLEST_REGULAR};
                color: ${({ theme }) => theme.COLORS.CAKE_200};
                padding: 0.3rem 0.8rem 0;
            }
        }
    
        #shop-list{
            display: none;
            justify-items: center;
    
            position: relative;
    
            svg{
                width: 3.2rem;
                height: 3.2rem;
            }
            div{
                position: absolute;
                right: -1rem;
                top: -1rem;
                
                display: flex;
                align-items: center;
                justify-content: center;
    
                width: 2.5rem;
                height: 2.5rem;
    
                padding: 0 0.5rem;
                
                border-radius: 50%;
                
                background: ${({ theme }) => theme.COLORS.TOMATO_200};
            }
            .menu-qnt {
                font: ${({ theme }) => theme.FONT.POPPINS_100_MEDIUM};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }
    }

    .menu-desktop{
        display: none;
    }

    &[data-is-admin="false"]{
        .logo-role > span {
            display: none;
        }    
        
        #shop-list{
            display: flex;
        }
    }

    > #menu-overlay{
        position: absolute;
        top: 0;
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
    
            > button, a {
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
                font-weight: 400;
            }
    
            .menu-btn-wrapper {
                width: 100%;
            }
    
            ul {
                list-style: none;
                
                li {
                    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
                    padding-block: 1rem;
                    
                    button, a{
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
    
    &[data-is-admin=true]{
        #btn-my-favorites{
            display: none;
        }
        
        #btn-order-history{
            display: none;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {
        padding: 2.8rem 12.2rem;

        > #menu-overlay{
            display: none;
        }

        > nav {
            #menu-hamb{
                display: none;
            }
        }

        .menu-desktop{
            display: flex;
            flex: 1;
            
            margin-left: 3.2rem;

            .client-wrapper {
                flex: 1;
                height: 100%;
                display: flex;
                align-items: center;

                .novoprato{
                    margin-left: 3.2rem;
                    height: 4.8rem;
                }

                svg{
                    width: 2.6rem;
                    height: 2.2rem;
                }
            }

            .client-wrapper div {
                display: flex;
                
                .client-btn{
                    width: 16rem;
                    margin-right: 2.4rem;
                }

                a{
                    height: 4.8rem;
                    width: 21.6rem;
                    margin-right: 3.2rem;
                    
                    font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
                }
            }

            > button{
                svg{
                    width: 3.2rem;
                    height: 3.2rem;
                }

                &:hover{
                    svg{
                        color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    }
                }
            }
        }

        .logo-role{
            flex-direction: column;
            align-items: end;
        }

        &[data-is-admin="false"]{
            #shop-list{
                display: none;
            }
        }
    }
`;
