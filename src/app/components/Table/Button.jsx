export const Button = ({ children, className, ...other }) => {
  return (
    <button className={`btn ${className} btn-sm btn-rounded`} {...other}>
      {children}
    </button>
  );
};
