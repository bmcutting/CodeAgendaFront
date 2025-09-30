function SecondaryButton({ text, link }) {
  return (
    <div className="m-2 text-text-link inline-block font-semibold hover:text-shadow-button-hover">
      <a href={link}>{text}</a>
    </div>
  );
}

export default SecondaryButton;
