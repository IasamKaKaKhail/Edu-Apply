import { Box } from "@mui/material";
import AgentProfileCard from "./AgentProfileCard";
import AgentReviewCard from "./AgentReviewCard";

const AgentProfileTab = () => {
  return (
    <Box sx={{ display: "flex", gap: "2.4rem" }}>
      <AgentProfileCard />
      <AgentReviewCard />
    </Box>
  );
};
export default AgentProfileTab;
