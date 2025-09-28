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
        type="text"
        placeholder="Nombre"
        value={form.name}
        handleChange={handleChange}
      />
      <FormField
        title="Apellido"
        type="text"
        placeholder="Apellido"
        value={form.firstName}
        handleChange={handleChange}
      />
      <FormField
        title="Correo electrónico"
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        handleChange={handleChange}
      />
      <FormField
        title="Contraseña"
        type="text"
        placeholder="Contraseña"
        value={form.password}
        handleChange={handleChange}
      />
      <AuthButton text="Registrarse" loading={loading} />
      {error && <ErrorAlert message={error} />}
      <SecondaryButton text="¿Ya tienes cuenta? Inicia Sesión" link="/login" />
    </FormLayout>
  );
}

export default SignUpForm;
