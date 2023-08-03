import {
  ImageCarousel,
  Loader,
  NameHeading,
  PageTitleText,
  TabTextButton,
} from "@/components";
import {
  GridContainer,
  HrLine,
  Row,
  VrLine,
} from "@/components/dashboard/styled";
import {
  ArrowRightBackIcon,
  StudentWithCapIcon,
} from "@/components/dashboard/Svgs";
import { ActiveTab, UniProfileBanner } from "@/components/dashboard/University";
import { AdminLayout } from "@/components/layout";
import { GET_UNI_BY_ID } from "@/graphql";
import { Query, QueryGetUniByIdArgs } from "@/graphql/__generatedTypes__";
import { useQuery } from "@apollo/client";
import { Box, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, ReactElement, useState } from "react";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"Overview" | "Subjects">(
    "Overview",
  );
  const { universityId } = router.query as { universityId: string };
  const { data } = useQuery<Query, QueryGetUniByIdArgs>(GET_UNI_BY_ID, {
    variables: { universityId },
    fetchPolicy: "cache-first",
  });
  console.log("uni data", data?.getUniById.universityProfile);
  const uni = data?.getUniById?.universityProfile;
  if (!uni) return <Loader />;
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
          <PageTitleText sx={{ color: "#111" }}>Details</PageTitleText>
        </Box>
        <UniProfileBanner
          name={uni.name}
          address={uni.address}
          avatar={"avatar"}
          email={uni.email}
        />
        <ImageCarousel
          images={[
            "https://picsum.photos/id/37/1400/550",
            "https://picsum.photos/id/47/1400/550",
            "https://picsum.photos/id/57/1400/550",
            "https://picsum.photos/id/67/1400/550",
          ]}
        />

        <Row justifyContent={"space-between"}>
          <Row sx={{ gap: 0 }}>
            <TabTextButton
              onClick={() => setActiveTab("Overview")}
              title={"Overview"}
              isActive={activeTab === "Overview"}
            />
            <VrLine color="#88888824" sx={{ margin: 0, height: "2rem" }} />
            <TabTextButton
              onClick={() => setActiveTab("Subjects")}
              title={"Subjects"}
              isActive={activeTab === "Subjects"}
            />
          </Row>
          <Row>
            <StudentWithCapIcon />
            <NameHeading>236589 Students</NameHeading>
          </Row>
        </Row>
        <HrLine />
        <ActiveTab tab={activeTab} />
      </GridContainer>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
