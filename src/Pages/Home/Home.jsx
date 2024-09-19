import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Navbar/Header/Header'
import ExpoloreMenu from '../../Components/ExpoloreMenu/ExpoloreMenu'
import FoodDisplay from '../../Components/Navbar/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {

  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExpoloreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
      
    </div>
  )
}

export default Home