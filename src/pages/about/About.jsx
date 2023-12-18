import { AboutWrap } from "./AboutStyle";


const About = () => {
    return (
        <AboutWrap>
            <div className="aboutBanner">
                <div className="bannerWrap">
                    <h2>
                        BRAND STORY
                    </h2>
                    <p>
                        이솝은 세심하게 고안된 효과적이면서도, 감각적인 즐거움을 선사하는<br />
                        스킨, 헤어, 바디 케어 제품을 제공합니다.
                    </p>
                </div>
            </div>

            <div className="inner">
                <div className="aboutPro">
                    <div class="title">
                        <h3>PRODUCT</h3>
                    </div>
                    <div className="top">
                        <ul>
                            <li><img src="./images/about02.webp" alt="Aesop brand" /></li>
                            <li><img src="./images/about04.jpg" alt="Aesop brand" /></li>
                        </ul>
                        <p class="ex">
                            최고 품질의 스킨, 헤어 그리고 바디케어 제품을 만들어 내는 것이 변함없는 이솝의 목표입니다. 우리는 식물성 재료와
                            연구실에서 제조된 성분들을 공급하기 위해 폭넓은 조사를 하며, 반드시 효능과 안전성이 입증된 성분만을 사용합니다.
                            전문적인 지식을 가진 컨설턴트들은 하나하나 개성적인 이솝 매장에서 제품라인을 소개하고, 고객이 적합한 제품을
                            고를 수 있도록 안내해 드릴 수 있어 매우 기쁩니다.
                        </p>
                    </div>
                </div>
                
                <div className="aboutPro">
                    <div class="title middleTit">
                        <h3>PASSION</h3>
                    </div>
                    <div className="middle">
                        <img src="./images/about01.png" alt="Aesop brand" />
                        <p class="ex">
                        이솝은 초기부터 제품 연구개발에 매우 독특한 접근 방식을 적용해왔습니다. 이솝의 숙련된 화학자들은 본사에 위치한
                        실용적이고 맞춤화 되어 있는 연구소에서 제품 아이디어를 내고, 배합에 대해 연구하고 견본을 만듭니다. 이솝은 세계
                        최고의 공급 업체로부터 조달 받은 원료에 최첨단 기술을 적용하고 오랜 과학적 경험과 원칙에 따라 최고 품질의 제품으로
                        탄생시킵니다.
                        </p>
                    </div>
                </div>

                <div className="aboutPro">
                    <div class="title">
                        <h3>POINT</h3>
                    </div>
                    <div className="bottom">
                        <ul>
                            <li className="metarial">
                                <img src="./images/aboutIcon01.png" alt="" />
                                <h4>RAW MATERIAL</h4>
                                <p>
                                    세계 최고의 공급 업체로부터 조달<br />
                                    받은 원료에 최첨단 기술을 적용합니다.
                                </p>
                            </li>

                            <li className="science">
                                <img src="./images/aboutIcon02.png" alt="" />
                                <h4>SCIENCE</h4>
                                <p>
                                    오랜 과학적 경험과 원칙에 따라<br />
                                    최고 품질의 제품으로 탄생시킵니다.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </AboutWrap>
    );
};

export default About;