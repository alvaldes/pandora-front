"use client";
import { useState, useEffect } from "react";
import { LuTrash2 } from "react-icons/lu";

export const Header = ({
  body: { body, length },
  header,
  iChecked: { isChecked, select, setSelect },
  isNumber,
  isView,
  isEdit,
  isRemove,
  isComboButton,
}) => {
  const hlength =
    header?.length +
    ((isChecked && 1) || 0) +
    (isNumber ? 1 : 0) +
    (isView ? 1 : 0) +
    (isEdit ? 1 : 0) +
    (isRemove ? 1 : 0) +
    (isComboButton && isEdit && isRemove ? -1 : 0);
  const [all, setAll] = useState(false);
  const [btnRm, setBtnRm] = useState(false);
  const selectedAll = () => {
    setSelect((old) =>
      old.map((__, _index) =>
        (
          typeof body[_index]["Estado"] === "string"
            ? body[_index]["Estado"]?.toUpperCase() === "ACTIVE"
            : body[_index]["Estado"]
        )
          ? !all
          : false
      )
    );
    setAll(!all);
  };

  useEffect(() => {
    if (length > 0) {
      const cant = select.filter((val) => val);
      const disable = body.reduce(
        (accumulator, currentValue) =>
          (accumulator += (
            typeof currentValue["Estado"] === "string"
              ? !(currentValue["Estado"].toUpperCase() === "ACTIVE")
              : !currentValue["Estado"]
          )
            ? 1
            : 0),
        0
      );
      cant?.length == length - disable ? setAll(true) : setAll(false);
      cant?.length > 0 ? setBtnRm(true) : setBtnRm(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);
  return (
    <thead className="border-b-2 border-primary bg-base-300">
      <tr className="py-0 my-0 bg-base-200">
        <th colSpan={`${hlength}`} className="py-0 my-0">
          <div className="flex grow h-8">
            {btnRm && (
              <button
                className="btn btn-sm self-end"
                onClick={() => {
                  console.log(body.filter((__, index) => select[index]));
                }}
              >
                <LuTrash2 /> Eliminar {all ? "todos" : "seleccionados"}
              </button>
            )}
          </div>
        </th>
      </tr>
      <tr className="text-lg font-thin py-0 rounded-t-[10px]">
        {isChecked && (
          <th className="w-max h-full">
            <input
              type="checkbox"
              className="checkbox checkbox-accent checkbox-sm"
              checked={all}
              onChange={selectedAll}
              disabled={length == 0}
            />
          </th>
        )}
        {isNumber && (
          <th className="text-lg font-medium text-center w-max py-[2px]">
            No.
          </th>
        )}
        {header?.map((value, index) => (
          <th
            key={index}
            className={`text-lg whitespace-normal font-medium py-[2px] text-center`}
          >
            {value}
          </th>
        ))}
        {isView && (
          <th className="text-lg font-medium text-center w-max py-[2px]">
            <span className="text-center">Ver</span>
          </th>
        )}

        {isEdit && isRemove && isComboButton && (
          <th className="text-lg font-medium text-center w-max py-[2px]">
            <span className="text-center">Editar/Eliminar</span>
          </th>
        )}
        {((isEdit && !isRemove) || (isEdit && !isComboButton)) && (
          <th className="text-lg font-medium text-center w-max py-[2px]">
            <span className="text-center">Editar</span>
          </th>
        )}
        {((!isEdit && isRemove) || (isRemove && !isComboButton)) && (
          <th className="text-lg font-medium text-center w-max py-[2px]">
            <span className="text-center">Eliminar</span>
          </th>
        )}
      </tr>
    </thead>
  );
};
