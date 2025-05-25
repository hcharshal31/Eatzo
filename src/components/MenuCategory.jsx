import CategoryMenuItem from "./CategoryMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Shimmer from "./Shimmer";

const MenuCategory = ({ category , showItem, setShowIndex }) => {

    if(!category || category.length === 0){
      return (<Shimmer />)
    }

  return (
    <div className="border-1 border-gray-400 m-5 rounded-md">
      <div onClick={setShowIndex} className="font-bold text-md flex justify-between p-4 hover:cursor-pointer">
        <span>{category?.card?.card?.title}</span>{" "}
        {showItem?<FontAwesomeIcon
          className="p-1"
          icon={faAngleUp}
          style={{ color: "#1c1c1c" }}
        />:<FontAwesomeIcon
        className="p-1"
        icon={faAngleDown}
        style={{ color: "#1c1c1c" }}
      />}
      </div>

      {/* <CategoryMenuItem dishName={}/> */}
      {showItem &&  <CategoryMenuItem data={category?.card?.card?.itemCards} />}  
    </div>
  );
};

export default MenuCategory;
