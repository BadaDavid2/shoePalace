import React from 'react'
import styled from 'styled-components'
import {BsFillUnlockFill} from 'react-icons/bs'
const SignUp = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title><BsFillUnlockFill className='icon'/>Sign Up</Title>
          <section>
            <span>
              <div>
                <label htmlFor="">First Name:</label>
                <input type="text" placeholder='Enter First Name Here'/>
              </div>
              <div>
                <label htmlFor="">Last Name:</label>
                <input type="text" placeholder='Enter Last Name Here' />
              </div>
            </span>
              <div>
                <label htmlFor="" className='email'>Email: </label>
                <input type="email" placeholder='Enter Email Here' />
              </div>
              <div>
                <label htmlFor="">Phone: </label>
                <input type="tel" placeholder='Enter Phone Number Here' />
              </div>
            <span>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" placeholder='Enter Password Here' />
              </div>
              <div>
                <label htmlFor="">Last Name:</label>
                <input type="password" placeholder='Confirm Password Here' />
              </div>
            </span>
            <button>Sign Up</button>
          </section>
        </Wrapper>
      </Container>
    </>
  )
}

export default SignUp

const Container = styled.div`
  width: 100%;
  padding-top:150px;
`
const Wrapper = styled.div`
  width: 700px;
  margin:auto;
  border-radius:4px;
  padding: 20px 0px;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.452);
  @media screen and (max-width:700px){
    width: 100%;
    section{
      input{
        width: 90% !important;
      }
    }
  }
  section{
    width: 90%;
    margin:auto;
    .email{
      margin-right:9px;
    }
    div{
      margin: 10px 0px;
      
      label{
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
    span{
      display: flex;
      flex-wrap: wrap;
      justify-content:space-between;
    }
    button{
      width:80%;
      display:flex;
      flex-wrap: wrap;
      margin:20px auto;
      height: 35px;
      justify-content: center;
      align-items: center;
      font-size: 16px;
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
    }
  }
`
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight:400;
  .icon{
    font-size: 25px;
    margin-right: 5px;
  }
`