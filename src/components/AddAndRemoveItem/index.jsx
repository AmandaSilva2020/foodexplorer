import { Container, AddAndRemove } from "./styles";
import { Button } from "../Button"

import { PiPlus, PiMinus } from "react-icons/pi";

export function AddAndRemoveItem({ title, ...rest }){
    return(
        <Container>
            <AddAndRemove>
                <button><PiMinus /></button>
                <span>01</span>
                <button><PiPlus /></button>
            </AddAndRemove>
            <Button title="Incluir" />
        </Container>
    )
}