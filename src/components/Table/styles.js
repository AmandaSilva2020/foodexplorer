import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 100%;

    .row{
        width: 100%;
        display: grid;
        grid-template-areas: 
            "code date"
            "details details"
            "status status"
        ;
        row-gap: 1.6rem;
        column-gap: 1rem;
        grid-template-columns: auto 1fr;

        border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: .8rem;
        padding: 2.4rem;
    }

    .row.client-table{
        grid-template-areas: 
            "code status date"
            "details details details"
        ;
        grid-template-columns: auto auto 1fr;
    }

    #table-header{
        display: none;
        
        > div{
            font: ${({ theme }) => theme.FONT.ROBOTO_SMALLER_BOLD};
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    .cel{
        font: ${({ theme }) => theme.FONT.ROBOTO_SMALLER_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .code{
        grid-area: code;
    }

    .date-time{
        grid-area: date;
    }

    .details{
        grid-area: details;
    }

    .status{
        grid-area: status;
    }
    
    @media screen and (min-width: ${({ theme }) => theme.SCREEN.lg}) {
        gap: 0;
        
        .row, .row.client-table{
            grid-template-areas: 
            "status code details date"
            ;
            grid-template-columns: 23rem 10rem 1fr 18rem;
            align-items: center;

            gap: 0;
            padding: 0;

            border: none;
            border-radius: 0;
        }

        #table-header{
            display: grid;
        }

        #table-header .status{
            border-radius: .8rem 0 0;
        }

        #table-header .date-time{
            border-radius: 0 .8rem 0 0;
        }

        .header-cel{
            border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
        }

        .header-cel, .cel{
            padding: 1.6rem 2.4rem;
            height: 100%;
            display: flex;
            align-items: center;
            
        }
        
        .cel{
            border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
            border-top: 0;

        }
        
        .details{
            border-inline: 0;
        }

        .status{
            border-right: 0;
        }
    }
`