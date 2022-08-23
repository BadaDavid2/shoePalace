import React from 'react'
import styled from 'styled-components'

const Side = () => {
  return (
    <>
      <Container>
        <Title>Categories</Title>
        <Categories>
            <Category>Adult Male Shoes</Category>
            <Category>Adult Female Shoes</Category>
            <Category>Male Children Shoes</Category>
            <Category>Female Children Shoes</Category>
            <Category>Gender Neutral Shoes</Category>
        </Categories>
      </Container>
    </>
  )
}

export default Side

const Container = styled.aside`
    width: 200px;
    display: flex;
    flex: 0.8;
    flex-direction: column;
    height: 50vh;
    position: fixed;
    bottom: 200px;
    margin-left: 30px;
    transition: ease-in-out 0.3s;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.342);
    :hover{
        transform: translate(0% , 0%);
    }
`
const Title = styled.div`
    color:white;
    text-align: center;
    font-size: 25px;
    text-transform: uppercase;
    margin: 25px 0px;
    color: black;
    position: relative;
    ::after{
        position: absolute;
        content: " ";
        width: 50px;
        height: 4px;
        background-color: black;
        top:35px;
        right: 85px;
    }
`
const Categories = styled.div`
    width: 70%;
    height: 250px;
    margin: 20px auto;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`
const Category = styled.div`
    
    cursor: pointer;
    font-size: 18px;
    position: relative;
    transition: all 0.3s !important;
    /* ::after{
        position: absolute;
        content: " ";
        width: 10px;
        height: 3px;
        background-color: black;
        top:30px;
        left: 0px;
    }
    :hover{
        ::after{
            width: 80px;
        }
    } */
`