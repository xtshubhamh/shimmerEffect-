// components/Shimmer.jsx
import React from "react";

const Shimmer = ({ height = "h-4", width = "w-full", rounded = "rounded-md" }) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${height} ${width} ${rounded}`}
    >
        
    </div>
  );
};

export default Shimmer;
