import { PageTitleText } from "@/components/AppText";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { Row } from "../styled";
import { BulletDrop } from "../Svgs";
import PreferenceInfo from "./PreferencesInfo";

const StudentPreferances = () => {
  return (
    <Fragment>
      <Row sx={{ alignSelf: "start", marginBottom: "1.5rem" }}>
        <BulletDrop />
        <PageTitleText sx={{ color: "#111", marginLeft: "0.5rem" }}>
          Preferances
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
        <PreferenceInfo field="Intended Area of Study :" value="Design" />
        <PreferenceInfo field="Career Paths :" value="English" />
        <PreferenceInfo field="Intended Intake Comments :" value="18/08/2023" />
        <PreferenceInfo
          field="Courses or Fields Comments :"
          value="Master of Science - Psychology"
        />
        <PreferenceInfo field="Intended Course Level :" value="Study Abroad" />
        <PreferenceInfo
          field="Intended Institution :"
          value="Bournemouth University"
        />
        <PreferenceInfo field="Intended Destination :" value="Canada" />
      </Box>
    </Fragment>
  );
};

export default StudentPreferances;
