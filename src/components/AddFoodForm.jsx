import React from 'react';
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({setFoodState, foodState}) {

    const [name, SetName] = useState('')
    const [image, SetImage] = useState('')
    const [calories, SetCalories] = useState(0)
    const [servings, SetServings] = useState(0)
    function handleSubmit(event) {
        event.preventDefault()
        let newFood = {name, calories, image, servings}
        setFoodState([...foodState, newFood])
        console.log(newFood)
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => {SetName(event.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(event) => {SetImage(event.target.value)}} />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(event) => {SetCalories(event.target.value)}} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input value={servings} type="number" onChange={(event) => {SetServings(event.target.value)}} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;