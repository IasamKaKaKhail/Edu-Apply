import {
  DropdownSelect,
  PageTitleText,
  SearchInputOutline,
  TableFooter,
} from "@/components";
import AddItemNotice from "@/components/dashboard/AddItemNotice";
import {
  StudentListHeader,
  StudentListRow,
} from "@/components/dashboard/StudentDetail.tsx";
import { TableContainer } from "@/components/dashboard/styled";
import { AdminLayout } from "@/components/layout";
import {
  ActivePageStudents,
  GET_STUDENTS,
  queryFilterInitial,
  QueryFilterStudents,
} from "@/graphql";
import { Query, QueryGetStudentsArgs } from "@/graphql/__generatedTypes__";
import { SVGS } from "@/utils";
import { useQuery, useReactiveVar } from "@apollo/client";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../../_app";

const filterOption = [
  { id: "1", filter: "ID" },
  { id: "2", filter: "NAME" },
  { id: "3", filter: "COUNTRY" },
  { id: "4", filter: "EMAIL" },
];

const dorpdownSelectOption = [
  { id: "1", filter: "Add Student" },
  { id: "2", filter: "Import CSV file " },
];
let myTimeout: NodeJS.Timeout | undefined = undefined;

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const [filter, setFilter] = useState(filterOption[1].filter);

  // const [queryFilter, setQueryFilter] = useState<InputMaybe<Filter>>({
  //   country: "",
  //   email: "",
  //   id: "",
  //   name: "",
  // });
  const queryFilter = useReactiveVar(QueryFilterStudents);
  const activePage = useReactiveVar(ActivePageStudents);

  const [filterValue, setFilterValue] = useState("");
  const [selected, setSelected] = useState(dorpdownSelectOption[0].filter);
  const { data } = useQuery<Query, QueryGetStudentsArgs>(GET_STUDENTS, {
    variables: {
      count: 10,
      offset: activePage * 10,
      filter: queryFilter || queryFilterInitial,
    },
    fetchPolicy: "network-only",
  });

  //update Search query with debounce of 700ms delay
  useEffect(() => {
    clearTimeout(myTimeout);
    if (!filterValue) {
      QueryFilterStudents({
        country: "",
        email: "",
        id: "",
        name: "",
      });
      return;
    }
    myTimeout = setTimeout(() => {
      console.log("====>", filterValue);
      QueryFilterStudents({
        country: filter === "COUNTRY" ? filterValue : "",
        email: filter === "EMAIL" ? filterValue : "",
        id: filter === "ID" ? filterValue : "",
        name: filter === "NAME" ? filterValue : "",
      });
    }, 700);
  }, [filterValue]);

  useEffect(() => {
    setFilterValue("");
  }, [filter]);
  return (
    <Fragment>
      <Grid minHeight={"calc(100vh - 10rem)"} minWidth={"155rem"}>
        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2.5rem",
            }}
          >
            <PageTitleText>Student List</PageTitleText>
            <DropdownSelect
              onClickBtn={() => router.push("Student/CreateStudent")}
              selected={selected}
              setSelected={setSelected}
              options={dorpdownSelectOption}
            />
          </Box>
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
              onChangeValue={(value) => setFilterValue(value)}
              value={filterValue}
            />
            <Image
              src={SVGS.hamburgerOutlined}
              alt="options-icon"
              width={50}
              height={50}
              style={{
                width: "5rem",
                height: "5rem",
              }}
            />
          </Box>
        </Grid>
        <TableContainer>
          <StudentListHeader />
          {data?.getStudents?.students.length ? (
            data.getStudents.students.map((item) => (
              <StudentListRow student={item} key={item.id} />
            ))
          ) : (
            <AddItemNotice name="Students" />
          )}
          <TableFooter
            onPageChange={(e) => ActivePageStudents(e)}
            total={data?.getStudents.total}
            activePage={activePage}
          />
        </TableContainer>
      </Grid>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
