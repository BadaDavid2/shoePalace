import React from 'react'
import styled from 'styled-components'
import image from '../../img/login.svg'
import {FaLock} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const SignIn = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <Left>
                <img src={image} alt="" />
            </Left>
            <Right>
                <form action="">
                <Title><FaLock className='icon'/>Sign In</Title>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='Enter Email Here' name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password Here' name='password'/>
                        <Forgot><span>Forgot Password?</span> <Click>Click Here</Click></Forgot>
                    </div>
                    <Remeber>
                        <input type="checkbox" name="" id="" />
                        Remeber Me
                    </Remeber>
                    <Login>Login</Login>
                    <hr />
                    <SignUp>
                        Don't have an account?
                        <SignUpBtn to='/signUp'>Sign Up</SignUpBtn>
                    </SignUp>
                </form>

            </Right>
        </Wrapper>
      </Container>
    </>
  )
}

export default SignIn

const Container = styled.div`
    width: 100%;
    padding-top: 20vh;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin:0px auto;
    @media screen and (max-width:700px) {
        display: block;
        height: 100vh;
    }
    
`
const Left = styled.div`
    flex: 1;
    img{
        width: 90%;
        margin-left: 30px;
    }
`
const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight:400;
    .icon{
        font-size: 25px;
        margin-right: 5px;
    }
`
const Right = styled.div`
    flex:1;
    @media screen and (max-width:700px){
        form{
            width: 100% !important ;
        }
    }
    form{
        box-shadow: 0px 0px 4px rgba(0,0,0,0.342);
        width: 500px;
        margin:auto;
        border-radius: 10px;
        height: 500px;
        padding-top: 20px;
        div{
            display: flex;
            flex-direction: column;
            margin: 20px 0px;
            label{
                margin-left: 30px;
                font-size: 18px;
            }
            input{
                width: 84%;
                margin: 5px auto;
                height: 35px;
                padding: 0px 10px;
                border: 1px solid black;
                border-radius: 4px;
                outline: none;
                font-size: 16px;
            }
        }
        hr{
            width: 90%;
            margin: 30px auto;
        }
    }
`
const Forgot = styled.span`
    display: flex !important;
    margin-left: 31px !important;
    margin-top: 0px !important;
`
const Click = styled.a`
        color: #1b63b1;
        margin-left: 5px;
        text-decoration: none ;
    
`
const Remeber = styled.span`
    margin-left:31px;
    color: grey;
    font-size: 16px;
    input{
        margin-right: 10px;
    }
`
const Login = styled.button`
    width: 70%;
    height: 35px;
    text-transform: uppercase;
    margin:20px auto;
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #106679;
    background-color: #106679;
    color: white;
    border: none;
    border-radius: 5px;
    transition: 0.3s;
    :hover{
        background-color: transparent;
        color: #106679;
        border: 1px solid #106679;
    }
`

const SignUp = styled.section`
    text-align: center;
    color: grey;
`
const SignUpBtn = styled(Link)`
    background-color: #4dcce8;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 4px;
    margin-left: 5px;
    padding: 10px 20px;
    text-decoration: none;
    color: black;
`