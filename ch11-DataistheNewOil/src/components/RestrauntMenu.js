import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants.js";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  console.log(restaurant);
  // Use proper names

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className=" w-5/6 my-5 mx-auto">
      <div className="flex">
        <img
          className="w-56"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        <div className="px-5">
          <h2>{restaurant?.name}</h2>
          <h3>{restaurant?.cuisines.join(", ")} </h3>
          <h3>
            {restaurant?.area} , {restaurant?.city}
          </h3>
          <div className="flex">
            <div className="pr-5">
              <h3>{restaurant?.avgRating} stars</h3>
              <h3> {restaurant?.totalRatings}</h3>
            </div>
            <h3 className="pr-5">{restaurant?.costForTwoMsg}</h3>
            <h3 className="pr-5">{restaurant?.sla?.deliveryTime} mins</h3>
          </div>
        </div>
        
        <h3>{restaurant?.availability?.opened ? "opened" : "closed"}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
