import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    position: sticky;
    top: 0;
    z-index: 1;
    
    height: 11.4rem;
    width: 100vw;

    display: flex;
    align-items: end;

    padding-bottom: 2.8rem;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    button > svg {
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
            span {
                font: ${({ theme }) => theme.FONT.POPPINS_100_MEDIUM};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }
    }

    &[data-is-admin="false"]{
        .logo-role > span {
            display: none;
        }    
        
        #shop-list{
            display: flex;
        }
    }

    
`;
