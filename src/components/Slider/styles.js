import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-block: 6.2rem;

    .plate-category{
        margin-bottom: 2.4rem;
        text-transform: capitalize;
    }


    .navigation-wrapper{
        position: relative;

        .arrows-slider{
            display: none;
        }

        
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        margin-inline: 0;

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
                width: 150px; 
                background: linear-gradient(-90deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
            }

            &::after {
                right: 0;
                width: 150px; 
                background: linear-gradient(90deg, rgba(0,0,0,0) 0%, #000A0F 100%);
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