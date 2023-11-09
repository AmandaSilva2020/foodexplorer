import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-size: 1.6rem;
    }

    body{
        -webkit-font-smoothing: antialiased;

        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
        background: none;
    }

    button, a {
        cursor: pointer;
    }

`
