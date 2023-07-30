import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
