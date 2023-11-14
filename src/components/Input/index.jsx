import { Container } from "./styles";

export function Input({ title, icon: Icon, label: Label = false, labelName, id: InputId, ...rest}){
    return(
        <Container {...rest}>
            {
                Label ? 
                    <label htmlFor={InputId}>{labelName}
                        <div className="input-wrapper">
                            {Icon && <Icon />}
                            <input {...rest} id={InputId}/>
                            <span>{title}</span>
                        </div>
                    </label> 
                
                    :

                <div className="input-wrapper">
                    {Icon && <Icon />}
                    <input {...rest}/>
                </div>
                
            }
        </Container>
    )
}