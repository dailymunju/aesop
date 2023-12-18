import styled from 'styled-components'

export const CartListWrap = styled.div` 
    .inner { padding:100px 0;
        button { margin-right: 10px; }
    }
    h2 { font-size:40px; font-weight:700;margin-bottom:50px }
    .cart-list {  width: 100%;
        .cart-top {    display: flex;
            justify-content: space-between;
            border-top: 1px solid #333;
            padding: 15px 0;
            border-bottom: 1px solid #333;
            ul { display: flex; justify-content: space-between; width: 60%;
                li { width: 33.33%; }
            }
        }
        article { display: flex; border-bottom: 1px solid #000; align-items: center; justify-content: space-between; margin-bottom: 15px; padding: 10px; font-size: 20px; width: 100%;
            img { width: 95px; }
            div { display: flex; width: 60%; justify-content: space-between;
                h3 { font-size: 16px;  }
            }
            button { width: 150px; border: 1px solid #000; height: 50px; transition: 0.3s; margin-right: 0;
                &:hover {background: #000; color:#fff} 
                
            }
            p { span { margin: 0  10px; }
                button { width: 20px; height: 20px; margin-top: 0; }
            }
        }
    }
    .cart-bottom { margin-top: 50px; display: flex; font-size: 18px;
        p { margin-right: 20px; 
            strong { margin-right: 20px; } 
        }
    } 
    button { margin-top: 30px; width: 300px; height: 40px; background: #000; color:#fff } 
                

`

export const CartEmptyWrap = styled.div` 
    text-align: left; margin-top: 200px; 
    a {width: 250px; background: #000; display: inline-block; height: 50px; line-height: 50px; color:#fff}
    button {
        margin-top: 30px;
        width: 300px;
        height: 40px;
        background: #000;
        color: #fff;
       
    }
`