import { useNavigate, useParams } from "react-router-dom";
import { NoticeDetailWrap } from "./NoticeStyle";
import { useSelector } from "react-redux";


const NoticeDetail = () => {
    const {noticeID } = useParams()
    const { noticeData } = useSelector( state => state.notice ) //같은거 하나만 뽑기

    const newItem = noticeData.find(item=> item.id === Number(noticeID)) //넘어오는 값은 문자이므로
    const { id, title, content, date } = newItem
    const navigate = useNavigate()

    return (
        <NoticeDetailWrap>
          <div className="inner">
           
          <h2> 공지사항 </h2>
            <div className="con">
            <h3> {id}번 { title }</h3>
                <p className="txt"> { content} </p>
                <p className="date"> { date } </p>
            </div>
            <button onClick={() => navigate(`/notice`)}>목록으로</button>
          </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;