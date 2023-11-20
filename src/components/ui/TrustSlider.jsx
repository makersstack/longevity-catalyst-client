import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import trustImages from '../../data/images';
import { baseUrl } from '../../globals';

const TrustSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust the speed as needed
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 876,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ]
    };


    return (
        <div className="trust_by_box">
            <Slider {...settings}>
                {trustImages.map((image, index) => (
                    <div className="single_trust_by" key={index}>
                        <img src={`${baseUrl}${image.src}`} alt={image.name} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TrustSlider;
