function SecondaryButton({ text, link }) {
  return (
    <div className="m-2 text-text-primary inline-block font-semibold hover:text-blue-700">
      <a href={link}>{text}</a>
    </div>
  );
}

export default SecondaryButton;
