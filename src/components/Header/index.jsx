import { Container } from "./styles";
import { PiList, PiReceiptLight } from "react-icons/pi";

export function Header({ quantity, ...rest }){
    return(
        <Container>
            <nav data-is-admin={false}>
                <button {...rest} id="menu-hamb">
                    <PiList />
                </button>
                <div className="logo-role">
                    <img src="../../../public/logo_food_explorer.png" alt="Food explorer logo" />
                    <span>admin</span>
                </div>
                <button {...rest} id="shop-list">
                    <PiReceiptLight />
                    <div>
                        <span>{quantity}</span>
                    </div>
                </button>
            </nav>
        </Container>
    )
}