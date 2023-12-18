 
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/product/ProductItem';
import ProductSearch from '../../components/product/ProductSearch';
import { ProductWrap } from './ProductStyle';
import Pagination from '../../components/pagination/Pagination';
import { useEffect } from 'react';
import { addData } from '../../store/modules/paginationSlice';


const Product = () => {
  const { products } = useSelector(state => state.cart)

  const { currPage, postsPerPage } = useSelector(state => state.pagination)
  const dispatch = useDispatch()

  const lastPost = currPage * postsPerPage
  const firstPost = lastPost - postsPerPage
  const currentPosts = products.slice(firstPost, lastPost)
  useEffect(() => { //페이지가 다르므로 갱신필요
      dispatch( addData(products))
  },[])
    return (
      <ProductWrap>
        <div className='subBanner'><img src="./images/pro_banner.png" alt="" /></div>
        <div className="inner">
          
          <h2> Aesop 베스트 </h2>
          <ProductSearch/>
          <div className="cart-box">
              {
                currentPosts.map( item=> <ProductItem key={item.id} item={item} />)
              }
          </div>
          <Pagination/>
        </div>
      </ProductWrap>
    );
};

export default Product;