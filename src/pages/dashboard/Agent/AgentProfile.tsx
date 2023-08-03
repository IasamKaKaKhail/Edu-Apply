import { Loader, PageTitleText } from "@/components";
import ActiveTab from "@/components/dashboard/Agent/ActiveTab";
import TabButtons from "@/components/dashboard/Agent/TabButtons";
import { ProfileBanner } from "@/components/dashboard/StudentDetail.tsx";
import { GridContainer } from "@/components/dashboard/styled";
import { ArrowRightBackIcon } from "@/components/dashboard/Svgs";
import { AdminLayout } from "@/components/layout";
import { GET_AGENT_BY_ID } from "@/graphql";
import { Query, QueryGetAgentByIdArgs } from "@/graphql/__generatedTypes__";
import { IAgentTabs } from "@/utils/types";
import { useQuery } from "@apollo/client";
import { Box, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, ReactElement, useState } from "react";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { agentId } = router.query as { agentId: string };
  const [activeTab, setActiveTab] = useState<IAgentTabs>("Profile Details");
  const { data } = useQuery<Query, QueryGetAgentByIdArgs>(GET_AGENT_BY_ID, {
    variables: { agentId },
    fetchPolicy: "cache-first",
  });
  const agent = data?.getAgentById?.agentProfile;
  if (!agent) return <Loader />;
  return (
    <Fragment>
      <GridContainer>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <ButtonBase
            onClick={() =>
              setTimeout(() => {
                router.back();
              }, 150)
            }
            sx={{ p: "1rem", borderRadius: "1rem" }}
          >
            <ArrowRightBackIcon />
          </ButtonBase>
          <PageTitleText sx={{ color: "#111" }}>{activeTab}</PageTitleText>
        </Box>
        <ProfileBanner
          email={agent?.email}
          name={agent.name}
          phone={agent?.phone || "+923484410838"}
          regNumber={"564321"}
        />
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        <ActiveTab tab={activeTab} />
      </GridContainer>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
