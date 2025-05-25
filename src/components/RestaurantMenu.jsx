import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {

     const [showIndex, setShowIndex] = useState(null);

   
    let {resId} = useParams();
    const menuInfo = useRestaurantMenu(resId);
    const categories = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>{
        return category.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    if(menuInfo === null) {
        return <Shimmer/>
    }

    const {name, areaName, avgRating} = menuInfo?.data?.cards[2]?.card?.card?.info;

    return(
        <div className="mx-10 flex flex-col justify-center items-center mt-35">
            <h1 className="font-bold text-3xl">{name}</h1>
            <h3>{"Location: " + areaName}</h3>
            <h3> {avgRating} <FontAwesomeIcon icon={faStar} style={{ color: "#ffc800" }} /></h3>
            <h2 className="font-bold text-lg">Menu of the restaurant</h2>
            <div className="w-8/12">
                {categories.map((category, index)=>{
                    return(
                        <MenuCategory key={category?.card?.card?.title} category={ categories[index]} 
                            showItem = { index === showIndex && true }
                            setShowIndex = {()=> setShowIndex(showIndex === index? null: index)}
                            
                        />
                    )
                })}
            </div>
        </div>
    )
    
}

export default RestaurantMenu;