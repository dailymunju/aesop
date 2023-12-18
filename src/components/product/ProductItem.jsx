import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../store/modules/cartSlice";
const ProductItem = ( { item } ) => {
    const dispatch = useDispatch()
    const { carts } = useSelector(state => state.cart) 

    const {id, title, price, description, image, category } = item
    return (
        <article>
             <div>
                <img src={image} alt={title}  />
             </div>
             <h3> { title }</h3>
             <h4> { description }</h4>
             <p> 
                {
                    carts.find( x => x.id === id ) ? 
                    <button onClick={() => dispatch(removeCart(id))} className="off"> 주문취소 </button>
                    :
                    <button onClick={() => dispatch(addCart(item))}> 주문하기 </button>
                }
                
                <span> { price } 원</span>
             </p>
        </article>
    );
};

export default ProductItem;