import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { initialPath } from "../utils/images";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";

const CategoryMenuItem = ({data})=>{

    const [clickedIndex, setClickedIndex] = useState(null);
    
    if (!data || data.length === 0) {
        return <h1>Loading...</h1>;
    }

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        
    }
    
    return (
        data.map((item, index) => 
            (
                <div key={item?.card?.info?.id || index} className="flex items-center justify-between m-5 rounded-lg bg-amber-200 border-gray-700 p-4">
                    <div className="w-8/12">
                        <h4 className="font-bold text-md">{item?.card?.info?.name} - <span className="text-md text-amber-600">{item?.card?.info?.ratings?.aggregatedRating?.rating}</span>&nbsp;<FontAwesomeIcon icon={faStar} style={{ color: "#d97706" }} /></h4>
                        <h4 className="text-amber-800 font-bold text-sm">For ₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</h4>
                        <p className="text-sm">{item?.card?.info?.description}</p>
                    </div>
                    <div className="relative">
                        <button className={`text-sm border-0 w-15 h-6 rounded-md absolute bottom-[-12px] left-1/2 -translate-x-1/2 hover:cursor-pointer ${clickedIndex === index?"bg-white text-black": "bg-black text-white" }`} onClick={()=>{setClickedIndex(index); handleAddItem(item); setTimeout(()=>setClickedIndex(null), 50)}}>Add+</button>
                        <img className="w-40 h-24 rounded-md object-cover" src={initialPath + item?.card?.info?.imageId} />
                    </div>
                </div>
            )
        )
    )
    
}

export default CategoryMenuItem;