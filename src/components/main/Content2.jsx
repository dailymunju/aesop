import { ReadCon, VisitCon } from "./ContentStyle";


const Content2 = () => {
    return (
        <>
            <ReadCon>
                <div className="inner">
                    <div className="title">
                        <h4 className="sub_title">READ</h4>
                        <h3 className="main_title">THE FABULIST</h3>
                    </div>
                    
                    <div className="readBox">
                        <ul>
                            <li>
                                <a href="news.html">
                                    <div className="imgBox img1"></div>
                                    <div className="text_news">
                                        <h4>CHILLY GONZALES</h4>
                                        <p>
                                            I always wondered, “What if a style of music wasn’t
                                            limited to its culture? ”
                                        </p>
                                    </div>
                                </a>
                            </li>
                            
                            <li>
                                <a href="news.html">
                                    <div className="imgBox img2"></div>
                                    <div className="text_news">
                                        <h4>TWENTY-FOUR ISSUES</h4>
                                        <p>
                                            On Saturday Ernesto told me that a used bookstore
                                            on Avenida de Mayo was selling off part of Ruth.
                                        </p>
                                    </div>
                                </a>
                            </li>
                            
                            <li>
                                <a href="news.html">
                                    <div className="imgBox img3"></div>
                                    <div className="text_news">
                                        <h4>THE HALLDOR LAXNESS LIBRARY</h4>
                                        <p>
                                            At eighty, he has heard doomy predictions about
                                            the future of reading, especially reading printed
                                            books,  or decades.
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </ReadCon>

            <VisitCon>
                <ul>
                    <li className="top">
                        <div>
                            <h4>
                                A RESPECTFUL RESPONSE<br />
                                TO FUNCTION AND SETTING
                            </h4>
                            <p>We believe unequivocally that well-considered design improves our lives.</p>
                        </div>
                    </li>
                    
                    <li className="bottom">
                        <div>
                            <h4>VISIT</h4>
                            <h3>
                                신규 스토어:<br />
                                이솝 롯데 노원
                            </h3>
                            
                            <p>
                                최근에 오픈한 이솝 스토어에서 소중한<br />
                                사람을 위한 시즈널 기프트를 만나보세요.
                            </p>
                            
                            <span className="read">
                                <a href="brand.html">
                                    READ MORE
                                    <img src="./images/arrow.svg" alt="화살표 icon" />
                                </a>
                            </span> 
                        </div>
                        
                        <div className="visitImg"></div>
                    </li>
                </ul>  
            </VisitCon>

         
        </>
    );
};

export default Content2;