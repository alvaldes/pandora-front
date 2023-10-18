import axios from "axios";
import { useEffect, useId, useState } from "react";

export const Inputs = ({ useState: { value, onChange }, item }) => {
  const id = useId();
  switch (item.type) {
    case "role":
      function SelectRole() {
        const [role, setRole] = useState([]);
        useEffect(() => {
          const loadAllRoles = async () => {
            const response = await axios.get("/api/config/all/role");
            if (response.status == 200) {
              const tableData = [];
              response.data.map((d, i) => {
                tableData[i] = {
                  ID: d.id,
                  Nombre: `${d.roleName}`,
                };
              });
              setRole(tableData);
            }
          };
          loadAllRoles();
        }, []);
        return (
          <div key={id} className="grid grid-cols-2">
            <label className="label justify-start flex gap-2">
              <span className="label-text text-base text-md">{item.key}:</span>
            </label>
            <select
              className="select select-primary select-md"
              value={value}
              onChange={onChange}
              name={item.key}
            >
              {role.map((val) => (
                <option key={val.ID} value={val.Nombre} className="text-sm">
                  {val.Nombre}
                </option>
              ))}
            </select>
          </div>
        );
      }
      return <SelectRole />;

    default:
      function Text() {
        return (
          <div key={id} className="grid grid-cols-2">
            <label className="label justify-start flex gap-2">
              <span className="label-text text-base text-md">{item.key}:</span>
            </label>
            <input
              name={item.key}
              className="input input-primary input-md"
              value={viewModal[item.key]}
              onChange={({ target }) => {
                setViewModal((old) => ({
                  ...old,
                  [target.name]: target.value,
                }));
              }}
            />
          </div>
        );
      }
      return <Text />;
  }
};
