import Card, {recCard} from "./Card";
import { useState, useEffect, useContext } from "react";
import { apiData } from "../utils/mockData";
import { Link } from "react-router-dom";
import Cors from "./Cors"
import UserContext from "../utils/UserContext";


const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const {loggedInUser} = useContext(UserContext)

  useEffect(()=>{
    async function fetchData() {
      try {
        const resList = await apiData();
        const {restaurants} = resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
        setRestaurantsList(restaurants);
        setSearchList(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (restaurantsList.length === 0){
    // return <Shimmer />;
    return <Cors />
  }

  const setUser = () => {
    const user = document.getElementById("user");
  }

  const RecRest = recCard(Card);

  return (
    <div className="body bg-[#FFF8E1] px-10 pb-8 pt-30">
      <h3 className="text-2xl font-serif italic pt-5">Hello { loggedInUser }! Enjoy your meal...</h3>
      <div className="search-filter flex items-center h-25">
        <div id="search-bar">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search"
            id="search-box"
            className="w-100 border-1 p-2 mr-10 rounded-sm bg-white"
            onChange={(ev) => {
              setSearchValue(ev.target.value);
            }}
          />

          {/* This will filter the restaurants based on the reviews (greater than 4)*/}
          <button
            id="search"
            className="mr-10 bg-blue-500 w-30 h-10 rounded-md text-white"
            onClick={
              (ev) => {
                const filtered = restaurantsList.filter((item) =>
                  item.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
                setSearchList(filtered);
              }
            }
          >
            Search
          </button>
        </div>
        <button
          className="filter-review mr-10 bg-blue-500 w-40 h-10 rounded-md text-white"
          onClick={() => {
            const filteredrestaurantsList = restaurantsList.filter((item) => item?.info?.avgRating > 4.5);
            setSearchList(filteredrestaurantsList);
          }}
        >
          Recommended
        </button>
      </div>
      <div className="card-container flex flex-wrap gap-8">
        {searchList.map((item) => (
          <Link key={item.info.id} to={`restaurant/${item?.info?.id}`}>
            {item?.info?.avgRating >= 4.5 ? <RecRest resData={item.info} /> : <Card resData={item.info} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
