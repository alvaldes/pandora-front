export const Checked = ({ ...other }) => {
  return (
    <input
      type="checkbox"
      className="checkbox checkbox-accent checkbox-sm"
      {...other}
    />
  );
};
