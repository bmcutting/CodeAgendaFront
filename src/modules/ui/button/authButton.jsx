function AuthButton({ text, loading }) {
  return (
    <button className="rounded-xl bg-button-bg hover:bg-button-hover border-2 border-border-strong p-2 w-1/2 mt-4">
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4 mr-2 text-white inline-flex"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          Cargando...
        </>
      ) : (
        <p className="text-sm text-button-text text-center font-mono font-thin">
          {text}
        </p>
      )}
    </button>
  );
}

export default AuthButton;
