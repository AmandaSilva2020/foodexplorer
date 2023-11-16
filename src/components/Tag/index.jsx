import { Container } from "./styles";
import { PiPlus , PiX } from "react-icons/pi";

export function Tag({ title, value, onClick, isnew = false, ...rest }) {
    return(
        <Container isnew = {isnew}>
            <input 
                type="text"
                value={value}
                readOnly={!isnew}
                placeholder="Adicionar"
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={isnew ? 'button-add' : 'button-delete'}
            >
                {
                    isnew ? <PiPlus /> : <PiX />
                }
            </button>
        </Container>
    )
    
}