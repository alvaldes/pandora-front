"use client";
import React, { useEffect, useState, Children } from "react";
import { LuEdit2, LuEye, LuSearch, LuTrash2 } from "react-icons/lu";
import { Modal } from "../Modal";
import { Search } from "./Search";
import { Checked } from "./Checked";
import { Toggle } from "./Toggle";
import { Button } from "./Button";
import { ButtonComboBox } from "./BottonComboBox";
import { Header } from "./Header";
import { Body } from "./Body";

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
  toggleItems = [], // { 0: key, 1: function, 2: true/false (disabled) }
  notEditItems = [],
  body = [],
  viewModalEdit = <></>,
}) => {
  const [editRemove, setEditRemove] = useState(Array(body.length).fill(false));
  const [select, setSelect] = useState(Array(body.length).fill(false));
  const [viewModal, setViewModal] = useState([]);
  const [temp, setTemp] = useState([]);
  return (
    <div className="flex flex-col">
      <div className={`grid grid-cols-1 md:grid-cols-2`}>
        {title && (
          <h1 className="text-2xl text-center md:text-left md:text-xl lg:text-2xl align-text-bottom my-auto">
            {title}
          </h1>
        )}
        {search && <Search search={search} id={id} />}
      </div>
      <div className="overflow-x-auto">
        <table className="table table-auto table-md">
          <Header
            header={header}
            body={{ body: body, length: body.length }}
            iChecked={{
              isChecked: checked,
              select,
              setSelect,
            }}
            isNumber={number}
            isView={view}
            isEdit={edit}
            isRemove={remove}
            isComboButton={editRm}
          />
          <Body
            body={body}
            header={header}
            iChecked={{ isChecked: checked, select, setSelect }}
            iComboButton={{ isComboButton: editRm, editRemove, setEditRemove }}
            iModal={{ setViewModal, setTemp }}
            isEdit={edit}
            isNumber={number}
            isRemove={remove}
            isView={view}
            toggleItems={toggleItems}
          />
        </table>
      </div>
      <Modal btnCLoseX={() => setViewModal([])} id={`VIEW_${id}`}>
        <div className="text-center border-b-2 border-primary p-2 mb-6">
          <h3 className="font-bold text-lg uppercase">
            Información de Usuario:
          </h3>
        </div>
        <div className="flex flex-col gap-4 border-2 border-primary rounded p-4 my-4 overflow-y-auto">
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
        btnCLoseX={() => {
          setViewModal([]);
          setTemp([]);
        }}
        id={`EDIT_${id}`}
        btnAccept={() => {
          temp.some((item, _index) =>
            _index == 0
              ? item !== viewModal[_index]
              : item.value !== viewModal[_index].value
          ) && console.log(viewModal[0]);
        }}
      >
        <div className="text-center border-b-2 border-primary p-2 mb-6">
          <h3 className="font-bold text-lg uppercase">
            Editar Información de Usuario: <br /> (
            {
              viewModal
                .slice(1)
                .filter((item) => item.key.toLowerCase() === "nombre")[0]?.value
            }
            )
          </h3>
        </div>
        <div className="flex flex-col gap-4 border-2 border-primary rounded p-4 my-4 overflow-y-auto">
          {Object.keys(viewModal).length > 0 &&
            viewModal?.slice(1)?.map((info, index) => {
              return (
                toggleItems.some((item) => item[0] === info.key) ||
                notEditItems.some((item) => item === info.key) || (
                  <div key={index} className="grid grid-cols-2">
                    <label className="label justify-start flex gap-2">
                      <span className="label-text text-base text-md">
                        {info.key}:
                      </span>
                    </label>
                    <input
                      name={info.key}
                      className="input input-primary input-md"
                      value={info.value}
                      onChange={({ target }) => {
                        setViewModal((old) => [
                          old[0],
                          ...old.slice(1).map((item, _index) => {
                            if (_index == index) {
                              return { key: item.key, value: target.value };
                            }
                            return item;
                          }),
                        ]);
                      }}
                    />
                  </div>
                )
              );
            })}
        </div>
      </Modal>
    </div>
  );
};
