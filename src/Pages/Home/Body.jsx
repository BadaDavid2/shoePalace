import React, { useState } from 'react'
import styled from 'styled-components'
import cardData from '../../Card.json'
import { Link } from 'react-router-dom'

const Body = () => {
  const [search,setSearch] = useState("")
  return (
    <>
        <Bodyy>
        <Container>
        <Input placeholder='Search for your what suits you' value={search} onChange={(el) => setSearch(el.target.value)}/>
          <Wrapper>
            {
              cardData.filter((el)=> el.name.toLowerCase().includes(search)).map((el)=>(
                <Card key={el.id} to={`/detail-page/${el.id}`}>
                  <CardTop>
                    <CardImage src={el.image}/>
                  </CardTop>
                  <CardText>
                    <span>Name: {el.name}</span>
                    <div>
                      <span>Price: #{el.price}</span>
                      <Add>Add to Cart</Add>
                    </div>
                  </CardText>
                </Card>
              ))
            }
          </Wrapper>
        </Container>
        </Bodyy>
    </>
  )
}

export default Body
const Bodyy = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Container = styled.div`
  height: 100%;
  padding-top: 20vh;
  flex: 3;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;
  flex-wrap: wrap;
`
const Card = styled(Link)`
  width: 300px;
  margin: 10px;
  text-decoration: none;
  border-radius: 10px;
  color: black;
  height: 320px;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.342);
`
const CardTop = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto !important;
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
`
const CardText = styled.div`
  font-size: 18px;
  margin-top: 40px;
  padding: 10px 20px;
  height: 40%;
  position: relative;
  ::before{
    content: " ";
    width: 60px;
    height: 4px;
    background-color: white;
    position: absolute;
    right: 10px;
    top: -10px;
  }
  div{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`
const Add = styled.div`
  background-color: #106679;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center !important;
  width: 120px;
  height: 35px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
`
const Input = styled.input`
  width: 50%;
  height: 35px;
  outline: none;
  padding: 0px 10px;
  border: 1px solid gray;
  display: block;
  margin: auto;
  border-radius: 5px;
`