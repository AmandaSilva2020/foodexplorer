import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, ...rest }){
    return(
        <Container>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}