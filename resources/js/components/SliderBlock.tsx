import {FC} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from "./SliderItem";
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/sliderBlock.scss';


const SliderBlock: FC = () => {
    return(
        <section className="slider_wrapper">
            <div className="top">
                <p>
                    Erfolgsgeschichten
                </p>
                <button>Ihre Feedback</button>
            </div>
            <div className="slider">
                <Swiper
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SliderItem/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderItem/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderItem/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderItem/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default SliderBlock;
