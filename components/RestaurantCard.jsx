import { IMG_ID } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    areaName,
    cuisines,
    costForTwo,
    avgRating,
    sla,
    cloudinaryImageId,
  } = resData?.card?.card?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={IMG_ID + cloudinaryImageId} />
      <div className="res-card-body">
        <h3>{name}</h3>
        <h4>{areaName}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>ETA: {sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;