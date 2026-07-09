import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
