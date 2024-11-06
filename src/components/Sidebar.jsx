import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ categories }) => {
  return (
    <div className="lg:drawer-open mt-4 w-64">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content h-[400px] w-52 p-4 rounded-3xl">
          {categories.map((catagory) => (
            <NavLink
              key={catagory.id}
              to={`/gadgetsCards/${catagory.catagory}`}
              className={({ isActive }) =>
                `btn  rounded-3xl my-2${
                  isActive
                    ? "hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
                    : ""
                }`
              }
            >
              {catagory.catagory}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
