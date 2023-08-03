import { AppText, Heading, NameHeading } from "@/components/AppText";
import { Box, styled } from "@mui/material";
import { Col, HrLine, Row } from "../styled";
import {
  BankSvgIcon,
  CampusSvgIcon,
  LocationSvgIcon,
  RankSvgIcon,
  RequirementsSvgIcon,
  StudentSvgIcon,
} from "../Svgs";
export const IconWrapper = styled(Box)(() => ({
  display: "flex",
  width: "6rem",
  height: "6rem",
  borderRadius: "5rem",
  alignItems: "center",
  backgroundColor: "#EDF5FF",
  justifyContent: "center",
}));
const OverviewTab = () => {
  return (
    <Box paddingBottom={"3rem"}>
      <Col p={"2.4rem"} gap={"2.4rem"}>
        <Row sx={{ gap: "2rem" }}>
          <IconWrapper>
            <BankSvgIcon />
          </IconWrapper>
          <Heading>About The University</Heading>
        </Row>
        <AppText
          sx={{ lineHeight: "3rem", color: "#111111CC", marginTop: "1.4rem" }}
        >
          Cheshire College South & West offers exciting opportunities for their
          11,000 learners and 1,000 Apprentices to access high-quality teaching
          and learning at their modern Campuses in Crewe, Ellesmere Port and
          Chester. They aim to provide their learners with the skills,
          experience and qualifications that will prepare them for their future
          career or higher-level study at the College or university. They
          encourage learners to become confident individuals who will make
          valuable contributions to businesses and the local economy in their
          future careers.
          <br />
          <br />
          All the Campuses provide a safe, happy and innovative learning
          experience that will ensure students achieve their full potential.
          Students will have access to world-class inspirational facilities
          which are the result of a £140m investment in the latest technology
          and real work environments.
          <br />
          Campus: Utilize all of Cheshire College sports facilities to stay fit,
          get pampered in the salons, visit state-of-the-art theatres or even
          fine dine in their award-winning restaurants. Get discounted rates in
          all of the Community College facilities.
          <br />
          <br />
          Links with Businesses: The college prides themselves on their strong
          links with local businesses of all sizes who benefit from tailored
          training delivered in the workplace or at College Campuses, and from
          their provision of a wide range of Apprenticeships such as
          Accountancy, Catering, Construction, Engineering and Dental Nursing.
          They work with many major local employers across the regions such
          Bentley, Brownlow Furniture, Ecolab, Vauxhall Motors, Scottish Power,
          Unilever, Brunning and Price and National Grid.
        </AppText>
        <HrLine />
      </Col>
      <Box sx={{ display: "flex" }}>
        <Col sx={{ flex: 0.4, paddingLeft: "2.4rem" }}>
          <Box>
            <Row sx={{ gap: "2rem" }}>
              <IconWrapper>
                <RankSvgIcon />
              </IconWrapper>
              <Heading>Rankings</Heading>
            </Row>
            <Col mt={"2.4rem"} gap={"1rem"}>
              <NameHeading>601-650th</NameHeading>
              <AppText sx={{ opacity: 0.8 }}>QS Rankings</AppText>
            </Col>
            <Col mt={"2.4rem"} gap={"1rem"}>
              <NameHeading>601-850th</NameHeading>
              <AppText sx={{ opacity: 0.8 }}>
                Times Higher Education Rankings
              </AppText>
            </Col>
            <Col mt={"2.4rem"} gap={"1rem"}>
              <NameHeading>26th</NameHeading>
              <AppText sx={{ opacity: 0.8 }}>
                Guardian Academic Rankings
              </AppText>
            </Col>
          </Box>
          <HrLine sx={{ width: "90%", marginY: "2.4rem" }} />
          <Box>
            <Row sx={{ gap: "2rem" }}>
              <IconWrapper>
                <RequirementsSvgIcon />
              </IconWrapper>
              <Heading>Requirement</Heading>
            </Row>
            <Col mt={"2.4rem"} gap={"1rem"}>
              <AppText sx={{ opacity: 0.8 }}>
                1. Compulsory pass on the 80% mark in class 12.
              </AppText>
              <AppText sx={{ opacity: 0.8 }}>
                2. Out of contury student requirement in IELTS exam score 8
                bonds.{" "}
              </AppText>
            </Col>
          </Box>
          <HrLine sx={{ width: "90%", marginY: "2.4rem" }} />
          <Box>
            <Row sx={{ gap: "2rem" }}>
              <IconWrapper>
                <CampusSvgIcon />
              </IconWrapper>
              <Heading>Campus Life</Heading>
            </Row>
            <Col mt={"2.4rem"}>
              <AppText sx={{ opacity: 0.8, width: "85%" }}>
                Coventry University offer a diverse range of opportunities for
                sport and athletics, as well as work opportunities. Coventry has
                a strong reputation for it is nightlife, and students benefit
                from social opportunities and community events as well.
              </AppText>
            </Col>
          </Box>
          <HrLine sx={{ width: "90%", marginY: "2.4rem" }} />
          <Box>
            <Row sx={{ gap: "2rem" }}>
              <IconWrapper>
                <StudentSvgIcon />
              </IconWrapper>
              <Heading>Alumni</Heading>
            </Row>
            <Col mt={"2.4rem"} gap={"1rem"}>
              <AppText sx={{ opacity: 0.8 }}>
                {
                  "Abdulaziz bin Turki bin Talal Al Saud (businessman), Nira Chamberlain (mathematician), Lanre de Silva (designer), Mazlan Ismail (businessman)"
                }
              </AppText>
            </Col>
          </Box>
        </Col>
        <Box sx={{ flex: 0.6 }}>
          <Row sx={{ gap: "2rem" }}>
            <IconWrapper>
              <LocationSvgIcon />
            </IconWrapper>
            <Heading>Location</Heading>
          </Row>
          <Box
            height={"80rem"}
            bgcolor={"green"}
            display={"flex"}
            mt={"2.4rem"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <AppText>maps</AppText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewTab;
