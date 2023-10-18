"use client";
import { Table } from "@/app/components/Table/Table";
import { FormularyEdit } from "@/app/formulary/user_role";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserRole() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const header = ["Usuario", "Rol", "Correo", "Nombre", "Cargo", "Estado"];
  const [filter, setFilter] = useState({
    user: {
      search: "",
    },
  });
  const onChangeFilter = (id, { target }) => {
    const name = target?.attributes?.name ?? target?.name;
    const value = target?.value ?? target?.attributes?.value;
    setFilter((old) => ({
      ...old,
      [id]: {
        [name?.value || name]: value?.value || value,
      },
    }));
  };

  const actionActiveInactive = (index, stateItem, stateValue) => {
    setData((old) =>
      old.map((item, _index) => {
        if (_index == index) {
          item[stateItem] = stateValue ? "Active" : "Inactive";
          return item;
        } else return item;
      })
    );
  };

  const removeOnClic = async (ID) => {
    try {
      console.log(`(dashboard)/config/user_role/page.jsx ${ID}`);
      const response = await axios.get(`/api/config/user_delete/${ID}`);
      if (response.status == 200) {
        console.log(`api/config/user_role/route.js ${ID}`);
        console.log(response.data);
      }
    } catch (error) {
      const { response } = error;
      console.log(response);
    }
  };

  useEffect(() => {
    const loadAllUsers = async () => {
      const response = await axios.get("/api/config/user_role");
      if (response.status == 200) {
        const tableData = [];
        response.data.map((d, i) => {
          tableData[i] = {
            ID: d.id,
            Usuario: d.username,
            Rol: d.role.roleName,
            Correo: d.email,
            Nombre: `${d.name} ${d.lastname}`,
            Cargo: d.position,
            Estado: d.status,
          };
        });
        setData(tableData);
        setIsLoading(false);
      }
    };
    loadAllUsers();
  }, []);

  return isLoading ? (
    <div className="flex justify-center align-center my-60">
      <span className="loading loading-dots text-neutral loading-lg h-[calc(85vh)"></span>
    </div>
  ) : (
    <main className="container mx-auto flex flex-col">
      <div className="w-full py-4">
        <Table
          title={`Gestion de Usuarios y Roles`}
          header={header}
          body={data?.filter((item) =>
            Object.values(item).some((value) =>
              `${value}`
                .toLowerCase()
                .includes(filter.user.search.toLowerCase())
            )
          )}
          checked
          number
          toggleItems={[{ 0: "Estado", 1: actionActiveInactive, 2: true }]}
          edit
          remove={removeOnClic}
          id="user"
          search={onChangeFilter}
          formulary={<FormularyEdit />}
        />
      </div>
    </main>
  );
}
