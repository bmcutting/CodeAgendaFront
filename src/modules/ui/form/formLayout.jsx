function FormLayout({onSubmit, children}) {
  return (
    <div
      className="flex items-center justify-center bg-bg-surface rounded-xl 
    shadow-2xl m-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
    >
      <form
        className="flex flex-col items-center w-full m-2"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
}

export default FormLayout;
