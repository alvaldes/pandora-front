"use client";
import React, { useEffect, useState, Children } from "react";
import { LuEdit2, LuEye, LuSearch, LuTrash2 } from "react-icons/lu";
import { Modal } from "./Modal";

/**
 *
 * @param {*} search function | false
 * @param {*} checked true | false
 * @param {*} view true | false
 * @param {*} edit function | false
 * @param {*} remove function | false
 * @param {*} number true | false
 *
 * @returns Table component
 */

export const Table = ({
  id,
  title,
  checked = false,
  header = [],
  number,
  view = false,
  edit = false,
  remove = false,
  editRm = false,
  search = false,
  toggleItems = [],
  children,
}) => {
  const bodyLng = Children.toArray(children)?.length;
  const headerLng =
    header?.length +
    ((checked && 1) || 0) +
    (number ? 1 : 0) +
    (view ? 1 : 0) +
    (edit ? 1 : 0) +
    (remove ? 1 : 0) +
    (editRm ? 1 : 0);

  const [editRemove, setEditRemove] = useState(Array(bodyLng).fill(false));
  const [all, setAll] = useState(false);
  const [btnRm, setBtnRm] = useState(false);
  const [select, setSelect] = useState(Array(bodyLng).fill(false));
  const [viewModal, setViewModal] = useState([]);
  const selectedAll = () => {
    setSelect((old) => old.map(() => !all));
    setAll(!all);
  };
  useEffect(() => {
    if (bodyLng > 0) {
      const cant = select.filter((val) => val === true);
      cant?.length == bodyLng ? setAll(true) : setAll(false);
      cant?.length > 0 ? setBtnRm(true) : setBtnRm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);
  return (
    <div className="flex flex-col">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          btnRm ? "" : "grid-cols-1"
        }`}
      >
        {title && (
          <h1 className="text-2xl text-center md:text-left md:text-xl lg:text-2xl align-text-bottom my-auto">
            {title}
          </h1>
        )}
        {search && (
          <div className="flex justify-end mb-2 mt-2 mx-2">
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LuSearch className="w-5 h-5 text-base-content" />
              </div>
              <input
                type="text"
                name="search"
                className="pl-10 rounded-lg w-full input input-bordered input-md md:w-64 lg:w-96"
                placeholder="Buscar..."
                onChange={(e) => search(id, e)}
              ></input>
            </div>
          </div>
        )}
        {btnRm && (
          <div className="flex grow">
            <button
              className="btn btn-sm self-end mb-2 mt-4"
              onClick={() => {
                const temp = [
                  ...Children.toArray(children)?.map((val) => val.key),
                ];
                console.log(temp.filter((__, index) => select[index]));
              }}
            >
              <LuTrash2 /> Eliminar {all ? "todos" : "seleccionados"}
            </button>
          </div>
        )}
      </div>
      <div className="overflow-x-auto rounded-t-[10px]">
        <table className="table table-auto table-md">
          <thead className="border-b-2 border-primary bg-base-300">
            <tr className="text-lg font-thin py-0">
              {checked && (
                <th className="w-max h-full">
                  <input
                    type="checkbox"
                    checked={all}
                    className="checkbox checkbox-accent checkbox-sm"
                    onChange={selectedAll}
                  />
                </th>
              )}
              {number && (
                <th className="text-lg font-medium text-center w-max py-[2px]">
                  No.
                </th>
              )}
              {header?.map((value, index) => (
                <th
                  key={index}
                  className={`text-lg whitespace-normal font-medium py-[2px] ${
                    toggleItems &&
                    toggleItems.some(
                      (value) =>
                        value[0].toLowerCase() === header[index].toLowerCase()
                    ) &&
                    "text-center"
                  }`}
                >
                  {value}
                </th>
              ))}
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
            {(bodyLng > 0 &&
              Children.toArray(children)?.map((val, index) => {
                return (
                  <tr key={index} className={`${index % 2 && "bg-base-300"}`}>
                    {
                      //Section select row
                      checked && (
                        <th className="h-full w-max">
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
                      )
                    }
                    {
                      //Section number position - list items
                      number && <th className="text-center">{index + 1}</th>
                    }
                    {
                      //Content table send from children props
                      val.props.children.map((td, index1) =>
                        toggleItems &&
                        toggleItems.some(
                          (value) =>
                            value[0].toLowerCase() ===
                            header[index1].toLowerCase()
                        ) ? (
                          // (!important): toggleItems is obtaining by default the active/inactive variables (if necessary modify to obtain true/false)
                          <th key={index1}>
                            <div className="label cursor-pointer justify-center">
                              <input
                                name={header[index1]}
                                type="checkbox"
                                className="toggle toggle-sm"
                                data-toggle="ACTIVE,INACTIVE"
                                onChange={({ target }) =>
                                  toggleItems.filter(
                                    (value) => value[0] === target.name
                                  )[0][1](index, target.name, target.checked)
                                }
                                checked={
                                  typeof td.props.children === "string"
                                    ? td.props.children.toUpperCase() ===
                                      "ACTIVE"
                                    : td.props.children
                                }
                              />
                            </div>
                          </th>
                        ) : (
                          td
                        )
                      )
                    }
                    {
                      //Button action open info row in modal
                      view && (
                        <th className="text-lg font-medium text-center w-max py-[2px]">
                          <button
                            className="btn btn-info btn-sm btn-rounded"
                            onClick={() => {
                              setViewModal(
                                header.map((td, index) => ({
                                  key: `${td}`,
                                  value: `${val.props.children[index].props.children}`,
                                }))
                              );
                              window[`MODAL_VIEW_${id}`].showModal();
                            }}
                          >
                            <LuEye className="text-info-content" />
                          </button>
                        </th>
                      )
                    }
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
                              <button
                                className="btn btn-warning btn-sm btn-rounded"
                                onClick={() => console.log(val.key)}
                              >
                                <LuEdit2 className="text-warning-content" />
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn btn-sm btn-error"
                                onClick={() => console.log(val.key)}
                              >
                                <LuTrash2 className="text-error-content" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </th>
                    )}
                    {
                      // Button action edit content row
                      ((edit && !remove) || (edit && !editRm)) && (
                        <th className="text-lg font-medium text-center w-max py-[2px]">
                          <button
                            className="btn btn-warning btn-sm btn-rounded"
                            onClick={() => {
                              setViewModal([
                                val.key,
                                ...header.map((td, index) => ({
                                  key: `${td}`,
                                  value: `${val.props.children[index].props.children}`,
                                })),
                              ]);
                              window[`MODAL_EDIT_${id}`].showModal();
                            }}
                          >
                            <LuEdit2 className="text-warning-content" />
                          </button>
                        </th>
                      )
                    }
                    {
                      // Button acction remove row
                      ((!edit && remove) || (remove && !editRm)) && (
                        <th className="text-lg font-medium text-center w-max py-[2px]">
                          <button
                            className="btn btn-sm btn-error"
                            onClick={() => console.log(val.key)}
                          >
                            <LuTrash2 className="text-error-content" />
                          </button>
                        </th>
                      )
                    }
                  </tr>
                );
              })) || (
              // If don't content in body table, there view this massage
              <tr className="text-center">
                <th colSpan={`${headerLng}`} className="py-4">
                  No existen coincidencias
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Modal btnCLoseX={() => setViewModal({})} id={`VIEW_${id}`}>
        <div className="text-center border-b-2 border-primary p-2 mb-6">
          <h3 className="font-bold text-lg uppercase">
            Información de Usuario:
          </h3>
        </div>
        <div className="flex flex-col gap-4 border-2 border-primary rounded p-4 my-4">
          {Object.keys(viewModal).length > 0 &&
            viewModal?.map((info, index) => (
              <div key={index}>
                <label className="label justify-start flex gap-2">
                  <span className="label-text text-base text-md">
                    {info.key}:
                  </span>
                  <span className="label-text text-base-content text-md font-semibold">
                    {info.value}
                  </span>
                </label>
              </div>
            ))}
        </div>
      </Modal>
      <Modal
        btnCLoseX={() => setViewModal({})}
        id={`EDIT_${id}`}
        btnAccept={() => console.log(viewModal[0])}
      >
        <div className="text-center border-b-2 border-primary p-2 mb-6">
          <h3 className="font-bold text-lg uppercase">
            Información de Usuario:
          </h3>
        </div>
        <div className="flex flex-col gap-4 border-2 border-primary rounded p-4 my-4">
          {Object.keys(viewModal).length > 0 &&
            viewModal?.slice(1)?.map((info, index) => (
              <div key={index} className="grid grid-cols-2">
                <label className="label justify-start flex gap-2">
                  <span className="label-text text-base text-md">
                    {info.key}:
                  </span>
                </label>
                <input
                  className="input input-primary input-md"
                  value={info.value}
                  onChange={() => {}}
                />
              </div>
            ))}
        </div>
      </Modal>
    </div>
  );
};
