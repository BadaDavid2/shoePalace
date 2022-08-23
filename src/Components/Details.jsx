import React from 'react'
import styled from 'styled-components'
import data from '../Card.json'
import {Link, useParams } from 'react-router-dom'
const Details = () => {
  const {id} = useParams()
  const item = data[id-1]
  console.log(item)
  return (
    <>
      <Container>
        <Title>{item.name}</Title>
        <Wrapper>
            <Card>
                <Image><img src={item.image} alt=''/></Image>
                <Text>
                    <div>Name: {item.name}</div> <br />
                    <div>Description: {item.descibe}</div>
                    <div className='flex'>
                        <p>Price: {item.price}</p>
                        <Add to='/cart'>Add to Cart</Add>
                    </div>
                </Text>
            </Card>
        </Wrapper>
      </Container>
    </>
  )
}

export default Details

const Container = styled.div`
    width: 100%;
    padding-top: 15vh;
`
const Title = styled.h2`
    text-align: center !important;
    font-weight: 500;
    text-transform: uppercase;
`
const Wrapper = styled.div`
    width: 90%;
    height: 70vh;
    margin: auto;
    padding-top: 40px !important;
`
const Card = styled.div`
    width: 650px;
    margin: auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width:700px){
        display: block;
    }
`
const Image = styled.div`
    background-color: white;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.374);
    height: 300px;
    width: 300px;
    margin: auto;
    img{
        width: 100%;
        height: 100%;
    }

`
const Text = styled.div`
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    width: 300px;
    height: 100px;
    /* margin-top: 50px !important; */
    color: black;
    margin: 0px auto;
    .flex{
        margin-top: 15px;
    }

`
const Add = styled(Link)`
        height: 40px;
        background-color: #106679;
        border: 2px solid #106679;
        color: white;
        /* border: none; */
        text-transform: uppercase;
        border-radius: 8px;
        align-items: center;
        width: 90%;
        display: flex;
        text-decoration: none;
        cursor: pointer;
        padding: 5px 10px;
        justify-content: center;
        transition: all 0.2s;
        :hover{
            background-color: transparent;
            border: 2px solid #106679;
            color: #106679;
        }
`