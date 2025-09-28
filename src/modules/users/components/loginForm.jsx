import AuthButton from "../../ui/button/authButton";
import SecondaryButton from "../../ui/button/secondaryButton";
import FormField from "../../ui/form/FormField";
import FormLayout from "../../ui/form/FormLayout";

function LoginForm() {
  return (
    <FormLayout onSubmit={(e) => console.log(e)}>
      <FormField title={"Email"} type={"email"} placeholder={"Email"} />
      <FormField
        title={"Contraseña"}
        type={"password"}
        placeholder={"Contraseña"}
      />
      <AuthButton text="Iniciar sesión" />
      <SecondaryButton text="¿No tienes cuenta? Regístrate" link="/signup" />
    </FormLayout>
  );
}

export default LoginForm;
