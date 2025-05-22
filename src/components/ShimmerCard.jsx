// components/ShimmerCard.jsx
import React from "react";
import Shimmer from "./Shimmer";

const ShimmerCard = () => {
  return (
    <div className="p-4 w-full mx-auto bg-white shadow-md rounded-md space-y-4">
      <Shimmer height="h-48" rounded="rounded-lg" /> 
      <Shimmer height="h-6" width="w-3/4" />
      <Shimmer height="h-4" width="w-2/4" />
      <Shimmer height="h-4" width="w-full" />
      <Shimmer height="h-4" width="w-5/6" />
    </div>
  );
};

export default ShimmerCard;
