import { AppText, PageTitleText, PlaceholderText } from "@/components/AppText";
import Loader from "@/components/Loader";
import { GET_STUDENT_BY_ID } from "@/graphql";
import { Query, QueryGetStudentByIdArgs } from "@/graphql/__generatedTypes__";
import { formatPhone } from "@/utils";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Col, HrLine, Row } from "../styled";
import { BulletDrop } from "../Svgs";

const StudentProfile = () => {
  const router = useRouter();
  const { studentId } = router.query as { studentId: string };
  const { data } = useQuery<Query, QueryGetStudentByIdArgs>(GET_STUDENT_BY_ID, {
    variables: { studentId },
    fetchPolicy: "cache-first",
  });
  const student = data?.getStudentById?.student;
  if (!student) return <Loader />;
  const givenName = `${student.firstname || ""} ${student.middlename || ""} ${
    student.lastname || ""
  }`;
  return (
    <Fragment>
      <Row sx={{ alignSelf: "start", marginBottom: "1.5rem" }}>
        <BulletDrop />
        <PageTitleText sx={{ color: "#111", marginLeft: "0.5rem" }}>
          Personal Information
        </PageTitleText>
      </Row>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          rowGap: "2.5rem",
          marginLeft: "3rem",
        }}
      >
        <Col>
          <PlaceholderText>Given Name :</PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>{givenName}</AppText>
        </Col>

        <Col>
          <PlaceholderText>Preferred language : </PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>{student?.firstLanguage}</AppText>
        </Col>

        <Col>
          <PlaceholderText>Services of Interest :</PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>Insurance</AppText>
        </Col>

        <Col>
          <PlaceholderText>Status :</PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>New Lead</AppText>
        </Col>

        <Col>
          <PlaceholderText>Email ID : </PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>{"studentEmail"}</AppText>
        </Col>

        <Col>
          <PlaceholderText>Contact Number: </PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>
            {formatPhone("03484410838")}
          </AppText>
        </Col>

        <Col>
          <PlaceholderText>Nationality : </PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>{student?.citizenship}</AppText>
        </Col>

        <Col>
          <PlaceholderText>Gender : </PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>{student.gender}</AppText>
        </Col>

        <Col>
          <PlaceholderText>Birth date : </PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>
            {moment(student.dob).format("DD/MM/YYYY")}
          </AppText>
        </Col>

        <Col>
          <PlaceholderText>Country of Interest : </PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>{"England"}</AppText>
        </Col>
        <Col>
          <PlaceholderText>Referral Source : </PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>{"Referral"}</AppText>
        </Col>
      </Box>
      <HrLine sx={{ marginY: "2.5rem" }} />

      <Row sx={{ alignSelf: "start", marginBottom: "1.5rem" }}>
        <BulletDrop />
        <PageTitleText sx={{ color: "#111", marginLeft: "0.5rem" }}>
          Education Information
        </PageTitleText>
      </Row>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          // columnGap: "2.5rem",
          rowGap: "2.5rem",
          marginLeft: "3rem",
        }}
      >
        <Col>
          <PlaceholderText>Country of Education :</PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>
            {student?.countryOfEducation || ""}
          </AppText>
        </Col>

        <Col>
          <PlaceholderText>Highest Leval of Education :</PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>
            {student?.HighestLevelOfEducation || ""}
          </AppText>
        </Col>

        <Col>
          <PlaceholderText>Grading Scheme :</PlaceholderText>
          <AppText sx={{ fontWeight: 500 }}>
            {student?.gradingScheme || ""}
          </AppText>
        </Col>
      </Box>
    </Fragment>
  );
};

export default StudentProfile;
