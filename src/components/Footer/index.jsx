import { Container } from "./styles";

export function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <Container>
            <img src="/src/assets/gray_logo_food_explorer.svg" alt="logo em cinza do Food Explorer" />
            <span>&copy; {currentYear} - Todos os direitos reservados</span>
        </Container>
    )
}