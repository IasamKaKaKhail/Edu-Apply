import { AppText, PlaceholderText } from "@/components/AppText";
import Loader from "@/components/Loader";
import YearPicker from "@/components/YearPicker";
import { GET_AGENT_BY_ID } from "@/graphql";
import { Query, QueryGetAgentByIdArgs } from "@/graphql/__generatedTypes__";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { GraphLegend } from "../GraphLegend";
import { Card, HrLine, Row } from "../styled";
import PaymentGraph from "./PaymentGraph";

const ProfileDetailRow = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <Row sx={{ marginBottom: "2.4rem", alignItems: "center" }}>
    <PlaceholderText sx={{ minWidth: "30%" }}>{title} :-</PlaceholderText>
    <AppText sx={{ fontWeight: 500 }}>{value}</AppText>
  </Row>
);

const dataChart = [
  { id: "totalRevenue", name: "Total Revenue", value: 3800 },
  { id: "agentCommission", name: "Agent Commission", value: 1400 },
];

const DonoughtChart = () => (
  <Box
    sx={{
      height: "16rem",
      width: "16rem",
    }}
  >
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={dataChart}
          dataKey="value"
          innerRadius="40%"
          outerRadius="100%"
          fill="#F5CB77"
          startAngle={90}
          endAngle={-270}
          paddingAngle={0}
          blendStroke
        >
          <Cell key="totalRevenue" fill="#76C7E0" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </Box>
);

const AgentBankingDetails = () => {
  const router = useRouter();
  const { agentId } = router.query as { agentId: string };
  const [year, setYear] = useState<Date | null>(new Date());
  const { data } = useQuery<Query, QueryGetAgentByIdArgs>(GET_AGENT_BY_ID, {
    variables: { agentId },
    fetchPolicy: "cache-first",
  });
  const agent = data?.getAgentById.agentProfile;
  if (!agent) return <Loader />;
  return (
    <Box sx={{ display: "flex", gap: "2.4rem" }}>
      <Card sx={{ flex: 0.325, padding: 0 }}>
        <Box padding={"2.4rem"}>
          <ProfileDetailRow
            title="Account Holder Name"
            value={agent?.accountHolderName}
          />
          <ProfileDetailRow title="Bank Name" value={agent?.bankName} />
          <ProfileDetailRow
            title="Account Number"
            value={agent?.AccountNumber}
          />

          <ProfileDetailRow
            title="Transit Number"
            value={agent?.transitNumber}
          />
          <ProfileDetailRow title="Swift code" value={agent?.swiftCode} />
        </Box>
        <HrLine />
        <Row
          sx={{
            padding: "2.4rem",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <DonoughtChart />
          <Box>
            <Row sx={{ justifyContent: "flex-end", marginBottom: "2.4rem" }}>
              <PlaceholderText sx={{ fontWeight: 500 }}>
                Sort by:
              </PlaceholderText>
              <Box
                ml={"-0.5rem"}
                borderRadius={"0.6rem"}
                sx={{
                  overflow: "hidden",
                  border: "1px solid #EBEBEB",
                  boxShadow: "0rem 0.2rem 2rem 0rem #0000000A",
                }}
              >
                <YearPicker
                  value={year}
                  onChange={(newValue) => {
                    setYear(newValue);
                  }}
                />
              </Box>
            </Row>
            <Row sx={{ justifyContent: "flex-end" }}>
              <GraphLegend color="#76C7E0" title="Total Revenue" />
              <GraphLegend color="#F5CB77" title="Agent Commission" />
            </Row>
            <PlaceholderText ml={"1.2rem"} mt={"1.2rem"}>
              Total revenue and agent commission graph overview one month.
            </PlaceholderText>
          </Box>
        </Row>
      </Card>

      <Card sx={{ flex: 0.675, padding: 0 }}>
        <PaymentGraph />
      </Card>
    </Box>
  );
};

export default AgentBankingDetails;
