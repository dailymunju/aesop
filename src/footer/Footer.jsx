import { FooterBottom, FooterWrap } from "./FooterStyle";

 
const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                {/* <h2>하단로고</h2>   */}
                <ul>
                    <li><a href="#">문의하기</a></li>
                    <li><a href="brand.html">브랜드 소개</a></li>
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보정책</a></li>
                </ul>

                <FooterBottom>
                    <p>
                        상호: 이솝코리아 유한회사 | 대표자: 마이클안토니오키프<br />
                        주소: 서울특별시 강남구 선릉로 162길 3 이솝코리아 3층<br />
                        이메일: aesop@aesop.com 
                    </p>
                    
                    <ul>
                        <li><a href="#"><img src="./images/instagram.png" alt="instagram icon" /></a></li>
                        <li><a href="#"><img src="./images/twitter.svg" alt="twitter icon" /></a></li>
                    </ul>
                </FooterBottom>
            </div>
            
        </FooterWrap>
    );
};

export default Footer;