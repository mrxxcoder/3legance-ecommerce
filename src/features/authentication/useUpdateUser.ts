import { useMutation, useQueryClient } from "react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      console.log("onSuccess called");
      toast.success("User information updated successfully.");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: Error) => console.log(error.message),
  });

  return { updateUser, isUpdating };
}
