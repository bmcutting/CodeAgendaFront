
function SideBarButton({ label }) {
  
  return (
    <button
      className="bg-button-secondary-bg hover:bg-button-secondary-hover border-2 border-border-light 
      hover:border-border-strong text-btn-text hover:bg-accent-primary-hover transition-colors duration-200 
       rounded-md px-3 py-2 text-sm text-center w-full font-serif"
    >
      {label}
    </button>
  );
}

export default SideBarButton;
