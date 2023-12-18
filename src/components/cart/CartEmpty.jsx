import { useNavigate } from "react-router-dom";
import { CartEmptyWrap } from "./CartStyle";


const CartEmpty = () => {
    const navigate = useNavigate()
    return (
        <CartEmptyWrap>
            <div className="inner">
                <h2>카트에 담긴 상품이 없습니다.</h2>
                <button onClick={() => navigate(`/product`)}>쇼핑하러가기</button>
            </div>
        </CartEmptyWrap>
    );
};

export default CartEmpty;