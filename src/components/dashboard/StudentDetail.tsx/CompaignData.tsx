import { PageTitleText } from "@/components/AppText";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { Row } from "../styled";
import { BulletDrop } from "../Svgs";
import PreferenceInfo from "./PreferencesInfo";

const CompaignData = () => {
  return (
    <Fragment>
      <Row sx={{ alignSelf: "start", marginBottom: "1.5rem" }}>
        <BulletDrop />
        <PageTitleText sx={{ color: "#111", marginLeft: "0.5rem" }}>
          Data
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
        <PreferenceInfo field="Lead Id :" value="2514#bcv@114" />
        <PreferenceInfo field="Compaign Id :" value="2514#bcv@114" />
        <PreferenceInfo
          field="Compaign Name :"
          value="International Education"
        />

        <PreferenceInfo field="From Id :" value="#23568" />

        <PreferenceInfo field="From Name :" value="Study Abroad" />
        <PreferenceInfo field="Ad Id :" value="584796321" />
        <PreferenceInfo field="Ad Name :" value="gzhgsh" />
      </Box>
    </Fragment>
  );
};

export default CompaignData;
