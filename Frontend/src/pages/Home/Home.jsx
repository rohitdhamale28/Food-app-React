import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import RestauDisplay from '../../components/RestauDisplay/RestauDisplay'
const Home = () => {
let [category,setCategory]= useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <br /><br />
      <RestauDisplay/>
      <AppDownload/>
    </div>
  )
}

export default Home
