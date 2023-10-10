import { Button } from "./Button";

export const ButtonComboBox = ({action, btnCbox: { ...Cbox }, listBtn }) => {
  return (
    <div className="flex justify-center">
      <Button {...Cbox} />
      <ul
        className={`flex gap-2 mt-[35px] p-2 shadow bg-base-100 rounded-box fixed z-10 ${
          !action ? "invisible" : "visible"
        }`}
      >
        {listBtn.map((data, _index) => (
          <li key={_index}>
            <Button {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
};
