import {
  DropdownSelect,
  SearchInputOutline,
  StudentRowCard,
  SubHeading,
  SubTitle,
} from "@/components";
import { AdminLayout } from "@/components/layout";
import { GET_STUDENTS } from "@/graphql";
import { Query, QueryGetStudentsArgs } from "@/graphql/__generatedTypes__";
import { useQuery } from "@apollo/client";
import { Box, Grid } from "@mui/material";
import { Fragment, ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";

const filterOption = [
  { id: "1", filter: "ID" },
  { id: "2", filter: "NAME" },
  { id: "3", filter: "COUNTRY" },
  { id: "4", filter: "SUBJECT" },
];

const dorpdownSelectOption = [
  { id: "1", filter: "Student" },
  { id: "2", filter: "Agent" },
  { id: "3", filter: "Universities" },
  { id: "4", filter: "Subject" },
];

const Page: NextPageWithLayout = () => {
  // const [value, setValue] = useState('')
  const [filter, setFilter] = useState(filterOption[0].filter);
  const [selected, setSelected] = useState(dorpdownSelectOption[0].filter);
  const { data } = useQuery<Query, QueryGetStudentsArgs>(GET_STUDENTS, {
    variables: {
      count: 100,
      offset: 0,
      filter: {
        country: "",
        email: "",
        id: "",
        name: "",
      },
    },
  });
  return (
    <Fragment>
      <Grid minHeight={"calc(100vh - 10rem)"}>
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2.5rem",
            }}
          >
            <SearchInputOutline
              filter={filter}
              setFilter={setFilter}
              filterOptions={filterOption}
            />
            <DropdownSelect
              selected={selected}
              setSelected={setSelected}
              options={dorpdownSelectOption}
            />
          </Box>
        </Grid>
        <Grid>
          <SubTitle sx={{ paddingX: "2.5rem" }}>Search Result</SubTitle>
        </Grid>
        <Grid
          sx={{
            padding: "2rem",
            border: "1px solid #EBEBEB",
            boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
            marginX: "2.5rem",
            marginTop: "1.6rem",
          }}
        >
          <Grid mb={"0.5rem"}>
            <SubHeading>Students</SubHeading>
          </Grid>
          {data?.getStudents?.students &&
            data.getStudents.students.map((item) => (
              <StudentRowCard student={item} key={item.id} />
            ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
