import SigninForm from "../features/authentication/SigninForm";
import SignMutualImage from "../ui/SignMutualImage";

function Signin() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <SignMutualImage />
      <SigninForm />
    </div>
  );
}

export default Signin;
