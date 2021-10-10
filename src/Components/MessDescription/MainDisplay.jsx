import React from "react";
import Crousel from "./Crousel";
import FoodCard from "./FoodCard";
import FoodItem from "./FoodItem";
import Navbar from "./Navbar";
import { useLocation } from "react-router";
const MainDisplay = () => {
  // const location = useLocation();
  // console.log(location.search)
  return (
    <div>
      <Navbar/>
      <Crousel />
      <FoodItem/>
      <FoodCard />
    </div>
  );
};

export default MainDisplay;
