import { Container } from "./styles";

import grayLogo from "/src/assets/gray_logo_food_explorer.svg";

export function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <Container>
            <img src={grayLogo} alt="logo em cinza do Food Explorer" />
            <span>&copy; {currentYear} - Todos os direitos reservados</span>
        </Container>
    )
}