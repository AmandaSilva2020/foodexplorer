import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer"
    ;
    grid-template-rows: auto 1fr auto;

    > main{
        grid-area: main;
    }
`;