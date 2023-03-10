import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 shadow-xl shadow-gray-500 m-4 p-1 h-64">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold p-1">{name}</h2>
      <h3 className="px-1 text-sm font-light">{cuisines.join(", ")}</h3>
      <h4 className="p-1 text-sm font-medium">{lastMileTravelString} away</h4>
    </div>
  );
};

export default RestrauntCard;