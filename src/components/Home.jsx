import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommended from './Recommended'
import NewToDisney from './NewToDisney'
import Originals from './Originals'
import Trending from './Trending'
import db from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../features/movie/MovieSlice'
import { selectUserName } from '../features/user/UserSlice'
import { onValue, ref } from "firebase/database"

//import { collection, docs, onSnapshot, getDoc } from 'firebase/firestore'

function Home() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommended = []
    let newToDisney = []
    let originals = []
    let trending = []

    const movieRef = ref(db, "movies")
    useEffect(() => {
        onValue(movieRef, (snapshot) => {
            const data = snapshot.val()
            //console.log(data)
            Object.keys(data).forEach((key) => {
                switch (data[key].type) {
                    case "recommend":
                        recommended = [...recommended, { id: key, ...data[key] }]
                        break
                    case "new":
                        newToDisney = [...newToDisney, { id: key, ...data[key] }]
                        break
                    case "original":
                        originals = [...originals, { id: key, ...data[key] }]
                        break
                    case "trending":
                        trending = [...trending, { id: key, ...data[key] }]
                        break
                }
            })
            dispatch(setMovies({
                recommended: recommended,
                newToDisney: newToDisney,
                originals: originals,
                trending: trending
            }))
        })
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommended />
            <NewToDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

export default Home

const Container = styled.main`
    background: url("/images/home-background.png") no-repeat fixed center center / cover;
    position: relative;
    top: 70px; 
    padding: 0 calc(3.5vw + 5px);
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
`