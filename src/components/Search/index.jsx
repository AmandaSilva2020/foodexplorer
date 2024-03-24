import { useState } from "react";
import { Container } from "./styles";
import { PiMagnifyingGlass } from "react-icons/pi";

export function Search({ onClick, placeholder="Busque por pratos ou ingredientes"}){
    const [inputValue, setInputValue] = useState("");
    
    function handleOnClick(){
        onClick(inputValue);
        setInputValue("");
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleOnClick();
        }
    }

    return(
        <Container>
            <button onClick={handleOnClick}>
                <PiMagnifyingGlass />
            </button>
            <input placeholder={placeholder} value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyPress} />
        </Container>
    )
}
