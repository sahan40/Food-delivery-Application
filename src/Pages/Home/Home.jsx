import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Navbar/Header/Header'
import ExpoloreMenu from '../../Components/ExpoloreMenu/ExpoloreMenu'
import FoodDisplay from '../../Components/Navbar/FoodDisplay/FoodDisplay'

const Home = () => {

  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExpoloreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      
    </div>
  )
}

export default Home