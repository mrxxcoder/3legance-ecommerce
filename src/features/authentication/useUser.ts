import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { User } from "@supabase/supabase-js";

export function useUser() {
  const { data: user, isLoading } = useQuery<User | null, Error>({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
