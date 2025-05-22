import React, { useEffect, useState } from "react";
import ShimmerCard from "./components/ShimmerCard";
import './App.css'

function App() {
  const [data, setData] = useState(null);


   useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setData([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ]);
    }, 3000);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Shimmer Example</h1>
      <div className="space-y-6">
        {data
          ? data.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-md shadow">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>Content loaded successfully.</p>
              </div>
            ))
          : [...Array(2)].map((_, i) => <ShimmerCard key={i} />)}
      </div>
    </div>
    </>
  );
};

export default App
