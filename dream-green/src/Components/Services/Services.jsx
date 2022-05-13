import React from 'react';
import './Services.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideTwo from '../Images/pexels-jannis-knorr-2933243.jpg';
import SlideThree from '../Images/pexels-magda-ehlers-2569839.jpg';
import SlideFour from '../Images/pexels-aleksejs-bergmanis-681335.jpg'
import SlideFive from '../Images/pexels-pixabay-209251.jpg'
import SlideSix from '../Images/pexels-tima-miroshnichenko-6169056.jpg'

function Services() {
    return (
        <div className='services-container' id='services'>
            <div className='headerServices'>
                <h1>Our Services</h1>
            </div>
            <Swiper pagination={true} modules={[Pagination, Navigation]} navigation={true} loop={true} className="mySwiper">
                <SwiperSlide><img src={SlideFour} alt='' /></SwiperSlide>
                <SwiperSlide><img src={SlideSix} alt='' /></SwiperSlide>
            </Swiper>
            <div className='services-description'>
                <h2>Pickup:</h2>
                <p>
                    "We offer a pickup service. Fill in the form and we will head
                    to your location at the accorded date to pickup your waste oil. We offer
                    pickup services across the country. If you wish to know more about our business contact us."
                </p>
            </div>
            <Swiper pagination={true} modules={[Pagination, Navigation]} navigation={true} loop={true} className="mySwiper">
                <SwiperSlide><img src={SlideFive} alt='' /></SwiperSlide>
                <SwiperSlide><img src={SlideThree} alt='' /></SwiperSlide>
                <SwiperSlide><img src={SlideTwo} alt='' /></SwiperSlide>
            </Swiper>
            <div className='services-description-last'>
                <h2>Warehouse:</h2>
                <p>
                    "OilentGreen offers warehouses destined to storing the waste oil.
                    We have warehouses in Lisbon, Porto and Algarve. If you wish to know
                    more about our business, reach out to us through our contacts."
                </p>
            </div>

        </div>
    );
}

export default Services;