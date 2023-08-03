import { OptionsButtonThreeDots } from "@/components/Buttons";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { SubTitle } from "../../AppText";
import { TableRowItem } from "../styled";

type Props = {
  item: any;
};

const StudentTraningRowList = ({ item }: Props) => {
  const router = useRouter();
  return (
    <TableRowItem
      onClick={() => {
        router.push({
          // pathname: "Student/StudentProfile",
          // query: { studentId: student.id },
        });
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
        <SubTitle sx={{ color: "#111111" }}>{item.courseName}</SubTitle>
      </Box>
      <Box sx={{ display: "flex", width: "7%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "primary.main" }}>{item.totalMarks}</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "15%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>{item.programe}</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "12%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "primary.main" }}>{item.timeDuration}</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "10%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>{item.questionTime}</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "8%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>{item.testDate}</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "5%", overflow: "hidden" }}>
        <OptionsButtonThreeDots />
      </Box>
    </TableRowItem>
  );
};

export default StudentTraningRowList;
