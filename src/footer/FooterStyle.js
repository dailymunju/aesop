import styled from 'styled-components'
 
export const FooterWrap = styled.footer`
    background-color: #252525;
    .inner { height:250px;padding-top: 50px;
        ul { display: flex; margin-bottom: 20px;
            li { margin-right: 30px;
                a { color: #ffffff; font-size: 18px; }
            }
        }
    }

`
export const FooterBottom = styled.div`
 display: flex;     justify-content: space-between;
    p {  color: #ffffff3d; font-size: 17px; line-height: 35px; }
    ul {
        li {
            img {
                width: 40px;
            }
        } 
    } 
    
`