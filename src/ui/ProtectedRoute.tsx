import { ReactNode, useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: IProps) {
  const navigate = useNavigate();
  // 1. Load authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 3. if no authenticated user, redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/signin");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2. show spinner
  if (isLoading) {
    return <div>Loading..</div>;
  }

  // 4. render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
