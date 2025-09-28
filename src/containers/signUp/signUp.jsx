import SignUpForm from "../../modules/users/components/signUpForm";
import useSignUp from "./hooks/useSignUp";

function SignUp() {
  const signUp = useSignUp();
  return (
    <div className="flex justify-center items-center h-screen bg-bg-main">
      <SignUpForm {...signUp} />
    </div>
  );
}

export default SignUp;
