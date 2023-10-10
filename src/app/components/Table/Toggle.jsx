export const Toggle = ({ ...other }) => {
  return (
    <div className="label cursor-pointer justify-center">
      <input
        type="checkbox"
        className="toggle toggle-sm toggle-primary"
        data-toggle="ACTIVE,INACTIVE"
        {...other}
      />
    </div>
  );
};
