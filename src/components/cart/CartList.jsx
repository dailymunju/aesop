import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CartListWrap } from "./CartStyle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { clearCart, removeCart, removeSingleChk, singleChk, totalCart } from "../../store/modules/cartSlice";
import cartdata from "../../assets/api/cartdata";

const CartList = () => {
    const { carts, cartTotal,cntItem } = useSelector(state=> state.cart)
    const [checkItems, setCheckItems] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(totalCart() )
    },[carts])
    
    const handleAllCheck = (checked) => {
        if(checked) {
          // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
          const idArray = [];
          cartdata.forEach((el) => idArray.push(el.id));
          setCheckItems(idArray);
        }
        else {
          // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
          setCheckItems([]);
        }
      }

    return (
        <CartListWrap className="cart-wrap">
            <div className="inner">
                <h2>장바구니</h2>
                <div className="cart-list">
                    <div className="cart-top">
                        <div>
                            <input type='checkbox' name={`select-${cartdata.id}`}
                onChange={(e) => handleAllCheck(e.target.checked, cartdata.id)}
                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                checked={checkItems.includes(cartdata.id) ? true : false}/>
                            <label htmlFor="all">전체선택</label>
                        </div>
                        <ul>
                            <li>상품정보</li>
                            <li>수량</li>
                            <li>합계</li>
                        </ul>
                    </div>
                    {
                        carts.map(item =><CartItem key={ item.id } item={ item } /> )
                    }
                </div>
                <div className="cart-bottom">
                    <p>
                        <strong>총개수</strong>
                        <span>{ cntItem && cntItem.length}개</span> 
                    </p>                
                    <p>
                        <strong>총금액</strong>
                        <span> { cartTotal }  원</span> 
                    </p>
                </div>
                <button onClick={() => dispatch(clearCart())} >카트비우기</button>
                <button>선택상품삭제</button>
                <button onClick={() => navigate(`/product`)}>쇼핑하러가기</button>
            </div>
        </CartListWrap>
    );
};

export default CartList;