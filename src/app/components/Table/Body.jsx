import { LuEdit2, LuEye, LuTrash2 } from "react-icons/lu";
import { Button } from "./Button";
import { ButtonComboBox } from "./BottonComboBox";
import { Toggle } from "./Toggle";
import { Checked } from "./Checked";

export const Body = ({
  header,
  body: { body, id },
  toggleItems,
  iChecked: { isChecked, select, setSelect },
  isNumber,
  isView,
  isEdit,
  isRemove,
  iComboButton: { isComboButton, editRemove, setEditRemove },
  iModal: { setViewModal, setTemp },
}) => {
  const hlength =
    header?.length +
    ((isChecked && 1) || 0) +
    (isNumber ? 1 : 0) +
    (isView ? 1 : 0) +
    (isEdit ? 1 : 0) +
    (isRemove ? 1 : 0) +
    (isComboButton ? 1 : 0);
  return (
    <tbody>
      {(body.length > 0 &&
        //Children.toArray(children)?.map((val, index) => {
        body?.map((val, index) => {
          return (
            <tr key={index} className={`${index % 2 && "bg-base-300"}`}>
              {
                //Section select row
                isChecked && (
                  <th className="h-full w-max">
                    <Checked
                      checked={select[index]}
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
                isNumber && <th className="text-center">{index + 1}</th>
              }
              {
                //Content table body data
                Object.values(val)
                  ?.filter((__, index) => !(Object.keys(val)[index] === "ID"))
                  ?.map((td, index1) =>
                    toggleItems &&
                    toggleItems.some(
                      (value) =>
                        value[0].toLowerCase() === header[index1].toLowerCase()
                    ) ? (
                      <th key={index1}>
                        <Toggle
                          name={header[index1]}
                          disabled={
                            toggleItems.filter(
                              (value) => value[0] === header[index1]
                            )[0][2]
                          }
                          onChange={({ target }) =>
                            toggleItems.filter(
                              (value) => value[0] === target.name
                            )[0][1](index, target.name, target.checked)
                          }
                          checked={
                            typeof td === "string"
                              ? td.toUpperCase() === "ACTIVE"
                              : td
                          }
                        />
                      </th>
                    ) : (
                      <th key={index1}>{td}</th>
                    )
                  )
              }
              {
                //Button action open info row in modal
                isView && (
                  <th className="text-lg font-medium text-center w-max py-[2px]">
                    <Button
                      className="btn-info"
                      onClick={() => {
                        setViewModal(
                          header.map((td) => ({
                            key: `${td}`,
                            value: `${val[td]}`,
                          }))
                        );
                        window[`MODAL_VIEW_${id}`].showModal();
                      }}
                    >
                      <LuEye className="text-info-content" />
                    </Button>
                  </th>
                )
              }
              {
                // Combo Button from remove and edit in one column
                isEdit && isRemove && isComboButton && (
                  <th className="relative">
                    <ButtonComboBox
                      action={editRemove[index]}
                      btnCbox={{
                        className: "btn-primary",
                        onClick: () =>
                          setEditRemove(
                            editRemove.map((val, index1) =>
                              index == index1 ? !val : false
                            )
                          ),
                        children: "Action",
                      }}
                      listBtn={[
                        {
                          className: "btn-warning",
                          onClick: () => console.log(val.ID),
                          children: (
                            <LuEdit2 className="text-warning-content" />
                          ),
                        },
                        {
                          className: "btn-error",
                          onClick: () => console.log(val.ID),
                          children: <LuTrash2 className="text-error-content" />,
                        },
                      ]}
                    />
                  </th>
                )
              }
              {
                // Button action edit content row
                ((isEdit && !isRemove) || (isEdit && !isComboButton)) && (
                  <th className="text-lg font-medium text-center w-max py-[2px]">
                    <Button
                      className="btn-warning"
                      onClick={() => {
                        setViewModal([
                          val.ID,
                          ...header.map((td) => ({
                            key: `${td}`,
                            value: `${val[td]}`,
                          })),
                        ]);
                        setTemp([
                          val.ID,
                          ...header.map((td) => ({
                            key: `${td}`,
                            value: `${val[td]}`,
                          })),
                        ]);
                        window[`MODAL_EDIT_${id}`].showModal();
                      }}
                    >
                      <LuEdit2 className="text-warning-content" />
                    </Button>
                  </th>
                )
              }
              {
                // Button acction remove row
                ((!isEdit && isRemove) || (isRemove && !isComboButton)) && (
                  <th className="text-lg font-medium text-center w-max py-[2px]">
                    <Button
                      className="btn-error"
                      onClick={() => {
                        setViewModal(val.ID);
                        window[`MODAL_ALERT_REMOVE`].showModal();
                      }}
                    >
                      <LuTrash2 className="text-error-content" />
                    </Button>
                  </th>
                )
              }
            </tr>
          );
        })) || (
        // If don't content in body table, there view this massage
        <tr className="text-center">
          <th colSpan={`${hlength}`} className="py-4">
            No existen coincidencias
          </th>
        </tr>
      )}
    </tbody>
  );
};
