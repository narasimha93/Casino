import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function Tables(props) {
  debugger;

  const columns = [
    { field: "id", headerName: "ID", width: 110, sortable: true },
    { field: "slot", headerName: "Slot", width: 170, sortable: false },
    {
      field: "time",
      headerName: "Time",
      width: 170,
      sortable: true,
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid rows={props.rows} columns={columns} pageSize={100} />
    </div>
  );
}
