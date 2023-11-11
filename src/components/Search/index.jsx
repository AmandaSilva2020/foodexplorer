import { Container } from "./styles";
import { PiMagnifyingGlass } from "react-icons/pi";

export function Search({ ...rest}){
    return(
        <Container>
            <PiMagnifyingGlass />
            <input {...rest} placeholder="Busque por pratos ou ingredientes"/>
        </Container>
    )
}
