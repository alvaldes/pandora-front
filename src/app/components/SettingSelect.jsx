'use client';

import { useEffect, useState } from 'react';

export const SettingSelects = ({ facultyList, departmentList }) => {
  const [selects, setSelects] = useState({
    FACULTY: '',
    DEPARTMENT: '',
  });
  const selectUpdate = ({ target }) => {
    setSelects({
      ...selects,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };
  /**
   * Local Storage (useEffect)
   * Updating data in storage of selected values in setting state
   */
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('ITEM_SETTING', JSON.stringify({ ...selects }));
    }
  }, [selects]);
  return (
    <div className="h-max border-2 border-primary rounded p-4 my-4">
      <div className="-mt-8">
        <h1 className="text-md border-x-2 border-primary rounded w-max bg-base-100 px-4">
          Ajustes Globales
        </h1>
      </div>
      <div className="form-control w-full max-w-lg grid grid-cols-1 md:grid-cols-2 py-2">
        <label className="label">
          <span className="label-text text-base text-md">Facultad:</span>
        </label>
        {
          typeof facultyList === 'object' && (
            <select
              className="select select-bordered text-sm"
              value={selects?.FACULTY}
              onChange={selectUpdate}
              name="FACULTY"
            >
              {facultyList.map((val, index) => (
                <option key={index} value={val} className="text-sm">
                  {val}
                </option>
              ))}
            </select>
          ) /*|| (
          <p className="inline-block align-middle indent-[5px] text-sm">
            {selects?.FACULTY}
          </p>
        )*/
        }
      </div>

      <div className="form-control w-full max-w-lg grid grid-cols-1 md:grid-cols-2 pt-2">
        <label className="label">
          <span className="label-text text-base text-md">Departamento:</span>
        </label>
        {
          typeof departmentList === 'object' && (
            <select
              className="select select-bordered text-sm"
              value={selects?.DEPARTMENT}
              onChange={selectUpdate}
              name="DEPARTMENT"
            >
              {departmentList.map((val, index) => (
                <option key={index} value={val} className="text-sm">
                  {val}
                </option>
              ))}
            </select>
          ) /* || (
          <p className="inline-block align-middle indent-[5px] text-sm">
            {selects?.DEPARTMENT}
          </p>
        )*/
        }
      </div>
    </div>
  );
};
