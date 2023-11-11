import { Container } from "./styles";

export function Input({ icon: Icon, label: Label = false, labelName, id: IconId, title, ...rest}){
    return(
        <Container>
            {Label && <label htmlFor={IconId}>{labelName}</label>}
            <div className="input-wrapper">
                {Icon && <Icon />}
                <input {...rest}/>
            </div>
        </Container>
    )
}