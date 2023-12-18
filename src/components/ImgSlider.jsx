import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        //centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg" alt=""></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" alt=""></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt=""></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" alt=""></img>
                </a>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 30px;

    ul li button {
        position: absolute;
        bottom: 40px;
        left: 40vw;

        &:before {
            font-size: 10px;
            color: white;
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    @media (max-width: 769px){
        ul li button {
            left: 30vw;
        }
    }

    @media (min-width: 770px) and (max-width: 1350px){
        ul li button {
            left: 35vw;
        }
    }
`

const Wrap = styled.div`
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    cursor: pointer;

    img {
        border: 5px solid transparent;
        width: 100%;
        height: 100%;
        
        box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -15px,
        rgb(0 0 0 / 75%) 0px 15px 10px -15px;
    }

    img:hover{
        border-color: rgba(250, 250, 250, 0.8);
        border-radius: 5px;
        transition-duration: 250ms;
    }
`

