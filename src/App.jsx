import React, { useState } from 'react'
import './App.css'
import { Card, Col, Button, Row, Divider, Input } from "antd"
import foods from "./foods.json"
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

function App() {
  const [foodState, setFoodState] = useState(foods);

  function searchFood(search) {
    console.log(search)
    const searchResults = foodState.filter(food => {
      return food.name.toLowerCase().includes(search.toLowerCase())
    })
    setFoodState(searchResults)
  }
  function deleteFood(index) {
  const updatedFood = [... foodState]
  updatedFood.splice(index, 1)
  setFoodState(updatedFood) 
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <div>
        <Search searchFood = {searchFood}/>
      </div>
      <div className='Addform'>
        <AddFoodForm setFoodState = {setFoodState} foodState = {foodState}/>
      </div>
      {foodState.map ((food, i) => (
        <div key={i} className='FoodBox'>
        <FoodBox food={food} index={i} deleteFood={deleteFood} />
        </div>
        ))}
    </div>
  );
}

export default App