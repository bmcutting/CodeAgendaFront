import AuthButton from "../../ui/button/authButton";
import SecondaryButton from "../../ui/button/secondaryButton";
import ErrorAlert from "../../ui/errors/errorAlert";
import FormField from "../../ui/form/FormField";
import FormLayout from "../../ui/form/FormLayout";

function SignUpForm(props) {
  const { form, error, loading, handleChange, handleSubmit } = props;

  return (
    <FormLayout onSubmit={handleSubmit}>
      <FormField
        title="Nombre"
        name="name"
        type="text"
        placeholder="Nombre"
        value={form.name}
        handleChange={handleChange}
      />
      <FormField
        title="Apellido"
        name="firstName"
        type="text"
        placeholder="Apellido"
        value={form.firstName}
        handleChange={handleChange}
      />
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
      <AuthButton text="Registrarse" loading={loading} />
      {error && <ErrorAlert message={error} />}
      <SecondaryButton text="¿Ya tienes cuenta? Inicia Sesión" link="/login" />
    </FormLayout>
  );
}

export default SignUpForm;
