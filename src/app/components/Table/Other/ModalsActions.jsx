"use client";
import { Modal } from "@/app/components/Modal";
import { Message } from "./AlertAction";
import { useEffect, useState } from "react";
import { Alert } from "@/app/components/Alert";

export const ModalsActions = ({
  id = "",
  actions: { edit = () => {}, remove = () => {} },
  useState: {
    modal: { viewModal = {}, setViewModal = () => {} },
    temp: { temp = {}, setTemp = () => {} },
  },
  formularyEdit = <></>,
}) => {
  const [isAlert, setIsAlert] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  useEffect(() => {
    if (isAlert) {
      const timer = setTimeout(() => {
        setIsAlert(false);
        setError({ isError: false, message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, isAlert]);
  return (
    <>
      {/* Modal view */}
      <Modal btnCLoseX={() => setViewModal({})} id={`VIEW_${id}`}>
        {
          <>
            <div className="text-center border-b-2 border-primary p-2 mb-6">
              <h3 className="font-bold text-lg uppercase">
                Información del Usuario:
              </h3>
            </div>
            <div className="flex flex-col gap-4 border-2 border-primary rounded p-4 my-4 overflow-y-auto">
              {Object.keys(viewModal)?.map(
                (key, index) =>
                  key.toUpperCase() !== "ID" && (
                    <div key={index}>
                      <label className="label justify-start flex gap-2">
                        <span className="label-text text-base text-md">
                          {key}:
                        </span>
                        <span className="label-text text-base-content text-md font-semibold">
                          {viewModal[key]}
                        </span>
                      </label>
                    </div>
                  )
              )}
            </div>
          </>
        }
      </Modal>

      {/* Modal edit */}
      <Modal
        btnCLoseX={() => {
          setViewModal({});
          setTemp({});
        }}
        id={`EDIT_${id}`}
        btnAccept={(e) => {
          e.preventDefault();
          if (!(temp === viewModal)) {
            window[`MODAL_EDIT_${id}`].close();
            window[`MODAL_ALERT_EDIT`].showModal();
          } else {
            setIsAlert(true);
            setError({
              isError: true,
              message: "No se editaron datos",
            });
          }
        }}
      >
        {
          <>
            <div className="text-center border-b-2 border-primary p-2 mb-6">
              <h3 className="font-bold text-lg uppercase">
                Editar Información de Usuario: <br /> ({viewModal["Nombre"]})
              </h3>
            </div>
            <div className="flex flex-col gap-4 border-2 border-primary rounded p-4 my-4 overflow-y-auto">
              {formularyEdit}
            </div>
          </>
        }
      </Modal>

      {/* Message Edit */}
      <Message
        params={{ type: "EDIT" }}
        accept={() => console.log(viewModal)}
        cancel={() => {
          setViewModal({});
          setTemp({});
        }}
        message="Esta seguro que desea editar los datos..."
      />

      {/* Message Remove */}
      <Message
        params={{ type: "REMOVE" }}
        accept={() => {
          remove(viewModal.ID)
        }}
        cancel={() => {
          setViewModal({});
        }}
        message="Esta seguro que desea eliminar los datos..."
      />

      {/* Alert Error*/}
      <div className={`${!isAlert && "hidden"} fixed top-2 right-2`}>
        <Alert {...error} />
      </div>
    </>
  );
};
