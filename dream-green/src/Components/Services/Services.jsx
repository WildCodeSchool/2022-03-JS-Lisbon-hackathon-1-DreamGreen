import React from 'react';
import './Services.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import SlideOne from '../Images/pexels-pixabay-33783.jpg';
import SlideThree from '../Images/pexels-jannis-knorr-2933243.jpg';
import SlideTwo from '../Images/pexels-magda-ehlers-2569839.jpg';

function Services() {
    return (
        <div className='services-container'>
            <div className='headerServices'>
                <h1>Our Services</h1>
            </div>
            <Swiper pagination={true} modules={[Pagination]} loop={true} className="mySwiper">
                <SwiperSlide><img src={SlideOne} alt='' /></SwiperSlide>
                <SwiperSlide><img src={SlideTwo} alt='' /></SwiperSlide>
                <SwiperSlide><img src={SlideThree} alt='' /></SwiperSlide>
            </Swiper>
            <div className='services-description'>
                <p>
                    Hello everyone, we are dream green team,
                    our project is about recycling natural oil to
                    refine it into bio-fuel for agriculture purposes.
                </p>
            </div>
            <Swiper pagination={true} modules={[Pagination]} loop={true} className="mySwiper">
                <SwiperSlide><img src={SlideOne} alt='' /></SwiperSlide>
                <SwiperSlide><img src={SlideTwo} alt='' /></SwiperSlide>
                <SwiperSlide><img src={SlideThree} alt='' /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Services;