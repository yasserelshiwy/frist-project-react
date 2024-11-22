import Navbar from "../../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
