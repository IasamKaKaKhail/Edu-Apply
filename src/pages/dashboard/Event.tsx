import { AppButton, PageTitleText, SearchInputOutline } from "@/components";
import { AdminLayout } from "@/components/layout";
import { GET_EVENTS } from "@/graphql";
import { useQuery } from "@apollo/client";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { ReactElement, useState, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";

//dataGridArrayStartsHere
const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", headerClassName: "headerCell idHeaderCell" },
  {
    field: "eventName",
    headerName: "Event Name",
    headerClassName: "headerCell",
    flex: 1,
  },
  {
    field: "organize",
    headerName: "Organize By",
    headerClassName: "headerCell",
    flex: 1,
  },
  {
    field: "eventTime",
    headerName: "Event Time",
    headerClassName: "headerCell",
    flex: 1,
  },
  {
    field: "eventPlace",
    headerName: "Event Place",
    description: "This column has a value getter and is not sortable.",
    headerClassName: "headerCell",
    sortable: false,
    flex: 1,

    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "subject",
    headerName: "Subject",
    description: "This column has a value getter and is not sortable.",
    headerClassName: "headerCell",
    sortable: false,
    flex: 1,

    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "eventDate",
    headerName: "Event Date",
    description: "This column has a value getter and is not sortable.",
    headerClassName: "headerCell",
    sortable: false,
    flex: 1,

    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    headerClassName: "headerCell",
    sortable: false,
    flex: 1,

    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const filterOption = [
  { id: "1", filter: "ID" },
  { id: "2", filter: "NAME" },
  { id: "3", filter: "COUNTRY" },
  { id: "4", filter: "SUBJECT" },
];

//dataGridArrayEndsHere

const Page: NextPageWithLayout = () => {
  //statesStartHere

  // const [value, setValue] = useState('')
  const [filter, setFilter] = useState(filterOption[0].filter);
  const [rows, setRows] = useState<any>([]);

  //statesEndHere

  //queriesStartHere

  const { data } = useQuery(GET_EVENTS, {
    variables: {
      userDate: undefined,
    },
  });

  //queriesEndHere

  //functionsStartHere
  useEffect(() => {
    const tempRow: any[] = [];
    if (data?.getEvents) {
      data?.getEvents.map((item: any) =>
        tempRow.push({
          id: item.id,
          eventName: item.name,
          organize: item.organize,
          eventTime: moment(item.date).format("LT"),
          eventPlace: item.place,
          subject: item.subject,
          eventDate: moment(item.date).format("DD/MM/YYYY"),
        }),
      );
      console.log(tempRow);
      setRows(tempRow);
    }
  }, [data]);
  //funcationEndHere

  const router = useRouter();
  return (
    <>
      <Grid minHeight={"72.2rem"} minWidth={"100%"} paddingBottom={"3rem"}>
        <Grid
          xs={12}
          container
          sx={{ mt: "3.6rem", ml: "2.6rem", mr: "2.6rem" }}
        >
          <Grid xs={10}>
            <PageTitleText>Event List</PageTitleText>
          </Grid>

          <Grid xs={2} onClick={() => router.push("CreateNewEvents")}>
            <AppButton>Add New Event </AppButton>
          </Grid>
        </Grid>
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2.5rem",
              paddingTop: "0rem",
            }}
          >
            <SearchInputOutline
              filter={filter}
              setFilter={setFilter}
              filterOptions={filterOption}
            />
          </Box>
        </Grid>
        <Box sx={{ height: "72.2rem", ml: "2.5rem", mr: "2.5rem" }}>
          {rows && <DataGrid rows={rows} columns={columns} pageSize={10} />}
        </Box>
      </Grid>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
