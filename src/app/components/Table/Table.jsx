"use client";
import React, { useState } from "react";
import { Search } from "./Search";
import { Header } from "./Header";
import { Body } from "./Body";
import { ModalsActions } from "./Other/ModalsActions";

/**
 *
 * @param {*} search function | false
 * @param {*} checked true | false
 * @param {*} view true | false
 * @param {*} edit function | false
 * @param {*} remove function | false
 * @param {*} number number(1+) | false
 *
 * @returns Table component
 */

export const Table = ({
  id,
  title,
  checked = false,
  header = [],
  number = false,
  view = false,
  edit = false,
  remove = false,
  editRm = false,
  search = false,
  toggleItems = [], // { 0: key, 1: function, 2: true/false (disabled) }
  body = [],
  formulary = <></>,
}) => {
  const [editRemove, setEditRemove] = useState(Array(body.length).fill(false));
  const [select, setSelect] = useState(Array(body.length).fill(false));
  const [viewModal, setViewModal] = useState({});
  const [temp, setTemp] = useState({});
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
            body={{ body, length: body.length }}
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
            body={{ body, id }}
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
      <ModalsActions
        id={id}
        actions={{ edit, remove }}
        useState={{
          modal: { viewModal, setViewModal },
          temp: { temp, setTemp },
        }}
        formularyEdit={React.cloneElement(formulary, {
          useState: { viewModal, setViewModal },
        })}
      />
    </div>
  );
};
