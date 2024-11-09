export const Header = ({ title="", desc="", className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {desc.length !== 0 && <p>{desc}</p>}
    </div>
  );
};
