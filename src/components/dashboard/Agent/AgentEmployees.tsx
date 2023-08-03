import { SubTitle } from "@/components/AppText";
import { EditButtons } from "@/components/Buttons";
import { GET_AGENTS } from "@/graphql";
import { Query, QueryGetAgentsArgs } from "@/graphql/__generatedTypes__";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import React from "react";
import AddItemNotice from "../AddItemNotice";
import { TableContainer, TableFooter } from "../styled";
import AgentListHeader from "./AgentListHeader";
import AgentListRow from "./AgentListRow";

const AgentEmployees = () => {
  const { data } = useQuery<Query, QueryGetAgentsArgs>(GET_AGENTS, {
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
      <AgentListHeader />
      {data?.getAgents?.agentsProfile?.length ? (
        data.getAgents.agentsProfile.map((item) => (
          <AgentListRow agent={item} key={item.id} />
        ))
      ) : (
        <AddItemNotice name="Agents" />
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

export default AgentEmployees;
