import CardLayout from "../../ui/cards/cardLayout";
import FormField from "../../ui/form/FormField";

export default function UserCard() {
  return (
    <CardLayout>
      <div className="grid grid-rows-2 gap-2 p-4 bg-background-surface w-1/2">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
          <FormField title="Nombre" />
          <FormField title="Apellido" />
        </div>
        <div className="grid grid-cols-1">
          <FormField title="Correo electrónico" />
        </div>
      </div>
    </CardLayout>
  );
}
