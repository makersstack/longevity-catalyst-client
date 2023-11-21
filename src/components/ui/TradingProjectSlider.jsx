import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { data } from '../../data/projectData';
import { baseUrl } from '../../globals';



const TradingProjectSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust the speed as needed
        arrows: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 876,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    };


    return (
        <div className="trading_project_box">
            <Slider {...settings}>
                {data.projectCards.map((item, index) => (
                    <div
                        className={`trading_project_single`}
                        key={index}

                    >
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <div style={{ backgroundImage: `url("${baseUrl}${item.bg_img}")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundColor: 'lightgray', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '-2' }}></div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TradingProjectSlider;
