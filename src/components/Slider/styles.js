import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 6.2rem;
    margin-left: 2.4rem;
    

    .navigation-wrapper{
        position: relative;

        .arrows-slider{
            display: none;
        }

        
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        > p{
            font: ${({ theme }) => theme.FONT.POPPINS_400_MEDIUM}
        }

        .navigation-wrapper{
            .arrows-slider{
                display: block;
            }

            &::before,
            &::after {
            content: "";
            position: absolute;
            z-index: 2;
            top: 0;
            height: 100%;
            
            }

            &::before {
                left: 0;
                width: 280px; 
                background: linear-gradient(-90deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
            }

            &::after {
                right: 0;
                width: 180px; 
                background: linear-gradient(90deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
            }

            .arrow {
                width: 30px;
                height: 30px;
                position: absolute;
                z-index: 10;
                top: 50%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                fill: #fff;
                cursor: pointer;
            }

            .arrow--left {
                left: 5px;
            }

            .arrow--right {
                left: auto;
                right: 5px;
            }

            .arrow--disabled {
                fill: rgba(255, 255, 255, 0.5);
            }
        }
    }
`;


