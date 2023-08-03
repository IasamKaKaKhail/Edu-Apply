import { editTheStudent } from "@/components/forms/yupSchema";
import { StudentProfile } from "@/graphql/__generatedTypes__";
import { useStudent } from "@/hooks";
import { Avatar, Box } from "@mui/material";
import { useRouter } from "next/router";
import { SubTitle } from "../../AppText";
import EditRecordButton from "../EditRecordButton";
import { TableRowItem } from "../styled";

type Props = {
  student: StudentProfile;
};

const AgentListRow = ({ student }: Props) => {
  const router = useRouter();
  const { deleteStudentById } = useStudent();
  const studentId = student.id;
  const handleUpdate = () => {
    const {
      createdAt,
      updatedAt,
      email,
      __typename,
      photo,
      id,
      userId,
      ...rest
    } = student;
    editTheStudent({ ...rest });
    router.push({
      pathname: "/dashboard/Student/EditStudent",
      query: { studentId },
    });
  };
  return (
    <TableRowItem
      onClick={(e) => {
        if (e.target !== e.currentTarget.lastChild) {
          router.push({
            pathname: "/dashboard/Student/StudentProfile",
            query: { studentId },
          });
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          gap: "1.2rem",
          overflow: "hidden",
        }}
      >
        <Avatar
          sx={{ width: "4.2rem", height: "4.2rem", borderRadius: "4.2rem" }}
        />

        <SubTitle sx={{ color: "#111111" }}>
          {`${student?.firstname || ""} ${student?.middlename || ""} ${
            student?.lastname || ""
          }`}
        </SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "7%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "primary.main" }}>1025451</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "15%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>{student?.email || ""}</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "12%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "primary.main" }}>assignTo</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "10%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>Engineering</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "8%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>Approved</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "8%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>Referral</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "10%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>$ 9,000</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "8%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>Destination</SubTitle>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "5%",
          overflow: "hidden",
          padding: "1rem",
          paddingLeft: "1%",
        }}
      >
        <EditRecordButton
          onClickDelete={() => deleteStudentById({ studentId })}
          onClickUpdate={handleUpdate}
        />
      </Box>
    </TableRowItem>
  );
};

export default AgentListRow;
