import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNewToDisney } from '../features/MovieSlice'

function NewToDisney() {
    const movies = useSelector(selectNewToDisney)
    return (
        <Container>
            <h4>New to Disney+</h4>
            <Content>
                {
                    movies && movies.map((movie, key) => (
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={"/detail/" + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default NewToDisney

const Container = styled.div`
    padding: 0 0 25px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    position: relative;
    padding-top: 55%;
    border-radius: 10px;
    border: 3px solid rgba(250,250,250,0.1);
    overflow: hidden;
    cursor: pointer;

    box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -15px,
    rgb(0 0 0 / 75%) 0px 15px 10px -15px;

    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;

    img{
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        object-fit: cover;
        z-index: 1;
    }

    &:hover{
        border-color: rgba(250,250,250,1);
        transform: scale(1.05);

        box-shadow: rgb(0 0 0 / 70%) 0px 40px 60px -20px,
        rgb(0 0 0 / 75%) 0px 30px 20px -15px;
    }
`