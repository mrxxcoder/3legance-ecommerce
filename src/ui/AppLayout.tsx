import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar backgroundColor="#FECA5A" />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
