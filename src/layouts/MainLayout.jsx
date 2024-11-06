import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
  return (
    <div >
      <Toaster/>
      {/* Navbar Section */}
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-284px)]">
        {/* Dynamic Section */}
        <Outlet></Outlet>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
