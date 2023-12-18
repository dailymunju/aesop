
import { useDispatch, useSelector } from "react-redux";
import { CustomerAddWrap } from "./CustomerStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { update } from "../../store/modules/customerSlice";


const CustomerEdit = () => {
    const { current } = useSelector(state => state.customer) //current 바뀌는 부분이므로
    const [user, setUser] = useState(current)
    const { name, title, content, date} = user
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [now, setNow] = useState(new Date()) //수정된 날짜로
    const changeInput = e => {
        const { value, name } = e.target
        setUser({
            ...user, [name] : value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        if(!title || !content || !name) return 
        user.date = `${now.getFullYear()}-${now.getMonth() + 1 }-${now.getDate()}`
        dispatch(update( user )) //update에서 처리해주기
        setUser({ name: '', title: '', content: ''})
        navigate(`/customer`)
    }
    const onGo = e => {
        e.preventDefault()
        navigate(`/customer`)
    }
    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form onSubmit={onSubmit} className="customer-add" >
                    <p><input type="text" placeholder="제목" name="title" value={title} onChange={changeInput} /></p>
                    <p><input type="text" placeholder="작성자" name="name" value={name} onChange={changeInput} /></p>
                    <p>  
                        <textarea cols="100" rows="10" 
                        placeholder="문의하기" name="content" value={content} onChange={changeInput}></textarea></p>
                    <p>
                        <button onClick={onGo}>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button onClick={onGo} >취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;