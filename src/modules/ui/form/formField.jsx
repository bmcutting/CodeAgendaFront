function FormField({
  title,
  type,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <div className="flex flex-col gap-1 mt-4 w-fit">
      <label className="text-xl font-bold text-left text-text-heading">
        {title}
      </label>
      <input
        className="bg-input-bg border-3 border-input-border hover:border-accent-primary-hover 
        rounded-xl px-2 py-2 w-fit lg:w-[300px] text-sm shadow-xl focus:border-input-focus"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormField;
