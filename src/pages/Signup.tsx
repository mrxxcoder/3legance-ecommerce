import SignupForm from "../features/authentication/SignupForm";
import SignMutualImage from "../ui/SignMutualImage";

function Signup() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <SignMutualImage />
      <SignupForm />
    </div>
  );
}

export default Signup;
