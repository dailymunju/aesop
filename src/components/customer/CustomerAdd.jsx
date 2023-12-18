import { useDispatch, useSelector } from "react-redux";
import { CustomerAddWrap } from "./CustomerStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { add } from "../../store/modules/customerSlice";


const CustomerAdd = () => {    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({name: '', title: '',content: '',date: '', })
    const { name, title, content, date} = user
    const [now, setNow] = useState(new Date())

    const changeInput = e => {
        const { value, name} = e.target
        setUser({
            ...user, [name] : value 
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        if( !title || !content || !name) return
        user.date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
        dispatch( add(user) )
        setUser({name:'', title: '', content: ''})
        navigate(`/customer`)
    }

    const onGo = e => {
        e.preventDefault()
        navigate(`/customer`)
    }
    return (
        <CustomerAddWrap>  
            <div className="inner">    
                <h2> 고객문의 </h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p><input type="text" placeholder="제목" name="title" value={title} onChange={changeInput} /></p>
                    <p><input type="text" placeholder="작성자" name="name" value={name} onChange={changeInput} /></p>
                    <p>  
                        <textarea cols="100" rows="10" placeholder="문의하기" name="content" value={content} onChange={changeInput} ></textarea>
                    </p>
                    <p>
                        <button onClick={ onGo }>목록으로</button>
                        <button type="submit" onClick={add}>저장하기</button>
                        <button onClick={ onGo }>취소하기</button>
                    </p>
                </form>
                </div>       
        </CustomerAddWrap>
    );
};

export default CustomerAdd;