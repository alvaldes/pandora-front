import { Table } from "@/app/components/Table/Table";

export default function Collaborator({ id = "", list = [], ...other }) {
  return (
    <Table id={id} body={list} {...other}>
      {/*list?.map((data) => (
        <tr key={data.ID}>
          {Object.values(data)
            .filter((__, index) => !(Object.keys(data)[index] === "ID"))
            ?.map((value, index) => (
              <td key={index} name={Object.keys(data)[index + 1]}>
                {value}
              </td>
            ))}
        </tr>
      ))*/}
    </Table>
  );
}
