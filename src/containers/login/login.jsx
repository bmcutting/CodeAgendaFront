import LoginForm from "../../modules/users/components/loginForm";
import useLogin from "./hooks/useLogin";

function Login() {
  const login = useLogin();

  return (
    <div className="flex flex-col justify-center items-center px-4 h-screen bg-bg-main">
      <LoginForm {...login} />
    </div>
  );
}

export default Login;
