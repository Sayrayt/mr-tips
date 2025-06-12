import './Sliders.scss'

import Slider from "react-slick";
import NavSlider from './NavSlider'
import { NavButton } from '@shared/index';

import slide2 from '@assets/images/red.jpg'

import type { Settings } from "react-slick";
import { JSX } from '@emotion/react/jsx-runtime';

export function Sliders(): JSX.Element {
    const settings: Settings = {
        dots: false,
        lazyLoad: 'progressive',
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    const slides = [
        { id: 1, img: slide2 },
        { id: 2, img: slide2 },
    ]

    return (
        <div className="sliders">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div className='sliders__item' key={slide.id}>
                        <div className='sliders__button'>
                            <NavButton variant='primary' placeholder='Сезонные предложения' path='/'></NavButton>
                        </div>
                        <img src={slide.img} alt={`slide-${slide.id}`} />
                    </div>
                ))}
            </Slider>
            <NavSlider />
        </div>
    )
}