import { Container } from "./styles"

export function Payment({...rest}){
    return(
        <Container {...rest}>
            <h2>Pagamento</h2>

            <div>
                List items
            </div>
        </Container>
    )
}