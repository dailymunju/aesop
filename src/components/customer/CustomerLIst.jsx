import { useSelector,useDispatch } from "react-redux";
import { CustomerLIstWrap } from "./CustomerStyle";
import CustomerItem from "./CustomerItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addData } from "../../store/modules/paginationSlice";

const CustomerLIst = () => {
   const { customerData } = useSelector(state=> state.customer)
   const navigate = useNavigate()
    //현재페이지 , 화면에 보일 페이지
    const { currPage, postsPerPage } = useSelector( state => state.pagination )
    const dispatch = useDispatch()
    // currPage = 1 1~10
    // currPage = 2 11 ~ 20

    const lastPost = currPage * postsPerPage // 1 X 10 = 10
    const firstPost  = lastPost - postsPerPage
    const currentPosts = customerData.slice( firstPost, lastPost )

    useEffect(() => { //페이지가 다르므로 갱신필요
        dispatch( addData(customerData))
    },[])
    return (
        <CustomerLIstWrap>
        <table className="customerTable">
        <caption>게시판</caption>
        <colgroup>
            <col className="num" />
            <col className="title" />               
            <col className="name" />               
            <col className="date" />               
        </colgroup>
        <thead>
            <tr>
                <th>번호</th>
                <th>내용</th>              
                <th>작성자</th>
                <th>작성일</th>
            </tr>
        </thead>
        <tbody>
             {
                currentPosts.map(item =><CustomerItem key={item.id} item={item}/>)
             }
       </tbody>
       </table>
            <p><button onClick={() => navigate(`/customer/customeradd`)}>글 작성 </button></p>
       </CustomerLIstWrap>
    );
};

export default CustomerLIst;