import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { User } from "@supabase/supabase-js";

export function useUser() {
  const { data: user, isLoading } = useQuery<User | null, Error>({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const isAuthenticated = user?.role === "authenticated";

  const email = user?.email;
  const currentFullName = user?.user_metadata?.name;

  return { user, isLoading, isAuthenticated, email, currentFullName };
}
