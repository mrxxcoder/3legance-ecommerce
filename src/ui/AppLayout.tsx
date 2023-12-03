import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  const location = useLocation();
  let navbarBackgroundColor = "#FECA5A";

  if (location.pathname === "/shop") {
    navbarBackgroundColor = "white";
  }
  return (
    <div>
      <Navbar backgroundColor={navbarBackgroundColor} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
