import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  const location = useLocation();
  let navbarBackgroundColor = "transparent";

  if (location.pathname === "/home") {
    navbarBackgroundColor = "#FECA5A";
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
