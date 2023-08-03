import {
  AppText,
  ImageCarousel,
  Loader,
  NameHeading,
  PageTitleText,
} from "@/components";
import { GridContainer, HrLine } from "@/components/dashboard/styled";
import { ArrowRightBackIcon } from "@/components/dashboard/Svgs";
import {
  CourseCard,
  UniProfileBanner,
} from "@/components/dashboard/University";
import { AdminLayout } from "@/components/layout";
import { GET_UNI_BY_ID } from "@/graphql";
import { Query, QueryGetUniByIdArgs } from "@/graphql/__generatedTypes__";
import { useQuery } from "@apollo/client";
import { Box, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { universityId, program } = router.query as {
    universityId: string;
    program: string;
  };
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
        <Box>
          <NameHeading>About {program}</NameHeading>
          <AppText sx={{ color: "#BBBBC7", width: "90%", marginY: "2rem" }}>
            Our graphic design courses are created with input from industry, to
            help prepare you for work in the real world.
            <br />
            And you learn from the best. Our tutors are talented, passionate and
            have years of experience.
            <br />
            <br />
            They teach you all the creative and technical skills you need to
            thrive. This includes advertising, illustration, print, UX, UI,
            prototyping, studio practice and a range of multimedia skills. You
            hone these skills in our modern facilities that support your
            creativity.
            <br />
            <br />
            If you enjoy being creative and love working collaboratively with
            like-minded people, we have the courses for you!
          </AppText>
          <HrLine />
          <NameHeading my={"2.4rem"}>{program} Courses</NameHeading>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <CourseCard
                sx={{ width: "30%" }}
                key={item}
                avatar={"https://picsum.photos/id/12/100/100"}
                tution={30000}
                applicationFee={1900}
                availableIntake={3}
                type={"1-Year Bachelor's Degree"}
                industry={"Graphic Design"}
                studyOptions={0}
              />
            ))}
          </Box>
        </Box>
      </GridContainer>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
