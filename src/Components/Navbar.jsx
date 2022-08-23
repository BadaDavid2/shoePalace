import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import {NavLink} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import {IoMdLogIn} from 'react-icons/io'
import {ImCart} from 'react-icons/im'
const Navbar = () => {
  return (
    <>
      <Container>
        <Nav>
          <Main to='/'>
            Da<Logo src={logo}/><span>Palace</span>
          </Main>
          <Links>
            <SignIn to='/signIn'><FiLogIn className='login'/>Sign In</SignIn>
            <SignUp to='/signup'><IoMdLogIn className='login'/>Sign Up</SignUp>
            <Cart to='/cart'><ImCart className='login'/>Cart</Cart>
          </Links>
        </Nav>
      </Container>
    </>
  )
}

export default Navbar
const Container = styled.div`
  width: 100%;
  height: 10vh;
  z-index:99;
  position: fixed;
`
const Nav = styled.div`
  width: 100%;
  background-color: #106679;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:700px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    div{
      margin: auto;
    }
  }
`
const Main = styled(NavLink)`
    word-spacing:1px;
    color: white !important;
    align-items: center;
    margin-left:130px;
    text-decoration: none;
    display: flex;
    font-size: 25px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    cursor: pointer;
    span{
      margin-left: -6px;
      font-family: cursive;
    }
    @media screen and (max-width:700px){
      justify-content: center;
      text-align:center;
      margin:auto !important;
    }
`
const Logo = styled.img`
  width: 80px;
`
const Links = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  margin-right: 130px;
`
const SignIn = styled(NavLink)`
  width:100px;
  height: 50px;
  border-radius: 5px;
  color:black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  transition:0.3s;
  color:white;
  font-size: 16px;
  .login{
    margin-right:5px;
  }
  :hover{
    background-color: #4dcce8;
    color: black;
    cursor: pointer;
  }
`
const SignUp = styled(SignIn)``
const Cart = styled(SignIn)``