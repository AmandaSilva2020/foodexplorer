import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    overflow: hidden;

    margin-bottom: 3rem;
`

export const PaymentSelector = styled.div`
    width: 100%;

    /* border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-radius: 8px; */

    .table-title{
        display: flex;
        height: 8rem;
    }

    .table-content{
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .table-cel{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cel-title{
        flex: 1;
        
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;

        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

        border-radius: 0 8px 0 0;

        cursor: pointer;

        &:first-child{
            border-right: 0px;
            border-radius: 8px 0 0;
        }

        > svg{
            width: 2.4rem;
            height: 1.8rem;
        }
    }

    .cel-content{
        flex: 1;
        padding: 3rem;

        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        border-top: 0;
    }

    .hide{
        display: none;
    }

    .selected{
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    .credit-payment{
        height: 38rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .loading, .done, .delivered{
        display: flex;
        flex-direction: column;
        height: 100%;

        gap: 2.4rem;

        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        p{
            font: ${({ theme }) => theme.FONT.ROBOTO_BIG_BOLD};
        }

        svg{
            width: 9.6rem;
            height: 9.6rem;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}){
        width: 53rem;
    }
`

export const CreditForm = styled.form`
    width: 30rem;
    
    label{
        display: flex;
        flex-direction: column;
    }

    input{
        width: 100%;
        height: 4.8rem;

        background: none;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        border-radius: 5px;

        margin-top: 8px;
        padding-inline: 1.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    .input-wrapper{
        margin-block: 3.7rem;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 1.7rem;
    }
`