import { Box } from "@mui/material";
import { NameHeading } from "../../AppText";
import { TableContainerHeader, VrLine } from "../styled";

const StudentTraningListHeader = () => {
  return (
    <TableContainerHeader>
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Course Name
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "7%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Totel Marks
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "15%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Program
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "12%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Time Duration
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "10%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Question Types
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "8%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Test Date
        </NameHeading>
      </Box>
      <Box sx={{ display: "flex", width: "5%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Actions
        </NameHeading>
      </Box>
    </TableContainerHeader>
  );
};

export default StudentTraningListHeader;
