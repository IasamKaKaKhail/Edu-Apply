import { AppText, PlaceholderText } from "@/components/AppText";
import Loader from "@/components/Loader";
import { GET_AGENT_BY_ID } from "@/graphql";
import { Query, QueryGetAgentByIdArgs } from "@/graphql/__generatedTypes__";
import { useQuery } from "@apollo/client";
import moment from "moment";
import { useRouter } from "next/router";
import { Card, Row } from "../styled";

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

const AgentProfileCard = () => {
  const router = useRouter();
  const { agentId } = router.query as { agentId: string };
  const { data } = useQuery<Query, QueryGetAgentByIdArgs>(GET_AGENT_BY_ID, {
    variables: { agentId },
    fetchPolicy: "cache-first",
  });
  const agent = data?.getAgentById.agentProfile;
  if (!agent) return <Loader />;
  return (
    <Card sx={{ flex: 0.325 }}>
      <ProfileDetailRow title="Name" value={agent?.name} />
      <ProfileDetailRow title="Email" value={agent?.email} />
      <ProfileDetailRow title="Gender" value={agent?.gender} />
      <ProfileDetailRow
        title="BirthDate"
        value={moment(agent.dob).format("DD/MM/YYYY")}
      />
      <ProfileDetailRow title="City" value={agent?.city} />
      <ProfileDetailRow title="Country" value={agent?.country} />
      <ProfileDetailRow title="University No" value="20" />
      <ProfileDetailRow title="Employee No" value="39" />
      <ProfileDetailRow title="Website" value={agent?.website} />
      <ProfileDetailRow title="Company Name" value={"Unity Institute"} />
    </Card>
  );
};

export default AgentProfileCard;
