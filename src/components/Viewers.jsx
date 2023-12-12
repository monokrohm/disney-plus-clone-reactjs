import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/national-geographic.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 30px;
    margin-top: 30px;
    padding: 30px 0px 25px;

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    position: relative;
    padding-top: 55%;
    border: 3px solid rgba(249,249,249, 0.1);
    border-radius: 20px;
    background-color: #383A48;
    overflow: hidden;
    cursor: pointer;

    box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -15px,
    rgb(0 0 0 / 75%) 0px 15px 10px -15px;

    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;

    img{
        display: block;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;

        transition: opacity 500ms ease-in-out 0s;
    }

    video{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 0;
    }

    &:hover{
        border-color: rgba(250,250,250, 0.8);
        border-radius: 20px;

        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 70%) 0px 40px 60px -20px,
        rgb(0 0 0 / 75%) 0px 30px 20px -15px;

        video{
            opacity: 1;
        }
    }
`