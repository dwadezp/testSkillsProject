import { useTable } from "react-table";

import './Table.css';
import { cars, models } from "./consts";
import { getData } from "./utils/getData";

const columns = [
  {
    Header: "Car title",
    accessor: "title",
  },
  {
    Header: "Fluent type",
    accessor: "fluent",
  },
  {
    Header: "Count",
    accessor: "count",
  },
];

const data = getData(cars, models);

function Table() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
