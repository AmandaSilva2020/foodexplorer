import { Container } from "./styles";

export function Button({ title, icon: Icon, ...rest }){
    return(
        <Container>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}