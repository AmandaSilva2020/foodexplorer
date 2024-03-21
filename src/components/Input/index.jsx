import { Container } from "./styles";

export function Input({ title, icon: Icon, label: Label = false, labelName, id: InputId, ...rest}){
    return(
        <Container>
            {
                Label ? 
                    <label htmlFor={InputId}>{labelName}
                        <div className="input-wrapper">
                            {Icon && <Icon />}
                            <input id={InputId} {...rest} />
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