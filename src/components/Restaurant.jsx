import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    //in place of props we can destructure the object like: {resName, cuisine}.
    //const{resName, cuisine}=props;             another way to destructure the object.
    //props passed as an object.
    // console.log(resData);
    const{resData}=props;
    const{cloudinaryImageId, name, cuisines, avgRating, deliveryTime}=resData;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
      <h5>  {name}</h5>
      <h5>  {cuisines}</h5>
      <h5>  {avgRating}</h5>
      <h5>  {deliveryTime}</h5> 
      </div>
    );
  };
  export default RestaurantCard;
  