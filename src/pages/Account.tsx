import { Outlet } from "react-router-dom";
import AccountNavigation from "../ui/AccountNavigation";

interface IProps {}

function Account({}: IProps) {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-12">My Account</h1>
      <div className="container mx-auto grid grid-cols-[16rem_58rem] gap-16">
        <AccountNavigation />
        <Outlet />
      </div>
    </>
  );
}

export default Account;
