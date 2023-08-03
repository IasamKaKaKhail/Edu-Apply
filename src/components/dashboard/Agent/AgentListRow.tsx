import { editTheAgent } from "@/components/forms/yupSchema";
import { AgentProfile } from "@/graphql/__generatedTypes__";
import { useAgent } from "@/hooks";
import { Avatar, Box } from "@mui/material";
import { useRouter } from "next/router";
import { SubTitle } from "../../AppText";
import EditRecordButton from "../EditRecordButton";
import { TableRowItem } from "../styled";
import { RatingStartIcon } from "../Svgs";

type Props = {
  agent: AgentProfile;
};

const AgentListRow = ({ agent }: Props) => {
  const router = useRouter();
  const { deleteAgentbyId } = useAgent();
  const agentId = agent.id;
  const handleUpdate = () => {
    const { createdAt, updatedAt, email, __typename, id, ...rest } = agent;
    editTheAgent({ ...rest });
    router.push({
      pathname: "/dashboard/Agent/EditAgent",
      query: { agentId },
    });
  };
  return (
    <TableRowItem
      onClick={() => {
        router.push({
          pathname: "/dashboard/Agent/AgentProfile",
          query: { agentId },
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
        <Avatar
          sx={{ width: "4.2rem", height: "4.2rem", borderRadius: "4.2rem" }}
        />

        <SubTitle sx={{ color: "#111111" }}>{agent?.name || ""}</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "7%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "primary.main" }}>1025451</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "10%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>
          {agent?.branchName || "Company name"}
        </SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "15%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "primary.main" }}>
          {agent?.website || "-"}
        </SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "5.5%", overflow: "hidden" }}>
        <RatingStartIcon />
        <SubTitle sx={{ color: "#111111" }}>4.5</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>64</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>64</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>64</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>64</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "6.6%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>64</SubTitle>
      </Box>

      <Box sx={{ display: "flex", width: "9%", overflow: "hidden" }}>
        <SubTitle sx={{ color: "#111111" }}>$ 6,96,964</SubTitle>
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
          onClickDelete={() => deleteAgentbyId({ agentId })}
          onClickUpdate={handleUpdate}
        />{" "}
      </Box>
    </TableRowItem>
  );
};

export default AgentListRow;
