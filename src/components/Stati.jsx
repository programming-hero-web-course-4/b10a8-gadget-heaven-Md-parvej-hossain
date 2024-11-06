import React from "react";
import { RiAspectRatioFill } from "react-icons/ri";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
const Stati = () => {
  const studentMarks = [
    { name: "Gaming Laptop", rating: 4.8 },
    { name: "iPhone 14 Pro", rating: 4.5 },
    { name: "MacBook Air M2", rating: 4.2 },
    { name: "Apple Watch Series 8", rating: 4.7 },
    { name: "Samsung Galaxy S23", rating: 4.9 },
    { name: "Wireless Earbuds", rating: 4.1 },
    { name: "Laptop Stand", rating: 4.0 },
    { name: "Accessories", rating: 4.7 },
    { name: "MacBook Pro M1", rating: 4.3 },
    { name: "Gaming Laptop", rating: 4.8 },
  ];
  return (
    <div>
      <BarChart width={800} height={500} data={studentMarks}>
        <Bar dataKey="rating" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <RiAspectRatioFill />
      </BarChart>
    </div>
  );
};

export default Stati;
