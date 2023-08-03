import { SubTitle } from "@/components/AppText";
import { EditButtons } from "@/components/Buttons";
import { GET_STUDENTS } from "@/graphql";
import { Query, QueryGetStudentsArgs } from "@/graphql/__generatedTypes__";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import React from "react";
import AddItemNotice from "../AddItemNotice";
import { StudentListHeader, StudentListRow } from "../StudentDetail.tsx";
import { TableContainer, TableFooter } from "../styled";

const StudentWithAgents = () => {
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
    <TableContainer sx={{ margin: 0 }}>
      <StudentListHeader />
      {data?.getStudents?.students.length ? (
        data.getStudents.students.map((item) => (
          <StudentListRow student={item} key={item.id} />
        ))
      ) : (
        <AddItemNotice name="Students" />
      )}
      <TableFooter>
        <SubTitle sx={{ color: "#111111" }}>total records</SubTitle>
        <Box flex={1} sx={{ justifyContent: "flex-end", textAlign: "right" }}>
          <EditButtons />
        </Box>
      </TableFooter>
    </TableContainer>
  );
};

export default StudentWithAgents;
