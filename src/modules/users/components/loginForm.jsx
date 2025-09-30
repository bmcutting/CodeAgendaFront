import AuthButton from "../../ui/button/authButton";
import SecondaryButton from "../../ui/button/secondaryButton";
import FormField from "../../ui/form/FormField";
import FormLayout from "../../ui/form/FormLayout";
import ErrorAlert from "../../ui/errors/errorAlert";

function LoginForm(props) {
  const { form, error, loading, handleChange, handleSubmit } = props;

  return (
    <FormLayout onSubmit={handleSubmit}>
      <FormField
        title="Correo electrónico"
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        handleChange={handleChange}
      />
      <FormField
        title="Contraseña"
        name="userPassword"
        type="password"
        placeholder="Contraseña"
        value={form.userPassword}
        handleChange={handleChange}
      />
      <AuthButton text="Iniciar sesión" loading={loading} />
      {error && <ErrorAlert message={error} />}
      <SecondaryButton text="¿No tienes cuenta? Regístrate" link="/signup" />
    </FormLayout>
  );
}

export default LoginForm;
