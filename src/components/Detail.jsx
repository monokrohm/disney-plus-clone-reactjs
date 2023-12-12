import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import db from '../firebase'
import { onValue, ref } from 'firebase/database'

function Detail() {
    const { id } = useParams()
    const [detailData, setDetailData] = useState({})

    const movieRef = ref(db, "movies")
    useEffect(() => {
        onValue(movieRef, (snapshot) => {
            const data = snapshot.val()
            // console.log(data)
            if (data.length > 0) {
                setDetailData(data[id])
            } else {
                console.log("No data in firebase")
            }
        })
    }, [id])

    // console.log(detailData)

    return (
        <Container>
            <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </Background>
            <ImageTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupButton>
            </Controls>
            <Info>
                {detailData.subTitle}
            </Info>
            <Description>
                {detailData.description}
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    display: block;
    position: relative;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);
    min-height: calc(100vh - 250px);
    overflow: hidden;
`

const Background = styled.div`
    position: fixed;
    inset: 0px; 
    opacity: 0.9;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin: 0px auto;
    padding-bottom: 25px;
    height: 30vh;
    min-height: 170px;
    width: 100%;

    img{
        width: 35vw;
        max-width: 600px;
        min-width: 200px;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 25px 0px;
    min-height: 55px;
`

const PlayButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px 0 0;
    padding: 0px 25px;
    height: 55px;
    background: rgb(250,250,250);
    font-size: 15px;
    border-radius: 5px;
    border: none;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    img{
        width: 35px;
    }
    &:hover{
        background: rgb(180,180,180)
    }

    @media (max-width: 768px){
        margin: 0 10px 0 0; 
        padding: 0px 10px;
        height: 45px;
        font-size: 10px;

        img{
            width: 25px;
        }
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid white;
    color: white;
`

const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0,0,0,0.6);
    cursor: pointer;
    
    span{
        font-size: 26px;
        color: white;
    }
`

const GroupButton = styled(AddButton)`
    background: black;
`

const Info = styled.div`
    margin-top: 25px;
    min-height: 20px;
    color: rgb(245,245,245);
    font-size: 15px;
    
    @media (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    margin-top: 15px;
    max-width: 875px;
    color: rgb(245,245,245);    
    line-height: 1.5;
    font-size: 20px;

    @media (max-width: 768px){
        font-size: 15px;
    }
`