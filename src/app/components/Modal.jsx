import { LuX } from "react-icons/lu";

export const Modal = ({ children, id, btnCLoseX, btnAccept, btnClose }) => {
  return (
    <dialog id={`MODAL_${id || ""}`} className="modal">
      <form method="dialog" className="modal-box">
        {btnCLoseX && (
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <LuX />
          </button>
        )}
        <div>{children}</div>
        <div className="modal-action">
          {btnAccept && (
            <button
              className="btn"
              onClick={
                (typeof btnAccept === "function" && btnAccept) || (() => {})
              }
            >
              Aceptar
            </button>
          )}
          {btnClose && <button className="btn">Cancelar</button>}
        </div>
      </form>
    </dialog>
  );
};
