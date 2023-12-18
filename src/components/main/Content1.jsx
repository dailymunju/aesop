import { HairContent, IntroContent } from "./ContentStyle";
const Content1 = () => {
    return (
        <>
            <IntroContent>
                <div className="inner">
                    <div className="title">
                        <h4 className="sub_title">BRAND</h4>
                        <h3 className="main_title">ABOUT AESOP</h3>
                    </div>

                    <div className="moto">
                        <ul>
                            <li>
                                <img src="./images/green.png" alt="" />
                                <h4>GREEN</h4>
                                <p>
                                    식물성 재료와 안전한 원료,<br />
                                    최상의 성분 배합을 고수하는 ‘이유 있는 고집’
                                </p>
                            </li>

                            <li>
                                <img src="./images/clean.png" alt="" />
                                <h4>CLEAN</h4>
                                <p>
                                    잔여물을 말끔히 씻어내어 피부를<br />
                                    깨끗하게 하는 것은 인텔리전트의 기초입니다.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </IntroContent>

            <HairContent>
                <ul>
                    <li>
                        <div>
                            <h3>두피가 건강해야<br/> 모발이 건강합니다</h3>
                            <p>
                                부드러우면서 효과적인 세정은 두피를 시작으로 두피 주변의 피부와 머리카락을 관리합니다. 매일 머리를 감는 것보다는 필요에 따라 세정하는 것이 바람직합니다.
                            </p>
                            <span className="read">
                                <a href="product.html">
                                    READ MORE
                                    <img src="./images/arrow.svg" alt="화살표 icon" />
                                </a>
                            </span>
                        </div>
                    </li>
                    <li className="adventImg"></li>
                </ul>
            </HairContent>

        </>

        
    );
};

export default Content1;