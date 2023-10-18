import { Table } from "@/app/components/Table/Table";

export default function Collaborator({ id = "", list = [], ...other }) {
  return <Table id={id} body={list} {...other} />;
}
