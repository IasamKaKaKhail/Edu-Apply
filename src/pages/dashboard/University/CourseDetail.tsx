import {
  AppText,
  Heading,
  ImageCarousel,
  NameHeading,
  PageTitleText,
} from "@/components";
import {
  BulletsBlueDot,
  Card,
  GridContainer,
  HrLine,
  Row,
} from "@/components/dashboard/styled";
import {
  ArrowRightBackIcon,
  StudentWithCapIcon,
} from "@/components/dashboard/Svgs";
import { CourseCard } from "@/components/dashboard/University";
import { AdminLayout } from "@/components/layout";
import { Box, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  // const { courseId } = router.query as { courseId: string };
  return (
    <Fragment>
      <GridContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            mb: "2.4rem",
          }}
        >
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

        <ImageCarousel
          images={[
            "https://picsum.photos/id/37/1400/550",
            "https://picsum.photos/id/47/1400/550",
            "https://picsum.photos/id/57/1400/550",
            "https://picsum.photos/id/67/1400/550",
          ]}
        />

        <Row justifyContent={"space-between"} my={"1.8rem"}>
          <Heading>Graphic Design</Heading>
          <Row>
            <StudentWithCapIcon />
            <NameHeading>236589 Students</NameHeading>
          </Row>
        </Row>
        <HrLine sx={{ mb: "2.4rem" }} />
        <Box sx={{ display: "flex", gap: "2.4rem" }}>
          <Card sx={{ flex: 0.777 }}>
            <NameHeading>Overview :</NameHeading>
            <AppText sx={{ color: "#BBBBC7", width: "90%", marginY: "2rem" }}>
              Our graphic design courses are created with input from industry,
              to help prepare you for work in the real world.
              <br />
              And youll learn from the best. Our tutors are talented, passionate
              and have years of experience.
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
            <NameHeading>
              Upon Successfully Completing the Requirments You Recive the Award
              of :
            </NameHeading>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"0.6rem"}
              my={"0.6rem"}
            >
              <BulletsBlueDot sx={{ backgroundColor: "#BBBBC7" }} />
              <AppText sx={{ fontSize: "1.6rem", color: "#BBBBC7" }}>
                4 Years Complete College & Archive Degree
              </AppText>
            </Box>
            <NameHeading mt={"2.4rem"}>About Study Details :</NameHeading>
            <Row mt={"1.4rem"} gap={"1rem"}>
              <NameHeading>Intakes :</NameHeading>
              <AppText sx={{ opacity: 0.8 }}>300</AppText>
            </Row>
          </Card>
          <Card sx={{ flex: 0.333 }}>
            <NameHeading>Related Subjects</NameHeading>
            <Box>
              {[1, 2, 3, 4, 5].map((item) => (
                <CourseCard
                  sx={{ marginY: "1.2rem" }}
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
          </Card>
        </Box>
      </GridContainer>
    </Fragment>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Page;
