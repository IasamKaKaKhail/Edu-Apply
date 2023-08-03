import {
  AppText,
  EnrollmentGraph,
  RevenueGraph,
  SearchInputOutline,
  TitleText,
} from "@/components";
import { AdminLayout } from "@/components/layout";
import { Box, Grid } from "@mui/material";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@/components/Tabing";
import Image from "next/image";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  GridBalanceTicker,
  TickerIconWrapper,
} from "@/components/dashboard/styled";
import { IMAGES } from "@/utils";
import { VerticalSeperator } from "@/components/dashboard/Seperator";
import {
  TickerAgentIcon,
  TickerBuildingIcon,
  TickerStudentIcon,
} from "@/components/dashboard/Svgs";

//dataGridArrayStartsHere
const patmenyColumns: GridColDef[] = [
  { field: "id", headerName: "ID", headerClassName: "headerCell" },
  {
    field: "firstName",
    headerName: "First name",
    headerClassName: "headerCell",
  },
  {
    field: "lastName",
    headerName: "Last name",
    headerClassName: "headerCell",
  },
  { field: "age", headerName: "Age", headerClassName: "headerCell", flex: 1 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    headerClassName: "headerCell",
    sortable: false,

    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", headerClassName: "headerCell" },
  {
    field: "firstName",
    headerName: "First name",
    headerClassName: "headerCell",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    headerClassName: "headerCell",
    flex: 1,
  },
  { field: "age", headerName: "Age", headerClassName: "headerCell", flex: 1 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    headerClassName: "headerCell",
    flex: 1,
    sortable: false,

    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const filterOption = [
  { id: "1", filter: "ID" },
  { id: "2", filter: "NAME" },
  { id: "3", filter: "COUNTRY" },
  { id: "4", filter: "SUBJECT" },
];

//dataGridArrayEndsHere

const Page: NextPageWithLayout = () => {
  //navigationStartsHere

  //navigationEndsHere

  //statesStartHere

  const [value, setValue] = React.useState(0);
  const [filter, setFilter] = React.useState(filterOption[0].filter);

  //statesEndHere

  //funcationStartsHere

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  //funcationEndsHere

  // const { route, basePath, pathname } = router;
  return (
    <Grid container p={"2.5rem"}>
      <Grid xs={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ mb: "5.6rem" }}
        >
          <Tab
            component={() => {
              return (
                <GridBalanceTicker
                  xs
                  onClick={() => setValue(0)}
                  sx={{ ml: "2.5rem", mr: "2.5rem" }}
                >
                  <Box
                    zIndex={99}
                    display={"flex"}
                    flexDirection={"column"}
                    flex={1}
                    height={"100%"}
                    justifyContent={"space-around"}
                  >
                    <TitleText
                      sx={{
                        color: "white",
                        fontSize: "3.5rem",
                        lineHeight: "4.7rem",
                      }}
                    >{`$ 44,750.00`}</TitleText>
                    <Box display={"flex"} flexWrap={"nowrap"}>
                      <AppText sx={{ color: "white", fontSize: "1.8rem" }}>
                        Total Balance
                      </AppText>
                      <AppText sx={{ color: "white", fontSize: "1.4rem" }}>
                        &nbsp;|&nbsp;(Current Month )
                      </AppText>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      width: "11rem",
                      height: "11rem",
                      right: "2rem",
                    }}
                  >
                    <Image
                      src={IMAGES.bgCardCircles}
                      alt="computer-guy-wink"
                      fill
                      style={{
                        aspectRatio: 1,
                        objectFit: "scale-down",
                        position: "absolute",
                        right: "1px",
                      }}
                    />
                  </Box>
                </GridBalanceTicker>
              );
            }}
          />
          <Tab
            component={() => {
              return (
                <Grid
                  xs
                  sx={{
                    borderRadius: "0.8rem",
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #EBEBEB",
                    boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
                    ml: "2.5rem",
                    mr: "2.5rem",
                  }}
                  onClick={() => setValue(1)}
                >
                  <TickerIconWrapper>
                    <TickerAgentIcon transform={"scale(0.75)"} />
                  </TickerIconWrapper>
                  <VerticalSeperator />
                  <Box
                    zIndex={99}
                    display={"flex"}
                    flexDirection={"column"}
                    flex={1}
                    height={"100%"}
                    justifyContent={"space-around"}
                  >
                    <Box display={"flex"} flexWrap={"nowrap"}>
                      <AppText sx={{ fontSize: "1.8rem" }}>
                        Total Agent&nbsp;
                      </AppText>
                      <AppText sx={{ fontSize: "1.4rem", color: "#BBBBC7" }}>
                        &nbsp;|&nbsp;(Current Month )
                      </AppText>
                    </Box>
                    <TitleText
                      sx={{ fontSize: "3rem", lineHeight: "4.7rem" }}
                    >{`50`}</TitleText>
                  </Box>
                </Grid>
              );
            }}
          />
          <Tab
            component={() => {
              return (
                <Grid
                  xs
                  sx={{
                    borderRadius: "0.8rem",
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #EBEBEB",
                    boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
                    ml: "2.5rem",
                    mr: "2.5rem",
                  }}
                  onClick={() => setValue(2)}
                >
                  <TickerIconWrapper>
                    <TickerStudentIcon transform={"scale(0.75)"} />
                  </TickerIconWrapper>
                  <VerticalSeperator />
                  <Box
                    zIndex={99}
                    display={"flex"}
                    flexDirection={"column"}
                    flex={1}
                    height={"100%"}
                    justifyContent={"space-around"}
                  >
                    <Box display={"flex"} flexWrap={"nowrap"}>
                      <AppText sx={{ fontSize: "1.8rem" }}>
                        Total Student&nbsp;
                      </AppText>
                      <AppText sx={{ fontSize: "1.4rem", color: "#BBBBC7" }}>
                        &nbsp;|&nbsp;(Current Month )
                      </AppText>
                    </Box>
                    <TitleText
                      sx={{ fontSize: "3rem", lineHeight: "4.7rem" }}
                    >{`400`}</TitleText>
                  </Box>
                </Grid>
              );
            }}
          />
          <Tab
            component={() => {
              return (
                <Grid
                  xs
                  sx={{
                    borderRadius: "0.8rem",
                    padding: "2rem",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #EBEBEB",
                    boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
                    ml: "2.5rem",
                    mr: "2.5rem",
                  }}
                  onClick={() => setValue(3)}
                >
                  <TickerIconWrapper>
                    <TickerBuildingIcon transform={"scale(0.75)"} />
                  </TickerIconWrapper>
                  <VerticalSeperator />
                  <Box
                    zIndex={99}
                    display={"flex"}
                    flexDirection={"column"}
                    flex={1}
                    height={"100%"}
                    justifyContent={"space-around"}
                  >
                    <Box display={"flex"} flexWrap={"nowrap"}>
                      <AppText sx={{ fontSize: "1.8rem" }}>
                        Total University&nbsp;
                      </AppText>
                      <AppText sx={{ fontSize: "1.4rem", color: "#BBBBC7" }}>
                        &nbsp;|&nbsp;(Current Month )
                      </AppText>
                    </Box>
                    <TitleText
                      sx={{ fontSize: "3rem", lineHeight: "4.7rem" }}
                    >{`20`}</TitleText>
                  </Box>
                </Grid>
              );
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container xs={12} columnGap={"2.5rem"}>
            <Grid container xs={8} rowGap={"2.5rem"}>
              <Grid xs={12}>
                <EnrollmentGraph />
              </Grid>
              <Grid xs={12}>
                <RevenueGraph />
              </Grid>
            </Grid>
            <Grid
              xs
              sx={{
                border: "1px solid #EBEBEB",
                boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
                borderRadius: "0.6rem",
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: "2.5rem",
                mr: "2.5rem",
              }}
            >
              <DataGrid rows={rows} columns={patmenyColumns} pageSize={10} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ width: "100%", height: "64.5rem" }}>
            <Grid xs={12} pb={"3.6rem"}>
              <SearchInputOutline
                filter={filter}
                setFilter={setFilter}
                filterOptions={filterOption}
              />
            </Grid>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={{ width: "100%", height: "64.5rem" }}>
            <Grid xs={12} pb={"3.6rem"}>
              <SearchInputOutline
                filter={filter}
                setFilter={setFilter}
                filterOptions={filterOption}
              />
            </Grid>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={{ width: "100%", height: "64.5rem" }}>
            <Grid xs={12} pb={"3.6rem"}>
              <SearchInputOutline
                filter={filter}
                setFilter={setFilter}
                filterOptions={filterOption}
              />
            </Grid>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
          </Box>
        </TabPanel>
      </Grid>
    </Grid>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
