import React from "react";
import Banner from "../components/Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Titel from "../components/Titel";

const Home = () => {
  const catagoris = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      {/* Banner Section */}
      <Banner></Banner>
      <Titel titel={"Explore Cutting-Edge Gadgets"}></Titel>
      <div className="flex">
         {/* Categories Sidebar */}
      <Sidebar categories={catagoris}></Sidebar>
      {/* Gadgets Cards */}
      {/* Dynamic nested Component */}
      <Outlet></Outlet>
      </div>
     
    </div>
  );
};

export default Home;
