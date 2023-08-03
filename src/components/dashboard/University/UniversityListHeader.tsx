import { Box } from "@mui/material";
import { NameHeading } from "../../AppText";
import { TableContainerHeader, VrLine } from "../styled";

const UniversityListHeader = () => {
  return (
    <TableContainerHeader>
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Name of University
        </NameHeading>
      </Box>
      <Box sx={{ display: "flex", width: "16%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Program
        </NameHeading>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Location
        </NameHeading>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overflow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Application Fee
        </NameHeading>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Tution Fee
        </NameHeading>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Next Intake
        </NameHeading>
      </Box>
      <Box sx={{ display: "flex", width: "11%", overFlow: "hidden" }}>
        <VrLine sx={{ margin: 0 }} />
        <NameHeading sx={{ color: "white", paddingX: "1.2rem" }}>
          Commission
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

export default UniversityListHeader;
