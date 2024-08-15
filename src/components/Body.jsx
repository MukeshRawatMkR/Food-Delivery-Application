import RestaurantCard from "./Restaurant";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const[listOfRestaurants, setListOfRestaurant]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
         const filteredList = listOfRestaurants.filter(
              (res) => res?.avgRating >4
            );
          setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
