import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard ";
import GadgetsCards from "../components/GadgetsCards";
import Details from "../pages/Details";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../catagoris.json"),

        children: [
          {
            path: "/",
            element: <GadgetsCards />,
            loader: () => fetch("../data.json"),
          },
          {
            path: "/gadgetsCards/:gadgetsCards",
            element: <GadgetsCards />,
            loader: () => fetch("../data.json"),
          },
        ],
      },
      {
        path: "/details/:product_id",
        element: <Details />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default routers;
