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

    body, a, button{
        font:  ${({ theme }) => theme.FONT.POPPINS_100_MEDIUM};
    }

    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
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

export const CustomStyles = {
    indicatorSeparator: () => ({
      display: 'none', // Esconde o separador do indicador
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: state.isFocused ? 'none' : 'none',
      backgroundColor: '#0D1D25',
      height: '4.8rem',
    }),
    container:(baseStyles) => ({
        ...baseStyles,
        width:"100%",
      }),
    menu:(baseStyles) => ({
        ...baseStyles,
        backgroundColor: '#0D1D25',
        marginBlock:"5px",
      }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: state.isFocused ? '#192227' : '#0D1D25',
      }),
    singleValue: (baseStyles) => ({
        ...baseStyles,
        color: "#fff",
    }),
    input: (baseStyles) => ({
        ...baseStyles,
        color: "#fff",
    })
    }