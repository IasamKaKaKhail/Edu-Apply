import {
  AppButton,
  EditButtons,
  PageTitleText,
  SearchInputOutline,
  SubTitle,
} from "@/components";
import StudentTraningListHeader from "@/components/dashboard/StudentTraning/StudentTraningListHeader";
import StudentTraningRowList from "@/components/dashboard/StudentTraning/StudentTraningRowList";
import { TableContainer, TableFooter } from "@/components/dashboard/styled";
import { AdminLayout } from "@/components/layout";
import { GET_STUDENT_TRAINING_DATA } from "@/graphql";
import { useQuery } from "@apollo/client";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";

const filterOption = [
  { id: "1", filter: "ID" },
  { id: "2", filter: "NAME" },
  { id: "3", filter: "COUNTRY" },
  { id: "4", filter: "SUBJECT" },
];

const Page: NextPageWithLayout = () => {
  //statesStartHere
  // const [value, setValue] = useState('')
  const [filter, setFilter] = useState(filterOption[0].filter);
  //statesEndHere

  //queriesStartHere
  const { data } = useQuery(GET_STUDENT_TRAINING_DATA);

  //queriesEndHere

  const router = useRouter();
  return (
    <>
      <Grid
        minHeight={"calc(100vh - 10rem)"}
        minWidth={"170rem"}
        paddingBottom={"3rem"}
      >
        <Grid
          xs={12}
          container
          sx={{ mt: "3.6rem", ml: "2.6rem", mr: "2.6rem" }}
        >
          <Grid xs={10}>
            <PageTitleText>Student List</PageTitleText>
          </Grid>

          <Grid xs={2} onClick={() => router.push("CreateStudentTraning")}>
            <AppButton>Add new paper </AppButton>
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
        <TableContainer>
          <StudentTraningListHeader />
          {data?.getStudentTraining?.length > 0 &&
            data?.getStudentTraining?.map((item: any) => (
              <StudentTraningRowList item={item} key={item.id} />
            ))}
          <TableFooter>
            <SubTitle sx={{ color: "#111111" }}>total records</SubTitle>
            <Box
              flex={1}
              sx={{ justifyContent: "flex-end", textAlign: "right" }}
            >
              <EditButtons />
            </Box>
          </TableFooter>
        </TableContainer>
      </Grid>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
