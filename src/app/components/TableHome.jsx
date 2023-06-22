export const TableHome = ({ th, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-md">
        <thead className="">
          <tr className="text-lg font-thin">
            <th className="text-lg font-medium">ID Persona</th>
            <th>CI</th>
            <th className="text-lg font-medium">Nombre</th>
            <th>Departamento RH</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            return (
              <tr key={val.IDPerson}>
                <th>{val.IDPerson}</th>
                <td>{val.CI}</td>
                <td>{val.Name}</td>
                <td>{val.DepartamentHR}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
