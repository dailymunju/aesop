
import { useRef, useState } from "react";
import { LoginWrap  } from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/modules/authSlice";
 
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: '', password: ''
    })
    const { email, password } = user
    const emailRef = useRef()
    const onSubmit = e => {
        e.preventDefault()
        if(!email || !password) return  
        setUser({
            email: '', password: ''
        })
        dispatch(login(user))
        navigate(`/logout`)
        emailRef.current.focus()
    }
    const onInput = e => {
        const { name , value } = e.target 
        setUser({
            ...user, [name] : value
        })
    }
    
    return (
        <LoginWrap>
            <div className="inner">
            <h2>로그인 페이지 입니다.</h2>
            <form onSubmit={onSubmit} >
                <p>
                    <label>이메일</label>  
                    <input type="email" placeholder="로그인정보:abc@naver.com" name="email" value={email} onChange={onInput} ref={emailRef}/>
                </p>                
                <p>
                    <label>비밀번호</label>  
                    <input type="password" placeholder="로그인정보:a1234" name="password" value={password} onChange={onInput} />
                </p>
                <p><button type="submit">로그인</button></p>
            </form>
            </div>

        </LoginWrap>
    );
};

export default Login;