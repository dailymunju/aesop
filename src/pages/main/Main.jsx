import { MainWrap, VisualWrap } from "./MainStyle";
import { Swiper, SwiperSlide } from 'swiper/react';  
import { Autoplay,EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Content1 from "../../components/main/Content1";
import Content2 from "../../components/main/Content2";

const Main = () => {
    return (
        <>
            <VisualWrap>
                <Swiper effect="fade"
                    modules={[Autoplay,EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide><img src="./images/main_bg1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/main_bg2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/main_bg3.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </VisualWrap>

            <MainWrap className="main">
                <Content1/>
                <Content2/>
            </MainWrap>
        </>
    );
};

export default Main;