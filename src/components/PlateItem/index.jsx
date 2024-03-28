import { Container } from "./styles";

export function PlateItem({url, isFavorite, qnty, itemTotal, title, plateName, ...rest}){
    return(
        <Container>
            <img src={url} alt="" />
            <div>
                {
                    !isFavorite ? <p>{qnty} x {plateName} <span>€ {itemTotal}</span></p> : <p>{plateName}</p>
                }
                <button className="remove-from-list-btn" {...rest}>{title}</button>
            </div>
        </Container>
    )
}