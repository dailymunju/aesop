import { useDispatch, useSelector } from "react-redux";
import { removeCart, removeSingleChk, singleChk } from "../../store/modules/cartSlice";
import { useState } from "react";

 
const CartItem = ({ item,checkItems }) => {
  const { title, id, image, price, cntItem, isChk,  } = item
  const { count } = useSelector(state=> state.cart)
  const dispatch = useDispatch()
  
  const [ onCntItem, setOnCntItem ] = useState(cntItem) //각각 수량
  const [ calEachItem, setCalEachItem ] = useState(price) //각각가격
  const [ chkItem, setChkItem ] = useState(isChk) //체크유무

  const onPlus = () => {
    setOnCntItem(onCntItem + 1)
    setCalEachItem((onCntItem + 1) * price)
    // console.log(onCntItem)
  }
  const onMins = () => {
    if((onCntItem -1) > 0) { //수량이 0보다 커야함
      setOnCntItem(onCntItem - 1)
      setCalEachItem((onCntItem -1) * price )
    // console.log('minus',cntItem)
    }
  }

  const clickCheck = () => {
    setChkItem(!chkItem) //클릭했을떄 true
    if(!chkItem) { //체크됐을때
      // singleChk(calEachItem)
      console.log(!chkItem)
      dispatch(singleChk({...item, calEachItem}))
    }else {
      dispatch(removeSingleChk(id))
    }
  }
    return (
        <article>
          <input type='checkbox' name="" onChange={clickCheck} checked={chkItem}/>
          <img src={image} alt={title} />
          <div>
            <h3>
              { title }
            </h3>
            <p className="Btn">
              <button className="cntBtn" onClick={onMins}>-</button>
              <span>{onCntItem}</span>
              <button className="cntBtn" onClick={onPlus}>+</button>
            </p>
            <span>{ calEachItem }원</span>
          </div>
          <button onClick={() => dispatch(removeCart(id))}> 삭제 </button>        
        </article>
    );
};

export default CartItem;