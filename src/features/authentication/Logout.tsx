import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();
  function handleLogout() {
    logout();
  }

  return (
    <Button
      variant="primary"
      width="w-full"
      disabled={isLoading}
      onClick={handleLogout}
    >
      {isLoading ? <Spinner /> : "Sign Out"}
    </Button>
  );
}

export default Logout;
