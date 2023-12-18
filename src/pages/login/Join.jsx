import { JoinWrap  } from "./LoginStyle";
import Spinner from "../../components/Spinner";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../store/modules/authSlice";

const Join = () => {
    const [user, setUser] = useState({
        username: '',
        tel: '', 
        email: '',
        password: ''
    })
    const { username, email, tel, password } = user
    const nameRef = useRef()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isSpinner, setIsSpinner] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSpinner(false)
        },600)
        return()=>{
            clearTimeout(timer)
        }
    },[])
    
    const onSubmit = e => {
        e.preventDefault()
        if(!username || !tel || !email || !password ) return
        dispatch(signup(user))
        setUser({
            username: '', email: '', tel: '', password: ''
        })
        nameRef.current.focus()
        navigate(`/login`)
    }

    const onInput = e => {
        const { value, name} = e.target
        setUser({
            ...user, [name] : value
        })

    }

   
    return (
        <>  {
            isSpinner && <Spinner/>
            }
            <JoinWrap>
                <div className="inner">
                    <h2> 회원가입 </h2>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label> 이름 </label>  
                            <input type="text" placeholder="홍길동" name="username" value={username} onChange={onInput} ref={nameRef} />
                        </p>                
                        <p>
                            <label> 전화번호 </label>  
                            <input type="tel" name="tel" value={tel} onChange={onInput} placeholder="010-0000-0000" />
                        </p>                
                        <p>
                            <label>이메일 </label>  
                            <input type="email" name="email" value={email} onChange={onInput}    placeholder="abc@naver.com" />
                        </p>                
                        <p>
                            <label>비밀번호 </label>  
                            <input type="password" name="password" value={password} onChange={onInput} placeholder="a1234" />
                        </p>
                        <p><button type="submit">회원가입</button>
                        <button >취소</button></p>
                    </form>
                </div>

            </JoinWrap>
        </>
    );
};

export default Join;