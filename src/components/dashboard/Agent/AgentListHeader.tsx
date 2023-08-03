import { Box } from "@mui/material";
import { NameHeading } from "../../AppText";
import { TableContainerHeader, VrLine } from "../styled";

// todo >> renderDynamic columns
const AgentListHeader = () => {
  return (
    <TableContainerHeader>
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Name
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "7%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          ID
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "10%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Company Name
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "15%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Website
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "5.5%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Rating
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          No of Employee
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          No of Student
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Applicaton
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          No of Visa Granted
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Student Registered
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "9%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Paid Commission
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

export default AgentListHeader;
