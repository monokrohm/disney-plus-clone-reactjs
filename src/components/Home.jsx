import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommended from './Recommended'
import NewToDisney from './NewToDisney'
import Originals from './Originals'
import Trending from './Trending'
import db, { collection, getDocs } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../features/movieSlice'
import { selectUserName } from '../features/userSlice'

function Home() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommended = []
    let newToDisney = []
    let originals = []
    let trending = []

    useEffect(() => {
        getDocs(collection(db, "movies")).then((querySnapshot => {
            const movies = {};
            querySnapshot.docs.forEach((movieDocs) => {
                movies[movieDocs.id] = movieDocs.data();
            })
            Object.keys(movies).forEach((key) => {
                switch (movies[key].type) {
                    case "recommend":
                        recommended = [...recommended, { id: key, ...movies[key] }]
                        break
                    case "new":
                        newToDisney = [...newToDisney, { id: key, ...movies[key] }]
                        break
                    case "original":
                        originals = [...originals, { id: key, ...movies[key] }]
                        break
                    case "trending":
                        trending = [...trending, { id: key, ...movies[key] }]
                        break
                }
            })
            dispatch(setMovies({
                recommended: recommended,
                newToDisney: newToDisney,
                originals: originals,
                trending: trending
            }))
        }))
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