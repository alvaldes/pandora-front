import { Inputs } from "../components/formulary/Inputs";

export const FormularyEdit = ({
  useState: { viewModal = {}, setViewModal = () => {} },
}) => {
  const configs = [{ key: "Rol", type: "role" }];
  return configs?.map((item, index) => {
    return (
      <Inputs
        key={index}
        item={item}
        useState={{
          value: viewModal[item.key],
          onChange: ({ target }) => {
            setViewModal((old) => ({ ...old, [target.name]: target.value }));
          },
        }}
      />
    );
  });
};
