"use client";
import { useEffect, useState } from "react";
import { LuEdit2, LuEye, LuSearch, LuTrash2 } from "react-icons/lu";

export const Table = ({
  title,
  header,
  body,
  checked,
  number,
  view,
  edit,
  remove,
  editRm,
  search,
}) => {
  const [editRemove, setEditRemove] = useState(Array(body?.length).fill(false));
  const [all, setAll] = useState(false);
  const [btnRm, setBtnRm] = useState(false);
  const [select, setSelect] = useState(Array(body?.length).fill(false));
  const selectedAll = () => {
    setSelect(select.map(() => !all));
    setAll(!all);
  };

  useEffect(() => {
    const cant = select.filter((val) => val === true);
    cant?.length == body?.length ? setAll(true) : setAll(false);
    cant?.length > 0 ? setBtnRm(true) : setBtnRm(false);
  }, [body?.length, select]);
  return (
    <div className="flex flex-col">
      {title && <h1 className="text-xl">{title}</h1>}
      <div className={`flex ${btnRm ? "" : "flex-col"}`}>
        {btnRm && (
          <div className="flex grow">
            <button className="btn btn-sm self-end mb-2 mt-4">
              <LuTrash2 /> Eliminar {all ? "todos" : "seleccionados"}
            </button>
          </div>
        )}
        {search && (
          <div className="flex justify-end mb-2 mt-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LuSearch className="w-5 h-5 text-base-content" />
              </div>
              <input
                type="text"
                className="pl-10 rounded-lg w-80 input input-bordered input-md"
                placeholder="Buscar..."
              ></input>
            </div>
          </div>
        )}
      </div>
      <div className="overflow-x-auto rounded-t-[10px]">
        <table className="table table-auto table-md">
          <thead className="border-b-2 border-primary bg-base-300">
            <tr className="text-lg font-thin py-0">
              {checked && (
                <th className="text-lg font-medium text-center w-max py-[2px]">
                  <label>
                    <p className="text-center">Todo</p>
                    <input
                      type="checkbox"
                      checked={all}
                      className="checkbox checkbox-accent checkbox-sm"
                      onChange={selectedAll}
                    />
                  </label>
                </th>
              )}
              {number && (
                <th className="text-lg font-medium text-center w-max py-[2px]">
                  No.
                </th>
              )}
              {header?.map((val, index) => {
                return (
                  <th
                    key={index}
                    className="text-lg whitespace-normal font-medium py-[2px]"
                  >
                    {val}
                  </th>
                );
              })}
              {view && (
                <th className="text-lg font-medium text-center w-max py-[2px]">
                  <span className="text-center">Ver</span>
                </th>
              )}

              {edit && remove && editRm && (
                <th className="text-lg font-medium text-center w-max py-[2px]">
                  <span className="text-center">Editar/Eliminar</span>
                </th>
              )}
              {((edit && !remove) || (edit && !editRm)) && (
                <th className="text-lg font-medium text-center w-max py-[2px]">
                  <span className="text-center">Editar</span>
                </th>
              )}
              {((!edit && remove) || (remove && !editRm)) && (
                <th className="text-lg font-medium text-center w-max py-[2px]">
                  <span className="text-center">Eliminar</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {body?.map((val, index) => {
              return (
                <tr key={val.ID} className={`${index % 2 && "bg-base-300"}`}>
                  {checked && (
                    <th className="flex justify-center">
                      <input
                        type="checkbox"
                        checked={select[index]}
                        className="checkbox checkbox-accent checkbox-sm"
                        onChange={() =>
                          setSelect(
                            select.map((val, index1) =>
                              index == index1 ? !val : val
                            )
                          )
                        }
                      />
                    </th>
                  )}
                  {number && <th className="text-center">{index + 1}</th>}
                  {Object.keys(val).map(
                    (key) => key !== "ID" && <th key={key}>{val[key]}</th>
                  )}
                  {view && (
                    <th className="text-lg font-medium text-center w-max py-[2px]">
                      <button className="btn btn-info btn-sm btn-rounded">
                        <LuEye className="text-info-content" />
                      </button>
                    </th>
                  )}
                  {edit && remove && editRm && (
                    <th className="relative">
                      <div className="flex justify-center">
                        <button
                          className="btn btn-primary btn-rounded btn-sm"
                          onClick={() =>
                            setEditRemove(
                              editRemove.map((val, index1) =>
                                index == index1 ? !val : false
                              )
                            )
                          }
                        >
                          Action
                        </button>
                        <ul
                          className={`flex gap-2 mt-[35px] p-2 shadow bg-base-100 rounded-box fixed z-10 ${
                            !editRemove[index] ? "invisible" : "visible"
                          }`}
                        >
                          <li>
                            <button className="btn btn-warning btn-sm btn-rounded">
                              <LuEdit2 className="text-warning-content" />
                            </button>
                          </li>
                          <li>
                            <button className="btn btn-sm btn-error">
                              <LuTrash2 className="text-error-content" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </th>
                  )}
                  {((edit && !remove) || (edit && !editRm)) && (
                    <th className="text-lg font-medium text-center w-max py-[2px]">
                      <button className="btn btn-warning btn-sm btn-rounded">
                        <LuEdit2 className="text-warning-content" />
                      </button>
                    </th>
                  )}
                  {((!edit && remove) || (remove && !editRm)) && (
                    <th className="text-lg font-medium text-center w-max py-[2px]">
                      <button className="btn btn-sm btn-error">
                        <LuTrash2 className="text-error-content" />
                      </button>
                    </th>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        {!body && (
          <p className="text-center text-xl bg-base-100 py-4">
            No hay elementos para mostrar...
          </p>
        )}
      </div>
    </div>
  );
};
