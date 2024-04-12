import { Container } from "./styles";

export function PlateItem({hasRemoveBtn, url, isFavorite, qnty, itemTotal, title, plateName, ...rest}){
    return(
        <Container>
            <img src={url} alt="" />
            <div>
                {
                    !isFavorite ? <p>{qnty} x {plateName} <span>€ {itemTotal}</span></p> : <p>{plateName}</p>
                }
                {
                    hasRemoveBtn ? <button className="remove-from-list-btn" {...rest}>{title}</button> : <></>
                }
                
            </div>
        </Container>
    )
}