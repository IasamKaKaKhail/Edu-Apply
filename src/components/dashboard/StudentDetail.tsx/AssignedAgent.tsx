import { PageTitleText } from "@/components/AppText";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { Row } from "../styled";
import { BulletDrop } from "../Svgs";
import PreferenceInfo from "./PreferencesInfo";

const AssignedAgent = () => {
  return (
    <Fragment>
      <Row sx={{ alignSelf: "start", marginBottom: "1.5rem" }}>
        <BulletDrop />
        <PageTitleText sx={{ color: "#111", marginLeft: "0.5rem" }}>
          Agent Detail
        </PageTitleText>
      </Row>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          rowGap: "2.5rem",
          marginLeft: "3rem",
        }}
      >
        <PreferenceInfo field="Assigned Agent Name:" value="Fahadi khan" />

        <PreferenceInfo field="Email:" value="khalidsafi10@gmail.com" />

        <PreferenceInfo
          field="University name:"
          value="Fielding Graduate University"
        />

        <PreferenceInfo field="Company Name: " value="Globle industries" />
      </Box>
    </Fragment>
  );
};

export default AssignedAgent;
