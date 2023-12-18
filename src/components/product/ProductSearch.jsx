import { useDispatch } from "react-redux";
import { resetCart, searchCart, sortCart } from "../../store/modules/cartSlice";
import { useEffect, useRef, useState } from "react";
import { ProductSearchWrap } from "./ProductStyle";
const ProductSearch = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const textRef = useRef()
    const onSort = (e) => {
        e.preventDefault();
        const { value } = e.target
        dispatch(sortCart( value ))
    }
    const changeInput = e => {
        const {value} = e.target
        setText(value)
    }
    const onSubmit = e => {
        e.preventDefault()
        if(!text) return
        dispatch( searchCart(text) )
        // setText('')
        textRef.current.focus()
    }

    useEffect(() => { //검색 갱신
        dispatch(searchCart(''))
    },[])
    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <select name="" id="" onChange={onSort}>
                        <option>++정렬++</option>
                        <option value="title">제품명</option>
                        <option value="category">카테고리</option>
                        <option value="price">가격순</option>
                    </select>
                    <button onClick={() => dispatch(resetCart())}>초기화</button>
                </p>

                <p>
                    <input type="text" name="text" value={text} onChange={changeInput} id="" ref={textRef} />
                    <button>검색</button>
                </p>
                
                
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;