import { Box } from "@mui/material";
import { NameHeading } from "../../AppText";
import { TableContainerHeader, VrLine } from "../styled";

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

      <Box sx={{ display: "flex", width: "15%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Email
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "12%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Assign to
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "10%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Education
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "8%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Status
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "8%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Referral Source
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "10%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Payment
        </NameHeading>
      </Box>

      <Box sx={{ display: "flex", width: "8%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Destination
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
