import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider, signInWithPopup } from "../firebase"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/userSlice';

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                navigate('/home')
            }
        })
    }, [userName])


    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider).then((result) => {
                setUser(result.user)
            }).catch((error) => {
                alert(error.message);
            });
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                navigate('/')
            }).catch((err) => alert(err.message))
        }
    }


    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" />
            </Logo>
            {
                !userName ?
                    <LoginButton onClick={handleAuth}>Log in</LoginButton> : <>
                        <NavMenu>
                            <Link to="/home">
                                <img src='./images/home-icon.svg' alt="" />
                                <span>HOME</span>
                            </Link>
                            <Link to="/home">
                                <img src='./images/search-icon.svg' alt="" />
                                <span>SEARCH</span>
                            </Link>
                            <Link to="/home">
                                <img src='./images/watchlist-icon.svg' alt="" />
                                <span>WATCHLIST</span>
                            </Link>
                            <Link to="/home">
                                <img src='./images/original-icon.svg' alt="" />
                                <span>ORIGINALS</span>
                            </Link>
                            <Link to="/home">
                                <img src='./images/movie-icon.svg' alt="" />
                                <span>MOVIES</span>
                            </Link>
                            <Link to="/home">
                                <img src='./images/series-icon.svg' alt="" />
                                <span>SERIES</span>
                            </Link>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} />
                            <DropDownMenu>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDownMenu>
                        </SignOut>
                    </>
            }
        </Nav >
    )
}


export default Header

const Nav = styled.nav`
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0; 
    padding: 0px 36px;
    height: 70px;
    background: #05060A;
    letter-spacing: 15px;
    z-index: 2;
`
const Logo = styled.a`
    display: inline-block;
    margin-top: 5px;
    padding: 0;
    width: 80px;
    max-height: 70px;
    font-size: 0;

    img{
        display: block;
        width: 100%;
        // transform: scaleX(-1);
    }
`

const NavMenu = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    flex-flow: row nowrap;
    margin: 0px;
    padding: 0px;
    margin-left: 50px;
    margin-right: auto;
    height: 100%;

    @media (max-width: 768px){
        display: none;
    }
    
    a{
        display: flex;
        align-items: center;
        padding: 0 20px;
        cursor: pointer;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span{
            position: relative;
            padding: 2px 0px;
            padding-left: 10px;
            color: white;
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            white-space: nowrap;

            &:before {
                position: absolute;
                content: "";
                height: 2px;
                background: white;
                left: 0px;
                right: 0px;
                bottom: -5px;
                border-radius: 0px 0px 4px 4px;
                opacity: 0;
                width: auto;
    
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;
            }
        }

        &:hover {
            span:before{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const LoginButton = styled.a`
    padding: 9px 15px; 
    border-radius: 5px;
    border: 1px solid white;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;

    transition: all 0.2s ease 0s;

    &:hover{
        background-color: white;
        color: black;
        border-color: transparent;
    }
`

const UserImg = styled.img`
    height: 100%;
`

const DropDownMenu = styled.div`
    display: none;
    position: absolute;
    top: 48px;
    right: 0px;
    padding: 10px;
    width: 100px;
    background: rgb(20,20,20);
    border: 1px solid rgba(150,150,150,0.35);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 20px 0px;
    font-size: 15px;
    letter-spacing: 3px;
    text-wrap: nowrap;
`

const SignOut = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    cursor: pointer;

    ${UserImg}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover{
        ${DropDownMenu} {
            display: initial;
        }
    }
`
