import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import img from '../../img/cart.svg'
const Cart = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <img src={img} alt="" />
          <Text><span>Cart is Empty</span> <Home to='/'>Add to Cart</Home></Text>
        </Wrapper>
      </Container>
    </>
  )
}

export default Cart

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  /* height: 100vh; */
  padding-top:150px;
  width: 100%;
`
const Wrapper = styled.div`
  width: 700px;
  border-radius: 4px;
  height: 70vh;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.452);
  position: relative;
  img{
    width:100%;
  }
`
const Text = styled.div`
  position: absolute;
  bottom: 100px;
  right:60px;

`
const Home = styled(Link)`
  font-size: 16px;
     width: 70%;
    height: 35px;
    text-transform: uppercase;
    margin:20px auto;
    display: flex;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #4dcce8;
    background-color: #4dcce8;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 5px;
`