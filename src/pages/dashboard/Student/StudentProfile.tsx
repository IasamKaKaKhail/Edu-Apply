import { Loader, PageTitleText } from "@/components";
import {
  ActiveTab,
  ProfileBanner,
  ProfileTabButtons,
} from "@/components/dashboard/StudentDetail.tsx";
import {
  GridContainer,
  ProfileDetailWrapper,
} from "@/components/dashboard/styled";
import { ArrowRightBackIcon } from "@/components/dashboard/Svgs";
import { AdminLayout } from "@/components/layout";
import { GET_STUDENT_BY_ID } from "@/graphql";
import { Query, QueryGetStudentByIdArgs } from "@/graphql/__generatedTypes__";
import { IProfileTabs } from "@/utils/types";
import { useQuery } from "@apollo/client";
import { Box, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, ReactElement, useState } from "react";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { studentId } = router.query as { studentId: string };
  const [activeTab, setActiveTab] = useState<IProfileTabs>("Student Profile");
  const { data } = useQuery<Query, QueryGetStudentByIdArgs>(GET_STUDENT_BY_ID, {
    variables: { studentId },
    fetchPolicy: "cache-first",
  });
  const student = data?.getStudentById?.student;
  if (!student) return <Loader />;
  const name = `${student?.firstname || ""} ${student?.middlename || ""} ${
    student?.lastname || ""
  }`;
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
          email={"student@email.com"}
          name={name}
          phone={"+923484410838"}
          regNumber={"564321"}
        />
        <ProfileTabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProfileDetailWrapper>
          <ActiveTab tab={activeTab} />
        </ProfileDetailWrapper>
      </GridContainer>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
