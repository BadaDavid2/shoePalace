import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import data from '../Card.json'
const Admin = () => {
  const [newName,setNewName] = useState("")
  const [newPrice,setNewPrice] = useState("")
  const [describe,setDescribe] = useState("")
  const [newImage,setNewImage] = useState("")
  const addPost =()=>{
    const newId = data.length + 1
    const newData = {
      id:newId,
      name:newName,
      price:newPrice,
      describe:describe,
      image:newImage
    } 
    data.push(newData)
  } 
  // useEffect(()=>{
  //   const save = JSON.parse(localStorage.getItem(data))
  //   data.push(save)
  // },[])
  return (
    <>
      <Container>
        <Wrapper>
          <input type="file" name="" value={newImage} onChange={(e) => {
            setNewImage(e.target.value);
          }} />
          <input type="text" placeholder='Name of Item' value={newName} onChange={(e) => {
                setNewName(e.target.value);
              }}/>
          <input type="text" placeholder='Price of Item' name="price" value={newPrice} onChange={(e) => {
                setNewPrice(e.target.value);
              }} />
          <input type="text" placeholder='Description of Item' name="description" value={describe} onChange={(e) => {
                setDescribe(e.target.value);
              }}/>
        <button  onClick={() => {
                    addPost();
                    setNewImage("");
                    setNewName("");
                    setNewPrice("");
                    setDescribe("");
                  }}>Upload</button>
        </Wrapper>
      </Container>
    </>
  )
}

export default Admin

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20vh;
`
const Wrapper = styled.div`
  width: 300px;
  margin: auto;
  input[type=text]{
    width: 100%;
    height: 35px;
    margin: 10px 0px;
    padding: 0px 10px;
    outline: none;
    border: 1px solid black;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
  }
  button{
    width: 90%;
    color: white;
    background-color: #1c7e1c;
    font-size: 16px;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    float: right;
  }
`
