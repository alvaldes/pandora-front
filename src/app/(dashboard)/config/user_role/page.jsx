'use client';
import { Table } from '@/app/components/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserRole() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const header = ['Usuario', 'Role', 'Correo', 'Nombre', 'Cargo', 'Estado'];

  useEffect(() => {
    const loadAllUsers = async () => {
      const response = await axios.get('/api/config/user_role');
      if (response.status == 200) {
        const tableData = [];
        response.data.map((d, i) => {
          tableData[i] = {
            ID: d.id,
            Usuario: d.username,
            Role: d.role.roleName,
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
          body={data}
          checked
          number
          toggleItem="Estado"
          edit
          remove
          search
        />
      </div>
    </main>
  );
}
