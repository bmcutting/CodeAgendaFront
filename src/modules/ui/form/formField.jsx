function FormField({ title, type, placeholder, value, handleChange, name }) {
  return (
    <div className="flex flex-col gap-1 mt-4 w-1/2 items-center">
      <label className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold self-start text-text-heading ">
        {title}
      </label>

      <input
        className="bg-background-main border-3 border-border-strong hover:border-accent-primary-hover 
        rounded-xl px-2 py-2 w-full text-sm shadow-xl focus:border-input-focus"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormField;
