import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-inline: 1.6rem;
    
    border-radius: 0.8rem;
    background-color: ${({ theme, isnew }) => isnew ? 'transparent' : theme.COLORS.LIGHT_600 };
    
    border: ${({ isnew, theme }) => isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none' };

    > input{
        height: 3.2rem;
        width: 100%;
        
        background: none;
        border: none;
        
        font: ${({ theme }) => theme.FONT.ROBOTO_SMALL_REGULAR};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &:focus{
            outline: none;
        }
    }

    button{
        display: flex;
        align-items: center;
    }

    .button-add{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    
    .button-delete{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
`;