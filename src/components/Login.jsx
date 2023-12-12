import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <LogoTop src="/images/cta-logo-one.svg" />
                    <SignUP>GET ALL THERE</SignUP>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <LogoBottom src="/images/cta-logo-two.png" />
                </CTA>
                <Background />
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    overflow: hidden;
`

const Content = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10vh; 
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding: 80px 40px;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-position: top;
    background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    z-index: -1;
`

const CTA = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0;
    margin-bottom: 25vh;
    margin-right: auto;
    margin-left: auto;
    max-width: 650px;

    transition: opacity 0.2s;
    width: 100%;
    transition-timing-function: ease-out;
`

const LogoTop = styled.img`
    display: block;
    width: 100%;
    max-width: 600px;
    min-height: 1px;
    margin-bottom: 10px;    
`

const LogoBottom = styled.img`
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
`

const SignUP = styled.a`
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: center;
    padding: 17px 0;
    width: 100%;
    background-color:  #0063e5;
    color: #f9f9f9;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1.5px;
    border-radius: 5px;
    cursor: pointer;

    transition: all 250ms;
    
    &:hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    margin: 0 0 25px;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`