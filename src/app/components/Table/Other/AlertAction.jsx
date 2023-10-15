import { useId } from "react";
import { Modal } from "../../Modal";

export const Alert = ({
  message = "",
  accept = () => {},
  cancel = () => {},
  params: { type },
}) => {
  const key = useId();
  return (
    <Modal btnAccept={accept} btnClose={cancel} id={`ALERT_${type}`} key={key}>
      <div className="text-center border-b-2 border-primary p-2 mb-6">
        <h3 className="font-bold text-lg uppercase">{`acción solicitada (${type})`}</h3>
      </div>
      <div className="flex flex-col gap-4 border-2 border-primary rounded p-4 my-4 overflow-y-auto">
        {message}
      </div>
    </Modal>
  );
};
