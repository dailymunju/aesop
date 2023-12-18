 
import { NoticeListWrap } from './NoticeStyle';
import NoticeItem from './NoticeItem';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { addData } from "../../store/modules/paginationSlice";

const NoticeList = () => {
    const { noticeData } = useSelector( state => state.notice )
    //현재페이지 , 화면에 보일 페이지
    const { currPage, postsPerPage } = useSelector( state => state.pagination )
    const dispatch = useDispatch()
    // currPage = 1 1~10
    // currPage = 2 11 ~ 20

    const lastPost = currPage * postsPerPage // 1 X 10 = 10
    const firstPost  = lastPost - postsPerPage
    const currentPosts = noticeData.slice( firstPost, lastPost )

    useEffect(() => { //페이지가 다르므로 갱신필요
        dispatch( addData(noticeData))
    },[])
  
    return (
        <NoticeListWrap>
        <table className="noticeTable">
            <caption>게시판</caption>
            <colgroup>
                <col className="num" />
                <col className="title" />               
                <col className="date" />               
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>내용</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentPosts.map(item=> <NoticeItem key={item.id} item={item}/>)
                }
           </tbody>
        </table>
        </NoticeListWrap>
    );
};

export default NoticeList;