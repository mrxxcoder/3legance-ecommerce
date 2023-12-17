import { Outlet } from "react-router-dom";
import AccountNavigation from "../ui/AccountNavigation";

function Account() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-12">My Account</h1>
      <div className="container mx-auto grid grid-cols-1 p-4 md:p-8 lg:p-12 md:grid-cols-[16rem_24rem] lg:grid-cols-[16rem_38rem] xl:grid-cols-[16rem_48rem] gap-16">
        <AccountNavigation />
        <Outlet />
      </div>
    </>
  );
}

export default Account;
